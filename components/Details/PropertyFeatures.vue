<template>
  <div>
    <p class="font-bold text-2xl mt-3 mb-1">
      Kenmerken
    </p>

    <div v-for="(val, key) in Features" :key="key">
      <p class="font-semibold">
        {{ key }}
      </p>
      <div v-for="feature in Features[key]" :key="feature.title"
        class="flex flex-row mt-3 mb-3 pb-3 border-b-gray-300 border-b-[0.03rem] text-md">
        <div class="basis-1/3 text-wrap">
          {{ feature.title }}
        </div>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="basis-2/3 text-gray-500 overflow-scroll" v-html="feature.value" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropertyDetails } from '~/types/property-details'

const props = defineProps<{
  data: PropertyDetails
}>()

const Features = ref({
  'Overdracht': [{
    title: 'Vraagprijs',
    value: props.data.PrijsGeformatteerd,
  }, {
    title: 'Vraagprijs per m²',
    value: '€4,622',
  }, {
    title: 'Status',
    value: props.data.VerkoopStatus,
  }, {
    title: 'Aanvaarding',
    value: props.data.Aanvaarding,
  }],
  'Bouw': [{
    title: 'Soort woonhuis',
    value: props.data.SoortWoning,
  }, {
    title: 'Soort bouw',
    value: props.data.Bouwvorm,
  }, {
    title: 'Bouwjaar',
    value: props.data.Bouwjaar,
  }, {
    title: 'Toegankelijkheid',
    value: 'Accessible for people with disabilities and accessible for the elderly',
  }, {
    title: 'Specifiek',
    value: '',
  }, {
    title: 'Soort dak',
    value: props.data.SoortDak,
  }],
  'Oppervlakten en inhoud': [{
    title: 'Wonen',
    value: props.data.WoonOppervlakte,
  }, {
    title: 'Overige inpandige ruimte',
    value: '1,576 m²',
  }, {
    title: 'Gebouwgebonden buitenruimte',
    value: '748 m³',
  }, {
    title: 'Externe bergruimte',
    value: '748 m³',
  }, {
    title: 'Perceel',
    value: props.data.PerceelOppervlakte,
  }, {
    title: 'Inhoud',
    value: props.data.Inhoud,
  }],
  'Indeling': [{
    title: 'Aantal kamers',
    value: props.data.AantalKamers,
  }, {
    title: 'Aantal badkamers',
    value: props.data.AantalBadkamers,
  }, {
    title: 'Badkamervoorzieningen',
    value: 'gg',
  }, {
    title: 'Aantal woonlagen',
    value: props.data.AantalWoonlagen,
  }],
  'Energie': [{
    title: 'Energielabel',
    value: 'b',
  }, {
    title: 'Isolatie',
    value: props.data.AantalBadkamers,
  }, {
    title: 'Verwarming',
    value: 'gg',
  }, {
    title: 'Warm water',
    value: props.data.WarmWater,
  }],

})
</script>
