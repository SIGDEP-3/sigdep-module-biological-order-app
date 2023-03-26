import { Encounter, Obs } from '@spbogui-openmrs/shared/model';
import { ColumnDef } from '@tanstack/react-table';
import { Button, Group, Text } from '@mantine/core';
import dayjs from 'dayjs';
import { IconEye } from '@tabler/icons';
import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { CustomTable } from '@spbogui-openmrs/shared/ui';

/* eslint-disable-next-line */
export interface PatientOrderListTableProps {
  orders: Encounter[];
}

const cols: ColumnDef<Encounter>[] = [
  {
    id: 'uuid',
    header: 'uuid',
    accessorFn: (data) => data.uuid,
  },
  {
    id: 'orderDate',
    header: 'Date de prélèvement',
    accessorFn: (data) => data.encounterDatetime,
    cell: ({ getValue }) => {
      return (
        <Text style={{ textAlign: 'left' }} size={'sm'}>
          {!!getValue() && dayjs(getValue<Date>()).format('DD/MM/YYYY')}
        </Text>
      );
    },
  },
  {
    id: 'reason',
    header: 'Motif de la demande',
    accessorFn: (data) => data.obs.find((o) => o.concept.uuid === ''),
    cell: ({ getValue }) => (
      <Text size={'sm'}>{getValue<string>() && getValue<Obs>().value}</Text>
    ),
  },
  {
    id: 'status',
    header: 'Statut',
    accessorFn: (data) => data.obs.find((o) => o.concept.uuid === ''),
    cell: ({ getValue }) => (
      <Text size={'sm'}>{getValue<string>() && getValue<Obs>().value}</Text>
    ),
  },
  {
    id: 'statusDate',
    header: 'Date du statut',
    accessorFn: (data) => data.obs.find((o) => o.concept.uuid === ''),
    cell: ({ getValue }) => (
      <Text size={'sm'}>{getValue<string>() && getValue<Obs>().value}</Text>
    ),
  },
  {
    id: 'menu',
    header: '',
    cell: (data) => (
      <Group spacing={0} position="right">
        <Link
          style={{ textDecoration: 'none' }}
          to={`/patient-order/${data.row.getValue(
            'patient'
          )}/result/${data.row.getValue('uuid')}`}
        >
          <Button color={'green.7'}>
            <IconEye />
          </Button>
        </Link>
      </Group>
    ),
  },
];

export function PatientOrderListTable({ orders }: PatientOrderListTableProps) {
  const data: Encounter[] = useMemo(() => orders, [orders]);
  const columns: ColumnDef<Encounter>[] = useMemo(() => [...cols], []);
  return (
    <div>
      <CustomTable
        pagination
        initialState={{
          columnVisibility: { uuid: false, patient: false },
        }}
        data={data}
        columns={columns}
        color={'cyan'}
        // searchable
      />
    </div>
  );
}

export default PatientOrderListTable;
