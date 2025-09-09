
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
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Integration Details</h3>
            <div className="flex items-center gap-4">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"> search </span>
                <input className="w-64 rounded-md border-gray-700 bg-gray-800 py-2 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:border-primary-500 focus:ring-primary-500" placeholder="Search integrations..." type="text"/>
              </div>
              <div className="flex items-center gap-2">
                <select className="rounded-md border-gray-700 bg-gray-800 py-2 pl-3 pr-8 text-sm text-white focus:border-primary-500 focus:ring-primary-500">
                  <option>Status: All</option>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
                <select className="rounded-md border-gray-700 bg-gray-800 py-2 pl-3 pr-8 text-sm text-white focus:border-primary-500 focus:ring-primary-500">
                  <option>Type: All</option>
                  <option>API</option>
                  <option>Webhook</option>
                  <option>Database</option>
                </select>
                <button className="flex items-center gap-2 rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700">
                  <span className="material-symbols-outlined text-base"> filter_list </span>
                    Filter
                </button>
              </div>
            </div>
          </div>
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
