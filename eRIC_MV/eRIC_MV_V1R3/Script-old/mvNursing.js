var Data = require("Data");
var mvNavigation = require("mvNavigation");
var mvObjects = require("Base_Objects");
var mvVerify = require("mvVerify");
var mvPatient = require("mvPatient");

function addOrderable(patientOrderable) {

	vProcess = Sys.Process("iMDSoft.Metavision");

	// Allow orderable to populate
	searchFrameObject = vProcess.Find("Name", "WPFObject(\"FindOrderableView\"), \"\", 1)", 500);
	mvObjects.waitForObjectProperty(searchFrameObject, "WPFObject(\"FindComboBoxEdit\")", "OleValue", patientOrderable.Name, 10);
	
	// Route
	searchFrameObject = vProcess.Find("Name", "WPFObject(\"Order_Form_Group\")", 500);
	searchObject = searchFrameObject.Find("Name", "WPFObject(\"LayoutItem\", \"\", 2)", 500);
	mvObjects.selectComboItem_MR(searchObject, "WPFObject(\"ComboBoxEdit\", \"\", 1)", patientOrderable.Route);
  
	// Comments
	searchFrameObject = vProcess.Find("Name", "WPFObject(\"Frequency_Group\")", 500);
	searchObject = searchFrameObject.Find("Name", "WPFObject(\"LayoutItem\", \"\", 1)", 500);
	mvObjects.enterEditText(searchObject, "WPFObject(\"TextEdit\", \"\", 1)", patientOrderable.Comments);
  
	// Duration
	searchFrameObject = vProcess.Find("Name", "WPFObject(\"Process_Style_Group\")", 500);
	searchObject = searchFrameObject.Find("Name", "WPFObject(\"LayoutItem\", \"\", 3)", 500);
	mvObjects.enterEditText(searchObject, "WPFObject(\"SpinEdit\", \"\", 1)", patientOrderable.Duration);
}

function createLine(patientLDT, patientOrderable) {

	vProcess = Sys.Process("iMDSoft.Metavision");

	// Open particular Line
	mvNavigation.selectMenuOption("Nursing", "Input / Output Devices and Observations", patientLDT.IOType, patientLDT.LineType, patientLDT.LineSubType, patientLDT.LineName);
	mvObjects.waitForObject(vProcess, "WPFObject(\"Button\", \"Prepare & Initiate\", 1)", 120);
 	//aqUtils.Delay(1000); 

	mvNursing.addOrderable(patientOrderable);
	
	// TODO - Need to populate Insertion/Removal forms
  
	// Click Validate
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"Button\", \"Validate\", 1)");
	mvObjects.waitForObjectNotVisible(vProcess, "WPFObject(\"Button\", \"Validate\", 1)", 120)
  
	// open I / O Observations tab
	mvNavigation.selectMenuTab("Input / Output");
  
	foundText = mvObjects.findToolTipOnView(10, 30, "WPFObject(\"TChartControl\")", 1, patientOrderable.Name, 50, "y")
	if (foundText) {
		Log.Checkpoint(patientOrderable.Name + " found.");
	} else {
		Log.Error("Did not find the text, " + patientOrderable.Name);
	}
}

function createDrain(patientLDT, patientOrderable) {

	vProcess = Sys.Process("iMDSoft.Metavision");

	// Open particular Drain
	mvNavigation.selectMenuOption("Nursing", "Input / Output Devices and Observations", patientLDT.IOType, patientLDT.LineType, patientLDT.LineSubType);
	mvObjects.waitForObject(vProcess, "WPFObject(\"Button\", \"Prepare & Initiate\", 1)", 120);
 	//aqUtils.Delay(1000);
	 
	mvNursing.addOrderable(patientOrderable);
	
	// TODO - Need to populate Insertion/Removal forms
  
	// Click Validate
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"Button\", \"Validate\", 1)");

	// Wait for the device form to appear
	mvObjects.waitForObject(vProcess, "WPFObject(\"lblFrameName_1\")", 120);
  
	// For Ileal Conduit
	// Enter the data one the device form
	mvObjects.enterEditText(vProcess, "WPFObject(\"txtNumeric_1\")", "[Home]![End][Del]2");
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_1\")", "Normal urine");
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_2\")", "Pink");

	siteConditionBase = vProcess.Find("Name", "WPFObject(\"picTextList_1\")", 200);
	siteConditionItem = siteConditionBase.Find("Name", "WPFObject(\"ListBoxItem\", \"\", 1)", 200);
	siteConditionItem.click();

	mvObjects.scrollUntilVisible("WPFObject(\"picTextList_2\")");
	siteConditionBase = vProcess.Find("Name", "WPFObject(\"picTextList_2\")", 200);
	siteConditionItem = siteConditionBase.Find("Name", "WPFObject(\"ListBoxItem\", \"\", 1)", 200);
	siteConditionItem.click();
  
	mvObjects.scrollUntilVisible("WPFObject(\"picTextList_3\")");
	siteConditionBase = vProcess.Find("Name", "WPFObject(\"picTextList_3\")", 200);
	siteConditionItem = siteConditionBase.Find("Name", "WPFObject(\"ListBoxItem\", \"\", 1)", 200);
	siteConditionItem.click();
   
	// Click on save and close
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"cmdSave\")");
	mvObjects.waitForObjectNotVisible(vProcess, "WPFObject(\"Button\", \"Validate\", 1)", 120)
  
	// open I/O Observations tab
	mvNavigation.selectMenuTab("Input / Output");
  
	foundText = mvObjects.findToolTipOnView(10, 30, "WPFObject(\"TChartControl\")", 1, patientOrderable.Name, 50, "y")
	if (foundText) {
		Log.Message(patientOrderable.Name + "Found");
	} else {
		Log.Error("Did not find the text, " + patientOrderable.Name);
	}
}

