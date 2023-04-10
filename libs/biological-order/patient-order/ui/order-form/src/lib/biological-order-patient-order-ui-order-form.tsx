import {
  Center,
  Divider,
  Loader,
  Paper,
  SelectItem,
  Text,
} from '@mantine/core';
import { joiResolver, useForm } from '@mantine/form';
import {
  orderFormSchema,
  OrderFormType,
  ORDER_FORM_INITIAL_VALUE,
} from './forms/order-form-type';
import OrderForm from './forms/order-form/order-form';
import { EncounterForm, Patient } from '@spbogui-openmrs/shared/model';
import {
  useFindConcept,
  useFindFilteredProvider,
  useSaveEncounter,
  useSaveOrder,
} from '@spbogui-openmrs/shared/ui';
import { useEffect, useState } from 'react';
import { notification } from '@spbogui-openmrs/shared/utils';
import { useFindLatestObs } from './use-find-latest-obs/use-find-latest-obs';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

/* eslint-disable-next-line */
export interface BiologicalOrderPatientOrderUiOrderFormProps {
  patient?: Patient;
  requestDate?: Date;
}

export function BiologicalOrderPatientOrderUiOrderForm({
  patient,
  requestDate,
}: BiologicalOrderPatientOrderUiOrderFormProps) {
  const navigate = useNavigate();
  const [isSaving, setIsSaving] = useState(false);
  const [regimenList, setRegimenList] = useState<SelectItem[]>([]);
  const [orderForm, setOrderForm] = useState<EncounterForm | undefined>(
    undefined
  );
  const form = useForm<OrderFormType>({
    initialValues: ORDER_FORM_INITIAL_VALUE,
   // validate: joiResolver(orderFormSchema),
  });

  const {
    pregnancyStatus,
    currentlyBreastfeedingChild,
    initialCd4Absolute,
    initialCd4Percentage,
    loading,
  } = useFindLatestObs(
    patient ? patient.uuid : '',
    dayjs(requestDate).format('YYYY-MM-DD'),
    ''
  );

  useEffect(() => {
    if (!requestDate) {
      navigate(`/patient-order/${patient ? patient.uuid : ''}`);
    }
  });

  const { providerSelect } = useFindFilteredProvider(
    '',
    'custom:(uuid,display)',
    true
  );

  const { concept, isLoading } = useFindConcept(
    '162240AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
    'custom:(answers:(display,uuid))'
  );

  // To removed - just to ensure the data are loaded
  //console.log(
   // pregnancyStatus,
   // currentlyBreastfeedingChild,
   // initialCd4Absolute,
   // initialCd4Percentage
  //);

  // const { patient } = useFindOnePatient(patientId, 'full', true);

  const handleSubmit = (values: OrderFormType) => {

    console.log(JSON.stringify(values));
    setOrderForm(form.values.encounter);
    setIsSaving(true);
  };

  useEffect(() => {
    if (!form.values.requestDate) {
      // form.values.encounter.encounterDatetime = requestDate;
      form.values.requestDate = requestDate;
    }
  }, [form, requestDate]);

  useEffect(() => {
    if (concept && !isLoading && regimenList.length === 0) {
      setRegimenList(
        concept.answers.map((a) => {
          return { value: a.uuid, label: a.display };
        })
      );
    }
  }, [concept, isLoading, regimenList.length]);

  const { saveEncounter } = useSaveEncounter();
  const { saveOrder } = useSaveOrder();

  useEffect(() => {
    if (isSaving) {
      if (orderForm) {
        if (!orderForm.uuid) {
          saveEncounter(orderForm, {
            onSuccess: (data) => {
              console.log('Saved successfully Encounter');
              if (data && data.uuid) {
                const order = form.values.order;
                order.patient = data.patient.uuid;
                order.encounter = data.uuid;
                const orderer = data.encounterProviders.find(
                  (e) =>
                    e.encounterRole.uuid ===
                    'CLINICIANRRRRRRRRRRRRRRRRRRRRRRRRRRRRR'
                );
                order.orderer = orderer ? orderer.uuid : '';
                saveOrder(order, {
                  onSuccess: () => {
                    notification(
                      'id-success',
                      'success',
                      'Demande enregistrée avec succès',
                      '',
                      5000
                    );
                  },
                });
              }
            },
            onError: (error, variables, context) => {
              notification(
                'id-error',
                'error',
                "Demande non enregistrée en raison d'un problème",
                '',
                5000
              );
            },
          });
        }
      }

      setIsSaving(false);
    }
  }, [form.values.order, isSaving, orderForm, saveEncounter, saveOrder]);

  return (
    <>
      {loading && (
        <Center style={{ height: '50vh' }}>
          <Loader size={'xl'} />
        </Center>
      )}

      {!loading && (
        <Paper withBorder>
          <Text p={'xs'} color={'cyan'} weight={'bold'}>
            Formulaire de demande de charge virale
          </Text>
          <Divider />
          <Paper m={'xs'} withBorder p={'xs'} color={'gray'}>
            <OrderForm
              form={form}
              patient={patient}
              handleSubmit={handleSubmit}
              providers={providerSelect}
              regimenList={regimenList}
            />
          </Paper>
        </Paper>
      )}
    </>
  );
}

export default BiologicalOrderPatientOrderUiOrderForm;
