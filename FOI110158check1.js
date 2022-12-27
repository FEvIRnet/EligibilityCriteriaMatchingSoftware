const FOI110158check1 = (bundledResourcesArray) => {
  let descriptor = "check if current age >= 18 years";
  for (const resource of bundledResourcesArray) {
    if (resource.resourceType === "Patient") {
      if (resource.birthDate) {
        let currentDate = new Date();
        let date18YearsAgo = new Date(currentDate.getFullYear() - 18, currentDate.getMonth(), currentDate.getDate());
        let birthDate = new Date(resource.birthDate);
        if (birthDate <= date18YearsAgo) {
          return { "result": "MATCH", "descriptor": descriptor };
        }
        if (birthDate > date18YearsAgo) {
          return { "result": "NO match", "descriptor": descriptor };
        }
      }
    }
  }
  return { "result": "Undetermined", "descriptor": descriptor }
}

export default FOI110158check1