import type { FormEvent } from 'react';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const MAILERLITE_FORM_ACTION = 'https://assets.mailerlite.com/jsonp/2523107/forms/193611084209325354/subscribe';

type MailerLiteSignupProps = {
  className: string;
  formId: string;
  label?: string;
  buttonText: string;
  showArrow?: boolean;
};

export default function MailerLiteSignup({
  className,
  formId,
  label,
  buttonText,
  showArrow = false,
}: MailerLiteSignupProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const formData = new FormData(event.currentTarget);
    const body = new URLSearchParams();
    formData.forEach((value, key) => body.append(key, String(value)));

    try {
      const response = await fetch(MAILERLITE_FORM_ACTION, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body,
      });
      const result = await response.json() as {
        success?: boolean;
        errors?: { fields?: Record<string, string[]> };
      };

      if (!response.ok || !result.success) {
        const fieldError = result.errors?.fields
          ? Object.values(result.errors.fields).flat()[0]
          : undefined;
        throw new Error(fieldError || 'We couldn’t add you to the list. Please check your details and try again.');
      }

      setStatus('success');
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className={`${className} signup-success`} role="status">
        <strong>You’re on the First Look List.</strong>
        <span>Check your inbox to confirm. Once confirmed, your first email and exclusive Haven Estate look book will be on the way.</span>
      </div>
    );
  }

  return (
    <form
      className={className}
      onSubmit={handleSubmit}
    >
      {label && <label htmlFor={`${formId}-email`}>{label}</label>}
      <div className="signup-row">
        <div className="signup-fields">
          <input
            id={`${formId}-name`}
            name="fields[name]"
            type="text"
            placeholder="YOUR NAME"
            aria-label="Name"
            autoComplete="name"
            readOnly={status === 'submitting'}
          />
          <input
            id={`${formId}-email`}
            name="fields[email]"
            type="email"
            placeholder="EMAIL ADDRESS"
            aria-label="Email address"
            autoComplete="email"
            required
            readOnly={status === 'submitting'}
          />
          <input
            id={`${formId}-phone`}
            name="fields[phone]"
            type="tel"
            placeholder="PHONE NUMBER"
            aria-label="Phone number"
            autoComplete="tel"
            required
            readOnly={status === 'submitting'}
          />
        </div>
        <input type="hidden" name="ml-submit" value="1" />
        <input type="hidden" name="anticsrf" value="true" />
        <button type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'JOINING…' : buttonText}
          {showArrow && <ArrowUpRight />}
        </button>
      </div>
      {status === 'error' && <p className="signup-error" role="alert">{errorMessage}</p>}
    </form>
  );
}
