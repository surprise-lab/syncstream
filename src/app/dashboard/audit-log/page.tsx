
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

const auditLogs = [
  {
    user: 'Alex Bennett',
    date: '2024-07-26 14:30',
    action: 'Policy Change',
    details: 'Retention period for logs increased from 30 to 60 days',
  },
  {
    user: 'Jordan Carter',
    date: '2024-07-25 09:15',
    action: 'Setting Update',
    details: 'Enabled two-factor authentication for all users',
  },
  {
    user: 'Riley Davis',
    date: '2024-07-24 16:45',
    action: 'Policy Change',
    details: 'Data export policy updated to include customer data',
  },
  {
    user: 'Morgan Evans',
    date: '2024-07-23 11:00',
    action: 'Setting Update',
    details: 'API access restricted to specific IP addresses',
  },
  {
    user: 'Casey Foster',
    date: '2024-07-22 13:20',
    action: 'Policy Change',
    details: 'Retention period for backups increased from 90 to 120 days',
  },
  {
    user: 'Blake Green',
    date: '2024-07-21 10:50',
    action: 'Setting Update',
    details: 'Email notifications enabled for policy changes',
  },
  {
    user: 'Quinn Hayes',
    date: '2024-07-20 15:05',
    action: 'Policy Change',
    details: 'Data anonymization policy updated to exclude certain fields',
  },
  {
    user: 'Avery Ingram',
    date: '2024-07-19 12:30',
    action: 'Setting Update',
    details: 'User roles and permissions updated',
  },
  {
    user: 'Jamie Lewis',
    date: '2024-07-18 08:45',
    action: 'Policy Change',
    details: 'Retention period for archived data increased from 180 to 365 days',
  },
  {
    user: 'Drew Morgan',
    date: '2024-07-17 17:10',
    action: 'Setting Update',
    details: 'Audit log retention policy updated to 365 days',
  },
];

export default function AuditLogPage() {
  return (
    <main className="flex-1 px-10 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Audit Log</h1>
          <p className="mt-2 text-gray-400">
            Track changes to data retention policies and other critical
            application settings.
          </p>
        </div>
        <div className="mb-6 flex items-center gap-4">
          <div className="relative flex-1">
            <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              {' '}
              search{' '}
            </span>
            <Input
              className="w-full rounded-md border-gray-800 bg-gray-900 py-2.5 pl-10 pr-4 text-white placeholder-gray-500 focus:border-[var(--primary-500)] focus:ring-[var(--primary-500)]"
              placeholder="Search audit logs by user, action, or details..."
              type="search"
            />
          </div>
          <div className="flex items-center gap-2">
            <Button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-md bg-gray-800 px-4 text-sm font-medium text-white hover:bg-gray-700 transition-colors">
              <span>User</span>
              <span className="material-symbols-outlined text-base">
                {' '}
                expand_more{' '}
              </span>
            </Button>
            <Button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-md bg-gray-800 px-4 text-sm font-medium text-white hover:bg-gray-700 transition-colors">
              <span>Date</span>
              <span className="material-symbols-outlined text-base">
                {' '}
                expand_more{' '}
              </span>
            </Button>
            <Button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-md bg-gray-800 px-4 text-sm font-medium text-white hover:bg-gray-700 transition-colors">
              <span>Action</span>
              <span className="material-symbols-outlined text-base">
                {' '}
                expand_more{' '}
              </span>
            </Button>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg border border-gray-800 bg-gray-900">
          <div className="overflow-x-auto">
            <Table className="min-w-full divide-y divide-gray-800">
              <TableHeader className="bg-gray-900">
                <TableRow>
                  <TableHead
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400"
                    scope="col"
                  >
                    User
                  </TableHead>
                  <TableHead
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400"
                    scope="col"
                  >
                    Date
                  </TableHead>
                  <TableHead
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400"
                    scope="col"
                  >
                    Action
                  </TableHead>
                  <TableHead
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400"
                    scope="col"
                  >
                    Details
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="divide-y divide-gray-800 bg-gray-900/50">
                {auditLogs.map((log, index) => (
                  <TableRow key={index}>
                    <TableCell className="whitespace-nowrap px-6 py-4 text-sm font-medium text-white">
                      {log.user}
                    </TableCell>
                    <TableCell className="whitespace-nowrap px-6 py-4 text-sm text-gray-400">
                      {log.date}
                    </TableCell>
                    <TableCell className="whitespace-nowrap px-6 py-4">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          log.action === 'Policy Change'
                            ? 'bg-blue-900/50 text-blue-300'
                            : 'bg-purple-900/50 text-purple-300'
                        }`}
                      >
                        {log.action}
                      </span>
                    </TableCell>
                    <TableCell className="whitespace-nowrap px-6 py-4 text-sm text-gray-400">
                      {log.details}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </main>
  );
}
