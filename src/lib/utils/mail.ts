import * as dotenv from 'dotenv';
import { Resend } from 'resend';
import { MainEmailTemplate } from '@/components/email-templates/main-template';
import { ReactElement } from 'react';

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

export type EmailData = {
  name: string;
  email: string;
  message: string;
};

export const sendMail = async (subject: string, data: EmailData) => {
  const from = process.env.MAIL_FROM;
  const to = process.env.MAIL_TO || 'sergeymkrtumyan@gmail.com';
  return await resend.emails.send({
    from: `New Contact <${from}>`,
    to: [to],
    subject: subject,
    react: MainEmailTemplate(data) as ReactElement,
  });
};
