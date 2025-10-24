<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18nExtended } from '~/composables/use_i18n_extended'

const { arabic, dir, t } = useI18nExtended()
const activeSection = ref<string | null>(null)
const isScrolling = ref(false)
let timeoutId: ReturnType<typeof setTimeout> | null = null

const sections = computed(() => [
  { id: 'company-info', title: t('legal_disclaimer_page.nav.company_info') },
  { id: 'responsible', title: t('legal_disclaimer_page.nav.responsible') },
  { id: 'hosting', title: t('legal_disclaimer_page.nav.hosting') },
  { id: 'intellectual-property', title: t('legal_disclaimer_page.nav.intellectual_property') },
  { id: 'liability', title: t('legal_disclaimer_page.nav.liability') },
  { id: 'applicable-law', title: t('legal_disclaimer_page.nav.applicable_law') },
  { id: 'personal-data', title: t('legal_disclaimer_page.nav.personal_data') },
  { id: 'cookies', title: t('legal_disclaimer_page.nav.cookies') },
])

const handleNavClick = (e: Event, sectionId: string) => {
  e.preventDefault()

  // Empêcher les clics pendant qu'une animation est en cours
  if (isScrolling.value) return

  // Annuler le timeout précédent s'il existe
  if (timeoutId !== null) {
    clearTimeout(timeoutId)
  }

  isScrolling.value = true
  activeSection.value = sectionId
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    timeoutId = setTimeout(() => {
      activeSection.value = null
      isScrolling.value = false
      timeoutId = null
    }, 1000)
  }
}
</script>

