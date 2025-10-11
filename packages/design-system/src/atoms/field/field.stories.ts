import { Field } from './field'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Atoms/Field',
  component: Field,
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'textarea'],
    },
    required: {
      control: 'boolean',
    },
    onChange: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof Field>

export default meta

type Story = StoryObj<typeof meta>

export const Input: Story = {
  args: {
    label: 'Your name',
    type: 'text',
  },
}

export const Required: Story = {
  args: {
    label: 'Email address',
    type: 'email',
    required: true,
  },
}

export const WithError: Story = {
  args: {
    label: 'Password',
    type: 'password',
    errorMessage: 'Password is required',
  },
}

export const TextArea: Story = {
  args: {
    label: 'Your message',
    type: 'textarea',
    rows: 5,
  },
}
