var Data = require("Data");
// Requires
var mvObjects = require("Base_Objects");

function startMetaVision(userName, userPassword, userDepartment) {

	var vProcess;
	var control;
	var password;
	
	//Terminate any existing MV Process to tidy up
	if (Sys.WaitProcess("iMDSoft.Metavision").Exists)
		Sys.Process("iMDSoft.Metavision").Terminate();
	 
   	// Start MV
	TestedApps.iMDSoft_Metavision.Run();
	
	// use default password if not passed in
	if (equal(userPassword, "")) {
		password = "P@ssword1";
	} else {
  		password = userPassword;
	}
	
   	vProcess = Sys.Process("iMDSoft.Metavision");
  	// Wait for the login screen to appear
  	mvObjects.waitForObject(vProcess, "WPFObject(\"cboUserName\")", 120);

  	// Enter Login details
  	mvObjects.enterEditText(vProcess, "WPFObject(\"cboUserName\")", userName);
  	mvObjects.enterEditText(vProcess, "WPFObject(\"passwordBox1\")", password);
  	mvObjects.enterEditText(vProcess, "WPFObject(\"cboDepartment\")", userDepartment);
  	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"btnLogin\")");
  
  	mvObjects.waitForObject(vProcess, "WPFObject(\"HwndSource\: root\")", 30000);
  	//Objects.txtParamName1.Check(Aliases.iMDSoft_Metavision.HwndSource_root.root.Part_MainPlaceHolder.FloatingDockPanel.Grid.Items.ContentControl.patientView.Grid.ContentControl.FooterView.Grid.Grid.footerItemsGrid.ContentPresenter.Border.StackPanel.txtParamName);

	// Check if unsigned actions still open dialog exists and close
	if (vProcess.Find("Name", "WinFormsObject(\"OK\")", 1000).Exists) {
		mvObjects.buttonClick(vProcess, "Name", "WinFormsObject(\"OK\")"); 
	}	 
	
  	// check if on Worklist screen. If so, close Worklist 
   control = vProcess.Find("Name", "WPFObject(\"view\")", 1000);
   if (control.Exists) {
  	  control = vProcess.Find("ToolTip", "Close", 1000);
  	  control.click();
	}
} // startMetaVision

// Default startMV login
function startMVTest() {
	startMetaVision("Paul", "iccis", "*ad", "true");
}

function logoutMV() {

	vProcess = Sys.Process("iMDSoft.Metavision");
	iMDSoft_Metavision = Aliases.iMDSoft_Metavision;
  
	//iMDSoft_Metavision.HwndSource_root.root.Part_MainPlaceHolder.FloatingDockPanel.Grid.Items.ContentControl.patientView.Grid.ContentControl3.root.Grid.Menu.Click(1346, 12);
	aqUtils.Delay(1000);
   
	selectMenuOption("Log Out");
	
} // logoutMV

function exitMV() {

	vProcess = Sys.Process("iMDSoft.Metavision");
	
 	// Exit
  	mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"btnClose\")");
 	
} 

function changeMainLayout(screenLayout) {

  // Main MV process
  vProcess = Sys.Process("iMDSoft.Metavision");
  
  // Select Change the layout
  PropArray = new Array("Text", "Visible");
  ValuesArray = new Array("Main", true);
  buttonClick(vProcess, PropArray, ValuesArray);
  
  PropArray = new Array("Text", "Visible");
  ValuesArray = new Array("Change Layout", true);
  mvObjects.buttonClick(vProcess, PropArray, ValuesArray);
  
  // Wait for the change dialog to appear
  waitForObject(vProcess, "WinFormsObject(\"fraLayouts\")", 60);
 
  // Loop for the expected form
  var formsList = vProcess.Find("Name", "WinFormsObject(\"mvlstLayouts\")", 1000);
  formsList.Keys("[Home]")
  var lastItem = "noLastItem";
  var isFound = false;
  var selectedText = "";
  
  while (lastItem != selectedText && !isFound) {
    selectedText = getObjectProperty(vProcess, "Name", "WinFormsObject(\"mvlstLayouts\")", "Text");
    if (aqString.Compare(selectedText, screenLayout, false) == 0) {
      isFound = true;
      //break;
    } // if
    formsList.Keys("[Down]")
    aqUtils.Delay(500);
    selectedText = getObjectProperty(vProcess, "Name", "WinFormsObject(\"mvlstLayouts\")", "Text");
    lastItem = selectedText;
    
  } // while

  aqUtils.Delay(500);
  mvObjects.buttonClick(vProcess, "Name", "WinFormsObject(\"CmdOk\")");     
} // changeMainLayout

