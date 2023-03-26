import { Group, Button } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { useInputState } from '@mantine/hooks';
import { IconCalendar, IconSearch } from '@tabler/icons';
import dayjs from 'dayjs';
import { useEffect } from 'react';

/* eslint-disable-next-line */
export interface OrderListFilterFormProps {
  setParams: (period: string) => void;
}

export function OrderListFilterForm({ setParams }: OrderListFilterFormProps) {
  const [startPeriod, setStartPeriod] = useInputState<Date | null>(null);
  const [endPeriod, setEndPeriod] = useInputState<Date | null>(null);

  useEffect(() => {
    if (!startPeriod || !endPeriod) {
      setParams('');
    }
  }, [startPeriod, endPeriod, setParams]);
  return (
    <Group p={'xs'} position={'right'}>
      <DatePicker
        locale="fr"
        inputFormat={'DD/MM/YYYY'}
        placeholder="Date de début"
        icon={<IconCalendar />}
        value={startPeriod}
        onChange={setStartPeriod}
      />
      <DatePicker
        locale="fr"
        inputFormat={'DD/MM/YYYY'}
        placeholder="Date de fin"
        icon={<IconCalendar />}
        value={endPeriod}
        onChange={setEndPeriod}
      />
      <Button
        variant={'subtle'}
        onClick={() =>
          setParams(
            startPeriod && endPeriod
              ? `_lastUpdated=ge${dayjs(startPeriod).format(
                  'YYYY-MM-DD'
                )}&_lastUpdated=le${dayjs(endPeriod).format('YYYY-MM-DD')}`
              : ''
          )
        }
      >
        <IconSearch />
      </Button>
    </Group>
  );
}

export default OrderListFilterForm;
