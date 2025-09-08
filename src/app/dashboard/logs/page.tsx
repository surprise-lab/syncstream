
'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useState } from 'react';

const alerts = [
  {
    id: '#12345',
    timestamp: '2024-01-15 10:00 AM',
    severity: 'Critical',
    source: 'System A',
    message: 'Sync failed due to network error',
    status: 'Unresolved',
  },
  {
    id: '#12348',
    timestamp: '2024-01-16 09:15 AM',
    severity: 'Critical',
    source: 'System A',
    message: 'Authentication failed',
    status: 'Unresolved',
  },
  {
    id: '#12346',
    timestamp: '2024-01-15 11:30 AM',
    severity: 'Warning',
    source: 'System B',
    message: 'Data validation error during sync',
    status: 'Unresolved',
  },
  {
    id: '#12349',
    timestamp: '2024-01-16 12:00 PM',
    severity: 'Warning',
    source: 'System B',
    message: 'Sync paused due to user action',
    status: 'Unresolved',
  },
  {
    id: '#12347',
    timestamp: '2024-01-15 01:45 PM',
    severity: 'Informational',
    source: 'System C',
    message: 'Sync completed with warnings',
    status: 'Resolved',
  },
  {
    id: '#12350',
    timestamp: '2024-01-16 03:30 PM',
    severity: 'Informational',
    source: 'System C',
    message: 'Sync successful',
    status: 'Resolved',
  },
];

const getSeverityBadge = (severity: string) => {
  switch (severity) {
    case 'Critical':
      return (
        <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-red-500">error</span>
            <span className="font-medium text-red-400">Critical</span>
        </div>
      );
    case 'Warning':
      return (
        <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-orange-500">warning</span>
            <span className="font-medium text-orange-400">Warning</span>
        </div>
      );
    case 'Informational':
      return (
        <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-blue-500">info</span>
            <span className="font-medium text-blue-400">Informational</span>
        </div>
      );
    default:
      return null;
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'Unresolved':
      return (
        <span className="inline-flex items-center rounded-full bg-yellow-500/10 px-2.5 py-1 text-xs font-medium text-yellow-400">
          Unresolved
        </span>
      );
    case 'Resolved':
      return (
        <span className="inline-flex items-center rounded-full bg-green-500/10 px-2.5 py-1 text-xs font-medium text-green-400">
          Resolved
        </span>
      );
    default:
      return null;
  }
};

