var Data = require("Data");
var mvNursing = require("mvNursing");
var mvNavigation = require("mvNavigation");
var mvObjects = require("Base_Objects");

function prescribeMedication(patientMedications) {

	vProcess = Sys.Process("iMDSoft.Metavision");

	// Click on Medication timeline tab (so can get prescribe button)
	mvObjects.buttonClick(vProcess, "WPFControlText", "Prescribe Medications");
	mvObjects.waitForObject(vProcess, "WPFObject(\"ImdButton\", \"\", 1)", 60);
  
	// Click prescribe
	mvObjects.buttonClick(vProcess, "Text", "Prescribe");
	mvObjects.waitForObject(vProcess, "WPFObject(\"TextBlock\", \"Create Order For: *\", 1)", 60);
	aqUtils.Delay(8000);
  
	// Type in the medicine name // Paracetamol // Acarbose
	mvObjects.enterEditText(vProcess, "WPFObject(\"FindComboBoxEdit\")", patientMedications.Name + "[Enter]");
	aqUtils.Delay(500);
	//selectComboItem_MR(vProcess, "WPFObject(\"FindComboBoxEdit\")", "Acarbose"); // no work with tis 'type' of combo box
	//WPFObject("MedicationTemplate").WPFObject("ImdToggleList", "", 1)
	// WPFObject(\"NonLogicalAdornerDecorator\", \"\", 1)"
	
	dropDown_CIAP = vProcess.Find("Name", "WPFObject(\"NonLogicalAdornerDecorator\", \"\", 1)", 100);
	if (dropDown_CIAP.Exists) {
		dropDown_CIAP.Click(10,10);
		aqUtils.Delay(500);
		//WPFObject("TextBlock", "Paracetamol MR tablet X mg PO every X hours [Adult]", 1)
		//mvObjects.selectComboItem_FL(dropDown_CIAP, "WPFObject(\"ComboBoxItem\", \"\", 1)", patientMedications.Name + " " + patientMedications.Template);
	}
 
	// Find the base search order form group object
	orderFormGroupObject = vProcess.Find("Name", "WPFObject(\"Order_Form_Group\")", 100);
  
	// Enter Dose form
	layoutObject = orderFormGroupObject.Find("Name", "WPFObject(\"LayoutItem\", \"\", 1)", 100);
	//WPFObject("ComboBoxEdit", "", 1).WPFObject("ButtonContainer", "", 1).WPFObject("PART_Item")
	mvObjects.buttonClick(layoutObject, "Name", "WPFObject(\"PART_Item\")")
	popupControl = vProcess.Find("Name", "WPFObject(\"NonLogicalAdornerDecorator\", \"\", 1)", 100);
	mvObjects.selectComboItem_FL(popupControl, "WPFObject(\"ComboBoxEdit\", \"\", 1)", patientMedications.DoseForm);
  
	// Enter Route 
	layoutObject = orderFormGroupObject.Find("Name", "WPFObject(\"LayoutItem\", \"\", 2)", 100);
	mvObjects.selectComboItem_CO(layoutObject, "WPFObject(\"ComboBoxEdit\", \"\", 1)", patientMedications.Route);
   
	// Find the base search Frequency_Group object
	orderFormGroupObject = vProcess.Find("Name", "WPFObject(\"Frequency_Group\")", 100);
	// Set the interval ************ need to sort out this option box, leaving as default for time
	layoutObject = orderFormGroupObject.Find("Name", "WPFObject(\"LayoutItem\", \"\", 1)", 100);
	mvObjects.selectComboItem_MR(layoutObject, "WPFObject(\"ComboBoxEdit\", \"\", 1)", patientMedications.Frequency);
	mvObjects.enterEditText(orderFormGroupObject, "WPFObject(\"SpinEdit\", \"\", 1)", "[Home]![End][Del]"+patientMedications.Interval);
	// Set the frequency
	layoutObject = orderFormGroupObject.Find("Name", "WPFObject(\"LayoutItem\", \"\", 2)", 100);
	mvObjects.selectComboItem_MR(layoutObject, "WPFObject(\"ComboBoxEdit\", \"\", 1)", patientMedications.IntervalPeriod);
  
	// Find the base grid medication view
	gridMedicationsObject = vProcess.Find("Name", "WPFObject(\"GridMedications\")", 100);
	// Enter the dosage
	gridEditObject = gridMedicationsObject.Find("Name", "WPFObject(\"GridCellContentPresenter\", \"\", 4)", 100);
	mvObjects.buttonClick(gridMedicationsObject, "Name", "WPFObject(\"GridCellContentPresenter\", \"\", 4)");
	editObject = gridEditObject.Find("Name", "WPFObject(\"TextEdit\", \"\", 1)", 100);
	editObject.click(10,10);
	editObject.keys(patientMedications.Quantity);
	//enterEditText(gridEditObject, "WPFObject(\"TextEdit\", \"\", 1)", "10");
  
	// Start Time 
	startStopGridObject = vProcess.Find("Name", "WPFObject(\"StartStopGrid\")", 100);
	// Select the start
	layoutObject = startStopGridObject.Find("Name", "WPFObject(\"LayoutItem\", \"\", 1)", 100); 
	mvObjects.selectComboItem_MR(layoutObject, "WPFObject(\"ComboBoxEdit\", \"\", 1)", patientMedications.StartTime);
	aqUtils.Delay(500);
	// Enter the hours
	mvObjects.enterEditText(startStopGridObject, "WPFObject(\"SpinEdit\", \"\", 1)", "[Home]![End][Del]"+patientMedications.StartInterval);
	// Set the frequency
	layoutObject = startStopGridObject.Find("Name", "WPFObject(\"LayoutGroup\", \"\", 1)", 100);
	mvObjects.selectComboItem_MR(layoutObject, "WPFObject(\"ComboBoxEdit\", \"\", 1)", patientMedications.StartPeriod);
	
	// Set End Limit
	layoutObject = startStopGridObject.Find("Name", "WPFObject(\"LayoutItem\", \"\", 3)", 100);
	mvObjects.selectComboItem_MR(layoutObject, "WPFObject(\"ComboBoxEdit\", \"\", 1)", patientMedications.EndType);
	// Number of Doses
	layoutObject = startStopGridObject.Find("Name", "WPFObject(\"LayoutItem\", \"\", 4)", 100);
	mvObjects.enterEditText(layoutObject, "WPFObject(\"SpinEdit\", \"\", 1)", "[Home]![End][Del]"+patientMedications.EndInterval);
	 
	// Save .. changed from just save to save and close
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"Button\", \"Save & Close\", 1)");
	mvObjects.waitForObjectNotVisible(vProcess, "WPFObject(\"TextBlock\", \"Create Order For: *\", 1)", 60);
  
	// Get the tooltip of the chart control. Allows to see the text in the chart
	chartControlObject = vProcess.FindAll("Name", "WPFObject(\"tChartConcrol\")", 100);
	chartControlObject = (new VBArray(chartControlObject)).toArray();
  
	medTextFound = false;
	for (i = 0; i < chartControlObject.length; i++) {
		chartControlObject[i].HoverMouse(10, 10);
		vToolTipObject = aqObject.GetPropertyValue(chartControlObject[i], "ToolTip");
		vToolTipTextObject = aqObject.GetPropertyValue(vToolTipObject, "WPFControlText");
		//Log.Message(vToolTipTextObject);
    
		// Check if object contains text for med used
		if (aqString.Find(vToolTipTextObject, patientMedications.Name) != -1) {
			medTextFound = true;
			break;
		}
	}
  
	if (!medTextFound) {
		Log.Error("Medication did not appear in the medication timeline.");
	} else {
		// Check that the right text is on the screen.
		if (aqString.Find(vToolTipTextObject, patientMedications.Name) == -1) {
		  	Log.Error(patientMedications.Name + " did not appear in the medication timeline.");
		}
		if (aqString.Find(vToolTipTextObject, patientMedications.Route) == -1) {
		  	Log.Error(patientMedications.Route + " did not appear in the medication timeline.");
		}
		//    if (aqString.Find(vToolTipTextObject, "10 mg") == -1) {
		//      Log.Error("10 mg did not appear in the medication timeline.");
		//    }
		// Check for correct interval and period
		intervalPeriod = patientMedications.Interval + " " + patientMedications.IntervalPeriod
		if (aqString.Find(vToolTipTextObject, intervalPeriod) == -1) {
		  	Log.Error(intervalPeriod + " did not appear in the medication timeline.");
		}
		if (aqString.Find(vToolTipTextObject, patientMedications.DoseForm) == -1) {
		  	Log.Error(patientMedications.DoseForm + " did not appear in the medication timeline.");
		}
	}  
  
	// Sign no button click
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"cmdSign\")");
	mvObjects.waitForObject(vProcess, "WinFormsObject(\"cmdSignNow\")", 60);
  
	// Click sign now on the signiture review screen
	mvObjects.buttonClick(vProcess, "Name", "WinFormsObject(\"cmdSignNow\")");
	aqUtils.Delay(1000); // wait to see if authorisation turns up
  
	// user authentication
	mvObjects.waitForObject(vProcess, "WPFObject(\"PasswordBoxEdit\", \"\", 1)", 60);
	mvObjects.enterEditText(vProcess, "WPFObject(\"PasswordBoxEdit\", \"\", 1)", "P@ssword1");
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"Button\", \"OK\", 1)");
	aqUtils.Delay(500);

	// wait for form to close
	mvObjects.waitForObjectNotVisible(vProcess, "WinFormsObject(\"cmdSignNow\")", 60);
	aqUtils.Delay(500);
  
	// Check the action count is 0
	actionCount = vProcess.Find("Name", "WPFObject(\"lblSC_Count\")", 100);
	actionCountValue = aqObject.GetPropertyValue(actionCount, "WPFControlText");
  
	if (aqString.Find(vToolTipTextObject, patientMedications.DoseForm) == -1) {
		Log.Error("Actions after signature not equal to 0. Value: "+ actionCountValue);
	} else {
		Log.Message("Action Count = 0.");
	}
}

