import {
  Button,
  Container,
  Grid,
  Group,
  Paper,
  Radio,
  Select,
  SelectItem,
  Space,
  Table,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { DatePicker, TimeInput } from '@mantine/dates';
import { UseFormReturnType } from '@mantine/form';
import { Patient } from '@spbogui-openmrs/shared/model';
import { IconCalendar, IconCircle } from '@tabler/icons';
import dayjs from 'dayjs';
import { OrderFormType } from '../order-form-type';
import { createStyles } from '@mantine/core';
import { ObsInput } from '@spbogui-openmrs/shared/ui';

export const styles = createStyles((theme) => ({
  table: {
    // borderBottomColor: theme.colors.gray[3],
    // borderBottomStyle: 'solid',
    // borderBottomWidth: 1,
    // width: '100%',
    '& > tbody > tr > td': {
      borderStyle: 'solid',
      borderColor: theme.colors.gray[3],
      borderWidth: 1,
    },
  },
}));

/* eslint-disable-next-line */
export interface OrderFormProps {
  form: UseFormReturnType<OrderFormType>;
  patient?: Patient;
  providers: SelectItem[];
  regimenList: SelectItem[];
  handleSubmit: (values: OrderFormType) => void;
}

export function OrderForm({
  form,
  handleSubmit,
  patient,
  providers,
  regimenList,
}: OrderFormProps) {
  const { classes } = styles();
  const theme = useMantineTheme();
  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      {patient && (
        <>
        {/* {form.values.encounter.patient = patient.uuid} */}
        <Container>
          <Text size={'lg'} mb={'lg'} weight={'bold'} color={'cyan.6'}>
            DONNEES PATIENT
          </Text>
          <Group mb={'xs'}>
            <Text size={'sm'}>Date de naissance : </Text>
            <Text weight={'bold'}>
              {dayjs(patient.person.birthdate).format('DD/MM/YYYY')}
            </Text>
          </Group>
          <Group mb={'xs'}>
            <Text size={'sm'}>Age : </Text>
            <Text weight={'bold'}>{patient.person.age}</Text>
            <Space />
            <Space />
            <Text size={'sm'}>Sexe : </Text>
            <Text>Masculin</Text>{' '}
            {patient.person.gender === 'M' ? (
              <IconCircle strokeWidth={6} color={'#00abfb'} size={20} />
            ) : (
              <IconCircle stroke={1} color={'gray'} size={20} />
            )}
            <Space />
            <Text>Féminin</Text>{' '}
            {patient.person.gender === 'F' ? (
              <IconCircle
                stroke={6}
                // color={'#00abfb'}
                style={{ color: theme.colors.blue[6] }}
                size={20}
              />
            ) : (
              <IconCircle stroke={1} color={'gray'} size={20} />
            )}
          </Group>
          <Group>
            <Group>
              <Text size={'sm'} pb={'xs'}>
                Grossesse :
              </Text>
              <ObsInput
                concept="5272AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
                form={form}
                type={'checkbox'}
                name={'pregnancyStatus'}
                readOnly
                
                // label={'Allaitement'}
              />
            </Group>
            {/* <Text size={'sm'}>Grossesse : </Text>
            {patient.person.gender === 'F' ? <IconSquareX /> : <IconSquare />}
            <Space /> */}
            <Space />
            <Space />
            <Group>
              <Text size={'sm'} pb={'xs'}>
                Allaitement :{' '}
              </Text>
              <ObsInput
                concept={'5632AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'}
                form={form}
                type={'checkbox'}
                name={'currentlyBreastfeedingChild'}
                readOnly
                
                // label={'Allaitement'}
              />
            </Group>

            {/* <Text size={'sm'}>Allaitement : </Text>
            {patient.person.gender === 'M' ? <IconSquareX /> : <IconSquare />} */}
          </Group>
          <Text size={'lg'} my={'lg'} weight={'bold'} color={'cyan.6'}>
            DONNEES CLINIQUES
          </Text>
          <Group>
            <Text size={'sm'}>Type de VIH : </Text>
            <Space />
            <Space />
            <Space />
            <ObsInput
              type="radio"
              concept="CI0030001AAAAAAAAAAAAAAAAAAAAAAAAAAA"
              form={form}
              name={'hivType'}
            >
              <Group>
                <Text size={'sm'} pb={'xs'}>
                  VIH-1 :
                </Text>
                <Radio value={'CI0030002AAAAAAAAAAAAAAAAAAAAAAAAAAA'} />
              </Group>
            </ObsInput>
            {/* <Text size={'sm'}>VIH-1 : </Text>
            {patient.person.gender === 'M' ? <IconCircleX /> : <IconCircle />} */}
            <Space />
            <Space />
            <Space />

            <ObsInput
              type="radio"
              concept="CI0030001AAAAAAAAAAAAAAAAAAAAAAAAAAA"
              form={form}
              name={'hivType'}
            >
              <Group>
                <Text size={'sm'} pb={'xs'}>
                  VIH-2 :
                </Text>
                <Radio value={'CI0030003AAAAAAAAAAAAAAAAAAAAAAAAAAA'} />
              </Group>
            </ObsInput>
            {/* <Text size={'sm'}>VIH-2 : </Text>
            {patient.person.gender === 'M' ? <IconCircleX /> : <IconCircle />} */}
            <Space />
            <Space />
            <Space />

            <ObsInput
              type="radio"
              concept="CI0030001AAAAAAAAAAAAAAAAAAAAAAAAAAA"
              form={form}
              name={'hivType'}
            >
              <Group>
                <Text size={'sm'} pb={'xs'}>
                  VIH-1 et VIH-2 :{' '}
                </Text>
                <Radio value={'CI0030004AAAAAAAAAAAAAAAAAAAAAAAAAAA'} />
              </Group>
            </ObsInput>
            {/* <Text size={'sm'}>VIH-1 et VIH-2 : </Text>
            {patient.person.gender === 'M' ? <IconCircleX /> : <IconCircle />} */}
          </Group>
          <Group>
            <Text size={'sm'}>Le patient est-il actuellement sous ARV ?</Text>
            <ObsInput
              concept="CI0060001AAAAAAAAAAAAAAAAAAAAAAAAAAA"
              name="isOnTreatment"
              form={form}
              type={'radio'}
            >
              <Group>
                <Text size={'sm'} pb={'xs'}>
                  Oui
                </Text>
                <Radio value={'1065AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'} />
                <Text size={'sm'} pb={'xs'}>
                  Non
                </Text>
                <Radio value={'1066AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'} />
              </Group>
            </ObsInput>
          </Group>
          <Group>
            <Text size={'sm'}>
              Si oui, Année initiation 1er traitement ARV{' '}
            </Text>
            <ObsInput
              form={form}
              name={'arvInitialYear'}
              concept='CI0060004AAAAAAAAAAAAAAAAAAAAAAAAAAA'
              placeholder="......"
              variant={'unstyled'}
              mask={'9999'}
            />
          </Group>
          <Group>
            <Text size={'sm'}>Ligne thérapeutique : </Text>
            <ObsInput
              name="regimeLine"
              concept={'166073AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'}
              form={form}
              type={'radio'}
            >
              <Group>
                <Text size={'sm'} pb={'xs'}>
                  1
                  <sup>
                    <small>ère</small>
                  </sup>
                  Ligne:
                </Text>
                <Radio value={'166074AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'} />
                <Space />
                <Text size={'sm'} pb={'xs'}>
                  2
                  <sup>
                    <small>ème</small>
                  </sup>
                  Ligne:
                </Text>
                <Radio value={'166075AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'} />
                <Space />
                <Text size={'sm'} pb={'xs'}>
                  3
                  <sup>
                    <small>ème</small>
                  </sup>
                  Ligne:
                </Text>
                <Radio value={'166076AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'} />
                <Text size={'sm'} pb={'xs'}>
                  Autre ligne:
                </Text>
                <ObsInput
                  form={form}
                  name={'otherRegimeLine'}
                  concept={'CI0060002AAAAAAAAAAAAAAAAAAAAAAAAAAA'}
                  placeholder=".........................................................................."
                  variant={'unstyled'}
                />
              </Group>
            </ObsInput>
          </Group>
          <Group mb={'sm'}>
            <Text size={'sm'}>Régime thérapeutique :</Text>
            <ObsInput
              form={form}
              name={'regime'}
              concept={'CI0060003AAAAAAAAAAAAAAAAAAAAAAAAAAA'}
              data={regimenList}
              type={'select'}
              placeholder={'.........................................'}
              variant={'unstyled'}
              style={{ width: '70%' }}
            />
            {/* <Select
              data={[]}
              // value={'ok'}
            /> */}
          </Group>
          <Paper withBorder p={'xs'}>
          <Group mb={'sm'}>
            <Text size={'sm'} weight="bold" underline>
              Motif de la demande de la CV
            </Text>
            <ObsInput
              form={form}
              name={'requestReason'}
              concept={'CI0050002AAAAAAAAAAAAAAAAAAAAAAAAAAA'}
              type={'radio'}
            >
              <Group pt={'xs'}>
                <Text size={'sm'} pb={5}>
                  CV contrôle sous ARV
                </Text>
                <Radio
                  // label={'CV contrôle sous ARV'}
                  value={'CI0050003AAAAAAAAAAAAAAAAAAAAAAAAAAA'}
                />
                <Space />
                <Text size={'sm'} pb={5}>
                  Échec virologique
                </Text>
                <Radio
                  // label={'CV contrôle sous ARV'}
                  value={'160569AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'}
                />
                <Space />
                <Text size={'sm'} pb={5}>
                Échec immunologique
                </Text>    
                <Radio
                  // label={'CV contrôle sous ARV'}
                  value={'160566AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'}
                />
                
                <Space />
                <Text size={'sm'} pb={8}>
                  Échec clinique
                </Text>
                <Radio
                  // label={'CV contrôle sous ARV'}
                  value={'CI0050010AAAAAAAAAAAAAAAAAAAAAAAAAAA'}
                />
              </Group>
            </ObsInput>
            </Group>
            <Group mb={'sm'}>
            <Text size={'sm'} pb={5}>
                  Autres (à préciser)
                </Text>
            <ObsInput
                  style={{ width: '20%' }}
                  variant="unstyled"
                  placeholder={
                    '..................................................................'
                  }
                  concept={'CI0050001AAAAAAAAAAAAAAAAAAAAAAAAAAA'}
                  form={form}
                  name={'otherCVReason'}
                />
            </Group>
          </Paper>

          <Grid my={'md'} pl={'lg'}>
            <Grid.Col span={6} p={'lg'}>
              <Text size={'sm'} weight={'bold'} underline mb={'sm'}>
                A l'initiation du traitement
              </Text>
              <Group>
                <Text size={'sm'}>CD4 valeur absolue :</Text>
                <ObsInput
                  form={form}
                  name={'initialCd4Absolute'}
                  concept={'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA001'}
                  variant="unstyled"
                  placeholder={'.........................................'}
                />
              </Group>
              <Group>
                <Text size={'sm'}>CD4 pourcentage :</Text>
                <ObsInput
                  form={form}
                  name={'initialCd4Percentage'}
                  concept={'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA002'}
                  variant="unstyled"
                  placeholder={'.........................................'}
                />
              </Group>
              <Group>
                <Text size={'sm'}>Date :</Text>
                <ObsInput
                  form={form}
                  name={'initialCd4Date'}
                  concept={'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIII'}
                  variant="unstyled"
                  placeholder={'__/__/____'}
                  type={'date'}
                />
              </Group>
            </Grid.Col>
            <Grid.Col span={6} p={'lg'}>
              <Text size={'sm'} weight={'bold'} underline mb={'sm'}>
                A la demande de Charge virale
              </Text>
              <Group>
                <Text size={'sm'}>CD4 valeur absolue :</Text>
                <ObsInput
                  form={form}
                  name={'latestCd4Absolute'}
                  concept={'5497AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'}
                  variant="unstyled"
                  placeholder={'.........................................'}
                />
              </Group>
              <Group>
                <Text size={'sm'}>CD4 pourcentage :</Text>
                <ObsInput
                  form={form}
                  name={'latestCd4Percentage'}
                  concept={'730AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'}
                  variant="unstyled"
                  placeholder={'.........................................'}
                />
              </Group>
              <Group>
                <Text size={'sm'}>Date :</Text>
                <ObsInput
                  form={form}
                  name={'latestCd4Date'}
                  concept={'160103AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'}
                  variant="unstyled"
                  placeholder={'__/__/____'}
                  type={'date'}
                />
              </Group>
            </Grid.Col>
          </Grid>
          <Group>
            <Text size={'sm'}>
              Le patient a-t-il déjà bénéficié d’une mesure de charge virale ?
            </Text>
            <ObsInput
              form={form}
              name={'hasViralLoad'}
              concept={'CI0050004AAAAAAAAAAAAAAAAAAAAAAAAAAA'}
              variant="unstyled"
              type={'radio'}
            >
              <Group>
                <Text size={'sm'} pb={'xs'}>
                  Oui :{' '}
                </Text>
                <Radio value={'1065AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'} />
                <Text size={'sm'} pb={'xs'}>
                  Non :{' '}
                </Text>
                <Radio value={'1066AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'} />
              </Group>
            </ObsInput>
          </Group>
          <Group>
            <Text size={'sm'}>Si oui,</Text>
            <Text size={'sm'}>Valeur : </Text>
            <ObsInput
              form={form}
              name={'latestViralLoad'}
              concept={'CI0050011AAAAAAAAAAAAAAAAAAAAAAAAAAA'}
              variant="unstyled"
              placeholder={'.........................................'}
            />
            <Space />
            <Space />
            <Space />

            <Text size={'sm'}>Date </Text>
            <ObsInput
              form={form}
              name={'latestViralLoadDate'}
              concept={'CI0050005AAAAAAAAAAAAAAAAAAAAAAAAAAA'}
              variant="unstyled"
              placeholder={'__/__/____'}
              type={'date'}
            />
          </Group>
          <Text
            size={'lg'}
            my={'lg'}
            weight={'bold'}
            color={'cyan.6'}
            transform={'uppercase'}
          >
            Identification du prélèvement
          </Text>
          <Paper withBorder>
            <Table className={classes.table}>
              <tbody>
                <tr>
                  <td>
                    <Group mb={'xs'}>
                      <Text size={'sm'}>Nom du clinicien</Text>
                      <Select
                        searchable
                        data={providers}
                        variant={'unstyled'}
                        {...form.getInputProps(
                          'encounter.encounterProviders.0.provider'
                        )}
                      />
                    </Group>
                    <Group mb={'xs'}>
                      <Text size={'sm'}>Date de la demande de l'analyse</Text>
                      <ObsInput
                        concept={'CI0050006AAAAAAAAAAAAAAAAAAAAAAAAAAA'}
                        variant="unstyled"
                        placeholder={'__/__/____'}
                        form={form}
                        name={'requestDate'}
                        type={'date'}
                        readOnly
                      />
                    </Group>
                  </td>
                  <td>
                    <Group mb={'xs'}>
                      <Text size={'sm'}>Nom du préleveur</Text>
                      <Select
                        data={providers}
                        searchable
                        variant={'unstyled'}
                        {...form.getInputProps(
                          'encounter.encounterProviders.1.provider'
                        )}
                      />
                    </Group>
                    <Group mb={'xs'}>
                      <Text size={'sm'}>Date du prélèvement</Text>
                      <DatePicker
                        variant="unstyled"
                        icon={<IconCalendar />}
                        locale="fr"
                        inputFormat="DD/MM/YYYY"
                        placeholder={'__/__/____'}
                        {...form.getInputProps('encounter.encounterDatetime')}
                      />
                    </Group>
                    <Group mb={'xs'}>
                      <Text size={'sm'}>Heure du prélèvement</Text>
                      <TimeInput variant="unstyled" />
                    </Group>
                    <Group mb={'xs'}>
                      <Text size={'sm'}>Type de prélèvement</Text>

                      <ObsInput
                        type={'select'}
                        form={form}
                        name={'collectionType'}
                        concept={'CI0050007AAAAAAAAAAAAAAAAAAAAAAAAAAA'}
                        data={[
                          {
                            value: '1002AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                            label: 'Plasma',
                          },
                          {
                            value: 'CI0050009AAAAAAAAAAAAAAAAAAAAAAAAAAA',
                            label: 'DBS',
                          },
                        ]}
                        variant={'unstyled'}
                      />
                    </Group>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Paper>

          <Group position="center" p={'xs'}>
            <Button type={'submit'}>Enregistrer</Button>
          </Group>
          {JSON.stringify(form.values.encounter)}  
        </Container>
        </>
      )}
      
    </form>
  );
}

export default OrderForm;
