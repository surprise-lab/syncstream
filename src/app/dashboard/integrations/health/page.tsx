
'use client';

import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowUp, ArrowDown, FolderSync, AlertTriangle, Timer, X, ChevronDown, BarChartHorizontal, LineChart, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const integrations = [
  { name: 'Salesforce to HubSpot', status: 'Active', data: '50 GB', errors: 10, latency: '60 ms' },
  { name: 'Shopify to QuickBooks', status: 'Active', data: '30 GB', errors: 5, latency: '45 ms' },
  { name: 'Mailchimp to CRM', status: 'Inactive', data: '0 GB', errors: 0, latency: '0 ms' },
  { name: 'Google Sheets to Database', status: 'Error', data: '20 GB', errors: 2, latency: '30 ms' },
  { name: 'Custom API to System X', status: 'Active', data: '15 GB', errors: 1, latency: '25 ms' },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'Active':
      return (
        <Badge className="px-2 py-1 text-xs font-medium rounded-full status-active">Active</Badge>
      );
    case 'Inactive':
      return (
        <Badge className="px-2 py-1 text-xs font-medium rounded-full status-inactive">Inactive</Badge>
      );
    case 'Error':
      return (
        <Badge className="px-2 py-1 text-xs font-medium rounded-full status-error">Error</Badge>
      );
    default:
      return null;
  }
};


