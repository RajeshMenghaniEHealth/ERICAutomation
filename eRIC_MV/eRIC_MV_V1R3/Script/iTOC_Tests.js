var PDF_Function = require("PDF_Function");
var Features = require("Features");
var ITOCFeatures = require("ITOCFeatures");

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
function iTOC_CMP3_TC020(TestName)
{
    var exestatus = true;
    
    // add a comment
    //Login
    exestatus = Features.MvLogin(TestName,exestatus);

    //Enter Patient Register
    exestatus = Features.MvPatientRegister(TestName,exestatus);
    
    //Enter Weights and Dimensions
    exestatus = Features.MvWeightsandDimensions(TestName,exestatus);
    
    //Enter Patient Demographics
    //exestatus = Features.MvPatientDemographics(TestName,exestatus);

    //Enter prescribeMedication Home medication Form
    exestatus = Features.MvprescribeMedication(TestName,exestatus);


    //Logout - Commented for the iTOC requirement
    //exestatus = Features.MvLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP4_TC003
// Desc :Add allergy and prescribe medication
// Owner :Sangiliraja J
// Creation date:Aug 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//
function iTOC_CMP4_TC003(TestName)
{
    var exestatus=true;

    //Enter Allergies
    exestatus = Features.MvAllergies(TestName,exestatus);

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
function iTOC_CMP3_TC011(TestName)
{
    var exestatus = true;
    
    //PrescribeIntravenousBolus 
    exestatus = Features.MvPrescribeIntravenousBolus(TestName,exestatus);
    
}

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

function iTOC_CMP5_TC008(TestName)
{
    var exestatus = true;    

    //Prescribe warfarin medication
    exestatus = Features.MvPrescribePharmaVTE(TestName,exestatus);

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
function iTOC_CMP5_TC019(TestName)
{
    var exestatus = true;
    
    //OrderingPRNDisplay 
    exestatus = Features.MvOrderingPRNDisplay(TestName,exestatus);
 
}

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP20_TC008
// Desc :MvPrescribeSetInterval
//******************************************************************************************//
//******************************************************************************************//

function iTOC_CMP20_TC008(TestName)
{
    var exestatus = true;
  
    //Prescribe medication
    exestatus = Features.MvPrescribeSetInterval(TestName,exestatus);

}

//******************************************************************************************//
//******************************************************************************************//
// Name :CMP5_TC015
// Desc :Variable dose medication
//******************************************************************************************//
//******************************************************************************************//

function iTOC_CMP5_TC015(TestName)
{
    var exestatus = true;
    
    //PrescribeOralMedication 
    exestatus = Features.MvModifyVariableDose(TestName,exestatus);

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
function iTOC_CMP3_TC019(TestName)
{
    var exestatus = true;
    
    //EnterFreeTextMedication 
    exestatus = Features.MvEnterFreeTextMedication(TestName,exestatus);

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
function iTOC_CMP3_TC024(TestName)
{
    var exestatus = true;
    
    //PrescribeIntravenous medication
    exestatus = Features.MvprescribeIntravenous(TestName,exestatus);

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
function iTOC_CMP3_TC026(TestName)
{
    var exestatus = true;
    
    //PrescribeIntramuscular medication
    exestatus = Features.MvprescribeIntramuscular(TestName,exestatus);
    
    //Logout - Commented for the iTOC requirement
    exestatus = Features.MvLogout(TestName,exestatus);
  
}

//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//

