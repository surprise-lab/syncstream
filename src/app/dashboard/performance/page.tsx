
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

const performanceLogs = [
  {
    timestamp: '2024-03-15 14:30:15',
    eventType: 'Configuration Change',
    user: 'Alex Johnson',
    description: 'Updated database connection pool size from 10 to 20.',
    impact: 'High',
  },
  {
    timestamp: '2024-03-15 10:15:42',
    eventType: 'Resource Usage Spike',
    user: 'System',
    description: "CPU usage on server 'web-prod-01' exceeded 90% threshold.",
    impact: 'Critical',
  },
  {
    timestamp: '2024-03-14 22:45:01',
    eventType: 'Deployment',
    user: 'Chris Evans',
    description: 'Deployed version 2.1.0 to production environment.',
    impact: 'Medium',
  },
  {
    timestamp: '2024-03-14 18:00:23',
    eventType: 'Configuration Change',
    user: 'Sarah Lee',
    description: 'Modified caching strategy from LRU to LFU.',
    impact: 'Low',
  },
  {
    timestamp: '2024-03-14 12:30:55',
    eventType: 'Resource Usage Spike',
    user: 'System',
    description: "Memory usage on 'db-prod-01' exceeded 80%.",
    impact: 'High',
  },
  {
    timestamp: '2024-03-13 09:00:10',
    eventType: 'Deployment',
    user: 'Chris Evans',
    description: 'Deployed version 2.0.5 with minor bug fixes.',
    impact: 'Medium',
  },
  {
    timestamp: '2024-03-12 16:45:30',
    eventType: 'Configuration Change',
    user: 'Alex Johnson',
    description: 'Updated API rate limits for partner integrations.',
    impact: 'Low',
  },
  {
    timestamp: '2024-03-12 11:15:02',
    eventType: 'Resource Usage Spike',
    user: 'System',
    description: "Disk I/O on 'logs-prod-01' exceeded threshold.",
    impact: 'Critical',
  },
];

const getEventTypeBadge = (eventType: string) => {
  switch (eventType) {
    case 'Configuration Change':
      return 'bg-blue-900/50 text-blue-300';
    case 'Resource Usage Spike':
      return 'bg-red-900/50 text-red-300';
    case 'Deployment':
      return 'bg-indigo-900/50 text-indigo-300';
    default:
      return 'bg-gray-700 text-gray-300';
  }
};

const getImpactBadge = (impact: string) => {
  switch (impact) {
    case 'Critical':
      return 'bg-red-900/60 text-red-300 ring-1 ring-inset ring-red-400/20';
    case 'High':
      return 'bg-yellow-900/60 text-yellow-300 ring-1 ring-inset ring-yellow-400/20';
    case 'Medium':
      return 'bg-orange-900/60 text-orange-300 ring-1 ring-inset ring-orange-400/20';
    case 'Low':
      return 'bg-green-900/60 text-green-300 ring-1 ring-inset ring-green-400/20';
    default:
      return 'bg-gray-700 text-gray-300';
  }
};

export default function PerformancePage() {
  return (
    <main className="flex-1 px-10 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-white text-3xl font-bold leading-tight tracking-tight">
            Performance Audit Log
          </h1>
          <p className="text-gray-400 mt-1 text-base">
            Track performance-related events and changes within the application.
          </p>
        </div>
        <div className="flex flex-col gap-4 rounded-md border border-gray-800 bg-gray-900 p-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-1 items-center gap-2">
              <label className="relative flex-1">
                <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  search
                </span>
                <Input
                  className="form-input h-10 w-full rounded-md border-gray-700 bg-gray-800/50 text-white placeholder:text-gray-500 pl-10 pr-4 text-sm focus:border-primary-500 focus:ring-primary-500"
                  placeholder="Search logs by event, user, or description..."
                  type="text"
                />
              </label>
              <Button
                variant="outline"
                className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-md border border-gray-700 bg-gray-800/50 px-4 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <span>Event Type</span>
                <span className="material-symbols-outlined text-base">
                  expand_more
                </span>
              </Button>
              <Button
                variant="outline"
                className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-md border border-gray-700 bg-gray-800/50 px-4 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <span>User</span>
                <span className="material-symbols-outlined text-base">
                  expand_more
                </span>
              </Button>
              <Button
                variant="outline"
                className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-md border border-gray-700 bg-gray-800/50 px-4 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <span>Date Range</span>
                <span className="material-symbols-outlined text-base">
                  expand_more
                </span>
              </Button>
              <Button
                variant="outline"
                className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-md border border-gray-700 bg-gray-800/50 px-4 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <span>Impact</span>
                <span className="material-symbols-outlined text-base">
                  expand_more
                </span>
              </Button>
            </div>
            <Button
              variant="outline"
              className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-md border border-gray-700 bg-gray-800/50 px-4 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              <span className="material-symbols-outlined text-base">
                download
              </span>
              <span>Export</span>
            </Button>
          </div>
          <div className="overflow-x-auto rounded-md border border-gray-800">
            <Table>
              <TableHeader className="bg-gray-800/50">
                <TableRow>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>Event Type</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Impact</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {performanceLogs.map((log, index) => (
                  <TableRow key={index}>
                    <TableCell className="whitespace-nowrap text-sm text-gray-300">
                      {log.timestamp}
                    </TableCell>
                    <TableCell className="whitespace-nowrap text-sm text-gray-300">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getEventTypeBadge(
                          log.eventType
                        )}`}
                      >
                        {log.eventType}
                      </span>
                    </TableCell>
                    <TableCell className="whitespace-nowrap text-sm text-gray-300">
                      {log.user}
                    </TableCell>
                    <TableCell className="max-w-sm truncate text-sm text-gray-400">
                      {log.description}
                    </TableCell>
                    <TableCell className="whitespace-nowrap text-sm">
                      <span
                        className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${getImpactBadge(
                          log.impact
                        )}`}
                      >
                        {log.impact}
                      </span>
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