export default function IntegrationsHealthPage() {
    const [isAlertVisible, setIsAlertVisible] = useState(true);

  return (
    <main className="flex-1 px-10 py-8">
        <div className="mx-auto max-w-7xl">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white">Integration: Salesforce to HubSpot</h1>
                    <p className="text-gray-400 mt-1">View the status, logs, and configuration for this integration.</p>
                </div>
                <a className="inline-flex items-center gap-2 justify-center rounded-md bg-[var(--primary-color)] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-offset-2 focus:ring-offset-[#111a22]" href="#">
                    <span className="material-symbols-outlined">edit</span>
                    Edit Integration
                </a>
            </div>
            <div className="border-b border-gray-700">
                <nav aria-label="Tabs" className="-mb-px flex space-x-8">
                    <a className="border-[var(--primary-color)] text-[var(--primary-color)] whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" href="#">Overview</a>
                    <a className="border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-500 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" href="#">Logs</a>
                    <a className="border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-500 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" href="#">Configuration</a>
                    <a className="border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-500 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" href="#">History</a>
                </nav>
            </div>
            <div className="mt-8">
                <h2 className="text-xl font-bold text-white mb-4">Status</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-[#192633] rounded-lg p-6">
                        <p className="text-gray-300 text-sm font-medium">Status</p>
                        <p className="text-green-400 text-3xl font-bold mt-2 flex items-center gap-2"><span className="material-symbols-outlined">check_circle</span>Active</p>
                    </div>
                    <div className="bg-[#192633] rounded-lg p-6">
                        <p className="text-gray-300 text-sm font-medium">Last Run</p>
                        <p className="text-white text-3xl font-bold mt-2">2024-01-20 10:00 AM</p>
                    </div>
                    <div className="bg-[#192633] rounded-lg p-6">
                        <p className="text-gray-300 text-sm font-medium">Next Run</p>
                        <p className="text-white text-3xl font-bold mt-2">2024-01-21 10:00 AM</p>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-white">Recent Synchronization Activities</h2>
                    <a className="text-sm font-medium text-[var(--primary-color)] hover:text-opacity-80" href="#">View all</a>
                </div>
                <div className="overflow-x-auto rounded-lg border border-gray-700">
                    <table className="min-w-full divide-y divide-gray-700">
                        <thead className="bg-[#192633]">
                            <tr>
                                <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6" scope="col">Status</th>
                                <th className="px-3 py-3.5 text-left text-sm font-semibold text-white" scope="col">Timestamp</th>
                                <th className="px-3 py-3.5 text-left text-sm font-semibold text-white" scope="col">Records Affected</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-800 bg-[#111a22]">
                            <tr>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-300 sm:pl-6">
                                    <span className="inline-flex items-center gap-2 rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">
                                        <span className="material-symbols-outlined text-base">check_circle</span>
                                        Success
                                    </span>
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">2024-01-20 10:00 AM</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">1,234</td>
                            </tr>
                            <tr>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-300 sm:pl-6">
                                    <span className="inline-flex items-center gap-2 rounded-md bg-red-500/10 px-2 py-1 text-xs font-medium text-red-400 ring-1 ring-inset ring-red-500/20">
                                        <span className="material-symbols-outlined text-base">cancel</span>
                                        Failed
                                    </span>
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">2024-01-19 10:00 AM</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">0</td>
                            </tr>
                            <tr>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-300 sm:pl-6">
                                    <span className="inline-flex items-center gap-2 rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">
                                        <span className="material-symbols-outlined text-base">check_circle</span>
                                        Success
                                    </span>
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">2024-01-18 10:00 AM</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">987</td>
                            </tr>
                            <tr>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-300 sm:pl-6">
                                    <span className="inline-flex items-center gap-2 rounded-md bg-yellow-500/10 px-2 py-1 text-xs font-medium text-yellow-400 ring-1 ring-inset ring-yellow-500/20">
                                        <span className="material-symbols-outlined text-base">warning</span>
                                        In Progress
                                    </span>
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">2024-01-17 10:00 AM</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">543</td>
                            </tr>
                             <tr>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-300 sm:pl-6">
                                    <span className="inline-flex items-center gap-2 rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">
                                        <span className="material-symbols-outlined text-base">check_circle</span>
                                        Success
                                    </span>
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">2024-01-16 10:00 AM</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">1,500</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="mt-10">
                <h2 className="text-xl font-bold text-white mb-4">Metrics</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-[#192633] rounded-lg p-6">
                        <p className="text-gray-300 text-sm font-medium">Records Synced</p>
                        <p className="text-white text-4xl font-bold mt-2">1,234</p>
                        <div className="flex items-center gap-2 text-sm mt-1">
                            <p className="text-gray-400">Last 7 Days</p>
                            <p className="text-green-400 font-medium flex items-center"><span className="material-symbols-outlined text-base">arrow_upward</span>+12%</p>
                        </div>
                        <div className="mt-6 h-48">
                            <svg fill="none" height="100%" preserveAspectRatio="none" viewBox="0 0 472 150" width="100%" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25" stroke="var(--primary-color)" strokeLinecap="round" strokeWidth="3"></path>
                                <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V150H0V109Z" fill="url(#paint0_linear_1131_5935)"></path>
                                <defs>
                                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1131_5935" x1="236" x2="236" y1="1" y2="149">
                                <stop stopColor="var(--primary-color)" stopOpacity="0.3"></stop>
                                <stop offset="1" stopColor="var(--primary-color)" stopOpacity="0"></stop>
                                </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div className="bg-[#192633] rounded-lg p-6">
                        <p className="text-gray-300 text-sm font-medium">Errors</p>
                        <p className="text-white text-4xl font-bold mt-2">5</p>
                        <div className="flex items-center gap-2 text-sm mt-1">
                            <p className="text-gray-400">Last 7 Days</p>
                            <p className="text-red-400 font-medium flex items-center"><span className="material-symbols-outlined text-base">arrow_downward</span>-5%</p>
                        </div>
                        <div className="mt-6 h-48 grid grid-cols-7 gap-3 items-end">
                            <div className="bg-blue-900/50 rounded-t-md hover:bg-blue-900/80 transition-colors w-full" style={{height: '50%'}}></div>
                            <div className="bg-blue-900/50 rounded-t-md hover:bg-blue-900/80 transition-colors w-full" style={{height: '100%'}}></div>
                            <div className="bg-blue-900/50 rounded-t-md hover:bg-blue-900/80 transition-colors w-full" style={{height: '30%'}}></div>
                            <div className="bg-blue-900/50 rounded-t-md hover:bg-blue-900/80 transition-colors w-full" style={{height: '80%'}}></div>
                            <div className="bg-blue-900/50 rounded-t-md hover:bg-blue-900/80 transition-colors w-full" style={{height: '90%'}}></div>
                            <div className="bg-blue-900/50 rounded-t-md hover:bg-blue-900/80 transition-colors w-full" style={{height: '10%'}}></div>
                            <div className="bg-blue-900/50 rounded-t-md hover:bg-blue-900/80 transition-colors w-full" style={{height: '50%'}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );

    