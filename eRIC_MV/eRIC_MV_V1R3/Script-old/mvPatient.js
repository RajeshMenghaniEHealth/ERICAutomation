var Data = require("Data");
//Requires
var mvNavigation = require("mvNavigation");
var mvObjects = require("Base_Objects");
var mvVerify = require("mvVerify");

// Adding a line in Patient for checking GIt activity

function clearBedForPatient(bedNumber) {

	vProcess = Sys.Process("iMDSoft.Metavision");

	// Open Worklist
	mvNavigation.selectMenuOption("Menu", "Select a Patient");
  
	// Wait for Worklist screen to appear
	mvObjects.waitForObject(vProcess, "WPFObject(\"TextBlock\", \"Last refresh\", 1)", 120);

	// Find a bed that is empty (or close Bed 02)
  var patientsGrid = vProcess.Find("Name", "WPFObject(\"patientsGrid\")", 1000); 
  
  var RowCount = aqObject.GetPropertyValue(patientsGrid, "wRowCount");
  Log.Message(RowCount)
  for (i = 1; i <= RowCount; i++) {
   Log.Message(i+ " space "+ RowCount )
  var patGridRow = patientsGrid.FindChild("Name", "WPFObject(\"GridRow\", \"\","+i+")", 1000)
   
  var PatientListObject = patGridRow.FindChild("Name", "WPFObject(\"BandedViewContentSelector\", \"\", 1)", 1000); 
  
	var admittedPatientList = PatientListObject.FindChild("Name", "WPFObject(\"GridCellContentPresenter\", \"\", 1)", 1000);  
	var patientListDetails = aqObject.GetPropertyValue(admittedPatientList, "ToolTip");
	//var freePatientBed = getEmptyBedFromAdmittedPatientList();  
	Log.Message("Patient Bed Details: "+ patientListDetails);
  
	if (aqString.Contains(patientListDetails, bedNumber) != -1) {
		admittedPatientList.ClickR();
		mvObjects.buttonClick(vProcess, "Text", "Patient File");
  
		iMDSoft_Metavision = Aliases.iMDSoft_Metavision;
		frmPatientRegistration = iMDSoft_Metavision.frmPatientRegistration;
		// Enter the Status
		mvObjects.ImdListBoxSelection("WinFormsObject(\"cboStatuses\")", "Released");

		frmPatientRegistration.WinFormsObject("picButtonsContainer").WinFormsObject("cmdOK").Click()
    if (iMDSoft_Metavision.ImdFormBase.WinFormsObject("Message").Exists)
    {
    iMDSoft_Metavision.ImdFormBase.WinFormsObject("Buttons").WinFormsObject("No").Click();
    }
    
    
    Log.Message("Patient Bed Details is Released "+ patientListDetails);
    break;
    
	}
  
}
    
	// Close Worklist
	control = vProcess.Find("ToolTip", "Close", 1000);
	control.click();
}

