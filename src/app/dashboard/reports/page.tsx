
'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';

export default function ReportsPage() {
  return (
    <div className="px-40 flex flex-1 justify-center py-10">
      <div className="layout-content-container flex flex-col w-full">
        <div className="flex flex-wrap justify-between gap-4 p-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-3xl font-bold">Data &amp; Reports</h1>
            <p className="text-[#92adc9] text-sm">
              Create and manage your custom reports.
            </p>
          </div>
          <div className="flex gap-2 items-start">
            <Button className="flex items-center gap-2 rounded-md h-9 px-3 text-sm font-medium text-white bg-primary hover:bg-blue-600 transition-colors">
              <span className="material-symbols-outlined text-lg">add</span>
              <span>Create Report</span>
            </Button>
          </div>
        </div>
        <div className="flex flex-1 gap-8 p-4">
          <aside className="flex flex-col gap-6 w-80 rounded-lg border border-[#324d67] bg-[#192633]/50 p-6">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">
                Report Builder
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              <label
                className="text-sm font-medium text-slate-300"
                htmlFor="data-source"
              >
                Data Source
              </label>
              <Select>
                <SelectTrigger
                  id="data-source"
                  className="w-full bg-[#233648] text-white border border-[#324d67] rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-primary"
                >
                  <SelectValue placeholder="Select data source" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="crm">CRM Data</SelectItem>
                  <SelectItem value="ecommerce">E-commerce Sales</SelectItem>
                  <SelectItem value="support">Support Tickets</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-4">
              <label className="text-sm font-medium text-slate-300">
                Metrics
              </label>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-sm text-slate-300">
                  <Checkbox
                    defaultChecked
                    className="w-4 h-4 text-primary bg-[#233648] border-[#324d67] focus:ring-2 focus:ring-primary"
                  />
                  <span>Total Sales</span>
                </label>
                <label className="flex items-center gap-2 text-sm text-slate-300">
                  <Checkbox className="w-4 h-4 text-primary bg-[#233648] border-[#324d67] focus:ring-2 focus:ring-primary" />
                  <span>New Customers</span>
                </label>
                <label className="flex items-center gap-2 text-sm text-slate-300">
                  <Checkbox
                    defaultChecked
                    className="w-4 h-4 text-primary bg-[#233648] border-[#324d67] focus:ring-2 focus:ring-primary"
                  />
                  <span>Conversion Rate</span>
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <label
                className="text-sm font-medium text-slate-300"
                htmlFor="filters"
              >
                Filters
              </label>
              <div className="flex flex-col gap-2">
                <Input
                  className="w-full bg-[#233648] text-white border border-[#324d67] rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-primary"
                  id="filters"
                  placeholder="e.g., Date range > 30 days"
                  type="text"
                />
                <a className="text-sm text-primary hover:underline" href="#">
                  + Add another filter
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <label
                className="text-sm font-medium text-slate-300"
                htmlFor="visualization"
              >
                Visualization
              </label>
              <Select>
                <SelectTrigger
                  id="visualization"
                  className="w-full bg-[#233648] text-white border border-[#324d67] rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-primary"
                >
                  <SelectValue placeholder="Select visualization" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bar">Bar Chart</SelectItem>
                  <SelectItem value="line">Line Chart</SelectItem>
                  <SelectItem value="pie">Pie Chart</SelectItem>
                  <SelectItem value="table">Table</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="mt-auto pt-6 flex flex-col gap-2">
              <Button className="flex items-center justify-center gap-2 rounded-md h-9 px-3 text-sm font-medium text-white bg-primary hover:bg-blue-600 transition-colors">
                <span className="material-symbols-outlined text-lg">
                  query_stats
                </span>
                <span>Generate Report</span>
              </Button>
              <Button className="flex items-center justify-center gap-2 rounded-md h-9 px-3 text-sm font-medium text-slate-300 bg-transparent border border-slate-500 hover:bg-[#233648] transition-colors">
                <span className="material-symbols-outlined text-lg">save</span>
                <span>Save as Custom</span>
              </Button>
            </div>
          </aside>
          <main className="flex-1 flex flex-col gap-6 rounded-lg border border-[#324d67] bg-[#192633]/50 p-6">
            <div className="flex justify-between items-center">
              <h3 className="text-white text-xl font-bold">
                Sales Report - Q3 2023
              </h3>
              <div className="flex items-center gap-2">
                <Button className="flex items-center gap-2 rounded-md h-9 px-3 text-sm font-medium text-slate-300 bg-[#233648] hover:bg-[#324d67] transition-colors">
                  <span className="material-symbols-outlined text-lg">
                    edit
                  </span>
                  <span>Edit</span>
                </Button>
                <Button className="flex items-center gap-2 rounded-md h-9 px-3 text-sm font-medium text-slate-300 bg-[#233648] hover:bg-[#324d67] transition-colors">
                  <span className="material-symbols-outlined text-lg">
                    download
                  </span>
                  <span>Export</span>
                </Button>
              </div>
            </div>
            <div className="flex-1 rounded-lg bg-[#111a22] p-6 flex items-center justify-center">
              <div className="grid h-full w-full grid-flow-col gap-6 items-end justify-items-center">
                <div
                  className="bg-primary/20 hover:bg-primary/40 transition-colors w-full rounded-t-md"
                  style={{ height: '60%' }}
                ></div>
                <div
                  className="bg-primary/20 hover:bg-primary/40 transition-colors w-full rounded-t-md"
                  style={{ height: '80%' }}
                ></div>
                <div
                  className="bg-primary/20 hover:bg-primary/40 transition-colors w-full rounded-t-md"
                  style={{ height: '40%' }}
                ></div>
                <div
                  className="bg-primary/20 hover:bg-primary/40 transition-colors w-full rounded-t-md"
                  style={{ height: '90%' }}
                ></div>
                <div
                  className="bg-primary/20 hover:bg-primary/40 transition-colors w-full rounded-t-md"
                  style={{ height: '50%' }}
                ></div>
                <div
                  className="bg-primary/20 hover:bg-primary/40 transition-colors w-full rounded-t-md"
                  style={{ height: '70%' }}
                ></div>
                <div
                  className="bg-primary/20 hover:bg-primary/40 transition-colors w-full rounded-t-md"
                  style={{ height: '60%' }}
                ></div>
                <div
                  className="bg-primary/20 hover:bg-primary/40 transition-colors w-full rounded-t-md"
                  style={{ height: '75%' }}
                ></div>
                <div
                  className="bg-primary/20 hover:bg-primary/40 transition-colors w-full rounded-t-md"
                  style={{ height: '85%' }}
                ></div>
                <div
                  className="bg-primary/20 hover:bg-primary/40 transition-colors w-full rounded-t-md"
                  style={{ height: '65%' }}
                ></div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
