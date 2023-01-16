const errorlog = (err) => console.log(err);

const validatePatientBundle = (patientBundle) => {
  if (!patientBundle || Array.isArray(patientBundle) ||
    typeof patientBundle !== "object" || !patientBundle.resourceType ||
    patientBundle.resourceType !== "Bundle") {
    errorlog("Input must be in the form of a FHIR Bundle Resource JSON object.");
    return "Input must be in the form of a FHIR Bundle Resource JSON object.";
  }
  if (!patientBundle.entry) {
    errorlog("The submitted Bundle has no Bundle.entry element.");
    return "The submitted Bundle has no Bundle.entry element.";
  }
  if (!Array.isArray(patientBundle.entry)) {
    errorlog("The submitted Bundle.entry needs to be an array.");
    return "The submitted Bundle.entry needs to be an array.";
  }
  if (patientBundle.entry.length < 1) {
    errorlog("The submitted Bundle has no entries.");
    return "The submitted Bundle has no entries.";
  }
  const bundledResourcesArray = patientBundle.entry.map((entry) => entry.resource);
  if (bundledResourcesArray.length === 0) {
    errorlog("The submitted Bundle.entry contains no resources.");
    return "The submitted Bundle.entry contains no resources.";
  }
  let countOfPatientResources = 0;
  for (const resource of bundledResourcesArray) {
    if (resource.resourceType === "Patient") {
      countOfPatientResources += 1;
    }
  }
  if (countOfPatientResources === 0) {
    errorlog("The submitted Bundle.entry contains no Patient Resource.");
    return "The submitted Bundle.entry contains no Patient Resource.";
  } else if (countOfPatientResources > 1) {
    errorlog("The submitted Bundle.entry contains " + countOfPatientResources + " Patient Resources.");
    return "The submitted Bundle.entry contains " + countOfPatientResources + " Patient Resources.";
  } else {
    return bundledResourcesArray;
  }
}

const getCriteriaArray = (evidenceVariable) => {
  if (evidenceVariable.resourceType !== "EvidenceVariable") {
    errorlog("Input must be in the form of a FHIR EvidenceVariable Resource JSON object.");
    return "Input must be in the form of a FHIR EvidenceVariable Resource JSON object.";
  }
  let criteriaArray = [];
  if (evidenceVariable.characteristic?.length > 0) {
    for (const characteristic of evidenceVariable.characteristic) {
      if (characteristic.definitionExpression?.name) {
        criteriaArray.push(characteristic.definitionExpression.name);
      }
    }
  }
  return criteriaArray;
}

const checkEligibilityCriteriaMatch = async (criteriaArray, patientBundle) => {
  const validatedPatientBundle = validatePatientBundle(patientBundle);
  let bundledResourcesArray = [];
  if (typeof validatedPatientBundle === "string") {
    errorlog(validatedPatientBundle);
    return validatedPatientBundle;
  }
  if (Array.isArray(validatedPatientBundle)) {
    bundledResourcesArray = validatedPatientBundle;
  }
  let criterionMatchResultArray = [];
  let criterionMatchResultWithDescriptorArray = [];
  if (!criteriaArray || !Array.isArray(criteriaArray) || criteriaArray.length < 1) {
    errorlog("no criteria array to check");
    return "no criteria array to check";
  }
  for (const criterion of criteriaArray) {
    try {
      const CriterionCheck = (await import(`./${criterion}.mjs`)).default;
      try {
        let criterionMatchResult = CriterionCheck(bundledResourcesArray);
        criterionMatchResultArray.push(criterionMatchResult.result);
        criterionMatchResultWithDescriptorArray.push(criterionMatchResult);
      } catch {
        errorlog(criterion + ' not working properly');
      }
    } catch {
      errorlog(criterion + ' not found in MatchCheckLibrary');
    }
  }

  if (criterionMatchResultArray.includes("NO match")) {
    return { "result": "NO match", "details": criterionMatchResultWithDescriptorArray };
  } else if (criterionMatchResultArray.includes("Undetermined")) {
    return { "result": "Undetermined", "details": criterionMatchResultWithDescriptorArray };
  } else if (criterionMatchResultArray.includes("MATCH")) {
    return { "result": "MATCH", "details": criterionMatchResultWithDescriptorArray };
  } else {
    return { "result": "OOPS! Something went wrong.", "details": criterionMatchResultWithDescriptorArray };
  }
}

