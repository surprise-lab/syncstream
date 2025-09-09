
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
    timestamp: '2024-03-15 10:05 AM',
    jobName: 'Data Sync Job',
    status: 'Success',
    duration: '5m 12s',
    triggeredBy: 'Alex Turner',
  },
  {
    timestamp: '2024-03-15 11:05 AM',
    jobName: 'User Data Import',
    status: 'Failed',
    duration: '2m 3s',
    triggeredBy: 'Olivia Bennett',
  },
  {
    timestamp: '2024-03-15 12:10 PM',
    jobName: 'System Backup',
    status: 'Success',
    duration: '10m 1s',
    triggeredBy: 'Ethan Carter',
  },
  {
    timestamp: '2024-03-15 01:00 PM',
    jobName: 'Database Cleanup',
    status: 'Running',
    duration: '-',
    triggeredBy: 'Sophia Davis',
  },
  {
    timestamp: '2024-03-15 01:05 PM',
    jobName: 'Database Cleanup',
    status: 'Success',
    duration: '4m 55s',
    triggeredBy: 'Sophia Davis',
  },
  {
    timestamp: '2024-03-15 02:00 PM',
    jobName: 'Log File Archiving',
    status: 'Success',
    duration: '3m 2s',
    triggeredBy: 'Liam Foster',
  },
  {
    timestamp: '2024-03-15 02:05 PM',
    jobName: 'Log File Archiving',
    status: 'Failed',
    duration: '1m 15s',
    triggeredBy: 'Liam Foster',
  },
  {
    timestamp: '2024-03-15 03:00 PM',
    jobName: 'Nightly Report Generation',
    status: 'Success',
    duration: '12m 30s',
    triggeredBy: 'System',
  },
  {
    timestamp: '2024-03-15 03:15 PM',
    jobName: 'Real-time Dashboard Update',
    status: 'Running',
    duration: '-',
    triggeredBy: 'System',
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'Success':
      return 'bg-green-900/50 text-green-300';
    case 'Failed':
      return 'bg-red-900/50 text-red-300';
    case 'Running':
      return 'bg-yellow-900/50 text-yellow-300';
    default:
      return 'bg-gray-700 text-gray-300';
  }
};

export default function AuditLogPage() {
  return (
    <main className="flex-1 px-10 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-white text-3xl font-bold leading-tight tracking-tight">
            Job Execution Audit Log
          </h1>
          <p className="text-gray-400 mt-1">
            Track and filter job executions within SyncStream.
          </p>
        </div>
        <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg">
          <div className="flex items-center justify-between p-4 border-b border-gray-700/50 flex-wrap gap-4">
            <div className="flex-1 min-w-[24rem]">
              <label className="flex flex-col w-full">
                <div className="flex w-full flex-1 items-stretch rounded-md h-10">
                  <div className="text-gray-400 flex border-none bg-gray-900/50 items-center justify-center pl-3 rounded-l-md border-r-0">
                    <span className="material-symbols-outlined !text-2xl">
                      search
                    </span>
                  </div>
                  <Input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-md text-white focus:outline-0 focus:ring-2 focus:ring-[#1173d4] border-none bg-gray-900/50 h-full placeholder:text-gray-500 px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                    placeholder="Search by job name..."
                  />
                </div>
              </label>
            </div>
            <div className="flex items-center gap-3">
              <Button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-md bg-gray-800 hover:bg-gray-700 px-4 transition-colors">
                <p className="text-white text-sm font-medium leading-normal">
                  Status: All
                </p>
                <span className="material-symbols-outlined text-white !text-xl">
                  expand_more
                </span>
              </Button>
              <Button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-md border border-gray-700 hover:bg-gray-800 px-4 transition-colors">
                <span className="material-symbols-outlined text-gray-400 !text-xl">
                  calendar_today
                </span>
                <p className="text-gray-300 text-sm font-medium leading-normal">
                  Date Range
                </p>
              </Button>
              <Button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-md border border-gray-700 bg-gray-800 hover:bg-gray-700 px-4 transition-colors">
                <span className="material-symbols-outlined text-gray-300 !text-xl">
                  download
                </span>
                <p className="text-white text-sm font-medium leading-normal">
                  Export
                </p>
              </Button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-gray-800">
                <TableRow>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>Job Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Triggered By</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="divide-y divide-gray-800">
                {auditLogs.map((log, index) => (
                  <TableRow
                    key={index}
                    className="hover:bg-gray-800/40 transition-colors"
                  >
                    <TableCell className="whitespace-nowrap px-6 py-4 text-sm text-gray-400">
                      {log.timestamp}
                    </TableCell>
                    <TableCell className="whitespace-nowrap px-6 py-4 text-sm text-white font-medium">
                      {log.jobName}
                    </TableCell>
                    <TableCell className="whitespace-nowrap px-6 py-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(
                          log.status
                        )}`}
                      >
                        {log.status}
                      </span>
                    </TableCell>
                    <TableCell className="whitespace-nowrap px-6 py-4 text-sm text-gray-400">
                      {log.duration}
                    </TableCell>
                    <TableCell className="whitespace-nowrap px-6 py-4 text-sm text-gray-300">
                      {log.triggeredBy}
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
