import { UserRole } from '@prisma/client';
import * as z from 'zod';

export const SettingsSchema = z
  .object({
    name: z.optional(
      z.string().min(3, 'Name is too short').max(20, 'Name is too long!')
    ),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.USER, UserRole.ADMIN]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6, 'Password is too short')),
    newPassword: z.optional(z.string().min(6, 'Password is too short')),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }
      return true;
    },
    {
      message: 'New password is required',
      path: ['newPassword'],
    }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }
      return true;
    },
    {
      message: 'Password is required',
      path: ['password'],
    }
  )
  .refine(
    (data) => {
      if (data.newPassword && data.newPassword === data.password) {
        return false;
      }
      return true;
    },
    {
      message: 'New password cannot be the same as old password',
      path: ['newPassword'],
    }
  );

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: 'Minimum 6 characters required',
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'Email is required', // customize the error message if you want
  }),
  password: z.string().min(1, {
    message: 'Password is required ',
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
  password: z.string().min(6, {
    message: 'Password is required and should be at least 6 characters',
  }),
  name: z.string().min(1, {
    message: 'Name is required',
  }),
});
