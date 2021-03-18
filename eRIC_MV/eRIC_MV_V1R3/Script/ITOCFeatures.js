var PDF_Function = require("PDF_Function");
var PDF_Function = require("PDF_Function");
var mvObjects = require("mvObjects");
var Data = require("Data");
var webObjects = require("webObjects");


//******************************************************************************************//
//******************************************************************************************//
// Name :MvLogin
// Desc :Function to login to MV
// Owner :Arul 
// Creation date:June 2017
// Update By : 
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//
// Feature created for Login to MV
function MvLogin(TestName,exestatus)
{// starting the TC execution;
 //var objData = Data.getData(TestName,"Navigation");
 var tcDesc = Data.getData(TestName,"Navigation","TC_DESC");
 Log.Checkpoint("Start Test Case "+tcDesc );
//Controller for executing or skipping the feature
if (equal(exestatus,true)) {

//Start of the feature 
Log.Checkpoint("Start Login","The flow is started");

//object to fetch all the data for the parameter
   
    var userName = Data.getData(TestName,"Navigation","UserID");
    var password = Data.getData(TestName,"Navigation","Password");
    var userDepartment = Data.getData(TestName,"Navigation","Department");
    
//Terminate any existing MV Process to tidy up
	if (Sys.WaitProcess("iMDSoft.Metavision").Exists){
  	vProcess = Sys.Process("iMDSoft.Metavision");
  if (vProcess.Find("Name", "WPFObject(\"cboUserName\")", 1000).Exists){
    Log.Message("Already session is active and Relogging in it." );
  
  }
  else {
		Sys.Process("iMDSoft.Metavision").Terminate();
      	// Start MV
    Log.Message("Terminating Metavision session and opening new one");   
  //  var WinFolder = "C:\\Program Files (x86)\\Metavision\\iMDSoft.Metavision.exe";  
    //DbgServices.LaunchApplication(WinFolder);
    TestedApps.iMDSoft_Metavision.Run();
     var Res = Sys.Process("iMDSoft.Metavision").Exists;
   
  // Checks whether MV has started successfully
  if (Res) {
    Log.Picture(Sys.Desktop.Picture());
    Log.Checkpoint("MetaVision has been started successfully.");}
  else{
    Log.Error("MetaVision hasn't been started.");
    exestatus = false;}
    
       }
   
	 }
   else {
    Log.Message("Opening new session of Metavision");   
  	//TestedApps.iMDSoft_Metavision.Run(); 
   // var WinFolder = "C:\\Program Files (x86)\\Metavision\\iMDSoft.Metavision.exe";  
    //DbgServices.LaunchApplication(WinFolder);
    TestedApps.iMDSoft_Metavision.Run();
     var Res = Sys.Process("iMDSoft.Metavision").Exists;
   
  // Checks whether MV has started successfully
  if (Res) {
    Log.Picture(Sys.Desktop.Picture());
    Log.Checkpoint("MetaVision has been started successfully.");}
  else {
    Log.Error("MetaVision hasn't been started.");
    exestatus = false;}
    
     }

	
	// use default password if not passed in
	if (equal(password, "")) {
		password = "P@ssword1";
	} else {
  		password = password;
	}
	
   	vProcess = Sys.Process("iMDSoft.Metavision");
    MemoryVal = vProcess.MemUsage
     Log.Message("The Memory of MetaVision application at Login is "+(MemoryVal/1000)+ " MB."  );  
    
  	// Wait for the login screen to appear
  	exestatus = mvObjects.waitForObject(vProcess, "WPFObject(\"cboUserName\")", 120,exestatus);

  	// Enter Login details
  	exestatus = mvObjects.enterEditText(vProcess, "WPFObject(\"cboUserName\")", userName,exestatus);
  	exestatus = mvObjects.enterEditText(vProcess, "WPFObject(\"passwordBox1\")", password,exestatus);
  	exestatus = mvObjects.enterEditText(vProcess, "WPFObject(\"cboDepartment\")", userDepartment,exestatus);
  	exestatus = mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"btnLogin\")",exestatus);

    Sys.WaitProcess("iMDSoft.Metavision",1000);  
    
    	// Check if unsigned actions still open dialog exists and close
	if (vProcess.Find("Name", "WinFormsObject(\"OK\")", 1000).Exists) {
		
    details = mvObjects.getObjectProperty(vProcess, "Name", "WinFormsObject(\"Message\")", "Text",exestatus);
    Log.Error("Login",details)
    exestatus = mvObjects.buttonClick(vProcess, "Name", "WinFormsObject(\"OK\")",exestatus);
    
    exestatus = false;
	}	 
  else {
  	exestatus = mvObjects.waitForObject(vProcess, "WPFObject(\"HwndSource\: root\")", 30000,exestatus);
    }
  	//Objects.txtParamName1.Check(Aliases.iMDSoft_Metavision.HwndSource_root.root.Part_MainPlaceHolder.FloatingDockPanel.Grid.Items.ContentControl.patientView.Grid.ContentControl.FooterView.Grid.Grid.footerItemsGrid.ContentPresenter.Border.StackPanel.txtParamName);


	
  	// check if on Worklist screen. If so, close Worklist 
   control = vProcess.Find("Name", "WPFObject(\"view\")", 1000);
   if (control.Exists) {
  	  control = vProcess.Find("ToolTip", "Close", 1000);
  	  control.click();
      Log.Checkpoint("MetaVision logged in successfully as '"+ userName+"'" );
      Log.Checkpoint("End Login","MetaVision logged in successfully.");
      
      Log.Picture(Sys.Desktop.Picture());
	}
  
  }
  else {
  Log.Message("Skip Login","The feature is skipped since the execution status is set as '"+exestatus+"'"); 
  
  }
  return exestatus;
    
}
//******************************************************************************************//
//******************************************************************************************//
// Name :MvLogout
// Desc :Function to logout of MV
// Owner :Arul 
// Creation date:June 2017
// Update By : 
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//
// Feature created for Logout of MV
function MvLogout(TestName,exestatus)
{
 //var objData = Data.getData(TestName,"Navigation");
 
if (equal(exestatus,true)) {

Log.Checkpoint("Start Logout","The flow is started");   

//object to fetch all the data for the parameter
 
   
  
    vProcess = Sys.Process("iMDSoft.Metavision");
	
    iMDSoft_Metavision = Aliases.iMDSoft_Metavision;
   
   
   // iMDSoft_Metavision.HwndSource_root.root.FloatingDockPanel.Grid.Items.ContentControl.Grid.ContentControl.Menu.WPFMenu.Click("[2]|[12]");
     iMDSoft_Metavision.HwndSource_root.root.FloatingDockPanel.Grid.Items.Menu.WPFMenu.Click("[11]");
     
    //exestatus = mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"btnLogin\")",exestatus);
    
    control = vProcess.Find("Name", "WPFObject(\"cboUserName\")", 1000);
   if (control.Exists) {
     Log.Checkpoint("MetaVision session loggged out successfully.");
     Log.Checkpoint("End Logout","MetaVision session loggged out successfully.");
     Log.Picture(Sys.Desktop.Picture());
     MemoryVal = vProcess.MemUsage
     vProcess = null;
     Log.Message("The Memory of MetaVision application at Logout is "+(MemoryVal/1000)+" MB." );  
   }
   else
   {
    Log.Error("Logout","MetaVision session is NOT loggged out successfully.");
    exestatus = false;
   }
   
 }
  else {
  Log.Message("Skip Logout","The feature is skipped since the execution status is set as '"+exestatus+"'");   
  }
 

 var tcDesc = Data.getData(TestName,"Navigation","TC_DESC");
 Log.Checkpoint("End Test Case "+tcDesc );   
  return exestatus;

}