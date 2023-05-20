import { z } from 'zod'

export const LoginSchema = z.object({
  username: z
    .string({ required_error: 'Username is required.' })
    .nonempty('Username is required.'),
  password: z
    .string({ required_error: 'Password is required.' })
    .nonempty('Password is required.'),
})
export type LoginInputs = z.infer<typeof LoginSchema>

export const SingUpSchema = z
  .object({
    username: z
      .string({ required_error: 'Username is required.' })
      .nonempty('Username is required.')
      .min(3, 'Username must be at least 3 characters long.')
      .max(150, 'Username length must be between 3 to 150 characters.'),
    password: z
      .string({ required_error: 'Password is required.' })
      .nonempty('Password is required.')
      .min(8, 'Password must be at least 8 characters long.')
      .max(72, 'Password length must be between 8 to 72 characters.'),
    passwordConfirm: z
      .string({ required_error: 'Please enter password again.' })
      .nonempty('Please enter password again.'),
  })
  .superRefine(({ passwordConfirm, password }, ctx) => {
    if (passwordConfirm !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'The passwords did not match',
        path: ['passwordConfirm'],
      })
    }
  })
export type SingUpInputs = z.infer<typeof SingUpSchema>
