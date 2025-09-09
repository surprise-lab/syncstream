
'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: 'How do I add a new integration?',
    answer:
      "To add a new integration, navigate to the 'Integrations' section from the main dashboard. Click on the 'Add New Integration' button, and follow the on-screen instructions to select and configure your desired application.",
  },
  {
    question: 'What happens if a data sync fails?',
    answer:
      "If a data sync fails, SyncStream will automatically attempt to retry the synchronization. You will receive an alert in the 'Alerts' section with details about the failure. You can also view the detailed error logs in the 'History' page to troubleshoot the issue.",
  },
  {
    question: 'Can I create custom data mapping rules?',
    answer:
      "Yes, you can create custom data mapping rules. Go to the 'Mapping' section to define how data fields from your source application should be transformed and mapped to your destination application. You can drag and drop fields to create mappings.",
  },
  {
    question: 'How often does the data sync between applications?',
    answer:
      "The frequency of data synchronization can be configured for each integration. You can set it to sync in real-time, on a schedule (e.g., hourly, daily), or trigger it manually from the dashboard.",
  },
  {
    question: 'Is my data secure with SyncStream?',
    answer:
      "Yes, security is our top priority. We use end-to-end encryption for all data in transit and at rest. We are compliant with industry standards like ISO 27001 and GDPR. You can learn more on our 'Security' page.",
  },
  {
    question: 'How can I monitor the performance of my integrations?',
    answer:
      "The 'Monitoring' page provides a comprehensive overview of your system's performance, including key metrics like average response time, error rate, and throughput. You can also view detailed charts and set up custom alerts.",
  },
];


const FaqItem = ({ faq, isOpen, onToggle }) => (
    <div className="border-b border-border-color">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left text-lg font-medium text-text-primary"
      >
        <span>{faq.question}</span>
        <ChevronDown
          className={cn('h-6 w-6 shrink-0 transition-transform duration-200', {
            'rotate-180': isOpen,
          })}
        />
      </button>
      <div
        className={cn('grid overflow-hidden transition-all duration-300 ease-in-out', {
          'grid-rows-[1fr] opacity-100': isOpen,
          'grid-rows-[0fr] opacity-0': !isOpen,
        })}
      >
        <div className="overflow-hidden">
          <p className="pb-5 pr-4 text-base text-text-secondary">{faq.answer}</p>
        </div>
      </div>
    </div>
  );

export default function FaqPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

  return (
    <main className="flex-1 p-8 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-text-secondary">
            Find answers to common questions about SyncStream.
          </p>
        </div>

        <div className="mx-auto w-full">
            {faqs.map((faq, index) => (
                <FaqItem 
                    key={index} 
                    faq={faq} 
                    isOpen={openIndex === index}
                    onToggle={() => handleToggle(index)}
                />
            ))}
        </div>
      </div>
    </main>
  );
}

