var Data = require("Data");
//Requires
var mvMedical = require("mvMedical");
var mvMedications = require("mvMedications");
var mvWounds = require("mvWounds");
var mvVerify = require("mvVerify");
var mvNursing = require("mvNursing");
var mvNavigation = require("mvNavigation");
var mvPatient = require("mvPatient");
var mvObjects = require("Base_Objects");
var mvVerify = require("mvVerify");
var mvScores = require("mvScores");

// General Data setup



function main() {


  	// data setup
	  mv_smoke01(); // Admit Patient to eRIC with Patient Demographics and caption/status bar verify
	 
    mv_smoke03(); // Admission summary
    mv_smoke04(); // Weight and Dimensions

  	mv_smoke05(); // Create Central Line - CVC 1
  	mv_smoke06(); // Create Surgical Drain - Genitourinary 
	mv_smoke07(); // Create Tube - Balloon Tamponade Device
	mv_smoke08(); // Nursing Progress Note
 	mv_smoke09(); // Medical Progress Note
 	mv_smoke10(); // Wounds - Head

 	mv_smoke11(); // Prescribe and administer
 	mv_smoke12(); // Prescribe, administer, Medication list  
	mv_smoke13(); // Medications Review
	  
 	mv_smoke14(); // Behaviour Pain Scale
 	mv_smoke15(); // Fall Assessment Tool

	mv_smoke18(); // Nursing Discharge Summary (once per patient) 
	mv_smoke19(); // Medical Discharge Summary (once per patient)

}

function mv_smoke01() {
	
	Log.Message("*** mv_smoke01 - Admit Patient ***");
	var objData = Data.getData("SMK_TC001","Navigation");

 var user = objData("UserID").Value;
 var password = objData("Password").Value;
 var facility = objData("Department").Value;
 var bed = objData("Bed").Value;
  var layout = objData("Layout").Value;
	// Patient Details and defaults
	let patientDetails = new Object();
	patientDetails.gender = "Male";
	patientDetails.dob = "11/02/1983";
	patientDetails.allergies = "Allergies/ADR not documented";

	// Login and initialise bed
	mvNavigation.startMetaVision(user, password, facility);
	mvPatient.clearBedForPatient(bed + " (Active)");
	
	// Add Patient and demographics
	mvPatient.registerPatient(bed + "(Active)", patientDetails);
	mvPatient.enterPatientDemographics(patientDetails);
	
	// Check Status bar
	mvVerify.verifyStatusBar(user, facility, "Admitted");  // mv_smoke01a
	mvPatient.verifyCaptionBar(layout, bed + "(Active)", patientDetails);  // mv_smoke01b
		
	//mvNavigation.logoutMV();
	//mvNavigation.exitMV();
}

function mv_smoke03() {
	
	Log.Message("*** mv_smoke03 - Admission Summary ***");
	
	// Patient Allergies
	let patientAllergies = new Object();
	patientAllergies.Allergies = "No";
	
	// Patient Admission
	let patientadmission = new Object();
	patientadmission.PatientType = "Adult";
	patientadmission.ReasonAdmission = "Smoke Test Reason for Admission";
	patientadmission.PastMedHistory = "Smoke Test Past Medical History";
	patientadmission.FamilyHistory = "Smoke Test Family History";
	patientadmission.SmokingStatus = "Never";
	patientadmission.Findings = "Smoke Test Findings";
	patientadmission.AdmissionPlan = "Smoke Test Admission Plan";
	patientadmission.Alerts = "None";
	patientadmission.AlertseMR = "Access requirement";
	patientadmission.ExaminingMO = "Smoke Examining MO";
	patientadmission.HospAdmissionSource = "Home";
	patientadmission.TransferMode = "Unknown";
	patientadmission.TranferFrom = "Smoke Someplace";
	patientadmission.UnitAdmissionSource = "Emergency Department";
	patientadmission.CareType = "ICU";
	patientadmission.ElectiveAdmission = "Non-surgical = Non-elective";
	patientadmission.ERAdmission = "No";
	patientadmission.TreatmentGoals = "Full active management";
	patientadmission.PregnancyStatus = "Not pregnant";
	patientadmission.RespArrest = "No respiratory arrest";
	patientadmission.CardialArrest = "No cardiac arrest";
	patientadmission.Prophylaxis = "No";
	patientadmission.ApacheII = "Liver";
	patientadmission.ApacheIII = "Cirrhosis";
	patientadmission.Diabetes = "Not diagnosed with Diabetes";
		
	// Enter No Allergies then Admission summary
	mvPatient.allergiesIntolerances(patientAllergies);
	mvPatient.enterAdmissionSummary(patientadmission);
}

