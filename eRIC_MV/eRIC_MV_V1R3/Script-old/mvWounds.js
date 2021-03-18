var Data = require("Data");
var mvPatient = require("mvPatient");
var mvNavigation = require("mvNavigation");
var mvObjects = require("Base_Objects");
var mvVerify = require("mvVerify");

function enterWounds() {

	vProcess = Sys.Process("iMDSoft.Metavision");

	// Open Wounds tab
	mvNavigation.selectMenuTab("Wounds");
	mvObjects.waitForObject(vProcess, "WPFObject(\"ImdButton\", \"\", 1)", 120);

	// open the body chart
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"ImdButton\", \"\", 1)");
	mvObjects.waitForObject(vProcess, "WPFObject(\"TextBlock\", \"*Wound Manager : New Session\", 1)", 120);
  
	// Click the head square on body and top head square to open details form
	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"cmdAction_30\")");
	aqUtils.Delay(500); // Handle redisplay of form

	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"cmdAction_102\")");
	mvObjects.waitForObject(vProcess, "WPFObject(\"TextBlock\", \"*Wound - Head 1 : New Session\", 1)", 120);
  
	woundManDataEntry();	

	sessionTime = mvNavigation.getformTime("Wounds Head");
	
	// base search window
	searchWindows = vProcess.FindAll("Name", "WPFObject(\"frmMain\", \"\", 1)", 100);
	searchWindows = (new VBArray(searchWindows)).toArray();
	searchWindow = searchWindows[searchWindows.length-1];
	
	// save the form data
	mvObjects.buttonClick(searchWindow, "Name", "WPFObject(\"cmdApply\")");

	// wait for the form to save. maybe this object if below don't work -> WPFObject("sessionscontrol")  
	mvObjects.waitForObject(searchWindow, "WPFObject(\"cmdCancelNewSession\")", 120);
  
	// Click Refresh
	mvObjects.buttonClick(searchWindow, "Name", "WPFObject(\"cmdRefresh\")"); 
	aqUtils.Delay(500); // Handle redisplay of form
	  
	// close the form 
	mvObjects.buttonClick(searchWindow, "Name", "WPFObject(\"cmdCancel\")");

	// Save Wound Manager and close
	mvNavigation.saveForm("Save");
	mvNavigation.saveForm("Close");

}

function woundManDataEntry() {
 
  // Get the metavision process
  vProcess = Sys.Process("iMDSoft.Metavision");
  
  // base search window
  searchWindows = vProcess.FindAll("Name", "WPFObject(\"frmMain\", \"\", 1)", 100);
  searchWindows = (new VBArray(searchWindows)).toArray();
  
  searchWindow = searchWindows[searchWindows.length-1];
  
  mvObjects.buttonClick(searchWindow, "Name", "WPFObject(\"cmdAction_1\")");
  aqUtils.Delay(500);
  
  // Enter the details                                            Observation only
  //selectComboItem(searchWindow, "WPFObject(\"cboTextCombo_1\")", "Observation only");
  comboBox = searchWindow.Find("Name", "WPFObject(\"cboTextCombo_1\")", 1000);
  comboBox.click();
  aqUtils.Delay(500);
  PropArray = new Array("ClrClassName", "WPFControlText");
  ValuesArray = new Array("ImdComboBoxItem", "Observation only");
  mvObjects.buttonClick(vProcess, PropArray, ValuesArray);
  
  vDateIdentifiedObject = searchWindow.Find("Name", "WPFObject(\"dtpDate_1\")", 100);
  vDateIdentifiedObject.Click(10,10);
  
  // Find top list box object
  listBox1 = searchWindow.Find("Name", "WPFObject(\"lstTextList_1\")", 100);
  itemToClick = listBox1.Find("Name", "WPFObject(\"ListBoxItem\", \"\", 1)", 100);
  //WPFObject("ListBoxItem", "", 1)
  
  comboBox = searchWindow.Find("Name", "WPFObject(\"cboTextCombo_4\")", 1000);
  comboBox.click();
  aqUtils.Delay(500);
  PropArray = new Array("ClrClassName", "WPFControlText");
  ValuesArray = new Array("ImdComboBoxItem", "Scalp");
  mvObjects.buttonClick(vProcess, PropArray, ValuesArray);
  //selectComboItem(searchWindow, "WPFObject(\"cboTextCombo_4\")", "Scalp");
  mvObjects.enterEditText(searchWindow, "WPFObject(\"txtNumeric_1\")", "2");
  mvObjects.enterEditText(searchWindow, "WPFObject(\"txtNumeric_2\")", "2");
  mvObjects.enterEditText(searchWindow, "WPFObject(\"txtNumeric_3\")", "2");
  
  //WPFObject("ListBoxItem", "", 1)
  listBox1 = searchWindow.Find("Name", "WPFObject(\"lstTextList_7\")", 100);
  itemToClick = listBox1.Find("Name", "WPFObject(\"ListBoxItem\", \"\", 1)", 100);
  
  mvObjects.buttonClick(searchWindow, "Name", "WPFObject(\"cmdTabDoun\")");
  aqUtils.Delay(500);

  mvObjects.enterEditText(searchWindow, "WPFObject(\"txtFreeText_8\")", "this is for automation testing");
  
  mvObjects.buttonClick(searchWindow, "Name", "WPFObject(\"cmdTabUp\")");
  aqUtils.Delay(500);
  
  // Management Log button
  mvObjects.buttonClick(searchWindow, "Name", "WPFObject(\"cmdAction_2\")");
  mvObjects.buttonClick(searchWindow, "Name", "WPFObject(\"cmdAction_5\")"); // new entry
  aqUtils.Delay(500);
  
  // Click images button
  mvObjects.buttonClick(searchWindow, "Name", "WPFObject(\"cmdAction_3\")");
  
  // Add a log image
  mvObjects.buttonClick(searchWindow, "Name", "WPFObject(\"cmdAction_4\")");

} // woundManDataEntry

module.exports.enterWounds = enterWounds;