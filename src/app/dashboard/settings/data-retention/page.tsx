
'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';

export default function DataRetentionPage() {
  return (
    <main className="flex-1 px-10 py-8 lg:px-20 xl:px-40">
        <div className="mx-auto max-w-5xl">
            <div className="mb-10">
                <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Data Retention Policies</h1>
                <p className="mt-2 text-lg text-gray-400">Manage how long different types of data are stored before being archived or purged.</p>
            </div>
            <div className="space-y-12">
                <section>
                    <h2 className="text-2xl font-semibold leading-tight text-white">Data Lifecycle Visualizer</h2>
                    <p className="mt-1 text-sm text-gray-400">This diagram illustrates the lifecycle of your data based on the current retention policies.</p>
                    <div className="mt-6 rounded-lg border border-gray-800 bg-gray-900 p-8">
                        <div className="relative flex items-center justify-between">
                            <div className="absolute left-0 top-1/2 -mt-0.5 h-1 w-full bg-gray-700"></div>
                            <div className="absolute left-0 top-1/2 -mt-0.5 h-1 w-2/3 bg-primary-500"></div>
                            <div className="relative flex flex-col items-center">
                                <div className="flex size-8 items-center justify-center rounded-full bg-primary-500 ring-4 ring-gray-900">
                                    <span className="material-symbols-outlined text-lg text-white"> play_arrow </span> 
                                </div>
                                <p className="mt-3 text-sm font-medium text-white">Active</p>
                                <p className="mt-1 text-xs text-gray-400 text-center">Data is created</p>
                            </div>
                            <div className="relative flex flex-col items-center">
                                <div className="flex size-8 items-center justify-center rounded-full bg-primary-500 ring-4 ring-gray-900">
                                    <span className="material-symbols-outlined text-lg text-white"> archive </span>
                                </div>
                                <p className="mt-3 text-sm font-medium text-white">Archived</p>
                                <p className="mt-1 text-xs text-gray-400 text-center">After 180 days</p>
                            </div>
                            <div className="relative flex flex-col items-center">
                                <div className="flex size-8 items-center justify-center rounded-full bg-gray-700 ring-4 ring-gray-900">
                                    <span className="material-symbols-outlined text-lg text-gray-400"> delete </span>
                                </div>
                                <p className="mt-3 text-sm font-medium text-gray-400">Purged</p>
                                <p className="mt-1 text-xs text-gray-400 text-center">After 365 days</p>
                            </div>
                        </div>
                        <div className="mt-6 text-center text-sm text-gray-500">
                            <p>Visualization based on the 'Audit Trails' policy.</p>
                        </div>
                    </div>
                </section>
                <div className="border-t border-gray-800"></div>
                <section>
                    <h2 className="text-2xl font-semibold leading-tight text-white">Current Policies</h2>
                    <div className="mt-4 overflow-hidden rounded-lg border border-gray-800 bg-gray-900">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-800">
                                <thead className="bg-gray-800/50">
                                    <tr>
                                        <th className="px-6 py-3.5 text-left text-sm font-semibold text-white" scope="col">Data Type</th>
                                        <th className="px-6 py-3.5 text-left text-sm font-semibold text-white" scope="col">Retention Period</th>
                                        <th className="px-6 py-3.5 text-left text-sm font-semibold text-white" scope="col">Last Modified</th>
                                        <th className="px-6 py-3.5 text-center text-sm font-semibold text-white" scope="col">Status</th>
                                        <th className="relative py-3.5 pl-3 pr-4 sm:pr-6" scope="col"><span className="sr-only">Actions</span></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-800">
                                    <tr>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-white">Sync Logs</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-400">90 days</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-400">2024-01-15</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-400 text-center">
                                            <span className="inline-flex items-center rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">Active</span>
                                        </td>
                                        <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                            <div className="flex items-center justify-end gap-x-4">
                                                <a className="text-primary-400 hover:text-primary-300" href="#">Edit</a>
                                                <button className="flex items-center gap-x-1.5 rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700">
                                                    <span className="material-symbols-outlined text-base"> delete_sweep </span>
                                                    Purge Now
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-white">Audit Trails</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-400">180 days</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-400">2023-12-20</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-400 text-center">
                                            <span className="inline-flex items-center rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">Active</span>
                                        </td>
                                        <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                             <div className="flex items-center justify-end gap-x-4">
                                                <a className="text-primary-400 hover:text-primary-300" href="#">Edit</a>
                                                <button className="flex items-center gap-x-1.5 rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700">
                                                    <span className="material-symbols-outlined text-base"> delete_sweep </span>
                                                    Purge Now
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-white">Resolved Errors</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-400">30 days</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-400">2024-02-01</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-400 text-center">
                                            <span className="inline-flex items-center rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">Active</span>
                                        </td>
                                        <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                             <div className="flex items-center justify-end gap-x-4">
                                                <a className="text-primary-400 hover:text-primary-300" href="#">Edit</a>
                                                <button className="flex items-center gap-x-1.5 rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700">
                                                    <span className="material-symbols-outlined text-base"> delete_sweep </span>
                                                    Purge Now
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-white">Integration Data</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-400">365 days</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-400">2023-11-05</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-400 text-center">
                                            <span className="inline-flex items-center rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">Active</span>
                                        </td>
                                        <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                             <div className="flex items-center justify-end gap-x-4">
                                                <a className="text-primary-400 hover:text-primary-300" href="#">Edit</a>
                                                <button className="flex items-center gap-x-1.5 rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700">
                                                    <span className="material-symbols-outlined text-base"> delete_sweep </span>
                                                    Purge Now
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <div className="border-t border-gray-800"></div>
                <section>
                    <h2 className="text-2xl font-semibold leading-tight text-white">Update Policies</h2>
                    <p className="mt-1 text-sm text-gray-400">Select a data type and set a new retention period.</p>
                    <form className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label className="block text-sm font-medium leading-6 text-white" htmlFor="data-type">Data Type</label>
                            <div className="mt-2">
                                <Select>
                                    <SelectTrigger id="data-type" name="data-type" className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6 [&_option]:text-gray-900">
                                        <SelectValue placeholder="Select Data Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="sync-logs">Sync Logs</SelectItem>
                                        <SelectItem value="audit-trails">Audit Trails</SelectItem>
                                        <SelectItem value="resolved-errors">Resolved Errors</SelectItem>
                                        <SelectItem value="integration-data">Integration Data</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label className="block text-sm font-medium leading-6 text-white" htmlFor="retention-period">Retention Period (days)</label>
                            <div className="mt-2">
                                <Input className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6" id="retention-period" name="retention-period" placeholder="e.g., 90" type="number"/>
                            </div>
                        </div>
                    </form>
                    <div className="mt-8 flex justify-end">
                        <button className="rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600" type="submit">
                            Apply Changes
                        </button>
                    </div>
                </section>
                <div className="border-t border-gray-800"></div>
                <section>
                    <h2 className="text-2xl font-semibold leading-tight text-white">Manual Data Purge</h2>
                    <p className="mt-1 text-sm text-gray-400">Immediately purge specific data types. This action is irreversible.</p>
                    <form className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 items-end">
                        <div className="sm:col-span-4">
                            <label className="block text-sm font-medium leading-6 text-white" htmlFor="purge-data-type">Data Type to Purge</label>
                            <div className="mt-2">
                                <Select>
                                     <SelectTrigger id="purge-data-type" name="purge-data-type" className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6 [&_option]:text-gray-900">
                                        <SelectValue placeholder="Select data type to purge..."/>
                                     </SelectTrigger>
                                     <SelectContent>
                                        <SelectItem value="old-sync-logs">Old Sync Logs (older than 90 days)</SelectItem>
                                        <SelectItem value="resolved-errors">Resolved Errors (older than 30 days)</SelectItem>
                                        <SelectItem value="archived-audit-trails">Archived Audit Trails (older than 180 days)</SelectItem>
                                     </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <button className="w-full justify-center rounded-md bg-red-800/80 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 flex items-center gap-x-2" type="button">
                                <span className="material-symbols-outlined text-lg"> warning </span>
                                Force Purge
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    </main>
</div>
</div>
</body></html>

    