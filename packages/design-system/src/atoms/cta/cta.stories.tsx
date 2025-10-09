import { Cta, CtaVariant } from './cta'
import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ComponentProps } from 'react'

const meta = {
  title: 'Atoms/CTA',
  component: Cta,
  argTypes: {
    variant: {
      control: 'select',
      options: CtaVariant,
    },
  },
} satisfies Meta<typeof Cta>

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    variant: 'primary',
    children: 'book a call',
    href: 'example',
  },
  render: (args) => {
    const { variant, children, href } = args as ComponentProps<typeof Cta> & {
      href: string
    }
    return (
      <Cta as="a" href={href} variant={variant}>
        {children}
      </Cta>
    )
  },
}
