
'use client';

import { Badge } from '@/components/ui/badge';
import { ArrowUpward, ArrowDownward, SyncAlt, Error, Timer } from '@mui/icons-material';

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
        <Badge className="px-2 py-1 text-xs font-medium rounded-full bg-green-500/10 text-green-400">Active</Badge>
      );
    case 'Inactive':
      return (
        <Badge className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-500/10 text-yellow-400">Inactive</Badge>
      );
    case 'Error':
      return (
        <Badge className="px-2 py-1 text-xs font-medium rounded-full bg-red-500/10 text-red-400">Error</Badge>
      );
    default:
      return null;
  }
};


export default function IntegrationsHealthPage() {
  return (
    <main className="p-6 md:p-10 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-white text-3xl font-bold">Integrations Health</h1>
          <p className="text-gray-400 mt-1">Monitor the health and performance of your active integrations.</p>
        </div>
        <div className="mb-10">
          <h2 className="text-white text-xl font-bold mb-4">Overall Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <div className="flex flex-col gap-4 rounded-lg border border-gray-700 bg-gray-800 p-6">
              <div className="flex items-center justify-between">
                <p className="text-white text-base font-medium">Data Transfer Rate</p>
                <span className="material-symbols-outlined text-gray-400">sync_alt</span>
              </div>
              <p className="text-white text-4xl font-bold truncate">120 GB/hr</p>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-500 flex items-center gap-1">
                  <span className="material-symbols-outlined text-base">arrow_upward</span>
                  +15%
                </span>
                <p className="text-gray-400">vs last 24h</p>
              </div>
              <div className="h-40">
                <svg fill="none" height="100%" preserveAspectRatio="none" viewBox="0 0 472 150" width="100%" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25" stroke="hsl(var(--primary))" strokeLinecap="round" strokeWidth="2"></path>
                  <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H0V109Z" fill="url(#paint0_linear_1_2)"></path>
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2" x1="236" x2="236" y1="1" y2="149">
                      <stop stopColor="hsl(var(--primary))" stopOpacity="0.3"></stop>
                      <stop offset="1" stopColor="hsl(var(--primary))" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-lg border border-gray-700 bg-gray-800 p-6">
              <div className="flex items-center justify-between">
                <p className="text-white text-base font-medium">Error Rate</p>
                <span className="material-symbols-outlined text-gray-400">error</span>
              </div>
              <p className="text-white text-4xl font-bold truncate">2.5%</p>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-red-500 flex items-center gap-1">
                  <span className="material-symbols-outlined text-base">arrow_downward</span>
                  -5%
                </span>
                <p className="text-gray-400">vs last 24h</p>
              </div>
              <div className="h-40 grid grid-flow-col gap-3 items-end">
                <div className="bg-red-500/20 hover:bg-red-500/40 rounded-t-sm w-full transition-all" style={{ height: '20%' }}></div>
                <div className="bg-red-500/20 hover:bg-red-500/40 rounded-t-sm w-full transition-all" style={{ height: '90%' }}></div>
                <div className="bg-red-500/20 hover:bg-red-500/40 rounded-t-sm w-full transition-all" style={{ height: '30%' }}></div>
                <div className="bg-red-500/20 hover:bg-red-500/40 rounded-t-sm w-full transition-all" style={{ height: '60%' }}></div>
                <div className="bg-red-500/20 hover:bg-red-500/40 rounded-t-sm w-full transition-all" style={{ height: '100%' }}></div>
                <div className="bg-red-500/20 hover:bg-red-500/40 rounded-t-sm w-full transition-all" style={{ height: '90%' }}></div>
                <div className="bg-red-500/20 hover:bg-red-500/40 rounded-t-sm w-full transition-all" style={{ height: '30%' }}></div>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-lg border border-gray-700 bg-gray-800 p-6">
              <div className="flex items-center justify-between">
                <p className="text-white text-base font-medium">Latency</p>
                <span className="material-symbols-outlined text-gray-400">timer</span>
              </div>
              <p className="text-white text-4xl font-bold truncate">50 ms</p>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-500 flex items-center gap-1">
                  <span className="material-symbols-outlined text-base">arrow_upward</span>
                  +10%
                </span>
                <p className="text-gray-400">vs last 24h</p>
              </div>
              <div className="h-40 grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 items-center">
                <div className="bg-sky-500/20 hover:bg-sky-500/40 rounded-e-sm h-4 transition-all" style={{ width: '20%' }}></div>
                <div className="bg-sky-500/20 hover:bg-sky-500/40 rounded-e-sm h-4 transition-all" style={{ width: '90%' }}></div>
                <div className="bg-sky-500/20 hover:bg-sky-500/40 rounded-e-sm h-4 transition-all" style={{ width: '30%' }}></div>
                <div className="bg-sky-500/20 hover:bg-sky-500/40 rounded-e-sm h-4 transition-all" style={{ width: '60%' }}></div>
                <div className="bg-sky-500/20 hover:bg-sky-500/40 rounded-e-sm h-4 transition-all" style={{ width: '100%' }}></div>
                <div className="bg-sky-500/20 hover:bg-sky-500/40 rounded-e-sm h-4 transition-all" style={{ width: '90%' }}></div>
                <div className="bg-sky-500/20 hover:bg-sky-500/40 rounded-e-sm h-4 transition-all" style={{ width: '30%' }}></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-white text-xl font-bold mb-4">Integration Status</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-700 bg-gray-800">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-800 text-xs text-gray-400 uppercase">
                <tr>
                  <th className="px-6 py-3" scope="col">Integration Name</th>
                  <th className="px-6 py-3" scope="col">Status</th>
                  <th className="px-6 py-3" scope="col">Data Transferred</th>
                  <th className="px-6 py-3" scope="col">Errors</th>
                  <th className="px-6 py-3" scope="col">Latency</th>
                </tr>
              </thead>
              <tbody>
                {integrations.map((integration, index) => (
                  <tr key={index} className="border-b border-gray-700 hover:bg-gray-800/50 transition-colors">
                    <th className="px-6 py-4 font-medium text-white whitespace-nowrap" scope="row">{integration.name}</th>
                    <td className="px-6 py-4">{getStatusBadge(integration.status)}</td>
                    <td className="px-6 py-4 text-gray-400">{integration.data}</td>
                    <td className="px-6 py-4 text-gray-400">{integration.errors}</td>
                    <td className="px-6 py-4 text-gray-400">{integration.latency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
