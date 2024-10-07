import type { PropertyDetails } from '~/types/property-details'

export default cachedEventHandler(async (event) => {
  const { fundaAPIKey } = useRuntimeConfig(event)

  const id = event.context.params!.id!

  const detail = await $fetch(`https://partnerapi.funda.nl/feeds/Aanbod.svc/json/detail/${fundaAPIKey}/koop/${id}/`)

  // TODO: Remove extra keys from detail

  return detail as PropertyDetails

}, { maxAge: 3600 })
