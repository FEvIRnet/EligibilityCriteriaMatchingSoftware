const FOI32120checkDiabetesAndHbA1cAboveOr8 = (bundledResourcesArray) => {
  let descriptor = "check if Diabetes and HbA1c ≥ 8%";
  //current code does not yet check that diabetes has been present for at least 6 months
  //current code does not yet check for under active care of doctor for past 6 months
  let diabetesCheck = "unchecked";
  let hbA1cAboveOr8Check = "unchecked";
  let hbA1cObservationResources = [];
  let conditionResources = [];
  for (const resource of bundledResourcesArray) {
    if (resource.resourceType === "Observation") {
      if (resource.code?.coding) {
        for (const coding of resource.code.coding) {
          if (coding.system === "http://loinc.org" && coding.code === "59261-8") {
            hbA1cObservationResources.push(resource);
          }
        }
      }
    }
    if (resource.resourceType === "Condition") {
      if (resource.clinicalStatus?.coding) {
        for (const coding of resource.clinicalStatus.coding) {
          if (coding.code === "active" || coding.code === "recurrence" || coding.code === "relapse") {
            conditionResources.push(resource);
          }
        }
      }
    }
  }
  for (const resource of hbA1cObservationResources) {
    //placeholder for code to sort and select the most recent observation
    //current code searches for any final/amended/corrected HbA1c value and determines match result on the first informative observation regardless of time of observation
    if (resource.status === "final" || resource.status === "amended" || resource.status === "corrected") {
      if (resource.valueQuantity) {
        if (resource.valueQuantity.code === "%" || resource.valueQuantity.unit === "%" || resource.valueQuantity.unit === "percent") {
          if (resource.valueQuantity.comparator === "<" && resource.valueQuantity.value <= 8) {
            return { "result": "NO match", "descriptor": descriptor };
          }
          if (resource.valueQuantity.comparator === "<=" && resource.valueQuantity.value < 8) {
            return { "result": "NO match", "descriptor": descriptor };
          }
          if (resource.valueQuantity.comparator === ">=" && resource.valueQuantity.value >= 8) {
            hbA1cAboveOr8Check = "MATCH";
          }
          if (resource.valueQuantity.comparator === ">" && resource.valueQuantity.value >= 8) {
            hbA1cAboveOr8Check = "MATCH";
          }
          if (!resource.valueQuantity.comparator && resource.valueQuantity.value < 8) {
            return { "result": "NO match", "descriptor": descriptor };
          }
          if (!resource.valueQuantity.comparator && resource.valueQuantity.value >= 8) {
            hbA1cAboveOr8Check = "MATCH";
          }
        }
      }
    }
  }
  for (const resource of conditionResources) {
    let excludeFromAnalysis = false;
    if (resource.verificationStatus) {
      if (resource.verificationStatus.coding) {
        for (const coding of resource.verificationStatus.coding) {
          if (coding.code !== "confirmed") {
            excludeFromAnalysis = true;
          }
        }
      }
    }
    if (excludeFromAnalysis === false) {
      if (resource.code?.coding) {
        for (const coding of resource.code.coding) {
          if (coding.system === "http://snomed.info/sct" && coding.code === "44054006") {
            diabetesCheck = "MATCH";
          }
        }
      }
    }
  }
  if (hbA1cAboveOr8Check === "MATCH" && diabetesCheck === "MATCH") {
    return { "result": "MATCH", "descriptor": descriptor };
  }
  return { "result": "Undetermined", "descriptor": descriptor }
}

export default FOI32120checkDiabetesAndHbA1cAboveOr8