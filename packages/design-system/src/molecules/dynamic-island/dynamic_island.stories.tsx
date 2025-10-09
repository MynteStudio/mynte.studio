import { DynamicIsland } from './dynamic_island'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Molecules/Dynamic Island',
  component: DynamicIsland,
} satisfies Meta<typeof DynamicIsland>

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
  render: (_args) => (
    <>
      <div className="relative w-[600px]">
        <DynamicIsland />
      </div>
    </>
  ),
}
