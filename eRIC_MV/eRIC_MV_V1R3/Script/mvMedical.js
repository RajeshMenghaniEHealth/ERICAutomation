var Data = require("Data");
var mvNavigation = require("mvNavigation");
var mvObjects = require("Base_Objects");
var mvVerify = require("mvVerify");


function medicalDischargeSummary() {

	vProcess = Sys.Process("iMDSoft.Metavision");

	// Open Medical Discharge Summary
	mvNavigation.selectMenuOption("Medical", "Medical Discharge Summary");
	mvObjects.waitForObject(vProcess, "WPFObject(\"TextBlock\", \"*Medical Discharge Summary (Adult) : New Session\", 1)", 120);

	// Navigate to Reason for Admission Details tab
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"TextBlock\", \"Medical Discharge Summary\", 1)"); 
	aqUtils.Delay(500);

	// Check the 2 fields data that come from Admission Summary
	reasonForAdmissionText = mvObjects.getObjectProperty(vProcess, "Name", "WPFObject(\"txtFreeText_1\")", "Text");
	if (aqString.Compare(reasonForAdmissionText, "Smoke test Reason for Admission", false) == 0) {
		Log.Checkpoint("Correct text value found: "+ reasonForAdmissionText);
	} else {
		Log.Error("Reason for admission not correct, found value: " + reasonForAdmissionText)
	}
  
	pastMedicalHistoryText = mvObjects.getObjectProperty(vProcess, "Name", "WPFObject(\"txtFreeText_2\")", "Text")
	if (aqString.Compare(pastMedicalHistoryText, "Smoke test Past Medical History", false) == 0) {
		Log.Checkpoint("Correct text value found: "+ pastMedicalHistoryText);
	} else {
		Log.Error("Past medical history not correct, found value: " + pastMedicalHistoryText)
	} 

	// Check the height and weight
	var heightObject = vProcess.Find("Name", "WPFObject(\"txtNumeric_1\")", 1000);
	var height = aqObject.GetPropertyValue(heightObject.Value, "OleValue");
	if (aqString.Compare(height, "162", false) == 0) {
		Log.Checkpoint("height Loaded");
	} else {
		Log.Error("height not loaded, found value: " + height);
	}
	var weightObject = vProcess.Find("Name", "WPFObject(\"txtFormula_4\")", 1000);
	var weightLatest = aqObject.GetPropertyValue(weightObject, "Text");
	if (aqString.Compare(weightLatest, "94kg", false) == 0) {
		Log.Checkpoint("weightLatest Loaded");
	} else {
		Log.Error("weightLatest not loaded, found value: " + weightLatest);
	}
	
	// Unit Discharge Decision Date/Time
	//var dischargeDateTime = aqDateTime.AddHours(aqDateTime.Now(), 3);
	//var currentTime = aqConvert.DateTimeToFormatStr(dischargeDateTime, "%d/%m/%Y %#I:%M %p");
  	mvObjects.enterImdDateTimePicker(vProcess, "WPFObject(\"dtpDate_2\")", "Now");
	
	// Dicharge Against Medical
	// TODO - switch for discharge against advice
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"chkTrue_1\")"); 
  
	// Navigate to Inventions tab
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"TextBlock\", \"Interventions and Events / Plan\", 1)"); 
	aqUtils.Delay(500);
	
 	// Enter Significant Interventions
	mvObjects.enterEditText(vProcess, "WPFObject(\"txtFreeText_3\")", "[Home]![End][Del]Smoke Test Significant Inventions and Events");
 
	// save and Close
	mvNavigation.saveForm("Save");
	aqUtils.Delay(500); // Handle redisplay of form
	sessionTime = mvNavigation.getformTime("Medical Discharge Summary");
	 
	mvNavigation.saveForm("Refresh");
	mvNavigation.saveForm("Close");


}

function testfunction () {}


module.exports.medicalDischargeSummary = medicalDischargeSummary;
module.exports.testfunction = testfunction;