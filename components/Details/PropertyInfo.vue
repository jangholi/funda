<template>
  <div>
    <p class="font-semibold text-lg mb-1">
      {{ data.Adres }}
    </p>

    <div class="mb-5 mt-2 text-gray-500 text-sm flex items-center flex-wrap">
      <span class="flex mr-5 mt-3">
        <Icon name="solar:home-outline" size="1.2rem" class="mr-1" />
        <span class="text-nowrap">{{ data.WoonOppervlakte }} m² wonen</span>
      </span>

      <span class="flex mr-5 mt-3">
        <Icon name="carbon:area" size="1.2rem" class="mr-1" />
        <span class="text-nowrap">{{ data.PerceelOppervlakte }} m² plot</span>
      </span>

      <span class="flex mr-5 mt-3">
        <Icon name="ic:round-meeting-room" size="1.2rem" class="mr-1" />
        <span class="text-nowrap">{{ data.AantalKamers }} Kamers</span>
      </span>
      <span class="flex mr-5 mt-3">
        <Icon name="material-symbols:bed" size="1.2rem" class="mr-1" />
        <span class="text-nowrap">{{ data.AantalSlaapkamers }} Slaapkamers</span>
      </span>
    </div>

    <!-- eslint-disable-next-line vue/no-v-html -->
    <p class="font-semibold text-lg mt-2 mb-3" v-html="data.PrijsGeformatteerd" />
  </div>
</template>

<script setup lang="ts">
import type { PropertyDetails } from '~/types/property-details'

defineProps<{
  data: PropertyDetails
}>()
</script>
