import * as React from 'react';
import { EmailData } from '@/lib/utils/mail';

export const MainEmailTemplate: React.FC<Readonly<EmailData>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1>
      User with name: {name} and email: {email} sent you a message{' '}
    </h1>
    <h2>{message}</h2>
  </div>
);
