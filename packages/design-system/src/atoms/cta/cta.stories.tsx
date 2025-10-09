import { Cta, CtaType } from './cta'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Atoms/CTA',
  component: Cta,
  argTypes: {
    type: {
      control: 'select',
      options: CtaType,
    },
  },
} satisfies Meta<typeof Cta>

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    type: 'primary',
    children: 'book a call',
  },
  render: (args) => {
    return (
      <Cta as="button" type={args.type}>
        {args.children}
      </Cta>
    )
  },
}