<template>
  <section class="mt-14 lg:mt-32 mx-5" :dir>
    <h1 class="text-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif italic">
      {{ t('legal_disclaimer_page.page_title') }}
    </h1>
    <p
      :class="arabic ? 'pt-3 italic' : ''"
      class="mx-auto sm:text-lg md:text-xl lg:text-2xl text-center max-w-[55ch] my-10"
    >
      {{ t('legal_disclaimer_page.page_description') }}
    </p>
    <span class="separator"></span>

    <div class="flex flex-nowrap items-stretch mt-16">
      <aside
        class="hidden lg:flex lg:w-[35%] flex-col border-e-1 border-white border-opacity-[15%]"
      >
        <nav class="sticky top-32 flex flex-col gap-1 w-fit">
          <a
            v-for="{ id, title } in sections"
            :key="id"
            :href="`#${id}`"
            @click="(e) => handleNavClick(e, id)"
            :class="['px-5 py-2 rounded-xl', { glass: activeSection === id }]"
          >
            {{ title }}
          </a>
        </nav>
      </aside>

      <div class="w-full">
        <div class="flex flex-col gap-12 lg:ms-32">
          <div
            id="company-info"
            :class="[
              'section-wrapper',
              { dimmed: activeSection && activeSection !== 'company-info' },
            ]"
          >
            <h2 class="text-xl font-semibold mb-6">
              {{ t('legal_disclaimer_page.company_info.title') }}
            </h2>
            <div class="section-content">
              <p>
                <strong>{{ t('legal_disclaimer_page.company_info.company_name_label') }}</strong>
                Mynte Studio Webdesign
              </p>
              <p>
                <strong>{{ t('legal_disclaimer_page.company_info.legal_form_label') }}</strong>
                {{ t('legal_disclaimer_page.company_info.legal_form_value') }}
              </p>
              <p>
                <strong>{{ t('legal_disclaimer_page.company_info.trade_license_label') }}</strong>
                69477
              </p>
              <p>
                <strong>{{
                  t('legal_disclaimer_page.company_info.registered_address_label')
                }}</strong>
                <span class="font-en">
                  IFZA Business Park, Dubai Digital Park (DDP), PO Box 242001, Dubai, United Arab
                  Emirates
                </span>
              </p>
              <p>
                <strong>{{ t('legal_disclaimer_page.company_info.email_label') }}</strong>
                <span class="font-en">hello@mynte.studio</span>
              </p>
              <p>
                <strong>{{ t('legal_disclaimer_page.company_info.phone_label') }}</strong>
                <span class="font-en">+33 7 43 62 44 01</span>
              </p>
              <p>{{ t('legal_disclaimer_page.company_info.description') }}</p>
            </div>
          </div>

          <div
            id="responsible"
            :class="[
              'section-wrapper',
              { dimmed: activeSection && activeSection !== 'responsible' },
            ]"
          >
            <h2 class="text-xl font-semibold mb-6">
              {{ t('legal_disclaimer_page.responsible.title') }}
            </h2>
            <div class="section-content">
              <p>
                <strong>{{ t('legal_disclaimer_page.responsible.publisher_label') }}</strong> Mynte
                Studio Webdesign LLC
              </p>
              <p>
                <strong>{{
                  t('legal_disclaimer_page.responsible.responsible_for_content_label')
                }}</strong>
                <span class="font-en">Mehmet Badem & Youcef Douifi</span>
              </p>
              <p>{{ t('legal_disclaimer_page.responsible.description') }}</p>
            </div>
          </div>

          <div
            id="hosting"
            :class="['section-wrapper', { dimmed: activeSection && activeSection !== 'hosting' }]"
          >
            <h2 class="text-xl font-semibold mb-6">
              {{ t('legal_disclaimer_page.hosting.title') }}
            </h2>
            <div class="section-content">
              <p>
                <strong>{{ t('legal_disclaimer_page.hosting.hosting_provider_label') }}</strong>
                Hetzner Online GmbH
              </p>
              <p>
                <strong>{{ t('legal_disclaimer_page.hosting.address_label') }}</strong>
                <span class="font-en">Industriestr. 25, 91710 Gunzenhausen, Germany</span>
              </p>
              <p>
                <strong>{{ t('legal_disclaimer_page.hosting.email_label') }}</strong>
                <span class="font-en">support@hetzner.com</span>
              </p>
              <p>{{ t('legal_disclaimer_page.hosting.description') }}</p>
            </div>
          </div>

          <div
            id="intellectual-property"
            :class="[
              'section-wrapper',
              { dimmed: activeSection && activeSection !== 'intellectual-property' },
            ]"
          >
            <h2 class="text-xl font-semibold mb-6">
              {{ t('legal_disclaimer_page.intellectual_property.title') }}
            </h2>
            <div class="section-content">
              <p>{{ t('legal_disclaimer_page.intellectual_property.paragraph_1') }}</p>
              <p>{{ t('legal_disclaimer_page.intellectual_property.paragraph_2') }}</p>
              <p>{{ t('legal_disclaimer_page.intellectual_property.paragraph_3') }}</p>
            </div>
          </div>

          <div
            id="liability"
            :class="['section-wrapper', { dimmed: activeSection && activeSection !== 'liability' }]"
          >
            <h2 class="text-xl font-semibold mb-6">
              {{ t('legal_disclaimer_page.liability.title') }}
            </h2>
            <div class="section-content">
              <p>{{ t('legal_disclaimer_page.liability.paragraph_1') }}</p>
              <p>{{ t('legal_disclaimer_page.liability.paragraph_2') }}</p>
              <p>{{ t('legal_disclaimer_page.liability.paragraph_3') }}</p>
            </div>
          </div>

          <div
            id="applicable-law"
            :class="[
              'section-wrapper',
              { dimmed: activeSection && activeSection !== 'applicable-law' },
            ]"
          >
            <h2 class="text-xl font-semibold mb-6">
              {{ t('legal_disclaimer_page.applicable_law.title') }}
            </h2>
            <div class="section-content">
              <p>{{ t('legal_disclaimer_page.applicable_law.paragraph_1') }}</p>
              <p>{{ t('legal_disclaimer_page.applicable_law.paragraph_2') }}</p>
              <p>{{ t('legal_disclaimer_page.applicable_law.paragraph_3') }}</p>
            </div>
          </div>

          <div
            id="personal-data"
            :class="[
              'section-wrapper',
              { dimmed: activeSection && activeSection !== 'personal-data' },
            ]"
          >
            <h2 class="text-xl font-semibold mb-6">
              {{ t('legal_disclaimer_page.personal_data.title') }}
            </h2>
            <div class="section-content">
              <p>{{ t('legal_disclaimer_page.personal_data.paragraph_1') }}</p>
              <p>{{ t('legal_disclaimer_page.personal_data.paragraph_2') }}</p>
              <p>{{ t('legal_disclaimer_page.personal_data.paragraph_3') }}</p>
              <p>{{ t('legal_disclaimer_page.personal_data.paragraph_4') }}</p>
            </div>
          </div>

          <div
            id="cookies"
            :class="['section-wrapper', { dimmed: activeSection && activeSection !== 'cookies' }]"
          >
            <h2 class="text-xl font-semibold mb-6">
              {{ t('legal_disclaimer_page.cookies.title') }}
            </h2>
            <div class="section-content">
              <p>{{ t('legal_disclaimer_page.cookies.paragraph_1') }}</p>
              <p>{{ t('legal_disclaimer_page.cookies.paragraph_2') }}</p>
              <p>{{ t('legal_disclaimer_page.cookies.paragraph_3') }}</p>
              <p>{{ t('legal_disclaimer_page.cookies.paragraph_4') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-content {
  @apply flex flex-col gap-4 border-b-1 border-white border-opacity-[15%] pb-12 text-justify;
}

.section-wrapper {
  @apply transition-opacity duration-300;
}

.section-wrapper.dimmed {
  @apply opacity-30;
}
</style>
