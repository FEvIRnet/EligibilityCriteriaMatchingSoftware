//StudyEligibilityCriteria: Eligibility Criteria for DIBASY Trial
//derived from https://fevir.net/resources/EvidenceVariable/33460
const studyEligibilityCriteriaForDIBASYTrial = {
  "resourceType": "EvidenceVariable",
  "id": "33460",
  "url": "https://fevir.net/resources/EvidenceVariable/33460",
  "title": "StudyEligibilityCriteria: Eligibility Criteria for DIBASY Trial",
  "status": "active",
  "description": "Patients aged 30-60 years with a body-mass index of 35 kg/m(2) or more and a history of type 2 diabetes lasting at least 5 years",
  "effectivePeriod": {
    "start": "2021-01"
  },
  "actual": false,
  "characteristic": [
    {
      "description": "history of type 2 diabetes lasting at least 5 years",
      "definitionExpression": {
        "name": "FOI33460check1",
        "language": "text/javascript"
      },
      "definitionByTypeAndValue": {
        "type": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "64572001",
              "display": "Disease (disorder)"
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
      "exclude": false,
      "timeFromEvent": [
        {
          "description": "history of ... lasting at least 5 years",
          "eventCodeableConcept": {
            "coding": [
              {
                "system": "https://snomed.info/sct",
                "version": "",
                "code": "709491003",
                "display": "Enrollment in clinical trial (procedure)",
                "userSelected": true
              }
            ]
          },
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
          }
        }
      ]
    },
    {
      "description": "aged 30-60 years",
      "definitionExpression": {
        "name": "FOI33460check2",
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
            "value": 60,
            "unit": "years",
            "system": "http://unitsofmeasure.org",
            "code": "a"
          }
        }
      }
    },
    {
      "description": "body-mass index of 35 kg/m(2) or more",
      "definitionExpression": {
        "name": "FOI33460check3",
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
          "value": 35,
          "comparator": ">=",
          "unit": "kg/m2",
          "system": "http://unitsofmeasure.org",
          "code": "kg/m2"
        }
      },
      "exclude": false
    }
  ],
  "meta": {
    "versionId": "17",
    "lastUpdated": "2022-12-27T21:46:11.370Z"
  },
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
      "value": "33460",
      "assigner": {
        "display": "Computable Publishing LLC"
      }
    }
  ],
  "author": [
    {
      "name": "Joanne Dehnbostel"
    }
  ],
  "publisher": "Computable Publishing LLC"
}

export default studyEligibilityCriteriaForDIBASYTrial