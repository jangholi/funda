<template>
  <div>
    <p class="font-semibold text-2xl mt-4">
      Omschrijving
    </p>
    <div
class="text-gray-500 text-justify dark:text-slate-400 mt-3 mb-3 overflow-y-hidden relative"
      :class="!fullDescription ? 'h-40 after:absolute after:bottom-0 after:left-0 after:h-20 after:w-full after:bg-gradient-to-t after:from-white after:to-transparent' : ''">
      {{ fullDescription ? data.VolledigeOmschrijving : data.VolledigeOmschrijving }}
    </div>
    <button v-if="!fullDescription" class="text-blue-500 dark:text-blue-400 mb-6" @click="fullDescription = true">
      <Icon name="carbon:add-large" />
      Lees de volledige omschrijving
    </button>
  </div>
</template>

<script setup lang="ts">
import type { PropertyDetails } from '~/types/property-details'

const fullDescription = ref(false)

defineProps<{
  data: PropertyDetails
}>()
</script>