function registerPatient(bedNumber, patientDetails) {

	vProcess = Sys.Process("iMDSoft.Metavision");

	// Open Patient Registration
	mvNavigation.selectMenuOption("Menu", "Emergency Patient Registration");

	// Enter Patient identifier
	var newPatientMRN = generateRandomMRN(10);
	patientDetails.patientID = newPatientMRN;
	Log.Message("New Patient MRN = " + newPatientMRN);
	mvObjects.enterEditText(vProcess, "WinFormsObject(\"txtMRNumber\")", newPatientMRN);
  
	// Visit ID WinFormsObject("cboSocialSecurity")
	var newPatientVisitID = generateRandomMRN(10);
	mvObjects.enterEditText(vProcess, "WinFormsObject(\"cboSocialSecurity\")", newPatientVisitID);
  
	// first name WinFormsObject("txtFirstName")
	var randomString = generateRandomMRN(5);
	var firstName = "Test" + randomString;
	patientDetails.firstName = firstName;
	mvObjects.enterEditText(vProcess, "WinFormsObject(\"txtFirstName\")", firstName);
  
	// last name WinFormsObject("txtLastName")
	var lastName = "TestLast" + randomString;
	patientDetails.lastName = lastName;
	mvObjects.enterEditText(vProcess, "WinFormsObject(\"txtLastName\")", lastName);
  
	// Enter the Status
	mvObjects.ImdListBoxSelection("WinFormsObject(\"cboStatuses\")", "Admitted");
	aqUtils.Delay(500);
  
	// Select BedfreePatientBed
	mvObjects.ImdListBoxSelection("WinFormsObject(\"cboBed\")", bedNumber);
	aqUtils.Delay(500);
  
	// comments WinFormsObject("txtComments")
	mvObjects.enterEditText(vProcess, "WinFormsObject(\"txtComments\")", "Patient comment for testing. " + randomString);
  
	// Change the status and from date to be the same so can save..
	var statusValueObject = vProcess.Find("Name", "WinFormsObject(\"dtpStatusFromTime\")", 1000);
	var fromValueObject = vProcess.Find("Name", "WinFormsObject(\"dtpLocationFromTime\")", 1000);    

	statusValueText = aqObject.GetPropertyValue(statusValueObject.Value, "OleValue");
	admitTime = aqConvert.DateTimeToFormatStr(statusValueText, "%d/%m/%Y %H:%M");
	patientDetails.admissionTime = admitTime;
	fromValueResult = aqObject.SetPropertyValue(fromValueObject, "Value", statusValueText);
	if (fromValueResult) {
		Log.Checkpoint("Patient File From Date set to Status Date.");
	} else {
		Log.Error("Patient File From Date not set to Status Date")
	}
  
	// Save Patient
	mvObjects.buttonClick(vProcess, "Name", "WinFormsObject(\"cmdOK\")");
	
	// Wait for screen to appear
	mvObjects.waitForObjectNotVisible(vProcess, "WinFormsObject(\"FormCaption\")", 120);
	//aqUtils.Delay(10000);
  
	// Check patient selected as current is loaded
	checkPatientFileForLoadedPatient(newPatientMRN, "Test" + randomString, "TestLast" + randomString);
}

function checkPatientFileForLoadedPatient(expectedMRN, expectedFirst, expectedLast) {
  
	vProcess = Sys.Process("iMDSoft.Metavision");
  
	// Open the Patient file from menu 
	mvNavigation.selectMenuOption("Menu", "Patient File");
	mvObjects.waitForObject(vProcess, "WinFormsObject(\"FormCaption\")", 30);
	patientListFormObject = vProcess.Find("Name", "WinFormsObject(\"frmPatientRegistration\")");
  
	screenMRNObject = vProcess.Find("Name", "WinFormsObject(\"txtMRNumber\")", 100); 
	// Find Patient Number
	screenMRNValue =  aqObject.GetPropertyValue(screenMRNObject, "Text");
	if (aqString.Compare(screenMRNValue, expectedMRN, false) == 0) {
		Log.Checkpoint("Found expected value "+ expectedMRN)
	} else {
		Log.Error("Expected value, "+ expectedMRN +", not found. Found: "+ screenMRNValue)
	}
  
	// Find First Name
	screenFirstNameObject = vProcess.Find("Name", "WinFormsObject(\"txtFirstName\")", 100);
	screenFirstNameValue =  aqObject.GetPropertyValue(screenFirstNameObject, "Text");
	if (aqString.Compare(screenFirstNameValue, expectedFirst, false) == 0) {
		Log.Checkpoint("Found expected value"+ expectedFirst)
	} else {
		Log.Error("Expected value, "+ expectedFirst +", not found. Found: "+ screenFirstNameObject)
	}
    
	// Find Last Name
	screenLastNameObject = vProcess.Find("Name", "WinFormsObject(\"txtLastName\")", 100);
	screenLastNameValue =  aqObject.GetPropertyValue(screenLastNameObject, "Text");
	if (aqString.Compare(screenLastNameValue, expectedLast, false) == 0) {
		Log.Checkpoint("Found expected value "+ expectedLast)
	} else {
		Log.Error("Expected value, "+ expectedLast +", not found. Found: "+ screenLastNameObject)
	}
  
	mvObjects.buttonClick(vProcess, "Name", "WinFormsObject(\"CmdCancel\")");  
  
} // checkPatientFileForLoadedPatient

function generateRandomMRN(vLength){

	var generatedNumber = "";
	var tempNumber;
	var tempString = "";
	for (i = 0; i < vLength; i++) { 
		tempNumber = Math.random() * 10 + 1;
		tempString = Math.round(tempNumber).toString()
		generatedNumber = generatedNumber + tempString;
	} // for
  
	return generatedNumber
	
} // generateRandomMRN

