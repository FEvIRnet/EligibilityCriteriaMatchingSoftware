const FOI32120checkHbNot1OrMoreBelowLNL = (bundledResourcesArray) => {
  let descriptor = "check if Hb > Lower Normal Limit - 1 g/dL";
  let hbObservationResources = [];
  for (const resource of bundledResourcesArray) {
    if (resource.resourceType === "Observation") {
      if (resource.code?.coding) {
        for (const coding of resource.code.coding) {
          if (coding.system === "http://loinc.org" && coding.code === "718-7") {
            hbObservationResources.push(resource);
          }
        }
      }
    }
  }
  for (const resource of hbObservationResources) {
    //placeholder for code to sort and select the most recent observation
    //current code searches for any final/amended/corrected Hemoglobin value and determines match result on the first informative observation regardless of time of observation
    //current code searches for any reference range and uses the low value from the last one found
    if (resource.status === "final" || resource.status === "amended" || resource.status === "corrected") {
      let lowThreshold;
      if (resource.referenceRange?.length) {
        for (const refRange of resource.referenceRange) {
          if (refRange.low) {
            if (refRange.low.code === "g/dL" || refRange.low.unit === "g/dL" || refRange.low.unit === "g/dl") {
              lowThreshold = refRange.low.value;
            }
          }
        }
      }
      if (lowThreshold && resource.valueQuantity) {
        if (resource.valueQuantity.code === "g/dL" || resource.valueQuantity.unit === "g/dL" || resource.valueQuantity.unit === "g/dl") {
          if (resource.valueQuantity.comparator === "<" && resource.valueQuantity.value - lowThreshold <= -1) {
            return { "result": "NO match", "descriptor": descriptor };
          }
          if (resource.valueQuantity.comparator === "<=" && resource.valueQuantity.value - lowThreshold < -1) {
            return { "result": "NO match", "descriptor": descriptor };
          }
          if (resource.valueQuantity.comparator === ">=" && resource.valueQuantity.value - lowThreshold >= -1) {
            return { "result": "MATCH", "descriptor": descriptor };
          }
          if (resource.valueQuantity.comparator === ">" && resource.valueQuantity.value - lowThreshold >= -1) {
            return { "result": "MATCH", "descriptor": descriptor };
          }
          if (!resource.valueQuantity.comparator && resource.valueQuantity.value - lowThreshold >= -1) {
            return { "result": "MATCH", "descriptor": descriptor };
          }
          if (!resource.valueQuantity.comparator && resource.valueQuantity.value - lowThreshold < -1) {
            return { "result": "NO match", "descriptor": descriptor };
          }
        }
      }
    }
  }
  return { "result": "Undetermined", "descriptor": descriptor }
}

export default FOI32120checkHbNot1OrMoreBelowLNL