function createTubes(patientLDT, patientOrderable) {

	vProcess = Sys.Process("iMDSoft.Metavision");

	// Open particular Tube
	mvNavigation.selectMenuOption("Nursing", "Input / Output Devices and Observations", patientLDT.IOType, patientLDT.LineType, patientLDT.LineSubType);
	mvObjects.waitForObject(vProcess, "WPFObject(\"Button\", \"Prepare & Initiate\", 1)", 120);
 	//aqUtils.Delay(1000); 
	
	mvNursing.addOrderable(patientOrderable);
	
	// Click Validate
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"Button\", \"Validate\", 1)");

	// Wait for the device form to appear
	mvObjects.waitForObject(vProcess, "WPFObject(\"lblFrameName_1\")", 120);
  
	// Enter the data one the device form
	textListArea1 = vProcess.Find("Name", "WPFObject(\"lstTextList_1\")", 500);
	gastricObject = textListArea1.Find("Name", "WPFObject(\"ListBoxItem\", \"\", 1)", 50);
	gastricObject.Click();
  
	textListArea1 = vProcess.Find("Name", "WPFObject(\"lstTextList_2\")", 500);
	gastricObject = textListArea1.Find("Name", "WPFObject(\"ListBoxItem\", \"\", 1)", 50);
	gastricObject.Click();

	// Size
	textListArea1 = vProcess.Find("Name", "WPFObject(\"picFrameIn_1\")", 500);
	sizeObject = textListArea1.Find("Name", "WPFObject(\"txtNumeric_1\")", 50);
	sizeObject.Keys("2");
  
	// Position at teeth/nare
	sizeObject = textListArea1.Find("Name", "WPFObject(\"txtNumeric_2\")", 50);
	sizeObject.Keys("2");
  
	// Gastric Balloon inflation volume
	sizeObject = textListArea1.Find("Name", "WPFObject(\"txtNumeric_3\")", 50);
	sizeObject.Keys("2");
  
	// Traction
	//sizeObject = textListArea1.Find("Name", , 50);
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_1\")", "No");
  
	// Gastric drainage volume
	sizeObject = textListArea1.Find("Name", "WPFObject(\"txtNumeric_5\")", 50);
	sizeObject.Keys("2");
  
	// gastric drainage description
	//sizeObject = textListArea1.Find("Name", , 50);
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_2\")", "Clear");
  
	// Click on save and close
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"cmdSave\")");
	mvObjects.waitForObjectNotVisible(vProcess, "WPFObject(\"Button\", \"Validate\", 1)", 120);
  
	// open I/O Observations tab
	mvNavigation.selectMenuTab("Input / Output");

	// Check for Tube on Flowsheet
	foundText = mvObjects.findToolTipOnView(10, 30, "WPFObject(\"TChartControl\")", 1, patientOrderable.Name, 50, "y")
	if (foundText) {
		Log.Message(patientOrderable.Name + "Found");
	} else {
		Log.Error("Did not find the text, " + patientOrderable.Name);
	}
}

