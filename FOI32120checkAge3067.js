const FOI32120checkAge3067 = (bundledResourcesArray) => {
  let descriptor = "check if current age 30-67 years";
  for (const resource of bundledResourcesArray) {
    if (resource.resourceType === "Patient") {
      if (resource.birthDate) {
        let birthDate = new Date(resource.birthDate);
        let currentDate = new Date();
        let date30YearsAgo = new Date(currentDate.getFullYear() - 30, currentDate.getMonth(), currentDate.getDate());
        let date67YearsAgo = new Date(currentDate.getFullYear() - 67, currentDate.getMonth(), currentDate.getDate());
        if (birthDate <= date30YearsAgo && birthDate >= date67YearsAgo) {
          return { "result": "MATCH", "descriptor": descriptor };
        }
        if (birthDate > date30YearsAgo || birthDate< date67YearsAgo) {
          return { "result": "NO match", "descriptor": descriptor };
        }
      }
    }
  }
  return { "result": "Undetermined", "descriptor": descriptor }
}

export default FOI32120checkAge3067