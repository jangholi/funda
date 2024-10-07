import { it, expect, describe, beforeEach } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import type { PropertyDetails } from '~/types/property-details'
import { DetailsPropertyFeatures as Component } from '#components'

describe('PropertyFeatures', () => {
  let component: Awaited<ReturnType<typeof mountSuspended<typeof Component>>>;

  beforeEach(async () => {
    component = await mountSuspended(Component, {
      props: {
        data: <PropertyDetails>{
          PrijsGeformatteerd: '€ 100.000',
          AangebodenSinds: '2021-01-01',
          VerkoopStatus: 'Verkocht',
          Aanvaarding: 'In overleg',
          SoortWoning: 'Eengezins',
          Bouwvorm: 'Bestaande bouw',
          Bouwjaar: '2000',
          SoortDak: 'Zadeldak',
          WoonOppervlakte: 100,
          PerceelOppervlakte: 200,
          Inhoud: 300,
          AantalKamers: 3,
          AantalBadkamers: 1,
          AantalWoonlagen: '2',
          WarmWater: 'C.V.-Ketel',
        }
      }
    });
  })

  it('mounted component text matches', () => {
    expect(component.text()).toMatchInlineSnapshot(
      `"Kenmerken OverdrachtVraagprijs€ 100.000Vraagprijs per m²€4,622Aangeboden sinds2021-01-01StatusVerkochtAanvaardingIn overlegBouwSoort woonhuisEengezinsSoort bouwBestaande bouwBouwjaar2000ToegankelijkheidAccessible for people with disabilities and accessible for the elderlySpecifiekSoort dakZadeldakOppervlakten en inhoudWonen100Overige inpandige ruimte1,576 m²Gebouwgebonden buitenruimte748 m³Externe bergruimte748 m³Perceel200Inhoud300IndelingAantal kamers3Aantal badkamers1BadkamervoorzieningenggAantal woonlagen2EnergieEnergielabelbIsolatie1VerwarmingggWarm waterC.V.-Ketel"`
    )
  })
});
