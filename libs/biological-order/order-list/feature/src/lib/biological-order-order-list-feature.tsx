import { BiologicalOrderOrderListUi } from '@spbogui-openmrs/biological-order/order-list/ui';
import { useEffect, useState } from 'react';

/* eslint-disable-next-line */
export interface BiologicalOrderOrderListFeatureProps {}

export function BiologicalOrderOrderListFeature(
  props: BiologicalOrderOrderListFeatureProps
) {
  const [identifier, setIdentifier] = useState<string | undefined>();
  const [patientId, setPatientId] = useState('');
  const [params, setParams] = useState('');

  const filterList = (startDate: Date, endDate: Date) => {
    console.log(startDate, endDate);
  };

  useEffect(() => {
    if (identifier && !patientId) {
      setPatientId(identifier);
    }
  }, [identifier, patientId]);

  return (
    <div>
      <BiologicalOrderOrderListUi
        orders={[]}
        filterList={filterList}
        setIdentifier={setIdentifier}
        patientId={patientId}
        setParams={setParams}
      />
    </div>
  );
}

export default BiologicalOrderOrderListFeature;