const patientBundleExample1 = {
  "resourceType": "Bundle",
  "id": "51305",
  "meta": {
    "versionId": "8",
    "lastUpdated": "2022-12-27T21:32:18.358Z",
    "source": "https://fevir.net/resources/Bundle/51305"
  },
  "identifier": [
    {
      "type": {
        "text": "FEvIR Object Identifier"
      },
      "system": "https://fevir.net",
      "value": "51305",
      "assigner": {
        "display": "Computable Publishing LLC"
      }
    }
  ],
  "type": "collection",
  "entry": [
    {
      "resource": {
        "resourceType": "Patient",
        "id": "example1",
        "extension": [
          {
            "extension": [
              {
                "url": "ombCategory",
                "valueCoding": {
                  "system": "urn:oid:2.16.840.1.113883.6.238",
                  "code": "2106-3",
                  "display": "White"
                }
              },
              {
                "url": "ombCategory",
                "valueCoding": {
                  "system": "urn:oid:2.16.840.1.113883.6.238",
                  "code": "1002-5",
                  "display": "American Indian or Alaska Native"
                }
              },
              {
                "url": "ombCategory",
                "valueCoding": {
                  "system": "urn:oid:2.16.840.1.113883.6.238",
                  "code": "2028-9",
                  "display": "Asian"
                }
              },
              {
                "url": "detailed",
                "valueCoding": {
                  "system": "urn:oid:2.16.840.1.113883.6.238",
                  "code": "1586-7",
                  "display": "Shoshone"
                }
              },
              {
                "url": "detailed",
                "valueCoding": {
                  "system": "urn:oid:2.16.840.1.113883.6.238",
                  "code": "2036-2",
                  "display": "Filipino"
                }
              },
              {
                "url": "text",
                "valueString": "Mixed"
              }
            ],
            "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race"
          },
          {
            "extension": [
              {
                "url": "ombCategory",
                "valueCoding": {
                  "system": "urn:oid:2.16.840.1.113883.6.238",
                  "code": "2135-2",
                  "display": "Hispanic or Latino"
                }
              },
              {
                "url": "detailed",
                "valueCoding": {
                  "system": "urn:oid:2.16.840.1.113883.6.238",
                  "code": "2184-0",
                  "display": "Dominican"
                }
              },
              {
                "url": "detailed",
                "valueCoding": {
                  "system": "urn:oid:2.16.840.1.113883.6.238",
                  "code": "2148-5",
                  "display": "Mexican"
                }
              },
              {
                "url": "text",
                "valueString": "Hispanic or Latino"
              }
            ],
            "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity"
          },
          {
            "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex",
            "valueCode": "F"
          },
          {
            "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-genderIdentity",
            "valueCodeableConcept": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v3-NullFlavor",
                  "code": "ASKU",
                  "display": "asked but unknown"
                }
              ],
              "text": "asked but unknown"
            }
          }
        ],
        "identifier": [
          {
            "use": "usual",
            "type": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                  "code": "MR",
                  "display": "Medical Record Number"
                }
              ],
              "text": "Medical Record Number"
            },
            "system": "http://hospital.smarthealthit.org",
            "value": "1032702"
          }
        ],
        "active": true,
        "name": [
          {
            "use": "old",
            "family": "Shaw",
            "given": [
              "Amy",
              "V."
            ],
            "period": {
              "start": "2016-12-06",
              "end": "2020-07-22"
            }
          },
          {
            "family": "Baxter",
            "given": [
              "Amy",
              "V."
            ],
            "suffix": [
              "PharmD"
            ],
            "period": {
              "start": "2020-07-22"
            }
          }
        ],
        "telecom": [
          {
            "system": "phone",
            "value": "555-555-5555",
            "use": "home"
          },
          {
            "system": "email",
            "value": "amy.shaw@example.com"
          }
        ],
        "gender": "female",
        "birthDate": "1987-02-20",
        "address": [
          {
            "use": "old",
            "line": [
              "49 Meadow St"
            ],
            "city": "Mounds",
            "state": "OK",
            "postalCode": "74047",
            "country": "US",
            "period": {
              "start": "2016-12-06",
              "end": "2020-07-22"
            }
          },
          {
            "line": [
              "183 Mountain View St"
            ],
            "city": "Mounds",
            "state": "OK",
            "postalCode": "74048",
            "country": "US",
            "period": {
              "start": "2020-07-22"
            }
          }
        ]
      }
    },
    {
      "resource": {
        "resourceType": "Condition",
        "id": "ConditionExample1",
        "clinicalStatus": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
              "code": "active",
              "display": "Active"
            }
          ],
          "text": "Active"
        },
        "verificationStatus": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
              "code": "confirmed",
              "display": "Confirmed"
            }
          ],
          "text": "Confirmed"
        },
        "category": [
          {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/condition-category",
                "code": "problem-list-item",
                "display": "Problem List Item"
              }
            ],
            "text": "Problem"
          }
        ],
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "44054006",
              "display": "Diabetes mellitus type 2 (disorder)"
            }
          ]
        },
        "subject": {
          "reference": "example1",
          "display": "Amy V. Baxter"
        },
        "onsetDateTime": "2013-07-06"
      }
    },
    {
      "resource": {
        "resourceType": "Observation",
        "id": "bmi-example-1",
        "meta": {
          "profile": [
            "http://hl7.org/fhir/StructureDefinition/vitalsigns"
          ]
        },
        "status": "final",
        "category": [
          {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                "code": "vital-signs",
                "display": "Vital Signs"
              }
            ],
            "text": "Vital Signs"
          }
        ],
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "39156-5",
              "display": "Body mass index (BMI) [Ratio]"
            }
          ],
          "text": "BMI"
        },
        "subject": {
          "reference": "example1"
        },
        "effectiveDateTime": "2009-07-02",
        "valueQuantity": {
          "value": 39.2,
          "unit": "kg/m2",
          "system": "http://unitsofmeasure.org",
          "code": "kg/m2"
        }
      }
    },
    {
      "resource": {
        "resourceType": "Observation",
        "id": "hemoglobin-example-1",
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "718-7",
              "display": "Hemoglobin [Mass/volume] in Blood"
            }
          ]
        },
        "subject": {
          "reference": "example1",
          "display": "Amy Baxter"
        },
        "effectivePeriod": {
          "start": "2022-04-05T10:30:10+01:00",
          "end": "2022-04-05T10:30:10+01:00"
        },
        "issued": "2022-04-05T15:30:10+01:00",
        "performer": [
          {
            "reference": "Practitioner/f005",
            "display": "A. Langeveld"
          }
        ],
        "valueQuantity": {
          "value": 7.2,
          "unit": "g/dl",
          "system": "http://unitsofmeasure.org",
          "code": "g/dL"
        },
        "interpretation": [
          {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                "code": "L",
                "display": "Low"
              }
            ]
          }
        ],
        "referenceRange": [
          {
            "low": {
              "value": 7.5,
              "unit": "g/dl",
              "system": "http://unitsofmeasure.org",
              "code": "g/dL"
            },
            "high": {
              "value": 10,
              "unit": "g/dl",
              "system": "http://unitsofmeasure.org",
              "code": "g/dL"
            }
          }
        ]
      }
    }
  ]
}

