
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

const notifications = [
  {
    title: 'System Maintenance',
    message: 'Scheduled downtime for server upgrades.',
    urgency: 'High',
    sentAt: '2024-01-15 10:00 AM',
    status: 'Sent',
  },
  {
    title: 'New Feature Release',
    message: 'Introducing the new data flow visualization tool.',
    urgency: 'Normal',
    sentAt: '2023-12-20 02:30 PM',
    status: 'Sent',
  },
  {
    title: 'Security Update',
    message: 'Important security patch applied to all systems.',
    urgency: 'High',
    sentAt: '2023-11-05 09:00 AM',
    status: 'Sent',
  },
  {
    title: 'Holiday Greetings',
    message: 'Wishing everyone a happy holiday season!',
    urgency: 'Low',
    sentAt: '2023-12-24 12:00 PM',
    status: 'Scheduled',
  },
];

const getUrgencyBadge = (urgency: string) => {
  switch (urgency) {
    case 'High':
      return (
        <Badge className="bg-red-200 text-red-800 hover:bg-red-200/80">
          High
        </Badge>
      );
    case 'Normal':
      return (
        <Badge className="bg-blue-200 text-blue-800 hover:bg-blue-200/80">
          Normal
        </Badge>
      );
    case 'Low':
      return (
        <Badge className="bg-yellow-200 text-yellow-800 hover:bg-yellow-200/80">
          Low
        </Badge>
      );
    default:
      return <Badge>{urgency}</Badge>;
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'Sent':
      return (
        <Badge className="bg-green-200 text-green-800 hover:bg-green-200/80">
          Sent
        </Badge>
      );
    case 'Scheduled':
      return (
        <Badge className="bg-gray-300 text-gray-800 hover:bg-gray-300/80">
          Scheduled
        </Badge>
      );
    default:
      return <Badge>{status}</Badge>;
  }
};

export default function NotificationsPage() {
  return (
    <main className="flex-1 p-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-white">
            Notifications
          </h1>
          <p className="mt-1 text-gray-400">
            Manage and send system-wide announcements to all users.
          </p>
        </header>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="rounded-lg bg-[#1f2937] p-6 lg:col-span-1">
            <h2 className="mb-6 text-xl font-semibold text-white">
              Compose New Notification
            </h2>
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <Label
                  className="text-sm font-medium text-white"
                  htmlFor="title"
                >
                  Title
                </Label>
                <Input
                  className="h-12 w-full rounded-md border border-[#374151] bg-[#374151] px-4 text-sm font-normal text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
                  id="title"
                  placeholder="Enter notification title"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label
                  className="text-sm font-medium text-white"
                  htmlFor="message"
                >
                  Message
                </Label>
                <Textarea
                  className="min-h-32 w-full rounded-md border border-[#374151] bg-[#374151] p-4 text-sm font-normal text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
                  id="message"
                  placeholder="Compose your message here"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label
                  className="text-sm font-medium text-white"
                  htmlFor="urgency"
                >
                  Urgency
                </Label>
                <Select>
                  <SelectTrigger
                    id="urgency"
                    className="h-12 w-full rounded-md border border-[#374151] bg-[#374151] px-4 text-sm font-normal text-white focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
                  >
                    <SelectValue placeholder="Select Urgency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="normal">Normal</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <Label
                  className="text-sm font-medium text-white"
                  htmlFor="schedule"
                >
                  Schedule Delivery
                </Label>
                <Input
                  className="h-12 w-full rounded-md border border-[#374151] bg-[#374151] px-4 text-sm font-normal text-white focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
                  id="schedule"
                  placeholder="Select date and time"
                  type="datetime-local"
                />
              </div>
              <Button
                className="flex h-12 w-full items-center justify-center rounded-md bg-[#3b82f6] px-6 text-sm font-bold tracking-wide text-white transition-colors hover:bg-blue-600"
                type="submit"
              >
                <span>Send Notification</span>
              </Button>
            </form>
          </div>
          <div className="lg:col-span-2">
            <h2 className="mb-6 text-xl font-semibold text-white">
              Past Notifications
            </h2>
            <div className="overflow-hidden rounded-lg border border-[#374151] bg-[#1f2937]">
              <div className="overflow-x-auto">
                <Table className="w-full text-left">
                  <TableHeader>
                    <TableRow className="bg-[#111827]">
                      <TableHead className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                        Title
                      </TableHead>
                      <TableHead className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                        Message
                      </TableHead>
                      <TableHead className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                        Urgency
                      </TableHead>
                      <TableHead className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                        Sent At
                      </TableHead>
                      <TableHead className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                        Status
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="divide-y divide-[#374151]">
                    {notifications.map((notification, index) => (
                      <TableRow key={index}>
                        <TableCell className="whitespace-nowrap px-6 py-4 text-sm font-medium text-white">
                          {notification.title}
                        </TableCell>
                        <TableCell className="whitespace-nowrap px-6 py-4 text-sm text-gray-400">
                          {notification.message}
                        </TableCell>
                        <TableCell className="whitespace-nowrap px-6 py-4">
                          {getUrgencyBadge(notification.urgency)}
                        </TableCell>
                        <TableCell className="whitespace-nowrap px-6 py-4 text-sm text-gray-400">
                          {notification.sentAt}
                        </TableCell>
                        <TableCell className="whitespace-nowrap px-6 py-4">
                          {getStatusBadge(notification.status)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
