import { Resend } from 'resend';

const domain = process.env.NEXT_PUBLIC_APP_URL;
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: [email],
    subject: '2FA Code',
    text: 'it works!',
    html: `
    <p>Your 2FA code is: ${token}</p>
  `,
    headers: {
      'X-Entity-Ref-ID': '123456789',
    },
    tags: [
      {
        name: 'category',
        value: 'two_factor',
      },
    ],
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: [email],
    subject: 'Reset your password',
    text: 'it works!',
    html: `
    <p>Click <a href="${resetLink}">here</a> to reset your password.</p>
  `,
    headers: {
      'X-Entity-Ref-ID': '123456789',
    },
    tags: [
      {
        name: 'category',
        value: 'reset_password',
      },
    ],
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;
  await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: [email],
    subject: 'Confirm your email',
    text: 'it works!',

    html: `
    <p>Click <a href="${confirmLink}">here</a> to confirm email.</p>
  `,
    headers: {
      'X-Entity-Ref-ID': '123456789',
    },
    tags: [
      {
        name: 'category',
        value: 'confirm_email',
      },
    ],
  });
};