function enterPatientDemographics(patientDetails) {

	vProcess = Sys.Process("iMDSoft.Metavision");
  
	// Open the Patient demographics from menu 
	mvNavigation.selectMenuOption("Menu", "Patient Demographics");
 
	// Wait for screen to appear
	mvObjects.waitForObject(vProcess, "WPFObject(\"capXP\")", 120);
	// ClrClassName - ImdTextBox - ImdComboBox - ImdDateTimePicker
 
	// ** Fill in the Patient details
	enterPatientDemographicsFormData(patientDetails);
  
	// Get the save time value
	var timeSavedValue = mvObjects.getObjectProperty(vProcess, "Name", "WPFObject(\"mvtFormTime\")", "Value"); 
	timeSavedValue = aqString.Replace(timeSavedValue, ":00", "", false);
	timeSavedValue = aqString.Replace(timeSavedValue, "0", "", false);
	Log.Message("PatientDemographics Saved Time: "+ timeSavedValue);
  
	// save the form data
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"cmdApply\")");

	// wait for the form to save.. maybe this object if below don't work -> WPFObject("sessionscontrol")  
	mvObjects.waitForObject(vProcess, "WPFObject(\"cmdNewSessionText\")", 120);
  
	// Click Refresh
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"cmdRefresh\")"); 
	// to do - check values..
  
	// close the form 
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"cmdCancel\")");
	mvObjects.waitForObjectNotVisible(vProcess, "WPFObject(\"cmdCancel\")", 120);
}

function enterPatientDemographicsFormData(patientDetails) {

	Log.Message("*** enter patient demographics form data ***");
	
	// Patient Details tab
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"TextBlock\", \"Patient Details\", 1)");
	tabUpObject = vProcess.Find("Name", "WPFObject(\"cmdTabUp\")", 120);
	//tabUpObject.click();
	//randomText_ImdTextBox("WPFObject(\"PicTabsGrid\")");
	//tabUpObject.click();
	
	// Date of birth & Gender
	dobDay = aqString.substring(patientDetails.dob, 0, 2);
	dobmonth = aqString.substring(patientDetails.dob, 3, 2);
	dobyear = aqString.substring(patientDetails.dob, 6, 4);
	mvObjects.enterImdDateTimePicker(vProcess, "WPFObject(\"dtpDate_1\")", dobDay, dobmonth, dobyear, "04", "45")
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_1\")", patientDetails.gender);
	// ******* Add other combo boxes

	// Contacts tab
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"TextBlock\", \"Contacts\", 1)");
	tabUpObject.click();
	//randomText_ImdTextBox("WPFObject(\"PicTabsGrid\")");
	// ******* Add combo boxes  
  
	// Skip Pas Contacts, read only
  
	// GP and Carers tab
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"TextBlock\", \"GP and Carers\", 1)");
	tabUpObject.click();    
	//randomText_ImdTextBox("WPFObject(\"PicTabsGrid\")");
  
	// Medical Officers tab
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"TextBlock\", \"Medical Officers\", 1)"); 
	tabUpObject.click();   
	//randomText_ImdTextBox("WPFObject(\"PicTabsGrid\")");
  
} // enterPatientDemographicsFormData

