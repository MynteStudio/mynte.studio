import mail from '@adonisjs/mail/services/main'
import type { Infer } from '@vinejs/vine/types'
import type { inquiryValidator } from '#validators/inquiry'

type Params = {
  data: Infer<typeof inquiryValidator>
}

export default class SendInquiry {
  static async handle({ data }: Params) {
    await mail.sendLater((message) => {
      message
        .subject('New client inquiry!')
        .from('admin@mynte.studio')
        .to('hello@mynte.studio')
        .htmlView('emails/new_inquiry', {
          data,
        })
    })
  }
}
