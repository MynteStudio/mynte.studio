import { Icon, IconName } from './icon'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Atoms/Icon',
  component: Icon,
  argTypes: {
    name: {
      control: 'select',
      options: IconName,
    },
  },
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    name: 'behance',
  },
}
