const FOI110158check2 = (bundledResourcesArray) => {
  let descriptor = "check if BMI >= 30 kg/m2";
  let bmiObservationResources = [];
  for (const resource of bundledResourcesArray) {
    if (resource.resourceType === "Observation") {
      if (resource.code?.coding) {
        for (const coding of resource.code.coding) {
          if (coding.system === "http://loinc.org" && coding.code === "39156-5") {
            bmiObservationResources.push(resource);
          }
        }
      }
    }
  }
  for (const resource of bmiObservationResources) {
    //placeholder for code to sort and select the most recent observation
    //current code searches for any final/amended/corrected BMI value and determines match result on the first informative observation regardless of time of observation
    if (resource.status === "final" || resource.status === "amended" || resource.status === "corrected") {
      if (resource.valueQuantity) {
        if (resource.valueQuantity.code === "kg/m2" || resource.valueQuantity.unit === "kg/m2") {
          if (resource.valueQuantity.comparator === "<" && resource.valueQuantity.value <= 30) {
            return { "result": "NO match", "descriptor": descriptor };
          }
          if (resource.valueQuantity.comparator === "<=" && resource.valueQuantity.value < 30) {
            return { "result": "NO match", "descriptor": descriptor };
          }
          if (resource.valueQuantity.comparator === ">=" && resource.valueQuantity.value >= 30) {
            return { "result": "MATCH", "descriptor": descriptor };
          }
          if (resource.valueQuantity.comparator === ">" && resource.valueQuantity.value >= 30) {
            return { "result": "MATCH", "descriptor": descriptor };
          }
          if (!resource.valueQuantity.comparator && resource.valueQuantity.value >= 30) {
            return { "result": "MATCH", "descriptor": descriptor };
          }
          if (!resource.valueQuantity.comparator && resource.valueQuantity.value < 30) {
            return { "result": "NO match", "descriptor": descriptor };
          }
        }
      }
    }
  }
  return { "result": "Undetermined", "descriptor": descriptor }
}

export default FOI110158check2