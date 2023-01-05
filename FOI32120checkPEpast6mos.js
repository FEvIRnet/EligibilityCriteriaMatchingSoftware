const FOI32120checkPEpast6mos = (bundledResourcesArray) => {
  let descriptor = "check if no pulmonary embolism in past 6 months";
  //this code only checks for any presence of pulmonary embolism and does not yet check for occurrence in last 6 months
  let conditionResources = [];
  for (const resource of bundledResourcesArray) {
    if (resource.resourceType === "Condition") {
      conditionResources.push(resource);
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
          if (coding.system === "http://snomed.info/sct" && coding.code === "59282003") {
            return { "result": "NO match", "descriptor": descriptor };
          }
        }
      }
    }
  }
  return { "result": "MATCH", "descriptor": descriptor };
}

export default FOI32120checkPEpast6mos