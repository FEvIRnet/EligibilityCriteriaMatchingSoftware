//Example 1 - BMI 39.2 Asian
//derived from https://fevir.net/resources/Bundle/51305
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

export default patientBundleExample1