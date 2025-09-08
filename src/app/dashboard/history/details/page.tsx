
'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Download, Search } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';

const rawLogs = `2024-01-15 14:30:00 - Sync started for connection 'Salesforce to Database'.
2024-01-15 14:30:05 - Data extraction from Salesforce initiated.
2024-01-15 14:30:15 - Extracted 1500 records from Salesforce.
2024-01-15 14:30:20 - Data transformation process started.
2024-01-15 14:30:30 - Transformed 1500 records successfully.
2024-01-15 14:30:35 - Data loading into Database initiated.
2024-01-15 14:30:45 - Loaded 1500 records into Database.
2024-01-15 14:30:50 - Sync completed successfully.`;

export default function SyncDetailsPage() {
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredLogs = rawLogs
    .split('\n')
    .filter((line) =>
      line.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const highlightSearchTerm = (text: string, highlight: string) => {
    if (!highlight.trim()) {
      return text;
    }
    const regex = new RegExp(`(${highlight})`, 'gi');
    return text.split(regex).map((part, index) =>
      regex.test(part) ? (
        <span key={index} className="bg-yellow-500/30 text-yellow-300">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

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
        <div className="p-6 border-b border-[#233648] flex items-center justify-between">
          <h3 className="text-xl font-bold text-white">Raw Log Data</h3>
          <div className="relative w-full max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            <Input
              className="w-full bg-[#0d151c] text-white border border-[#233648] rounded-md py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-[#38bdf8] focus:border-[#38bdf8] placeholder-gray-500"
              placeholder="Search logs..."
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="p-6">
          <pre className="text-sm text-gray-300 bg-[#0d151c] p-4 rounded-md overflow-x-auto whitespace-pre-wrap font-mono">
            <code>
              {filteredLogs.map((line, index) => (
                <div key={index}>
                  {highlightSearchTerm(line, searchTerm)}
                </div>
              ))}
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