function changeMainLayout_test() {
  changeMainLayout("Adult");
} // changeMainLayout_test

// General function select any top menu option
function selectMenuTab(menuTabName) {

	vProcess = Sys.Process("iMDSoft.Metavision");

	// Open menu tab
	PropArray = new Array("WPFControlText", "Visible");
	ValuesArray = new Array(menuTabName, true);
	mvObjects.buttonClick(vProcess, PropArray, ValuesArray);
	aqUtils.Delay(1000);
}

// General function select any top menu option
function selectMenuOption(menuName, menuOption, menuSubOption1, menuSubOption2, menuSubOption3, menuSubOption4, menuSubOption5) {

	vProcess = Sys.Process("iMDSoft.Metavision");

	// Open top level menu
	PropArray = new Array("Text", "Visible");
	ValuesArray = new Array(menuName, true);
	mvObjects.buttonClick(vProcess, PropArray, ValuesArray);
  
	// Open menu Option
	if (!equal(menuOption, undefined)) {
	   PropArray = new Array("Text", "Visible");
	   ValuesArray = new Array(menuOption, true);
	   mvObjects.buttonClick(vProcess, PropArray, ValuesArray); 
	}
	  
	// Open menu subOption1
	if (!equal(menuSubOption1, undefined)) {
	   PropArray = new Array("Text", "Visible");
	   ValuesArray = new Array(menuSubOption1, true);
	   mvObjects.buttonClick(vProcess, PropArray, ValuesArray); 
	}

	// Open menu subOption2
	if (!equal(menuSubOption2, undefined)) {
	   PropArray = new Array("Text", "Visible");
	   ValuesArray = new Array(menuSubOption2, true);
	   mvObjects.buttonClick(vProcess, PropArray, ValuesArray); 
	}

	// Open menu subOption3
	if (!equal(menuSubOption3, undefined)) {
	   PropArray = new Array("Text", "Visible");
	   ValuesArray = new Array(menuSubOption3, true);
	   mvObjects.buttonClick(vProcess, PropArray, ValuesArray); 
	}

	// Open menu subOption4
	if (!equal(menuSubOption4, undefined)) {
	   PropArray = new Array("Text", "Visible");
	   ValuesArray = new Array(menuSubOption4, true);
	   mvObjects.buttonClick(vProcess, PropArray, ValuesArray); 
	}

	// Open menu subOption5
	if (!equal(menuSubOption5, undefined)) {
	   PropArray = new Array("Text", "Visible");
	   ValuesArray = new Array(menuSubOption5, true);
	   mvObjects.buttonClick(vProcess, PropArray, ValuesArray); 
	}
}

function saveForm(saveType) {

	vProcess = Sys.Process("iMDSoft.Metavision");

	switch(saveType) {
		case "Save":
			// save the form data
			mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"cmdApply\")"); break;
			
		case "SaveClose":
			mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"cmdSave\")"); break;
		
		case "Refresh":
			mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"cmdRefresh\")"); break;
	
		case "Close":
			// close the form 
			mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"cmdCancel\")");
            retcode = vProcess.Find("Name", "WinFormsObject(\"No\")", 1000);
            if (retcode.exists) {
    	        mvObjects.buttonClick(vProcess, "Name", "WinFormsObject(\"No\")");
            }
			mvObjects.waitForObjectNotVisible(vProcess, "WPFObject(\"cmdCancel\")", 120);
			break;
		
		default:
			Log.Error("Invalid Save Type: " + saveType);
	}	
}

function getformTime(formName) {

	// Get the save time value
	var timeSavedValue = mvObjects.getObjectProperty(vProcess, "Name", "WPFObject(\"mvtFormTime\")", "Value"); 
	timeSavedValue = aqString.Replace(timeSavedValue, ":00", "", false);
	timeSavedValue = aqString.Replace(timeSavedValue, "0", "", false);
	Log.Message(formName + " Saved Time: "+ timeSavedValue);
 
	return timeSavedValue;	
}


	

module.exports.startMetaVision = startMetaVision;
module.exports.startMVTest = startMVTest;
module.exports.logoutMV = logoutMV;
module.exports.changeMainLayout = changeMainLayout;
module.exports.selectMenuOption = selectMenuOption;
module.exports.exitMV = exitMV;
module.exports.saveForm = saveForm;
module.exports.getformTime = getformTime;
module.exports.selectMenuTab = selectMenuTab;