const studyEligibilityCriteriaForObeseAdult = {
  "resourceType": "EvidenceVariable",
  "id": "49218",
  "meta": {
    "versionId": "11",
    "lastUpdated": "2022-12-27T21:47:35.781Z"
  },
  "url": "https://fevir.net/resources/EvidenceVariable/49218",
  "title": "StudyEligibilityCriteria: Obese patients ≥ 18 years old",
  "status": "active",
  "description": "obese, adult (age ≥18 years old) patients",
  "relatedArtifact": [
    {
      "type": "derived-from",
      "label": "data source",
      "citation": "Bariatric surgery and cardiovascular disease: a systematic review and meta-analysis [Journal Article]. Contributors: van Veldhuisen SL, Gorter TM, van Woerden G, de Boer RA, Rienstra M, Hazebroek EJ, van Veldhuisen DJ. In: European heart journal, PMID 35243488. Published March 04, 2022. Available at: https://pubmed.ncbi.nlm.nih.gov/35243488/.",
      "document": {
        "url": "https://academic.oup.com/eurheartj/article/43/20/1955/6542137"
      }
    },
    {
      "type": "supported-with",
      "classifier": [
        {
          "text": "Citation Resource for the original article"
        }
      ],
      "display": "Citation Resource for 2022 Systematic Review of bariatric surgery mortality effect - PMID 35243488",
      "resourceReference": {
        "reference": "Citation/33400",
        "type": "Citation",
        "display": "StudyCitation: 2022 Systematic Review of bariatric surgery mortality effect 35243488"
      }
    }
  ],
  "actual": true,
  "characteristic": [
    {
      "description": "adult (age ≥18 years old)",
      "exclude": false,
      "definitionExpression": {
        "name": "FOI110158check1",
        "language": "text/javascript"
      },
      "definitionByTypeAndValue": {
        "type": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "424144002",
              "display": "Current chronological age"
            }
          ]
        },
        "valueQuantity": {
          "value": 18,
          "comparator": ">=",
          "unit": "year",
          "system": "http://unitsofmeasure.org",
          "code": "a"
        }
      }
    },
    {
      "description": "obese (Body mass index >= 30 kg/m2)",
      "exclude": false,
      "definitionExpression": {
        "name": "FOI110158check2",
        "language": "text/javascript"
      },
      "definitionByTypeAndValue": {
        "type": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "39156-5",
              "display": "Body mass index (BMI) [Ratio]"
            }
          ]
        },
        "valueQuantity": {
          "value": 30,
          "comparator": ">=",
          "unit": "kg/m2",
          "system": "http://unitsofmeasure.org",
          "code": "kg/m2"
        }
      }
    }
  ],
  "copyright": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  "contact": [
    {
      "telecom": [
        {
          "system": "email",
          "value": "support@computablepublishing.com"
        }
      ]
    }
  ],
  "identifier": [
    {
      "type": {
        "text": "FEvIR Object Identifier"
      },
      "system": "https://fevir.net",
      "value": "49218",
      "assigner": {
        "display": "Computable Publishing LLC"
      }
    }
  ],
  "author": [
    {
      "name": "Brian S. Alper"
    }
  ],
  "publisher": "Computable Publishing LLC"
}

const SampleFunctions = {
  'validatePatientBundle': validatePatientBundle,
  'getCriteriaArray': getCriteriaArray,
  'checkEligibilityCriteriaMatch': checkEligibilityCriteriaMatch,
  'patientBundleExample1': patientBundleExample1,
  'studyEligibilityCriteriaForObeseAdult': studyEligibilityCriteriaForObeseAdult
}

export default SampleFunctions