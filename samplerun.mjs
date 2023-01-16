import SampleFunctions from "./SampleFunctions.mjs";

let patientBundle = SampleFunctions.patientBundleExample1;
let evidenceVariable = SampleFunctions.studyEligibilityCriteriaForObeseAdult;
let criteriaArray = SampleFunctions.getCriteriaArray(evidenceVariable);

SampleFunctions.checkEligibilityCriteriaMatch(criteriaArray, patientBundle).then((response) => console.log(response));