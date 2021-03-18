var PDF_Function = require("PDF_Function");
var Features = require("Features");
var mvObjects = require("mvObjects");

//******************************************************************************************//
//******************************************************************************************//
// Name :JIRA18931
// Desc :https://iccis-jira.atlassian.net/browse/IS-18931 - add description
// Owner : 
// Creation date: 12/03/2019
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//
function JIRA18931(TestName)
{
var exestatus = true;
    
  // add a comment
  //Login
  exestatus = Features.MvLogin(TestName,exestatus);
  
  //Register patients
  for(pcount = 101; pcount <= 200; pcount++)
  {
    exestatus = Features.MvPatientRegisterQuick(TestName,pcount,exestatus);
  } 
  
  //Enter the Patient details for each of the patients created
  for(pcount = 101; pcount <= 200; pcount++)
  {
    exestatus = Features.MvPopulatePatientData(TestName,pcount,exestatus);
  }
  
  //Release the entered patients
  //for(pcount = 1; pcount <= 20; pcount++)
  //{
    //exestatus = Features.MvReleasePatientAtWorkList(TestName,20,exestatus);
  //}
  
  //Logout
  exestatus = Features.MvLogout(TestName,exestatus);
  
}