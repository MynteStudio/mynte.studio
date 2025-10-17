import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export function useI18nExtended() {
  const i18n = useI18n()
  const dir = computed(() => (i18n.locale.value === 'ar' ? 'rtl' : 'ltr'))
  const arabic = computed(() => i18n.locale.value === 'ar')
  const english = computed(() => i18n.locale.value === 'en')

  return {
    arabic,
    dir,
    english,
    ...i18n,
  }
}
