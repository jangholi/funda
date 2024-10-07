<template>
  <div
    class="rounded overflow-hidden flex flex-col max-w-xl mx-auto border-[0.03rem] border-gray-400 border-solid h-max ">
    <div class="bg-gray-400 min-h-24" />
    <div class="relative -mt-16 px-4 pt-5 bg-white m-10">
      <!-- TODO: add link to Broker page -->
      <NuxtLink
to=""
        class="cursor-pointer font-semibold text-lg hover:text-indigo-600 transition duration-500 ease-in-out">
        {{ data.Makelaar }}
      </NuxtLink>

      <p class="cursor-pointer mb-7 mt-3 flex items-center text-gray-500 text-sm">
        <Icon name="ph:phone-bold" size="1.2rem" class="mr-1" />
        {{ data.MakelaarTelefoon }}
      </p>

      <hr>

      <div class="mt-8 mb-6">
        <a
href="" class="px-6 py-2 mt-10 min-w-[120px] text-center text-primary-600 border text-white bg-primary-50 rounded hover:bg-primary-60
                    hover:text-white active:bg-primary-500 focus:outline-none focus:ring">
          <Icon name="iconoir:mail" />
          Stuur e-mail
        </a>
      </div>

      <!-- TODO: add link to viewing page -->
      <NuxtLink to="" class="cursor-pointer text-gray-500 text-md flex items-center mt-8">
        <Icon name="ph:calendar" size="1.5rem" class="mr-1" />
        Vraag bezichtiging aan
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropertyDetails } from '~/types/property-details'

defineProps<{
  data: PropertyDetails
}>()
</script>
