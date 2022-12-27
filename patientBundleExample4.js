//Example 4 - BMI 34.3 with diabetes
//derived from https://fevir.net/resources/Bundle/110432
const patientBundleExample4 = {
    "resourceType": "Bundle",
    "id": "110432",
    "meta": {
      "versionId": "2",
      "lastUpdated": "2022-12-27T21:37:48.239Z",
      "source": "https://fevir.net/resources/Bundle/110432"
    },
    "identifier": [
      {
        "type": {
          "text": "FEvIR Object Identifier"
        },
        "system": "https://fevir.net",
        "value": "110432",
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
          "id": "example4",
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
                }
              ],
              "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race"
            }
          ],
          "active": true,
          "name": [
            {
              "family": "Neuman",
              "given": [
                "Alfred",
                "E."
              ]
            }
          ],
          "telecom": [
            {
              "system": "email",
              "value": "madmagazine@example.com"
            }
          ],
          "gender": "male",
          "birthDate": "1977-02-20"
        }
      },
      {
        "resource": {
          "resourceType": "Condition",
          "id": "ConditionExample4",
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
            "reference": "example4",
            "display": "Alfred E. Neuman"
          },
          "onsetDateTime": "2013-07-06"
        }
      },
      {
        "resource": {
          "resourceType": "Observation",
          "id": "bmi-example-2",
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
            "reference": "example4"
          },
          "effectiveDateTime": "2009-07-02",
          "valueQuantity": {
            "value": 34.3,
            "unit": "kg/m2",
            "system": "http://unitsofmeasure.org",
            "code": "kg/m2"
          }
        }
      },
      {
        "resource": {
          "resourceType": "Observation",
          "id": "hemoglobin-example-2",
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
            "reference": "example4",
            "display": "Alfred E. Neuman"
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

export default patientBundleExample4