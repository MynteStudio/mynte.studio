<script setup lang="ts">
import { useI18nExtended } from '~/composables/use_i18n_extended'

const { arabic, dir, t } = useI18nExtended()
</script>

<template>
  <div
    :dir
    :class="arabic ? 'pl-6' : 'pl-4'"
    class="text-lg available-badge inline-flex items-center gap-3 py-[0.3rem] pr-4"
  >
    <div class="light relative size-2 bg-[#00ff00] rounded-full"></div>
    <span class="translate-y-[-1px]">
      {{ t('available') }}
    </span>
  </div>
</template>

<style scoped>
.available-badge {
  box-sizing: border-box;
  background: radial-gradient(
    88.54% 235.56% at 50.22% 50.31%,
    rgba(255, 255, 255, 0.048) 0%,
    rgba(255, 255, 255, 0.192) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(10px);
  border-radius: 20px;
}

.light {
  animation: pulse 2.5s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>

<i18n>
  {
    "en": {
      "available": "available for work now :)"
    },
    "ar": {
      "available": "متاح للعمل الآن"
    }
  }
</i18n>
