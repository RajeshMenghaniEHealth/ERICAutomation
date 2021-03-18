var Data = require("Data");
var mvNavigation = require("mvNavigation");
var mvObjects = require("Base_Objects");
var mvVerify = require("mvVerify");

function behaviouralPainScale(patientScore) {

	vProcess = Sys.Process("iMDSoft.Metavision");

	// Open Behavioural Pain Scale
	mvNavigation.selectMenuOption("Scores", "Behavioural Pain Scale");
	mvObjects.waitForObject(vProcess, "WPFObject(\"TextBlock\", \"*Behavioural Pain Scale (Adult) : New Session\", 1)", 120);

	// Enter the values on the form
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_1\")", patientScore.FacialExpression);
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_2\")", patientScore.UpperLimbs);
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_3\")", patientScore.Ventilator);
  
	// Click refresh
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"cmdRefresh\")");
  
	// Check no values in drop downs
	mvVerify.verifyObjectProperty(vProcess, "Name", "WPFObject(\"cboTextCombo_1\")", "Text", "", "Facial Expression");
	mvVerify.verifyObjectProperty(vProcess, "Name", "WPFObject(\"cboTextCombo_2\")", "Text", "", "Upper Limbs");
	mvVerify.verifyObjectProperty(vProcess, "Name", "WPFObject(\"cboTextCombo_3\")", "Text", "", "Ventilator");

	// re-enter the values on the form
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_1\")", patientScore.FacialExpression);
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_2\")", patientScore.UpperLimbs);
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_3\")", patientScore.Ventilator);

	// Get the save time value
	var timeSavedValue = mvObjects.getObjectProperty(vProcess, "Name", "WPFObject(\"mvtFormTime\")", "Value"); 
	timeSavedValue = aqString.Replace(timeSavedValue, ":00", "", false);
	timeSavedValue = aqString.Replace(timeSavedValue, "0", "", false);
	Log.Message("Saved Time: "+ timeSavedValue);
  
	// save the form data
	mvNavigation.saveForm("Save");
	aqUtils.Delay(500); // Handle redisplay of form
	
	// Verify totalled score
	mvVerify.verifyObjectProperty(vProcess, "Name", "WPFObject(\"txtFormula_1\")", "Text", patientScore.Score, "Behavioural Pain Score");

	mvNavigation.saveForm("Refresh");
	mvNavigation.saveForm("Close");
	
	// Check Previous Session data
	// Open Behavioural Pain Scale
	mvNavigation.selectMenuOption("Scores", "Behavioural Pain Scale");
	mvObjects.waitForObject(vProcess, "WPFObject(\"TextBlock\", \"*Behavioural Pain Scale (Adult) : New Session\", 1)", 120);

	// open previous session
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"cmdCancelNewSession\")");  
	mvObjects.waitForObject(vProcess, "WPFObject(\"sessionscontrol\")", 30);

	// Check no values in drop downs
	mvVerify.verifyObjectProperty(vProcess, "Name", "WPFObject(\"cboTextCombo_1\")", "Text", patientScore.FacialExpression, "Facial Expression");
	mvVerify.verifyObjectProperty(vProcess, "Name", "WPFObject(\"cboTextCombo_2\")", "Text", patientScore.UpperLimbs, "Upper Limbs");
	mvVerify.verifyObjectProperty(vProcess, "Name", "WPFObject(\"cboTextCombo_3\")", "Text", patientScore.Ventilator, "Ventilator");
	mvVerify.verifyObjectProperty(vProcess, "Name", "WPFObject(\"txtFormula_1\")", "Text", patientScore.Score, "Behavioural Pain Score");

	mvNavigation.saveForm("Close");
}

