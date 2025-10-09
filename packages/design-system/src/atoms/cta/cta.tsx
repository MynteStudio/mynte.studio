import { Link, type InertiaLinkProps } from '@inertiajs/react'
import { tv, type VariantProps } from 'tailwind-variants/lite'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

const ctaStyles = tv({
  base: 'flex justify-center items-center w-[152px] h-[40px] cursor-pointer text-lg rounded-full transition-all duration-200',
  variants: {
    type: {
      primary:
        'bg-[linear-gradient(180deg,rgba(255,255,255,0.27)_0%,rgba(0,0,0,1)_32%,rgba(0,0,0,1)_54%,rgba(255,255,255,0.27)_100%)] hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.37)_0%,rgba(0,0,0,1)_32%,rgba(0,0,0,1)_54%,rgba(255,255,255,0.37)_100%)] border border-white/10 backdrop-blur-[18px] backdrop-saturate-[160%] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_12px_34px_rgba(0,0,0,0.7)] focus:border-[#fff]/60 focus:ring-[0_0_0_3px_rgba(255,255,255,0.15)] hover:glass',
      secondary:
        'hover:glass hover:bg-[rgba(255,255,255,0.1)] hover:text-white transition-all duration-700 bg-white text-black',
    },
  },
  defaultVariants: {
    type: 'primary',
  },
})

type CtaVariants = VariantProps<typeof ctaStyles>

export const CtaType = ['primary', 'secondary'] as const
export type CtaType = (typeof CtaType)[number]

type CtaAsButton = {
  as?: 'button'
  type?: CtaType
  onClick?: () => void
  children: React.ReactNode
} & CtaVariants &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'className'>

type CtaAsLink = {
  as: 'a'
  type?: CtaType
  href: string
  onClick?: () => void
  children: React.ReactNode
} & CtaVariants &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'>

type CtaAsInertiaLink = {
  as: 'link'
  type?: CtaType
  href: string
  children: React.ReactNode
} & CtaVariants &
  Omit<InertiaLinkProps, 'className'>

type CtaProps = CtaAsButton | CtaAsLink | CtaAsInertiaLink

export const Cta = ({ type = 'primary', children, ...props }: CtaProps) => {
  if (props.as === 'a') {
    const { as, ...linkProps } = props
    return (
      <a className={ctaStyles({ type })} {...linkProps}>
        {children}
      </a>
    )
  }

  if (props.as === 'link') {
    const { as, ...inertiaProps } = props
    return (
      <Link className={ctaStyles({ type })} {...inertiaProps}>
        {children}
      </Link>
    )
  }

  const { as, ...buttonProps } = props
  return (
    <button className={ctaStyles({ type })} {...buttonProps}>
      {children}
    </button>
  )
}
