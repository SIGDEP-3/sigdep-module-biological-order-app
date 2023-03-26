/* eslint-disable @typescript-eslint/no-explicit-any */
import { Group, Text, Button } from '@mantine/core';
import { Encounter, Obs } from '@spbogui-openmrs/shared/model';
import { CustomTable } from '@spbogui-openmrs/shared/ui';
import { IconEye } from '@tabler/icons';
import dayjs from 'dayjs';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ColumnDef } from '@tanstack/react-table';

/* eslint-disable-next-line */
export interface OrderListTableProps {
  orders: Encounter[];
}

const cols: ColumnDef<Encounter>[] = [
  {
    id: 'uuid',
    header: 'uuid',
    accessorFn: (data) => data.uuid,
  },
  {
    id: 'patient',
    header: 'patient',
    accessorFn: (data) => data.patient.uuid,
  },
  {
    id: 'orderDate',
    header: 'Date de la demande',
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
    id: 'identifier',
    header: 'Numéro du patient',
    accessorFn: (data) => data.patient.identifiers[0]?.identifier,
    cell: ({ getValue }) => <Text size={'sm'}>{getValue<string>()}</Text>,
  },
  {
    id: 'status',
    header: 'Statut de la demande',
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
    header: 'Action',
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

export function OrderListTable({ orders }: OrderListTableProps) {
  const data: Encounter[] = useMemo(() => orders, [orders]);
  const columns: ColumnDef<Encounter>[] = useMemo(() => [...cols], []);
  // const tableHooks = (hooks: any) => {
  //   hooks.visibleColumns.push((columns: any) => [
  //     ...columns,
  //     {
  //       id: 'menu',
  //       Header: '',
  //       with: 10,
  //       maxWidth: 10,
  //       Cell: ({ row }: CellValue) => (
  //         <Group spacing={0} position="right">
  //           <ActionIcon color={'green'}>
  //             <Link
  //               style={{ textDecoration: 'none' }}
  //               to={`/patient-order/${row.values.patient}/result/${row.values.uuid}`}
  //             >
  //               <IconEye />
  //             </Link>
  //           </ActionIcon>
  //           {/* <ActionIcon>
  //             <IconSearch />
  //           </ActionIcon> */}
  //         </Group>
  //       ),
  //     },
  //   ]);
  // };
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
        searchable
      />
    </div>
  );
}

export default OrderListTable;
