<script setup lang="ts">
import { ref, onMounted } from 'vue'
import DzrptLogo from '~/components/svg/trusted-by/dzrpt_logo.vue'
import HaguenauLogo from '~/components/svg/trusted-by/haguenau_logo.vue'
import PicassoLogo from '~/components/svg/trusted-by/picasso_logo.vue'
import RoshniTechnologiesLogo from '~/components/svg/trusted-by/roshni_technologies_logo.vue'
import SolarTerraLogo from '~/components/svg/trusted-by/solar_terra_logo.vue'
import { useI18nExtended } from '~/composables/use_i18n_extended'

const logos = [DzrptLogo, HaguenauLogo, SolarTerraLogo, PicassoLogo, RoshniTechnologiesLogo]

const { t } = useI18nExtended()

const mounted = ref(false)
onMounted(() => {
  mounted.value = true
})
</script>

<template>
  <div class="w-full">
    <span class="block mb-4 text-center text-xs font-light font-en">{{ t('trusted_by') }}</span>

    <div dir="ltr" :class="[$style.container, 'container']">
      <div v-if="mounted" v-for="i in 2" :key="i">
        <component v-for="(Logo, index) in logos" :key="index" :is="Logo" />
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "trusted_by": "trusted by 10+ clients"
  }
}
</i18n>

<style module>
.container {
  @apply relative flex items-center;
  overflow: hidden;
  height: 50px;
  max-width: 800px;
  margin: 0 auto;
  mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 5%,
    black 95%,
    transparent 100%
  );
}

@media (min-width: 640px) {
  .container {
    mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
    -webkit-mask-image: linear-gradient(
      to right,
      transparent 0%,
      black 15%,
      black 85%,
      transparent 100%
    );
  }
}

.container > div {
  @apply absolute flex items-center gap-10;
}

.container > div svg {
  width: auto;
  height: auto;
  max-width: none;
  flex-shrink: 0;
  min-width: 100px;
  transform: scale(0.7);
}

.container > div:first-of-type {
  left: 0;
  animation:
    translate 11250ms linear,
    infiniteTranslate2 23625ms 11250ms linear infinite;
}

.container > div:last-of-type {
  left: 0;
  transform: translate3d(110%, 0, 0);
  animation: infiniteTranslate1 23625ms 100ms linear infinite;
}

@keyframes infiniteTranslate1 {
  from {
    transform: translate3d(110%, 0, 0);
  }
  to {
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes infiniteTranslate2 {
  from {
    transform: translate3d(117%, 0, 0);
  }
  to {
    transform: translate3d(-93%, 0, 0);
  }
}

@keyframes translate {
  from {
    transform: translate3d(6%, 0, 0);
  }
  to {
    transform: translate3d(-94%, 0, 0);
  }
}
</style>