function administerMedication(patientMedications) {

	vProcess = Sys.Process("iMDSoft.Metavision");

	// Click on Medication timeline tab (so can get prescribe button)
	mvObjects.buttonClick(vProcess, "WPFControlText", "Administer Medications");
	mvObjects.waitForObject(vProcess, "WPFObject(\"TextBlock\", \"Medications\", 1)", 60);
  
	// Check the views displayed
	viewArray = new Array("Medications", "PRN Medications", "Fluids/Blood Products", "Nutrition");
	for (i = 0; i < viewArray.length; i++) {
		viewObject = vProcess.Find("Name", "WPFObject(\"TextBlock\", \""+ viewArray[i] +"\", 1)", 200);
		if (viewObject.Exists) {
			Log.Message("View exists on form. view: "+ viewArray[i]);
		} else {
		  	Log.Error("View does not exists on form. view: "+ viewArray[i]);
		}
	}
  
	// Change the interval so we can see previously created medication
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"menuInterval\")");
	aqUtils.Delay(500);
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"AccessText\", \"3 Hours\", 1)");
  
	// Find all the chart objects
	chartControlObject = vProcess.FindAll("Name", "WPFObject(\"TChartControl\")", 100);
	chartControlObject = (new VBArray(chartControlObject)).toArray();
  
	// Find the first x co-ordinate that contains the words acarbose tablet in it. (this will be the first tablet icon)
	var x = 10;
	var medTextFound = false;
	lastTChart = chartControlObject.length - 1;
	while (!medTextFound) {
		// Hover the mouse in chart area
		chartControlObject[lastTChart].HoverMouse(x, 10);
    
		// check the tool tip text
		vToolTipObject = aqObject.GetPropertyValue(chartControlObject[lastTChart], "ToolTip");
		vToolTipTextObject = aqObject.GetPropertyValue(vToolTipObject, "WPFControlText");
    
		// Check if object contains text for med used
		if (aqString.Find(vToolTipTextObject, "Pending") != -1) {
		  	medTextFound = true;
		  	break;
		}
		aqUtils.Delay(500);
		x = x + 10;
	}
  
	// Open the validate form
	chartControlObject[lastTChart].ClickR(x, 10);
	aqUtils.Delay(500);
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"6\")");
	aqUtils.Delay(500);
	mvObjects.buttonClick(vProcess, "WPFControlText", "Validate");
	aqUtils.Delay(500);
	mvObjects.waitForObject(vProcess, "WPFObject(\"Button\", \"Val. and Close\", 1)", 60);

	// Verify the previous values set up
	verifyObject = vProcess.Find("Name", "WPFObject(\"FindComboBoxEdit\")", 200);
	verifyTextObject = aqObject.GetPropertyValue(verifyObject, "Text");
	if (aqString.Find(verifyTextObject, patientMedications.Name) != -1) {
		Log.Checkpoint(patientMedications.Name + "Medicine Found");
	} else {
		Log.Error("Medicine " + patientMedications.Name + " not found. Found: "+ verifyTextObject);
	}
  
	// Find the base search order form group object
	orderFormGroupObject = vProcess.Find("Name", "WPFObject(\"Order_Form_Group\")", 100);
  
	// Verify Dose form
	layoutObject = orderFormGroupObject.Find("Name", "WPFObject(\"LayoutItem\", \"\", 1)", 100);
	verifyObject = layoutObject.Find("Name", "WPFObject(\"ComboBoxEdit\", \"\", 1)", 200);
	verifyTextObject = aqObject.GetPropertyValue(verifyObject, "Text");
	if (aqString.Find(verifyTextObject, patientMedications.DoseForm) != -1) {
		Log.Checkpoint(patientMedications.DoseForm + "Dose Form Found");
	} else {
		Log.Error("Dose form " + patientMedications.DoseForm + " not found. Found: "+ verifyTextObject);
	}
	// Verify Route 
	layoutObject = orderFormGroupObject.Find("Name", "WPFObject(\"LayoutItem\", \"\", 2)", 100);
	verifyObject = layoutObject.Find("Name", "WPFObject(\"ComboBoxEdit\", \"\", 1)", 200);
	verifyTextObject = aqObject.GetPropertyValue(verifyObject, "Text");
	if (aqString.Find(verifyTextObject, patientMedications.Route) != -1) {
		Log.Checkpoint(patientMedications.Route + " Route Found");
	} else {
		Log.Error("Route " + patientMedications.Route + " not found. Found: "+ verifyTextObject);
	}
	// Set Time current
	baseSearchObject = vProcess.Find("Name", "WPFObject(\"AdministrationInformationView\", \"\", 1)", 100);
 	layoutObject = baseSearchObject.Find("Name", "WPFObject(\"LayoutGroup\", \"\", 1)", 100);
 	dateTimeObject = layoutObject.Find("Name", "WPFObject(\"dateTimeControl\")", 100);
	
	var currentTime = aqConvert.DateTimeToFormatStr(aqDateTime.Now(), "%d/%m/%Y %#I:%M %p");
	aqObject.SetPropertyValue(dateTimeObject, "Value", currentTime);
	//mvObjects.buttonClick(buttonObject, "Name", "WPFObject(\"PART_Item\")")
	aqUtils.Delay(500);
  
	// Click Validate and close
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"Button\", \"Val. and Close\", 1)");
	aqUtils.Delay(500);
	warningOK = vProcess.Find("Name", "WinFormsObject(\"OK\")", 100);
	if (warningOK.Exists) {
		warningOK.click();
	}
	mvObjects.waitForObjectNotVisible(vProcess, "WPFObject(\"Button\", \"Val. and Close\", 1)", 60);
	aqUtils.Delay(1000);
  
	// Move along to next dose
	var medTextFound = false;
	lastTChart = chartControlObject.length - 1;
	while (!medTextFound) {
		// Hover the mouse in chart area
		chartControlObject[lastTChart].HoverMouse(x, 10);
    
		// check the tool tip text
		vToolTipObject = aqObject.GetPropertyValue(chartControlObject[lastTChart], "ToolTip");
		vToolTipTextObject = aqObject.GetPropertyValue(vToolTipObject, "WPFControlText");
    
		// Check if object contains text for med used
		if (aqString.Find(vToolTipTextObject, "Dose Status: Pending") != -1) {
		  	medTextFound = true;
		  	break;
		}
 		aqUtils.Delay(500);
		x = x + 10;
	}

	// Skip the dose
	chartControlObject[lastTChart].ClickR(x, 10);
	aqUtils.Delay(500);
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"6\")");
	aqUtils.Delay(500);
	mvObjects.buttonClick(vProcess, "WPFControlText", "Withhold Dose");
	aqUtils.Delay(500);
	mvObjects.waitForObject(vProcess, "WinFormsObject(\"cboReasons\")", 60);  
  
	// Enter reason for skip
	//dropDownObject = vProcess.Find("Name", "WinFormsObject(\"cboReasons\")", 200);
	///dropDownObject.click();
	////dropDownListObject = dropDownObject.Find("Name", "WinFormsObject(\"ListBox\")", 200);
	//dropDownListObject.ClickItem(2);
	// buttonClick(vProcess, "Text", "Patient fasting");
	//selectComboItem(vProcess, "WinFormsObject(\"cboReasons\")", "Patient fasting")  
	mvObjects.buttonClick(vProcess, "Name", "WinFormsObject(\"btnOk\")");
	mvObjects.waitForObjectNotVisible(vProcess, "WinFormsObject(\"fraReasons\")", 60);
  
	// Verify skipped
	x = x + 20;
	chartControlObject[lastTChart].HoverMouse(x, 10);
    
	// check the tool tip text
	vToolTipObject = aqObject.GetPropertyValue(chartControlObject[lastTChart], "ToolTip");
	vToolTipTextObject = aqObject.GetPropertyValue(vToolTipObject, "WPFControlText");
    
	// Check if object contains text for med used
	if (aqString.Find(vToolTipTextObject, "Withheld") != -1) {
		Log.Checkpoint("Dose Skipped")
	} else {
		Log.Error("Dose not skipped. Captured text: "+ vToolTipTextObject);
	}
	
	// now select validate on the skipped med
	chartControlObject[lastTChart].ClickR(x, 10);
	aqUtils.Delay(500);
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"6\")");
	aqUtils.Delay(500);
	mvObjects.buttonClick(vProcess, "WPFControlText", "Validate");
	aqUtils.Delay(500);
	mvObjects.waitForObject(vProcess, "WinFormsObject(\"fraReasons\")", 60);  
  
	// Enter reason for skip
	dropDownObject = vProcess.Find("Name", "WinFormsObject(\"cboReasons\")", 200);
	dropDownListObject = dropDownObject.Find("Name", "WinFormsObject(\"ListBox\")", 200);
	//mvObjects.buttonClick(dropDownListObject, "Text", "Patient no longer fasting");
	//selectComboItem(vProcess, "WinFormsObject(\"cboReasons\")", "Patient fasting")  
	mvObjects.buttonClick(vProcess, "Name", "WinFormsObject(\"btnOk\")");
	mvObjects.waitForObjectNotVisible(vProcess, "WinFormsObject(\"fraReasons\")", 60);
	aqUtils.Delay(500);
	
	// Set Time current
	baseSearchObject = vProcess.Find("Name", "WPFObject(\"AdministrationInformationView\", \"\", 1)", 100);
 	layoutObject = baseSearchObject.Find("Name", "WPFObject(\"LayoutGroup\", \"\", 1)", 100);
 	dateTimeObject = layoutObject.Find("Name", "WPFObject(\"dateTimeControl\")", 100);
	
	var currentTime = aqConvert.DateTimeToFormatStr(aqDateTime.Now(), "%d/%m/%Y %#I:%M %p");
	aqObject.SetPropertyValue(dateTimeObject, "Value", currentTime);
	mvObjects.waitForObject(vProcess, "WPFObject(\"Button\", \"Val. and Close\", 1)", 60);

	// Click Validate and close
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"Button\", \"Val. and Close\", 1)"); 
	mvObjects.waitForObjectNotVisible(vProcess, "WPFObject(\"Button\", \"Val. and Close\", 1)", 60);
	
}

