var PDF_Function = require("PDF_Function");
var Features = require("Features");
var mvObjects = require("mvObjects");

//******************************************************************************************//
//******************************************************************************************//
// Name :OR_SUMMARY01
// Desc :Regression to test the Summary from operational reports
// Owner :Mohammad Zeeshan 
// Creation date: 20/05/2019
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//
function OR_SUMMARY01(TestName)
{
  var exestatus = true;
  var browser;
    
  //Login
  exestatus = Features.MvLogin(TestName,exestatus);
  
  //Admit a patient in ICU - this is required to load the correct department in Operational reports
  exestatus = Features.MvPatientRegister(TestName,exestatus);
  
  //Launch the operational reports
  exestatus = Features.MvLaunchOperationalReports(TestName, browser, exestatus);
  
  //Launch the summary report and note the previous counts of
  //Number of Admissions 
  //Number of ICU Admissions 
  //Number of HDU Admissions 
  //Number of CCU Admissions 
  //Number of Undocumented Admissions 
  //Number of Patients 
  //Number of ICU Deaths
  exestatus = Features.MvExtractInitialOpReports(TestName, browser, exestatus);
  
  //Admit a patient in ICU - to check admission count is increased
  exestatus = Features.MvPatientRegister(TestName,exestatus);
  
  //Verify the number of Admissions - OR = Operational reports
  exestatus = Features.MvVerifyFinalOR(TestName, "numberOfAdmissions" ,exestatus);
  
  //Verify the number of Undocumented admissions
  exestatus = Features.MvVerifyFinalOR(TestName, "numberOfUndocAdmissions" ,exestatus);
  
  //Enter admission summary details - default to ICU
  exestatus = Features.MvAdmissionSummary(TestName,exestatus);
  
  //Verify the number of ICU admissions
  exestatus = Features.MvVerifyFinalOR(TestName, "numberOfICUAdmissions" ,exestatus);
  
  //Change the type of care to HDU
  exestatus = Features.MvChangeTypeOfAdmission(TestName, "HDU", exestatus)
  
  //Verify the number of HDU admissions
  exestatus = Features.MvVerifyFinalOR(TestName, "numberOfHDUAdmissions" ,exestatus);
  
  //Change the type of care to CCU
  exestatus = Features.MvChangeTypeOfAdmission(TestName, "CCU", exestatus)
  
  //Verify the number of CCU admissions
  exestatus = Features.MvVerifyFinalOR(TestName, "numberOfCCUAdmissions" ,exestatus);   
  
  //Fill discharge summary as died and then release the patient
  exestatus = Features.MVMedicalDischargeSummary(TestName,exestatus);
  exestatus = Features.MvReleasePatient(TestName,exestatus);
  
  //Verify the number of ICU deaths
  exestatus = Features.MvVerifyFinalOR(TestName, "numberOfICUDeaths" ,exestatus);
  
  //Verify the number of Patients
  exestatus = Features.MvVerifyFinalOR(TestName, "numberOfPatients" ,exestatus);
  
  //Logout
  exestatus = Features.MvLogout(TestName,exestatus);
  
  //Close the browser after report is verified
  exestatus = Features.MvBrowserLogout(TestName, browser, exestatus);
}

//******************************************************************************************//
//******************************************************************************************//
// Name :OR_ExitBlockFromICU
// Desc :Regression to test the ExitBlockFromICU from operational reports
// Owner :Mohammad Zeeshan 
// Creation date: 29/05/2019
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//
function OR_ExitBlockFromICU(TestName)
{
  var exestatus = true;
  var browser;
    
  //Login
  exestatus = Features.MvLogin(TestName,exestatus);
  
  //Admit a patient in ICU - this is required to load the correct department in Operational reports
  exestatus = Features.MvPatientRegister(TestName,exestatus);
  
  //Launch the operational reports
  exestatus = Features.MvLaunchOperationalReports(TestName, browser, exestatus);
  
  //Launch the summary report and note the previous counts of
  //Number of ICU cases discharged alive from ICU 
  exestatus = Features.MvExtractInitialOpReports(TestName, browser, exestatus);
  
  //Admit a patient in ICU 
  exestatus = Features.MvPatientRegister(TestName,exestatus);
  
  //Fill discharge summary as died and then release the patient
  exestatus = Features.MVMedicalDischargeSummary(TestName,exestatus);
  exestatus = Features.MvReleasePatient(TestName,exestatus);
  
  //Verify the number of ICU cases discharged alive
  exestatus = Features.MvVerifyFinalOR(TestName, "caseDischargedAliveFrmICU" ,exestatus);
  
  //Logout
  exestatus = Features.MvLogout(TestName,exestatus);
  
  //Close the browser after report is verified
  exestatus = Features.MvBrowserLogout(TestName, browser, exestatus);
}

