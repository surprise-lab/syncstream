
'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import React from 'react';

const notifications = [
  {
    title: "Integration 'Project Phoenix' successfully connected",
    date: 'January 20, 2024',
    type: 'Success',
    read: false,
  },
  {
    title: "New version of 'Data Connector' available",
    date: 'January 19, 2024',
    type: 'Information',
    read: false,
  },
  {
    title: "Integration 'Project Phoenix' encountered an error",
    date: 'January 18, 2024',
    type: 'Error',
    read: true,
  },
  {
    title: "Scheduled maintenance for 'Data Connector'",
    date: 'January 17, 2024',
    type: 'Maintenance',
    read: true,
  },
  {
    title: "Integration 'Project Phoenix' successfully connected",
    date: 'January 16, 2024',
    type: 'Success',
    read: true,
    opacity: 'opacity-60',
  },
  {
    title: "New version of 'Data Connector' available",
    date: 'January 15, 2024',
    type: 'Information',
    read: true,
    opacity: 'opacity-60',
  },
  {
    title: "Integration 'Project Phoenix' encountered an error",
    date: 'January 14, 2024',
    type: 'Error',
    read: true,
    opacity: 'opacity-60',
  },
  {
    title: "Scheduled maintenance for 'Data Connector'",
    date: 'January 13, 2024',
    type: 'Maintenance',
    read: true,
    opacity: 'opacity-60',
  },
];

const getIcon = (type: string) => {
  switch (type) {
    case 'Success':
      return (
        <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-green-500/10 text-green-400">
          <span className="material-symbols-outlined"> check_circle </span>
        </div>
      );
    case 'Information':
      return (
        <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
          <span className="material-symbols-outlined"> info </span>
        </div>
      );
    case 'Error':
      return (
        <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-400">
          <span className="material-symbols-outlined"> cancel </span>
        </div>
      );
    case 'Maintenance':
      return (
        <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-400">
          <span className="material-symbols-outlined"> schedule </span>
        </div>
      );
    default:
      return null;
  }
};

export default function NotificationsPage() {
  return (
    <main className="flex-1 p-8">
      <header className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">Notifications</h2>
        <div className="flex items-center gap-4">
          <Button
            variant="secondary"
            className="flex items-center gap-2 rounded-md bg-[#21262D] px-4 py-2 text-sm font-medium text-white hover:bg-[#30363D]"
          >
            <span className="material-symbols-outlined text-base"> done_all </span>
            Mark all as read
          </Button>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              filter_list
            </span>
            <Select>
              <SelectTrigger className="w-48 appearance-none rounded-md border border-[#30363D] bg-[#0D1117] py-2 pl-10 pr-4 text-sm text-white focus:border-[var(--primary-color)] focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)]">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All types</SelectItem>
                <SelectItem value="success">Success</SelectItem>
                <SelectItem value="information">Information</SelectItem>
                <SelectItem value="error">Error</SelectItem>
                <SelectItem value="maintenance">Maintenance</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </header>
      <div className="mt-6 border-b border-[#30363D]">
        <div className="flex gap-6">
          <a
            className="border-b-2 border-primary pb-3 text-sm font-semibold text-white"
            href="#"
          >
            All
          </a>
          <a
            className="border-b-2 border-transparent pb-3 text-sm font-medium text-gray-400 hover:text-white"
            href="#"
          >
            Unread
          </a>
          <a
            className="border-b-2 border-transparent pb-3 text-sm font-medium text-gray-400 hover:text-white"
            href="#"
          >
            Archived
          </a>
        </div>
      </div>
      <div className="mt-6 space-y-2">
        {notifications.map((notification, index) => (
          <div
            key={index}
            className={cn(
              'group flex items-start gap-4 rounded-lg bg-[#161B22] p-4 transition-colors hover:bg-[#21262d]',
              notification.opacity
            )}
          >
            {getIcon(notification.type)}
            <div className="flex-1">
              <p className="font-medium text-white">{notification.title}</p>
              <p className="text-sm text-gray-400">{notification.date}</p>
            </div>
            <div className="flex items-center gap-2">
              {!notification.read && (
                <div className="size-3 flex-shrink-0 rounded-full bg-primary"></div>
              )}
              <button className="text-gray-500 opacity-0 transition-opacity group-hover:opacity-100 hover:text-white">
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
