
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

export default function DashboardPage() {
  return (
    <main className="flex-1 p-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Usage Analytics
          </h2>
          <p className="text-gray-400 mt-1">
            Analyze usage metrics by specific criteria
          </p>
        </div>
        <div className="bg-gray-900 rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300" htmlFor="user-role">User Role</label>
              <select className="mt-1 block w-full bg-gray-800 border-gray-700 text-white rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm" id="user-role" name="user-role">
                <option>All Roles</option>
                <option>Admin</option>
                <option>Editor</option>
                <option>Viewer</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300" htmlFor="date-range">Date Range</label>
              <select className="mt-1 block w-full bg-gray-800 border-gray-700 text-white rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm" id="date-range" name="date-range">
                <option>Last 30 days</option>
                <option>Last 90 days</option>
                <option>Last 6 months</option>
                <option>Last year</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300" htmlFor="integration-type">Integration Type</label>
              <select className="mt-1 block w-full bg-gray-800 border-gray-700 text-white rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm" id="integration-type" name="integration-type">
                <option>All Types</option>
                <option>CRM</option>
                <option>Marketing</option>
                <option>Sales</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500" type="button">
                Apply Filters
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-900 p-6 rounded-lg">
            <p className="text-sm font-medium text-gray-400">Active Users</p>
            <p className="text-3xl font-bold mt-2">1,234</p>
            <div className="flex items-center mt-2">
              <span className="material-symbols-outlined text-green-500">
                arrow_upward
              </span>
              <p className="text-green-500 text-sm font-medium ml-1">+12%</p>
            </div>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <p className="text-sm font-medium text-gray-400">
              Feature Adoption Rate
            </p>
            <p className="text-3xl font-bold mt-2">75%</p>
            <div className="flex items-center mt-2">
              <span className="material-symbols-outlined text-red-500">
                arrow_downward
              </span>
              <p className="text-red-500 text-sm font-medium ml-1">-5%</p>
            </div>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <p className="text-sm font-medium text-gray-400">
              Overall Engagement
            </p>
            <p className="text-3xl font-bold mt-2">82%</p>
            <div className="flex items-center mt-2">
              <span className="material-symbols-outlined text-green-500">
                arrow_upward
              </span>
              <p className="text-green-500 text-sm font-medium ml-1">+8%</p>
            </div>
          </div>
        </div>
        <h3 className="text-2xl font-bold tracking-tight text-white mb-6">
          Application Usage
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-base font-medium text-white">
                  User Activity Over Time
                </p>
                <p className="text-gray-400 text-sm">Last 30 Days</p>
              </div>
              <div className="flex items-center text-green-500">
                <span className="material-symbols-outlined text-lg">
                  trending_up
                </span>
                <span className="text-lg font-bold ml-1">+15%</span>
              </div>
            </div>
            <div className="h-64 mt-4">
              <svg
                className="w-full h-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="-3 0 478 150"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H0V109Z"
                  fill="url(#paint0_linear_1131_5935)"
                ></path>
                <path
                  d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                  stroke="#3b82f6"
                  stroke-linecap="round"
                  stroke-width="3"
                ></path>
                <defs>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint0_linear_1131_5935"
                    x1="236"
                    x2="236"
                    y1="1"
                    y2="149"
                  >
                    <stop stop-color="#3b82f6" stop-opacity="0.3"></stop>
                    <stop offset="1" stop-color="#3b82f6" stop-opacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-base font-medium text-white">
                  Feature Adoption
                </p>
                <p className="text-gray-400 text-sm">Last 30 Days</p>
              </div>
              <div className="flex items-center text-green-500">
                <span className="material-symbols-outlined text-lg">
                  trending_up
                </span>
                <span className="text-lg font-bold ml-1">+10%</span>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-4 items-end h-64 mt-4">
              <div className="flex flex-col items-center">
                <div
                  className="w-full bg-primary-500 rounded-t-md"
                  style={{ height: '60%' }}
                ></div>
                <p className="text-gray-400 text-xs mt-2 text-center">
                  Feature A
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className="w-full bg-primary-500 rounded-t-md"
                  style={{ height: '40%' }}
                ></div>
                <p className="text-gray-400 text-xs mt-2 text-center">
                  Feature B
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className="w-full bg-primary-500 rounded-t-md"
                  style={{ height: '20%' }}
                ></div>
                <p className="text-gray-400 text-xs mt-2 text-center">
                  Feature C
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className="w-full bg-primary-500 rounded-t-md"
                  style={{ height: '10%' }}
                ></div>
                <p className="text-gray-400 text-xs mt-2 text-center">
                  Feature D
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className="w-full bg-primary-500 rounded-t-md"
                  style={{ height: '90%' }}
                ></div>
                <p className="text-gray-400 text-xs mt-2 text-center">
                  Feature E
                </p>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-2xl font-bold tracking-tight text-white mb-6">
          Popular Integrations
        </h3>
        <div className="bg-gray-900 rounded-lg overflow-hidden">
          <Table>
            <TableHeader className="bg-gray-800">
              <TableRow>
                <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Integration
                </TableHead>
                <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Usage
                </TableHead>
                <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Status
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-800">
              <TableRow>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                  Integration A
                </TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                  500
                </TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900 text-green-300">
                    Active
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                  Integration B
                </TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                  400
                </TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900 text-green-300">
                    Active
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                  Integration C
                </TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                  300
                </TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-700 text-gray-300">
                    Inactive
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                  Integration D
                </TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                  200
                </TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900 text-green-300">
                    Active
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                  Integration E
                </TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                  100
                </TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900 text-green-300">
                    Active
                  </span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );

    