import { ToastRoot, ToastTitle, ToastDescription, Toaster } from '@ark-ui/react/toast'
import styles from './toast.module.css'
import { toaster } from './toaster'

export const Toast = () => {
  return (
    <Toaster toaster={toaster}>
      {(toast) => (
        <ToastRoot key={toast.id} className={`${styles.root} glass rounded-2xl py-3 px-5 min-w-96`}>
          <ToastTitle className="font-semibold">{toast.title}</ToastTitle>
          <ToastDescription>{toast.description}</ToastDescription>
        </ToastRoot>
      )}
    </Toaster>
  )
}
