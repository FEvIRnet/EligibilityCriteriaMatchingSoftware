const FOI32120checkHbA1cNotAboveOr14 = (bundledResourcesArray) => {
  let descriptor = "check if NOT HbA1c ≥ 14.0%";
  let bmiObservationResources = [];
  for (const resource of bundledResourcesArray) {
    if (resource.resourceType === "Observation") {
      if (resource.code?.coding) {
        for (const coding of resource.code.coding) {
          if (coding.system === "http://loinc.org" && coding.code === "59261-8") {
            bmiObservationResources.push(resource);
          }
        }
      }
    }
  }
  for (const resource of bmiObservationResources) {
    //placeholder for code to sort and select the most recent observation
    //current code searches for any final/amended/corrected HbA1c value and determines match result on the first informative observation regardless of time of observation
    if (resource.status === "final" || resource.status === "amended" || resource.status === "corrected") {
      if (resource.valueQuantity) {
        if (resource.valueQuantity.code === "%" || resource.valueQuantity.unit === "%" || resource.valueQuantity.unit === "percent") {
          if (resource.valueQuantity.comparator === "<" && resource.valueQuantity.value <= 14) {
            return { "result": "MATCH", "descriptor": descriptor };
          }
          if (resource.valueQuantity.comparator === "<=" && resource.valueQuantity.value < 14) {
            return { "result": "MATCH", "descriptor": descriptor };
          }
          if (resource.valueQuantity.comparator === ">=" && resource.valueQuantity.value >= 14) {
            return { "result": "NO match", "descriptor": descriptor };
          }
          if (resource.valueQuantity.comparator === ">" && resource.valueQuantity.value >= 14) {
            return { "result": "NO match", "descriptor": descriptor };
          }
          if (!resource.valueQuantity.comparator && resource.valueQuantity.value < 14) {
            return { "result": "MATCH", "descriptor": descriptor };
          }
          if (!resource.valueQuantity.comparator && resource.valueQuantity.value >= 14) {
            return { "result": "NO match", "descriptor": descriptor };
          }
        }
      }
    }
  }
  return { "result": "Undetermined", "descriptor": descriptor }
}

export default FOI32120checkHbA1cNotAboveOr14