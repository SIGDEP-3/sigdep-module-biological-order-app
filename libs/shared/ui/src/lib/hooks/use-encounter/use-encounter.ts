import { Encounter, EncounterForm } from '@sigeov-apps/common/models';
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
  useMutation,
} from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import { encounterToForm } from '@sigeov-apps/common/utils';
import { EncounterService } from '@sigeov-apps/common/data-access';

export interface UseFindEncounter {
  encounter: Encounter | undefined;
  encounterForm: EncounterForm | undefined;
  findOneEncounter: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<Encounter, unknown>>;
  isLoading: boolean;
}

export const useFindEncounter = (
  uuid: string,
  params = 'v=full',
  enabled = false
): UseFindEncounter => {
  const {
    data,
    refetch: findOneEncounter,
    isLoading,
  } = useQuery(
    [uuid, params],
    async () => await EncounterService.findOne(uuid, params),
    { enabled }
  );

  const encounter = data ? data : undefined;
  const encounterForm = data ? encounterToForm(data) : undefined;
  return {
    encounter,
    encounterForm,
    findOneEncounter,
    isLoading,
  };
};

export const useFindFilteredEncounter = (
  patient: string,
  encounterType: string,
  params: string,
  limit = '1',
  enabled = false
) => {
  const {
    data,
    refetch: findFilteredEncounter,
    isLoading,
  } = useQuery(
    [encounterType, patient, params, limit],
    async () =>
      await EncounterService.filter(patient, encounterType, params, limit),
    { enabled }
  );

  const encounter = data ? data : [];
  const encounterForms: EncounterForm[] =
    data && data.length > 0 && data[0].obs && data[0].obs[0]?.concept
      ? data.map((d) => encounterToForm(d))
      : [];
  return {
    encounter,
    encounterForms,
    findFilteredEncounter,
    isLoading,
  };
};

export const useFindAllEncounters = (
  // patient: string,
  encounterType: string,
  startDate: string,
  endDate: string,
  params = 'default',
  limit = '10',
  enabled = false
) => {
  const {
    data,
    refetch: findAllEncounters,
    isLoading,
  } = useQuery(
    [encounterType, startDate, endDate, params, limit],
    async () =>
      await EncounterService.findAll(
        encounterType,
        startDate,
        endDate,
        params,
        limit
      ),
    { enabled }
  );

  const encounters = data ? data : [];
  return {
    encounters,
    findAllEncounters,
    isLoading,
  };
};

export const useSaveEncounter = () => {
  const { mutate: saveEncounter, isLoading } = useMutation(
    (encounter: EncounterForm) => EncounterService.save(encounter)
  );
  return {
    saveEncounter,
    isLoading,
  };
};

export const useUpdateEncounter = (uuid: string) => {
  const { mutate: updateEncounter, isLoading } = useMutation(
    (encounter: EncounterForm) => EncounterService.update(encounter, uuid)
  );
  return {
    updateEncounter,
    isLoading,
  };
};

export const useRemoveEncounter = () => {
  const { mutate: removeEncounter, isLoading } = useMutation((uuid: string) =>
    EncounterService.remove(uuid)
  );
  return {
    removeEncounter,
    isLoading,
  };
};
