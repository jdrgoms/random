import * as z from 'zod'

export const FormSchema = z.object({
  destination: z.string({
    required_error: 'select an place',
  }),
  startDate: z.date({
    required_error: 'select an date',
  }),
  endDate: z.date({
    required_error: 'select an date',
  }),
})
