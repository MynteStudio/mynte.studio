import vine from '@vinejs/vine'

export const inquiryValidator = vine.compile(
  vine.object({
    fullName: vine.string().trim(),
    companyName: vine.string().trim().optional(),
    email: vine.string().trim().email().normalizeEmail(),
    service: vine.string().in(['logo', 'marketing', 'seo', 'software', 'webdesign', 'other']),
    message: vine.string().trim().optional(),
  })
)
