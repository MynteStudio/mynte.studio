import vine from '@vinejs/vine'

export const inquiryValidator = vine.compile(
  vine.object({
    firstName: vine.string().trim().minLength(1),
    lastName: vine.string().trim().minLength(1),
    companyName: vine.string().trim().optional(),
    email: vine.string().trim().email().normalizeEmail(),
    message: vine.string().trim().minLength(30),
  }),
)
