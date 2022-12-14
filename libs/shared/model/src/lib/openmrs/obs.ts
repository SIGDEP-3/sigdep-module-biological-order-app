/* eslint-disable @typescript-eslint/no-explicit-any */
import { Concept } from './concept';
import { Location } from './location';
import { PersonForm } from './person';

export interface Obs {
  location: Location;
  obsDatetime: Date;
  concept: Concept;
  person: PersonForm;
  value: any;
  display: string;
  uuid: string;
  groupMembers: Obs[];
  voided?: boolean;
}

export interface ObsForm {
  location?: string;
  obsDatetime?: Date;
  concept: string;
  person?: string;
  value?: any;
  uuid?: string;
  voided?: boolean;
  groupMembers: ObsForm[];
}

export interface ObsEncounterForm {
  concept: string;
  value?: any;
  groupMembers: ObsEncounterForm[];
  voided?: boolean;
  uuid?: string;
}
