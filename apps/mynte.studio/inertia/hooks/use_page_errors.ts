import { usePage } from '@inertiajs/react'

export function usePageErrors() {
  const { props } = usePage()
  return props.errors || {}
}
