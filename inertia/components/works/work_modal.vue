<script setup lang="ts">
import { onMounted, onUnmounted, computed, watch, ref } from 'vue'
import type { WorkItem } from './works_data'
import type { Component } from 'vue'
import RoshniTechnologiesLogo from '~/components/svg/works/roshni_technologies_logo.vue'
import { useI18nExtended } from '~/composables/use_i18n_extended'

const { t, arabic, dir } = useI18nExtended()

const props = defineProps<{
  isOpen: boolean
  work: WorkItem | null
}>()

const emit = defineEmits<{
  close: []
}>()

// NOTE: Logo components mapping
const logoComponents: Record<string, Component> = {
  roshni: RoshniTechnologiesLogo,
  // Add more logos here as needed
}

const currentLogo = computed(() => {
  if (!props.work) return null
  return logoComponents[props.work.logoComponent]
})

// Get localized work data
const localizedWork = computed(() => {
  if (!props.work) return null
  const locale = arabic.value ? 'ar' : 'en'
  return {
    title: props.work.title[locale],
    category: props.work.category[locale],
    workDescription: props.work.workDescription[locale],
    location: props.work.location[locale],
    companyDescription: props.work.companyDescription[locale],
    keypoints: props.work.keypoints[locale],
    tagline: props.work.tagline[locale],
    primaryButtonText: props.work.primaryButtonText?.[locale],
    secondaryButtonText: props.work.secondaryButtonText?.[locale],
  }
})

const scrollPosition = ref(0)

function closeModal() {
  emit('close')
}

function onKeyDown(event: KeyboardEvent) {
  if (event.key === 'Escape' && props.isOpen) {
    closeModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', onKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeyDown)
  document.body.style.overflow = ''
  document.body.style.position = ''
  document.body.style.top = ''
  document.body.style.width = ''
})

