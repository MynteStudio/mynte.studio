import { Information } from './information'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Atoms/Information',
  component: Information,
} satisfies Meta<typeof Information>

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    type: 'Information',
    message:
      'You’re browsing on our temporary website! We’re currently working on the new version.',
  },
  render: (args) => {
    return (
      <div className="w-screen">
        <Information type={args.type} message={args.message} />
      </div>
    )
  },
}