//******************************************************************************************//
//******************************************************************************************//
// Name :OR_AdmssnDueToRRT
// Desc :Regression to test Admssn Due To RRT from operational reports
// Owner :Mohammad Zeeshan 
// Creation date: 29/05/2019
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//
function OR_AdmssnDueToRRT(TestName)
{
  var exestatus = true;
  var browser;
    
  //Login
  exestatus = Features.MvLogin(TestName,exestatus);
  
  //Admit a patient in ICU - this is required to load the correct department in Operational reports
  exestatus = Features.MvPatientRegister(TestName,exestatus);
  
  //Launch the operational reports
  exestatus = Features.MvLaunchOperationalReports(TestName, browser, exestatus);
  
  //Launch the summary report and note the previous counts of
  //Number of ICU cases due to RRC
  exestatus = Features.MvExtractInitialOpReports(TestName, browser, exestatus);
  
  //Admit a patient in ICU 
  exestatus = Features.MvPatientRegister(TestName,exestatus);
  
  //Enter admission summary details - ICU admission due to RRC
  exestatus = Features.MvAdmissionSummary(TestName,exestatus);
  
  //Verify the number of ICU cases due to RRC
  exestatus = Features.MvVerifyFinalOR(TestName, "numberOfICUDueToRRC" ,exestatus);
  
  //Logout
  exestatus = Features.MvLogout(TestName,exestatus);
  
  //Close the browser after report is verified
  exestatus = Features.MvBrowserLogout(TestName, browser, exestatus);
}

//******************************************************************************************//
//******************************************************************************************//
// Name :OR_AfterHrsDschrge
// Desc :Regression to test count of after hours discharge
// Owner :Mohammad Zeeshan 
// Creation date: 29/05/2019
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//
function OR_AfterHrsDschrge(TestName)
{
  var exestatus = true;
  var browser;
    
  //Login
  exestatus = Features.MvLogin(TestName,exestatus);
  
  //Admit a patient in ICU - this is required to load the correct department in Operational reports
  exestatus = Features.MvPatientRegister(TestName,exestatus);
  
  //Launch the operational reports
  exestatus = Features.MvLaunchOperationalReports(TestName, browser, exestatus);
  
  //Launch the summary report and note the previous counts of
  //Number of ICU cases due to RRC
  exestatus = Features.MvExtractInitialOpReports(TestName, browser, exestatus);
  
  //Admit a patient in ICU 
  exestatus = Features.MvPatientRegister(TestName,exestatus);
  
  //Enter admission summary details - ICU admission due to RRC
  exestatus = Features.MvAdmissionSummary(TestName,exestatus);
  
  //Enter the Discharge time in the form Admission/Discharge time
  exestatus = Features.MvVerifyAdmissionDischargeTime(TestName,exestatus);
  
  //Enter the medical discharge form
  exestatus = Features.MVMedicalDischargeSummary(TestName,exestatus);
  
  //Release the patient
  exestatus = Features.MvReleasePatient(TestName,exestatus);
  
  //Verify the number of ICU cases due to RRC
  exestatus = Features.MvVerifyFinalOR(TestName, "numberOfAfterHoursDschrg" ,exestatus);
  
  //Logout
  exestatus = Features.MvLogout(TestName,exestatus);
  
  //Close the browser after report is verified
  exestatus = Features.MvBrowserLogout(TestName, browser, exestatus);
}

