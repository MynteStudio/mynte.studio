<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import Booking from '~/components/booking.vue'
import InquiryForm from '~/components/inquiry_form.vue'

defineProps<{
  errors?: Record<string, string | Record<string, string>>
}>()
</script>

<template>
  <Head title="Homepage" />
  <h1>Homepage</h1>

  <InquiryForm :errors />
  <Booking />
</template>
