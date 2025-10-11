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

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'book a call',
  },
  render: (args) => {
    const { variant, children } = args as ComponentProps<typeof Cta>
    return (
      <Cta as="button" variant={variant}>
        {children}
      </Cta>
    )
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'visit our blog',
  },
  render: (args) => {
    const { variant, children } = args as ComponentProps<typeof Cta>
    return (
      <Cta as="button" variant={variant}>
        {children}
      </Cta>
    )
  },
}