//******************************************************************************************//
//******************************************************************************************//
// Name :OR_Tracheostomies
// Desc :Regression to test count of different types of Tracheostomies
// Owner :Mohammad Zeeshan 
// Creation date: 30/05/2019
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//
function OR_Tracheostomies(TestName)
{
  var exestatus = true;
  var browser;
    
  //Login
  exestatus = Features.MvLogin(TestName,exestatus);
  
  //Admit a patient in ICU - this is required to load the correct department in Operational reports
  exestatus = Features.MvPatientRegister(TestName,exestatus);
  
  //Launch the operational reports
  exestatus = Features.MvLaunchOperationalReports(TestName, browser, exestatus);
  
  //Launch the summary report and note the previous counts of
  //Number of Tracheostomies
  exestatus = Features.MvExtractInitialOpReports(TestName, browser, exestatus);
  
  //Admit a patient in ICU 
  exestatus = Features.MvPatientRegister(TestName,exestatus);
  
  //Surgical
  exestatus = Features.MvTracheostomyTube(TestName, "Tracheostomy (Surgical)", exestatus);
  
  //Dilation
  exestatus = Features.MvTracheostomyTube(TestName, "Tracheostomy (Percutaneous - Dilation)", exestatus);
  
  //Limited Dissection
  exestatus = Features.MvTracheostomyTube(TestName, "Tracheostomy (Percutaneous - Limited Dissection)", exestatus);
  
  //Verify the number of ICU cases due to RRC
  exestatus = Features.MvVerifyFinalOR(TestName, "Tracheostomies" ,exestatus);
  
  //Logout
  exestatus = Features.MvLogout(TestName,exestatus);
  
  //Close the browser after report is verified
  exestatus = Features.MvBrowserLogout(TestName, browser, exestatus);
}

//******************************************************************************************//
//******************************************************************************************//
// Name :OR_ReasonOfIntubation
// Desc :Regression to verify reason of intubation
// Owner :Mohammad Zeeshan 
// Creation date: 07/06/2019
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//
function OR_ReasonOfIntubation(TestName)
{
  var exestatus = true;
  var browser;
    
  //Login
  exestatus = Features.MvLogin(TestName,exestatus);
  
  //Admit a patient in ICU - this is required to load the correct department in Operational reports
  exestatus = Features.MvPatientRegister(TestName,exestatus);
  
  //Launch the operational reports
  exestatus = Features.MvLaunchOperationalReports(TestName, browser, exestatus);
  
  //Launch the summary report and note the previous counts of
  //Number of Tracheostomies
  exestatus = Features.MvExtractInitialOpReports(TestName, browser, exestatus);
  
  //Admit a patient in ICU 
  exestatus = Features.MvPatientRegister(TestName,exestatus);
  
  //Add Unplanned extubation from - add clinical events
  exestatus = Features.MvAddSpecificClinicalEvent(TestName, "Extubation (Unplanned)", exestatus);
  
  //Add number of failed trial of NIV and failed extubations and Intubation
  exestatus = Features.MvTracheostomyTube(TestName, "Tracheostomy (Percutaneous - Limited Dissection)", exestatus);
  
  //Verify the Reason for Intubation
  exestatus = Features.MvVerifyFinalOR(TestName, "ReasonOfIntubation" ,exestatus);
  
  //Logout
  exestatus = Features.MvLogout(TestName,exestatus);
  
  //Close the browser after report is verified
  exestatus = Features.MvBrowserLogout(TestName, browser, exestatus);
}

