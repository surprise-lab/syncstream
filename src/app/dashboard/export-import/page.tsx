
'use client';

import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function ExportImportPage() {
  return (
    <div className="flex-1 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <p className="text-3xl font-bold text-white">Export &amp; Import</p>
          <p className="text-slate-400 mt-1">
            Manage your data export and import operations.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-[#192633] p-6 rounded-lg border border-slate-800">
              <h2 className="text-xl font-bold text-white mb-2">
                Export Data
              </h2>
              <p className="text-slate-400 mb-6">
                Manually export data from SyncStream.
              </p>
              <div className="space-y-4">
                <label className="block">
                  <span className="text-slate-300 text-sm font-medium">
                    Data Type
                  </span>
                  <select className="form-select mt-1 block w-full rounded-md bg-[#111A22] border-slate-700 text-white focus:ring-blue-500 focus:border-blue-500">
                    <option>Customers</option>
                    <option>Products</option>
                    <option>Orders</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-slate-300 text-sm font-medium">
                    File Format
                  </span>
                  <select className="form-select mt-1 block w-full rounded-md bg-[#111A22] border-slate-700 text-white focus:ring-blue-500 focus:border-blue-500">
                    <option>CSV</option>
                    <option>JSON</option>
                    <option>XML</option>
                  </select>
                </label>
                <Button className="w-full flex items-center justify-center gap-2 rounded-md bg-[#1172d4] hover:bg-blue-600 text-white font-semibold py-2.5 px-4 mt-2">
                  <span className="material-symbols-outlined text-base">
                    file_upload
                  </span>
                  <span>Export Data</span>
                </Button>
              </div>
            </div>
            <div className="bg-[#192633] p-6 rounded-lg border border-slate-800">
              <h2 className="text-xl font-bold text-white mb-2">
                Import Data
              </h2>
              <p className="text-slate-400 mb-6">
                Import data into SyncStream.
              </p>
              <div className="space-y-4">
                <label className="block">
                  <span className="text-slate-300 text-sm font-medium">
                    Data Type
                  </span>
                  <select className="form-select mt-1 block w-full rounded-md bg-[#111A22] border-slate-700 text-white focus:ring-blue-500 focus:border-blue-500">
                    <option>Customers</option>
                    <option>Products</option>
                    <option>Orders</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-slate-300 text-sm font-medium">
                    Choose File
                  </span>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-700 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg
                        aria-hidden="true"
                        className="mx-auto h-12 w-12 text-slate-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 48 48"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        ></path>
                      </svg>
                      <div className="flex text-sm text-slate-500">
                        <label
                          className="relative cursor-pointer bg-[#111A22] rounded-md font-medium text-[#1172d4] hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-800 focus-within:ring-blue-500"
                          htmlFor="file-upload"
                        >
                          <span>Upload a file</span>
                          <input
                            className="sr-only"
                            id="file-upload"
                            name="file-upload"
                            type="file"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-slate-600">
                        CSV, JSON, XML up to 10MB
                      </p>
                    </div>
                  </div>
                </label>
                <Button className="w-full flex items-center justify-center gap-2 rounded-md bg-[#1172d4] hover:bg-blue-600 text-white font-semibold py-2.5 px-4 mt-2">
                  <span className="material-symbols-outlined text-base">
                    file_download
                  </span>
                  <span>Import Data</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="bg-[#192633] p-6 rounded-lg border border-slate-800 h-full">
              <h2 className="text-xl font-bold text-white mb-4">History</h2>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-b-slate-800">
                      <TableHead>Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Timestamp</TableHead>
                      <TableHead>Details</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="text-sm text-slate-300">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-base text-blue-400">
                            file_upload
                          </span>
                          <span>Export</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900/70 text-green-300">
                          <svg
                            className="-ml-0.5 mr-1.5 h-2 w-2 text-green-400"
                            fill="currentColor"
                            viewBox="0 0 8 8"
                          >
                            <circle cx="4" cy="4" r="3"></circle>
                          </svg>
                          Success
                        </span>
                      </TableCell>
                      <TableCell className="text-sm text-slate-400">
                        2023-04-12 10:30 AM
                      </TableCell>
                      <TableCell className="text-sm text-slate-400">
                        1,250 records
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-sm text-slate-300">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-base text-purple-400">
                            file_download
                          </span>
                          <span>Import</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-900/70 text-red-300">
                          <svg
                            className="-ml-0.5 mr-1.5 h-2 w-2 text-red-400"
                            fill="currentColor"
                            viewBox="0 0 8 8"
                          >
                            <circle cx="4" cy="4" r="3"></circle>
                          </svg>
                          Failed
                        </span>
                      </TableCell>
                      <TableCell className="text-sm text-slate-400">
                        2023-04-11 03:15 PM
                      </TableCell>
                      <TableCell className="text-sm text-slate-400">
                        Invalid file format
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-sm text-slate-300">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-base text-blue-400">
                            file_upload
                          </span>
                          <span>Export</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900/70 text-green-300">
                          <svg
                            className="-ml-0.5 mr-1.5 h-2 w-2 text-green-400"
                            fill="currentColor"
                            viewBox="0 0 8 8"
                          >
                            <circle cx="4" cy="4" r="3"></circle>
                          </svg>
                          Success
                        </span>
                      </TableCell>
                      <TableCell className="text-sm text-slate-400">
                        2023-04-10 09:00 AM
                      </TableCell>
                      <TableCell className="text-sm text-slate-400">
                        5,000 records
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-sm text-slate-300">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-base text-purple-400">
                            file_download
                          </span>
                          <span>Import</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-900/70 text-yellow-300">
                          <svg
                            className="-ml-0.5 mr-1.5 h-2 w-2 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 8 8"
                          >
                            <circle cx="4" cy="4" r="3"></circle>
                          </svg>
                          In Progress
                        </span>
                      </TableCell>
                      <TableCell className="text-sm text-slate-400">
                        2023-04-09 11:45 AM
                      </TableCell>
                      <TableCell className="text-sm text-slate-400">
                        Processing...
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-sm text-slate-300">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-base text-blue-400">
                            file_upload
                          </span>
                          <span>Export</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-900/70 text-red-300">
                          <svg
                            className="-ml-0.5 mr-1.5 h-2 w-2 text-red-400"
                            fill="currentColor"
                            viewBox="0 0 8 8"
                          >
                            <circle cx="4" cy="4" r="3"></circle>
                          </svg>
                          Failed
                        </span>
                      </TableCell>
                      <TableCell className="text-sm text-slate-400">
                        2023-04-08 01:20 PM
                      </TableCell>
                      <TableCell className="text-sm text-slate-400">
                        Connection timeout
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-sm text-slate-300">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-base text-purple-400">
                            file_download
                          </span>
                          <span>Import</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900/70 text-green-300">
                          <svg
                            className="-ml-0.5 mr-1.5 h-2 w-2 text-green-400"
                            fill="currentColor"
                            viewBox="0 0 8 8"
                          >
                            <circle cx="4" cy="4" r="3"></circle>
                          </svg>
                          Success
                        </span>
                      </TableCell>
                      <TableCell className="text-sm text-slate-400">
                        2023-04-07 04:55 PM
                      </TableCell>
                      <TableCell className="text-sm text-slate-400">
                        8,230 records
                      </TableCell>
                    </TableRow>
                     <TableRow>
                      <TableCell className="text-sm text-slate-300">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-base text-blue-400">
                            file_upload
                          </span>
                          <span>Export</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900/70 text-green-300">
                          <svg
                            className="-ml-0.5 mr-1.5 h-2 w-2 text-green-400"
                            fill="currentColor"
                            viewBox="0 0 8 8"
                          >
                            <circle cx="4" cy="4" r="3"></circle>
                          </svg>
                          Success
                        </span>
                      </TableCell>
                      <TableCell className="text-sm text-slate-400">
                        2023-04-06 11:10 AM
                      </TableCell>
                      <TableCell className="text-sm text-slate-400">
                        750 records
                      </TableCell>
                    </TableRow>
                     <TableRow>
                      <TableCell className="text-sm text-slate-300">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-base text-purple-400">
                            file_download
                          </span>
                          <span>Import</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900/70 text-green-300">
                          <svg
                            className="-ml-0.5 mr-1.5 h-2 w-2 text-green-400"
                            fill="currentColor"
                            viewBox="0 0 8 8"
                          >
                            <circle cx="4" cy="4" r="3"></circle>
                          </svg>
                          Success
                        </span>
                      </TableCell>
                      <TableCell className="text-sm text-slate-400">
                        2023-04-05 08:30 PM
                      </TableCell>
                      <TableCell className="text-sm text-slate-400">
                        3,421 records
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

    