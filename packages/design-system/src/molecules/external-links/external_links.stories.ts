import { ExternalLinks } from './external_links'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Molecules/External Links',
  component: ExternalLinks,
} satisfies Meta<typeof ExternalLinks>

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {}
