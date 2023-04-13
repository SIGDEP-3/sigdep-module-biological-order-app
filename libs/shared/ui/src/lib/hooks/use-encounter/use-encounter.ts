import {
  Encounter,
  EncounterForm,
  OrderForm,
} from '@spbogui-openmrs/shared/model';
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
  useMutation,
} from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import { encounterToForm } from '@spbogui-openmrs/shared/utils';
import {
  EncounterService,
  ObsService,
  OrderService,
} from '@spbogui-openmrs/shared/service';

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
  views = 'full',
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
      await EncounterService.filter(
        patient,
        encounterType,
        views,
        params,
        limit
      ),
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
  fromdate: string,
  todate: string,
  params = 'default',
  limit = '10',
  enabled = false
) => {
  const {
    data,
    refetch: findAllEncounters,
    isLoading,
  } = useQuery(
    [encounterType, fromdate, todate, params, limit],
    async () =>
      await EncounterService.findAll(
        encounterType,
        fromdate,
        todate,
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

export const useSaveOrder = () => {
  const { mutate: saveOrder, isLoading } = useMutation((order: OrderForm) =>
    OrderService.save(order)
  );
  return {
    saveOrder,
    isLoading,
  };
};

export const useFindObs = (
  patient: string,
  concept: string,
  otherParams = '',
  view = 'default'
) => {
  const {
    data,
    refetch: findObs,
    isLoading,
  } = useQuery(
    [concept, patient, view, otherParams],
    async () => await ObsService.filter(patient, concept, otherParams, view),
    { enabled: true }
  );

  const obs = data ? data : [];

  return { obs, findObs, isLoading };
};
