
// src/app/dashboard/history/details/page.tsx
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import Link from 'next/link';

export default function SyncDetailsPage() {
  return (
    <>
      <div className="flex items-center gap-2 mb-6">
        <Link
          className="text-gray-400 hover:text-white text-sm"
          href="/dashboard/history"
        >
          Sync History
        </Link>
        <span className="material-symbols-outlined text-gray-500 text-sm">
          chevron_right
        </span>
        <span className="text-white text-sm font-medium">Sync Details</span>
      </div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Sync Details</h2>
          <p className="text-gray-400">
            View detailed logs and error messages for a specific sync activity.
          </p>
        </div>
        <Button className="flex items-center gap-2 rounded-md bg-[#233648] px-4 py-2 text-sm font-medium text-white hover:bg-[#2c4157] transition-colors">
            <Download className="h-4 w-4" />
            <span>Download Log</span>
        </Button>
      </div>
      <div className="bg-[#182430] rounded-lg shadow-lg">
        <div className="p-6 border-b border-[#233648]">
          <h3 className="text-xl font-bold text-white">Raw Log Data</h3>
        </div>
        <div className="p-6">
          <pre className="text-sm text-gray-300 bg-[#0d151c] p-4 rounded-md overflow-x-auto whitespace-pre-wrap font-mono">
            <code>
              2024-01-15 14:30:00 - Sync started for connection &apos;Salesforce
              to Database&apos;.
              <br />
              2024-01-15 14:30:05 - Data extraction from Salesforce initiated.
              <br />
              2024-01-15 14:30:15 - Extracted 1500 records from Salesforce.
              <br />
              2024-01-15 14:30:20 - Data transformation process started.
              <br />
              2024-01-15 14:30:30 - Transformed 1500 records successfully.
              <br />
              2024-01-15 14:30:35 - Data loading into Database initiated.
              <br />
              2024-01-15 14:30:45 - Loaded 1500 records into Database.
              <br />
              2024-01-15 14:30:50 -{' '}
              <span className="text-green-400">
                Sync completed successfully.
              </span>
            </code>
          </pre>
        </div>
        <div className="p-6 border-t border-[#233648]">
          <h3 className="text-xl font-bold text-white mb-4">Error Messages</h3>
          <div className="text-sm text-gray-400">
            No errors reported for this sync.
          </div>
        </div>
      </div>
    </>
  );
}
