<template>
    <div v-if="propertyDetails" class="container m-auto grid grid-cols-4 lg:grid-cols-12">
        <DetailsImageGalary class="col-span-full" :data="propertyDetails" />

        <div class="col-start-1 col-end-5 lg:col-start-1 lg:col-end-13 h-0.5 bg-primary-50 mt-2 mb-8" />

        <main class="col-start-1 col-end-13 lg:col-start-1 lg:col-end-8 xl:col-start-2 px-6 lg:px-0">
            <DetailsPropertyInfo :data="propertyDetails" />
            <hr class="divide-y-2">
            <DetailsPropertyDescription :data="propertyDetails" />
            <hr class="divide-y-2">
            <DetailsPropertyFeatures :data="propertyDetails" />
        </main>

        <aside class="col-start-1 col-end-13 lg:col-start-9 lg:col-end-13 xl:col-end-12 px-6 lg:px-0">
            <DetailsBrokerCard :data="propertyDetails" />
        </aside>
    </div>
    <div v-else-if="status === 'pending'">
        <p>Loading...</p>
    </div>
    <div v-else-if="status === 'error'">
        <p>Error: {{ error }}</p>
    </div>
</template>

<script setup lang="ts">
import type { PropertyDetails } from '~/types/property-details'

const id = useRoute().params.id

const { error, data: propertyDetails, status } = await useFetch<PropertyDetails>(`/api/detail/${id}`)

if (error.value) {
    throw error.value
}

useServerSeoMeta({
    title: `Huis te koop: ${propertyDetails.value?.Adres}`,
    description: 'This is the property details page',
})
</script>