function listMedication(patientMedications) {

	vProcess = Sys.Process("iMDSoft.Metavision");

	// Click on Medication timeline tab (so can get prescribe button)
	mvObjects.buttonClick(vProcess, "WPFControlText", "Prescribe Medications");
	mvObjects.waitForObject(vProcess, "WPFObject(\"ImdButton\", \"\", 1)", 60);
  
	// Click on Medication tab
	mvObjects.buttonClick(vProcess, "Text", "Medication List");
	mvObjects.waitForObject(vProcess, "WPFObject(\"ImdButton\", \"\", 1)", 60);

	// Verify the medicine previously validated is in the list
	medicationDataGrid = vProcess.Find("Name", "WPFObject(\"lvwOrders\")", 500);
  
	// Get all the text blocks in the table
	dataGridTextBlocks = vProcess.FindAll("Name", "WPFObject(\"TextBlock\", \"*\", 1)", 500);
	dataGridTextBlocks = (new VBArray(dataGridTextBlocks)).toArray();
	Log.Message("Found objects: "+ dataGridTextBlocks.length);
	medTextFound = false;
	for (i = 0; i < dataGridTextBlocks.length; i++) {
		// Get the text value of the object
		rowText = aqObject.GetPropertyValue(dataGridTextBlocks[i], "Text");
    
		// Check if object contains text for med used
		if (aqString.Find(rowText, patientMedications.Name) != -1) {
		  	medTextFound = true;
		  	break;
		}  
	}  
	dataGridTextBlocks = null;
  
	if (medTextFound) {
		Log.Checkpoint(patientMedications.Name + " Medication found in list");
	} else {
		Log.Error(patientMedications.Name + " Medication not found in list");
	}  
  	
	// Open row for Paracetamol
	medicationDataRow = medicationDataGrid.Find("Name", "WPFObject(\"DataGridRow\", \"\", 1)", 10);
	//WPFObject("DataGridRow", "", 1)
	// Expand the row
	PropArray = new Array("Name", "Visible");
	ValuesArray = new Array("WPFObject(\"RowImage\")", true);
	mvObjects.buttonClick(medicationDataRow, PropArray, ValuesArray);
	aqUtils.Delay(1000);

	// Try and find a text block with finished in it, and right click -> revise
	finishedTextObject = vProcess.Find("Name", "WPFObject(\"TextBlock\", \"Finished\", 1)", 1000, true);
	if (finishedTextObject.exists) {
		finishedTextObject.ClickR();
		mvObjects.buttonClick(vProcess, "WPFControlText", "Revise");
	} else {
		Log.Error("Did not find a medication that was finished in the Medication list.");
	}
	finishedTextObject = null;
  
	// wait for the revise dose form to appear
	mvObjects.waitForObject(vProcess, "WPFObject(\"Button\", \"Dose Log\", 1)", 60);
  
	// Change the quantiy
	gridViewObject = vProcess.Find("Name", "WPFObject(\"GridMedications\")", 1000, true);
	quantityObject = gridViewObject.Find("Name", "WPFObject(\"GridCellContentPresenter\", \"\", 5)", 1000, true);
	quantityObject.Click(10,10);
	editObject = quantityObject.Find("Name", "WPFObject(\"TextEdit\", \"\", 1)", 1000, true);
	editObject.Keys("[Home]![End][Del]" + patientMedications.ChangeQuantity);
  
	// Validate and close
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"Button\", \"Val. and Close\", 1)");
  
	// wait for pop up
	mvObjects.waitForObject(vProcess, "WinFormsObject(\"OK\")", 30);
	vCapturedText = mvObjects.getObjectProperty(vProcess, "Name", "WinFormsObject(\"Message\")", "Text");
	if (aqString.Find(vCapturedText, "You are documenting changes to this dose's details. Your changes will replace previously validated details.", false)  == -1) {
		Log.Error("Did not find expected warning message. Found: : "+ vCapturedText);
	}
	mvObjects.buttonClick(vProcess, "Name", "WinFormsObject(\"OK\")");
	mvObjects.waitForObjectNotVisible(vProcess, "WPFObject(\"Button\", \"Dose Log\", 1)", 60);
	aqUtils.Delay(1000);

	// Find a late dose
