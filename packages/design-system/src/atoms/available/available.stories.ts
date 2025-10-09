import { Available } from './available'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Atoms/Available',
  component: Available,
} satisfies Meta<typeof Available>

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {}
