
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
import { cn } from '@/lib/utils';

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
        <h2 className="text-2xl font-bold tracking-tight">User Activity</h2>
        <p className="text-gray-400">
          Track all user activities within the SyncStream application.
        </p>
      </div>
      <div className="rounded-lg border border-gray-800 bg-gray-900/50 shadow-md">
        <div className="flex items-center justify-between gap-4 border-b border-gray-800 p-4">
          <div className="relative w-full max-w-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="material-symbols-outlined text-gray-400">search</span>
            </div>
            <input
              className="w-full rounded-md border-gray-700 bg-gray-800 py-2 pl-10 pr-4 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-primary-500"
              placeholder="Search logs by resource..."
              type="text"
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <select className="w-full appearance-none rounded-md border-gray-700 bg-gray-800 py-2 pl-3 pr-10 text-sm text-gray-300 hover:bg-gray-700 focus:border-primary-500 focus:ring-primary-500">
                <option>Filter by User</option>
                <option>Alice Johnson</option>
                <option>Bob Williams</option>
                <option>Charlie Davis</option>
                <option>Diana Evans</option>
              </select>
              <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-base text-gray-400">expand_more</span>
            </div>
            <div className="relative">
                <select className="w-full appearance-none rounded-md border-gray-700 bg-gray-800 py-2 pl-3 pr-10 text-sm text-gray-300 hover:bg-gray-700 focus:border-primary-500 focus:ring-primary-500">
                    <option>Filter by Action</option>
                    <option>Created Integration</option>
                    <option>Updated Workflow</option>
                    <option>Deleted Data Mapping</option>
                </select>
                <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-base text-gray-400">expand_more</span>
            </div>
            <button
              className="flex items-center gap-2 rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700"
            >
              <span className="material-symbols-outlined text-base">download</span>
              Export
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-800">
            <thead className="bg-gray-800/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400 w-1/4" scope="col">
                  <button className="flex items-center gap-1.5 text-sm font-semibold text-white">
                    Timestamp <span className="material-symbols-outlined text-base">arrow_upward</span>
                  </button>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400 w-1/4" scope="col">
                  <button className="flex items-center gap-1.5 text-sm font-semibold text-white">User</button>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400 w-1/4" scope="col">
                  <button className="flex items-center gap-1.5 text-sm font-semibold text-white">Action</button>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400 w-1/4" scope="col">
                  <button className="flex items-center gap-1.5 text-sm font-semibold text-white">Resource</button>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {auditLogs.map((log) => (
                <tr key={log.timestamp}>
                  <td className="px-6 py-4 text-sm text-gray-300">{log.timestamp}</td>
                  <td className="px-6 py-4 text-sm text-gray-300">
                    <div className="flex items-center gap-3">
                      <div className={cn("h-8 w-8 rounded-full flex items-center justify-center font-bold", log.color)}>
                        {log.initials}
                      </div>
                      <span>{log.user}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300">
                    {getActionBadge(log.action)}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300">{log.resource}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between border-t border-gray-800 px-4 py-3">
          <p className="text-sm text-gray-400">
            Showing <span className="font-medium text-white">1</span> to{' '}
            <span className="font-medium text-white">8</span> of{' '}
            <span className="font-medium text-white">100</span> results
          </p>
          <div className="inline-flex rounded-md shadow-sm">
            <button
              className="relative inline-flex items-center rounded-l-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700"
            >
              Previous
            </button>
            <button
              className="relative -ml-px inline-flex items-center rounded-r-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