function randomText_ImdTextBox(targetSearchObject) {
  
  vProcess = Sys.Process("iMDSoft.Metavision");
  
  PropArray = new Array("Name", "VisibleOnScreen");
  ValuesArray = new Array("WPFObject(\"picTab_*\")", true);
  vAdmissionSummaryForm = vProcess.Find(PropArray, ValuesArray, 120);
  //vAdmissionSummaryForm = vProcess.Find("Name", targetSearchObject, 120);
  PropArray = new Array("ClrClassName", "Visible");
  ValuesArray = new Array("ImdTextBox", true);
  //WPFObject(\"MainGrid\")  WPFObject(\"ucFormBuilder_FBForm\")
  allFormTextEdits = vAdmissionSummaryForm.FindAll(PropArray, ValuesArray, 10);
  allFormTextEdits = (new VBArray(allFormTextEdits)).toArray();
  
  // Make sure at top of page
  tabUpObject = vProcess.Find("Name", "WPFObject(\"cmdTabUp\")", 120);
  tabUpObject.click();
  
  // Enter random values in each edit field
  breakFor = false;
  for (i = allFormTextEdits.length-1; i > 0; i--) {
    Log.Message(i);
    loopCount = 0;
    // Check if visible on screen
    isVisible = aqObject.GetPropertyValue(allFormTextEdits[i], "VisibleOnScreen");
    if (!isVisible) {
      // click tab down button
      //WPFObject("mvTabScroll")
      //tabDownObject = vProcess.Find("Name", "WPFObject(\"cmdTabDoun\")", 120);
      //tabDownObject.click();
      tabScrollObject = vProcess.Find("Name", "WPFObject(\"mvTabScroll\")", 120);
      while (!isVisible) {
        
        clickArea = aqObject.GetPropertyValue(tabScrollObject, "Height");
        tabScrollObject.Click(1, clickArea-10);
        
        isVisible = aqObject.GetPropertyValue(allFormTextEdits[i], "VisibleOnScreen");
        if (!isVisible && loopCount > 20) {
          isVisible = true;
          breakFor = true;
        }
        //aqUtils.Delay(1000);
        loopCount++;
      } // while
      
      if (breakFor) {
        Log.Message("Breaking out of IS VISIBLE Loop, searched item not visible for 20 iterations of scroll down.");
        break;
      }
      aqUtils.Delay(500);      
    }
    
    allFormTextEdits[i].click();
    allFormTextEdits[i].Keys("[Home]![End][Del]"+ makeid());
  } // for
  aqUtils.Delay(500);

} // randomText_ImdTextBox

function makeid() {

    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 10; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
	
} // makeid

function enterAdmissionSummary(patientadmission) {

	vProcess = Sys.Process("iMDSoft.Metavision");

	// Open Patient Registration
	mvNavigation.selectMenuOption("Medical", "Admission Summary");
	mvObjects.waitForObject(vProcess, "WPFObject(\"TextBlock\", \"* - Admission Summary (Adult) : New Session\", 1)", 120);
 
	// enter Admission details
	reasonForAdmission(patientadmission);
	pastMedicalHistory(patientadmission);
	admissionFindings(patientadmission);
	enterASICS(patientadmission);
	
	mvNavigation.saveForm("Save");
	aqUtils.Delay(500); // Handle redisplay of form
	sessionTime = mvNavigation.getformTime("Admission Summary");
	 
	mvNavigation.saveForm("Refresh");
	mvNavigation.saveForm("Close");
	
}

function reasonForAdmission(patientadmission) {

	vProcess = Sys.Process("iMDSoft.Metavision");
  
	// Navigate to Reason for Admission tab
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"TextBlock\", \"Reason for Admission\", 1)"); 
	aqUtils.Delay(1000);

	// Enter fields
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_1\")", patientadmission.PatientType)
	mvObjects.enterEditText(vProcess, "WPFObject(\"txtFreeText_1\")", "[Home]![End][Del]"+patientadmission.ReasonAdmission);
 	aqUtils.Delay(500);

	// Open Allergies info and close without entry (need to to this in order to save Admission Summary)
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"cmdAction_4\")");
	mvObjects.buttonClick(vProcess, "Name", "WinFormsObject(\"cmdSave\")");
	
	// TODO add code for panel buttons 

}

function allergiesIntolerances(patientAllergies) {

	vProcess = Sys.Process("iMDSoft.Metavision");

	// Open Allergies form
	mvNavigation.selectMenuOption("Medical", "Allergies/ADR");
	mvObjects.waitForObject(vProcess, "WinFormsObject(\"frmPatientAllergies\")", 20);
	
	// enter No allergies and close warning dialog
	if (patientAllergies.Allergies == "No") {
		mvObjects.buttonClick(vProcess, "Name", "WinFormsObject(\"chkNoAllergies\")");
		// TODO verify dialog text
		
		mvObjects.buttonClick(vProcess, "Name", "WinFormsObject(\"OK\")");
		  
	} else {
		// TODO add allergies values via table and subform
	}
	
	// Save info
	mvObjects.buttonClick(vProcess, "Name", "WinFormsObject(\"cmdSave\")");

}

function pastMedicalHistory(patientadmission) {

	vProcess = Sys.Process("iMDSoft.Metavision");
  
	// Navigate to Past Medical History tab
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"TextBlock\", \"Past Medical History\", 1)"); 
	aqUtils.Delay(1000);
  
	// Enter Past Medical History details
	mvObjects.enterEditText(vProcess, "WPFObject(\"txtFreeText_2\")", "[Home]![End][Del]"+patientadmission.PastMedHistory);
	mvObjects.enterEditText(vProcess, "WPFObject(\"txtFreeText_3\")", "[Home]![End][Del]"+patientadmission.FamilyHistory);

	// Enter smoking status
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"cmdTabDoun\")");
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_2\")", patientadmission.SmokingStatus);
 	aqUtils.Delay(500);
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"cmdTabUp\")");

}

