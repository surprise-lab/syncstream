

'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: 'How do I set up a new integration?',
    answer:
      'Our platform supports a wide range of integrations. You can easily set up a new integration from your dashboard by following the on-screen instructions. For detailed guides, please refer to our documentation.',
  },
  {
    question: 'What are the best practices for data mapping?',
    answer:
      'Data mapping is crucial for successful integrations. We recommend starting with a clear plan, using our transformation tools for complex mappings, and always testing your data flows.',
  },
  {
    question: 'How can I troubleshoot common errors?',
    answer:
      'Our monitoring dashboard provides detailed error logs. You can also consult our troubleshooting guide in the documentation or contact support for specific issues.',
  },
  {
    question: 'Where can I find API documentation?',
    answer:
      'Our comprehensive API documentation is available in the developers section. It includes endpoints, parameters, and examples to help you build custom integrations.',
  },
];

const FaqItem = ({ faq, isOpen, onClick }) => (
  <div
    className={cn('faq-item', { open: isOpen })}
    onClick={onClick}
  >
    <span className="material-symbols-outlined faq-icon mt-1 text-[var(--primary-500)]">
      add_circle
    </span>
    <div className="flex-1">
      <h4 className="font-semibold">{faq.question}</h4>
      <div className="faq-content">
        <p className="pt-2 text-[var(--neutral-400)] overflow-hidden">
            {faq.answer}
        </p>
      </div>
    </div>
  </div>
);

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#111a22] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#233648] px-10 py-3">
          <div className="flex items-center gap-4 text-white">
            <svg
              className="size-6"
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_6_535)">
                <path
                  clipRule="evenodd"
                  d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_6_535">
                  <rect fill="white" height="48" width="48"></rect>
                </clipPath>
              </defs>
            </svg>
            <h1 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
              SyncStream
            </h1>
          </div>
          <nav className="flex items-center gap-6">
            <a
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              href="#"
            >
              Dashboard
            </a>
            <a
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              href="#"
            >
              Integrations
            </a>
            <a
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              href="#"
            >
              Data Flows
            </a>
            <a
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              href="#"
            >
              Monitoring
            </a>
            <a className="text-sm font-bold text-[var(--primary-500)]" href="#">
              Support
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="flex items-center justify-center rounded-full p-2 text-white/80 transition-colors hover:bg-[var(--neutral-700)] hover:text-white">
              <span className="material-symbols-outlined">
                {' '}
                notifications{' '}
              </span>
            </button>
            <button>
              <img
                alt="User avatar"
                className="size-10 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgYkWh7fA6LN4jt0EGVg-bUnqiKZfi2IIrwjHYs42CiEpyVItTqXcB6FWgjVOiEaTfFEY1DgUJcpzHEltZ2bOJx94OLBSBRokZIzJO6sVViyGULr9CKxhljbwnNeoez11ANmM5uzo3b5OOdwCGLyOOj7QRB_jnWZRLTOnPFXos53R0qmaM50EQaMoah8ysMIBTVIrCl8sdaymGTPDqqelGLClX2knSpZ-a0hAybTEu1uhI1B7YZLfTYwrSYlIsYgV-2zy5F01gvzXE"
              />
            </button>
          </div>
        </header>
        <main className="flex-1 px-10 py-8 text-white">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold tracking-tighter">
                How can we help?
              </h2>
              <p className="mt-2 text-lg text-[var(--neutral-400)]">
                Find answers to common questions or contact our support team
                for assistance.
              </p>
            </div>
            <div className="mb-12">
              <div className="relative">
                <span className="material-symbols-outlined pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--neutral-400)]">
                  {' '}
                  search{' '}
                </span>
                <input
                  className="form-input w-full rounded-md border-transparent bg-[var(--neutral-700)] py-3 pl-12 pr-4 text-white placeholder:text-[var(--neutral-400)] focus:border-[var(--primary-500)] focus:ring-[var(--primary-500)]"
                  placeholder="Search FAQs"
                  type="search"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
              <section>
                <h3 className="mb-6 text-2xl font-bold tracking-tight">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <FaqItem
                      key={index}
                      faq={faq}
                      isOpen={openFaq === index}
                      onClick={() => setOpenFaq(index)}
                    />
                  ))}
                </div>
                <h3 className="mb-6 mt-12 text-2xl font-bold tracking-tight">
                  Documentation
                </h3>
                <div className="space-y-4">
                  <a
                    className="flex items-center gap-4 rounded-lg border border-[var(--neutral-700)] bg-[var(--neutral-800)] p-4 transition-all hover:bg-[var(--neutral-700)]"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-[var(--primary-500)]">
                      {' '}
                      description{' '}
                    </span>
                    <h4 className="font-semibold">Getting Started Guide</h4>
                    <span className="material-symbols-outlined ml-auto text-[var(--neutral-400)]">
                      {' '}
                      arrow_forward{' '}
                    </span>
                  </a>
                  <a
                    className="flex items-center gap-4 rounded-lg border border-[var(--neutral-700)] bg-[var(--neutral-800)] p-4 transition-all hover:bg-[var(--neutral-700)]"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-[var(--primary-500)]">
                      {' '}
                      integration_instructions{' '}
                    </span>
                    <h4 className="font-semibold">Integration Guides</h4>
                    <span className="material-symbols-outlined ml-auto text-[var(--neutral-400)]">
                      {' '}
                      arrow_forward{' '}
                    </span>
                  </a>
                  <a
                    className="flex items-center gap-4 rounded-lg border border-[var(--neutral-700)] bg-[var(--neutral-800)] p-4 transition-all hover:bg-[var(--neutral-700)]"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-[var(--primary-500)]">
                      {' '}
                      code{' '}
                    </span>
                    <h4 className="font-semibold">API Reference</h4>
                    <span className="material-symbols-outlined ml-auto text-[var(--neutral-400)]">
                      {' '}
                      arrow_forward{' '}
                    </span>
                  </a>
                </div>
              </section>
              <section>
                <div className="rounded-lg bg-[var(--neutral-800)] p-8">
                  <h3 className="mb-6 text-2xl font-bold tracking-tight">
                    Contact Support
                  </h3>
                  <form className="space-y-6">
                    <div>
                      <label
                        className="mb-2 block text-sm font-medium text-white/80"
                        htmlFor="subject"
                      >
                        Subject
                      </label>
                      <input
                        className="form-input w-full rounded-md border-transparent bg-[var(--neutral-700)] px-4 py-3 text-white placeholder:text-[var(--neutral-400)] focus:border-[var(--primary-500)] focus:ring-[var(--primary-500)]"
                        id="subject"
                        placeholder="Enter the subject of your request"
                        type="text"
                      />
                    </div>
                    <div>
                      <label
                        className="mb-2 block text-sm font-medium text-white/80"
                        htmlFor="description"
                      >
                        Description
                      </label>
                      <textarea
                        className="form-textarea w-full rounded-md border-transparent bg-[var(--neutral-700)] px-4 py-3 text-white placeholder:text-[var(--neutral-400)] focus:border-[var(--primary-500)] focus:ring-[var(--primary-500)]"
                        id="description"
                        placeholder="Describe your issue in detail"
                        rows={6}
                      ></textarea>
                    </div>
                    <button
                      className="flex w-full items-center justify-center gap-2 rounded-md bg-[var(--primary-500)] px-4 py-3 font-semibold text-white transition-colors hover:bg-blue-600"
                      type="submit"
                    >
                      <span className="material-symbols-outlined"> send </span>
                      <span>Submit Ticket</span>
                    </button>
                  </form>
                </div>
                <div className="mt-8 rounded-lg bg-[var(--neutral-800)] p-8">
                  <h3 className="mb-4 text-2xl font-bold tracking-tight">
                    Live Chat
                  </h3>
                  <p className="mb-6 text-[var(--neutral-400)]">
                    Chat with a support representative in real-time for
                    immediate assistance.
                  </p>
                  <button className="flex w-full items-center justify-center gap-2 rounded-md border border-[var(--neutral-600)] bg-[var(--neutral-700)] px-4 py-3 font-semibold text-white transition-colors hover:bg-[var(--neutral-600)]">
                    <span className="material-symbols-outlined"> chat </span>
                    <span>Start Chat</span>
                  </button>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

