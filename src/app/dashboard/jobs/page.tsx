
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

const jobs = [
    {
        name: 'Data Pipeline - ETL Process',
        status: 'Active',
        lastRun: '2024-01-20 10:00 AM',
        nextRun: '2024-01-21 10:00 AM',
        errors: 'None',
    },
    {
        name: 'Nightly Backup - User Data',
        status: 'Paused',
        lastRun: '2024-01-19 09:00 AM',
        nextRun: 'N/A',
        errors: 'None',
    },
    {
        name: 'API Sync - Salesforce',
        status: 'Active',
        lastRun: '2024-01-20 02:00 PM',
        nextRun: '2024-01-21 02:00 PM',
        errors: 'None',
    },
    {
        name: 'Database Indexing',
        status: 'Failed',
        lastRun: '2024-01-20 08:00 AM',
        nextRun: '2024-01-21 08:00 AM',
        errors: 'Error: Connection lost',
    },
    {
        name: 'Log Rotation',
        status: 'Active',
        lastRun: '2024-01-20 04:00 PM',
        nextRun: '2024-01-21 04:00 PM',
        errors: 'None',
    },
];

const getStatusClass = (status) => {
    switch (status) {
        case 'Active':
            return 'status-active';
        case 'Paused':
            return 'status-paused';
        case 'Failed':
            return 'status-failed';
        default:
            return '';
    }
}

export default function JobsPage() {
  return (
    <main className="flex-1 p-8">
        <div className="flex flex-col gap-8">
            <div className="flex flex-wrap justify-between items-center gap-4">
                <h2 className="text-[var(--text-primary)] text-4xl font-bold">Jobs</h2>
                <Button className="flex items-center justify-center gap-2 rounded-md h-10 px-4 bg-[var(--primary-color)] text-white text-sm font-medium hover:bg-blue-600 transition-colors">
                    <span className="material-symbols-outlined">add</span>
                    <span className="truncate">New Job</span>
                </Button>
            </div>
            <div className="flex flex-wrap gap-4 items-center">
                <div className="relative flex-1 min-w-64">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]">search</span>
                    <Input className="form-input w-full rounded-md text-white focus:outline-0 focus:ring-2 focus:ring-[var(--primary-color)] border border-transparent bg-[var(--secondary-color)] focus:border-[var(--primary-color)] h-10 placeholder:text-[var(--text-secondary)] pl-10 pr-4 text-sm" placeholder="Search jobs by name..." type="text" value=""/>
                </div>
                <div className="flex gap-2">
                    <Button className="flex items-center justify-center gap-2 rounded-md h-10 px-4 bg-[var(--secondary-color)] text-[var(--text-secondary)] text-sm font-medium hover:text-[var(--text-primary)] transition-colors">
                        <span className="material-symbols-outlined text-base">filter_list</span>
                        <span>Filter</span>
                    </Button>
                    <Button className="flex items-center justify-center gap-2 rounded-md h-10 px-4 bg-[var(--secondary-color)] text-[var(--text-secondary)] text-sm font-medium hover:text-[var(--text-primary)] transition-colors">
                        <span className="material-symbols-outlined text-base">sort</span>
                        <span>Sort</span>
                    </Button>
                </div>
            </div>
            <div className="overflow-x-auto rounded-md border border-[var(--secondary-color)] bg-[var(--secondary-color)]">
                <Table className="w-full text-left">
                    <TableHeader className="bg-white/5">
                        <TableRow>
                            <TableHead className="p-4 text-sm font-semibold text-[var(--text-primary)]">Name</TableHead>
                            <TableHead className="p-4 text-sm font-semibold text-[var(--text-primary)]">Status</TableHead>
                            <TableHead className="p-4 text-sm font-semibold text-[var(--text-primary)]">Last Run</TableHead>
                            <TableHead className="p-4 text-sm font-semibold text-[var(--text-primary)]">Next Run</TableHead>
                            <TableHead className="p-4 text-sm font-semibold text-[var(--text-primary)]">Errors</TableHead>
                            <TableHead className="p-4 text-sm font-semibold text-[var(--text-primary)] text-center">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="divide-y divide-white/5">
                        {jobs.map((job, index) => (
                            <TableRow key={index}>
                                <TableCell className="p-4 text-sm font-medium text-[var(--text-primary)]">{job.name}</TableCell>
                                <TableCell className="p-4 text-sm">
                                    <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${getStatusClass(job.status)}`}>
                                        <span className="w-2 h-2 rounded-full bg-current"></span>
                                        {job.status}
                                    </div>
                                </TableCell>
                                <TableCell className="p-4 text-sm text-[var(--text-secondary)]">{job.lastRun}</TableCell>
                                <TableCell className="p-4 text-sm text-[var(--text-secondary)]">{job.nextRun}</TableCell>
                                <TableCell className={`p-4 text-sm ${job.errors === 'None' ? 'text-[var(--text-secondary)]' : 'text-red-400'}`}>{job.errors}</TableCell>
                                <TableCell className="p-4 text-sm text-center">
                                    <div className="flex items-center justify-center gap-2">
                                        <button className="p-2 rounded-md hover:bg-white/10 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"><span className="material-symbols-outlined text-base">pause</span></button>
                                        <button className="p-2 rounded-md hover:bg-white/10 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"><span className="material-symbols-outlined text-base">play_arrow</span></button>
                                        <button className="p-2 rounded-md hover:bg-white/10 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"><span className="material-symbols-outlined text-base">replay</span></button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    </main>
  );
}
