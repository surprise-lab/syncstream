
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
    timestamp: '2024-01-15 14:30',
    user: 'Alex Johnson',
    source: 'CRM',
    destination: 'Marketing Automation',
    dataField: 'Customer Name',
    oldValue: 'John Smith',
    newValue: 'Jonathan Smith',
  },
  {
    timestamp: '2024-01-15 14:35',
    user: 'Alex Johnson',
    source: 'CRM',
    destination: 'Marketing Automation',
    dataField: 'Customer Email',
    oldValue: 'john.smith@example.com',
    newValue: 'jonathan.smith@example.com',
  },
  {
    timestamp: '2024-01-15 15:00',
    user: 'Sarah Lee',
    source: 'Marketing Automation',
    destination: 'CRM',
    dataField: 'Campaign Status',
    oldValue: { value: 'Draft', type: 'warning' },
    newValue: { value: 'Active', type: 'success' },
  },
  {
    timestamp: '2024-01-15 15:15',
    user: 'Sarah Lee',
    source: 'Marketing Automation',
    destination: 'Finance System',
    dataField: 'Campaign Budget',
    oldValue: '$5000',
    newValue: '$7500',
  },
  {
    timestamp: '2024-01-16 09:00',
    user: 'David Chen',
    source: 'E-commerce',
    destination: 'CRM',
    dataField: 'Product Price',
    oldValue: '$29.99',
    newValue: '$34.99',
  },
  {
    timestamp: '2024-01-16 09:30',
    user: 'David Chen',
    source: 'E-commerce',
    destination: 'Finance System',
    dataField: 'Product Stock',
    oldValue: '100',
    newValue: '50',
  },
  {
    timestamp: '2024-01-16 10:00',
    user: 'Emily White',
    source: 'Support System',
    destination: 'CRM',
    dataField: 'Ticket Status',
    oldValue: { value: 'Open', type: 'info' },
    newValue: { value: 'Closed', type: 'neutral' },
  },
  {
    timestamp: '2024-01-16 10:15',
    user: 'Emily White',
    source: 'Support System',
    destination: 'CRM',
    dataField: 'Ticket Priority',
    oldValue: { value: 'Low', type: 'neutral' },
    newValue: { value: 'High', type: 'danger' },
  },
  {
    timestamp: '2024-01-16 11:00',
    user: 'Michael Brown',
    source: 'Finance System',
    destination: 'E-commerce',
    dataField: 'Invoice Amount',
    oldValue: '$150.00',
    newValue: '$175.00',
  },
  {
    timestamp: '2024-01-16 11:30',
    user: 'Michael Brown',
    source: 'Finance System',
    destination: 'CRM',
    dataField: 'Invoice Due Date',
    oldValue: '2024-01-31',
    newValue: '2024-02-15',
  },
];

const getChangeBadge = (value: string | { value: string; type: string }) => {
    if (typeof value !== 'object') {
      return value;
    }
  
    const baseClasses = 'inline-flex items-center rounded-full px-2 py-1 text-xs font-medium';
    const typeClasses = {
      success: 'bg-green-900/50 text-green-300',
      warning: 'bg-yellow-900/50 text-yellow-300',
      danger: 'bg-red-900/50 text-red-300',
      info: 'bg-blue-900/50 text-blue-300',
      neutral: 'bg-gray-700 text-gray-300',
    };
  
    return (
      <span className={`${baseClasses} ${typeClasses[value.type] || typeClasses.neutral}`}>
        {value.value}
      </span>
    );
  };
  

