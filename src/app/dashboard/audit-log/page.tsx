
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
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  ArrowUp,
  Filter,
  Download,
  Search,
} from 'lucide-react';

const auditLogs = [
  {
    timestamp: '2024-01-26 14:30:00',
    user: 'Alice Johnson',
    initials: 'AJ',
    action: 'Created Integration',
    resource: 'Integration A',
    color: 'bg-blue-400/20 text-blue-300',
  },
  {
    timestamp: '2024-01-26 15:00:00',
    user: 'Bob Williams',
    initials: 'BW',
    action: 'Updated Workflow',
    resource: 'Workflow X',
    color: 'bg-indigo-400/20 text-indigo-300',
  },
  {
    timestamp: '2024-01-26 15:30:00',
    user: 'Charlie Davis',
    initials: 'CD',
    action: 'Deleted Data Mapping',
    resource: 'Mapping Y',
    color: 'bg-purple-400/20 text-purple-300',
  },
  {
    timestamp: '2024-01-26 16:00:00',
    user: 'Diana Evans',
    initials: 'DE',
    action: 'Created Integration',
    resource: 'Integration B',
    color: 'bg-pink-400/20 text-pink-300',
  },
  {
    timestamp: '2024-01-26 16:30:00',
    user: 'Ethan Foster',
    initials: 'EF',
    action: 'Updated Workflow',
    resource: 'Workflow Z',
    color: 'bg-teal-400/20 text-teal-300',
  },
  {
    timestamp: '2024-01-26 17:00:00',
    user: 'Fiona Green',
    initials: 'FG',
    action: 'Deleted Data Mapping',
    resource: 'Mapping W',
    color: 'bg-cyan-400/20 text-cyan-300',
  },
  {
    timestamp: '2024-01-26 17:30:00',
    user: 'George Harris',
    initials: 'GH',
    action: 'Created Integration',
    resource: 'Integration C',
    color: 'bg-orange-400/20 text-orange-300',
  },
  {
    timestamp: '2024-01-26 18:00:00',
    user: 'Hannah Clark',
    initials: 'HC',
    action: 'Updated Workflow',
    resource: 'Workflow V',
    color: 'bg-lime-400/20 text-lime-300',
  },
];

const getActionBadge = (action: string) => {
  if (action.startsWith('Created')) {
    return (
      <span className="inline-flex items-center rounded-full bg-green-500/20 px-2.5 py-0.5 text-xs font-medium text-green-400">
        {action}
      </span>
    );
  }
  if (action.startsWith('Updated')) {
    return (
      <span className="inline-flex items-center rounded-full bg-yellow-500/20 px-2.5 py-0.5 text-xs font-medium text-yellow-400">
        {action}
      </span>
    );
  }
  if (action.startsWith('Deleted')) {
    return (
      <span className="inline-flex items-center rounded-full bg-red-500/20 px-2.5 py-0.5 text-xs font-medium text-red-400">
        {action}
      </span>
    );
  }
  return null;
};

export default function AuditLogPage() {
  return (
    <main className="flex-1 p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-white">User Activity</h2>
        <p className="text-gray-400">
          Track all user activities within the SyncStream application.
        </p>
      </div>
      <div className="rounded-lg border border-gray-800 bg-gray-900/50 shadow-md">
        <div className="flex items-center justify-between gap-4 border-b border-gray-800 p-4">
          <div className="relative w-full max-w-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              className="w-full rounded-md border-gray-700 bg-gray-800 py-2 pl-10 pr-4 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-primary-500"
              placeholder="Search logs by user, action, or resource..."
              type="text"
            />
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="flex items-center gap-2 rounded-md border-gray-700 bg-gray-800 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700"
            >
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 rounded-md border-gray-700 bg-gray-800 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700"
            >
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-gray-800/50">
              <TableRow>
                <TableHead className="w-1/4 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                  <Button variant="ghost" className="table-header-sort-button p-0 hover:bg-transparent">
                    Timestamp <ArrowUp className="h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead className="w-1/4 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                  <Button variant="ghost" className="table-header-sort-button p-0 hover:bg-transparent">User</Button>
                </TableHead>
                <TableHead className="w-1/4 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                  <Button variant="ghost" className="table-header-sort-button p-0 hover:bg-transparent">Action</Button>
                </TableHead>
                <TableHead className="w-1/4 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                  <Button variant="ghost" className="table-header-sort-button p-0 hover:bg-transparent">Resource</Button>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-800">
              {auditLogs.map((log) => (
                <TableRow key={log.timestamp}>
                  <TableCell className="px-6 py-4 text-sm text-gray-300">{log.timestamp}</TableCell>
                  <TableCell className="px-6 py-4 text-sm text-gray-300">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className={log.color}>{log.initials}</AvatarFallback>
                      </Avatar>
                      <span>{log.user}</span>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-4 text-sm text-gray-300">
                    {getActionBadge(log.action)}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-sm text-gray-300">{log.resource}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-between border-t border-gray-800 px-4 py-3">
          <p className="text-sm text-gray-400">
            Showing <span className="font-medium text-white">1</span> to{' '}
            <span className="font-medium text-white">8</span> of{' '}
            <span className="font-medium text-white">100</span> results
          </p>
          <div className="inline-flex rounded-md shadow-sm">
            <Button
              variant="outline"
              className="relative inline-flex items-center rounded-l-md border-gray-700 bg-gray-800 px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700"
            >
              Previous
            </Button>
            <Button
              variant="outline"
              className="relative -ml-px inline-flex items-center rounded-r-md border-gray-700 bg-gray-800 px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
