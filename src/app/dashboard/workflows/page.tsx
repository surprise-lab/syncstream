
'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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

export default function WorkflowsPage() {
  return (
    <main className="flex-1 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-white text-4xl font-bold">Workflows</h1>
        <Button className="flex items-center justify-center gap-2 rounded-md h-10 px-4 bg-blue-500 text-white text-sm font-bold leading-normal tracking-wide hover:bg-blue-600 transition-colors">
          <span className="material-symbols-outlined">add</span>
          <span className="truncate">New Workflow</span>
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-[#18232f] p-6 rounded-lg">
          <h2 className="text-white text-2xl font-bold mb-6">
            Workflow Builder
          </h2>
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <p className="text-white text-sm font-medium">Workflow Name</p>
              <Input
                className="form-input w-full rounded-md text-white bg-[#111a22] border-2 border-[#324d67] focus:border-blue-500 focus:ring-0 h-12 px-4 placeholder:text-gray-500"
                placeholder="e.g., Daily Data Sync"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col gap-2 flex-1">
                <p className="text-white text-sm font-medium">Trigger</p>
                <Select>
                  <SelectTrigger className="w-full rounded-md text-white bg-[#111a22] border-2 border-[#324d67] focus:border-blue-500 focus:ring-0 h-12 px-4">
                    <SelectValue placeholder="Select a trigger" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new-record-salesforce">
                      New record in Salesforce
                    </SelectItem>
                    <SelectItem value="new-record-hubspot">
                      New record in HubSpot
                    </SelectItem>
                    <SelectItem value="form-submission">
                      Form submission in Marketing Cloud
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <p className="text-white text-sm font-medium">Action</p>
                <Select>
                  <SelectTrigger className="w-full rounded-md text-white bg-[#111a22] border-2 border-[#324d67] focus:border-blue-500 focus:ring-0 h-12 px-4">
                    <SelectValue placeholder="Select an action" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="create-record-hubspot">
                      Create record in HubSpot
                    </SelectItem>
                    <SelectItem value="create-record-salesforce">
                      Create record in Salesforce
                    </SelectItem>
                    <SelectItem value="send-email">
                      Send email via Mailchimp
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-white text-sm font-medium">
                Condition (Optional)
              </p>
              <Input
                className="form-input w-full rounded-md text-white bg-[#111a22] border-2 border-[#324d67] focus:border-blue-500 focus:ring-0 h-12 px-4 placeholder:text-gray-500"
                placeholder="e.g., Status is 'Active'"
              />
            </div>
          </div>
          <div className="flex justify-end mt-8">
            <Button className="flex items-center justify-center gap-2 rounded-md h-10 px-4 bg-blue-500 text-white text-sm font-bold leading-normal tracking-wide hover:bg-blue-600 transition-colors">
              <span className="truncate">Save Workflow</span>
            </Button>
          </div>
        </div>
        <div className="bg-[#18232f] p-6 rounded-lg">
          <h2 className="text-white text-2xl font-bold mb-6">
            Visual Workflow
          </h2>
          <div className="flex flex-col items-center justify-center space-y-4 p-4 border-2 border-dashed border-[#324d67] rounded-lg h-full min-h-[300px]">
            <div className="flex flex-col items-center text-center p-4 bg-[#111a22] rounded-lg shadow-lg">
              <span className="material-symbols-outlined text-blue-400 text-4xl mb-2">
                schedule
              </span>
              <p className="text-white font-bold">Scheduled Trigger</p>
              <p className="text-gray-400 text-sm">Every 24 hours</p>
            </div>
            <span className="material-symbols-outlined text-gray-500 text-4xl">
              arrow_downward
            </span>
            <div className="flex flex-col items-center text-center p-4 bg-[#111a22] rounded-lg shadow-lg">
              <span className="material-symbols-outlined text-green-400 text-4xl mb-2">
                filter_alt
              </span>
              <p className="text-white font-bold">Filter Condition</p>
              <p className="text-gray-400 text-sm">If status is 'new'</p>
            </div>
            <span className="material-symbols-outlined text-gray-500 text-4xl">
              arrow_downward
            </span>
            <div className="flex flex-col items-center text-center p-4 bg-[#111a22] rounded-lg shadow-lg">
              <span className="material-symbols-outlined text-purple-400 text-4xl mb-2">
                sync
              </span>
              <p className="text-white font-bold">Sync Action</p>
              <p className="text-gray-400 text-sm">Update HubSpot</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 bg-[#18232f] p-6 rounded-lg">
        <h2 className="text-white text-2xl font-bold mb-6">
          Active Workflows
        </h2>
        <div className="overflow-x-auto">
          <Table className="w-full text-left">
            <TableHeader>
              <tr className="border-b border-[#324d67]">
                <TableHead className="px-4 py-3 text-white text-sm font-medium">
                  Name
                </TableHead>
                <TableHead className="px-4 py-3 text-white text-sm font-medium">
                  Trigger
                </TableHead>
                <TableHead className="px-4 py-3 text-white text-sm font-medium">
                  Action
                </TableHead>
                <TableHead className="px-4 py-3 text-white text-sm font-medium">
                  Status
                </TableHead>
                <TableHead className="px-4 py-3 text-white text-sm font-medium">
                  Last Run
                </TableHead>
                <TableHead className="px-4 py-3"></TableHead>
              </tr>
            </TableHeader>
            <TableBody>
              <tr className="border-b border-[#324d67] hover:bg-[#233648] transition-colors">
                <TableCell className="px-4 py-4 text-white font-medium">
                  Salesforce to HubSpot Sync
                </TableCell>
                <TableCell className="px-4 py-4 text-gray-400">
                  New record in Salesforce
                </TableCell>
                <TableCell className="px-4 py-4 text-gray-400">
                  Create record in HubSpot
                </TableCell>
                <TableCell className="px-4 py-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-500/20 text-green-400">
                    Active
                  </span>
                </TableCell>
                <TableCell className="px-4 py-4 text-gray-400">
                  2023-11-20 10:00 AM
                </TableCell>
                <TableCell className="px-4 py-4 text-right">
                  <button className="text-gray-400 hover:text-white">
                    <span className="material-symbols-outlined">
                      more_vert
                    </span>
                  </button>
                </TableCell>
              </tr>
              <tr className="border-b border-[#324d67] hover:bg-[#233648] transition-colors">
                <TableCell className="px-4 py-4 text-white font-medium">
                  HubSpot to Salesforce Sync
                </TableCell>
                <TableCell className="px-4 py-4 text-gray-400">
                  New record in HubSpot
                </TableCell>
                <TableCell className="px-4 py-4 text-gray-400">
                  Create record in Salesforce
                </TableCell>
                <TableCell className="px-4 py-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-500/20 text-gray-400">
                    Inactive
                  </span>
                </TableCell>
                <TableCell className="px-4 py-4 text-gray-400">
                  2023-11-19 05:00 PM
                </TableCell>
                <TableCell className="px-4 py-4 text-right">
                  <button className="text-gray-400 hover:text-white">
                    <span className="material-symbols-outlined">
                      more_vert
                    </span>
                  </button>
                </TableCell>
              </tr>
              <tr className="hover:bg-[#233648] transition-colors">
                <TableCell className="px-4 py-4 text-white font-medium">
                  Marketing Automation Workflow
                </TableCell>
                <TableCell className="px-4 py-4 text-gray-400">
                  Form submission in Marketing Cloud
                </TableCell>
                <TableCell className="px-4 py-4 text-gray-400">
                  Send email via Mailchimp
                </TableCell>
                <TableCell className="px-4 py-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-500/20 text-green-400">
                    Active
                  </span>
                </TableCell>
                <TableCell className="px-4 py-4 text-gray-400">
                  2023-11-20 09:00 AM
                </TableCell>
                <TableCell className="px-4 py-4 text-right">
                  <button className="text-gray-400 hover:text-white">
                    <span className="material-symbols-outlined">
                      more_vert
                    </span>
                  </button>
                </TableCell>
              </tr>
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
}
