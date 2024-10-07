import { it, expect, describe, beforeEach } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import type { PropertyDetails } from '~/types/property-details'
import { DetailsPropertyInfo as Component } from '#components'

describe('PropertyInfo', () => {
  let component: Awaited<ReturnType<typeof mountSuspended<typeof Component>>>;

  beforeEach(async () => {
    component = await mountSuspended(Component, {
      props: {
        data: <PropertyDetails>{
          Adres: 'Teststraat 1',
          WoonOppervlakte: 100,
          AantalKamers: 3,
          AantalSlaapkamers: 2,
          PrijsGeformatteerd: '€ 100.000'
        }
      }
    });
  })

  it('mounted component text matches', () => {
    expect(component.text()).toBe(
      `Teststraat 1 100 m² wonen   m² plot  3 Kamers  2 Slaapkamers € 100.000`
    )
  })
});
