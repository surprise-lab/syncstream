
'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Bell, KeyRound } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const auditLogs = [
    { event: 'Updated profile information', user: 'Alex Johnson', date: '2023-10-27 10:00 AM' },
    { event: 'Revoked API Key "Read-Only Key"', user: 'Alex Johnson', date: '2023-10-26 03:45 PM' },
    { event: 'Changed password', user: 'Alex Johnson', date: '2023-10-25 09:12 AM' },
    { event: 'Enabled email notifications', user: 'System', date: '2023-10-24 02:00 PM' },
    { event: 'Generated new API Key', user: 'Alex Johnson', date: '2023-10-23 11:30 AM' },
];

export default function SettingsPage() {
  return (
    <div className="flex-1 flex flex-col">
      <div className="p-10 overflow-y-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1">
              <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">
                Profile
              </h2>
              <p className="text-gray-400 mt-1">
                Update your personal details.
              </p>
            </div>
            <div className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <Label
                    className="text-gray-300 text-sm font-medium leading-normal pb-2"
                    htmlFor="name"
                  >
                    Name
                  </Label>
                  <Input
                    id="name"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#233648] bg-[#1a2632] h-11 placeholder:text-gray-500 px-4 text-sm font-normal leading-normal"
                    defaultValue="Alex Johnson"
                  />
                </div>
                <div className="flex flex-col">
                  <Label
                    className="text-gray-300 text-sm font-medium leading-normal pb-2"
                    htmlFor="email"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#233648] bg-[#1a2632] h-11 placeholder:text-gray-500 px-4 text-sm font-normal leading-normal"
                    defaultValue="alex.johnson@example.com"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <Label
                  className="text-gray-300 text-sm font-medium leading-normal pb-2"
                  htmlFor="company"
                >
                  Company
                </Label>
                <Input
                  id="company"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#233648] bg-[#1a2632] h-11 placeholder:text-gray-500 px-4 text-sm font-normal leading-normal"
                  defaultValue="TechCorp"
                />
              </div>
              <div className="flex justify-start">
                <Button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/80 transition-colors">
                  <span className="truncate">Update Profile</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="my-10 border-t border-gray-800"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1">
              <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">
                API Keys
              </h2>
              <p className="text-gray-400 mt-1">
                Manage your API keys for programmatic access.
              </p>
            </div>
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-[#1a2632] rounded-md">
                  <div className="flex items-center gap-4">
                    <KeyRound className="text-gray-400" />
                    <div>
                      <p className="text-white font-medium">Main API Key</p>
                      <p className="text-gray-400 text-sm">ss_live_********************abcd</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-700">View</Button>
                    <Button variant="outline" size="sm" className="border-red-500/50 text-red-400 hover:bg-red-500/10 hover:text-red-400">Revoke</Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-[#1a2632] rounded-md">
                  <div className="flex items-center gap-4">
                    <KeyRound className="text-gray-400" />
                    <div>
                      <p className="text-white font-medium">Read-Only Key</p>
                      <p className="text-gray-400 text-sm">ss_ro_live_********************efgh</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-700">View</Button>
                    <Button variant="outline" size="sm" className="border-red-500/50 text-red-400 hover:bg-red-500/10 hover:text-red-400">Revoke</Button>
                  </div>
                </div>
              </div>
              <div className="flex justify-start">
                <Button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/80 transition-colors">
                  <span className="truncate">Generate New Key</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="my-10 border-t border-gray-800"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1">
              <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">
                Integrations
              </h2>
              <p className="text-gray-400 mt-1">
                Manage your integration settings.
              </p>
            </div>
            <div className="lg:col-span-2 space-y-6">
              <div className="flex flex-col">
                <Label
                  className="text-gray-300 text-sm font-medium leading-normal pb-2"
                  htmlFor="default-integration"
                >
                  Default Integration
                </Label>
                <Select>
                  <SelectTrigger
                    id="default-integration"
                    className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#233648] bg-[#1a2632] h-11 px-4 text-sm font-normal leading-normal"
                  >
                    <SelectValue placeholder="Select an integration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="slack">Slack</SelectItem>
                    <SelectItem value="jira">Jira</SelectItem>
                    <SelectItem value="github">GitHub</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-start">
                <Button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/80 transition-colors">
                  <span className="truncate">Save Settings</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="my-10 border-t border-gray-800"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1">
              <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">
                Notifications
              </h2>
              <p className="text-gray-400 mt-1">
                Control how you receive alerts.
              </p>
            </div>
            <div className="lg:col-span-2 space-y-4">
              <label className="flex items-center gap-x-3 p-3 rounded-md hover:bg-[#1a2632] transition-colors cursor-pointer">
                <Checkbox defaultChecked id="email-notifications" />
                <Label
                  htmlFor="email-notifications"
                  className="text-gray-300 text-sm font-normal leading-normal"
                >
                  Email Notifications
                </Label>
              </label>
              <label className="flex items-center gap-x-3 p-3 rounded-md hover:bg-[#1a2632] transition-colors cursor-pointer">
                <Checkbox defaultChecked id="in-app-notifications" />
                <Label
                  htmlFor="in-app-notifications"
                  className="text-gray-300 text-sm font-normal leading-normal"
                >
                  In-App Notifications
                </Label>
              </label>
              <label className="flex items-center gap-x-3 p-3 rounded-md hover:bg-[#1a2632] transition-colors cursor-pointer">
                <Checkbox id="sms-notifications" />
                <Label
                  htmlFor="sms-notifications"
                  className="text-gray-300 text-sm font-normal leading-normal"
                >
                  SMS Notifications
                </Label>
              </label>
              <div className="flex justify-start pt-2">
                <Button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/80 transition-colors">
                  <span className="truncate">Update Preferences</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="my-10 border-t border-gray-800"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1">
              <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">
                Security
              </h2>
              <p className="text-gray-400 mt-1">
                Manage your password and security settings.
              </p>
            </div>
            <div className="lg:col-span-2 space-y-6">
              <div className="flex flex-col">
                <Label
                  className="text-gray-300 text-sm font-medium leading-normal pb-2"
                  htmlFor="current-password"
                >
                  Current Password
                </Label>
                <Input
                  id="current-password"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#233648] bg-[#1a2632] h-11 placeholder:text-gray-500 px-4 text-sm font-normal leading-normal"
                  placeholder="Enter current password"
                  type="password"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <Label
                    className="text-gray-300 text-sm font-medium leading-normal pb-2"
                    htmlFor="new-password"
                  >
                    New Password
                  </Label>
                  <Input
                    id="new-password"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#233648] bg-[#1a2632] h-11 placeholder:text-gray-500 px-4 text-sm font-normal leading-normal"
                    placeholder="Enter new password"
                    type="password"
                  />
                </div>
                <div className="flex flex-col">
                  <Label
                    className="text-gray-300 text-sm font-medium leading-normal pb-2"
                    htmlFor="confirm-password"
                  >
                    Confirm New Password
                  </Label>
                  <Input
                    id="confirm-password"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#233648] bg-[#1a2632] h-11 placeholder:text-gray-500 px-4 text-sm font-normal leading-normal"
                    placeholder="Confirm new password"
                    type="password"
                  />
                </div>
              </div>
              <div className="flex justify-start">
                <Button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/80 transition-colors">
                  <span className="truncate">Change Password</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="my-10 border-t border-gray-800"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1">
                <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">Audit Log</h2>
                <p className="text-gray-400 mt-1">View a log of all changes made to your settings.</p>
            </div>
            <div className="lg:col-span-2 space-y-4">
                <div className="overflow-x-auto rounded-md border border-gray-800">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#1a2632]">
                                <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Event</TableHead>
                                <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">User</TableHead>
                                <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Date</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="bg-[#111a22] divide-y divide-gray-800">
                            {auditLogs.map((log, index) => (
                                <TableRow key={index}>
                                    <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-white">{log.event}</TableCell>
                                    <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{log.user}</TableCell>
                                    <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{log.date}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <div className="flex justify-end">
                    <Button variant="outline" className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-700">View More</Button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
