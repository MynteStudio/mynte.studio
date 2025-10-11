import { Link, type InertiaLinkProps } from '@inertiajs/react'
import { tv, type VariantProps } from 'tailwind-variants/lite'
import styles from './cta.module.css'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

const ctaStyles = tv({
  base: 'flex justify-center items-center min-w-[9.5rem] h-[2.5rem] px-5 cursor-pointer text-lg rounded-full font-semibold transition-all duration-300 ease-out',
  variants: {
    variant: {
      primary:
        'relative overflow-hidden border border-white/50 hover:border-white/15 bg-white/20 focus-visible:bg-white/30 hover:bg-white/30 backdrop-blur-sm text-white ring-1 ring-offset-white/10 ring-white/10 ring-offset-2 hover:ring-white/15 hover:ring-offset-4 hover:ring-offset-black/20 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] focus-visible:outline-none focus-visible:border-white/15 focus-visible:ring-1 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-white/20',
      secondary:
        'hover:glass hover:bg-[rgba(255,255,255,0.1)] hover:text-white transition-all duration-700 bg-white text-black',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

type CtaVariants = VariantProps<typeof ctaStyles>

export const CtaVariant = ['primary', 'secondary'] as const
export type CtaVariant = (typeof CtaVariant)[number]

type CtaAsButton = {
  as?: 'button'
  variant?: CtaVariant
  onClick?: () => void
  children: React.ReactNode
} & CtaVariants &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>

type CtaAsLink = {
  as: 'a'
  variant?: CtaVariant
  href: string
  onClick?: () => void
  children: React.ReactNode
} & CtaVariants &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'>

type CtaAsInertiaLink = {
  as: 'link'
  variant?: CtaVariant
  href: string
  children: React.ReactNode
} & CtaVariants &
  Omit<InertiaLinkProps, 'className'>

type CtaProps = CtaAsButton | CtaAsLink | CtaAsInertiaLink

export const Cta = ({ variant = 'primary', children, ...props }: CtaProps) => {
  const content =
    variant === 'primary' ? (
      <>
        <span
          className={`${styles.primary} absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)] pointer-events-none`}
        />
        <span className="relative z-1">{children}</span>
      </>
    ) : (
      children
    )

  if (props.as === 'a') {
    const { as, ...linkProps } = props
    return (
      <a className={ctaStyles({ variant })} {...linkProps}>
        {content}
      </a>
    )
  }

  if (props.as === 'link') {
    const { as, ...inertiaProps } = props
    return (
      <Link className={ctaStyles({ variant })} {...inertiaProps}>
        {content}
      </Link>
    )
  }

  const { as, ...buttonProps } = props
  return (
    <button className={ctaStyles({ variant })} {...buttonProps}>
      {content}
    </button>
  )
}
