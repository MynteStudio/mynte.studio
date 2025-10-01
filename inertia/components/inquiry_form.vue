<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import { ref } from 'vue'
import Input from '~/components/input.vue'
import { tuyau } from '~/core/providers/tuyau'

defineProps<{
  errors?: Record<string, string | Record<string, string>>
}>()

const form = useForm({
  fullName: '',
  companyName: '',
  email: '',
  service: '',
  message: '',
})

const isSent = ref(false)

function handleSubmit() {
  form.post(tuyau.$url('inquiry.execute'), {
    preserveScroll: true,
    onSuccess: () => {
      form.reset()
      isSent.value = true
    },
  })
}
</script>

<template>
  <span v-if="isSent" class="text-green">Your request has been sent!</span>
  <form method="post" :action="tuyau.$url('inquiry.execute')" @submit.prevent="handleSubmit">
    <Input
      id="fullName"
      v-model="form.fullName"
      label="Full name"
      :error-message="form.errors.fullName"
      required
    />

    <Input
      id="companyName"
      v-model="form.companyName"
      label="Company name (optional)"
      :error-message="form.errors.companyName"
    />

    <Input
      id="email"
      v-model="form.email"
      label="Email"
      type="email"
      :error-message="form.errors.email"
      required
    />

    <!-- NOTE: need change in validator -->
    <span v-if="form.errors.service" class="text-red">{{ form.errors.service }}</span>
    <label for="service">Choose a service:</label>
    <select id="service" v-model="form.service" name="service" required>
      <option value="">--Please choose a service--</option>
      <option value="logo">Logo design</option>
      <option value="marketing">Digital marketing</option>
      <option value="seo">SEO/SEA</option>
      <option value="software">Software development</option>
      <option value="webdesign">Webdesign</option>
      <option value="other">Other service</option>
    </select>

    <span v-if="form.errors.message" class="text-red">{{ form.errors.message }}</span>
    <label for="message">Message (optional)</label>
    <textarea
      id="message"
      v-model="form.message"
      name="message"
      placeholder="Let us understand your project..."
      rows="4"
      cols="50"
    />

    <button type="submit">Send the request</button>
  </form>
</template>
