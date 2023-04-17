export const ENCOUNTER_PROVIDER_DEFAULT =
  '738185ba-eac9-11e5-8f4d-e06995eac916';
const DEFAULT_ROLE = 'a0b03050-c99b-11e0-9572-0800200c9a66';
const CLINICIAN = 'd67a9eba-2ddd-42b5-814c-b39836536cce';
const COLLECTOR = '3eae50dd-86a4-4b1e-a5de-65a4fd22c28c';

export const EncounterRole = {
  DEFAULT_ROLE,
  CLINICIAN,
  COLLECTOR,
};

const FOLLOWUP_VISIT = '8d5b2be0-c2cc-11de-8d13-0010c6dffd0f';
const BIOLOGICAL_EXAM = 'b2750363-7c00-4ece-bceb-47ab09b8d21b';
const ENROLLMENT = '8d5b27bc-c2cc-11de-8d13-0010c6dffd0f';
const REQUEST_EXAM = '8b51ec84-de51-4090-bcde-b6862dc0e253'

export const EncounterType = {
  FOLLOWUP_VISIT,
  BIOLOGICAL_EXAM,
  ENROLLMENT,
  REQUEST_EXAM
};

const HIV = '6b6e9d94-015b-48f6-ac95-da239512ff91';
const UPI = '66e6b206-e194-4fbd-b1ab-0fd5b5357ffe';

export const IdentifierType = {
  HIV,
  UPI,
};

export const CONCEPT_A38 = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
export const CONCEPT_A36 = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';

export const LocationTags = {};

export const personPrivileges: string[] = [
  'Get People',
  'Get Person Attribute Types',
];

export const managePersonPrivileges: string[] = [
  ...personPrivileges,
  'Delete People',
  'Add People',
  'Edit People',
];

export const patientPrivileges: string[] = [
  'Get Patient Identifiers',
  'Get Patients',
  ...personPrivileges,
];

export const managePatientPrivileges: string[] = [
  ...patientPrivileges,
  ...personPrivileges,
  'Add Patients',
  'Edit Patients',
  'Delete Patients',
  // 'Add Patient Programs',
  'Add Patient Identifiers',
  'Edit Patient Identifiers',
  'Delete Patient Identifiers',
  // 'Delete Patient Programs',
  // 'Edit Patient Programs',
];

export const locationPrivileges: string[] = [
  // ...dreamsProgramPrivileges,
  'Get Locations',
  'Get Location Attribute Types',
  // 'View Locations',
];

export const locationTagPrivileges: string[] = [
  ...locationPrivileges,
  'Manage Location Tags',
];

export const manageLocationPrivileges: string[] = [
  ...locationTagPrivileges,
  'Manage Locations',
  'Manage Location Attribute Types',
];
export const obsPrivileges: string[] = [
  // ...dreamsProgramPrivileges,
  'Get Observations',
  'Get Concept Attribute Types',
  'Get Concept Classes',
  'Get Concept Datatypes',
  'Get Concepts',
];

export const manageObsPrivileges: string[] = [
  'Add Observations',
  'Delete Observations',
  'Edit Observations',
  ...obsPrivileges,
];

export const encounterPrivileges: string[] = [
  ...patientPrivileges,
  // ...personPrivileges,
  ...obsPrivileges,
  ...locationPrivileges,
  'Get Encounter Roles',
  'Get Encounter Types',
  'Get Encounters',
  'Get Providers',
  'Get Visits',
];

export const manageEncounterPrivileges: string[] = [
  'Add Encounters',
  'Delete Encounters',
  'Edit Encounters',
  'Add Visits',
  'Delete Visits',
  'Edit Visits',
  ...manageObsPrivileges,
  ...managePersonPrivileges,
  ...managePatientPrivileges,
  ...locationPrivileges,
  'Get Encounter Roles',
  'Get Encounter Types',
  'Get Encounters',
  'Manage Encounter Roles',
  // 'Manage Encounter Types',
  'View Encounter Types',
  'View Encounters',
];

export const userPrivileges: string[] = [
  'Edit User Passwords',
  'Get Users',
  'View Users',
  'Edit Users',
];

export const manageUserPrivileges: string[] = [
  ...userPrivileges,
  'Add Users',
  'Delete Users',
];

export const reportPrivileges: string[] = [
  'Add Cohorts',
  'Edit Cohorts',
  'Delete Cohorts',
  'Add Reports',
  'Edit Reports',
  'Delete Reports',
  'Run reports',
];

export const manageReportPrivileges: string[] = [
  ...reportPrivileges,
  'Add Report Objects',
  'Edit Report Objects',
  'Delete Report Objects',
  'Add Report Objects',
  'Edit Report Objects',
  'Delete Report Objects',
];
