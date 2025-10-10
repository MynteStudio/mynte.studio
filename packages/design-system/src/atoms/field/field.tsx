import {
  FieldRoot,
  FieldInput,
  FieldErrorText,
  FieldTextarea,
  type FieldInputProps,
} from '@ark-ui/react/field'
import styles from './field.module.css'
import type { ChangeEvent } from 'react'

export type FieldType = FieldInputProps['type'] | 'textarea'

interface FieldProps {
  label: string
  type?: FieldType
  errorMessage?: string
  value?: string
  required?: boolean
  rows?: number
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  [key: string]: any
}

export const Field = ({
  label,
  type = 'text',
  errorMessage,
  value,
  required = false,
  onChange,
  rows,
  ...rest
}: FieldProps) => {
  const invalid = typeof errorMessage !== 'undefined'
  const FieldComponent = type === 'textarea' ? FieldTextarea : FieldInput
  return (
    <FieldRoot invalid={invalid} className={`${styles.root} relative w-full`}>
      <FieldComponent
        {...rest}
        value={value}
        onChange={onChange}
        required={required}
        type={type !== 'textarea' ? type : undefined}
        rows={type === 'textarea' ? rows : undefined}
        className="relative placeholder-[#939393] bg-gradient-to-b from-[#303030] to-[rgba(48,48,48,0.7)] focus:glass focus:border-none flex w-full py-2 px-5 rounded-3xl outline-none"
        placeholder={label + (required ? '*' : '')}
      />

      <FieldErrorText className="absolute left-0 bottom-[-2rem] text-red lowercase">
        {errorMessage}
      </FieldErrorText>
    </FieldRoot>
  )
}
