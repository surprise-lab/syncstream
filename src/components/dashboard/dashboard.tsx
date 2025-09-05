'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Power, History, Timer, RefreshCw } from 'lucide-react';
import { StatusCard } from '@/components/dashboard/status-card';
import { ActivityTable } from '@/components/dashboard/activity-table';
import { SyncModal } from '@/components/dashboard/sync-modal';

export function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <main className="flex-1 px-10 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white">
                Integration Dashboard
              </h1>
              <p className="text-muted-foreground">
                Overview of your Takealot to Xero integration
              </p>
            </div>
            <Button onClick={() => setIsModalOpen(true)}>
              <RefreshCw className="mr-2 h-4 w-4" />
              Sync Now
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <StatusCard 
              icon={<Power className="text-primary" />} 
              title="Status" 
              value="Active" 
            />
            <StatusCard 
              icon={<History className="text-primary" />} 
              title="Last Sync" 
              value="2 hours ago" 
            />
            <StatusCard 
              icon={<Timer className="text-primary" />} 
              title="Next Sync" 
              value="In 4 hours" 
            />
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold text-white">Recent Activities</h2>
            <ActivityTable />
          </div>
        </div>
      </main>
      
      <SyncModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
}
