import { useForm } from '@inertiajs/react'
import { toaster } from '@mynte/design-system/toast'
import { Field } from '@mynte/design-system/field'
import { useState } from 'react'
import { tuyau } from '~/core/providers/tuyau'
import { usePageErrors } from '~/hooks/use_page_errors'
import type { FormEvent } from 'react'
import { Cta } from '@mynte/design-system/cta'

export const InquiryForm = () => {
  const errors = usePageErrors()

  const form = useForm({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    message: '',
  })

  const [isSent, setIsSent] = useState<boolean>(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    form.post(tuyau.$url('inquiry.execute'), {
      preserveScroll: true,
      onSuccess: () => {
        form.reset()
        setIsSent(true)
        toaster.create({ title: 'Inquiry sent!', description: 'We’ll get back to you soon :)' })
      },
      onError: () => {
        toaster.create({
          title: 'An error occurred',
          description: 'Please look at the form for more details',
        })
      },
    })
  }

  return (
    <>
      <section className="mt-18 px-5">
        <h2 className="text-principal font-serif italic font-normal">
          We'd love to work with you!
        </h2>

        <form
          method="post"
          action={tuyau.$url('inquiry.execute')}
          onSubmit={handleSubmit}
          className="mt-18 flex flex-wrap gap-10 justify-end"
        >
          <div className="flex flex-col md:flex-row w-full gap-10">
            <Field
              className="w-[50%]"
              label="First name"
              value={form.data.firstName}
              onChange={(e) => form.setData('firstName', e.target.value)}
              errorMessage={form.errors.firstName}
              required
            />

            <Field
              className="w-[50%]"
              label="Last name"
              value={form.data.lastName}
              onChange={(e) => form.setData('lastName', e.target.value)}
              errorMessage={form.errors.lastName}
              required
            />
          </div>

          <Field
            label="Your company"
            value={form.data.companyName}
            onChange={(e) => form.setData('companyName', e.target.value)}
            errorMessage={form.errors.companyName}
          />

          <Field
            label="Email"
            value={form.data.email}
            onChange={(e) => form.setData('email', e.target.value)}
            errorMessage={form.errors.email}
            required
          />

          <Field
            label="Message"
            type="textarea"
            value={form.data.message}
            onChange={(e) => form.setData('message', e.target.value)}
            errorMessage={form.errors.message}
            rows={5}
            required
          />

          <div className="flex flex-col mx-auto md:mx-0 md:flex-row gap-8 items-center">
            {errors.code === 'E_TOO_MANY_REQUESTS' && (
              <span className="text-red">Too many requests! Please retry in 1 minute.</span>
            )}

            {isSent && !errors.code && <span>Your request has been sent!</span>}

            <Cta as="button" type="submit" disabled={form.processing}>
              Submit
            </Cta>
          </div>
        </form>
      </section>
    </>
  )
}
