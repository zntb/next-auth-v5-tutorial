import { Resend } from 'resend';

const domain = process.env.NEXT_PUBLIC_APP_URL;
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: 'mail@auth-masterclass-tutorial.com',
    to: email,
    subject: 'Confirm your email',
    html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
  });
};
