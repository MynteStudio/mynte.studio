<script setup lang="ts">
import { useI18nExtended } from '~/composables/use_i18n_extended'
import { useCookies } from '@vueuse/integrations/useCookies'

const { arabic, locale } = useI18nExtended()

function handleClick() {
  const newLocale = arabic.value ? 'en' : 'ar'
  locale.value = newLocale
  const cookies = useCookies(['locale'])
  cookies.set('locale', newLocale)
}
</script>

<template>
  <button @click="handleClick" :class="arabic ? 'font-en' : 'font-ar italic'">
    {{ arabic ? 'ENG' : 'عربي' }}
  </button>
</template>
