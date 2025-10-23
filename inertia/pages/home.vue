<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import Expertise from '~/app/expertise/expertise.vue'
import AboutUs from '~/components/about-us/about_us.vue'
import Hero from '~/components/hero/hero.vue'
import Works from '~/components/works/works.vue'
</script>

<template>
  <Head title="Homepage" />

  <Hero />
  <Expertise />
  <Works />
  <AboutUs />
</template>
