import SendInquiry from '#inquiry/actions/send_inquiry'
import { inquiryValidator } from '#inquiry/validators/inquiry'
import type { HttpContext } from '@adonisjs/core/http'

export default class InquiryController {
  async execute({ request, response, session }: HttpContext) {
    const payload = await request.validateUsing(inquiryValidator)

    await SendInquiry.handle({ data: payload })
    session.flash('success', { message: 'Your request has been sent!' })

    return response.redirect().back()
  }
}
