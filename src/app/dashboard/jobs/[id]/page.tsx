
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

const job = {
    id: '1',
    name: 'Nightly Backup - User Data',
    status: 'Paused',
    lastRun: '2024-01-19 09:00 AM',
    nextRun: 'N/A',
    errors: 'None',
};

const logs = `[2024-01-19 09:00:01] INFO: Starting nightly backup for user data.
[2024-01-19 09:00:02] INFO: Connecting to database 'user_data_db'.
[2024-01-19 09:00:03] INFO: Database connection successful.
[2024-01-19 09:00:03] INFO: Beginning data dump process.
[2024-01-19 09:05:21] INFO: Data dump complete. 5.7 GB written to '/backups/user_data_20240119.sql'.
[2024-01-19 09:05:22] INFO: Compressing backup file.
[2024-01-19 09:08:45] INFO: Compression complete. File size: 1.2 GB.
[2024-01-19 09:08:46] INFO: Uploading backup to cloud storage 'S3-backup-bucket'.
[2024-01-19 09:15:10] INFO: Upload successful.
[2024-01-19 09:15:11] INFO: Verifying backup integrity.
[2024-01-19 09:16:30] INFO: Verification successful.
[2024-01-19 09:16:31] INFO: Nightly backup process completed successfully.
[2024-01-19 09:16:32] INFO: Job paused by user.`;


export default function JobDetailsPage({ params }: { params: { id: string } }) {

  return (
     <div className="flex flex-col gap-8">
            <div className="flex flex-wrap justify-between items-center gap-4">
                <div>
                    <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] mb-2">
                        <Link href="/dashboard/jobs" className="hover:text-[var(--text-primary)]">Jobs</Link>
                        <span>/</span>
                        <span>{job.name}</span>
                    </div>
                    <h2 className="text-[var(--text-primary)] text-4xl font-bold">{job.name}</h2>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium status-paused">
                    <span className="w-2 h-2 rounded-full bg-current"></span>
                    {job.status}
                </div>
            </div>

            <div className="border-b border-white/10">
                <nav className="flex gap-4">
                    <button className="px-3 py-2 text-sm font-medium text-[var(--text-primary)] border-b-2 border-[var(--primary-color)]">Output</button>
                    <button className="px-3 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-b-2 border-transparent">Errors</button>
                    <button className="px-3 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-b-2 border-transparent">History</button>
                </nav>
            </div>

            <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold text-[var(--text-primary)]">Logs</h4>
                    <div className="flex gap-2">
                        <Button variant="outline" className="flex items-center justify-center gap-2 rounded-md h-9 px-3 bg-white/10 text-[var(--text-secondary)] text-xs font-medium hover:text-[var(--text-primary)] transition-colors">
                            <span className="material-symbols-outlined text-base">download</span>
                            <span>Download</span>
                        </Button>
                        <Button variant="outline" className="flex items-center justify-center gap-2 rounded-md h-9 px-3 bg-white/10 text-[var(--text-secondary)] text-xs font-medium hover:text-[var(--text-primary)] transition-colors">
                            <span className="material-symbols-outlined text-base">content_copy</span>
                            <span>Copy</span>
                        </Button>
                    </div>
                </div>
                <div className="bg-[var(--secondary-color)] rounded-md p-4 h-96 overflow-auto">
                    <pre className="text-sm text-[var(--text-secondary)] whitespace-pre-wrap font-mono">{logs}</pre>
                </div>
            </div>
        </div>
  );
}