watch(
  () => props.isOpen,
  (newValue) => {
    if (newValue) {
      scrollPosition.value = window.scrollY
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollPosition.value}px`
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      window.scrollTo(0, scrollPosition.value)
    }
  }
)
</script>

<template>
  <Transition name="modal">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-[100] flex items-center justify-center"
      @click="closeModal"
    >
      <div class="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

      <!-- Modal content -->
      <div class="relative w-full h-screen flex items-center justify-center" @click.stop>
        <!-- Video container -->
        <div class="relative w-full h-screen max-w-[2560px] mx-auto overflow-hidden">
          <!-- Video -->
          <video
            v-if="work"
            :src="work.video"
            autoplay
            loop
            muted
            playsinline
            class="absolute inset-0 w-full h-full object-cover filter-grayscale-10"
          ></video>

          <!-- TODO: content -->
          <div
            :dir
            class="absolute inset-0 container mx-auto flex flex-col lg:flex-row lg:justify-between cursor-auto px-5 lg:px-0 py-10 lg:py-0 overflow-y-auto lg:overflow-visible gap-10 lg:gap-0"
            v-if="work && localizedWork"
          >
            <!-- NOTE: Close button (mobile top, desktop top-right) -->
            <div class="lg:hidden flex justify-end order-0">
              <button
                class="font-serif text-lg flex flex-row justify-center items-center gap-[10px] min-w-[4rem] px-3 bg-[linear-gradient(180deg,#EDEDED_0%,#BFBFBF_81.19%,#989898_96.35%)] shadow-[inset_0_0_0.25px_1.25px_#C2C2C2,inset_3px_5px_2px_-4.75px_#FFFFFF,inset_1.25px_1.5px_0_rgba(213,213,213,0.75),inset_0_4.75px_0.25px_-2.5px_#FBFBFB,inset_1px_1px_3px_3px_#F9F9F9,inset_0_-3px_1px_rgba(255,255,255,0.5),inset_2.5px_-2px_3px_rgba(255,255,255,0.75),inset_0_-3px_3px_1px_rgba(255,245,221,0.1)] rounded-[74px] italic text-[#393939] text-shadow-[0_0_2px_rgba(241,237,238,0.4)] cursor-pointer"
                @click="closeModal"
              >
                {{ t('close') }}
              </button>
            </div>

            <!-- NOTE: Title (mobile order-1, desktop order-3 at bottom) -->
            <h3
              class="text-[min(10vw,190px)] line-height-[120%] font-serif italic text-center w-full order-1 lg:hidden"
            >
              {{ localizedWork.title }}
            </h3>

            <!-- NOTE: Company info (mobile order-2, desktop order-2) -->
            <div
              class="flex flex-col items-start lg:items-end w-full lg:w-auto lg:max-w-2/5 order-2 lg:order-2"
            >
              <!-- Desktop close button -->
              <button
                class="hidden lg:flex font-serif mb-20 text-lg flex-row justify-center items-center gap-[10px] min-w-[4rem] px-3 bg-[linear-gradient(180deg,#EDEDED_0%,#BFBFBF_81.19%,#989898_96.35%)] shadow-[inset_0_0_0.25px_1.25px_#C2C2C2,inset_3px_5px_2px_-4.75px_#FFFFFF,inset_1.25px_1.5px_0_rgba(213,213,213,0.75),inset_0_4.75px_0.25px_-2.5px_#FBFBFB,inset_1px_1px_3px_3px_#F9F9F9,inset_0_-3px_1px_rgba(255,255,255,0.5),inset_2.5px_-2px_3px_rgba(255,255,255,0.75),inset_0_-3px_3px_1px_rgba(255,245,221,0.1)] rounded-[74px] italic text-[#393939] text-shadow-[0_0_2px_rgba(241,237,238,0.4)] cursor-pointer lg:mt-10"
                @click="closeModal"
              >
                {{ t('close') }}
              </button>

              <component :is="currentLogo" v-if="currentLogo" class="mb-4" />
              <span class="font-serif italic text-2xl mb-4"
                >{{ localizedWork.location }} - {{ work.year }}</span
              >

              <p class="text-justify w-full lg:max-w-[37ch] line-height-[20px]">
                {{ localizedWork.companyDescription }}
              </p>

              <div
                class="flex flex-wrap justify-start lg:justify-end w-full lg:max-w-[35rem] gap-3 mt-4"
              >
                <span
                  class="keypoint"
                  v-for="(point, index) in localizedWork.keypoints"
                  :key="index"
                  >{{ point }}</span
                >
              </div>
            </div>

            <!-- NOTE: Role in project (mobile order-3, desktop order-1) -->
            <div class="w-full lg:w-auto lg:max-w-2/5 order-3 lg:order-1 lg:mt-10">
              <h5 class="mb-8 lg:mb-20">{{ t('our_role_in_project') }}</h5>
              <p class="text-justify line-height-[20px]" v-html="localizedWork.workDescription"></p>
            </div>

            <!-- NOTE: bottom (mobile order-4, desktop stays at bottom) -->
            <div
              class="flex flex-col items-center w-full order-4 lg:absolute lg:bottom-0 lg:left-0 lg:right-0"
            >
              <p class="max-w-[50ch] font-semibold text-xl text-center">
                {{ localizedWork.tagline }}
              </p>
              <div
                class="flex flex-col lg:flex-row gap-5 text-lg mb-4 lg:mb-[6vh] mt-7 w-full lg:w-auto items-center"
              >
                <a
                  v-if="work.primaryButtonUrl"
                  :href="work.primaryButtonUrl"
                  class="left-line relative text-lg font-serif flex flex-row justify-center items-center px-5 py-1 gap-[10px] bg-[linear-gradient(180deg,#EDEDED_0%,#BFBFBF_81.19%,#989898_96.35%)] shadow-[inset_0_0_0.25px_1.25px_#C2C2C2,inset_3px_5px_2px_-4.75px_#FFFFFF,inset_1.25px_1.5px_0_rgba(213,213,213,0.75),inset_0_4.75px_0.25px_-2.5px_#FBFBFB,inset_1px_1px_3px_3px_#F9F9F9,inset_0_-3px_1px_rgba(255,255,255,0.5),inset_2.5px_-2px_3px_rgba(255,255,255,0.75),inset_0_-3px_3px_1px_rgba(255,245,221,0.1)] rounded-[74px] italic text-[#393939] text-shadow-[0_0_2px_rgba(241,237,238,0.4)]"
                  target="_blank"
                  rel="noopener noreferrer"
                  >{{ localizedWork.primaryButtonText }}</a
                >
                <a
                  v-if="work.secondaryButtonUrl"
                  :href="work.secondaryButtonUrl"
                  class="right-line relative flex flex-row justify-center items-center px-5 py-1 min-w-50 h-[40px] bg-[linear-gradient(180deg,#1D1B1C_0%,#191718_81.19%,#252120_96.35%)] shadow-[inset_0_0_0.25px_1.25px_#262524,inset_3px_5px_2px_-4.75px_#FFFFFF,inset_1.25px_1.5px_0_rgba(0,0,0,0.75),inset_0_4.75px_0.25px_-2.5px_#FBFBFB,inset_1px_1px_3px_3px_#1A1818,inset_0_-3px_1px_rgba(0,0,0,0.5),inset_2.5px_-2px_3px_rgba(124,108,94,0.75),inset_0_-3px_3px_1px_rgba(255,245,221,0.1)] rounded-[74px]"
                  target="_blank"
                  rel="noopener noreferrer"
                  >{{ localizedWork.secondaryButtonText }}</a
                >
              </div>
              <h3
                :class="arabic ? 'mb-7' : ''"
                class="hidden lg:block text-[min(10vw,190px)] line-height-[120%] font-serif italic text-center"
              >
                {{ localizedWork.title }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-enter-active .relative,
.modal-leave-active .relative {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .relative {
  transform: scale(0.95);
}

.modal-leave-to .relative {
  transform: scale(0.95);
}

@media (min-width: 1024px) {
  .left-line::before {
    content: '';
    position: absolute;
    height: 1px;
    width: 100vw;
    background-color: rgba(255, 255, 255, 0.15);
    left: 0;
    top: 50%;
    transform: translateX(-100%);
  }

  .right-line::before {
    content: '';
    position: absolute;
    height: 1px;
    width: 100vw;
    background-color: rgba(255, 255, 255, 0.15);
    right: 0;
    top: 50%;
    transform: translateX(100%);
  }
}

.keypoint {
  @apply flex flex-col justify-center items-center px-[27px] py-[9px] gap-[10px] min-w-8 bg-[rgba(255,255,255,0.02)] shadow-[0_4px_21.4px_rgba(0,0,0,0.25),inset_-1px_12px_23.7px_rgba(255,255,255,0.01),inset_6px_-8px_13.2px_rgba(255,255,255,0.23)] backdrop-blur-[3.75px] rounded-[50px];
}
</style>

<i18n>
  {
    "en": {
      "close": "Close",
      "our_role_in_project": "OUR ROLE IN THIS PROJECT"
    },
    "ar": {
      "close": "إغلاق",
      "our_role_in_project": "دورنا في هذا المشروع"
    }
  }
</i18n>
