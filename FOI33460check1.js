const FOI33460check1 = (bundledResourcesArray) => {
  let descriptor = "check if history of type 2 diabetes";
  //this code only checks for any presence of type 2 diabetes and does not yet check for occurrence in last 5 years
  let conditionResources = [];
  for (const resource of bundledResourcesArray) {
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
            return { "result": "MATCH", "descriptor": descriptor };
          }
        }
      }
    }
  }
  return { "result": "NO match", "descriptor": descriptor };
}

export default FOI33460check1