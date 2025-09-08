
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
import { Badge } from '@/components/ui/badge';
import { Search, ChevronDown, ChevronRight } from 'lucide-react';
import * as React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const historyData = [
  {
    date: '2024-03-15 10:00 AM',
    status: 'Success',
    entity: 'Contacts',
    recordsProcessed: 1000,
    recordsFailed: 0,
    duration: '10 minutes',
    logs: `[10:00:01] Starting sync for Contacts...
[10:00:05] Fetched 1000 records from source.
[10:05:00] Processing records...
[10:09:55] 1000 records successfully synced.
[10:10:00] Sync completed successfully.`,
  },
  {
    date: '2024-03-15 10:15 AM',
    status: 'Failed',
    entity: 'Accounts',
    recordsProcessed: 500,
    recordsFailed: 50,
    duration: '5 minutes',
    logs: `[10:15:01] Starting sync for Accounts...
[10:15:05] Fetched 500 records from source.
[10:17:30] Processing records...
[10:19:50] Error: 50 records failed validation. See error log for details.
[10:20:00] Sync failed.`,
  },
  {
    date: '2024-03-15 10:30 AM',
    status: 'Success',
    entity: 'Products',
    recordsProcessed: 2000,
    recordsFailed: 0,
    duration: '20 minutes',
    logs: `[10:30:01] Starting sync for Products...
[10:30:05] Fetched 2000 records from source.
[10:40:00] Processing records...
[10:49:55] 2000 records successfully synced.
[10:50:00] Sync completed successfully.`,
  },
  {
    date: '2024-03-15 10:45 AM',
    status: 'Success',
    entity: 'Contacts',
    recordsProcessed: 1500,
    recordsFailed: 0,
    duration: '15 minutes',
    logs: `[10:45:01] Starting sync for Contacts...
[10:45:05] Fetched 1500 records from source.
[10:55:00] Processing records...
[10:59:55] 1500 records successfully synced.
[11:00:00] Sync completed successfully.`,
  },
  {
    date: '2024-03-15 11:00 AM',
    status: 'Failed',
    entity: 'Accounts',
    recordsProcessed: 750,
    recordsFailed: 75,
    duration: '7 minutes',
    logs: `[11:00:01] Starting sync for Accounts...
[11:00:05] Fetched 750 records from source.
[11:02:30] Processing records...
[11:06:50] Error: 75 records failed validation. See error log for details.
[11:07:00] Sync failed.`,
  },
  {
    date: '2024-03-15 11:15 AM',
    status: 'Success',
    entity: 'Products',
    recordsProcessed: 2500,
    recordsFailed: 0,
    duration: '25 minutes',
    logs: `[11:15:01] Starting sync for Products...
[11:15:05] Fetched 2500 records from source.
[11:30:00] Processing records...
[11:39:55] 2500 records successfully synced.
[11:40:00] Sync completed successfully.`,
  },
  {
    date: '2024-03-15 11:30 AM',
    status: 'Success',
    entity: 'Contacts',
    recordsProcessed: 1200,
    recordsFailed: 0,
    duration: '12 minutes',
    logs: `[11:30:01] Starting sync for Contacts...
[11:30:05] Fetched 1200 records from source.
[11:38:00] Processing records...
[11:41:55] 1200 records successfully synced.
[11:42:00] Sync completed successfully.`,
  },
  {
    date: '2024-03-15 11:45 AM',
    status: 'Failed',
    entity: 'Accounts',
    recordsProcessed: 600,
    recordsFailed: 60,
    duration: '6 minutes',
    logs: `[11:45:01] Starting sync for Accounts...
[11:45:05] Fetched 600 records from source.
[11:48:30] Processing records...
[11:50:50] Error: 60 records failed validation. See error log for details.
[11:51:00] Sync failed.`,
  },
  {
    date: '2024-03-15 12:00 PM',
    status: 'Success',
    entity: 'Products',
    recordsProcessed: 1800,
    recordsFailed: 0,
    duration: '18 minutes',
    logs: `[12:00:01] Starting sync for Products...
[12:00:05] Fetched 1800 records from source.
[12:10:00] Processing records...
[12:17:55] 1800 records successfully synced.
[12:18:00] Sync completed successfully.`,
  },
  {
    date: '2024-03-15 12:15 PM',
    status: 'Success',
    entity: 'Contacts',
    recordsProcessed: 1100,
    recordsFailed: 0,
    duration: '11 minutes',
    logs: `[12:15:01] Starting sync for Contacts...
[12:15:05] Fetched 1100 records from source.
[12:20:00] Processing records...
[12:25:55] 1100 records successfully synced.
[12:26:00] Sync completed successfully.`,
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'Success':
      return (
        <Badge className="inline-flex items-center rounded-full bg-green-900/50 px-2.5 py-0.5 text-xs font-medium text-green-400">
          <span className="mr-1.5 h-2 w-2 rounded-full bg-green-500"></span>
          Success
        </Badge>
      );
    case 'Failed':
      return (
        <Badge className="inline-flex items-center rounded-full bg-red-900/50 px-2.5 py-0.5 text-xs font-medium text-red-400">
          <span className="mr-1.5 h-2 w-2 rounded-full bg-red-500"></span>
          Failed
        </Badge>
      );
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

export default function HistoryPage() {
  return (
    <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white">Sync History</h2>
          <p className="text-slate-400">View and search the history of all sync activities.</p>
        </div>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <Input
              className="w-full rounded-md border-0 bg-slate-800 py-2 pl-10 pr-4 text-white placeholder-slate-400 focus:ring-2 focus:ring-primary-500"
              placeholder="Search by keyword..."
              type="text"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <Button className="flex items-center gap-2 rounded-md bg-slate-800 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700">
              <span>Date Range</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
            <Button className="flex items-center gap-2 rounded-md bg-slate-800 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700">
              <span>Status</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
            <Button className="flex items-center gap-2 rounded-md bg-slate-800 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700">
              <span>Entity</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="overflow-x-auto rounded-lg border border-slate-800 bg-slate-950">
          <Table className="w-full table-auto">
            <TableHeader className="bg-slate-900">
              <TableRow>
                <TableHead className="w-10 px-6 py-3"></TableHead>
                <TableHead className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-400">Date</TableHead>
                <TableHead className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-400">Status</TableHead>
                <TableHead className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-400">Entity</TableHead>
                <TableHead className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-400">Records Processed</TableHead>
                <TableHead className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-400">Records Failed</TableHead>
                <TableHead className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-400">Duration</TableHead>
                <TableHead className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-400">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-slate-800">
              {historyData.map((item, index) => (
                <React.Fragment key={index}>
                  <TableRow className="relative">
                    <TableCell className="whitespace-nowrap px-6 py-4">
                      <input className="peer sr-only" id={`expand-${index}`} name="expand" type="checkbox" />
                      <label htmlFor={`expand-${index}`} className="cursor-pointer">
                        <ChevronRight className="transition-transform duration-300 peer-checked:rotate-90" />
                      </label>
                    </TableCell>
                    <TableCell className="whitespace-nowrap px-6 py-4 text-sm text-slate-300">{item.date}</TableCell>
                    <TableCell className="whitespace-nowrap px-6 py-4">{getStatusBadge(item.status)}</TableCell>
                    <TableCell className="whitespace-nowrap px-6 py-4 text-sm text-slate-300">{item.entity}</TableCell>
                    <TableCell className="whitespace-nowrap px-6 py-4 text-sm text-slate-300">{item.recordsProcessed}</TableCell>
                    <TableCell className={cn("whitespace-nowrap px-6 py-4 text-sm", item.recordsFailed > 0 ? 'text-red-400' : 'text-slate-300')}>{item.recordsFailed}</TableCell>
                    <TableCell className="whitespace-nowrap px-6 py-4 text-sm text-slate-300">{item.duration}</TableCell>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                        <Link className="text-primary-500 hover:text-primary-400" href="/dashboard/history/details">View Logs</Link>
                    </td>
                  </TableRow>
                  <TableRow className="hidden bg-slate-900 peer-checked:table-row">
                    <TableCell colSpan={8} className="px-12 py-4">
                      <div className="text-white">
                        <h4 className="mb-2 font-semibold">Detailed Logs:</h4>
                        <pre className="whitespace-pre-wrap rounded-md bg-slate-800 p-4 text-sm text-slate-300">
                          <code>{item.logs}</code>
                        </pre>
                      </div>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
  );
}
