const FOI32120checkExcludeCardiovascularEvent = (bundledResourcesArray) => {
  let descriptor = "check if no cardiovascular event in past 6 months";
  //current code does not yet check that event is within the past 6 months
  let conditionResources = [];
  let procedureResources = [];
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
    if (resource.resourceType === "Procedure") {
      if (resource.status === "completed") {
        procedureResources.push(resource);
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
          if (coding.system === "http://snomed.info/sct") {
            if (coding.code === "22298006" || coding.code === "394659003" || coding.code === "230690007") {
              return { "result": "NO match", "descriptor": descriptor };
            }
          }
        }
      }
    }
  }
  for (const resource of procedureResources) {
    if (resource.code?.coding) {
      for (const coding of resource.code.coding) {
        if (coding.system === "http://snomed.info/sct") {
          if (coding.code === "81266008") {
            return { "result": "NO match", "descriptor": descriptor };
          }
        }
      }
    }
  }
  return { "result": "MATCH", "descriptor": descriptor };
}

export default FOI32120checkExcludeCardiovascularEvent