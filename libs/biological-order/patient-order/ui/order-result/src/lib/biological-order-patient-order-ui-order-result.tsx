import { Link, Route, Routes, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import invariant from 'invariant';
import {
  useFindEncounter
} from '@spbogui-openmrs/shared/ui';

import {
  customEncounterParams
} from '@spbogui-openmrs/shared/utils';

/* eslint-disable-next-line */
export interface BiologicalOrderPatientOrderUiOrderResultProps {}

export function BiologicalOrderPatientOrderUiOrderResult(
  props: BiologicalOrderPatientOrderUiOrderResultProps
) {
  const { patientId ,requestId } = useParams();
  invariant(patientId, '');
  invariant(requestId, '');

  const {encounter} = useFindEncounter(requestId ,customEncounterParams ,true);

  const obs = encounter?.obs.find((o) => o.concept.uuid === '856AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
  useEffect(() => {
    console.log(requestId)
  } ,[patientId ,requestId])

  return (
    <div>
      <h1>Order Results</h1>
      {obs?obs.value: "No Value Yet"}
    </div>
  );
}

export default BiologicalOrderPatientOrderUiOrderResult;
