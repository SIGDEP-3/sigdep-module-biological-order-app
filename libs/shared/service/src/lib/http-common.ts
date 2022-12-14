import axios from 'axios';
// import {SECRET_KEY} from "@sigeov-apps/common/utils";
// import { encryptStorage } from '@sigeov-apps/common/utils';

// const sessionBasic = encryptStorage.getItem('auth');

export const api = axios.create({
  baseURL: '/openmrs/ws/rest/v1',
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    // Authorization: 'Basic ' + sessionBasic,
  },
});