//	lateTextObject = vProcess.Find("Name", "WPFObject(\"TextBlock\", \"Late\", 1)", 1000, true);
//	if (lateTextObject.exists) {
//		lateTextObject.ClickR();
//		mvObjects.buttonClick(vProcess, "WPFControlText", "Validate");
//	} else {
//		Log.Error("Did not find a medication that was finished in the Medication list.");
//	}
//	finishedTextObject = null;
  
//	// wait for the revise dose form to appear
//	mvObjects.waitForObject(vProcess, "WPFObject(\"Button\", \"Dose Log\", 1)", 60);
//  
//	// Validate and close
//	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"Button\", \"Val. and Close\", 1)");
//	mvObjects.waitForObjectNotVisible(vProcess, "WPFObject(\"Button\", \"Dose Log\", 1)", 60);

	// Close Medications List form
	vProcess.Find("Name", "WinFormsObject(\"frmPhysicianOrders\")", 30).Close();
	aqUtils.Delay(1000);

}

function reviewMedication(patientMedReview, patientOrderable) {

	vProcess = Sys.Process("iMDSoft.Metavision");

	// Click on Medication timeline tab (so can get prescribe button) and refresh flowsheet to current time
	//mvObjects.buttonClick(vProcess, "WPFControlText", "Medication Review");
	mvNavigation.selectMenuTab("Medication Review");
	aqUtils.Delay(500); 
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"btnMoveToCurrentTime\")");
	mvObjects.waitForObject(vProcess, "WPFObject(\"ImdButton\", \"\", 1)", 60);
	
	// Click on new medication review
	newMedicationReviewObject = vProcess.Find("Text", "New Medication Review", 1000);
	newMedicationReviewObject.Click();
	mvObjects.waitForObject(vProcess, "WPFObject(\"TextBlock\", \"* Medication Review\", 1)", 20);
	//aqUtils.Delay(500); 
  
	// Enter the review data
	mvObjects.enterEditText(vProcess, "WPFObject(\"txtFreeText_1\")", patientMedReview.Medications);
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_1\")", patientMedReview.Recommendations);
	// **** need to make a new function for multi combo boxes commonFunctions.selectComboItem(vProcess, " WPFObject(\"cboTextComboMulti_1\")", "Duplication");
	mvObjects.enterEditText(vProcess, "WPFObject(\"txtFreeText_2\")", patientMedReview.Plan);
    
	issueDateIdentified = vProcess.Find("Name", "WPFObject(\"dtpDate_1\")", 100);
	issueDateIdentified.Click(20,20);
      
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"cmdTabDoun\")");
	mvObjects.enterEditText(vProcess, "WPFObject(\"txtFreeText_4\")", patientMedReview.Comments);
      
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"cmdSave\")");
	// Confirm Save
	mvObjects.buttonClick(vProcess, "Name", "WinFormsObject(\"Yes\")");
	aqUtils.Delay(500); // Handle redisplay of form

	mvObjects.waitForObjectNotVisible(vProcess, "WPFObject(\"capXP\")", 60); 
	 
	// Right click on the co ordinates for the first item
	chartAreaObject = vProcess.Find("Name", "WPFObject(\"TChartControl\")", 500);
	chartAreaObject.ClickR(89, 19);

	//select the time menu item (using index for simplicity)
	PropArray = new Array("WPFControlIndex", "ClrClassName");
	ValuesArray = new Array("2", "ImdMenuItem");
	mvObjects.buttonClick(vProcess, PropArray, ValuesArray); 
  
	// Click on revise
	PropArray = new Array("Text", "ClrClassName");
	ValuesArray = new Array("Revise", "ImdMenuItem");
	mvObjects.buttonClick(vProcess, PropArray, ValuesArray); 
  
	mvObjects.waitForObject(vProcess, "WPFObject(\"Button\", \"Dose Log\", 1)", 60);  
	aqUtils.Delay(500); 
  
	mvNursing.addOrderable(patientOrderable);
	
