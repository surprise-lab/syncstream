
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2 } from 'lucide-react';
import Link from 'next/link';

const billingHistory = [
  {
    date: 'November 1, 2024',
    description: 'Subscription Renewal',
    amount: 'R1800.00',
    status: 'Paid',
  },
  {
    date: 'October 1, 2024',
    description: 'Subscription Renewal',
    amount: 'R1800.00',
    status: 'Paid',
  },
  {
    date: 'September 1, 2024',
    description: 'Subscription Renewal',
    amount: 'R1800.00',
    status: 'Paid',
  },
];

export default function BillingPage() {
  return (
    <>
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#233648] px-10 py-3">
        <div className="flex items-center gap-4 text-white">
          <svg
            className="h-8 w-8 text-[#1173d4]"
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
          <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] text-white">
            SyncStream
          </h2>
        </div>
        <div className="flex items-center gap-8">
          <nav className="flex items-center gap-6">
            <a
              className="text-sm font-medium leading-normal text-gray-300 transition-colors hover:text-white"
              href="#"
            >
              Home
            </a>
            <a
              className="text-sm font-medium leading-normal text-gray-300 transition-colors hover:text-white"
              href="#"
            >
              Integrations
            </a>
            <a
              className="text-sm font-medium leading-normal text-gray-300 transition-colors hover:text-white"
              href="#"
            >
              Connections
            </a>
            <a className="text-sm font-semibold leading-normal text-white" href="#">
              Billing
            </a>
            <a
              className="text-sm font-medium leading-normal text-gray-300 transition-colors hover:text-white"
              href="#"
            >
              Docs
            </a>
            <a
              className="text-sm font-medium leading-normal text-gray-300 transition-colors hover:text-white"
              href="#"
            >
              Help
            </a>
          </nav>
          <div
            className="aspect-square size-10 rounded-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBWY0E1-1TDas02KcxN2dW9MPfaCeQQtyx_wi1h6VdvrOxBnsiD7IyyJ9SCFMLCSVPfKDt-T6LKJJroH-hpbDFVYXkfYEkPGt0b83Z8EvpSHdvxQuoCQ4XcPRfpXDTvWKOD1QkRy53xLAguGZNWmm_MhXu9WvF6XQ-OFJK43WkUvynXDdrWzpn-CMDojHAN1y76vvwxVThB6822y7srdEXNwMqvrwcuA7QopiNnMn5DbJf3rCQTdXgVJ1C-f3AJKhaU9u6_OsGaqkpi")',
            }}
          ></div>
        </div>
      </header>
      <main className="flex-1 px-16 py-10">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10">
            <h1 className="text-4xl font-bold tracking-tight text-white">
              Billing
            </h1>
            <p className="mt-2 text-base text-[#92adc9]">
              Manage your subscription, billing history, and payment methods.
            </p>
          </div>
          <div className="space-y-12">
            <section>
              <h2 className="mb-6 text-2xl font-bold leading-tight tracking-tight text-white">
                Current Plan
              </h2>
              <div className="flex items-center justify-between rounded-lg bg-[#192633] p-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4">
                    <p className="text-xl font-semibold text-white">
                      Pro Plan
                    </p>
                    <span className="inline-flex items-center rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                      Active
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-[#92adc9]">
                    Your plan renews on December 31, 2024.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-md bg-[#233648] px-4 text-sm font-medium text-white transition-colors hover:bg-[#324d67]">
                    Change Plan
                  </button>
                  <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-md bg-[#1173d4] px-4 text-sm font-bold text-white transition-colors hover:bg-[#1b85f0]">
                    Upgrade
                  </button>
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-white text-2xl font-bold leading-tight tracking-tight mb-6">Upcoming Payment</h2>
              <div className="bg-[#192633] rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#92adc9] text-sm">Next payment</p>
                    <p className="text-white text-3xl font-bold mt-1">R1800.00</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#92adc9] text-sm">Due on</p>
                    <p className="text-white text-lg font-medium mt-1">December 1, 2024</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-[#324d67]">
                  <p className="text-[#92adc9] text-sm">Your Pro Plan will renew and be charged to your primary payment method.</p>
                </div>
              </div>
            </section>
            <section>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold leading-tight tracking-tight text-white">
                  Billing History
                </h2>
                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-md bg-[#233648] px-4 text-sm font-medium text-white transition-colors hover:bg-[#324d67]">
                  <span className="material-symbols-outlined mr-2 text-xl">
                    download
                  </span>
                  Download Invoices
                </button>
              </div>
              <div className="overflow-x-auto rounded-lg border border-[#324d67] bg-[#192633]">
                <table className="w-full text-left">
                  <thead className="border-b border-[#324d67] bg-[#192633]">
                    <tr>
                      <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-white">
                        Date
                      </th>
                      <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-white">
                        Description
                      </th>
                      <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-white">
                        Amount
                      </th>
                      <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-white">
                        Status
                      </th>
                      <th className="px-6 py-4 text-right text-xs font-medium uppercase tracking-wider text-white">
                        Invoice
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#324d67]">
                    {billingHistory.map((item, index) => (
                      <tr key={index}>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-[#92adc9]">
                          {item.date}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-[#92adc9]">
                          {item.description}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-white">
                          {item.amount}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <span className="inline-flex items-center rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                            {item.status}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right">
                          <a
                            className="text-sm font-medium text-[#1173d4] hover:text-[#1b85f0]"
                            href="#"
                          >
                            Download
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            <section>
              <h2 className="mb-6 text-2xl font-bold leading-tight tracking-tight text-white">
                Payment Methods
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg bg-[#192633] p-6">
                  <div className="flex items-center gap-4">
                    <div
                      className="h-8 w-12 bg-contain bg-center bg-no-repeat"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBEVRAFxXzgbj0YqJFPIvJiqqYlfVk6ruEEg8z5XU7NFYBftPgbYgQuJioKcxURjQQMvwzdhi903TS5yzfBsKQ6P5CKtRj8Z-AUBjlt3ZebOFmk0uHkG15VPN1KLpvIZISy2wNcXkAW5aubc-ogGk8kJM0iVSTCzIO87h3D0ctsUN1YYrtoxNFzJnEVS3H0DyE2fag_FLp_KsXHRJERywwLtDEvPEQCcuUabmCBlyKDGLx5ACIAxPuOJPo7DWPfqWAtMe67I8K7_hzJ')",
                      }}
                    ></div>
                    <div>
                      <p className="font-medium text-white">
                        Visa ending in 4242
                      </p>
                      <p className="text-sm text-[#92adc9]">Expires 08/2026</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="inline-flex items-center rounded bg-blue-500/20 px-2 py-0.5 text-xs font-medium text-blue-300">
                      Primary
                    </span>
                    <button className="text-gray-400 transition-colors hover:text-white">
                      <span className="material-symbols-outlined text-xl">
                        edit
                      </span>
                    </button>
                    <button className="text-gray-400 transition-colors hover:text-red-500">
                      <span className="material-symbols-outlined text-xl">
                        delete
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-md bg-[#233648] px-4 text-sm font-medium text-white transition-colors hover:bg-[#324d67]">
                  <span className="material-symbols-outlined mr-2 text-xl">
                    add
                  </span>
                  Add Payment Method
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
