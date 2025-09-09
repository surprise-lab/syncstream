
'use client';

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

const kpiData = {
  successRate: {
    value: '98.2%',
    change: '+2.5%',
    changeType: 'increase',
  },
  latency: {
    value: '250ms',
    change: '-10ms',
    changeType: 'decrease',
  },
};

const latencyChartData = [
  { height: '10%' },
  { height: '30%' },
  { height: '90%' },
  { height: '80%' },
  { height: '50%' },
  { height: '60%' },
  { height: '80%' },
];

const integrations = [
    {
        name: 'System A ↔ System B',
        status: 'Active',
        lastSync: '2 hours ago',
        frequency: 'Hourly',
        dataFlow: 'System A → System B',
    },
    {
        name: 'System C ↔ System D',
        status: 'Active',
        lastSync: '1 hour ago',
        frequency: 'Daily',
        dataFlow: 'System C → System D',
    },
    {
        name: 'System E ↔ System F',
        status: 'Inactive',
        lastSync: '3 days ago',
        frequency: 'Weekly',
        dataFlow: 'System E → System F',
    },
    {
        name: 'System G ↔ System H',
        status: 'Active',
        lastSync: '30 minutes ago',
        frequency: 'Real-time',
        dataFlow: 'System G → System H',
    },
    {
        name: 'System I ↔ System J',
        status: 'Active',
        lastSync: '12 hours ago',
        frequency: 'Daily',
        dataFlow: 'System I → System J',
    },
];

const getStatusBadge = (status:string) => {
    switch (status) {
        case 'Active':
        return (
            <span className="inline-flex items-center rounded-full bg-green-900 px-2.5 py-0.5 text-xs font-medium text-green-300">
                <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-green-400" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3"></circle>
                </svg>
                Active
            </span>
        );
        case 'Inactive':
        return (
            <span className="inline-flex items-center rounded-full bg-red-900 px-2.5 py-0.5 text-xs font-medium text-red-300">
                <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-red-400" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3"></circle>
                </svg>
                Inactive
            </span>
        );
        default:
            return null;
    }
};

export default function IntegrationsPage() {
  return (
    <main className="flex-1 px-10 py-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Integrations Overview</h2>
            <p className="text-gray-400 mt-1">Monitor the health and performance of all your system integrations.</p>
          </div>
          <Button className="flex items-center gap-2 rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700">
            <span className="material-symbols-outlined text-base"> add </span>
            New Integration
          </Button>
        </div>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Integration Status</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col gap-2 rounded-lg bg-gray-800 p-6">
              <p className="text-gray-400 text-sm font-medium">Total Integrations</p>
              <p className="text-4xl font-bold text-white">15</p>
            </div>
            <div className="flex flex-col gap-2 rounded-lg bg-gray-800 p-6">
              <p className="text-gray-400 text-sm font-medium">Active</p>
              <p className="text-4xl font-bold text-green-400">12</p>
            </div>
            <div className="flex flex-col gap-2 rounded-lg bg-gray-800 p-6">
              <p className="text-gray-400 text-sm font-medium">Inactive</p>
              <p className="text-4xl font-bold text-red-400">3</p>
            </div>
          </div>
        </section>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Key Performance Indicators</h3>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="flex flex-col gap-4 rounded-lg border border-gray-800 bg-gray-900 p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-base font-medium text-gray-300">Data Sync Success Rate</p>
                  <p className="text-3xl font-bold text-white">{kpiData.successRate.value}</p>
                </div>
                <div className="flex items-center gap-1 text-sm font-medium text-green-400">
                  <span className="material-symbols-outlined text-base"> trending_up </span>
                  <span>{kpiData.successRate.change}</span>
                </div>
              </div>
              <div className="h-48">
                <svg fill="none" height="100%" preserveAspectRatio="none" viewBox="0 0 472 150" width="100%" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V150H0V109Z" fill="url(#paint0_linear_1)"></path>
                  <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25" stroke="var(--primary-400)" strokeLinecap="round" strokeWidth="2"></path>
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1" x1="236" x2="236" y1="1" y2="149">
                      <stop stopColor="var(--primary-500)" stopOpacity="0.4"></stop>
                      <stop offset="1" stopColor="#0d1117" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <p className="text-center text-xs text-gray-500">Last 30 Days</p>
            </div>
            <div className="flex flex-col gap-4 rounded-lg border border-gray-800 bg-gray-900 p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-base font-medium text-gray-300">Average Latency</p>
                  <p className="text-3xl font-bold text-white">{kpiData.latency.value}</p>
                </div>
                <div className="flex items-center gap-1 text-sm font-medium text-yellow-400">
                  <span className="material-symbols-outlined text-base"> trending_flat </span>
                  <span>{kpiData.latency.change}</span>
                </div>
              </div>
              <div className="flex h-48 items-end justify-between gap-2 px-2">
                {latencyChartData.map((bar, index) => (
                  <div key={index} className="w-full rounded-t-sm bg-primary-800" style={{ height: bar.height, backgroundColor: `hsl(var(--primary-700-hsl) / ${parseInt(bar.height) / 100})` }}></div>
                ))}
              </div>
              <p className="text-center text-xs text-gray-500">Latency by Integration</p>
            </div>
          </div>
        </section>
        <section>
          <h3 className="text-xl font-semibold mb-4">Integration Details</h3>
          <div className="overflow-x-auto rounded-lg border border-gray-800">
            <Table className="min-w-full divide-y divide-gray-800">
              <TableHeader className="bg-gray-800/50">
                <TableRow>
                  <TableHead className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">Integration</TableHead>
                  <TableHead className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">Status</TableHead>
                  <TableHead className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">Last Sync</TableHead>
                  <TableHead className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">Frequency</TableHead>
                  <TableHead className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">Data Flow</TableHead>
                  <TableHead className="relative px-6 py-3"><span className="sr-only">Actions</span></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="divide-y divide-gray-800 bg-gray-900">
                {integrations.map((integration, index) => (
                    <TableRow key={index}>
                        <TableCell className="whitespace-nowrap px-6 py-4 text-sm font-medium text-white">{integration.name}</TableCell>
                        <TableCell className="whitespace-nowrap px-6 py-4 text-sm">{getStatusBadge(integration.status)}</TableCell>
                        <TableCell className="whitespace-nowrap px-6 py-4 text-sm text-gray-400">{integration.lastSync}</TableCell>
                        <TableCell className="whitespace-nowrap px-6 py-4 text-sm text-gray-400">{integration.frequency}</TableCell>
                        <TableCell className="whitespace-nowrap px-6 py-4 text-sm text-gray-400">{integration.dataFlow}</TableCell>
                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                            <a className="text-primary-400 hover:text-primary-300" href="#">View Details</a>
                        </td>
                    </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>
      </div>
    </main>
  );
}