function admissionFindings(patientadmission) {

	vProcess = Sys.Process("iMDSoft.Metavision");
  
	// Navigate to Reason for Admission tab
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"TextBlock\", \"Admission Findings and Plan\", 1)"); 
	aqUtils.Delay(1000);

	// Enter Findings and Plan fields
	mvObjects.enterEditText(vProcess, "WPFObject(\"txtFreeText_4\")", "[Home]![End][Del]"+patientadmission.Findings);
	mvObjects.enterEditText(vProcess, "WPFObject(\"txtFreeText_5\")", "[Home]![End][Del]"+patientadmission.AdmissionPlan);

	// Alerts and Medical Officer
	//buttonClick(vProcess, "Name", "WPFObject(\"cmdTabDoun\")");
	mvObjects.scrollUntilVisible("WPFObject(\"cboTextComboMulti_1\")");
	mvObjects.selectCheckComboItem(vProcess, "WPFObject(\"cboTextComboMulti_2\")", patientadmission.Alerts);
	mvObjects.selectCheckComboItem(vProcess, "WPFObject(\"cboTextComboMulti_1\")", patientadmission.AlertseMR);
	//WPFObject("ImdCheckedComboBoxItem", "", 1)
	//ClrClassName - ImdCheckedComboBoxItem WPFControlText - None
	mvObjects.enterEditText(vProcess, "WPFObject(\"txtFreeText_6\")", "[Home]![End][Del]"+patientadmission.ExaminingMO);
 
	// Reset back to top of form
	//aqUtils.Delay(500);
	//mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"cmdTabUp\")");
 
	// TODO add code for panel buttons 
	
}

function enterASICS(patientadmission) {

	vProcess = Sys.Process("iMDSoft.Metavision");
  
	// Navigate to Reason for Admission tab
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"TextBlock\", \"ANZICS\", 1)"); 
	aqUtils.Delay(1000);

	// Enter fields
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_3\")", patientadmission.HospAdmissionSource);
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_4\")", patientadmission.TransferMode);
	mvObjects.enterEditText(vProcess, "WPFObject(\"txtFreeText_7\")", "[Home]![End][Del]"+patientadmission.TranferFrom);
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"chkTrue_1\")");
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_5\")", patientadmission.UnitAdmissionSource);
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_7\")", patientadmission.CareType);
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_8\")", patientadmission.ElectiveAdmission);
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_9\")", patientadmission.ERAdmission);
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_10\")", patientadmission.TreatmentGoals);
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_11\")", patientadmission.PregnancyStatus);
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_12\")", patientadmission.RespArrest);
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_13\")", patientadmission.CardialArrest);
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_14\")", patientadmission.Prophylaxis);
    mvObjects.scrollUntilVisible("WPFObject(\"cboTextCombo_6\")");
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_6\")", patientadmission.Diabetes);

	// Page Down so lists can be seen
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"cmdTabDoun\")");
  
	// list - easier to find the object then try and build a list type function as custom list
//	PropArray = new Array("ClrClassName", "WPFControlText");
//	ValuesArray = new Array("ListBoxItem", "Respiratory");
//	mvObjects.buttonClick(vProcess, PropArray, ValuesArray);
 	mvObjects.selectListItem(patientadmission.ApacheII);

//	PropArray = new Array("ClrClassName", "WPFControlText");
//	ValuesArray = new Array("ListBoxItem", "Cirrhosis");
//	mvObjects.buttonClick(vProcess, PropArray, ValuesArray);
 	mvObjects.selectListItem(patientadmission.ApacheIII);
	// TODO add code for panel buttons 
	
}

