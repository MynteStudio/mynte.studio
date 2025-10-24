<script setup lang="ts">
import { ref } from 'vue'
import { useI18nExtended } from '~/composables/use_i18n_extended'

const { t } = useI18nExtended()
const activeSection = ref<string | null>(null)

const sections = [
  { id: 'company-info', title: t('terms_of_service_page.nav.company_info') },
  { id: 'services-provided', title: t('terms_of_service_page.nav.services_provided') },
  { id: 'acceptance', title: t('terms_of_service_page.nav.acceptance') },
  { id: 'pricing', title: t('terms_of_service_page.nav.pricing') },
  { id: 'duration', title: t('terms_of_service_page.nav.duration') },
  { id: 'responsibilities', title: t('terms_of_service_page.nav.responsibilities') },
  { id: 'intellectual-property', title: t('terms_of_service_page.nav.intellectual_property') },
  { id: 'confidentiality', title: t('terms_of_service_page.nav.confidentiality') },
  { id: 'applicable-law', title: t('terms_of_service_page.nav.applicable_law') },
  { id: 'contact', title: t('terms_of_service_page.nav.contact') },
]

const handleNavClick = (e: Event, sectionId: string) => {
  e.preventDefault()
  activeSection.value = sectionId
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    setTimeout(() => (activeSection.value = null), 1000)
  }
}
</script>