//******************************************************************************************//
//******************************************************************************************//
// Name :OR_RenalReplacmentTherapy
// Desc :Regression to verify number of Renal Replacment Therapy
// Owner :Mohammad Zeeshan 
// Creation date: 24/06/2019
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//
function OR_RenalReplacmentTherapy(TestName)
{
  var exestatus = true;
  var browser;
    
  //Login
  exestatus = Features.MvLogin(TestName,exestatus);
  
  //Admit a patient in ICU - this is required to load the correct department in Operational reports
  exestatus = Features.MvPatientRegister(TestName,exestatus);
  
  //Launch the operational reports
  exestatus = Features.MvLaunchOperationalReports(TestName, browser, exestatus);
  
  //Launch the summary report and note the previous counts of Renal replacement Therapies
  exestatus = Features.MvExtractInitialOpReports(TestName, browser, exestatus);
  
  //Admit a patient in ICU 
  exestatus = Features.MvPatientRegister(TestName,exestatus);
  
  //Enter Renal Replacement Therapies
  exestatus = Features.MvRRTSelect(TestName,"ImdcomboboxitemHd",exestatus);
  
  //Verify the number of Renal Replacement Therapies
  exestatus = Features.MvVerifyFinalOR(TestName, "RenalReplacmentTherapy" ,exestatus);
  
  //Enter Renal Replacement Therapies
  exestatus = Features.MvRRTSelect(TestName,"ImdcomboboxitemCvvhdf",exestatus);
  
  //Verify the number of Renal Replacement Therapies
  exestatus = Features.MvVerifyFinalOR(TestName, "RenalReplacmentTherapy" ,exestatus);

  //Enter Renal Replacement Therapies
  exestatus = Features.MvRRTSelect(TestName,"ImdcomboboxitemCvvhd",exestatus);
  
  //Verify the number of Renal Replacement Therapies
  exestatus = Features.MvVerifyFinalOR(TestName, "RenalReplacmentTherapy" ,exestatus);
  
  //Enter Renal Replacement Therapies
  exestatus = Features.MvRRTSelect(TestName,"ImdcomboboxitemCvvh",exestatus);
  
  //Verify the number of Renal Replacement Therapies
  exestatus = Features.MvVerifyFinalOR(TestName, "RenalReplacmentTherapy" ,exestatus);
  
  //Enter Renal Replacement Therapies
  exestatus = Features.MvRRTSelect(TestName,"ImdcomboboxitemScuf",exestatus);
  
  //Verify the number of Renal Replacement Therapies
  exestatus = Features.MvVerifyFinalOR(TestName, "RenalReplacmentTherapy" ,exestatus);  
    
  //Logout
  exestatus = Features.MvLogout(TestName,exestatus);
  
  //Close the browser after report is verified
  exestatus = Features.MvBrowserLogout(TestName, browser, exestatus);
}

//******************************************************************************************//
//******************************************************************************************//
// Name :OR_AdmissionsAndDischarges
// Desc :Regression to verify number of Admissions And Discharges
// Owner :Mohammad Zeeshan 
// Creation date: 26/06/2019
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//
function OR_AdmissionsAndDischarges(TestName)
{
  var exestatus = true;
  var browser;
    
  //Login
  exestatus = Features.MvLogin(TestName,exestatus);
  
  //Admit a patient in ICU - this is required to load the correct department in Operational reports
  exestatus = Features.MvPatientRegister(TestName,exestatus);
  
  //Launch the operational reports
  exestatus = Features.MvLaunchOperationalReports(TestName, browser, exestatus);
  
  //Launch the summary report and note the previous counts of
  //Number of Admissions 
  //Number of ICU Admissions 
  //Number of HDU Admissions 
  //Number of CCU Admissions 
  //Number of Undocumented Admissions 
  //Number of Patients 
  //Number of ICU Deaths
  exestatus = Features.MvExtractInitialOpReports(TestName, browser, exestatus);
  
  //Admit a patient in ICU 
  exestatus = Features.MvPatientRegister(TestName,exestatus);
  
  //Verify the number of Undocumented admissions
  exestatus = Features.MvVerifyFinalOR(TestName, "numberOfUndocAdmissionsAnD" ,exestatus);
  
  //Enter admission summary details - default to ICU
  exestatus = Features.MvAdmissionSummary(TestName,exestatus);
  
  //Verify the number of ICU admissions
  exestatus = Features.MvVerifyFinalOR(TestName, "numberOfICUAdmissionsAnD" ,exestatus);
  
  //Change the source of admission and type of care
  exestatus = Features.MvChangeSourceAndTypeOfAdmission(TestName, "OT/Recovery", "HDU", exestatus);
  
  //Verify the ICU admission source type
  exestatus = Features.MvVerifyFinalOR(TestName, "sourceOTRecovery" ,exestatus);
  
  //Verify the number of HDU admissions
  exestatus = Features.MvVerifyFinalOR(TestName, "numberOfHDUAdmissionsAnD" ,exestatus);
  
  //Change the source of admission and type of care
  exestatus = Features.MvChangeSourceAndTypeOfAdmission(TestName, "Emergency department", "CCU", exestatus);
  
  //Verify the ICU admission source type
  exestatus = Features.MvVerifyFinalOR(TestName, "sourceEmergencyDept" ,exestatus);
  
  //Verify the number of CCU admissions
  exestatus = Features.MvVerifyFinalOR(TestName, "numberOfCCUAdmissionsAnD" ,exestatus);   
  
  //Fill discharge summary as died and then release the patient
  exestatus = Features.MVMedicalDischargeSummary(TestName,exestatus);
  exestatus = Features.MvReleasePatient(TestName,exestatus);
  
  //Verify the number of ICU deaths
  exestatus = Features.MvVerifyFinalOR(TestName, "numberOfICUDeathsAnD" ,exestatus);
  
  //Logout
  exestatus = Features.MvLogout(TestName,exestatus);
  
  //Close the browser after report is verified
  exestatus = Features.MvBrowserLogout(TestName, browser, exestatus);
}

