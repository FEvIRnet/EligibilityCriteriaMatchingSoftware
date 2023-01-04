//StudyEligibilityCriteria: Eligibility Criteria for Diabetes Surgery Study
//derived from https://fevir.net/resources/EvidenceVariable/32120
const studyEligibilityCriteriaForDiabetesSurgeryStudy = {
  "resourceType": "EvidenceVariable",
  "id": "32120",
  "url": "https://fevir.net/resources/EvidenceVariable/32120",
  "title": "StudyEligibilityCriteria: Eligibility Criteria for Bariatric Surgery Randomized Trial (Diabetes Surgery Study)",
  "status": "active",
  "date": "2022-09-09T10:30:50.570Z",
  "description": "Inclusion Criteria:    Age 30 to 67 years at eligibility visit.    Diagnosed with T2DM at least 6 months prior to enrollment, under the active care of a doctor for at least the six months prior to enrollment, and HbA1c ≥ 8.0%.    Body Mass Index (BMI) ≥ 30.0 kg/m2 and ≤ 39.9 kg/m2 at eligibility visit.    Willingness to accept random assignment to either treatment group.    Expect to live or work within approximately one hour's traveling time from the study clinic for the duration of the two-year trial.    Willingness to comply with the follow-up protocol and successful completion of the run-in.    Written informed consent. ///// Exclusion Criteria:   Cardiovascular event (myocardial infarction, acute coronary syndrome, coronary artery angioplasty or bypass, stroke) in the past six months.    Current evidence of congestive heart failure, angina pectoris, or symptomatic peripheral vascular disease.    Cardiac stress test indicating that surgery or IMM would not be safe.    Pulmonary embolus or thrombophlebitis in the past six months.    Cancer of any kind (except basal cell skin cancer or cancer in situ) unless documented to be disease-free for five years.    Significant anemia (hemoglobin 1.0 g or more below normal range) or history of coagulopathy.    Serum creatinine ≥ 1.5 mg/dl.    HbA1c > 14.0%.",
  "effectivePeriod": {
    "start": "2008-02",
    "end": "2016-12"
  },
  "actual": true,
  "characteristic": [
    {
      "description": "Age 30 to 67 years at eligibility visit.",
      "exclude": false,
      "definitionExpression": {
        "name": "FOI32120checkAge3067",
        "language": "text/javascript"
      },
      "definitionByTypeAndValue": {
        "type": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "397669002",
              "display": "Age"
            }
          ]
        },
        "valueRange": {
          "low": {
            "value": 30,
            "unit": "years",
            "system": "http://unitsofmeasure.org",
            "code": "a"
          },
          "high": {
            "value": 67,
            "unit": "years",
            "system": "http://unitsofmeasure.org",
            "code": "a"
          }
        }
      },
      "timeFromEvent": [
        {
          "description": "at eligibility visit",
          "eventId": "EligibilityVisit",
          "quantity": {
            "value": 0
          }
        }
      ]
    },
    {
      "description": "Diagnosed with T2DM at least 6 months prior to enrollment, under the active care of a doctor for at least the six months prior to enrollment, and HbA1c ≥ 8.0%.",
      "exclude": false,
      "definitionByCombination": {
        "code": "all-of",
        "characteristic": [
          {
            "description": "Diagnosed with T2DM at least 6 months prior to enrollment",
            "exclude": false,
            "definitionByTypeAndValue": {
              "type": {
                "coding": [
                  {
                    "system": "http://snomed.info/sct",
                    "code": "64572001",
                    "display": "Disease (disorder)"
                  },
                  {
                    "system": "http://build.fhir.org/codesystem-resource-types.html",
                    "code": "Condition",
                    "display": "Condition"
                  }
                ]
              },
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "http://snomed.info/sct",
                    "code": "44054006",
                    "display": "Diabetes mellitus type 2 (disorder)"
                  }
                ]
              }
            },
            "timeFromEvent": [
              {
                "description": "at least 6 months prior to enrollment",
                "eventId": "EligibilityVisit",
                "quantity": {
                  "value": -6,
                  "comparator": "<=",
                  "unit": "months",
                  "system": "http://unitsofmeasure.org",
                  "code": "mo"
                }
              }
            ]
          },
          {
            "description": "under the active care of a doctor for at least the six months prior to enrollment",
            "note": [
              "assumption that active care means active care of type 2 diabetes mellitus"
            ],
            "exclude": false,
            "definitionCodeableConcept": {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "305450004",
                  "display": "Under care of doctor (finding)"
                }
              ],
              "text": "under the active care of a doctor"
            },
            "timeFromEvent": [
              {
                "description": "for at least the six months prior to enrollment",
                "eventCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://snomed.info/sct",
                      "code": "450332002",
                      "display": "Assessment of eligibility for clinical trial"
                    }
                  ]
                },
                "range": {
                  "low": {
                    "value": -6,
                    "unit": "months",
                    "system": "http://unitsofmeasure.org",
                    "code": "mo"
                  },
                  "high": {
                    "value": 0,
                    "unit": "months",
                    "system": "http://unitsofmeasure.org",
                    "code": "mo"
                  }
                },
                "note": [
                  "presence throughout the range is equivalent to 'for at least the six months prior to'"
                ]
              }
            ]
          },
          {
            "description": "HbA1c ≥ 8.0%",
            "note": [
              {
                "text": "assumption that this is the last recorded HbA1c before the enrollment visit, but not explicitly stated in the short-phrase Eligibility Criteria"
              }
            ],
            "exclude": false,
            "definitionByTypeAndValue": {
              "type": {
                "coding": [
                  {
                    "system": "http://loinc.org",
                    "code": "59261-8",
                    "display": "Hemoglobin A1c/Hemoglobin.total in Blood"
                  }
                ]
              },
              "valueQuantity": {
                "value": 8,
                "comparator": ">=",
                "unit": "%",
                "system": "http://unitsofmeasure.org",
                "code": "%"
              }
            }
          }
        ]
      }
    },
    {
      "description": "Body Mass Index (BMI) ≥ 30.0 kg/m2 and ≤ 39.9 kg/m2 at eligibility visit.",
      "exclude": false,
      "definitionExpression": {
        "name": "FOI32120checkBmi30399",
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
        "valueRange": {
          "low": {
            "value": 30,
            "unit": "kg/m2",
            "system": "http://unitsofmeasure.org",
            "code": "kg/m2"
          },
          "high": {
            "value": 39.9,
            "unit": "kg/m2",
            "system": "http://unitsofmeasure.org",
            "code": "kg/m2"
          }
        }
      },
      "timeFromEvent": [
        {
          "description": "at eligibility visit",
          "eventId": "EligibilityVisit",
          "quantity": {
            "value": 0
          }
        }
      ]
    },
    {
      "description": "Willingness to accept random assignment to either treatment group.",
      "exclude": false
    },
    {
      "description": "Expect to live or work within approximately one hour's traveling time from the study clinic for the duration of the two-year trial.",
      "exclude": false
    },
    {
      "description": "Willingness to comply with the follow-up protocol and successful completion of the run-in.",
      "exclude": false
    },
    {
      "linkId": "EligibilityVisit",
      "description": "Written informed consent.",
      "note": {
        "text": "The example used here acknowledges attainment of the written informed consent at the eligibility visit (which is also the time of enrollment) so is referencing this characteristic with the linkId EligibilityVisit to be used as a reference point from timeFromEvent in the specification of other characteristics."
      },
      "exclude": false,
      "timeFromEvent": [
        {
          "eventCodeableConcept": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "450332002",
                "display": "Assessment of eligibility for clinical trial (procedure)"
              }
            ]
          }
        }
      ]
    },
    {
      "description": "Cardiovascular event (myocardial infarction, acute coronary syndrome, coronary artery angioplasty or bypass, stroke) in the past six months.",
      "exclude": true,
      "timeFromEvent": [
        {
          "description": "in the past six months",
          "eventId": "EligibilityVisit",
          "range": {
            "low": {
              "value": -6,
              "unit": "months",
              "system": "http://unitsofmeasure.org",
              "code": "mo"
            },
            "high": {
              "value": 0,
              "unit": "months",
              "system": "http://unitsofmeasure.org",
              "code": "mo"
            }
          },
          "note": [
            "occurrence within the range is equivalent to 'in the past six months'"
          ]
        }
      ],
      "definitionByCombination": {
        "code": "any-of",
        "characteristic": [
          {
            "description": "myocardial infarction",
            "definitionByTypeAndValue": {
              "type": {
                "coding": [
                  {
                    "system": "http://snomed.info/sct",
                    "code": "64572001",
                    "display": "Disease (disorder)"
                  },
                  {
                    "system": "http://build.fhir.org/codesystem-resource-types.html",
                    "code": "Condition",
                    "display": "Condition"
                  }
                ]
              },
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "http://snomed.info/sct",
                    "code": "22298006",
                    "display": "Myocardial infarction (disorder)"
                  }
                ]
              }
            }
          },
          {
            "description": "acute coronary syndrome",
            "definitionByTypeAndValue": {
              "type": {
                "coding": [
                  {
                    "system": "http://snomed.info/sct",
                    "code": "64572001",
                    "display": "Disease (disorder)"
                  },
                  {
                    "system": "http://build.fhir.org/codesystem-resource-types.html",
                    "code": "Condition",
                    "display": "Condition"
                  }
                ]
              },
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "http://snomed.info/sct",
                    "code": "394659003",
                    "display": "Acute coronary syndrome (disorder)"
                  }
                ]
              }
            }
          },
          {
            "description": "coronary artery angioplasty or bypass",
            "definitionByTypeAndValue": {
              "type": {
                "coding": [
                  {
                    "system": "http://snomed.info/sct",
                    "code": "71388002",
                    "display": "Procedure (procedure)"
                  }
                ]
              },
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "http://snomed.info/sct",
                    "code": "81266008",
                    "display": "Heart revascularization (procedure)"
                  }
                ]
              }
            }
          },
          {
            "description": "stroke",
            "definitionByTypeAndValue": {
              "type": {
                "coding": [
                  {
                    "system": "http://snomed.info/sct",
                    "code": "64572001",
                    "display": "Disease (disorder)"
                  },
                  {
                    "system": "http://build.fhir.org/codesystem-resource-types.html",
                    "code": "Condition",
                    "display": "Condition"
                  }
                ]
              },
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "http://snomed.info/sct",
                    "code": "230690007",
                    "display": "Cerebrovascular accident (disorder)"
                  }
                ]
              }
            }
          }
        ]
      }
    },
    {
      "description": "Current evidence of congestive heart failure, angina pectoris, or symptomatic peripheral vascular disease.",
      "note": [
        "This may be possible to encode as presence of Disease(disorder) without 'in remission'"
      ],
      "exclude": true
    },
    {
      "description": "Cardiac stress test indicating that surgery or IMM would not be safe.",
      "exclude": true
    },
    {
      "description": "Pulmonary embolus in the past six months.",
      "definitionByTypeAndValue": {
        "type": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "64572001",
              "display": "Disease (disorder)"
            },
            {
              "system": "http://build.fhir.org/codesystem-resource-types.html",
              "code": "Condition",
              "display": "Condition"
            }
          ]
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "59282003",
              "display": "Pulmonary embolism (disorder)"
            }
          ]
        }
      },
      "exclude": true,
      "timeFromEvent": [
        {
          "description": "in the past six months",
          "eventId": "EligibilityVisit",
          "range": {
            "low": {
              "value": -6,
              "unit": "months",
              "system": "http://unitsofmeasure.org",
              "code": "mo"
            },
            "high": {
              "value": 0,
              "unit": "months",
              "system": "http://unitsofmeasure.org",
              "code": "mo"
            }
          },
          "note": [
            "occurrence within the range is equivalent to 'in the past six months'"
          ]
        }
      ]
    },
    {
      "description": "Thrombophlebitis in the past six months.",
      "exclude": true,
      "definitionByTypeAndValue": {
        "type": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "64572001",
              "display": "Disease (disorder)"
            },
            {
              "system": "http://build.fhir.org/codesystem-resource-types.html",
              "code": "Condition",
              "display": "Condition"
            }
          ]
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "64156001",
              "display": "Thrombophlebitis (disorder)"
            }
          ]
        }
      },
      "timeFromEvent": [
        {
          "description": "in the past six months",
          "eventId": "EligibilityVisit",
          "range": {
            "low": {
              "value": -6,
              "unit": "months",
              "system": "http://unitsofmeasure.org",
              "code": "mo"
            },
            "high": {
              "value": 0,
              "unit": "months",
              "system": "http://unitsofmeasure.org",
              "code": "mo"
            }
          },
          "note": [
            "occurrence within the range is equivalent to 'in the past six months'"
          ]
        }
      ]
    },
    {
      "description": "Cancer of any kind (except basal cell skin cancer or cancer in situ) unless documented to be disease-free for five years.",
      "exclude": true,
      "definitionByCombination": {
        "code": "all-of",
        "characteristic": [
          {
            "description": "Cancer of any kind",
            "exclude": false,
            "definitionByTypeAndValue": {
              "type": {
                "coding": [
                  {
                    "system": "http://snomed.info/sct",
                    "code": "64572001",
                    "display": "Disease (disorder)"
                  },
                  {
                    "system": "http://build.fhir.org/codesystem-resource-types.html",
                    "code": "Condition",
                    "display": "Condition"
                  }
                ]
              },
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "http://snomed.info/sct",
                    "code": "363346000",
                    "display": "Malignant neoplastic disease (disorder)"
                  }
                ]
              }
            }
          },
          {
            "description": "(except basal cell skin cancer)",
            "exclude": true,
            "definitionByTypeAndValue": {
              "type": {
                "coding": [
                  {
                    "system": "http://snomed.info/sct",
                    "code": "64572001",
                    "display": "Disease (disorder)"
                  },
                  {
                    "system": "http://build.fhir.org/codesystem-resource-types.html",
                    "code": "Condition",
                    "display": "Condition"
                  }
                ]
              },
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "http://snomed.info/sct",
                    "code": "254701007",
                    "display": "Basal cell carcinoma of skin (disorder)"
                  }
                ]
              }
            }
          },
          {
            "description": "(except cancer in situ)",
            "exclude": true,
            "definitionByTypeAndValue": {
              "type": {
                "coding": [
                  {
                    "system": "http://snomed.info/sct",
                    "code": "64572001",
                    "display": "Disease (disorder)"
                  },
                  {
                    "system": "http://build.fhir.org/codesystem-resource-types.html",
                    "code": "Condition",
                    "display": "Condition"
                  }
                ]
              },
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "http://snomed.info/sct",
                    "code": "109355002",
                    "display": "Carcinoma in situ (disorder)"
                  }
                ]
              }
            }
          },
          {
            "description": "unless documented to be disease-free for five years",
            "exclude": true,
            "definitionCodeableConcept": {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "395100000",
                  "display": "No evidence of cancer found (situation)"
                }
              ]
            },
            "timeFromEvent": [
              {
                "description": "for five years",
                "eventId": "EligibilityVisit",
                "range": {
                  "low": {
                    "value": -5,
                    "unit": "years",
                    "system": "http://unitsofmeasure.org",
                    "code": "a"
                  },
                  "high": {
                    "value": 0,
                    "unit": "years",
                    "system": "http://unitsofmeasure.org",
                    "code": "a"
                  }
                },
                "note": [
                  "presence throughout the range is equivalent to 'for five years"
                ]
              }
            ]
          }
        ]
      }
    },
    {
      "description": "History of coagulopathy",
      "exclude": true
    },
    {
      "description": "Significant anemia (hemoglobin 1.0 g or more below normal range)",
      "exclude": true,
      "definitionByTypeAndValue": {
        "type": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "718-7",
              "display": "Hemoglobin [Mass/volume] in Blood"
            }
          ]
        },
        "valueQuantity": {
          "value": -1,
          "comparator": "<=",
          "unit": "g/dL",
          "system": "http://unitsofmeasure.org",
          "code": "g/dL"
        },
        "offset": {
          "coding": [
            {
              "system": "http://build.fhir.org/codesystem-characteristic-offset.html",
              "code": "LNL",
              "display": "Lower Normal Limit"
            }
          ]
        }
      }
    },
    {
      "description": "Serum creatinine ≥ 1.5 mg/dl",
      "definitionByTypeAndValue": {
        "type": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2160-0",
              "display": "Creatinine [Mass/volume] in Serum or Plasma"
            }
          ]
        },
        "valueQuantity": {
          "value": 1.5,
          "comparator": ">=",
          "unit": "mg/dl",
          "system": "http://unitsofmeasure.org",
          "code": "mg/dL"
        }
      },
      "exclude": true
    },
    {
      "description": "HbA1c ≥ 14.0%",
      "definitionByTypeAndValue": {
        "type": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "59261-8",
              "display": "Hemoglobin A1c/Hemoglobin.total in Blood"
            }
          ]
        },
        "valueQuantity": {
          "value": 14,
          "comparator": ">=",
          "unit": "%",
          "system": "http://unitsofmeasure.org",
          "code": "%"
        }
      },
      "exclude": true
    }
  ],
  "meta": {
    "versionId": 26
  },
  "identifier": [
    {
      "type": {
        "text": "FEvIR Object Identifier"
      },
      "system": "https://fevir.net",
      "value": "32120",
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
  "publisher": "Computable Publishing LLC"
}

export default studyEligibilityCriteriaForDiabetesSurgeryStudy