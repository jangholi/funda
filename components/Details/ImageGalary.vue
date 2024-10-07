<template>
  <img class="test object-cover max-h-96 mb-8 w-full" :src="data.HoofdFoto" alt="property image1">
</template>

<script setup lang="ts">
import type { PropertyDetails } from '~/types/property-details'

defineProps<{
  data: PropertyDetails
}>()
</script>
