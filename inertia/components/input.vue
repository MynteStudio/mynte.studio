<script setup lang="ts">
const { type = 'text' } = defineProps<{
  id: string
  label: string
  type?: FieldType
  errorMessage?: string
}>()

defineOptions({
  inheritAttrs: false,
})

export type FieldType = 'text' | 'email'

const model = defineModel<string>()
</script>

<template>
  <div>
    <span v-if="errorMessage" class="text-red">{{ errorMessage }}</span>
    <label :for="id">{{ label }}</label>
    <input :id v-model="model" :type v-bind="$attrs" class="border" />
  </div>
</template>
