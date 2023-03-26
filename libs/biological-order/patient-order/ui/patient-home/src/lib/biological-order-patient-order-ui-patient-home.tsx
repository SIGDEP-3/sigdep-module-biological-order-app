import { Alert, Center, Divider, Paper, Table, Text } from '@mantine/core';
import { Encounter, Order, Patient } from '@spbogui-openmrs/shared/model';
import { IconHome } from '@tabler/icons';
import dayjs from 'dayjs';

/* eslint-disable-next-line */
export interface BiologicalOrderPatientOrderUiPatientHomeProps {
  patient?: Patient;
  biologicalExams?: Encounter[];
  latestFollowup?: Encounter;
  latestOrder?: Order;
}

export function BiologicalOrderPatientOrderUiPatientHome({
  patient,
  biologicalExams,
  latestFollowup,
  latestOrder,
}: BiologicalOrderPatientOrderUiPatientHomeProps) {
  return (
    <Paper withBorder>
      <Text
        // size={'md'}
        color={'cyan.7'}
        weight={'bold'}
        transform={'uppercase'}
        p={'xs'}
      >
        <IconHome />
      </Text>
      <Divider mb={'xs'} />
      <Paper p={'xs'} m={'xs'} withBorder>
        <Text color={'cyan.7'}>Dernière demande de charge virale</Text>
        <Divider color={'cyan.7'} />

        {latestOrder ? (
          <Table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Status</th>
                <th>Date status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{dayjs(latestOrder.dateActivated).format('DD/MM/YYYY')}</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        ) : (
          <Alert>
            <Center>
              <Text>
                Aucune demande de charge virale a ce jour pour ce patient
              </Text>
            </Center>
          </Alert>
        )}
      </Paper>
    </Paper>
  );
}

export default BiologicalOrderPatientOrderUiPatientHome;