function fallRiskAssessment(patientScore) {

	vProcess = Sys.Process("iMDSoft.Metavision");

	// Open Fall Assessment Tool
	mvNavigation.selectMenuOption("Scores", "Falls Risk Assessment Tool");
	mvObjects.waitForObject(vProcess, "WPFObject(\"TextBlock\", \"*Falls Risk Assessment Tool (Adult) : New Session\", 1)", 120);

	// Enter the values on the form
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_1\")", patientScore.History1a);
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_2\")", patientScore.History1b);
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_3\")", patientScore.Mental2a);
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_4\")", patientScore.Mental2b);
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_5\")", patientScore.Mental2c);
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_6\")", patientScore.Vision3a);
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_7\")", patientScore.Vision3b);
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_8\")", patientScore.Vision3c);
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_9\")", patientScore.Toileting4a);
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_10\")", patientScore.Transfer5a);
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_11\")", patientScore.Mobility6a);
  
	// Click refresh
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"cmdRefresh\")");
  
	// Check no values in drop downs
	mvVerify.verifyObjectProperty(vProcess, "Name", "WPFObject(\"cboTextCombo_1\")", "Text", "", "History 1A");
	mvVerify.verifyObjectProperty(vProcess, "Name", "WPFObject(\"cboTextCombo_2\")", "Text", "", "History 1B");
	mvVerify.verifyObjectProperty(vProcess, "Name", "WPFObject(\"cboTextCombo_3\")", "Text", "", "Mental 2A");
	mvVerify.verifyObjectProperty(vProcess, "Name", "WPFObject(\"cboTextCombo_4\")", "Text", "", "Mental 2B");
	mvVerify.verifyObjectProperty(vProcess, "Name", "WPFObject(\"cboTextCombo_5\")", "Text", "", "Mental 2C");
	mvVerify.verifyObjectProperty(vProcess, "Name", "WPFObject(\"cboTextCombo_6\")", "Text", "", "Vision 3A");
	mvVerify.verifyObjectProperty(vProcess, "Name", "WPFObject(\"cboTextCombo_7\")", "Text", "", "Vision 3B");
	mvVerify.verifyObjectProperty(vProcess, "Name", "WPFObject(\"cboTextCombo_8\")", "Text", "", "Vision 3C");
	mvVerify.verifyObjectProperty(vProcess, "Name", "WPFObject(\"cboTextCombo_9\")", "Text", "", "Toileting 4A");
	mvVerify.verifyObjectProperty(vProcess, "Name", "WPFObject(\"cboTextCombo_10\")", "Text", "", "Transfer 5A");
	mvVerify.verifyObjectProperty(vProcess, "Name", "WPFObject(\"cboTextCombo_11\")", "Text", "", "Mobility 6A");
	mvVerify.verifyObjectProperty(vProcess, "Name", "WPFObject(\"txtFormula_1\")", "Text", "Not Assessed", "Fall Total Score");

	// Enter the values on the form
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_1\")", patientScore.History1a);
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_2\")", patientScore.History1b);
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_3\")", patientScore.Mental2a);
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_4\")", patientScore.Mental2b);
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_5\")", patientScore.Mental2c);
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_6\")", patientScore.Vision3a);
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_7\")", patientScore.Vision3b);
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_8\")", patientScore.Vision3c);
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_9\")", patientScore.Toileting4a);
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_10\")", patientScore.Transfer5a);
	mvObjects.selectComboItem(vProcess, "WPFObject(\"cboTextCombo_11\")", patientScore.Mobility6a);
  
	// Get the save time value
	var timeSavedValue = mvObjects.getObjectProperty(vProcess, "Name", "WPFObject(\"mvtFormTime\")", "Value"); 
	timeSavedValue = aqString.Replace(timeSavedValue, ":00", "", false);
	timeSavedValue = aqString.Replace(timeSavedValue, "0", "", false);
	Log.Message("Saved Time: "+ timeSavedValue);
  
	// save the form data
	mvNavigation.saveForm("Save");
	aqUtils.Delay(500); // Handle redisplay of form
	
	// Verify totalled score
	mvVerify.verifyObjectProperty(vProcess, "Name", "WPFObject(\"txtFormula_1\")", "Text", patientScore.Score, "Fall Total Score");

	mvNavigation.saveForm("Refresh");
	mvNavigation.saveForm("Close");
	
	// Check Previous Session data
	// Open Fall Assessment Tool
	mvNavigation.selectMenuOption("Scores", "Falls Risk Assessment Tool");
	mvObjects.waitForObject(vProcess, "WPFObject(\"TextBlock\", \"*Falls Risk Assessment Tool (Adult) : New Session\", 1)", 120);

	// open previous session
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"cmdCancelNewSession\")");  
	mvObjects.waitForObject(vProcess, "WPFObject(\"sessionscontrol\")", 30);

	// Check no values in drop downs
	mvVerify.verifyObjectProperty(vProcess, "Name", "WPFObject(\"cboTextCombo_1\")", "Text", patientScore.History1a, "History 1A");
	mvVerify.verifyObjectProperty(vProcess, "Name", "WPFObject(\"cboTextCombo_2\")", "Text", patientScore.History1b, "History 1B");
	mvVerify.verifyObjectProperty(vProcess, "Name", "WPFObject(\"cboTextCombo_3\")", "Text", patientScore.Mental2a, "Mental 2A");
	mvVerify.verifyObjectProperty(vProcess, "Name", "WPFObject(\"cboTextCombo_4\")", "Text", patientScore.Mental2b, "Mental 2B");
	mvVerify.verifyObjectProperty(vProcess, "Name", "WPFObject(\"cboTextCombo_5\")", "Text", patientScore.Mental2c, "Mental 2C");
	mvVerify.verifyObjectProperty(vProcess, "Name", "WPFObject(\"cboTextCombo_6\")", "Text", patientScore.Vision3a, "Vision 3A");
	mvVerify.verifyObjectProperty(vProcess, "Name", "WPFObject(\"cboTextCombo_7\")", "Text", patientScore.Vision3b, "Vision 3B");
	mvVerify.verifyObjectProperty(vProcess, "Name", "WPFObject(\"cboTextCombo_8\")", "Text", patientScore.Vision3c, "Vision 3C");
	mvVerify.verifyObjectProperty(vProcess, "Name", "WPFObject(\"cboTextCombo_9\")", "Text", patientScore.Toileting4a, "Toileting 4A");
	mvVerify.verifyObjectProperty(vProcess, "Name", "WPFObject(\"cboTextCombo_10\")", "Text", patientScore.Transfer5a, "Transfer 5A");
	mvVerify.verifyObjectProperty(vProcess, "Name", "WPFObject(\"cboTextCombo_11\")", "Text", patientScore.Mobility6a, "Mobility 6A");
	mvVerify.verifyObjectProperty(vProcess, "Name", "WPFObject(\"txtFormula_1\")", "Text", patientScore.Score, "Fall Total Score");

	mvNavigation.saveForm("Close");
}

module.exports.behaviouralPainScale = behaviouralPainScale;
module.exports.fallRiskAssessment = fallRiskAssessment;