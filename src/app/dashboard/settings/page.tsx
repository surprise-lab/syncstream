
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
                      className="form-select block w-full rounded-md border-0 bg-[#1A2530] py-2.5 px-3 text-white shadow-sm ring-1 ring-inset ring-gray-700 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
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
          <div className="mt-12 flex justify-end border-t border-gray-700 pt-6">
            <Button
              className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              type="submit"
            >
              Save Changes
            </Button>
          </div>
          <section className="mt-12">
            <h2 className="mb-6 border-b border-gray-700 pb-3 text-xl font-semibold leading-7">
              Audit Trail
            </h2>
            <div className="overflow-hidden rounded-lg bg-[#1A2530] shadow-md">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead className="bg-[#111A22]">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400"
                      >
                        User
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400"
                      >
                        Action
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400"
                      >
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-300">
                        2023-10-27 10:05 AM
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-300">
                        <div className="flex items-center">
                          <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">
                            AD
                          </div>
                          <span>admin@syncstream.com</span>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-300">
                        Updated Setting
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-300">
                        Changed 'Data Retention Policy' from '30' to '60' days.
                      </td>
                    </tr>
                    <tr className="bg-[#16202A]">
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-300">
                        2023-10-26 03:22 PM
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-300">
                        <div className="flex items-center">
                          <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-sm font-bold text-white">
                            JD
                          </div>
                          <span>jane.doe@syncstream.com</span>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-300">
                        Updated Setting
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-300">
                        Changed 'API Request Timeout' from '30' to '60'
                        seconds.
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-300">
                        2023-10-25 09:15 AM
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-300">
                        <div className="flex items-center">
                          <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-sm font-bold text-white">
                            JS
                          </div>
                          <span>john.smith@syncstream.com</span>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-300">
                        Updated Setting
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-300">
                        Changed 'Default Time Zone' to 'America/New_York (EST)'.
                      </td>
                    </tr>
                    <tr className="bg-[#16202A]">
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-300">
                        2023-10-24 11:45 AM
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-300">
                        <div className="flex items-center">
                          <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">
                            AD
                          </div>
                          <span>admin@syncstream.com</span>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-300">
                        Updated Setting
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-300">
                        Changed 'Maximum Concurrent Workflows' from '50' to
                        '100'.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex items-center justify-between bg-[#111A22] px-4 py-3 sm:px-6">
                <div className="flex flex-1 justify-between sm:hidden">
                  <a
                    href="#"
                    className="relative inline-flex items-center rounded-md border border-gray-600 bg-[#1A2530] px-4 py-2 text-sm font-medium text-gray-300 hover:bg-[#2A3540]"
                  >
                    Previous
                  </a>
                  <a
                    href="#"
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-600 bg-[#1A2530] px-4 py-2 text-sm font-medium text-gray-300 hover:bg-[#2A3540]"
                  >
                    Next
                  </a>
                </div>
                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-400">
                      Showing
                      <span className="font-medium">1</span>
                      to
                      <span className="font-medium">4</span>
                      of
                      <span className="font-medium">25</span>
                      results
                    </p>
                  </div>
                  <div>
                    <nav
                      className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
                      aria-label="Pagination"
                    >
                      <a
                        href="#"
                        className="relative inline-flex items-center rounded-l-md border border-gray-600 bg-[#1A2530] px-2 py-2 text-sm font-medium text-gray-400 hover:bg-[#2A3540]"
                      >
                        <span className="sr-only">Previous</span>
                        <span className="material-symbols-outlined h-5 w-5">
                          chevron_left
                        </span>
                      </a>
                      <a
                        href="#"
                        aria-current="page"
                        className="relative z-10 inline-flex items-center border border-blue-500 bg-blue-900 px-4 py-2 text-sm font-medium text-white"
                      >
                        1
                      </a>
                      <a
                        href="#"
                        className="relative inline-flex items-center border border-gray-600 bg-[#1A2530] px-4 py-2 text-sm font-medium text-gray-300 hover:bg-[#2A3540]"
                      >
                        2
                      </a>
                      <a
                        href="#"
                        className="relative hidden items-center border border-gray-600 bg-[#1A2530] px-4 py-2 text-sm font-medium text-gray-300 hover:bg-[#2A3540] md:inline-flex"
                      >
                        3
                      </a>
                      <span className="relative inline-flex items-center border border-gray-600 bg-[#1A2530] px-4 py-2 text-sm font-medium text-gray-400">
                        ...
                      </span>
                      <a
                        href="#"
                        className="relative inline-flex items-center border border-gray-600 bg-[#1A2530] px-4 py-2 text-sm font-medium text-gray-300 hover:bg-[#2A3540]"
                      >
                        7
                      </a>
                      <a
                        href="#"
                        className="relative inline-flex items-center rounded-r-md border border-gray-600 bg-[#1A2530] px-2 py-2 text-sm font-medium text-gray-400 hover:bg-[#2A3540]"
                      >
                        <span className="sr-only">Next</span>
                        <span className="material-symbols-outlined h-5 w-5">
                          chevron_right
                        </span>
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
