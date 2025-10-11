import { Logo } from './logo'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Atoms/Logo',
  component: Logo,
} satisfies Meta<typeof Logo>

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    size: 'default',
  },
}
export const Small: Story = {
  args: {
    size: 'small',
  },
}

export const AllVariants: Story = {
  argTypes: {
    size: { table: { disable: true } },
  },
  render: () => (
    <div className="flex gap-4 items-center">
      <Logo />
      <Logo size="small" />
    </div>
  ),
}
