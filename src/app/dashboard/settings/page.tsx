
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

export default function SettingsPage() {
  return (
    <main className="flex-1 p-8">
      <div className="mx-auto max-w-4xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-white">
            Settings
          </h1>
          <p className="mt-2 text-lg text-gray-400">
            Manage application-wide configurations for SyncStream.
          </p>
        </header>
        <div className="mb-8">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              search
            </span>
            <Input
              className="block w-full rounded-md border-0 bg-[#1A2530] py-2.5 pl-10 pr-3 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              id="search-settings"
              name="search-settings"
              placeholder="Search settings..."
              type="search"
            />
          </div>
        </div>
        <div className="space-y-12">
          <section>
            <h2 className="mb-6 border-b border-gray-700 pb-3 text-xl font-semibold leading-7">
              General Settings
            </h2>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <Label
                  className="block text-sm font-medium leading-6 text-gray-300"
                  htmlFor="default-timezone"
                >
                  Default Time Zone
                </Label>
                <div className="mt-2">
                  <Select>
                    <SelectTrigger
                      id="default-timezone"
                      name="default-timezone"
                      className="block w-full rounded-md border-0 bg-[#1A2530] py-2.5 px-3 text-white shadow-sm ring-1 ring-inset ring-gray-700 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    >
                      <SelectValue placeholder="Coordinated Universal Time (UTC)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="utc">
                        Coordinated Universal Time (UTC)
                      </SelectItem>
                      <SelectItem value="est">America/New_York (EST)</SelectItem>
                      <SelectItem value="gmt">Europe/London (GMT)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="sm:col-span-1">
                <Label
                  className="block text-sm font-medium leading-6 text-gray-300"
                  htmlFor="data-retention"
                >
                  Data Retention Policy (days)
                </Label>
                <div className="mt-2">
                  <Input
                    className="block w-full rounded-md border-0 bg-[#1A2530] py-2.5 px-3 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    id="data-retention"
                    name="data-retention"
                    placeholder="e.g., 30"
                    type="number"
                  />
                </div>
              </div>
            </div>
          </section>
          <section>
            <h2 className="mb-6 border-b border-gray-700 pb-3 text-xl font-semibold leading-7">
              System Settings
            </h2>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <Label
                  className="block text-sm font-medium leading-6 text-gray-300"
                  htmlFor="api-timeout"
                >
                  API Request Timeout (seconds)
                </Label>
                <div className="mt-2">
                  <Input
                    className="block w-full rounded-md border-0 bg-[#1A2530] py-2.5 px-3 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    id="api-timeout"
                    name="api-timeout"
                    placeholder="e.g., 60"
                    type="number"
                  />
                </div>
              </div>
              <div className="sm:col-span-1">
                <Label
                  className="block text-sm font-medium leading-6 text-gray-300"
                  htmlFor="max-workflows"
                >
                  Maximum Concurrent Workflows
                </Label>
                <div className="mt-2">
                  <Input
                    className="block w-full rounded-md border-0 bg-[#1A2530] py-2.5 px-3 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    id="max-workflows"
                    name="max-workflows"
                    placeholder="e.g., 100"
                    type="number"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="mt-12 flex justify-end border-t border-gray-700 pt-6">
          <Button
            className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            type="submit"
          >
            Save Changes
          </Button>
        </div>
      </div>
    </main>
  );
}
