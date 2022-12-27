//StudyEligibilityCriteria: Obese patients ≥ 18 years old
//derived from hhttps://fevir.net/resources/EvidenceVariable/49218
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

export default studyEligibilityCriteriaForObeseAdult