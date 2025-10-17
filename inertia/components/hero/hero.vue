<script setup lang="ts">
import { useI18nExtended } from '~/composables/use_i18n_extended'
import Background from '~/components/hero/background.vue'
import TrustedBy from '../header/trusted_by.vue'

const { arabic, t } = useI18nExtended()
</script>

<template>
  <Background />
  <div class="min-h-[calc(100vh_-_6.25rem)] flex flex-col justify-between items-center">
    <div></div>
    <div class="flex flex-col items-center">
      <h1
        class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-500 text-center max-w-[20ch] line-height-[120%]"
      >
        <span
          :class="[
            arabic ? 'font-ar-serif' : 'font-serif italic font-light',
            'mix-blend-difference',
          ]"
          >{{ t('keyword') }}</span
        >
        {{ t('title') }}
      </h1>

      <p class="max-w-[55ch] mx-auto mt-5 text-center text-lg md:text-2xl line-height-[120%]">
        {{ t('text') }}
      </p>
    </div>

    <TrustedBy />
  </div>
</template>

<i18n>
{
  "en": {
    "keyword": "Refreshing",
    "title": "Digital experiences with creative design for every brand",
    "text": "Websites, apps, e-commerce, graphic identities, graphic design, and advertising ; all crafted for a distinct digital presence"
  }
}
</i18n>
