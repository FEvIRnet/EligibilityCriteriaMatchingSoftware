# EligibilityCriteriaMatchingSoftware
This EligibilityCriteriaMatchingSoftware GitHub repository is coordinated with the Eligibility Criteria Matching Software Library https://fevir.net/resources/Project/110192 on the FEvIR Platform.

Instructions for Implementation:

The "Eligibility Criteria Match Check Functions" is a relatively simple set of JavaScript functions that will process inputs of a patientBundle and an evidenceVariable and return a JSON object with match results.

The patientBundle should be a JSON object in the form of a FHIR Bundle Resource with a single Patient Resource and other Resources are expected to be about that Patient.

The evidenceVariable Resource should be a JSON object in the form of a FHIR EvidenceVariable Resource. For coordination with the "Eligibility Criteria Match Check Functions" each EvidenceVariable.characteristic to be checked must contain a definitionExpression element with a name element containing the name of the match check function, and the function needs to be included in the folder where the functions are deployed.

Contact us at support@computablepublishing.com for 1:1 support, or join us in a relevant open meeting (see schedule at https://fevir.net/resources/Project/29272) to learn and coordinate the nuances in using or contributing to software in this library.

Instructions for samplerun code demonstration:

Copies of example match check functions and sample data are provided in SampleFunctions.mjs and you can view the output of this sample in the terminal console by running "node samplerun.mjs" from the command line interface.

Copyright: https://creativecommons.org/licenses/by-nc-sa/4.0/