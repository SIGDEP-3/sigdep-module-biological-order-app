const ENCOUNTER_PROVIDER_DEFAULT = '';
const ENCOUNTER_ROLE_DEFAULT = 'a0b03050-c99b-11e0-9572-0800200c9a66';
export const Encounter = {
  ENCOUNTER_ROLE_DEFAULT,
  ENCOUNTER_PROVIDER_DEFAULT,
};

// const OVC_IDENTIFICATION = 'IDENTIFICATIONEEEEEEEEEEEEEEEEEEEEEEEE';
// const OVC_EVALUATION = 'EVALUATIONEEEEEEEEEEEEEEEEEEEEEEEEEEEE';
// const OVC_SERVICE_ACTIVITY = 'SOUTIENEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE';
// const OVC_SCHOOL_FOLLOWUP = 'SCOLAIREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE';
// const OVC_NUTRITION_FOLLOWUP = 'NUTRITIONEEEEEEEEEEEEEEEEEEEEEEEEEEEEE';
// const OVC_BECOMING = 'DEVENIRMEMBREEEEEEEEEEEEEEEEEEEEEEEEEE';
// const OVC_REFERENCE = 'REFERENCEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE';
// const OVC_COUNTER_REFERENCE = 'CONTREREFERENCEEEEEEEEEEEEEEEEEEEEEEEE';
// const DREAMS_ENROLLMENT = 'ENROLEMENTDDDDDDDDDDDDDDDDDDDDDDDDDDDD';
// const DREAMS_ELIGIBILITY = 'ELIGIBILITEDDDDDDDDDDDDDDDDDDDDDDDDDDD';
// const DREAMS_PRIMARY_EVALUATION = 'PRIMARYEVALUATIONDDDDDDDDDDDDDDDDDDDDD';
// const DREAMS_SECONDARY_EVALUATION = 'SECONDARYEVALUATIONDDDDDDDDDDDDDDDDDDD';
// const DREAMS_CONTEXTUAL_EVALUATION = 'CONTEXTUALEVALUATIONDDDDDDDDDDDDDDDDDD';
// const DREAMS_NEEDS = 'BESOINSDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD';
// const DREAMS_HOME_VISIT = 'VISITEADOMICILEDDDDDDDDDDDDDDDDDDDDDDD';
// const DREAMS_PRIMARY_SERVICE = 'PRIMARYSERVICEDDDDDDDDDDDDDDDDDDDDDDDD';
// const DREAMS_SECONDARY_SERVICE = 'SECONDARYSERVICEDDDDDDDDDDDDDDDDDDDDDD';
// const DREAMS_CONTEXTUAL_SERVICE = 'CONTEXTUALSERVICEDDDDDDDDDDDDDDDDDDDDD';
// const DREAMS_REFERENCE = 'REFERENCEDDDDDDDDDDDDDDDDDDDDDDDDDDDDD';
// const DREAMS_COUNTER_REFERENCE = 'CONTREREFERENCEDDDDDDDDDDDDDDDDDDDDDDD';

export const EncounterType = {
  // OVC_IDENTIFICATION,
  // OVC_EVALUATION,
  // OVC_SERVICE_ACTIVITY,
  // OVC_SCHOOL_FOLLOWUP,
  // OVC_NUTRITION_FOLLOWUP,
  // OVC_BECOMING,
  // OVC_COUNTER_REFERENCE,
  // OVC_REFERENCE,
  // DREAMS_ENROLLMENT,
  // DREAMS_PRIMARY_EVALUATION,
  // DREAMS_SECONDARY_EVALUATION,
  // DREAMS_CONTEXTUAL_EVALUATION,
  // DREAMS_NEEDS,
  // DREAMS_HOME_VISIT,
  // DREAMS_ELIGIBILITY,
  // DREAMS_PRIMARY_SERVICE,
  // DREAMS_SECONDARY_SERVICE,
  // DREAMS_CONTEXTUAL_SERVICE,
  // DREAMS_REFERENCE,
  // DREAMS_COUNTER_REFERENCE,
};

// const ELIGIBILITY = 'NUMEROFICHEIIIIIIIIIIIIIIIIIIIIIIIII';
// const DREAMS = 'DREAMSTYPEIIIIIIIIIIIIIIIIIIIIIIIIII';
// const OVC = 'OVCTYPEIIIIIIIIIIIIIIIIIIIIIIIIIIIII';
const HIV = 'HIVTYPEIIIIIIIIIIIIIIIIIIIIIIIIIIIII';

export const IdentifierType = {
  // ELIGIBILITY,
  // DREAMS,
  // OVC,
  HIV,
};

export const CONCEPT_A38 = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
export const CONCEPT_A36 = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';

// const OVC_NGO = 'ONGOEVTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT';
// const DREAMS_NGO = 'ONGDREAMSTTTTTTTTTTTTTTTTTTTTTTTTTTTTT';
// const SAFE_SPACE = 'ESTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT';
// const PARTNERS = 'PARTNERTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT';
// const PLATFORM = 'PFCTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT';
// const SC = 'CSTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT';

export const LocationTags = {
  // OVC_NGO,
  // SAFE_SPACE,
  // PARTNERS,
  // PLATFORM,
  // SC,
  // DREAMS_NGO,
};

export const dreamsProgramPrivileges = ['Manage Dreams Program'];
export const dreamsEnrollmentPrivileges = ['Manage Manage Enrollment'];
export const dreamsEligibilityPrivileges = ['Manage Manage Eligibility'];
export const dreamsSafeSpacesPrivileges = ['Manage Safe Spaces'];

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