export default function AuditLogPage() {
    return (
        <main className="flex-1 px-10 py-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-white">Data Change Audit Log</h1>
                    <p className="mt-2 text-base text-gray-400">Track and filter changes to data within integrated systems through SyncStream.</p>
                </div>
                <div className="space-y-6">
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex flex-wrap items-center gap-2">
                            <div className="relative w-full max-w-xs">
                                <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"> search </span>
                                <Input className="form-input w-full rounded-md border-none bg-[#233648] py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500" placeholder="Search by user, data field..." type="search" />
                            </div>
                            <Button variant="ghost" className="flex h-10 items-center justify-center gap-x-2 rounded-md bg-[#233648] px-4 text-sm font-medium text-white transition-colors hover:bg-[#2d4257]">
                                <span>Date Range</span>
                                <span className="material-symbols-outlined text-base"> expand_more </span>
                            </Button>
                            <Button variant="ghost" className="flex h-10 items-center justify-center gap-x-2 rounded-md bg-[#233648] px-4 text-sm font-medium text-white transition-colors hover:bg-[#2d4257]">
                                <span>Source</span>
                                <span className="material-symbols-outlined text-base"> expand_more </span>
                            </Button>
                            <Button variant="ghost" className="flex h-10 items-center justify-center gap-x-2 rounded-md bg-[#233648] px-4 text-sm font-medium text-white transition-colors hover:bg-[#2d4257]">
                                <span>Destination</span>
                                <span className="material-symbols-outlined text-base"> expand_more </span>
                            </Button>
                            <Button variant="ghost" className="flex h-10 items-center justify-center gap-x-2 rounded-md bg-[#233648] px-4 text-sm font-medium text-white transition-colors hover:bg-[#2d4257]">
                                <span>User</span>
                                <span className="material-symbols-outlined text-base"> expand_more </span>
                            </Button>
                        </div>
                        <Button className="flex h-10 items-center justify-center gap-x-2 rounded-md bg-primary-600 px-4 text-sm font-medium text-white transition-colors hover:bg-primary-700">
                            <span className="material-symbols-outlined text-base"> download </span>
                            <span>Export</span>
                        </Button>
                    </div>
                    <div className="overflow-hidden rounded-lg border border-[#324d67] bg-[#192633]">
                        <Table className="min-w-full divide-y divide-[#324d67]">
                            <TableHeader className="bg-[#192633]">
                                <TableRow>
                                    <TableHead className="w-[15%] px-4 py-3.5 text-left text-sm font-semibold text-white">Timestamp</TableHead>
                                    <TableHead className="w-[15%] px-4 py-3.5 text-left text-sm font-semibold text-white">User</TableHead>
                                    <TableHead className="w-[15%] px-4 py-3.5 text-left text-sm font-semibold text-white">Source</TableHead>
                                    <TableHead className="w-[15%] px-4 py-3.5 text-left text-sm font-semibold text-white">Destination</TableHead>
                                    <TableHead className="w-[15%] px-4 py-3.5 text-left text-sm font-semibold text-white">Data Field</TableHead>
                                    <TableHead className="w-[12.5%] px-4 py-3.5 text-left text-sm font-semibold text-white">Old Value</TableHead>
                                    <TableHead className="w-[12.5%] px-4 py-3.5 text-left text-sm font-semibold text-white">New Value</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody className="divide-y divide-[#233648]">
                                {auditLogs.map((log, index) => (
                                <TableRow key={index}>
                                    <TableCell className="px-4 py-4 text-sm text-[#92adc9]">{log.timestamp}</TableCell>
                                    <TableCell className="px-4 py-4 text-sm text-[#92adc9]">{log.user}</TableCell>
                                    <TableCell className="px-4 py-4 text-sm text-[#92adc9]">{log.source}</TableCell>
                                    <TableCell className="px-4 py-4 text-sm text-[#92adc9]">{log.destination}</TableCell>
                                    <TableCell className="px-4 py-4 text-sm text-[#92adc9]">{log.dataField}</TableCell>
                                    <TableCell className="px-4 py-4 text-sm text-[#92adc9]">{getChangeBadge(log.oldValue)}</TableCell>
                                    <TableCell className="px-4 py-4 text-sm text-[#92adc9]">{getChangeBadge(log.newValue)}</TableCell>
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
