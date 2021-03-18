var Data = require("Data");
// Requires
var mvNavigation = require("mvNavigation");
var mvPatient = require("mvPatient");
var mvObjects = require("Base_Objects");

function verifyStatusBar(user, facility, status, research) {

	vProcess = Sys.Process("iMDSoft.Metavision");
	
	// find Status bar object
	vContentControl5 = vProcess.Find("Name", "WPFObject(\"ContentControl\", \"\", 5)", 1000);
	
	// Check logged in user
	vGrid1 = vContentControl5.Find("Name", "WPFObject(\"ContentPresenter\", \"\", 1)", 1000);
	vStatusBarText1 = mvObjects.getObjectProperty(vGrid1, "Name", "WPFObject(\"txtParamValue\")", "Text");
	if (aqString.Compare(vStatusBarText1, user + " " + user, false) == 0) {
	   Log.Checkpoint(user + " user logged on");
	} else {
	   Log.Message("User found value: " + vStatusBarText1)
	}
	
	// Check for correct facility
 	vGrid2 = vContentControl5.Find("Name", "WPFObject(\"ContentPresenter\", \"\", 2)", 1000);
	vStatusBarText2 = mvObjects.getObjectProperty(vGrid2, "Name", "WPFObject(\"txtParamValue\")", "Text");
	if (aqString.Compare(vStatusBarText2, facility, false) == 0) {
	   Log.Checkpoint(facility + " Department Loaded");
	} else {
	   Log.Error(facility + " Department not loaded, found value: " + vStatusBarText2);
	}

	// Check for correct status
	if (!equal(status, undefined)) {
	 	vGrid2 = vContentControl5.Find("Name", "WPFObject(\"ContentPresenter\", \"\", 3)", 1000);
		vStatusBarText3 = mvObjects.getObjectProperty(vGrid2, "Name", "WPFObject(\"txtParamValue\")", "Text");
		if (aqString.Compare(vStatusBarText3, status, false) == 0) {
		   Log.Checkpoint("Patient Status is " + status);
		} else {
		   Log.Error("Patient Status should be " + status + ". Found status: " + vStatusBarText3);
		}
	}
	
	// Check for correct Research Studies
	if (!equal(research, undefined)) {
	 	vGrid2 = vContentControl5.Find("Name", "WPFObject(\"ContentPresenter\", \"\", 5)", 1000);
		vStatusBarText4 = mvObjects.getObjectProperty(vGrid2, "Name", "WPFObject(\"txtParamValue\")", "Text");
		if (aqString.Compare(vStatusBarText4, research, false) == 0) {
		   Log.Checkpoint("Research Studies are " + research);
		} else {
		   Log.Error("Research Studies are " + research + ". Found research: " + vStatusBarText4);
		}
	}
}

function verifyObjectProperty(parent, attribute, object, property, expectedValue, elementname) {

	vproperty = mvObjects.getObjectProperty(parent, attribute, object, property);
	if (aqString.Compare(vproperty, expectedValue, false) == 0) {
		Log.Checkpoint(elementname + " found: " + expectedValue);
	} else {
	   	Log.Error(elementname + " expected: " + expectedValue + " Found value: " + vproperty)
	}
}


module.exports.verifyStatusBar = verifyStatusBar;
module.exports.verifyObjectProperty = verifyObjectProperty;