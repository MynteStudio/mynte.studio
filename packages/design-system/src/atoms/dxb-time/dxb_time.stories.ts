import { DxbTime } from './dxb_time'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Atoms/Dubai Time',
  component: DxbTime,
} satisfies Meta<typeof DxbTime>

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {}
