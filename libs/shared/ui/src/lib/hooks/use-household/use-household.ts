import { HouseholdService } from '@sigeov-apps/common/data-access';
import { useQuery } from '@tanstack/react-query';
import { useState, useCallback } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseHousehold {
  count: number;
  increment: () => void;
}

export function useHousehold(): UseHousehold {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((x) => x + 1), []);
  return { count, increment };
}

export default useHousehold;

export const useFindHouseholdByIdentifier = (
  identifier: string,
  params = 'full',
  enabled = false
) => {
  const {
    data,
    refetch: findHouseholdByIdentifier,
    isLoading,
  } = useQuery(
    ['patient', identifier, params],
    async () =>
      await HouseholdService.searchHousehold(
        identifier ? identifier : '',
        params
      ),
    { enabled }
  );

  const household = data && data.length > 0 ? data[0] : undefined;
  return {
    household,
    findHouseholdByIdentifier,
    isLoading,
  };
};