function mv_smoke04() {
	
	Log.Message("*** mv_smoke04 - Weight and Dimensions ***");
	
	// Patient Weight
	let patientWeight = new Object();
	patientWeight.Height = "162";
	patientWeight.LatestWeight = "94";
	patientWeight.AdmissionWeight = "90";
	patientWeight.IdealWeight = "59";
	patientWeight.AdjustedWeight = "73";
	patientWeight.BMI = "35.8";
	patientWeight.BSA = "1.981";
	patientWeight.DrugWeight = "90";

	// Enter Weight and Dimensions
	mvPatient.enterHeightWeight(patientWeight);
}

function mv_smoke05() {
	
	Log.Message("*** mv_smoke05 - Central Line Insertion/Removal ***");
	
	// Patient LDT (Lines/Drains/Tubes)
	let patientLDT = new Object();
	patientLDT.IOType = "Lines";
	patientLDT.LineType = "Central Venous Catheter";
	patientLDT.LineSubType = "CVC 1 Lumen";
	patientLDT.LineName = patientLDT.LineSubType + " - EJ (Left)";
	// Patient Orderable
	let patientOrderable = new Object();
	patientOrderable.Name = patientLDT.LineSubType + " - EJ (L)";
	patientOrderable.Route = "Any";
	patientOrderable.BodySite = "External Jugular (Left)";
	patientOrderable.Duration = "1";
	patientOrderable.Comments = "Smoke Test CVC Insert";

	// Create Central Line
	mvNursing.createLine(patientLDT, patientOrderable);
}

function mv_smoke06() {
	
	Log.Message("*** mv_smoke06 - Central Drain ***");
	
	// Patient LDT (Lines/Drains/Tubes)
	let patientLDT = new Object();
	patientLDT.IOType = "Drains";
	patientLDT.LineType = "Genitourinary";
	patientLDT.LineSubType = "Ileal Conduit (Left)";
	// Patient Orderable
	let patientOrderable = new Object();
	patientOrderable.Name = "Ileal Conduit - (L)";
	patientOrderable.Route = "Any";
	patientOrderable.BodySite = "Abdomen, Lower (Left)";
	patientOrderable.Duration = "1";
	patientOrderable.Comments = "Smoke Test Ileal Conduit Insert";

	// Create Surgical Drain
	mvNursing.createDrain(patientLDT, patientOrderable);
}

function mv_smoke07() {
	
	Log.Message("*** mv_smoke07 - Balloon Tamponade Device ***");
	
	// Patient LDT (Lines/Drains/Tubes)
	let patientLDT = new Object();
	patientLDT.IOType = "Tubes";
	patientLDT.LineType = "Gastrointestinal";
	patientLDT.LineSubType = "Balloon Tamponade Device";
	// Patient Orderable
	let patientOrderable = new Object();
	patientOrderable.Name = "Balloon Tamponade Device";
	patientOrderable.Route = "Any";
	patientOrderable.BodySite = "Abdomen";
	patientOrderable.Duration = "1";
	patientOrderable.Comments = "Smoke Test Balloon Tamponade Devicet";

	// Create Surgical Tube
	mvNursing.createTubes(patientLDT, patientOrderable);
}

function mv_smoke08() {
	
	Log.Message("*** mv_smoke08 - Nursing Progress Note ***");
	
	// Create Nursing Progress Note
	mvNursing.createProgressNote("Nursing Progress Note");
}

function mv_smoke09() {
	
	Log.Message("*** mv_smoke09 - Medical Progress Note ***");
	
	// Create Medical Progress Note
	mvNursing.createProgressNote("Medical Progress Note");
}

function mv_smoke10() {
	
	Log.Message("*** mv_smoke10 - Wounds ***");
	
	// Enter Wound Details
	mvWounds.enterWounds();
}

