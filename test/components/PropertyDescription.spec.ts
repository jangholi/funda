import { it, expect, describe, beforeEach } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import type { PropertyDetails } from '~/types/property-details'
import { DetailsPropertyDescription as Component } from '#components'

describe('PropertyDescription', () => {
  let component: Awaited<ReturnType<typeof mountSuspended<typeof Component>>>;

  beforeEach(async () => {
    component = await mountSuspended(Component, {
      props: {
        data: <PropertyDetails>{
          VolledigeOmschrijving: '......',
        }
      }
    });
  })

  it('mounted component text matches', () => {
    expect(component.text()).toBe(`Omschrijving ...... Lees de volledige omschrijving`)

  })

  it('click to expand', async () => {
    const childDiv = component.element.children[1]

    expect(childDiv.classList.toString()).includes('after:from-white after:to-transparent')

    await component.find('button').trigger('click')

    expect(childDiv.classList.toString()).not.includes('after:from-white after:to-transparent')
    expect(component.text()).toBe(`Omschrijving ......`)
  })
});
