
'use client';

import { Power, AlertTriangle, Clock } from 'lucide-react';
import { StatusCard } from '@/components/dashboard/status-card';
import { ActivityTable } from '@/components/dashboard/activity-table';
import { DataFlow } from '@/components/dashboard/data-flow';
import Link from 'next/link';

export function Dashboard() {
  return (
    <>
      <main className="flex-1 p-6 overflow-y-auto bg-background">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <StatusCard
            icon={<Power className="text-primary-400" />}
            bgColor="bg-primary-900/50"
            title="Integration Status"
            value="Connected"
          />
          <Link href="/dashboard/alerts">
            <StatusCard
              icon={<AlertTriangle className="text-yellow-400" />}
              bgColor="bg-yellow-900/50"
              title="Active Alerts"
              value="3"
            />
          </Link>
          <StatusCard
            icon={<Clock className="text-blue-400" />}
            bgColor="bg-blue-900/50"
            title="Last Sync"
            value="15 mins ago"
          />
        </div>

        <DataFlow />

        <ActivityTable />
      </main>
    </>
  );
}