//******************************************************************************************//
//******************************************************************************************//
// Name :OR_MechanicalVentillationHours
// Desc :Regression to verify number of Mechanical Ventillation Hours
// Owner :Mohammad Zeeshan 
// Creation date: 07/06/2019
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//
function OR_MechanicalVentillationHours(TestName)
{
  var exestatus = true;
  var browser;
    
  //Login
  exestatus = Features.MvLogin(TestName,exestatus);
  
  //Admit a patient in ICU - this is required to load the correct department in Operational reports
  exestatus = Features.MvPatientRegister(TestName,exestatus);
  
  //Launch the operational reports
  exestatus = Features.MvLaunchOperationalReports(TestName, browser, exestatus);
  
  //Launch the MechanicalVentillationHours report and note the initial counts
  exestatus = Features.MvExtractInitialOpReports(TestName, browser, exestatus);
  
  //Admit a patient in ICU 
  exestatus = Features.MvPatientRegister(TestName,exestatus);
  
  //Invasive ventilation only
  exestatus = Features.MvRecordInvasiveVentilation(TestName,exestatus);
  
  //Non-invasive ventilation only
  exestatus = Features.MvRecordNonInvasiveVentilation(TestName,exestatus);
  
  //High flow only
  exestatus = Features.MvHighFlowVentilation(TestName,exestatus);
  
  //Verify the number of Mechanical Ventillation Hours
  //exestatus = Features.MvVerifyFinalOR(TestName, "MechanicalVentillationHours" ,exestatus);
  
  //Logout
  exestatus = Features.MvLogout(TestName,exestatus);
  
  //Close the browser after report is verified
  exestatus = Features.MvBrowserLogout(TestName, browser, exestatus);
}

//******************************************************************************************//
//******************************************************************************************//
// Name :OR_MechanicalVentillationHoursVerify
// Desc :Just verify number of Mechanical Ventillation Hours
// Owner :Mohammad Zeeshan 
// Creation date: 19/06/2019
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//
function OR_MechanicalVentillationHoursVerify(TestName)
{
  var exestatus = true;
  var browser;
    
  //Login
  exestatus = Features.MvLogin(TestName,exestatus);
  
  //Admit a patient in ICU - this is required to load the correct department in Operational reports
  exestatus = Features.MvPatientRegister(TestName,exestatus);
  
  //Launch the operational reports
  exestatus = Features.MvLaunchOperationalReports(TestName, browser, exestatus);
  
  //Launch the mechanical ventilation hours OR
  exestatus = Features.MvLaunchInitialOpReports(TestName, browser, exestatus)
  
  //Verify the number of Mechanical Ventillation Hours
  exestatus = Features.MvVerifyFinalOR(TestName, "MechanicalVentillationHours" ,exestatus);
  
  //Logout
  exestatus = Features.MvLogout(TestName,exestatus);
  
  //Close the browser after report is verified
  exestatus = Features.MvBrowserLogout(TestName, browser, exestatus);
}

//******************************************************************************************//
//******************************************************************************************//
// Name :OR_MechanicallyVentilatedPatients
// Desc :Regression to verify number of Mechanically Ventilated Patients
// Owner :Mohammad Zeeshan 
// Creation date: 07/06/2019
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//
function OR_MechanicallyVentilatedPatients(TestName)
{
  var exestatus = true;
  var browser;
    
  //Login
  exestatus = Features.MvLogin(TestName,exestatus);
  
  //Admit a patient in ICU - this is required to load the correct department in Operational reports
  exestatus = Features.MvPatientRegister(TestName,exestatus);
  
  //Launch the operational reports
  exestatus = Features.MvLaunchOperationalReports(TestName, browser, exestatus);
  
  //Launch the number of Mechanically Ventilated Patients and note the count of it.
  exestatus = Features.MvExtractInitialOpReports(TestName, browser, exestatus);
  
  //Admit a patient in ICU 
  exestatus = Features.MvPatientRegister(TestName,exestatus);
  
  //Validate Record Ventilation
  //exestatus = Features.MvRecordVentilation(TestName,exestatus);
  
  //Invasive ventilation only
  exestatus = Features.MvRecordInvasiveVentilation(TestName,exestatus);
  
  //Non-invasive ventilation only
  exestatus = Features.MvRecordNonInvasiveVentilation(TestName,exestatus);
  
  //Verify the number of ICU cases due to RRC
  exestatus = Features.MvVerifyFinalOR(TestName, "MechanicallyVentilatedPatients" ,exestatus);
  
  //Logout
  exestatus = Features.MvLogout(TestName,exestatus);
  
  //Close the browser after report is verified
  exestatus = Features.MvBrowserLogout(TestName, browser, exestatus);
}

