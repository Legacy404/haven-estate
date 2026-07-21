import { useRef, useState } from 'react';
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
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const submitted = useRef(false);
  const targetName = `${formId}-mailerlite-response`;

  const handleSubmit = () => {
    submitted.current = true;
    setStatus('submitting');
  };

  const handleResponse = () => {
    if (!submitted.current) return;
    submitted.current = false;
    setStatus('success');
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
      action={MAILERLITE_FORM_ACTION}
      method="post"
      target={targetName}
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
            disabled={status === 'submitting'}
          />
          <input
            id={`${formId}-email`}
            name="fields[email]"
            type="email"
            placeholder="EMAIL ADDRESS"
            aria-label="Email address"
            autoComplete="email"
            required
            disabled={status === 'submitting'}
          />
          <input
            id={`${formId}-phone`}
            name="fields[phone]"
            type="tel"
            placeholder="PHONE NUMBER"
            aria-label="Phone number"
            autoComplete="tel"
            required
            disabled={status === 'submitting'}
          />
        </div>
        <input type="hidden" name="ml-submit" value="1" />
        <input type="hidden" name="anticsrf" value="true" />
        <button type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'JOINING…' : buttonText}
          {showArrow && <ArrowUpRight />}
        </button>
      </div>
      <iframe
        title="MailerLite subscription response"
        name={targetName}
        onLoad={handleResponse}
        className="signup-response-frame"
      />
    </form>
  );
}
