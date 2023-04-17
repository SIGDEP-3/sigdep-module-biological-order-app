import {
  EncounterForm,
  encounterSchema,
  ENCOUNTER_INITIAL_VALUES,
  OrderForm,
  orderSchema,
  ORDER_INITIAL_VALUE,
} from '@spbogui-openmrs/shared/model';
import Joi from 'joi';

export interface OrderFormType {
  encounter: EncounterForm;
  order: OrderForm;
  // breastfeeding: boolean;
  //currentlyBreastfeedingChild : boolean;
  
  hivType: string;
  isOnTreatment?: string;
  arvInitialYear?: string;
  regimeLine?: string;
  regime?: string;
  requestReason: string;
  otherCVReason? : string
  initialCd4Absolute?: string;
  initialCd4Percentage?: string;
  initialCd4Date?: Date;
  latestCd4Absolute?: string;
  latestCd4Percentage?: string;
  latestCd4Date?: Date;
  hasViralLoad?: string;
  latestViralLoad?: string;
  latestViralLoadDate?: Date;
  requestDate?: Date;
  collectionType: string;
  otherRegimeLine?: string;
}


export const orderFormSchema = Joi.object<OrderFormType>({
  encounter: encounterSchema,
  order: orderSchema,
  hivType: Joi.optional(),
  isOnTreatment: Joi.optional(),
  arvInitialYear: Joi.optional(),
  regimeLine: Joi.optional(),
  regime: Joi.optional(),
  requestReason: Joi.string()
    .required()
    .messages({ 'string.empty': 'Le motif de la demande de CV est requis' }),
  otherCVReason: Joi.optional(),  
  // breastfeeding: Joi.optional(),
  //isPregnant: Joi.optional(),
  initialCd4Absolute: Joi.string().required().messages({
    'string.empty': 'La valeur absolue de CD4 initial est requise',
  }),
  initialCd4Percentage: Joi.string()
    .required()
    .messages({ 'string.empty': 'Le pourcentage de CD4 initial est requis' }),
  
  initialCd4Date: Joi.date()
    .required()
    .messages({ 'any.required': 'La date de CD4 initial est requise' }),
  latestCd4Absolute: Joi.optional(),
  latestCd4Percentage: Joi.optional(),
  latestCd4Date: Joi.optional(),
  hasViralLoad: Joi.optional(),
  latestViralLoad: Joi.optional(),
  latestViralLoadDate: Joi.optional(),
  requestDate: Joi.date()
    .required()
    .messages({ 'any.required': 'La date de la demande est requise' }),
  collectionType: Joi.string()
    .required()
    .messages({ 'string.empty': 'Le type de prélèvement est requis' }),
  otherRegimeLine: Joi.optional(),
});

export const ORDER_FORM_INITIAL_VALUE: OrderFormType = {
  encounter: {
    ...ENCOUNTER_INITIAL_VALUES,
    encounterProviders: [
      { encounterRole: 'CLINICIANRRRRRRRRRRRRRRRRRRRRRRRRRRRRR', provider: '' },
      { encounterRole: 'COLLECTORRRRRRRRRRRRRRRRRRRRRRRRRRRRRR', provider: '' },
    ],
    encounterType: 'DEMANDEEXAMENEEEEEEEEEEEEEEEEEEEEEEEEE',
  },
  order: {
    ...ORDER_INITIAL_VALUE,
    concept: '856AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
    type: 'testorder',
  },
  requestReason: '',
  hivType: '',
  //currentlyBreastfeedingChild: false,
  //pregnancyStatus : false ,
  isOnTreatment: '',
  initialCd4Percentage: '',
  initialCd4Absolute: '',
  initialCd4Date: undefined,
  latestCd4Percentage: '',
  latestCd4Absolute: '',
  latestCd4Date: undefined,
  hasViralLoad: '',
  latestViralLoad: '',
  latestViralLoadDate: undefined,
  arvInitialYear: '',
  requestDate: undefined,
  collectionType: '',
  regimeLine: '',
  otherRegimeLine: '',
  regime: '',
  otherCVReason : ""
};

export const orderObsRecord: Record<string, string> = {
  '163623AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA': 'hivType',
  '5272AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA': 'pregnancyStatus',
  '5632AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA': 'currentlyBreastfeedingChild',
  CI0060001AAAAAAAAAAAAAAAAAAAAAAAAAAA: 'isOnTreatment',
  CI0050002AAAAAAAAAAAAAAAAAAAAAAAAAAA: 'requestReason',
  AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA001: 'initialCd4Absolute',
  AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA002: 'initialCd4Percentage',
  AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIII: 'initialCd4Date',
  '5497AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA': 'latestCd4Absolute',
  '730AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA': 'latestCd4Percentage',
  '160103AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA': 'latestCd4Date',
  '166073AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA': 'regimeLine',
  CI0060002AAAAAAAAAAAAAAAAAAAAAAAAAAA: 'otherRegimeLine',
  '162240AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA': 'regime',
  CI0050004AAAAAAAAAAAAAAAAAAAAAAAAAAA: 'hasViralLoad',
  CI0050011AAAAAAAAAAAAAAAAAAAAAAAAAAA: 'latestViralLoad',
  CI0050005AAAAAAAAAAAAAAAAAAAAAAAAAAA: 'latestViralLoadDate',
  CI0050006AAAAAAAAAAAAAAAAAAAAAAAAAAA: 'requestDate',
  CI0050007AAAAAAAAAAAAAAAAAAAAAAAAAAA: 'collectionType',
  CI0050008AAAAAAAAAAAAAAAAAAAAAAAAAAA: 'collectionHour',
  '164422AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA': 'laboratoryName',
  CI0050001AAAAAAAAAAAAAAAAAAAAAAAAAAA: 'otherCVReason',
  CI0060004AAAAAAAAAAAAAAAAAAAAAAAAAAA : 'arvInitialYear'
};