//	// Route
//	searchFrameObject = vProcess.Find("Name", "WPFObject(\"Order_Form_Group\")", 500);
//	searchObject = searchFrameObject.Find("Name", "WPFObject(\"LayoutItem\", \"\", 2)", 500);
//	mvObjects.selectComboItem_MR(searchObject, "WPFObject(\"ComboBoxEdit\", \"\", 1)", "Any");
//  
//	// Body Site
//	searchObject = searchFrameObject.Find("Name", "WPFObject(\"LayoutItem\", \"\", 3)", 500);
//	mvObjects.selectComboItem_MR(searchObject, "WPFObject(\"ComboBoxEdit\", \"\", 1)", "Abdomen");
//  
//	// Comments
//	searchFrameObject = vProcess.Find("Name", "WPFObject(\"Frequency_Group\")", 500);
//	searchObject = searchFrameObject.Find("Name", "WPFObject(\"LayoutItem\", \"\", 1)", 500);
//	mvObjects.enterEditText(searchObject, "WPFObject(\"TextEdit\", \"\", 1)", "Test automation filled");
//  
//	// Duration
//	searchFrameObject = vProcess.Find("Name", "WPFObject(\"Process_Style_Group\")", 500);
//	searchObject = searchFrameObject.Find("Name", "WPFObject(\"LayoutItem\", \"\", 3)", 500);
//	mvObjects.enterEditText(searchObject, "WPFObject(\"SpinEdit\", \"\", 1)", "1");
//  
//	// Interval
//	searchObject = searchFrameObject.Find("Name", "WPFObject(\"LayoutItem\", \"\", 4)", 500);
//	mvObjects.selectComboItem_MR(searchObject, "WPFObject(\"ComboBoxEdit\", \"\", 1)", "hour");
  
	// Click Validate
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"Button\", \"Validate\", 1)");
  
	// Wait for warning and click ok
	mvObjects.waitForObject(vProcess, "WinFormsObject(\"OK\")", 30);
	mvObjects.buttonClick(vProcess, "Name", "WinFormsObject(\"OK\")");  
  
	// Wait for the dose window to close
	mvObjects.waitForObjectNotVisible(vProcess, "WPFObject(\"Button\", \"Dose Log\", 1)", 60);

	//select the time menu item (using index for simplicity)
	chartAreaObject.ClickR(89, 19);
	PropArray = new Array("WPFControlIndex", "ClrClassName");
	ValuesArray = new Array("2", "ImdMenuItem");
	mvObjects.buttonClick(vProcess, PropArray, ValuesArray); 
  
	// Click on revise
	PropArray = new Array("Text", "ClrClassName");
	ValuesArray = new Array("Medication Review", "ImdMenuItem");
	mvObjects.buttonClick(vProcess, PropArray, ValuesArray); 
  
	mvObjects.waitForObject(vProcess, "WPFObject(\"capXP\")", 60);  
	aqUtils.Delay(500); 
  
	// Check the values
	returnedValue = mvObjects.getObjectProperty(vProcess, "Name", "WPFObject(\"txtFreeText_1\")", "Text");
	if (aqString.Compare(returnedValue, patientMedReview.Medications, false) != 0) {
		Log.Error("Medication review did not contain expected value");
	}  
	//commonFunctions.enterEditText(vProcess, "WPFObject(\"txtFreeText_1\")", "Test automation filled");
  
	returnedValue = mvObjects.getObjectProperty(vProcess, "Name", "WPFObject(\"cboTextCombo_1\")", "Text");
	if (aqString.Compare(returnedValue, patientMedReview.Recommendations, false) != 0) {
		Log.Error("Medication review did not contain expected value");
	}  
	//commonFunctions.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_1\")", "Withhold");
  
	returnedValue = mvObjects.getObjectProperty(vProcess, "Name", "WPFObject(\"txtFreeText_2\")", "Text");
	if (aqString.Compare(returnedValue, patientMedReview.Plan, false) != 0) {
		Log.Error("Medication review did not contain expected value");
	} 
	//commonFunctions.enterEditText(vProcess, "WPFObject(\"txtFreeText_2\")", "Test automation filled");

	returnedValue = mvObjects.getObjectProperty(vProcess, "Name", "WPFObject(\"txtFreeText_4\")", "Text");
	if (aqString.Compare(returnedValue, patientMedReview.Comments, false) != 0) {
		Log.Error("Medication review did not contain expected value");
	}     
	//commonFunctions.enterEditText(vProcess, "WPFObject(\"txtFreeText_4\")", "Test automation filled");
    mvNavigation.saveForm("Save");  
	// Wait for warning and click ok
	mvObjects.waitForObject(vProcess, "WinFormsObject(\"Yes\")", 30);
	mvObjects.buttonClick(vProcess, "Name", "WinFormsObject(\"Yes\")"); 
	 
    mvNavigation.saveForm("Refresh");  
	aqUtils.Delay(500);
    mvNavigation.saveForm("Close");  
	//vObjects.buttonClick(vProcess, "Name", "WPFObject(\"cmdSave\")");
	mvObjects.waitForObjectNotVisible(vProcess, "WPFObject(\"capXP\")", 60); 
  
}	

module.exports.prescribeMedication = prescribeMedication;
module.exports.administerMedication = administerMedication;
module.exports.reviewMedication = reviewMedication;
module.exports.listMedication = listMedication;