import { Cta } from '../cta/cta'
import { Toast } from './toast'
import { toaster } from './toaster'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Atoms/Toast',
  component: Toast,
} satisfies Meta<typeof Toast>

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
  render: (_) => {
    return (
      <>
        <Cta
          as="button"
          onClick={() => {
            toaster.create({ title: 'Inquiry sent!', description: "We'll get back to you soon" })
          }}
        >
          add toast
        </Cta>
        <Toast />
      </>
    )
  },
}