//******************************************************************************************//
//******************************************************************************************//
// Name :OR_ICULineDays
// Desc :Regression to verify number of ICU line days 
// Owner :Mohammad Zeeshan 
// Creation date: 07/06/2019
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//
function OR_ICULineDays(TestName)
{
  var exestatus = true;
  var browser;
    
  //Login
  exestatus = Features.MvLogin(TestName,exestatus);
  
  //Admit a patient in ICU - this is required to load the correct department in Operational reports
  exestatus = Features.MvPatientRegister(TestName,exestatus);
  
  //Launch the operational reports
  exestatus = Features.MvLaunchOperationalReports(TestName, browser, exestatus);
  
  //Launch the ICULineDays report to get intial count
  exestatus = Features.MvExtractInitialOpReports(TestName, browser, exestatus);
  
  //Admit a patient in ICU 
  exestatus = Features.MvPatientRegister(TestName,exestatus);
  
  //Enter Patient Demographics
  exestatus = Features.MvPatientDemographics(TestName,exestatus);
  
  //Enter Weights Populates
  exestatus = Features.MvWeightsPopulates(TestName,exestatus);
  
  //CVC Line 
  exestatus = Features.MvDocumentInsertionCVC(TestName, exestatus);
  
  //PICC Line
  exestatus = Features.MvDocumentInsertionPICC(TestName, exestatus);
  
  //VASCATH Line
  exestatus = Features.MvDocumentDialysisCatherer(TestName, exestatus);
  
  //Verify the ICU Line Days
  exestatus = Features.MvVerifyFinalOR(TestName, "ICULineDays" ,exestatus);
  
  //Logout
  exestatus = Features.MvLogout(TestName,exestatus);
  
  //Close the browser after report is verified
  exestatus = Features.MvBrowserLogout(TestName, browser, exestatus);
}

//******************************************************************************************//
//******************************************************************************************//
// Name :OR_MROonAdmission
// Desc :Regression to verify number of MRO on admission
// Owner :Mohammad Zeeshan 
// Creation date: 07/06/2019
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//
function OR_MROonAdmission(TestName)
{
  var exestatus = true;
  var browser;
    
  //Login
  exestatus = Features.MvLogin(TestName,exestatus);
  
  //Admit a patient in ICU - this is required to load the correct department in Operational reports
  exestatus = Features.MvPatientRegister(TestName,exestatus);
  
  //Launch the operational reports
  exestatus = Features.MvLaunchOperationalReports(TestName, browser, exestatus);
  
  //Launch the summary report and note the previous counts of
  //Number of MRO on Admission
  exestatus = Features.MvExtractInitialOpReports(TestName, browser, exestatus);
  
  //Admit a patient in ICU 
  exestatus = Features.MvPatientRegister(TestName,exestatus);
  
  //Update the patient to have developed MROs in ICU
  exestatus = Features.MVAlertsAndIsolationRequirements(TestName,exestatus);
  
  //Verify the number of MRO on Admission
  exestatus = Features.MvVerifyFinalOR(TestName, "MROonAdmission" ,exestatus);
  
  //Logout
  exestatus = Features.MvLogout(TestName,exestatus);
  
  //Close the browser after report is verified
  exestatus = Features.MvBrowserLogout(TestName, browser, exestatus);
}

