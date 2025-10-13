import { ReactNode } from 'react'

interface SectionTitleProps {
  children: ReactNode
  parenthesis?: string
}

export const SectionTitle = ({ children, parenthesis }: SectionTitleProps) => {
  return (
    <h2 className="border-b-1 border-light font-medium text-2xl items-end gap-2 pb-2">
      {children}
      {parenthesis && <span className="font-light italic text-xl">({parenthesis})</span>}
    </h2>
  )
}
