const FOI33460check2 = (bundledResourcesArray) => {
  let descriptor = "check if current age 30-60 years";
  for (const resource of bundledResourcesArray) {
    if (resource.resourceType === "Patient") {
      if (resource.birthDate) {
        let birthDate = new Date(resource.birthDate);
        let currentDate = new Date();
        let date30YearsAgo = new Date(currentDate.getFullYear() - 30, currentDate.getMonth(), currentDate.getDate());
        let date60YearsAgo = new Date(currentDate.getFullYear() - 60, currentDate.getMonth(), currentDate.getDate());
        if (birthDate <= date30YearsAgo && birthDate >= date60YearsAgo) {
          return { "result": "MATCH", "descriptor": descriptor };
        }
        if (birthDate > date30YearsAgo || birthDate< date60YearsAgo) {
          return { "result": "NO match", "descriptor": descriptor };
        }
      }
    }
  }
  return { "result": "Undetermined", "descriptor": descriptor }
}

export default FOI33460check2