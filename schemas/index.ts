import * as z from 'zod';

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'Email is required', // customize the error message if you want
  }),
  password: z.string().min(1, {
    message: 'Password is required ',
  }),
});

// export const RegisterSchema = LoginSchema.extend({
//   name: z.string().min(1, {
//     message: 'Name is required',
//   }),
//   username: z.string().min(1, {
//     message: 'Username is required',
//   }),
//   password: z.string().min(1, {
//     message: 'Password is required',
//   }),
//   confirmPassword: z.string().min(1, {
//     message: 'Confirm password is required',
//   }),
//   acceptTerms: z.literal(true, {
//     errorMap: () => ({ message: 'You must accept the terms and conditions' }),
//   }),
// });
