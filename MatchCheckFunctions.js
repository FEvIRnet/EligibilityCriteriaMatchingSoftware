const errorlog = (err) => console.log(err);

const validatePatientBundle = (patientBundle) => {
  if (!patientBundle || Array.isArray(patientBundle) ||
    typeof patientBundle !== "object" || !patientBundle.resourceType ||
    patientBundle.resourceType !== "Bundle") {
    errorlog("Input must be in the form of a FHIR Bundle Resource JSON object.");
    return "Input must be in the form of a FHIR Bundle Resource JSON object.";
  }
  if (!patientBundle.entry) {
    errorlog("The submitted Bundle has no Bundle.entry element.");
    return "The submitted Bundle has no Bundle.entry element.";
  }
  if (!Array.isArray(patientBundle.entry)) {
    errorlog("The submitted Bundle.entry needs to be an array.");
    return "The submitted Bundle.entry needs to be an array.";
  }
  if (patientBundle.entry.length < 1) {
    errorlog("The submitted Bundle has no entries.");
    return "The submitted Bundle has no entries.";
  }
  const bundledResourcesArray = patientBundle.entry.map((entry) => entry.resource);
  if (bundledResourcesArray.length === 0) {
    errorlog("The submitted Bundle.entry contains no resources.");
    return "The submitted Bundle.entry contains no resources.";
  }
  let countOfPatientResources = 0;
  for (const resource of bundledResourcesArray) {
    if (resource.resourceType === "Patient") {
      countOfPatientResources += 1;
    }
  }
  if (countOfPatientResources === 0) {
    errorlog("The submitted Bundle.entry contains no Patient Resource.");
    return "The submitted Bundle.entry contains no Patient Resource.";
  } else if (countOfPatientResources > 1) {
    errorlog("The submitted Bundle.entry contains " + countOfPatientResources + " Patient Resources.");
    return "The submitted Bundle.entry contains " + countOfPatientResources + " Patient Resources.";
  } else {
    return bundledResourcesArray;
  }
}

const getCriteriaArray = (evidenceVariable) => {
  if (evidenceVariable.resourceType !== "EvidenceVariable") {
    errorlog("Input must be in the form of a FHIR EvidenceVariable Resource JSON object.");
    return "Input must be in the form of a FHIR EvidenceVariable Resource JSON object.";
  }
  let criteriaArray = [];
  if (evidenceVariable.characteristic?.length > 0) {
    for (const characteristic of evidenceVariable.characteristic) {
      if (characteristic.definitionExpression?.name) {
        criteriaArray.push(characteristic.definitionExpression.name);
      }
    }
  }
  return criteriaArray;
}

const checkEligibilityCriteriaMatch = async (criteriaArray, patientBundle) => {
  const validatedPatientBundle = validatePatientBundle(patientBundle);
  let bundledResourcesArray = [];
  if (typeof validatedPatientBundle === "string") {
    errorlog(validatedPatientBundle);
    return validatedPatientBundle;
  }
  if (Array.isArray(validatedPatientBundle)) {
    bundledResourcesArray = validatedPatientBundle;
  }
  let criterionMatchResultArray = [];
  let criterionMatchResultWithDescriptorArray = [];
  if (!criteriaArray || !Array.isArray(criteriaArray) || criteriaArray.length < 1) {
    errorlog("no criteria array to check");
    return "no criteria array to check";
  }
  for (const criterion of criteriaArray) {
    try {
      const CriterionCheck = (await import(`./${criterion}.js`)).default;
      try {
        let criterionMatchResult = CriterionCheck(bundledResourcesArray);
        criterionMatchResultArray.push(criterionMatchResult.result);
        criterionMatchResultWithDescriptorArray.push(criterionMatchResult);
      } catch {
        errorlog(criterion + ' not working properly');
      }
    } catch {
      errorlog(criterion + ' not found in MatchCheckLibrary');
    }
  }

  if (criterionMatchResultArray.includes("NO match")) {
    return { "result": "NO match", "details": criterionMatchResultWithDescriptorArray };
  } else if (criterionMatchResultArray.includes("Undetermined")) {
    return { "result": "Undetermined", "details": criterionMatchResultWithDescriptorArray };
  } else if (criterionMatchResultArray.includes("MATCH")) {
    return { "result": "MATCH", "details": criterionMatchResultWithDescriptorArray };
  } else {
    return { "result": "OOPS! Something went wrong.", "details": criterionMatchResultWithDescriptorArray };
  }
}

const MatchCheckFunctions = {
  'validatePatientBundle': validatePatientBundle,
  'getCriteriaArray': getCriteriaArray,
  'checkEligibilityCriteriaMatch': checkEligibilityCriteriaMatch
}

export default MatchCheckFunctions