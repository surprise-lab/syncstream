
'use client';

import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowUp, ArrowDown, FolderSync, AlertTriangle, Timer, X, ChevronDown, BarChartHorizontal, LineChart, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const integrations = [
  { name: 'Salesforce to HubSpot', status: 'Active', data: '50 GB', errors: 10, latency: '60 ms' },
  { name: 'Shopify to QuickBooks', status: 'Active', data: '30 GB', errors: 5, latency: '45 ms' },
  { name: 'Mailchimp to CRM', status: 'Inactive', data: '0 GB', errors: 0, latency: '0 ms' },
  { name: 'Google Sheets to Database', status: 'Error', data: '20 GB', errors: 2, latency: '30 ms' },
  { name: 'Custom API to System X', status: 'Active', data: '15 GB', errors: 1, latency: '25 ms' },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'Active':
      return (
        <Badge className="px-2 py-1 text-xs font-medium rounded-full status-active">Active</Badge>
      );
    case 'Inactive':
      return (
        <Badge className="px-2 py-1 text-xs font-medium rounded-full status-inactive">Inactive</Badge>
      );
    case 'Error':
      return (
        <Badge className="px-2 py-1 text-xs font-medium rounded-full status-error">Error</Badge>
      );
    default:
      return null;
  }
};


export default function IntegrationsHealthPage() {
    const [isAlertVisible, setIsAlertVisible] = useState(true);

  return (
    <main className="p-6 md:p-10 bg-secondary-color">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-text-primary text-3xl font-bold">Integrations Health</h1>
          <p className="text-text-secondary mt-1">Monitor the health and performance of your active integrations.</p>
        </div>

        {isAlertVisible && (
            <div className="mb-10 bg-red-900/20 border border-red-600 rounded-lg p-6">
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                        <AlertTriangle className="text-red-500 h-8 w-8" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-red-400 text-lg font-bold">Active Performance Alerts</h3>
                        <p className="text-red-300 mt-1 text-sm">The following integrations are experiencing performance degradations. Immediate attention is recommended.</p>
                        <ul className="mt-4 space-y-3">
                            <li className="flex justify-between items-center bg-red-800/30 p-3 rounded-md">
                                <div>
                                    <p className="text-text-primary font-semibold">Salesforce to HubSpot</p>
                                    <p className="text-text-secondary text-xs">High Latency Detected: 150ms</p>
                                </div>
                                <a className="text-sm font-medium text-primary-color hover:underline" href="#">View Details</a>
                            </li>
                            <li className="flex justify-between items-center bg-red-800/30 p-3 rounded-md">
                                <div>
                                    <p className="text-text-primary font-semibold">Google Sheets to Database</p>
                                    <p className="text-text-secondary text-xs">High Error Rate: 12%</p>
                                </div>
                                <a className="text-sm font-medium text-primary-color hover:underline" href="#">View Details</a>
                            </li>
                        </ul>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => setIsAlertVisible(false)} className="text-red-400 hover:text-red-200 transition-colors h-8 w-8">
                        <X />
                    </Button>
                </div>
            </div>
        )}

        <div className="mb-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
            <h2 className="text-text-primary text-xl font-bold">Overall Performance</h2>
            <div className="relative mt-4 sm:mt-0">
               <Select>
                <SelectTrigger className="w-full sm:w-auto bg-accent-color border border-border-color text-text-primary text-sm rounded-lg focus:ring-primary-color focus:border-primary-color block pl-3 pr-10 py-2.5 appearance-none">
                  <SelectValue placeholder="Last 24 hours" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="24h">Last 24 hours</SelectItem>
                  <SelectItem value="7d">Last 7 days</SelectItem>
                  <SelectItem value="30d">Last 30 days</SelectItem>
                  <SelectItem value="custom">Custom Range</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <div className="flex flex-col gap-4 rounded-lg border border-border-color bg-secondary-color p-6">
              <div className="flex items-center justify-between">
                <p className="text-text-primary text-base font-medium">Data Transfer Rate</p>
                <FolderSync className="text-text-secondary"/>
              </div>
              <p className="text-text-primary text-4xl font-bold truncate">120 GB/hr</p>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-500 flex items-center gap-1">
                  <ArrowUp className="text-base" />
                  +15%
                </span>
                <p className="text-text-secondary">vs last 24h</p>
              </div>
              <div className="h-40">
                <LineChart className="w-full h-full text-primary-color" />
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-lg border border-border-color bg-secondary-color p-6">
              <div className="flex items-center justify-between">
                <p className="text-text-primary text-base font-medium">Error Rate</p>
                <AlertCircle className="text-text-secondary"/>
              </div>
              <p className="text-text-primary text-4xl font-bold truncate">2.5%</p>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-red-500 flex items-center gap-1">
                  <ArrowDown className="text-base"/>
                  -5%
                </span>
                <p className="text-text-secondary">vs last 24h</p>
              </div>
              <div className="h-40 grid grid-flow-col gap-3 items-end">
                <div className="bg-red-500/20 hover:bg-red-500/40 rounded-t-sm w-full transition-all" style={{ height: '20%' }}></div>
                <div className="bg-red-500/20 hover:bg-red-500/40 rounded-t-sm w-full transition-all" style={{ height: '90%' }}></div>
                <div className="bg-red-500/20 hover:bg-red-500/40 rounded-t-sm w-full transition-all" style={{ height: '30%' }}></div>
                <div className="bg-red-500/20 hover:bg-red-500/40 rounded-t-sm w-full transition-all" style={{ height: '60%' }}></div>
                <div className="bg-red-500/20 hover:bg-red-500/40 rounded-t-sm w-full transition-all" style={{ height: '100%' }}></div>
                <div className="bg-red-500/20 hover:bg-red-500/40 rounded-t-sm w-full transition-all" style={{ height: '90%' }}></div>
                <div className="bg-red-500/20 hover:bg-red-500/40 rounded-t-sm w-full transition-all" style={{ height: '30%' }}></div>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-lg border border-border-color bg-secondary-color p-6">
              <div className="flex items-center justify-between">
                <p className="text-text-primary text-base font-medium">Latency</p>
                <Timer className="text-text-secondary" />
              </div>
              <p className="text-text-primary text-4xl font-bold truncate">50 ms</p>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-500 flex items-center gap-1">
                  <ArrowUp className="text-base" />
                  +10%
                </span>
                <p className="text-text-secondary">vs last 24h</p>
              </div>
              <div className="h-40">
                <BarChartHorizontal className="w-full h-full text-sky-500/20" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-text-primary text-xl font-bold mb-4">Integration Status</h2>
          <div className="overflow-x-auto rounded-lg border border-border-color bg-secondary-color">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-800 text-xs text-text-secondary uppercase">
                <tr>
                  <th className="px-6 py-3" scope="col">Integration Name</th>
                  <th className="px-6 py-3" scope="col">Status</th>
                  <th className="px-6 py-3" scope="col">Data Transferred</th>
                  <th className="px-6 py-3" scope="col">Errors</th>
                  <th className="px-6 py-3" scope="col">Latency</th>
                </tr>
              </thead>
              <tbody>
                {integrations.map((integration, index) => (
                  <tr key={index} className="border-b border-border-color hover:bg-gray-800/50 transition-colors">
                    <th className="px-6 py-4 font-medium text-text-primary whitespace-nowrap" scope="row">{integration.name}</th>
                    <td className="px-6 py-4">{getStatusBadge(integration.status)}</td>
                    <td className="px-6 py-4 text-text-secondary">{integration.data}</td>
                    <td className="px-6 py-4 text-text-secondary">{integration.errors}</td>
                    <td className="px-6 py-4 text-text-secondary">{integration.latency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