//******************************************************************************************//
//******************************************************************************************//
// Name :OR_MROinICU
// Desc :Regression to verify number of MRO in ICU
// Owner :Mohammad Zeeshan 
// Creation date: 07/06/2019
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//
function OR_MROinICU(TestName)
{
  var exestatus = true;
  var browser;
    
  //Login
  exestatus = Features.MvLogin(TestName,exestatus);
  
  //Admit a patient in ICU - this is required to load the correct department in Operational reports
  exestatus = Features.MvPatientRegister(TestName,exestatus);
  
  //Launch the operational reports
  exestatus = Features.MvLaunchOperationalReports(TestName, browser, exestatus);
  
  //Launch the summary report and note the previous counts of
  //Number of MRO in ICU
  exestatus = Features.MvExtractInitialOpReports(TestName, browser, exestatus);
  
  //Admit a patient in ICU 
  exestatus = Features.MvPatientRegister(TestName,exestatus);
  
  //Update the patient to have developed MROs in ICU
  exestatus = Features.MVAlertsAndIsolationRequirements(TestName,exestatus);
  
  //Verify the number of MRO in ICU
  exestatus = Features.MvVerifyFinalOR(TestName, "MROinICU" ,exestatus);
  
  //Logout
  exestatus = Features.MvLogout(TestName,exestatus);
  
  //Close the browser after report is verified
  exestatus = Features.MvBrowserLogout(TestName, browser, exestatus);
}

//******************************************************************************************//
//******************************************************************************************//
// Name :OR_FreeTextMedicationUsage
// Desc :Regression to verify Free Text Medication Usage
// Owner :Mohammad Zeeshan 
// Creation date: 07/06/2019
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//
function OR_FreeTextMedicationUsage(TestName)
{
  var exestatus = true;
  var browser;
    
  //Login
  exestatus = Features.MvLogin(TestName,exestatus);
  
  //Admit a patient in ICU - this is required to load the correct department in Operational reports
  exestatus = Features.MvPatientRegister(TestName,exestatus);
  
  //Launch the operational reports
  exestatus = Features.MvLaunchOperationalReports(TestName, browser, exestatus);
  
  //Launch the Free Text Medication Usage Report and note the previous counts of
  //Number of FreeTextMedicationUsage
  exestatus = Features.MvExtractInitialOpReports(TestName, browser, exestatus);
  
  //Admit a patient in ICU 
  exestatus = Features.MvPatientRegister(TestName,exestatus);
  
  //Prescribe free text medication
  exestatus = Features.MvEnterFreeTextMedication(TestName,exestatus);
  
  //Verify the number of free text medication usage
  exestatus = Features.MvVerifyFinalOR(TestName, "freeTextMedicationUsage" ,exestatus);
  
  //Logout
  exestatus = Features.MvLogout(TestName,exestatus);
  
  //Close the browser after report is verified
  exestatus = Features.MvBrowserLogout(TestName, browser, exestatus);
}

//******************************************************************************************//
//******************************************************************************************//
// Name :OR_KnownAllergyADRPrescriptionOverride
// Desc :Regression to verify Known Allergy/ADR Prescription Override
// Owner :Mohammad Zeeshan 
// Creation date: 07/06/2019
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//
function OR_KnownAllergyADRPrescriptionOverride(TestName)
{
  var exestatus = true;
  var browser;
    
  //Login
  exestatus = Features.MvLogin(TestName,exestatus);
  
  //Admit a patient in ICU - this is required to load the correct department in Operational reports
  exestatus = Features.MvPatientRegister(TestName,exestatus);
  
  //Launch the operational reports
  exestatus = Features.MvLaunchOperationalReports(TestName, browser, exestatus);
  
  //Launch the summary report and note the previous counts of
  //Number of OR_KnownAllergyADRPrescriptionOverride
  exestatus = Features.MvExtractInitialOpReports(TestName, browser, exestatus);
  
  //Admit a patient in ICU 
  exestatus = Features.MvPatientRegister(TestName,exestatus);
  
  //Record known allergies
  exestatus = Features.MvRecordKnownAllergies(TestName,exestatus);
  
  //Administor the medicine which patient is allergic to
  exestatus = Features.MvAllergiesOR(TestName,exestatus);
  
  //Verify Allergy/ADR Prescription Override
  exestatus = Features.MvVerifyFinalOR(TestName, "KnownAllergyADRPrescriptionOverride" ,exestatus);
  
  //Logout
  exestatus = Features.MvLogout(TestName,exestatus);
  
  //Close the browser after report is verified
  exestatus = Features.MvBrowserLogout(TestName, browser, exestatus);
}