function enterHeightWeight(patientWeight) {

	vProcess = Sys.Process("iMDSoft.Metavision");

	// Open Patient Registration
	mvNavigation.selectMenuOption("Nursing", "Weights and Dimensions");
	mvObjects.waitForObject(vProcess, "WPFObject(\"TextBlock\", \"* - Patient Weights and Dimensions (Adult) : New Session\", 1)", 1);
 
	// Enter Height and Weights (Latest, Admission)
	mvObjects.enterEditText(vProcess, "WPFObject(\"txtNumeric_1\")", "[Home]![End][Del]"+patientWeight.Height);
	mvObjects.enterEditText(vProcess, "WPFObject(\"txtNumeric_2\")", "[Home]![End][Del]"+patientWeight.LatestWeight);
	mvObjects.enterEditText(vProcess, "WPFObject(\"txtNumeric_3\")", "[Home]![End][Del]"+patientWeight.AdmissionWeight);
	// get Latest weight Date
	//WPFObject("txtFormula_1")
	
	// verify BMI, BSA and Ideal weight
	mvVerify.verifyObjectProperty(vProcess, "Name", "WPFObject(\"txtFreeText_1\")", "Text", patientWeight.BMI, "BMI")
	mvVerify.verifyObjectProperty(vProcess, "Name", "WPFObject(\"txtFreeText_2\")", "Text", patientWeight.BSA, "BSA")
	mvVerify.verifyObjectProperty(vProcess, "Name", "WPFObject(\"txtNumeric_4\")", "Value", patientWeight.IdealWeight, "Ideal Weight")
	mvVerify.verifyObjectProperty(vProcess, "Name", "WPFObject(\"txtNumeric_5\")", "Value", patientWeight.AdjustedWeight, "Adjusted Weight")
	
	// Enter Drug weight and check warming popup
	mvObjects.enterEditText(vProcess, "WPFObject(\"txtNumeric_6\")", "[Home]![End][Del]"+patientWeight.DrugWeight+"[Tab]");
 	//mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"txtNumeric_1\")");  
	// TODO verify dialog text
		
    retcode = vProcess.Find("Name", "WinFormsObject(\"OK\")", 1000);
    if (retcode.exists) {
        mvObjects.buttonClick(vProcess, "Name", "WinFormsObject(\"OK\")");
    }
	mvNavigation.saveForm("Save");
	aqUtils.Delay(500); // Handle redisplay of form
	mvNavigation.saveForm("Refresh");
	mvNavigation.saveForm("Close");
 
}

function verifyCaptionBar(layout, bed, patientDetails) {

	vProcess = Sys.Process("iMDSoft.Metavision");
	
	// find Caption bar object
	vContentControl5 = vProcess.Find("Name", "WPFObject(\"captionItemsGrid\", \"\")", 1000);
	
	verifyCaptionElement("1", layout, "Layout");
	verifyCaptionElement("2", bed, "Bed");
	verifyCaptionElement("3", patientDetails.patientID, "MRN");
	
	// Combine First and last name
	var patientName = patientDetails.firstName + " " + patientDetails.lastName
	verifyCaptionElement("4", patientName, "Patient Name");
	
	verifyCaptionElement("5", patientDetails.allergies, "Allergies");
	verifyCaptionElement("6", patientDetails.gender, "Patient Gender");
	verifyCaptionElement("7", patientDetails.dob, "Patient DOB");
	
	// Update admission time to caption format
	var admission = patientDetails.admissionTime + " ."
	verifyCaptionElement("8", admission, "Admission Time");
}

function verifyCaptionElement(position, expectedValue, logField) {

	// Check Element in Caption Bar
	vGrid = vContentControl5.Find("Name", "WPFObject(\"ContentPresenter\", \"\", " + position + ")", 1000);
	vStatusBarText = mvObjects.getObjectProperty(vGrid, "Name", "WPFObject(\"txtParamValue\")", "Text");
	if (aqString.Compare(vStatusBarText, expectedValue, false) == 0) {
	   Log.Checkpoint(logField + " found: " + expectedValue);
	} else {
	   Log.Error(logField + " expected: " + expectedValue + " Found value: " + vStatusBarText)
	}
}

module.exports.registerPatient = registerPatient;
module.exports.checkPatientFileForLoadedPatient = checkPatientFileForLoadedPatient;
module.exports.generateRandomMRN = generateRandomMRN;
module.exports.enterPatientDemographics = enterPatientDemographics;
module.exports.randomText_ImdTextBox = randomText_ImdTextBox;
module.exports.verifyCaptionBar = verifyCaptionBar;
module.exports.clearBedForPatient = clearBedForPatient;
module.exports.enterAdmissionSummary = enterAdmissionSummary;
module.exports.allergiesIntolerances = allergiesIntolerances;
module.exports.enterHeightWeight = enterHeightWeight;