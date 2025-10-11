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

export const AllVariants: Story = {
  argTypes: {
    type: { table: { disable: true } },
    errorMessage: { table: { disable: true } },
    value: { table: { disable: true } },
    required: { table: { disable: true } },
    rows: { table: { disable: true } },
  },
  args: {
    label: 'Your message',
  },
  render: (args) => (
    <>
      <div className="flex flex-col gap-15">
        <div className="flex gap-4">
          <Field label={args.label} />
          <Field label={args.label} required />
          <Field label={args.label} errorMessage="This field is required" />
        </div>
        <Field label={args.label} type="textarea" rows={5} />
      </div>
    </>
  ),
}
