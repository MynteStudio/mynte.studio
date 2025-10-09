import { Field } from './field'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Atoms/Field',
  component: Field,
  argTypes: {
    type: {
      options: ['text', 'textarea'],
      control: 'select',
    },
  },
} satisfies Meta<typeof Field>

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    label: 'Label',
    type: 'textarea',
  },
}
