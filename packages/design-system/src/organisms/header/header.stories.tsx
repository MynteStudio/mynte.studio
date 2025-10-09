import { Header } from './header'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Organisms/Header',
  component: Header,
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {}