function createProgressNote(progressNote) {

	vProcess = Sys.Process("iMDSoft.Metavision");

	switch (progressNote) {
		case "Nursing Progress Note": 
			// Open Nursing Progress Note
			mvNavigation.selectMenuOption("Add Progress Notes", "Nursing Notes", "Nursing Progress Note");
			mvObjects.waitForObject(vProcess, "WPFObject(\"TextBlock\", \"* Nursing Progress Note : New Session\", 1)", 120);

			// Enter some text
			mvObjects.enterEditText(vProcess, "WPFObject(\"txtFreeText_1\")", "This is some text for automation testing to be blanked. Nursing notes."); 
		  	
			// Refresh
			mvNavigation.saveForm("Refresh");
			aqUtils.Delay(1000);
  
			// Check the text edit is blank
			vEditAreaText = mvObjects.getObjectProperty(vProcess, "Name", "WPFObject(\"txtFreeText_1\")", "Text");  
			if (aqString.Compare(vEditAreaText, "", false) != 0) {
				Log.Error("Refresh did not clear unsaved text. Found: "+ vEditAreaText);
			}

			// Enter some text
			mvObjects.enterEditText(vProcess, "WPFObject(\"txtFreeText_1\")", "This is some text for automation testing. Nursing notes.");
			break; 
			
		case "Medical Progress Note":
		// Open Medical Progress Note
			mvNavigation.selectMenuOption("Add Progress Notes", "Medical Notes", "Medical Progress Note");
			mvObjects.waitForObject(vProcess, "WPFObject(\"TextBlock\", \"* Medical Progress Note : New Session\", 1)", 120);

			// Fill in the details
			mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_1\")", "ICU");
			mvObjects.enterEditText(vProcess, "WPFObject(\"txtFreeText_2\")", "0255551111");
			mvObjects.enterEditText(vProcess, "WPFObject(\"txtFreeText_3\")", "This is some text for automation testing. Medical notes.");
  			break;
			
		default:
			Log.Error("Invalid Progress Note: " + progressNote);
  	}
	mvNavigation.saveForm("Save");
	// Confirm Save
	mvObjects.buttonClick(vProcess, "Name", "WinFormsObject(\"Yes\")");
	aqUtils.Delay(500); // Handle redisplay of form
	sessionTime = mvNavigation.getformTime("Nursing Progress Note");
	 
	mvNavigation.saveForm("Refresh");
	mvNavigation.saveForm("Close");
	
}

function nursingDischargeSummary() {

	vProcess = Sys.Process("iMDSoft.Metavision");

	// Open Nursing Discharge Summary
	mvNavigation.selectMenuOption("Nursing", "Nursing Discharge Summary");
	mvObjects.waitForObject(vProcess, "WPFObject(\"TextBlock\", \"*Nursing Discharge Summary (Adult) : New Session\", 1)", 120);

	// Navigate to Reason for Admission Details tab
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"TextBlock\", \"Admission Details / Demographics\", 1)"); 
	aqUtils.Delay(500);

	// Check the 2 fields data that come from Admission Summary
	reasonForAdmissionText = mvObjects.getObjectProperty(vProcess, "Name", "WPFObject(\"txtFreeText_1\")", "Text");
	if (aqString.Compare(reasonForAdmissionText, "Smoke test Reason for Admission", false) == 0) {
		Log.Message("Correct text value found: "+ reasonForAdmissionText);
	} else {
		Log.Error("Reason for admission not correct, found value: " + reasonForAdmissionText)
	}
  
	pastMedicalHistoryText = mvObjects.getObjectProperty(vProcess, "Name", "WPFObject(\"txtFreeText_2\")", "Text")
	if (aqString.Compare(pastMedicalHistoryText, "Smoke test Past Medical History", false) == 0) {
		Log.Message("Correct text value found: "+ pastMedicalHistoryText);
	} else {
		Log.Error("Past medical history not correct, found value: " + pastMedicalHistoryText)
	} 
  
	// Enter Height and Weight details
	mvObjects.enterEditText(vProcess, "WPFObject(\"txtNumeric_1\")", "[Home]![End][Del]162");
	mvObjects.enterEditText(vProcess, "WPFObject(\"txtNumeric_2\")", "[Home]![End][Del]94[Tab]");
	aqUtils.Delay(500);

	// verify BMI, BSA and Ideal weight
	mvVerify.verifyObjectProperty(vProcess, "Name", "WPFObject(\"txtFreeText_3\")", "Text", "35.8", "BMI")
	mvVerify.verifyObjectProperty(vProcess, "Name", "WPFObject(\"txtFreeText_4\")", "Text", "1.981", "BSA")

	// Navigate to Reason for Clinical Data tab
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"TextBlock\", \"Clinical Data\", 1)"); 
	aqUtils.Delay(500);

	// Enter Blood Glucose
	mvObjects.scrollUntilVisible("WPFObject(\"txtNumeric_16\")");
	mvObjects.enterEditText(vProcess, "WPFObject(\"txtNumeric_16\")", "[Home]![End][Del]5");

	// Navigate to Reason for Checklist tab
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"TextBlock\", \"Checklist\", 1)"); 
	aqUtils.Delay(500);

	// Enter Unit Outcome
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_22\")", "Survived ICU/HDU");

	// save and Close
	mvNavigation.saveForm("Save");
	aqUtils.Delay(500); // Handle redisplay of form
	sessionTime = mvNavigation.getformTime("Nursing Discharge Summary");
	 
	mvNavigation.saveForm("Refresh");
	mvNavigation.saveForm("Close");


}

module.exports.createLine = createLine;
module.exports.createDrain = createDrain;
module.exports.createTubes = createTubes;
module.exports.createProgressNote = createProgressNote;
module.exports.nursingDischargeSummary = nursingDischargeSummary;
module.exports.addOrderable = addOrderable;