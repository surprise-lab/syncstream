
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
import { Search, ChevronDown } from 'lucide-react';
import * as React from 'react';

const historyData = [
  {
    date: '2024-03-15 10:00 AM',
    status: 'Success',
    entity: 'Contacts',
    recordsProcessed: 1000,
    recordsFailed: 0,
    duration: '10 minutes',
  },
  {
    date: '2024-03-15 10:15 AM',
    status: 'Failed',
    entity: 'Accounts',
    recordsProcessed: 500,
    recordsFailed: 50,
    duration: '5 minutes',
  },
  {
    date: '2024-03-15 10:30 AM',
    status: 'Success',
    entity: 'Products',
    recordsProcessed: 2000,
    recordsFailed: 0,
    duration: '20 minutes',
  },
  {
    date: '2024-03-15 10:45 AM',
    status: 'Success',
    entity: 'Contacts',
    recordsProcessed: 1500,
    recordsFailed: 0,
    duration: '15 minutes',
  },
  {
    date: '2024-03-15 11:00 AM',
    status: 'Failed',
    entity: 'Accounts',
    recordsProcessed: 750,
    recordsFailed: 75,
    duration: '7 minutes',
  },
  {
    date: '2024-03-15 11:15 AM',
    status: 'Success',
    entity: 'Products',
    recordsProcessed: 2500,
    recordsFailed: 0,
    duration: '25 minutes',
  },
  {
    date: '2024-03-15 11:30 AM',
    status: 'Success',
    entity: 'Contacts',
    recordsProcessed: 1200,
    recordsFailed: 0,
    duration: '12 minutes',
  },
  {
    date: '2024-03-15 11:45 AM',
    status: 'Failed',
    entity: 'Accounts',
    recordsProcessed: 600,
    recordsFailed: 60,
    duration: '6 minutes',
  },
  {
    date: '2024-03-15 12:00 PM',
    status: 'Success',
    entity: 'Products',
    recordsProcessed: 1800,
    recordsFailed: 0,
    duration: '18 minutes',
  },
  {
    date: '2024-03-15 12:15 PM',
    status: 'Success',
    entity: 'Contacts',
    recordsProcessed: 1100,
    recordsFailed: 0,
    duration: '11 minutes',
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
                <TableHead className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-400">Date</TableHead>
                <TableHead className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-400">Status</TableHead>
                <TableHead className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-400">Entity</TableHead>
                <TableHead className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-400">Records Processed</TableHead>
                <TableHead className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-400">Records Failed</TableHead>
                <TableHead className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-400">Duration</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-slate-800">
              {historyData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="whitespace-nowrap px-6 py-4 text-sm text-slate-300">{item.date}</TableCell>
                  <TableCell className="whitespace-nowrap px-6 py-4">{getStatusBadge(item.status)}</TableCell>
                  <TableCell className="whitespace-nowrap px-6 py-4 text-sm text-slate-300">{item.entity}</TableCell>
                  <TableCell className="whitespace-nowrap px-6 py-4 text-sm text-slate-300">{item.recordsProcessed}</TableCell>
                  <TableCell className={`whitespace-nowrap px-6 py-4 text-sm ${item.recordsFailed > 0 ? 'text-red-400' : 'text-slate-300'}`}>{item.recordsFailed}</TableCell>
                  <TableCell className="whitespace-nowrap px-6 py-4 text-sm text-slate-300">{item.duration}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
  );
}
