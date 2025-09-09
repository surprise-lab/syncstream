

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
import { Plus } from 'lucide-react';
import Link from 'next/link';

const activeIntegrations = [
  {
    name: 'Salesforce',
    status: 'Active',
    lastSynced: '2024-04-26 10:00 AM',
  },
  {
    name: 'NetSuite',
    status: 'Active',
    lastSynced: '2024-04-26 09:00 AM',
  },
];

const inactiveIntegrations = [
    {
        name: 'HubSpot',
        status: 'Inactive',
        lastSynced: '2024-04-25 05:00 PM',
    },
    {
        name: 'QuickBooks',
        status: 'Inactive',
        lastSynced: '2024-04-24 03:00 PM',
    },
    {
        name: 'Xero',
        status: 'Inactive',
        lastSynced: '2024-04-23 11:00 AM',
    },
];

const getStatusBadge = (status: string) => {
    switch (status) {
        case 'Active':
        return (
            <Badge className="inline-flex items-center rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-400">
                <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-green-400" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3"></circle>
                </svg>
                Active
            </Badge>
        );
        case 'Inactive':
        return (
            <Badge className="inline-flex items-center rounded-full bg-red-500/10 px-2.5 py-0.5 text-xs font-medium text-red-400">
                <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-red-400" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3"></circle>
                </svg>
                Inactive
            </Badge>
        );
        default:
        return (
            <Badge className="inline-flex items-center rounded-full bg-neutral-500/10 px-2.5 py-0.5 text-xs font-medium text-neutral-400">
                <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-neutral-400" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3"></circle>
                </svg>
                {status}
            </Badge>
        );
    }
};


export default function IntegrationsPage() {
  return (
    <main className="p-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-white">Integrations</h2>
          <Button asChild className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700">
            <Link href="/dashboard/integrations/add">
              <Plus className="text-base" />
              <span>New Integration</span>
            </Link>
          </Button>
        </div>
        <div className="space-y-12">
          <div>
            <h3 className="mb-4 text-xl font-semibold text-white">
              Active Integrations
            </h3>
            <div className="overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900">
              <Table>
                <TableHeader className="bg-neutral-800/50">
                  <TableRow>
                    <TableHead>
                      Integration
                    </TableHead>
                    <TableHead>
                      Status
                    </TableHead>
                    <TableHead>
                      Last Synced
                    </TableHead>
                    <TableHead>
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {activeIntegrations.map((integration, index) => (
                    <TableRow key={index}>
                      <TableCell className="whitespace-nowrap font-medium text-white">
                        {integration.name}
                      </TableCell>
                      <TableCell>
                        {getStatusBadge(integration.status)}
                      </TableCell>
                      <TableCell className="whitespace-nowrap text-neutral-300">
                        {integration.lastSynced}
                      </TableCell>
                      <TableCell className="whitespace-nowrap text-right text-sm font-medium">
                        <Link
                          className="text-primary hover:text-primary/80"
                          href="#"
                        >
                          Edit
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-white">
              Inactive Integrations
            </h3>
            <div className="overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900">
              <Table>
                <TableHeader className="bg-neutral-800/50">
                   <TableRow>
                    <TableHead>
                      Integration
                    </TableHead>
                    <TableHead>
                      Status
                    </TableHead>
                    <TableHead>
                      Last Synced
                    </TableHead>
                    <TableHead>
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inactiveIntegrations.map((integration, index) => (
                     <TableRow key={index}>
                      <TableCell className="whitespace-nowrap font-medium text-white">
                        {integration.name}
                      </TableCell>
                       <TableCell>
                        {integration.status === "Inactive" ? (
                             <Badge className="inline-flex items-center rounded-full bg-neutral-500/10 px-2.5 py-0.5 text-xs font-medium text-neutral-400">
                                <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-neutral-400" fill="currentColor" viewBox="0 0 8 8">
                                    <circle cx="4" cy="4" r="3"></circle>
                                </svg>
                                Inactive
                            </Badge>
                        ) : getStatusBadge(integration.status)}
                      </TableCell>
                      <TableCell className="whitespace-nowrap text-neutral-300">
                        {integration.lastSynced}
                      </TableCell>
                      <TableCell className="whitespace-nowrap text-right text-sm font-medium">
                        <Link
                          className="text-primary hover:text-primary/80"
                          href="#"
                        >
                          Edit
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

    