import { TextSection } from './text_section'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Atoms/Text Section',
  component: TextSection,
} satisfies Meta<typeof TextSection>

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    title: 'wait, who are you?',
    text: 'We’re a digital agency based in Dubai, here to bring your projects to reality. We create websites, apps, graphic designs, advertising, and more with passion and creativity.',
  },
}

export const Stretch: Story = {
  args: {
    title: 'wait, who are you?',
    text: 'We’re a digital agency based in Dubai, here to bring your projects to reality. We create websites, apps, graphic designs, advertising, and more with passion and creativity.',
  },
  render: (args) => {
    return (
      <div className="w-[30rem]">
        <TextSection title={args.title} text={args.text} />
      </div>
    )
  },
}