export default function AlertsPage() {
  const [activeTab, setActiveTab] = useState('All');
  return (
    <>
      <header className="sticky top-0 z-10 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-800 bg-[#0f172a]/80 px-10 py-3 backdrop-blur-sm">
        <div>
          <h1 className="text-2xl font-bold text-white">Alerts</h1>
          <p className="text-sm text-gray-400">
            View and manage system alerts and notifications.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="relative rounded-full p-2 text-gray-400 hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-800"
          >
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
            </span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full p-2 text-gray-400 hover:bg-slate-700 hover:text-white"
          >
            <span className="material-symbols-outlined"> help_outline </span>
          </Button>
        </div>
      </header>
      <div className="p-10">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Button
                onClick={() => setActiveTab('All')}
                className={activeTab === 'All' ? "rounded-md bg-slate-700 px-4 py-2 text-sm font-medium text-white hover:bg-slate-600" : "rounded-md px-4 py-2 text-sm font-medium text-gray-400 hover:bg-slate-700 hover:text-white"}
                variant="ghost"
              >
                All
              </Button>
              <Button
                onClick={() => setActiveTab('Unresolved')}
                className={activeTab === 'Unresolved' ? "rounded-md bg-slate-700 px-4 py-2 text-sm font-medium text-white hover:bg-slate-600" : "rounded-md px-4 py-2 text-sm font-medium text-gray-400 hover:bg-slate-700 hover:text-white"}
                variant="ghost"
              >
                Unresolved
              </Button>
              <Button
                onClick={() => setActiveTab('Resolved')}
                className={activeTab === 'Resolved' ? "rounded-md bg-slate-700 px-4 py-2 text-sm font-medium text-white hover:bg-slate-600" : "rounded-md px-4 py-2 text-sm font-medium text-gray-400 hover:bg-slate-700 hover:text-white"}
                variant="ghost"
              >
                Resolved
              </Button>
            </div>
            <div className="flex items-center gap-4">
                <div className="relative w-full max-w-xs">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"> search </span>
                    <Input className="form-input w-full rounded-md border-slate-700 bg-slate-800 py-2 pl-10 pr-4 text-white placeholder:text-gray-500 focus:border-primary-500 focus:ring-primary-500" placeholder="Search alerts..." type="text"/>
                </div>
                <div className="relative">
                    <Button className="flex items-center gap-2 rounded-md border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700">
                        <span className="material-symbols-outlined text-base">filter_list</span>
                        <span>Severity</span>
                        <span className="material-symbols-outlined text-base">expand_more</span>
                    </Button>
                </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-900/50">
            <div className="overflow-x-auto">
              <Table className="w-full min-w-max table-auto">
                <TableHeader className="bg-slate-800/50">
                  <TableRow>
                    <TableHead className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                      <div className="flex items-center gap-1">
                        Alert ID
                        <span className="material-symbols-outlined text-base">
                          unfold_more
                        </span>
                      </div>
                    </TableHead>
                    <TableHead className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                      <div className="flex items-center gap-1">
                        Timestamp
                        <span className="material-symbols-outlined text-base">
                          unfold_more
                        </span>
                      </div>
                    </TableHead>
                    <TableHead className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                      <div className="flex items-center gap-1">
                        Severity
                        <span className="material-symbols-outlined text-base">
                          arrow_downward
                        </span>
                      </div>
                    </TableHead>
                    <TableHead className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                      Source
                    </TableHead>
                    <TableHead className="w-1/3 px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                      Message
                    </TableHead>
                    <TableHead className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                      Status
                    </TableHead>
                    <TableHead className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="divide-y divide-slate-800">
                  {alerts.map((alert) => (
                    <TableRow key={alert.id} className="hover:bg-slate-800/40">
                      <TableCell className="px-4 py-3 text-sm font-mono text-gray-400">
                        {alert.id}
                      </TableCell>
                      <TableCell className="px-4 py-3 text-sm text-gray-400">
                        {alert.timestamp}
                      </TableCell>
                      <TableCell className="px-4 py-3 text-sm">
                        {getSeverityBadge(alert.severity)}
                      </TableCell>
                      <TableCell className="px-4 py-3 text-sm text-gray-400">
                        {alert.source}
                      </TableCell>
                      <TableCell className="px-4 py-3 text-sm text-gray-300">
                        {alert.message}
                      </TableCell>
                      <TableCell className="px-4 py-3 text-sm">
                        {getStatusBadge(alert.status)}
                      </TableCell>
                      <TableCell className="px-4 py-3 text-sm">
                        <Button variant="outline" size="sm" className="rounded-md bg-slate-700/50 px-3 py-1.5 text-xs font-medium text-gray-300 hover:bg-slate-700">
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="flex items-center justify-between border-t border-slate-800 px-4 py-3">
              <span className="text-sm text-gray-400">
                Showing 1 to 6 of 24 results
              </span>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-700 text-gray-400 hover:bg-slate-700 hover:text-white"
                >
                  <span className="material-symbols-outlined text-lg">
                    chevron_left
                  </span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-700 bg-primary-600 text-white"
                >
                  1
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-700 text-gray-400 hover:bg-slate-700 hover:text-white"
                >
                  2
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-700 text-gray-400 hover:bg-slate-700 hover:text-white"
                >
                  3
                </Button>
                <span className="text-gray-500">...</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-700 text-gray-400 hover:bg-slate-700 hover:text-white"
                >
                  8
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-700 text-gray-400 hover:bg-slate-700 hover:text-white"
                >
                  <span className="material-symbols-outlined text-lg">
                    chevron_right
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

    