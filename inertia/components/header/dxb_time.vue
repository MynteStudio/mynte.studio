<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useI18nExtended } from '~/composables/use_i18n_extended'

const dxbTime = ref('')
const { arabic, dir, t } = useI18nExtended()

const toArabicNumerals = (num: string) => {
  const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']
  return num.replace(/\d/g, (digit) => arabicNumerals[Number.parseInt(digit)])
}

let timeoutId: ReturnType<typeof setTimeout> | undefined

function updateDubaiTime() {
  const now = new Date()
  let dubaiHour = (now.getUTCHours() + 4) % 24
  const minutes = now.getUTCMinutes()
  const formattedMinutes = minutes.toString().padStart(2, '0')
  const period = dubaiHour >= 12 ? 'PM' : 'AM'
  const periodAr = dubaiHour >= 12 ? 'م' : 'ص'
  dubaiHour = dubaiHour % 12 || 12
  const formattedHour = dubaiHour.toString().padStart(2, '0')

  if (arabic.value) {
    const arabicTime = toArabicNumerals(`${formattedHour}:${formattedMinutes}`)
    dxbTime.value = `${arabicTime} ${periodAr}`
  } else {
    dxbTime.value = `${formattedHour}:${formattedMinutes} ${period}`
  }

  const delay = (60 - now.getUTCSeconds()) * 1000
  timeoutId = setTimeout(updateDubaiTime, delay)
}

onMounted(() => {
  updateDubaiTime()
})

onUnmounted(() => {
  if (timeoutId) clearTimeout(timeoutId)
})

watch(arabic, () => {
  if (timeoutId) clearTimeout(timeoutId)
  updateDubaiTime()
})
</script>

<template>
  <div :dir class="flex gap-1 items-center">
    <div :class="arabic ? 'translate-y-[-0.07rem]' : ''">
      <span class="font-en">[</span>
      <span :class="arabic ? 'font-ar italic' : 'font-en'">
        {{ t('dxb') }}
      </span>
      <span class="font-en">]</span>
    </div>
    <span>{{ dxbTime }}</span>
  </div>
</template>

<i18n>
  {
    "en": {
      "dxb": "DXB"
    },
    "ar": {
      "dxb": "دبي"
    }
  }
</i18n>
