var PDF_Function = require("PDF_Function");
var Features = require("Features");


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP1
// Desc :Flow to UC01
// Owner :Arul 
// Creation date:June 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//
function CMP1(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);
//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);
//Enter Patient Demographics
exestatus = Features.MvPatientDemographics(TestName,exestatus);
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP1_TC001
// Desc : Test to  verify that a patient cannot be admitted without a bed assigned
// Owner :Jyoti 
// Creation date:21/02/2019
// Update By : Mohammad Zeeshan
// Update date: 10/05/2019
// Update desc:  Pop Up handling fixed
//******************************************************************************************//
//******************************************************************************************//
function CMP1_TC002(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegisterNoBed(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP2
// Desc :Flow to UC02 all five cases in one flow
// Owner :Arul 
// Creation date:June 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP2(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);
//Work list details
if (equal(TestName,"CMP2_TC003")){
exestatus = Features.MvWorklist(TestName,exestatus);
}
//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);
//Enter Patient Demographics
exestatus = Features.MvPatientDemographics(TestName,exestatus);

if (equal(TestName,"CMP2_TC002")){
exestatus = Features.MvPatientBelongings(TestName,exestatus);
}

//Change bed status 
if (equal(TestName,"CMP2_TC005")){
exestatus = Features.MvChangePatientStatus(TestName,"Admitted",exestatus);
}
if (equal(TestName,"CMP2_TC001")){
//Release
exestatus = Features.MvChangePatientStatus(TestName,"Released",exestatus);
//Close
exestatus = Features.MvChangePatientStatus(TestName,"Archived",exestatus);
}
// Search Patient and load
if (equal(TestName,"CMP2_TC004")){
exestatus = Features.MvSearchPatient(TestName,exestatus);
}
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}


//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP3_TC010
// Desc :Flow to validate the family meeting note
// Owner :Satheeshkumar C
// Creation date:Aug 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//
function CMP3_TC010(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);
//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Enter family meeting note
exestatus = Features.MVFamilyMeetingNote(TestName,exestatus)
// 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP3_TC002
// Desc :Flow to check the Guardianship order
// Owner :Sangiliraja J
// Creation date:Aug 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//
 
function CMP3_TC002(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);
//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Enter Guardianship order
exestatus = Features.MvGuardianshiporder(TestName,exestatus);
 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP3_TC021
// Desc :Flow to check Motor Vehicle Accident Note
// Owner :Sangiliraja J
// Creation date:Aug 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//



function CMP3_TC021(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);
//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Enter Motor Vehicle Accident Note
exestatus = Features.MvMotorVehicleAccidentNote(TestName,exestatus);


//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP3_TC020
// Desc :Flow to check Prescribe Home Medication
// Owner :Sangiliraja J
// Creation date:Aug 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

// Prescribe Home Medication - Flowsheet validation to be checked
function CMP3_TC020(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);
//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Enter prescribeMedication Home medication Form
exestatus = Features.MvprescribeMedication(TestName,exestatus);


//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP3_TC004
// Desc :Flow to check Insertion of Orogastric Tube
// Owner :Sangiliraja J
// Creation date:Aug 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

// Document Insertion of Orogastric Tube - Input Output tab to be checked
function CMP3_TC004(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);
//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Enter Document Insertion of Orogastric Tube
exestatus = Features.MvOrogastricTube(TestName,exestatus);


//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}

function CMP4_TC003(TestName)
{
var exestatus=true;

//Login
exestatus=Features.MvLogin(TestName,exestatus);
//Search Patient
exestatus = Features.MvPatientRegister(TestName,exestatus);
//Enter Allergies
exestatus = Features.MvAllergies(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
}

function CMP4_TC011(TestName)
{
var exestatus=true;

//Login
exestatus=Features.MvLogin(TestName,exestatus);
//Search Patient
exestatus = Features.MvPatientRegister(TestName,exestatus);
//Radiology 
exestatus = Features.MVRadiology(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);

}

function CMP4_TC014(TestName)
{
var exestatus=true;

//Login
exestatus=Features.MvLogin(TestName,exestatus);

//Search Patient
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Policies and Guidelines
exestatus=Features.MVPolicies(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);

}

function CMP4_TC009(TestName)
{
var exestatus=true;

//Login
exestatus=Features.MvLogin(TestName,exestatus);


//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Verify patient Wound
exestatus = Features.MVWounds(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);

}

function CMP4_TC005(TestName)
{
var exestatus=true;

//Login
exestatus=Features.MvLogin(TestName,exestatus);
//Search Patient
exestatus = Features.MvPatientRegister(TestName,exestatus);
//Enter Allergies
//exestatus = Features.MvAllergies(TestName,exestatus);
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
}

function CMP4_TC006(TestName)
{
var exestatus=true;

//Login
exestatus=Features.MvLogin(TestName,exestatus);
//Search Patient
exestatus = Features.MvPatientRegister(TestName,exestatus);
//Medication Review
exestatus = Features.MVMedicationReview(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
}

function CMP4_TC002(TestName)
{
var exestatus=true;

//Login
exestatus=Features.MvLogin(TestName,exestatus);
//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);
//Medication Review
exestatus = Features.MVMedicationReview(TestName,exestatus);
//Resolve Medication Review
exestatus = Features.MVResolveMedication(TestName,exestatus);
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
}
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP3_TC005
// Desc :Flow to check Burns on Admission
// Owner :Sangiliraja J
// Creation date:Aug 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP3_TC005(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);
//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//View Burns On Admission
exestatus = Features.MvBurnsOnAdmission(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP3_TC007
// Desc :Flow to check Automatic Matching of Dose Form and Route
// Owner :Sangiliraja J
// Creation date:Aug 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

// AutomaticallyMatch - Flowsheet validation to be checked
function CMP3_TC007(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);
//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//AutomaticallyMatch 
exestatus = Features.MvAutomaticallyMatch(TestName,exestatus);


//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP3_TC008
// Desc :Flow to check Prescription of Medication Greater
// Owner :Sangiliraja J
// Creation date:Aug 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

// PrescribeMedicationGreater - Flowsheet validation to be checked
function CMP3_TC008(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);
//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//PrescribeMedicationGreater 
exestatus = Features.MvPrescribeMedicationGreater(TestName,exestatus);


//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP3_TC011
// Desc :Flow to check Prescription of Intravenous Bolus
// Owner :Sangiliraja J
// Creation date:Aug 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

// PrescribeIntravenousBolus - Flowsheet validation to be checked
function CMP3_TC011(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);
//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//PrescribeIntravenousBolus 
exestatus = Features.MvPrescribeIntravenousBolus(TestName,exestatus);

// 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP3_TC014
// Desc :Flow to check Population of Weights
// Owner :Sangiliraja J
// Creation date:Aug 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP3_TC014(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);
//Enter Patient Demographics
exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Enter Weights Populates
exestatus = Features.MvWeightsPopulates(TestName,exestatus);

// 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP3_TC017
// Desc :Flow to check Medication Administration Record
// Owner :Sangiliraja J
// Creation date:Aug 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP3_TC017(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);
//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//View Medication Administration Record
exestatus = Features.MvMedicationAdministrationRecord(TestName,exestatus);

// 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP3_TC018
// Desc :Flow to check the Order with Multiple Medications
// Owner :Sangiliraja J
// Creation date:Aug 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

// OrderMultipleMedications - Flowsheet validation to be checked
function CMP3_TC018(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);
//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//OrderMultipleMedications 
exestatus = Features.MvOrderMultipleMedications(TestName,exestatus);

// 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP3_TC019
// Desc :Flow to check Entry of Free Text Medication
// Owner :Sangiliraja J
// Creation date:Aug 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

// EnterFreeTextMedication - Flowsheet validation to be checked
function CMP3_TC019(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);
//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//EnterFreeTextMedication 
exestatus = Features.MvEnterFreeTextMedication(TestName,exestatus);

// 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}



//******************************************************************************************//
//******************************************************************************************//
// Name :CMP3_TC022
// Desc :Flow to check Referral/Consultation Form
// Owner :Sangiliraja J
// Creation date:Aug 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP3_TC022(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);
//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Enter Referral/Consultation Form
//exestatus = Features.MvReferralConsultationForm(TestName,exestatus);

// 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP3_TC023
// Desc :Flow to check Automatic Dose Calculation
// Owner :Sangiliraja J
// Creation date:Aug 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

// AutomaticallyCalculateDose - Flowsheet validation to be checked
function CMP3_TC023(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);
//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//AutomaticallyCalculateDose 
exestatus = Features.MvAutomaticallyCalculateDose(TestName,exestatus);

// 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP3_TC024
// Desc :Flow to check Prescribe Intravenous Medication
// Owner :Sangiliraja J
// Creation date:Aug 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

// prescribeIntravenous - Flowsheet validation to be checked
function CMP3_TC024(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);
//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//PrescribeIntravenous medication
exestatus = Features.MvprescribeIntravenous(TestName,exestatus);

// 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP3_TC026
// Desc :Flow to check Prescribe Intramuscular Medication
// Owner :Sangiliraja J
// Creation date:Aug 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

// PrescribeIntramuscular - Flowsheet validation to be checked
function CMP3_TC026(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);
//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//PrescribeIntramuscular medication
exestatus = Features.MvprescribeIntramuscular(TestName,exestatus);

// 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP3_TC027
// Desc :Flow to check Insertion of Endotracheal Tube
// Owner :Sangiliraja J
// Creation date:Aug 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

// Document insertion of Endotracheal Tube - Input Output tab to be checked
function CMP3_TC027(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);
//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Enter Document Insertion of Endotracheal Tube
exestatus = Features.MvEndotrachealTube(TestName,exestatus);

// 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP3_TC028
// Desc :Flow to check Updation of Problem list
// Owner :Sangiliraja J
// Creation date:Aug 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP3_TC028(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);
//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Enter UpdateProblemList
exestatus = Features.MvUpdateProblemList(TestName,exestatus);

// 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP3_TC029
// Desc :Flow to check and Review Fluid Balance
// Owner :Sangiliraja J
// Creation date:Aug 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP3_TC029(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);
//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//ReviewFluidBalance 
exestatus = Features.MvReviewFluidBalance(TestName,exestatus);

// 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP3_TC036
// Desc :Flow to Review Burn Depth Description
// Owner :Sangiliraja J
// Creation date:Aug 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP3_TC036(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);
//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Enter ReviewBurnDepthDescription
exestatus = Features.MvReviewBurnDepthDescription(TestName,exestatus);

// 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP3_TC039
// Desc :Flow to check Weights and Dimensions
// Owner :Sangiliraja J
// Creation date:Aug 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP3_TC039(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);
//Enter Patient Demographics
exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Enter Weights and Dimensions
exestatus = Features.MvWeightsandDimensions(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP4_TC008
// Desc :Flow to Review Patient Sepsis
// Owner :Sangiliraja J
// Creation date:Aug 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

// ReviewPatientSepsisStatus - Flowsheet validation to be checked
function CMP4_TC008(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);
//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//ReviewPatientSepsis 
exestatus = Features.MvReviewPatientSepsis(TestName,exestatus);

// 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP4_TC007
// Desc :Flow to Review Patient Blood Glucose level
// Owner :Sangiliraja J
// Creation date:Aug 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

// ReviewPatientBGL - Flowsheet validation to be checked
function CMP4_TC007(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//ReviewPatientBGL 
exestatus = Features.MvReviewPatientBGL(TestName,exestatus);

// 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP4_TC010
// Desc :Flow to Review Patient wounds
// Owner :Sangiliraja J
// Creation date:Aug 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

// ReviewPatientWounds - Flowsheet validation to be checked
function CMP4_TC010(TestName)
{
var exestatus = true;
    

//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//ReviewPatientWounds 
exestatus = Features.MvReviewPatientWounds(TestName,exestatus);


//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP3_TC033
// Desc :Flow to validate clinical Procedure Safety Checklist
// Owner :Satheeshkumar C
// Creation date:Aug 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP3_TC033(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Enter Clinical Procedure Safety Checklist
exestatus = Features.MVClinicalProcedureSafetyChecklist(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP3_TC032
// Desc :Flow to validate the PericardialDrain
// Owner :Satheeshkumar C
// Creation date:Aug 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP3_TC032(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Enter Pericardial Drain
exestatus = Features.MvPericardialDrain(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP3_TC012
// Desc :Flow to validate the Nasoduodenal Tube
// Owner :Satheeshkumar C
// Creation date:Aug 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP3_TC012(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Enter Nasoduodenal Tube
exestatus = Features.MvNasoduodenalTube(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP3_TC003
// Desc :Flow to validate the Other Drain
// Owner :Satheeshkumar C
// Creation date:Aug 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************// 

function CMP3_TC003(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Enter Other Drain
exestatus = Features.MvOtherDrain(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP3_TC006
// Desc :Flow to fill and validate the Admission Summary form
// Owner :Satheeshkumar C
// Creation date:Aug 2017
// Update By :Satheeshkumar C
// Update date:25-Oct-17
// Update desc: Updated object property  for the changed objects and handled the new pop up.
//******************************************************************************************//
//******************************************************************************************// 
function CMP3_TC006(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Enter Admission Summary
exestatus = Features.MvAdmissionSummary(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP3_TC009
// Desc :Flow to fill and validate the Admission Summary form
// Owner :Satheeshkumar C
// Creation date:Aug 2017
// Update By :Satheeshkumar C
// Update date:25-Oct-17
// Update desc: Updated object property  for the changed objects and handled the new pop up.
//******************************************************************************************//
//******************************************************************************************//

function CMP3_TC009(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Enter Admission Summary
exestatus = Features.MvAdmissionSummary(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP3_TC037
// Desc :Flow to validate the Override Allery Reason
// Owner :Satheeshkumar C
// Creation date:Aug 2017
// Update By :Satheeshkumar C
// Update date:10-Jan-2018
// Update desc:Commented  MvOverRideAlleryReason feature in the test as the scripts are failing due to current changes in MV
//******************************************************************************************//
//******************************************************************************************//

function CMP3_TC037(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Search a patient
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Enter OverRide Allery Reason
exestatus = Features.MvOverRideAlleryReason(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP3_TC030
// Desc :Flow to validate the Renal Replacement Therapies
// Owner :Satheeshkumar C
// Creation date:Aug 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP3_TC030(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Patient Search
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Enter Renal Replacement Therapies
exestatus = Features.MvRenalReplacementTherapies(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP3_TC040
// Desc :Flow to validate Default Current Time of mecation order
// Owner :Satheeshkumar C
// Creation date:Aug 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP3_TC040(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Enter Default Current Time
exestatus = Features.MvDefaultCurrentTime(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP3_TC035
// Desc :Flow to validate Cease Medications
// Owner :Satheeshkumar C
// Creation date:Aug 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP3_TC035(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Enter Cease Medications
exestatus = Features.MvCeaseMedications(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP3_TC038
// Desc :Flow to prescribe and validate the Medications, Nutrition for a patient
// Owner :Satheeshkumar C
// Creation date:Aug 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP3_TC038(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

// Patient Search
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Enter Order Medications and Nutrition
exestatus = Features.MvOrderMedicationsNutrition(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP3_TC013
// Desc :Flow to validate Discontinue Medication
// Owner :Satheeshkumar C
// Creation date:Aug 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************// 

function CMP3_TC013(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

// Patient Search
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Enter Discontinue Medication
exestatus = Features.MvDiscontinueMedication(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************// 


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP3_TC015
// Desc :Flow to validate Override Non Administration
// Owner :Satheeshkumar C
// Creation date:Aug 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP3_TC015(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Enter Override Non Administration
exestatus = Features.MvOverrideNonAdministration(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP3_TC034
// Desc :Flow to validate prescribed medications are displayed in metabolic tab
// Owner :Satheeshkumar C
// Creation date:Aug 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP3_TC034(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Search
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Mv Review MetabolicTab
exestatus = Features.MvReviewMetabolicTab(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP3_TC025
// Desc :Flow to validate different medication's in prescribe medication tab
// Owner :Satheeshkumar C
// Creation date:Aug 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP3_TC025(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);


//Enter Mv Review medication timeline
exestatus = Features.MvReviewMedicationTimeline(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP3_TC016
// Desc :Flow to validate the Physical Restraints for a patient
// Owner :Satheeshkumar C
// Creation date:Aug 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP3_TC016(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);


//Enter Physical Restraints
exestatus = Features.MVPhysicalRestraints(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP3_TC001
// Desc :Flow to validate Bolus ToolTip being displayed for a medication
// Owner :Satheeshkumar C
// Creation date:Aug 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP3_TC001(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);


//Enter Physical Restraints
exestatus = Features.MvBolusToolTip(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP3_TC031
// Desc :Flow to validate the Medication Chart
// Owner :Satheeshkumar C
// Creation date:Aug 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//
function CMP3_TC031(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);


//Enter Mv Review medication timeline
exestatus = Features.MvMedicationChart(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP4_TC012
// Desc :Flow to validate different medication's in prescribe medication tab
// Owner :Satheeshkumar C
// Creation date:Aug 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP4_TC012(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);


//Enter Mv Review medication timeline
exestatus = Features.MvReviewMedicationTimeline(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP4_TC001
// Desc :Flow to validate recorded notes are being displayed in order entry window
// Owner :Satheeshkumar C
// Creation date:Aug 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//
function CMP4_TC001(TestName)
{
var exestatus = true;
    
// add a comment
//Login
//exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
//exestatus = Features.MvPatientRegister(TestName,exestatus);


//Enter Mv Review medication timeline
exestatus = Features.MvNoteOnMedicationOrder(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP4_TC013
// Desc :Flow to validate Administer Medication tab and doses that has been  validated
// Owner :Satheeshkumar C
// Creation date:Aug 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP4_TC013(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);


//Enter Mv Review medication timeline
exestatus = Features.MvAdministerMedication(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP4_TC004
// Desc :Flow to validate Track the changes in MedicationOrder and dose
// Owner :Satheeshkumar C
// Creation date:Aug 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP4_TC004(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);


//Enter Mv Review medication timeline
exestatus = Features.MvTrackChangesMedicationOrder(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//



//******************************************************************************************//
//******************************************************************************************//
// Name :CMP5_TC008
// Desc :Flow to prescribe the warfarin medication for a patient
// Owner :Satheeshkumar C
// Creation date:22 Sep 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP5_TC008(TestName)
{
var exestatus = true;
    

//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);


//Prescribe warfarin medication
exestatus = Features.MvPrescribePharmaVTE(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP5_TC010
// Desc :Flow to prescribe Total Parenteral Nutrition product
// Owner :Satheeshkumar C
// Creation date:22 Sep 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP5_TC010(TestName)
{
var exestatus = true;
    

//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);


//Prescribe Total Parenteral Nutrition product
exestatus = Features.MvPrescribeTPN(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP5_TC025
// Desc :Flow to PrescribeTopicalPatch
// Owner :Sangiliraja J
// Creation date:Sep 22, 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

// PrescribeTopicalPatch - Flowsheet validation to be checked
function CMP5_TC025(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);
//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//PrescribeTopicalPatch 
exestatus = Features.MvPrescribeTopicalPatch(TestName,exestatus);

// 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP5_TC027
// Desc :Flow to Prescribe Oral Medication
// Owner :Sangiliraja J
// Creation date:Sep 22, 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

// PrescribeOralMedication - Flowsheet validation to be checked
function CMP5_TC027(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);
//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//PrescribeOralMedication 
exestatus = Features.MvPrescribeOralMedication(TestName,exestatus);

// 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP5_TC026
// Desc :Flow to Prescribe Intravenous Infusion Medication
// Owner :Sangiliraja J
// Creation date:Oct 05, 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

// PrescribeIntravenousInfusionMedication - Flowsheet validation to be checked
function CMP5_TC026(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);
//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//PrescribeIntravenousInfusionMedication 
exestatus = Features.MvPrescribeIntravenousInfusion(TestName,exestatus);

// 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP5_TC029
// Desc :Flow to Prescribe Modified Release Medication
// Owner :Sangiliraja J
// Creation date:Oct 05, 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

// PrescribeModifiedReleaseMedication - Flowsheet validation to be checked
function CMP5_TC029(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);
//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//PrescribeModifiedReleaseMedication 
exestatus = Features.MvPrescribeModifiedRelease(TestName,exestatus);

// 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP5_TC024
// Desc :Flow to Prescribe Product Opposed Medication
// Owner :Sangiliraja J
// Creation date:Oct 05, 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

// PrescribeProductOpposedMedication - Flowsheet validation to be checked
function CMP5_TC024(TestName)
{
var exestatus = true;
    
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);
//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//PrescribeProductOpposedMedication 
exestatus = Features.MvPrescribeProductOpposed(TestName,exestatus);

// 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP5_TC019
// Desc :Flow to Ordering PRN Display
// Owner :Sangiliraja J
// Creation date:Oct 06, 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

// OrderingPRNDisplay - Flowsheet validation to be checked
function CMP5_TC019(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);
//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//OrderingPRNDisplay 
exestatus = Features.MvOrderingPRNDisplay(TestName,exestatus);

// 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP5_TC020
// Desc :OrderingPRNIndication
// Owner :Sangiliraja J
// Creation date:Oct 06, 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

// OrderingPRNIndication - Flowsheet validation to be checked
function CMP5_TC020(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);
//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//OrderingPRNIndication 
exestatus = Features.MvOrderingPRNIndication(TestName,exestatus);

// 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP5_TC005
// Desc :DetectGenericDrugName
// Owner :Sangiliraja J
// Creation date:Oct 06, 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

// DetectGenericDrugName - Flowsheet validation to be checked
function CMP5_TC005(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);
//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//DetectGenericDrugName 
exestatus = Features.MvDetectGenericDrugName(TestName,exestatus);

// 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP5_TC006
// Desc :DisplayGenericDrugName
// Owner :Sangiliraja J
// Creation date:Oct 09, 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

// DisplayGenericDrugName - Flowsheet validation to be checked
function CMP5_TC006(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);
//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//DisplayGenericDrugName 
exestatus = Features.MvDisplayGenericDrugName(TestName,exestatus);

// 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP5_TC002
// Desc :BSAAutomaticallyCalculated
// Owner :Sangiliraja J
// Creation date:Oct 09, 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

// BSAAutomaticallyCalculated
function CMP5_TC002(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
exestatus = Features.MvPatientDemographics(TestName,exestatus);

//BSAAutomaticallyCalculated 
exestatus = Features.MvBSAAutomaticallyCalculated(TestName,exestatus);

// 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP5_TC015

// Desc :Feature to prescribe and modify the variable dose medication
// Owner :Satheeshkumar C
// Creation date:04 Oct 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//



function CMP5_TC015(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);


//PrescribeOralMedication 
exestatus = Features.MvModifyVariableDose(TestName,exestatus);

// 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP5_TC009

// Desc :Feature to enter Patient Preference in order entry window
// Owner :Satheeshkumar C
// Creation date:04 Oct 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//



function CMP5_TC009(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);


//Enter patient preference
exestatus = Features.MvEnterPatientPreference(TestName,exestatus);

// 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP5_TC011

// Desc :Feature to enter only dose value in quqntity /voulme field 
// Owner :Satheeshkumar C
// Creation date:05 Oct 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//



function CMP5_TC011(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);


//Enter only dose value
exestatus = Features.MvEnterTotalDose(TestName,exestatus);

// 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP5_TC012

// Desc :Feature to increase /decrease the rate of infused medication 
// Owner :Satheeshkumar C
// Creation date:05 Oct 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//



function CMP5_TC012(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);


//Change the rate of infused medication
exestatus = Features.MvChangeRate(TestName,exestatus);

// 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP5_TC028

// Desc :Feature to prescribe and administer the variable dose medication 
// Owner :Satheeshkumar C
// Creation date:05 Oct 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//



function CMP5_TC028(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);


//Prescribe and administer variable dose medication
exestatus = Features.MvPrescribeAdministerVariableDose(TestName,exestatus);

// 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP5_TC016

// Desc :Feature to prescribe and modify the medication order 
// Owner :Satheeshkumar C
// Creation date:06 Oct 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//



function CMP5_TC016(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);


//Prescribe and modify the medication order
exestatus = Features.MvModifyOrder(TestName,exestatus);

// 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP5_TC017

// Desc :Feature to prescribe and modify the Insulin Or Nutrition Dose 
// Owner :Satheeshkumar C
// Creation date:06 Oct 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//



function CMP5_TC017(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);


//prescribe and modify the Insulin Or Nutrition Dose
exestatus = Features.MvModifyInsulinOrNutritionDose(TestName,exestatus);

// 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP5_TC018

// Desc :Feature to validate No Zero after a Decimal Point in any medication 
// Owner :Satheeshkumar C
// Creation date:06 Oct 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//



function CMP5_TC018(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);


//Validate No Zero after a Decimal Point in any medication
exestatus = Features.MvNoZeroAfterdecimal(TestName,exestatus);

// 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP5_TC021
// Desc :Feature to validate Maximum daily Dose for PRN & comments field 
// Owner :Satheeshkumar C
// Creation date:09 Oct 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP5_TC021(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//validate Maximum daily Dose for PRN & comments field
exestatus = Features.MvPRNMaximumdailyDose(TestName,exestatus);

// 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP5_TC022
// Desc :Feature to administer PRN medication and validate instruction to the nurse 
// Owner :Satheeshkumar C
// Creation date:09 Oct 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP5_TC022(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//validate Maximum daily Dose for PRN & comments field
exestatus = Features.MvPRNMaximumdailyDose(TestName,exestatus);

//administer PRN medication and validate instruction to the nurse
exestatus = Features.MvPRNAdministerDose (TestName,exestatus);

// 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP5_TC007
// Desc :Feature to Document Medication Management Plan 
// Owner :Sangiliraja J
// Creation date:20 Oct 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP5_TC007(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Validate Document Medication Management Plan
exestatus = Features.MvDocumentMedicationManagementPlan(TestName,exestatus);
 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP7_TC010
// Desc :Feature to MarkDoseNotAdministered 
// Owner :Sangiliraja J
// Creation date:20 Oct 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP7_TC010(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Validate MarkDoseNotAdministered
exestatus = Features.MvMarkDoseNotAdministered(TestName,exestatus);
 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP7_TC008
// Desc :Feature to DocumentVIPScore 
// Owner :Sangiliraja J
// Creation date:23 Oct 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP7_TC008(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Validate documentation of VIP Score
exestatus = Features.MvDocumentVIPScore(TestName,exestatus);
 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP7_TC002
// Desc :Feature to Assess Metabolic Status
// Owner :Sangiliraja J
// Creation date:23 Oct 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP7_TC002(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Validate Assess Metabolic Status
exestatus = Features.MvAssessMetabolicStatus(TestName,exestatus);
 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP7_TC011
// Desc :Feature to Record Ventilation
// Owner :Sangiliraja J
// Creation date:24 Oct 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP7_TC011(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Validate Record Ventilation
exestatus = Features.MvRecordVentilation(TestName,exestatus);
 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP7_TC018
// Desc :Feature to Review Neurological
// Owner :Sangiliraja J
// Creation date:24 Oct 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP7_TC018(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Validate Review Neurological
exestatus = Features.MvReviewNeurological(TestName,exestatus);
 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP7_TC012
// Desc :Feature to Record Known Allergies
// Owner :Sangiliraja J
// Creation date:06 Nov 2017
// Update By :Sangiliraja J
// Update date:10 Jan 2018
// Update desc:Commenting the feature since new allergy enhancement test inprogress
//******************************************************************************************//
//******************************************************************************************//


function CMP7_TC012(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Validate Record Known Allergies
exestatus = Features.MvRecordKnownAllergies(TestName,exestatus);
 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP7_TC003
// Desc :Feature to Document Dose Administration
// Owner :Sangiliraja J
// Creation date:06 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP7_TC003(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Validate Document Dose Administration
exestatus = Features.MvDocumentDoseAdministration(TestName,exestatus);
 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP7_TC020
// Desc :Feature to Review Burns Admission
// Owner :Sangiliraja J
// Creation date:06 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP7_TC020(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Review Admission Summary
//exestatus = Features.MvAdmissionSummary(TestName,exestatus);

//Validate Review Burns Admission
exestatus = Features.MvReviewBurnsAdmission(TestName,exestatus);
 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP7_TC007
// Desc :Feature to Document Insertion CVC
// Owner :Sangiliraja J
// Creation date:07 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP7_TC007(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
exestatus = Features.MvPatientDemographics(TestName,exestatus);
exestatus = Features.MvWeightsandDimensions(TestName,exestatus);

//Review Admission Summary
//exestatus = Features.MvAdmissionSummary(TestName,exestatus);

//Validate Insertion of Central Venous Catheter
exestatus = Features.MvDocumentInsertionCVC(TestName,exestatus);
 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP9_TC001
// Desc :Feature to Double Signoff
// Owner :Sangiliraja J
// Creation date:07 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP9_TC001(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Review Admission Summary
//exestatus = Features.MvAdmissionSummary(TestName,exestatus);

//Validate Double Signoff
exestatus = Features.MvDoubleSignoff(TestName,exestatus);
 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP5_TC001
// Desc :Feature to Access Reference Material
// Owner :Sangiliraja J
// Creation date:08 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP5_TC001(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Review Admission Summary
//exestatus = Features.MvAdmissionSummary(TestName,exestatus);

//Validate Access Reference Material
exestatus = Features.MvAccessReferenceMaterial(TestName,exestatus);
 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP7_TC017
// Desc :Feature to Review Medication List
// Owner :Sangiliraja J
// Creation date:08 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP7_TC017(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Review Admission Summary
//exestatus = Features.MvAdmissionSummary(TestName,exestatus);

//Validate Review Medication List
exestatus = Features.MvReviewMedicationList(TestName,exestatus);
 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP8_TC012
// Desc :Feature to Document Occupational Theraphy Progress Note
// Owner :Sangiliraja J
// Creation date:14 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP8_TC012(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Validate Documentation of Occupational Theraphy Progress Notes
exestatus = Features.MvDocumentOccupationalTheraphy(TestName,exestatus);
 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP8_TC013
// Desc :Feature to Document Pastoral Care Progress Note
// Owner :Sangiliraja J
// Creation date:14 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP8_TC013(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Validate Documentation of Pastoral Care Progress Notes
exestatus = Features.MvDocumentPastoralCare(TestName,exestatus);
 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP8_TC014
// Desc :Feature to Document Patient as Victim of Crime
// Owner :Sangiliraja J
// Creation date:15 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP8_TC014(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Validate Documentation of Patient as Victim of Crime
exestatus = Features.MvDocumentVictimofCrime(TestName,exestatus);
 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP8_TC016
// Desc :Feature to Document Physiotherapy Progress Note
// Owner :Sangiliraja J
// Creation date:15 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP8_TC016(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Validate Documentation of Physiotherapy Progress Note
exestatus = Features.MvDocumentPhysiotherapyProgress(TestName,exestatus);
 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP8_TC017
// Desc :Feature to Document Physiotherapy SOAP Assessment
// Owner :Sangiliraja J
// Creation date:16 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP8_TC017(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Validate Documentation of Physiotherapy SOAP Assessment
exestatus = Features.MvDocumentPhysiotherapySOAP(TestName,exestatus);
 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP8_TC018
// Desc :Feature to Document Research Progress Note
// Owner :Sangiliraja J
// Creation date:16 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP8_TC018(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Validate Documentation of Research Progress Note
exestatus = Features.MvDocumentResearchProgress(TestName,exestatus);
 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP8_TC019
// Desc :Feature to Document Resuscitation Plan
// Owner :Sangiliraja J
// Creation date:16 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP8_TC019(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Validate Documentation of Resuscitation Plan 
exestatus = Features.MvDocumentResuscitation(TestName,exestatus);
 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP8_TC007
// Desc :Feature to Document Clinical Event
// Owner :Sangiliraja J
// Creation date:17 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP8_TC007(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Validate Documentation of Clinical Event 
exestatus = Features.MvDocumentClinicalEventNew(TestName,exestatus);
exestatus = Features.MvPlacePatient(TestName,exestatus);
 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP8_TC024
// Desc :Feature to Review Referral
// Owner :Sangiliraja J
// Creation date:17 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP8_TC024(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Validate Review or Update Referral Request 
exestatus = Features.MvReviewReferral(TestName,exestatus);
 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP8_TC025
// Desc :Feature to Review Status Bar Data
// Owner :Sangiliraja J
// Creation date:17 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP8_TC025(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
//exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Validate Review Status Bar Data 
exestatus = Features.MvReviewStatus(TestName,exestatus);
 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP8_TC021
// Desc :Feature to Place Patient in Transport
// Owner :Sangiliraja J
// Creation date:20 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP8_TC021(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Validation to Place Patient in Transport 
exestatus = Features.MvPlacePatient(TestName,exestatus);
 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP8_TC027
// Desc :Feature to Validate Correct Patient
// Owner :Sangiliraja J
// Creation date:20 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP8_TC027(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Validation of Correct Patient 
exestatus = Features.MvValidateCorrectPatient(TestName,exestatus);
 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP5_TC004
// Desc :Feature to validate prescriber details in order log and order list view 
// Owner :Satheeshkumar C
// Creation date:20 Oct 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP5_TC004(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//validate prescriber details in order log and order list view
exestatus = Features.MvPrescriberDetails(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP7_TC001
// Desc :Feature to prescribe and administer infused medication 
// Owner :Satheeshkumar C
// Creation date:20 Oct 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP7_TC001(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

// Prescribe infused medication
exestatus = Features.MvPrescribeIntravenousInfusion(TestName,exestatus);

// Feature to administer infused medication
exestatus = Features.MvAdministerInfusedMedication(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP7_TC004
// Desc :Feature to initiate and review the patient's current drains 
// Owner :Satheeshkumar C
// Creation date:23 Oct 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP7_TC004(TestName)
{
var exestatus = true;
    

//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

// Feature to initiate pericardial drain
exestatus = Features.MvPericardialDrain(TestName,exestatus);

// Feature to initiate Ureteric Drain and review
exestatus = Features.MvUretericDrain(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP7_TC019
// Desc :Feature to prescribe and administer infused medication 
// Owner :Satheeshkumar C
// Creation date:23 Oct 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP7_TC019(TestName)
{
var exestatus = true;
    
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

// Feature to prescribe Total Parenteral Nutrition
exestatus = Features.MvPrescribeTPN(TestName,exestatus);

// Feature to administer and review nutrition medication in Administer & titrate medication tab
exestatus = Features.MvReviewNutrition(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP7_TC013
// Desc :Flow to document safety checklist for a patient
// Owner :Satheeshkumar C
// Creation date:24 Oct 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP7_TC013(TestName)
{
var exestatus = true;
    
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

// Feature to document safety checklist
exestatus = Features.MvSafetyCheckList(TestName,exestatus);


//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP7_TC015
// Desc :Feature to initate line and review of drains, tube and lines in input/output tab
// Owner :Satheeshkumar C
// Creation date:24 Oct 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP7_TC015(TestName)
{
var exestatus = true;
    
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

// Feature to initiate and document drain
exestatus = Features.MvOtherDrain(TestName,exestatus);

// Feature to initiate and document tube
exestatus = Features.MvNasoduodenalTube(TestName,exestatus);

// Feature to initate lines and review of drains, tube and lines
exestatus = Features.MvArterialCatheter(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP7_TC005
// Desc :Feature to document FASTHUG for a patient
// Owner :Satheeshkumar C
// Creation date: 06 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP7_TC005(TestName)
{
var exestatus = true;
    
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

// Feature to document FASTHUG Status for a patient.
exestatus = Features.MvDocumentFasthug(TestName,exestatus);


//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP7_TC014
// Desc :Feature to document and update Nursing Managent plan for a patient
// Owner :Satheeshkumar C
// Creation date: 06 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP7_TC014(TestName)
{
var exestatus = true;
    
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

// Feature to document Nursing management for a patient.
exestatus = Features.MvNursingManagent(TestName,exestatus);


//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP9_TC002
// Desc :Feature to document the Nursing Progress Note
// Owner :Satheeshkumar C
// Creation date: 06 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP9_TC002(TestName)
{
var exestatus = true;
    
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

// Feature to document Nursing Progress Note for a patient.
exestatus = Features.MVNursingProgressNote(TestName,exestatus);


//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP7_TC006
// Desc :Feature to document food chart for a patient
// Owner :Satheeshkumar C
// Creation date: 07 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP7_TC006(TestName)
{
var exestatus = true;
    
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

// Feature to document food chart for a patient.
exestatus = Features.MvDocumentFoodChart(TestName,exestatus);


//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP7_TC022
// Desc :Feature to prescribe and administer overdue medications
// Owner :Satheeshkumar C
// Creation date: 07 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP7_TC022(TestName)
{
var exestatus = true;
    
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

// Feature to prescibe the medication for a patient 
exestatus = Features.MvEnterPatientPreference(TestName,exestatus);

// Feature to administer overdue medication
exestatus = Features.MvValidateOverdueMedication(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP7_TC009
// Desc :Feature to document Wound Care for a patient
// Owner :Satheeshkumar C
// Creation date: 08 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP7_TC009(TestName)
{
var exestatus = true;
    
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//To add patient type & sex
exestatus = Features.MVWounds(TestName,exestatus);

// Feature to document Wound Care for a patient 
exestatus = Features.MvDocumentAndScheduleWoundCare(TestName,exestatus);


//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP9_TC003
// Desc :Feature to Print the Patient medical Record
// Owner :Satheeshkumar C
// Creation date: 09 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP9_TC003(TestName)
{
var exestatus = true;
    
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Enter family meeting note
exestatus = Features.MVFamilyMeetingNote(TestName,exestatus)

// Feature to Print the Patient medical Record
exestatus = Features.MVPrintPatientRecord(TestName,exestatus);


//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP8_TC009
// Desc :Feature to document the Medical note via add progress notes
// Owner :Satheeshkumar C
// Creation date: 14 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP8_TC009(TestName)
{
var exestatus = true;
    
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Enter details for Medical  note
exestatus = Features.MVMedicalNote(TestName,exestatus)



//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP8_TC010
// Desc :Flow to document the National Disability Insurance Scheme note via add progress notes
// Owner :Satheeshkumar C
// Creation date: 14 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP8_TC010(TestName)
{
var exestatus = true;
    
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Enter details for NDIS note
exestatus = Features.MVNDISNote(TestName,exestatus)


//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP8_TC008
// Desc :Flow to document the Domestic Violenc AVO Note via add progress notes
// Owner :Satheeshkumar C
// Creation date: 15 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP8_TC008(TestName)
{
var exestatus = true;
    
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Enter details for Domestic Violence AVO Note
exestatus = Features.MVDomesticViolenceAVONote(TestName,exestatus)



//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP8_TC011
// Desc :Flow to document the Nursing Assessment Note via Nursing Notes
// Owner :Satheeshkumar C
// Creation date: 15 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP8_TC011(TestName)
{
var exestatus = true;
    
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Enter details for Nursing Assessment Note
exestatus = Features.MVNursingAssessmentNote(TestName,exestatus)

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP8_TC004
// Desc :Flow to document the Advanced Care Directive
// Owner :Satheeshkumar C
// Creation date: 16 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP8_TC004(TestName)
{
var exestatus = true;
    
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Enter details for Advanced Care Directive
exestatus = Features.MVAdvancedCareDirective(TestName,exestatus)

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP8_TC005
// Desc :Flow to document Alerts And Isolation Requirements for patient
// Owner :Satheeshkumar C
// Creation date: 16 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP8_TC005(TestName)
{
var exestatus = true;
    
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Enter details for Alerts And Isolation Requirements
exestatus = Features.MVAlertsAndIsolationRequirements(TestName,exestatus)

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP8_TC006
// Desc :Flow to document Allied Health Progress Notes for a patient
// Owner :Satheeshkumar C
// Creation date: 16 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP8_TC006(TestName)
{
var exestatus = true;
    
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Enter details for Allied Health Progress Notes
exestatus = Features.MVAlliedHealthProgressNotes(TestName,exestatus)

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//




//******************************************************************************************//
//******************************************************************************************//
// Name :CMP8_TC015
// Desc :Flow to document Pharmacy Progress Note for a patient
// Owner :Satheeshkumar C
// Creation date: 16 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP8_TC015(TestName)
{
var exestatus = true;
    
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Enter details for Pharmacy Progress Note
exestatus = Features.MVPharmacyProgressNote(TestName,exestatus)

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP8_TC002
// Desc :Flow to document document Physiotherapy Assessment
// Owner :Satheeshkumar C
// Creation date: 16 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP8_TC002(TestName)
{
var exestatus = true;
    
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Enter details for  Physiotherapy Assessment
exestatus = Features.MVPhysiotherapyAssessmentTool(TestName,exestatus)

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP8_TC003
// Desc :Flow to  document Manual Handling
// Owner :Satheeshkumar C
// Creation date: 17 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP8_TC003(TestName)
{
var exestatus = true;
    
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Enter details for Manual Handling
exestatus = Features.MVManualHandling(TestName,exestatus)

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP11_TC002
// Desc :Flow to  document Medical Discharge Summary and print Dischare Summary
// Owner :Satheeshkumar C
// Creation date:20 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP11_TC002(TestName)
{
var exestatus = true;
    
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Enter Weights and Dimensions
exestatus = Features.MvWeightsandDimensions(TestName,exestatus);

//Enter details for Medical Dischare Summary
exestatus = Features.MVMedicalDischargeSummary(TestName,exestatus)

//Enter details for Medical Dischare Summary
exestatus = Features.MVPrintMedicalDischargeSummary(TestName,exestatus)

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP11_TC005
// Desc :Flow to  document Medical Discharge Summary and finalise discharge summary
// Owner :Satheeshkumar C
// Creation date:20 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP11_TC005(TestName)
{
var exestatus = true;
    
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Enter Weights and Dimensions
exestatus = Features.MvWeightsandDimensions(TestName,exestatus);

//Enter details for Medical Dischare Summary
exestatus = Features.MVMedicalDischargeSummary(TestName,exestatus)


//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//



//******************************************************************************************//
//******************************************************************************************//
// Name :CMP14_TC001
// Desc :Flow for ANZICS - Positive flow
// Owner :Arul 
// Creation date:Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP14_TC001(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);
//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Enter Admission Summary details 
//exestatus = true;
exestatus = Features.MvAdmissionSummary(TestName,exestatus);
// ANZICS details 
exestatus = Features.MvRecordVentilation(TestName,exestatus);

exestatus = Features.MVANZICSDetails(TestName,exestatus);
//Logout
 exestatus = Features.MvLogout(TestName,exestatus);
  
}



//******************************************************************************************//
//******************************************************************************************//
// Name :CMP14_TC002
// Desc :Flow for ANZICS - MV  flow
// Owner :Arul 
// Creation date:Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP14_TC002(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);
//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);
//Enter Patient Demographics
exestatus = Features.MvPatientDemographics(TestName,exestatus);
//Enter Admission Summary details 
exestatus = Features.MvAdmissionSummary(TestName,exestatus);

exestatus = Features.MvRecordVentilation(TestName,exestatus)
//Enter Weights and Dimensions
exestatus = Features.MvWeightsandDimensions(TestName,exestatus);
//Enter details for Medical Dischare Summary
exestatus = Features.MVMedicalDischargeSummary(TestName,exestatus);
// ANZICS details 
exestatus = Features.MVANZICSDetails(TestName,exestatus);
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :APD_ValidationTab01
// Desc :This test case verifies the fields in the ANZICS plugin for Admissions/Discharge tab
// Owner :Mohammad Zeeshan 
// Creation date:03/07/2019
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function APD_ValidationTab01(TestName)
{
    var exestatus = true;
    
    //Login
    exestatus = Features.MvLogin(TestName,exestatus);
    
    //Enter Patient Register
    exestatus = Features.MvPatientRegister(TestName,exestatus);
    
    //Enter Patient Demographics
    exestatus = Features.MvPatientDemographics(TestName,exestatus);
    
    //Enter Admission Summary details 
    exestatus = Features.MvAdmissionSummary(TestName,exestatus);

    //Enter Weights and Dimensions
    exestatus = Features.MvWeightsandDimensions(TestName,exestatus);
    
    //Enter details for Medical Discharge Summary
    exestatus = Features.MVMedicalDischargeSummary(TestName,exestatus);
    
    //Verify details in the ANZICS addin 
    exestatus = Features.MVVerifyANZICSDetailsTab01(TestName,exestatus);
    
    //Logout
    exestatus = Features.MvLogout(TestName,exestatus);  
}

//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :APD_ValidationTab02
// Desc :This test case verifies the fields in the Chronic Health/Scoring tab in ANZICS plugin
// Owner :Mohammad Zeeshan 
// Creation date:04/07/2019
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function APD_ValidationTab02(TestName)
{
    var exestatus = true;
    
    //Login
    exestatus = Features.MvLogin(TestName,exestatus);
    
    //Enter Patient Register
    exestatus = Features.MvPatientRegister(TestName,exestatus);
    
    //Enter Patient Demographics
    exestatus = Features.MvPatientDemographics(TestName,exestatus);
    
    //Enter Admission Summary details 
    exestatus = Features.MvAdmissionSummary(TestName,exestatus);

    //Enter Weights and Dimensions
    exestatus = Features.MvWeightsandDimensions(TestName,exestatus);
    
    //Enter details for Medical Discharge Summary
    exestatus = Features.MVMedicalDischargeSummary(TestName,exestatus);
    
    //Verify details in the ANZICS addin 
    exestatus = Features.MVANZICSDetails(TestName,exestatus);
    
    //Logout
    exestatus = Features.MvLogout(TestName,exestatus);  
}

//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :APD_ValidationTab03
// Desc :This test case verifies the fields in OBS/GCS tab in the ANZICS plugin
// Owner :Mohammad Zeeshan 
// Creation date:03/07/2019
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function APD_ValidationTab03(TestName)
{
    var exestatus = true;
    
    //Login
    exestatus = Features.MvLogin(TestName,exestatus);
    
    //Enter Patient Register
    exestatus = Features.MvPatientRegister(TestName,exestatus);
    
    //Enter Patient Demographics
    exestatus = Features.MvPatientDemographics(TestName,exestatus);
    
    //Enter Admission Summary details 
    exestatus = Features.MvAdmissionSummary(TestName,exestatus);

    //Enter Weights and Dimensions
    exestatus = Features.MvWeightsandDimensions(TestName,exestatus);
    
    //Enter details for Medical Discharge Summary
    exestatus = Features.MVMedicalDischargeSummary(TestName,exestatus);
    
    //Verify details in the ANZICS addin 
    exestatus = Features.MVANZICSDetails(TestName,exestatus);
    
    //Logout
    exestatus = Features.MvLogout(TestName,exestatus);  
}

//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :APD_ValidationTab04
// Desc :This test case verifies the fields in Labs tab in the ANZICS plugin
// Owner :Mohammad Zeeshan 
// Creation date:03/07/2019
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function APD_ValidationTab04(TestName)
{
    var exestatus = true;
    
    //Login
    exestatus = Features.MvLogin(TestName,exestatus);
    
    //Enter Patient Register
    exestatus = Features.MvPatientRegister(TestName,exestatus);
    
    //Enter Patient Demographics
    exestatus = Features.MvPatientDemographics(TestName,exestatus);
    
    //Enter Admission Summary details 
    exestatus = Features.MvAdmissionSummary(TestName,exestatus);

    //Enter Weights and Dimensions
    exestatus = Features.MvWeightsandDimensions(TestName,exestatus);
    
    //Enter details for Medical Discharge Summary
    exestatus = Features.MVMedicalDischargeSummary(TestName,exestatus);
    
    //Verify details in the ANZICS addin 
    exestatus = Features.MVANZICSDetails(TestName,exestatus);
    
    //Logout
    exestatus = Features.MvLogout(TestName,exestatus);  
}

//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP11_TC004
// Desc :Flow to  document Medical Discharge Summary and Discharge Against Medical Advice
// Owner :Satheeshkumar C
// Creation date:22 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP11_TC004(TestName)
{
var exestatus = true;
    
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Enter Weights and Dimensions
exestatus = Features.MvWeightsandDimensions(TestName,exestatus);

//Enter details for Medical Dischare Summary
exestatus = Features.MVMedicalDischargeSummary(TestName,exestatus);

// To enter the details for patient death date and time
exestatus = Features.MvPatientDeathDateTime (TestName,exestatus);

// To change the patient status to released
exestatus = Features.MvReleasePatient(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP11_TC003
// Desc :Flow to  document Nursing  Discharge Summary
// Owner :Satheeshkumar C
// Creation date:23 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP11_TC003(TestName)
{
var exestatus = true;
    
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
exestatus = Features.MvPatientDemographics(TestName,exestatus);

// Enter input details for Admission summary
exestatus = Features.MvAdmissionSummary(TestName,exestatus);

//Enter Other Drain
exestatus = Features.MvOtherDrain(TestName,exestatus);

//Enter Pressure Injury Risk Assessment to verify the score on the Nursing discharge summary
exestatus = Features.MvPressureRiskAssessment(TestName,exestatus);

// Enter details for Nursing discharge summary
exestatus = Features.MVNursingDischargeSummary(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP8_TC026
// Desc :Flow to  document Nursing  Discharge Summary
// Owner :Satheeshkumar C
// Creation date:23 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP8_TC026(TestName)
{
var exestatus = true;
    
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

// Enter details for basic search
exestatus = Features.MvSearchPatient(TestName,exestatus);

//Enter Patient details
exestatus = Features.MvAdvancedSearchPatient(TestName,exestatus);


//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP13_TC001
// Desc :Flow to  print the admission summary via ChronologicalPrint
// Owner :Satheeshkumar C
// Creation date:28 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP13_TC001(TestName)
{
var exestatus = true;
    
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Admission details
exestatus = Features.MvAdmissionSummary(TestName,exestatus);

//Enter Admission details
exestatus = Features.MvChronologicalPrint(TestName,exestatus);


//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP10_TC012
// Desc :Flow to  document the Intra Aortic Balloon Catheter
// Owner :Satheeshkumar C
// Creation date:01 Dec 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP10_TC012(TestName)
{
var exestatus = true;
    
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);



//Enter Intra Aortic Balloon Catheter details
exestatus = Features.MvIntraAorticBalloonCatheter(TestName,exestatus);


//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP10_TC014
// Desc :Flow to  document the Subdural Drain and other drain
// Owner :Satheeshkumar C
// Creation date:01 Dec 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP10_TC014(TestName)
{
var exestatus = true;
    
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Other Drain
exestatus = Features.MvOtherDrain(TestName,exestatus);

//Enter Subdural Drain details
exestatus = Features.MvSubduralDrain(TestName,exestatus);


//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP10_TC011
// Desc :Flow to  document the Balloon Tamponade Device
// Owner :Satheeshkumar C
// Creation date:01 Dec 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP10_TC011(TestName)
{
var exestatus = true;
    
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);


//Enter Balloon Tamponade Device details
exestatus = Features.MvBalloonTamponadeDevice(TestName,exestatus);


//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP10_TC009
// Desc :Flow to document Alerts And Isolation Requirements for patient
// Owner :Satheeshkumar C
// Creation date:04 Dec 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP10_TC009(TestName)
{
var exestatus = true;
    
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);


//Enter Alerts And Isolation Requirements details
exestatus = Features.MVAlertsAndIsolationRequirements(TestName,exestatus);


//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//

 
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP10_TC003
// Desc :Flow to document the Confusion Assessment (CAM-ICU)
// Owner :Satheeshkumar C
// Creation date:05 Dec 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP10_TC003(TestName)
{
var exestatus = true;
    
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);


//Enter CAM IUC details
exestatus = Features.MvCAMICU(TestName,exestatus);


//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP10_TC005
// Desc :Feature to fill and validate the Admission Summary form
// Owner :Satheeshkumar C
// Creation date:05 Dec 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP10_TC005(TestName)
{
var exestatus = true;
    
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);


//Enter admission summary  details
exestatus = Features.MvAdmissionSummary(TestName,exestatus);


//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP10_TC001
// Desc :Feature to add allergies and prescribe medications
// Owner :Satheeshkumar C
// Creation date:06 Dec 2017
// Update By :Satheeshkumar 
// Update date:10-Jan-2018
// Update desc:Commented  MvAllergies feature in the test as the scripts are failing due to current changes in MV
//******************************************************************************************//
//******************************************************************************************//

function CMP10_TC001(TestName)
{
var exestatus = true;
    
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);


//Enter allergy  details
//exestatus = Features.MvAllergies(TestName,exestatus);


//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP10_TC002
// Desc :Feature to validate Track the changes in MedicationOrder and dose
// Owner :Satheeshkumar C
// Creation date:06 Dec 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP10_TC002(TestName)
{
var exestatus = true;
    
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);


//Enter medication  details
exestatus = Features.MvTrackChangesMedicationOrder(TestName,exestatus);


//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP10_TC008
// Desc :Flow to document the Advanced Care Directive
// Owner :Satheeshkumar C
// Creation date: 06 Dec 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP10_TC008(TestName)
{
var exestatus = true;
    
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Enter details for Advanced Care Directive
exestatus = Features.MVAdvancedCareDirective(TestName,exestatus)

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP16_TC001
// Desc :Flow to login DBUpdate tool
// Owner :Satheeshkumar C
// Creation date: 06-Dec-17
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP16_TC001(TestName)
{
var exestatus = true;
    
//Login
exestatus = Features.MvDBUpdateLogin(TestName,exestatus);


//Logout
exestatus = Features.MvDBUpdateLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name : CMP11_TC011
// Desc :Flow to  document and review Medical Discharge Summary 
// Owner :Satheeshkumar C
// Creation date:07-Dec-2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP11_TC011(TestName)
{
var exestatus = true;
    
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Enter Weights and Dimensions
exestatus = Features.MvWeightsandDimensions(TestName,exestatus);

//Enter details for Medical Discharge Summary
exestatus = Features.MVMedicalDischargeSummary(TestName,exestatus)


//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP5_TC014
// Desc :Flow to modify the existing order 
// Owner :Satheeshkumar C
// Creation date:07-Dec-17
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP5_TC014(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Enter medication details
exestatus = Features.MvOverrideNonAdministration(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP16_TC003
// Desc :Flow to match the partial MRN  of the patient in DBUpdate tool
// Owner :Satheeshkumar C
// Creation date: 08-Dec-17
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP16_TC003(TestName)
{
var exestatus = true;

//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

// Close a patient in MV
//exestatus = Features.MvClosePatient(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
   
//Login to DBUpdate tool
exestatus = Features.MvDBUpdateLogin(TestName,exestatus);

//Enter partial MRN details
exestatus = Features.MvDBUpdateSearchByAllFields(TestName,exestatus);

//Logout of DBUpdate tool
exestatus = Features.MvDBUpdateLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP5_TC013
// Desc :Flow to check Prescribe Home Medication
// Owner :Satheeshkumar C
// Creation date:08-Dec-17
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

// Prescribe Home Medication - Flowsheet validation to be checked
function CMP5_TC013(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Enter prescribeMedication Home medication Form
exestatus = Features.MvprescribeMedication(TestName,exestatus);


//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//



//******************************************************************************************//
//******************************************************************************************//
// Name :CMP5_TC003
// Desc :Flow to validate Cease Medications
// Owner :Satheeshkumar C
// Creation date:08-dec-17
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP5_TC003(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Enter Cease Medications
exestatus = Features.MvCeaseMedications(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP16_TC005
// Desc :Flow to match the partial first name and last name of the patient in DBUpdate tool
// Owner :Satheeshkumar C
// Creation date: 09-Dec-17
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP16_TC005(TestName)
{
var exestatus = true;

//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

// Close a patient in MV
//exestatus = Features.MvClosePatient(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
   
//Login to DBUpdate tool
exestatus = Features.MvDBUpdateLogin(TestName,exestatus);

//Enter partial First & Last name of the patient
exestatus = Features.MvDBUpdateSearchByAllFields(TestName,exestatus);

//Logout of DBUpdate tool
exestatus = Features.MvDBUpdateLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP16_TC007
// Desc :Flow to update all the fields in DBUpdate tool and validate in MV
// Owner :Satheeshkumar C
// Creation date: 13-Dec-17
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP16_TC007(TestName)
{
var exestatus = true;

//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

// Close a patient in MV
//exestatus = Features.MvClosePatient(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
   
//Login to DBUpdate tool
exestatus = Features.MvDBUpdateLogin(TestName,exestatus);

//Enter updated input details in DB Update tool
exestatus = Features.MvDBUpdateAllFields(TestName,exestatus);

//Logout of DBUpdate tool
exestatus = Features.MvDBUpdateLogout(TestName,exestatus);

//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Search a patient in MV
exestatus = Features.MvSearchPatient(TestName,exestatus);

// Validate the updated fields in MV
 exestatus = Features.MvPatientDetailsFromDB(TestName,exestatus);
 
 //Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP16_TC008
// Desc :Flow to validate quit confirmation pop up when close button is selected
// Owner :Satheeshkumar C
// Creation date: 13-Dec-17
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP16_TC008(TestName)
{
var exestatus = true;

//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);


//Logout
exestatus = Features.MvLogout(TestName,exestatus);
   
//Login to DBUpdate tool
exestatus = Features.MvDBUpdateLogin(TestName,exestatus);

//Enter updated first and last name details in DB Update tool
exestatus = Features.MvDBUpdateUnsaved(TestName,exestatus);

//Logout of DBUpdate tool
exestatus = Features.MvDBUpdateLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP16_TC009
// Desc :Flow to validate quit confirmation pop up when close button is selected and validation of unsaved changes
// Owner :Satheeshkumar C
// Creation date: 13-Dec-17
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP16_TC009(TestName)
{
var exestatus = true;

//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);


//Logout
exestatus = Features.MvLogout(TestName,exestatus);
   
//Login to DBUpdate tool
exestatus = Features.MvDBUpdateLogin(TestName,exestatus);

//Enter updated first and last name details in DB Update tool
exestatus = Features.MvDBUpdateUnsaved(TestName,exestatus);

//Logout of DBUpdate tool
exestatus = Features.MvDBUpdateLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP16_TC013
// Desc :Flow to match the Account# of the patient in DBUpdate tool
// Owner :Satheeshkumar C
// Creation date: 14-Dec-17
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP16_TC013(TestName)
{
var exestatus = true;

//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);


//Logout
exestatus = Features.MvLogout(TestName,exestatus);
   
//Login to DBUpdate tool
exestatus = Features.MvDBUpdateLogin(TestName,exestatus);

//Enter account # and compare
exestatus = Features.MvDBUpdateSearchByAllFields(TestName,exestatus);

//Logout of DBUpdate tool
exestatus = Features.MvDBUpdateLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP16_TC014
// Desc :Flow to match different facility values in DBUpdate tool
// Owner :Satheeshkumar C
// Creation date: 14-Dec-17
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP16_TC014(TestName)
{
var exestatus = true;

////Login
//exestatus = Features.MvLogin(TestName,exestatus);
//
////Enter Patient Register
//exestatus = Features.MvPatientRegister(TestName,exestatus);
//
//
////Logout
//exestatus = Features.MvLogout(TestName,exestatus);
   
//Login to DBUpdate tool
exestatus = Features.MvDBUpdateLogin(TestName,exestatus);

//Enter different facility values and compare
exestatus = Features.MvDBUpdateSearchByFacility(TestName,exestatus);

//Logout of DBUpdate tool
exestatus = Features.MvDBUpdateLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP16_TC010
// Desc :Flow to check for mandatory validation pop up and update all mandatory fields in DBUpdate tool 
// Owner :Satheeshkumar C
// Creation date: 14-Dec-17
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP16_TC010(TestName)
{
var exestatus = true;

//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

// Close a patient in MV
//exestatus = Features.MvClosePatient(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
   
//Login to DBUpdate tool
exestatus = Features.MvDBUpdateLogin(TestName,exestatus);

//Enter updated input details in DB Update tool
exestatus = Features.MvDBUpdateAllFields(TestName,exestatus);

//Logout of DBUpdate tool
exestatus = Features.MvDBUpdateLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP16_TC017
// Desc :Flow to match the MRN values in Archive DB 
// Owner :Satheeshkumar C
// Creation date: 19-Dec-17
// Update By :Satheeshkumar c
// Update date: 11-Jan-2018
// Update desc: Updated the test case to have seprate pre-request test run for this arhive scenario
//******************************************************************************************//
//******************************************************************************************//

function CMP16_TC017(TestName)
{
var exestatus = true;
   
//Login to DBUpdate tool
exestatus = Features.MvDBUpdateLogin(TestName,exestatus);

//Enter MRN details & validate
exestatus = Features.MvDBUpdateArhiveDBSearchByFields(TestName,exestatus);

//Logout of DBUpdate tool
exestatus = Features.MvDBUpdateLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP16_TC006
// Desc :Flow to update all the fields in DBUpdate tool and validate in MV
// Owner :Satheeshkumar C
// Creation date: 15-Dec-17
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP16_TC006(TestName)
{
var exestatus = true;

//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

// Close a patient in MV
//exestatus = Features.MvClosePatient(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
   
//Login to DBUpdate tool
exestatus = Features.MvDBUpdateLogin(TestName,exestatus);

//Enter updated input details in DB Update tool
exestatus = Features.MvDBUpdateAllFields(TestName,exestatus);

//Logout of DBUpdate tool
exestatus = Features.MvDBUpdateLogout(TestName,exestatus);

//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Search a patient in MV
exestatus = Features.MvSearchPatient(TestName,exestatus);

// Validate the updated fields in MV
 exestatus = Features.MvPatientDetailsFromDB(TestName,exestatus);
 
 //Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP16_TC011
// Desc :Flow to match different partial AUID values in DBUpdate tool 
// Owner :Satheeshkumar C
// Creation date: 18-Dec-17
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP16_TC011(TestName)
{
var exestatus = true;
   
//Login to DBUpdate tool
exestatus = Features.MvDBUpdateLogin(TestName,exestatus);

//Enter partial AUID field and validate in DB update tool
exestatus = Features.MvDBUpdateSearchByAUID(TestName,exestatus);

//Logout of DBUpdate tool
exestatus = Features.MvDBUpdateLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP16_TC012
// Desc :Flow to match different full AUID values in DBUpdate tool 
// Owner :Satheeshkumar C
// Creation date: 18-Dec-17
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP16_TC012(TestName)
{
var exestatus = true;
   
//Login to DBUpdate tool
exestatus = Features.MvDBUpdateLogin(TestName,exestatus);

//Enter partial AUID field and validate in DB update tool
exestatus = Features.MvDBUpdateSearchByAUID(TestName,exestatus);

//Logout of DBUpdate tool
exestatus = Features.MvDBUpdateLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP16_TC016
// Desc :Flow to match the partial last name values in Archive DB 
// Owner :Satheeshkumar C
// Creation date: 19-Dec-17
// Update By :Satheeshkumar c
// Update date: 11-Jan-2018
// Update desc: Updated the test case to have seprate pre-request test run for this arhive scenario
//******************************************************************************************//
//******************************************************************************************//

function CMP16_TC016(TestName)
{
var exestatus = true;
   
//Login to DBUpdate tool
exestatus = Features.MvDBUpdateLogin(TestName,exestatus);

//Enter MRN details & validate
exestatus = Features.MvDBUpdateArhiveDBSearchByFields(TestName,exestatus);

//Logout of DBUpdate tool
exestatus = Features.MvDBUpdateLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP16_TC015
// Desc :Flow to update key  fields in DBUpdate tool and validate in MV
// Owner :Satheeshkumar C
// Creation date: 19-Dec-17
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP16_TC015(TestName)
{
var exestatus = true;

//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

// Close a patient in MV
//exestatus = Features.MvClosePatient(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
   
//Login to DBUpdate tool
exestatus = Features.MvDBUpdateLogin(TestName,exestatus);

//Enter updated input details in DB Update tool
exestatus = Features.MvDBUpdateAllFields(TestName,exestatus);

//Logout of DBUpdate tool
exestatus = Features.MvDBUpdateLogout(TestName,exestatus);

//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Search a patient in MV
exestatus = Features.MvSearchPatient(TestName,exestatus);

// Validate the updated fields in MV
 exestatus = Features.MvPatientDetailsFromDB(TestName,exestatus);
 
 //Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP16_TC024
// Desc :Flow to match the first name values in Archive DB 
// Owner :Satheeshkumar C
// Creation date: 20-Dec-17
// Update By :Satheeshkumar c
// Update date: 11-Jan-2018
// Update desc: Updated the test case to have seprate pre-request test run for this arhive scenario
//******************************************************************************************//
//******************************************************************************************//

function CMP16_TC024(TestName)
{
var exestatus = true;

   
//Login to DBUpdate tool
exestatus = Features.MvDBUpdateLogin(TestName,exestatus);

//Enter MRN details & validate
exestatus = Features.MvDBUpdateArhiveDBSearchByFields(TestName,exestatus);

//Logout of DBUpdate tool
exestatus = Features.MvDBUpdateLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP16_TC004
// Desc :Flow to match the patient's First Name,Last Name, MRN, Account No and facility in production DB
// Owner :Satheeshkumar C
// Creation date: 21-Dec-17
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP16_TC004(TestName)
{
var exestatus = true;

//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);


//Logout
exestatus = Features.MvLogout(TestName,exestatus);
   
//Login to DBUpdate tool
exestatus = Features.MvDBUpdateLogin(TestName,exestatus);

//Enter First Name,Last Name, MRN, Account No and facility details
exestatus = Features.MvDBUpdateSearchByAllFields(TestName,exestatus);

//Logout of DBUpdate tool
exestatus = Features.MvDBUpdateLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP16_TC018
// Desc :Flow to match the patient's First Name,Last Name, MRN, Account No and facility in archive DB
// Owner :Satheeshkumar C
// Creation date: 21-Dec-17
//Update By :Satheeshkumar c
// Update date: 11-Jan-2018
// Update desc: Updated the test case to have seprate pre-request test run for this arhive scenario
//******************************************************************************************//
//******************************************************************************************//

function CMP16_TC018(TestName)
{
var exestatus = true;

   
//Login to DBUpdate tool
exestatus = Features.MvDBUpdateLogin(TestName,exestatus);

//Enter  First Name,Last Name, MRN, Account No and facility details
exestatus = Features.MvDBUpdateArhiveDBSearchByFields(TestName,exestatus);

//Logout of DBUpdate tool
exestatus = Features.MvDBUpdateLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP16_TC022
// Desc :
// Owner :Satheeshkumar C
// Creation date: 21-Dec-17
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP16_TC022(TestName)
{
var exestatus = true;
   
//Login to DBUpdate tool
exestatus = Features.MvDBUpdateLogin(TestName,exestatus);

//Enter  First Name,Last Name, MRN, Account No and facility details
exestatus = Features.MvDBUpdateArhiveDBSearchByFields(TestName,exestatus);

//Logout of DBUpdate tool
exestatus = Features.MvDBUpdateLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP16_TC019
// Desc :Flow to validate mandatory pop up & update key  fields in Archive DB 
// Owner :Satheeshkumar C
// Creation date: 22-Dec-17
// Update By :Satheeshkumar c
// Update date: 11-Jan-2018
// Update desc: Updated the test case to have seprate pre-request test run for this arhive scenario
//******************************************************************************************//
//******************************************************************************************//

function CMP16_TC019(TestName)
{
var exestatus = true;

   
//Login to DBUpdate tool
exestatus = Features.MvDBUpdateLogin(TestName,exestatus);

//Enter updated input details in DB Update tool
exestatus = Features.MvDBUpdateAllFields(TestName,exestatus);

//Logout of DBUpdate tool
exestatus = Features.MvDBUpdateLogout(TestName,exestatus);
}

//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP16_TC020
// Desc :Flow to validate mandatory pop up & update date  fields in Archive DB 
// Owner :Satheeshkumar C
// Creation date: 22-Dec-17
// Update By :Satheeshkumar c
// Update date: 11-Jan-2018
// Update desc: Updated the test case to have seprate pre-request test run for this arhive scenario
//******************************************************************************************//
//******************************************************************************************//

function CMP16_TC020(TestName)
{
var exestatus = true;

   
//Login to DBUpdate tool
exestatus = Features.MvDBUpdateLogin(TestName,exestatus);

//Enter updated input details in DB Update tool
exestatus = Features.MvDBUpdateAllFields(TestName,exestatus);

//Logout of DBUpdate tool
exestatus = Features.MvDBUpdateLogout(TestName,exestatus);
}

//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP16_TC021
// Desc :Flow to search a patient that does not exits in production DB & validate 
// Owner :Satheeshkumar C
// Creation date: 26-Dec-17
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP16_TC021(TestName)
{
var exestatus = true;
   
//Login to DBUpdate tool
exestatus = Features.MvDBUpdateLogin(TestName,exestatus);

//Enter input detail that dose not exits in DB
exestatus = Features.MvDBUpdateNoResult(TestName,exestatus);

//Logout of DBUpdate tool
exestatus = Features.MvDBUpdateLogout(TestName,exestatus);
}

//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP12_TC011
// Desc : Feature to validate regular medication details in eHOC report
// Owner :Satheeshkumar C
// Creation date: 10-Jan-17
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP12_TC011(TestName)
{
var exestatus = true;

//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter details for regular medication
exestatus = Features.MvTrackChangesMedicationOrder(TestName,exestatus);

//
exestatus = Features.MveHOCRegularMedication(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
   
}

//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :PRT_TC001
// Desc : 
// Owner :Satheeshkumar C
// Creation date: 11-Jan-17
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function PRT_TC001(TestName)
{
var exestatus = true;

//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

// Close a patient in MV
exestatus = Features.MvClosePatient(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
   
}

//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :PRT_TC002
// Desc : 
// Owner :Satheeshkumar C
// Creation date: 11-Jan-17
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function PRT_TC002(TestName)
{
var exestatus = true;

//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

// Close a patient in MV
exestatus = Features.MvClosePatient(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
   
}

//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :PRT_TC003
// Desc : 
// Owner :Satheeshkumar C
// Creation date: 11-Jan-17
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function PRT_TC003(TestName)
{
var exestatus = true;

//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

// Close a patient in MV
exestatus = Features.MvClosePatient(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
   
}

//******************************************************************************************//
//******************************************************************************************//

////******************************************************************************************//
//******************************************************************************************//
// Name :CMP16_TC002
// Desc :Flow to validate error message when user doesn't have access to DB update tool
// Owner :Satheeshkumar C
// Creation date: 12-jan-2018
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP16_TC002(TestName)
{
var exestatus = true;
    
//Login
exestatus = Features.MvDBUpdateLogin(TestName,exestatus);

}

//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP12_TC012
// Desc : Feature to validate PRN medication details in eHOC report
// Owner :Satheeshkumar C
// Creation date: 22-Jan-17
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP12_TC012(TestName)
{
var exestatus = true;

//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter details for PRN medication
exestatus = Features.MvPRNMaximumdailyDose(TestName,exestatus);

//


//Logout
exestatus = Features.MvLogout(TestName,exestatus);
   
}

//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP12_TC003
// Desc : Feature to validate regular medication details in eHOC report when there is no enddate
// Owner :Satheeshkumar C
// Creation date: 24-Jan-17
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP12_TC003(TestName)
{
var exestatus = true;

//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter details for regular medication
exestatus = Features.MvTrackChangesMedicationOrder(TestName,exestatus);

//
//exestatus = Features.MveHOCRegularMedication(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
   
}

//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP12_TC001
// Desc :Flow to  validate Invasive Blood Pressure details in eHOC report
// Owner :Satheeshkumar C
// Creation date:25 Jan 2018
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function CMP12_TC001(TestName)
{
var exestatus = true;
    
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
exestatus = Features.MvPatientDemographics(TestName,exestatus);

// Enter input details for Admission summary
exestatus = Features.MvAdmissionSummary(TestName,exestatus);

// Enter details for Nursing discharge summary
exestatus = Features.MVNursingDischargeSummary(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP8_TC022
// Desc :Feature to Plan Patient Care
// Owner :Sangiliraja J
// Creation date:21 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP8_TC022(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Validation to Plan for Patient Care 
exestatus = Features.MvPlanPatientCare(TestName,exestatus);
 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP11_TC001
// Desc :Feature to Assess and Document Metabolic Status for Discharge
// Owner :Sangiliraja J
// Creation date:21 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP11_TC001(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Validation to Assess and DocumentMetabolic status for Discharge 
exestatus = Features.MvAssessMetabolicDischarge(TestName,exestatus);
 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP11_TC007
// Desc :Feature to Print Patient Belongings List
// Owner :Sangiliraja J
// Creation date:21 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP11_TC007(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Validation to Print Patient Belongings List 
exestatus = Features.MvPrintPatientBelongings(TestName,exestatus);
 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP8_TC020
// Desc :Feature to Navigate Between Patient Files
// Owner :Sangiliraja J
// Creation date:22 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP8_TC020(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Validation to Navigate Between Patient Files 
exestatus = Features.MvNavigatePatientFiles(TestName,exestatus);
 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP11_TC010
// Desc :Feature to Fluid Balances Check
// Owner :Sangiliraja J
// Creation date:22 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP11_TC010(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);
exestatus = Features.MVWounds(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);
//Enter Admission Summary
//exestatus = Features.MvAdmissionSummary(TestName,exestatus);

//Validation of Fluid Balances Check 
exestatus = Features.MvFluidBalancesCheck(TestName,exestatus);
 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP11_TC008
// Desc :Feature to Record Patient Death
// Owner :Sangiliraja J
// Creation date:23 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP11_TC008(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
exestatus = Features.MvPatientDemographics(TestName,exestatus);
//Validation of Record Patient Death 
exestatus = Features.MvPatientDeathDateTime(TestName,exestatus);
 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP8_TC001
// Desc :Feature to Assemble Modify Patient
// Owner :Sangiliraja J
// Creation date:23 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP8_TC001(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);
//Validation of Assemble Modify Patient 
exestatus = Features.MvAssembleModifyPatient(TestName,exestatus);
//exestatus = Features.MvSearchPatient(TestName,exestatus);
 
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP13_TC002
// Desc :Feature to CPT Printing Form
// Owner :Sangiliraja J
// Creation date:28 Nov 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP13_TC002(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);


//Enter Admission details
exestatus = Features.MvAdmissionSummary(TestName,exestatus);
//Validation of CPT Printing Form 
exestatus = Features.MvChronologicalPrint(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP10_TC015
// Desc :Feature to DocumentPresenceTTube
// Owner :Sangiliraja J
// Creation date:1 Dec 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP10_TC015(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);
//Validation of DocumentPresenceTTube 
//Flowsheet validation to be checked
exestatus = Features.MvDocumentPresenceTTube(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP10_TC006
// Desc :Feature to CompleteRuleNinesChart
// Owner :Sangiliraja J
// Creation date:1 Dec 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP10_TC006(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);
//Validation of CompleteRuleNinesChart 
exestatus = Features.MvCompleteRuleNinesChart(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP10_TC022
// Desc :Feature to View Pathology
// Owner :Sangiliraja J
// Creation date:4 Dec 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP10_TC022(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);
//Validation of ViewPathology 
// Flowsheet validation to be checked
exestatus = Features.MvViewPathology(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP10_TC004
// Desc :Feature to Complete Injury Severity
// Owner :Sangiliraja J
// Creation date:4 Dec 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP10_TC004(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);
//Validation of CompleteInjurySeverity 
exestatus = Features.MvCompleteInjurySeverity(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP10_TC021
// Desc :Feature to Upload Medical Retrieval
// Owner :Sangiliraja J
// Creation date:5 Dec 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP10_TC021(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);
//Updating the AdmissionSummary
exestatus = Features.MvAdmissionSummary(TestName,exestatus);
//Validation of Upload Medical Retrieval 
exestatus = Features.MvUploadMedicalRetrieval(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP10_TC016
// Desc :Feature to DocumentResuscitation
// Owner :Sangiliraja J
// Creation date:5 Dec 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP10_TC016(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);
//Updating the AdmissionSummary
//exestatus = Features.MvAdmissionSummary(TestName,exestatus);
//Validation of DocumentResuscitation 
exestatus = Features.MvDocumentResuscitation(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP10_TC013
// Desc :Feature to DocumentOrogastricTube
// Owner :Sangiliraja J
// Creation date:5 Dec 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP10_TC013(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);
//Validation of DocumentOrogastricTube 
exestatus = Features.MvOrogastricTube(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP10_TC019
// Desc :Feature to PlanPatientCare
// Owner :Sangiliraja J
// Creation date:6 Dec 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP10_TC019(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Validation of PlanPatientCare 
exestatus = Features.MvPlanPatientCare(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP10_TC020
// Desc :Feature to ReviewMedicationList
// Owner :Sangiliraja J
// Creation date:6 Dec 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP10_TC020(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);
//Validation of ReviewMedicationList 
//exestatus = Features.MvPrescribeTopicalPatch(TestName,exestatus);
exestatus = Features.MvReviewMedicationList(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP10_TC018
// Desc :Feature to MedicationChart
// Owner :Sangiliraja J
// Creation date:7 Dec 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP10_TC018(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);
//Validation of MedicationChartDiffData 
//exestatus = Features.MvMedicationChart(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP10_TC007
// Desc :Feature to ConfirmCurrentAllergies
// Owner :Sangiliraja J
// Creation date:7 Dec 2017
// Update By :Sangiliraja J
// Update date:10 Jan 2018
// Update desc:Commenting the feature since new allergy enhancement test inprogress
//******************************************************************************************//
//******************************************************************************************//


function CMP10_TC007(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);
//exestatus = Features.MvRecordKnownAllergies(TestName,exestatus);
//Validation of ConfirmCurrentAllergies 
//exestatus = Features.MvConfirmCurrentAllergies(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP11_TC012
// Desc :Feature to ReviewPatientWoundsDiffData
// Owner :Sangiliraja J
// Creation date:8 Dec 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP11_TC012(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Validation of ReviewPatientWoundsDiffData 
exestatus = Features.MvReviewPatientWounds(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP11_TC013
// Desc :Feature to UpdateProblemListDiffData
// Owner :Sangiliraja J
// Creation date:8 Dec 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP11_TC013(TestName)
{
var exestatus = true;
    
// add a comment
//Login
//exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
//exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Validation of UpdateProblemListDiffData 
exestatus = Features.MvUpdateProblemList(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP11_TC009
// Desc :Feature to ReviewBurnDepthDescrip
// Owner :Sangiliraja J
// Creation date:8 Dec 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP11_TC009(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Validation of ReviewBurnDepthDescrip 
exestatus = Features.MvReviewBurnDepthDescrip(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP10_TC010
// Desc :Feature to BurnsOnAdmission
// Owner :Sangiliraja J
// Creation date:11 Dec 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP10_TC010(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Validation of BurnsOnAdmission 
exestatus = Features.MvBurnsOnAdmission(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP8_TC023
// Desc :Feature to ReviewAlliedHealthProgress
// Owner :Sangiliraja J
// Creation date:13 Dec 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP8_TC023(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Validation of ReviewAlliedHealthProgress 
exestatus = Features.MvReviewAlliedHealthProgress(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP8_TC028
// Desc :Feature to ValidateCorrectUser
// Owner :Sangiliraja J
// Creation date:13 Dec 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP8_TC028(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Validation of ValidateCorrectUser 
exestatus = Features.MvValidateCorrectUser(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :CMP10_TC017
// Desc :Feature to MedicationRecordView
// Owner :Sangiliraja J
// Creation date:14 Dec 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP10_TC017(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);

//Validation of MedicationRecordView 
exestatus = Features.MvMedicationRecordView(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP12_TC005
// Desc :Feature to Validate eHOC Vital Signs WeightsHeights
// Owner :Sangiliraja J
// Creation date:10 Jan 2018
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP12_TC005(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
exestatus = Features.MvPatientDemographics(TestName,exestatus);
exestatus = Features.MvWeightsandDimensions(TestName,exestatus);
//Validation of VitalSignsWeightsHeights 
exestatus = Features.MvVitalSignsWeightsHeights(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP12_TC006
// Desc :Feature to Validate eHOC Patient Details
// Owner :Sangiliraja J
// Creation date:22 Jan 2018
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP12_TC006(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
exestatus = Features.MvPatientDemographics(TestName,exestatus);
//Validation of eHOCPatientDetails 
exestatus = Features.MveHOCPatientDetails(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP12_TC013
// Desc :Feature to PrescribeAntimicrobialMedication
// Owner :Sangiliraja J
// Creation date:24 Jan 2018
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP12_TC013(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);
//Validation of PrescribeAntimicrobialMedication 
exestatus = Features.MvPrescribeOralMedication(TestName,exestatus);
exestatus = Features.MvPrescribeAntimicrobialMedication(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP12_TC017
// Desc :Feature to PrescribeAntimicrobialMedicationDiffData
// Owner :Sangiliraja J
// Creation date:25 Jan 2018
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function CMP12_TC017(TestName)
{
var exestatus = true;
    
// add a comment
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Enter Patient Demographics
//exestatus = Features.MvPatientDemographics(TestName,exestatus);
//Validation of PrescribeAntimicrobialMedication 
exestatus = Features.MvPrescribeOralMedication(TestName,exestatus);
exestatus = Features.MvPrescribeAntimicrobialMedication(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}
//******************************************************************************************//
//******************************************************************************************//

//Tests for eNMIC regression in progress here

function CMP20_TC001(TestName)
{
var exestatus = true;
  
  //Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Prescribe medication
exestatus = Features.MvPrescribePharmaVTE(TestName,exestatus);

//Generate eNMIC
exestatus = Features.MVeNIMC(TestName,exestatus);

//save PDF
exestatus = Features.SavePDF(TestName,exestatus);

//Convert PDF to Images
exestatus = Features.ComparePDFAsImg(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);


}

function CMP20_TC002(TestName)
{
var exestatus = true;
  
  //Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Prescribe medication
exestatus = Features.MvPrescribePharmaVTE(TestName,exestatus);

//Generate eNMIC
exestatus = Features.MVeNIMC(TestName,exestatus);

//save PDF
exestatus = Features.SavePDF(TestName,exestatus);

//Convert PDF to Images
exestatus = Features.ComparePDFAsImg(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);

}


function CMP20_TC003(TestName)
{
var exestatus = true;
  
  //Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Prescribe medication
exestatus = Features.MvPrescribeMeds_Resolve(TestName,exestatus);

//Generate eNMIC
exestatus = Features.MVeNIMC(TestName,exestatus);

//save PDF
exestatus = Features.SavePDF(TestName,exestatus);

//Convert PDF to Images
exestatus = Features.ComparePDFAsImg(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);

}

function CMP20_TC004(TestName)
{
var exestatus = true;
  
  //Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Prescribe medication
exestatus = Features.MvPrescribeOralMedication(TestName,exestatus);

//Generate eNMIC
exestatus = Features.MVeNIMC(TestName,exestatus);

//save PDF
exestatus = Features.SavePDF(TestName,exestatus);

//Convert PDF to Images
exestatus = Features.ComparePDFAsImg(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);

}

function CMP20_TC005(TestName)
{
var exestatus = true;
  
  //Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Prescribe medication
exestatus = Features.MvPrescribeMeds_Resolve(TestName,exestatus);

//Generate eNMIC
exestatus = Features.MVeNIMC(TestName,exestatus);

//save PDF
exestatus = Features.SavePDF(TestName,exestatus);

//Convert PDF to Images
exestatus = Features.ComparePDFAsImg(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);

}

function CMP20_TC006(TestName)
{
var exestatus = true;
  
  //Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Prescribe medication
exestatus = Features.MvPrescribeOralMedication(TestName,exestatus);

//Generate eNMIC
exestatus = Features.MVeNIMC(TestName,exestatus);

//save PDF
exestatus = Features.SavePDF(TestName,exestatus);

//Convert PDF to Images
exestatus = Features.ComparePDFAsImg(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);

}

function CMP20_TC007(TestName)
{
var exestatus = true;
  
  //Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Prescribe medication
exestatus = Features.MvPrescribeOralMedication(TestName,exestatus);

//Generate eNMIC
exestatus = Features.MVeNIMC(TestName,exestatus);

//save PDF
exestatus = Features.SavePDF(TestName,exestatus);

//Convert PDF to Images
exestatus = Features.ComparePDFAsImg(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);

}

function CMP20_TC008(TestName)
{
var exestatus = true;
  
  //Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Prescribe medication
exestatus = Features.MvPrescribeSetInterval(TestName,exestatus);

//Generate eNMIC
exestatus = Features.MVeNIMC(TestName,exestatus);

//save PDF
exestatus = Features.SavePDF(TestName,exestatus);

//Convert PDF to Images
exestatus = Features.ComparePDFAsImg(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);

}

function CMP20_TC009(TestName)
{
var exestatus = true;
  
  //Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Prescribe medication
exestatus = Features.MvPrescribePRNmeds(TestName,exestatus);

//Generate eNMIC
exestatus = Features.MVeNIMC(TestName,exestatus);

//save PDF
exestatus = Features.SavePDF(TestName,exestatus);

//Convert PDF to Images
exestatus = Features.ComparePDFAsImg(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);

}

function CMP20_TC010(TestName)
{
var exestatus = true;
  
  //Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Prescribe medication
exestatus = Features.MvPrescribeOralMedication(TestName,exestatus);

//Generate eNMIC
exestatus = Features.MVeNIMC(TestName,exestatus);

//save PDF
exestatus = Features.SavePDF(TestName,exestatus);

//Convert PDF to Images
exestatus = Features.ComparePDFAsImg(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);

}

function CMP20_TC011(TestName)
{
var exestatus = true;
  
  //Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Prescribe medication
exestatus = Features.MvPrescribeProductOpposed(TestName,exestatus);

//Generate eNMIC
exestatus = Features.MVeNIMC(TestName,exestatus);

//save PDF
exestatus = Features.SavePDF(TestName,exestatus);

//Convert PDF to Images
exestatus = Features.ComparePDFAsImg(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);

}

function CMP20_TC012(TestName)
{
var exestatus = true;
  
  //Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Record allergies
exestatus = Features.MvRecordKnownAllergies(TestName,exestatus);

//Prescribe medication
exestatus = Features.MvPrescribeTPN(TestName,exestatus);

//Generate eNMIC
exestatus = Features.MVeNIMC(TestName,exestatus);

//save PDF
exestatus = Features.SavePDF(TestName,exestatus);

//Convert PDF to Images
exestatus = Features.ComparePDFAsImg(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);

}

function CMP20_TC013(TestName)
{
var exestatus = true;
  
  //Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Prescribe medication
exestatus = Features.MvPrescribeTPN(TestName,exestatus);

//Generate eNMIC
exestatus = Features.MVeNIMC(TestName,exestatus);

//save PDF
exestatus = Features.SavePDF(TestName,exestatus);

//Convert PDF to Images
exestatus = Features.CompareLastPDFAsImg(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);

}

function CMP20_TC014(TestName)
{
var exestatus = true;
  
  //Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Prescribe medication
exestatus = Features.MvPrescribePRNmeds(TestName,exestatus);

//Generate eNMIC
exestatus = Features.MVeNIMC(TestName,exestatus);

//save PDF
exestatus = Features.SavePDF(TestName,exestatus);

//Convert PDF to Images
exestatus = Features.CompareRoutePRN(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);

}

function CMP20_TC015(TestName)
{
var exestatus = true;
  
  //Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Prescribe medication
exestatus = Features.MvPrescribePharmaVTE(TestName,exestatus);

//Generate eNMIC
exestatus = Features.MVeNIMC(TestName,exestatus);

//save PDF
exestatus = Features.SavePDF(TestName,exestatus);

//Convert PDF to Images
exestatus = Features.CompareRoutePRN(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);

}

function CMP20_TC016(TestName)
{
var exestatus = true;
  
//Login
exestatus = Features.MvLogin(TestName,exestatus);

//Enter Patient Register
exestatus = Features.MvPatientRegister(TestName,exestatus);

//Prescribe medication
exestatus = Features.MvPrescribeMeds_Resolve(TestName,exestatus);

//Generate eNMIC
exestatus = Features.MVeNIMC(TestName,exestatus);

//save PDF
exestatus = Features.SavePDF(TestName,exestatus);

//Convert PDF to Images
exestatus = Features.CompareRoutePRN(TestName,exestatus);

//Logout
exestatus = Features.MvLogout(TestName,exestatus);

}


//******************************************************************************************//
//******************************************************************************************//
// Name :CMP11_TC014
// Desc :Verify Admission Discharge time form
// Owner :Mohammad Zeeshan
// Creation date: 17/May/2019
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//
function CMP11_TC014(TestName)
{
  var exestatus = true;
  
  //Login
  exestatus = Features.MvLogin(TestName,exestatus);

  //Enter Patient Register
  exestatus = Features.MvPatientRegister(TestName,exestatus);
  
  //Enter the admission discharge form and verify it
  exestatus = Features.MvVerifyAdmissionDischargeTime(TestName,exestatus);

  //Logout
exestatus = Features.MvLogout(TestName,exestatus);

}

//******************************************************************************************//
//******************************************************************************************//
// Name :JIRA18931
// Desc :
// Owner : 
// Creation date:
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
//Enter Patient Register
exestatus = Features.MvPatientRegisterQuick(TestName,exestatus);
//Enter Patient Demographics
exestatus = Features.MvPatientDemographics(TestName,exestatus);
//Logout
exestatus = Features.MvLogout(TestName,exestatus);
  
}