<template>
  <section class="mt-14 lg:mt-32 mx-5">
    <h1 class="text-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif italic">
      {{ t('terms_of_service_page.page_title') }}
    </h1>
    <p class="mx-auto sm:text-lg md:text-xl lg:text-2xl text-center max-w-[55ch] my-10">
      {{ t('terms_of_service_page.page_description') }}
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
              {{ t('terms_of_service_page.company_info.title') }}
            </h2>
            <div class="section-content">
              <p>{{ t('terms_of_service_page.company_info.paragraph_1') }}</p>
              <p>{{ t('terms_of_service_page.company_info.paragraph_2') }}</p>
              <p>
                <strong>{{ t('terms_of_service_page.company_info.contact_label') }}</strong>
                <span class="font-en">
                  {{ t('terms_of_service_page.company_info.email_phone') }}
                </span>
              </p>
            </div>
          </div>

          <div
            id="services-provided"
            :class="[
              'section-wrapper',
              { dimmed: activeSection && activeSection !== 'services-provided' },
            ]"
          >
            <h2 class="text-xl font-semibold mb-6">
              {{ t('terms_of_service_page.services_provided.title') }}
            </h2>
            <div class="section-content">
              <p>{{ t('terms_of_service_page.services_provided.paragraph_1') }}</p>
              <p>{{ t('terms_of_service_page.services_provided.paragraph_2') }}</p>
              <p>{{ t('terms_of_service_page.services_provided.paragraph_3') }}</p>
              <p>{{ t('terms_of_service_page.services_provided.paragraph_4') }}</p>
            </div>
          </div>

          <div
            id="acceptance"
            :class="[
              'section-wrapper',
              { dimmed: activeSection && activeSection !== 'acceptance' },
            ]"
          >
            <h2 class="text-xl font-semibold mb-6">
              {{ t('terms_of_service_page.acceptance.title') }}
            </h2>
            <div class="section-content">
              <p>{{ t('terms_of_service_page.acceptance.paragraph_1') }}</p>
              <p>{{ t('terms_of_service_page.acceptance.paragraph_2') }}</p>
              <p>{{ t('terms_of_service_page.acceptance.paragraph_3') }}</p>
              <p>{{ t('terms_of_service_page.acceptance.paragraph_4') }}</p>
            </div>
          </div>

          <div
            id="pricing"
            :class="['section-wrapper', { dimmed: activeSection && activeSection !== 'pricing' }]"
          >
            <h2 class="text-xl font-semibold mb-6">
              {{ t('terms_of_service_page.pricing.title') }}
            </h2>
            <div class="section-content">
              <p>{{ t('terms_of_service_page.pricing.paragraph_1') }}</p>
              <p>{{ t('terms_of_service_page.pricing.paragraph_2') }}</p>
              <p>{{ t('terms_of_service_page.pricing.paragraph_3') }}</p>
              <p>{{ t('terms_of_service_page.pricing.paragraph_4') }}</p>
              <p>{{ t('terms_of_service_page.pricing.paragraph_5') }}</p>
            </div>
          </div>

          <div
            id="duration"
            :class="['section-wrapper', { dimmed: activeSection && activeSection !== 'duration' }]"
          >
            <h2 class="text-xl font-semibold mb-6">
              {{ t('terms_of_service_page.duration.title') }}
            </h2>
            <div class="section-content">
              <p>{{ t('terms_of_service_page.duration.paragraph_1') }}</p>
              <p>{{ t('terms_of_service_page.duration.paragraph_2') }}</p>
              <p>{{ t('terms_of_service_page.duration.paragraph_3') }}</p>
              <p>{{ t('terms_of_service_page.duration.paragraph_4') }}</p>
              <p>{{ t('terms_of_service_page.duration.paragraph_5') }}</p>
            </div>
          </div>

          <div
            id="responsibilities"
            :class="[
              'section-wrapper',
              { dimmed: activeSection && activeSection !== 'responsibilities' },
            ]"
          >
            <h2 class="text-xl font-semibold mb-6">
              {{ t('terms_of_service_page.responsibilities.title') }}
            </h2>
            <div class="section-content">
              <p>{{ t('terms_of_service_page.responsibilities.paragraph_1') }}</p>
              <p>{{ t('terms_of_service_page.responsibilities.paragraph_2') }}</p>
              <p>{{ t('terms_of_service_page.responsibilities.paragraph_3') }}</p>
              <p>{{ t('terms_of_service_page.responsibilities.paragraph_4') }}</p>
              <p>{{ t('terms_of_service_page.responsibilities.paragraph_5') }}</p>
              <p>{{ t('terms_of_service_page.responsibilities.paragraph_6') }}</p>
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
              {{ t('terms_of_service_page.intellectual_property.title') }}
            </h2>
            <div class="section-content">
              <p>{{ t('terms_of_service_page.intellectual_property.paragraph_1') }}</p>
              <p>{{ t('terms_of_service_page.intellectual_property.paragraph_2') }}</p>
              <p>{{ t('terms_of_service_page.intellectual_property.paragraph_3') }}</p>
              <p>{{ t('terms_of_service_page.intellectual_property.paragraph_4') }}</p>
              <p>{{ t('terms_of_service_page.intellectual_property.paragraph_5') }}</p>
              <p>{{ t('terms_of_service_page.intellectual_property.paragraph_6') }}</p>
            </div>
          </div>

          <div
            id="confidentiality"
            :class="[
              'section-wrapper',
              { dimmed: activeSection && activeSection !== 'confidentiality' },
            ]"
          >
            <h2 class="text-xl font-semibold mb-6">
              {{ t('terms_of_service_page.confidentiality.title') }}
            </h2>
            <div class="section-content">
              <p>{{ t('terms_of_service_page.confidentiality.paragraph_1') }}</p>
              <p>{{ t('terms_of_service_page.confidentiality.paragraph_2') }}</p>
              <p>{{ t('terms_of_service_page.confidentiality.paragraph_3') }}</p>
              <p>{{ t('terms_of_service_page.confidentiality.paragraph_4') }}</p>
              <p>{{ t('terms_of_service_page.confidentiality.paragraph_5') }}</p>
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
              {{ t('terms_of_service_page.applicable_law.title') }}
            </h2>
            <div class="section-content">
              <p>{{ t('terms_of_service_page.applicable_law.paragraph_1') }}</p>
              <p>{{ t('terms_of_service_page.applicable_law.paragraph_2') }}</p>
              <p>{{ t('terms_of_service_page.applicable_law.paragraph_3') }}</p>
              <p>{{ t('terms_of_service_page.applicable_law.paragraph_4') }}</p>
            </div>
          </div>

          <div
            id="contact"
            :class="['section-wrapper', { dimmed: activeSection && activeSection !== 'contact' }]"
          >
            <h2 class="text-xl font-semibold mb-6">
              {{ t('terms_of_service_page.contact.title') }}
            </h2>
            <div class="section-content">
              <p>{{ t('terms_of_service_page.contact.paragraph_1') }}</p>
              <p>
                <span class="font-en"> {{ t('terms_of_service_page.contact.contact_info') }}</span>
              </p>
              <p>{{ t('terms_of_service_page.contact.paragraph_2') }}</p>
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