function mv_smoke11() {
	
	Log.Message("*** mv_smoke11 - Prescribe Medications ***");
	
	// Patient Medications
	let patientMedications = new Object();
	patientMedications.Name = "Paracetamol";
	patientMedications.Template = "MR tablet X mg PO every X hours";
	patientMedications.DoseForm = "Tablet";
	patientMedications.Route = "PO";
	patientMedications.Frequency = "Set interval";
	patientMedications.Interval = "30";
	patientMedications.IntervalPeriod = "minute";
	patientMedications.Quantity = "1";
	patientMedications.StartTime = "Execute After";
	patientMedications.StartInterval = "30";
	patientMedications.StartPeriod = "minute";
	patientMedications.EndType = "Number of Doses";
	patientMedications.EndInterval = "4";

	// Prescribe Medications
	mvMedications.prescribeMedication(patientMedications);
	mvMedications.administerMedication(patientMedications);
}

function mv_smoke12() {
	
	Log.Message("*** mv_smoke12 - Medication List ***");
	
	// Patient Medications
	let patientMedications = new Object();
	patientMedications.Name = "Paracetamol";
	patientMedications.Template = "MR tablet X mg PO every X hours";
	patientMedications.DoseForm = "Tablet";
	patientMedications.Route = "PO";
	patientMedications.Frequency = "Set interval";
	patientMedications.Interval = "1";
	patientMedications.IntervalPeriod = "hour";
	patientMedications.Quantity = "1";
	patientMedications.StartTime = "Execute After";
	patientMedications.StartInterval = "2";
	patientMedications.StartPeriod = "hour";
	patientMedications.EndType = "Number of Doses";
	patientMedications.EndInterval = "5";
	patientMedications.ChangeQuantity = "22";

	// Prescribe Medications
	mvMedications.prescribeMedication(patientMedications);
	mvMedications.administerMedication(patientMedications);
	mvMedications.listMedication(patientMedications);
}

function mv_smoke13() {
	
	Log.Message("*** mv_smoke13 - Medications Review ***");
	
	// Patient Medications
	let patientMedReview = new Object();
	patientMedReview.Medications = "Paracetamol";
	patientMedReview.Recommendations = "Withhold";
	patientMedReview.Plan = "Smoke Test Review Plan";
	patientMedReview.Comments = "Immediate Review";
	// Patient Orderable
	let patientOrderable = new Object();
	patientOrderable.Name = "Medication Review";
	patientOrderable.Route = "Any";
	patientOrderable.BodySite = "Abdomen";
	patientOrderable.Duration = "1";
	patientOrderable.Comments = "Smoke Test Medications Review";

	// Prescribe Medications
	mvMedications.reviewMedication(patientMedReview, patientOrderable);
}

function mv_smoke14() {
	
	Log.Message("*** mv_smoke14 - Behaviour Pain Scale ***");
	
	// Patient Medications
	let patientScore = new Object();
	patientScore.FacialExpression = "1 - Relaxed";
	patientScore.UpperLimbs = "1 - No movement";
	patientScore.Ventilator = "1 - Tolerating movement";
	patientScore.Score = "3";

	// Prescribe Medications
	mvScores.behaviouralPainScale(patientScore);
}

function mv_smoke15() {
	
	Log.Message("*** mv_smoke15 - Fall Assessment ***");
	
	// Patient Medications
	let patientScore = new Object();
	patientScore.History1a = "Yes";
	patientScore.History1b = "No";
	patientScore.Mental2a = "No";
	patientScore.Mental2b = "Yes";
	patientScore.Mental2c = "Yes";
	patientScore.Vision3a = "No";
	patientScore.Vision3b = "Yes";
	patientScore.Vision3c = "No";
	patientScore.Toileting4a = "Yes";
	patientScore.Transfer5a = "1 - Minor help";
	patientScore.Mobility6a = "1 - Walks with help";
	patientScore.Score = "23 - High Risk";

	// Prescribe Medications
	mvScores.fallRiskAssessment(patientScore);
}

function mv_smoke18() {
	
	Log.Message("*** mv_smoke18 - Nursing Discharge Summary ***");
	
	// Prescribe Medications
	mvNursing.nursingDischargeSummary();
}

function mv_smoke19() {
	
	Log.Message("*** mv_smoke19 - Medical Discharge Summary ***");
	
	// Prescribe Medications
	mvMedical.medicalDischargeSummary();
}