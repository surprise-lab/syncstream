

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

export default function SettingsPage() {
  return (
    <div className="flex-1 flex flex-col">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#233648] px-10 h-16">
        <h1 className="text-white tracking-light text-2xl font-bold leading-tight">
          Settings
        </h1>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="text-gray-400" />
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
          </Button>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuA2SN7vG-nwXPF8lgAwJHpB0BU_e0WjUwbRGmSEbZfv3O7V3FdBVm9ulWquWb3DhhHm4lFRWX0lP_L44ZGgBZg4bW_BRWJ64Dzt0XoLTTrY-mc1Zejm5trzxhW7vjcsGUttXTQiweGIq2qzY2tH-T29UfSRxkc9G17NsMc3gOLFNWw7PzmDxFN9bUa8o9p7DZu3RTrNPI_bRI0YFOI6aOownibQTX9TknozruuYxPzW5cJY_IJoKbSbfJsciT6TkGNTKulIKc1zewxB")`,
            }}
          ></div>
        </div>
      </header>
      <div className="flex-1 p-10 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
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
                <Button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-5 bg-blue-600 text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-700 transition-colors">
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
                <Button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-5 bg-blue-600 text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-700 transition-colors">
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
                <Button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-5 bg-blue-600 text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-700 transition-colors">
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
                <Button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-5 bg-blue-600 text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-700 transition-colors">
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
                <Button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-5 bg-blue-600 text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-700 transition-colors">
                  <span className="truncate">Change Password</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</main>
</div>
</body></html>