
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
import Image from 'next/image';

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
      <div className="bg-[#18232f] p-6 rounded-lg mb-8">
        <h2 className="text-white text-2xl font-bold mb-6">Start with a Template</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col bg-[#111a22] p-4 rounded-lg hover:ring-2 hover:ring-blue-500 transition-all cursor-pointer">
            <div className="flex items-center gap-3 mb-3">
              <Image
                alt="Salesforce Logo"
                className="h-6 w-6 object-contain"
                height={24}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKYHvUB35pJUF8KKGMH7XuyiDmPMzROWkPboJ2L1LQhh32O2nx3psHyXjO_YXF4pohSienkeHpwMyzalFnwHYHpBvdRB66sM892W7l0wiWAoKhX4zLDCK4K6SbLu53_9Hre6AKJWS5xg4m0iqmRHvpP1_I1MAgAJidS3FAKqOkTEoFg96-fg-cEeb5seMG_D6NBE9zVO0MSLbLdMXAuTFomIFzQjoCmPqVpgYLuGpYRsL0itmgyg4clXWSVxyE4Vhif5_wAyBws5Zy"
                width={24}
              />
              <span className="material-symbols-outlined text-gray-400">
                arrow_forward
              </span>
              <Image
                alt="HubSpot Logo"
                className="h-6 w-6 object-contain"
                height={24}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLihRAw8GbChHf3xUdz6nayxsnFWcfVExnJIncVS0G7VcXhX6HS4gMncAl_9X-mGWFPVxpD19ldy7avU-tgHfKOsBlGenG0u7l9S-MF9tyXkHz9r_zHI5Zw1Oq_Xl_pvtdxILVU24uVNoPnuG8vBmYiob1JwZi-eBkrB4YopL6OCp-PWR_BpVS6cd8tsMZ2z4B9C_bwbFeUrUsARpon8JSxzAVtadqXHQXmANHwGfRzId8ubZVxLNIqMXVIAoOAf32uN7itakpRpC4"
                width={24}
              />
            </div>
            <h3 className="text-white font-semibold mb-2">
              Sync Salesforce Leads to HubSpot
            </h3>
            <p className="text-gray-400 text-sm">
              Automatically create a new contact in HubSpot when a new lead is
              created in Salesforce.
            </p>
          </div>
          <div className="flex flex-col bg-[#111a22] p-4 rounded-lg hover:ring-2 hover:ring-blue-500 transition-all cursor-pointer">
            <div className="flex items-center gap-3 mb-3">
              <Image
                alt="Marketing Cloud Logo"
                className="h-6 w-6 object-contain"
                height={24}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8eo8K6gOpapkDTwdKPH5YnqiDNRJpUzBRxljfWQ3MAkFA3Qq-K99rddJJylJjuEC4RwAa8tT9E8fWmGNJ8OqG3RhqqflohuDTL8yMjtDz_UTFsjHEsGXVdt2nnKkgagfCJmJXS77l993a9qTjdpGpEbNzDKrUsZqcA8KCl6-PjhXa8jo5PJb2N4YQ6tFLhM2HFvOFFoGUgyZqbEm8HIlvf4Km6j4AGZnhqWLoeqYrLpDapyWzLd6LoIfVDQ9QrrVAIRBsLb5iOOuH"
                width={24}
              />
              <span className="material-symbols-outlined text-gray-400">
                arrow_forward
              </span>
              <Image
                alt="Salesforce Logo"
                className="h-6 w-6 object-contain"
                height={24}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkTLS7hRxVfXA7111a8KspQHGxVf0UYRzmzNQI3P1ByQKWBoH8k9qYPfjTskDRNto6sqTUkxFYu4vc6sPCaIBPS7RHbNeTdAz5aKuieTDXmgYZOI3bocLv5e_L0faLFmPxuszCb9lkp7BQXCjrJ0vHMrxBIQ1o9jkmgUxqySbLVjD_QbxKFX73duPQuTy7PsPYrZE5IKnT0OSw_vZR8KofTqed8o14_tU8mjSiicHK-y_DrtKcqd3pe8-7HX6VSfAD0-hX8hxxeR0f"
                width={24}
              />
            </div>
            <h3 className="text-white font-semibold mb-2">
              Create Salesforce Tasks from Forms
            </h3>
            <p className="text-gray-400 text-sm">
              Create a task in Salesforce for each new form submission in
              Marketing Cloud.
            </p>
          </div>
          <div className="flex flex-col bg-[#111a22] p-4 rounded-lg hover:ring-2 hover:ring-blue-500 transition-all cursor-pointer">
            <div className="flex items-center gap-3 mb-3">
              <Image
                alt="Mailchimp Logo"
                className="h-6 w-6 object-contain"
                height={24}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQxiW1RvplPN0jZEsDjLIbYmNbU4iPj7v7XqngrAIx0NE28uvtZNMbg0YQ234dxtN_cO4E6ynhK1gLbuvHct1mjHhFjOi7yumj4OghUNLQKJ6Z_cZKhPDrQz0x6hxaOH0c4CNS19OgXVg-B30cn0syUSDzPft9JfQAa3C4ACWaOerMenMWG-kp3_qaVAPjkUIqzDvgwGmXnCwg6pZJgQSq2Ig0mkQ6e_3hnfIktj45utQJicRr2bIg7a0welvue889mxZdlIT4S49T"
                width={24}
              />
              <span className="material-symbols-outlined text-gray-400">
                arrow_forward
              </span>
              <Image
                alt="HubSpot Logo"
                className="h-6 w-6 object-contain"
                height={24}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSVy4ve1792U2Vgux80jZF5pFZf4IvmCsZTnc5WjoQ4ICHw9Qnr8zVu1IpWV6f3nq9uV24yfFIEdG557RkbAx1JNzoNZsE-Q_DQyIYCkyvrPDVnmaRa0LBanQ5x19W2lUOKfl88crTuZYBqr2aoLRo2AuMVj7HK5D9_mppTIDZauqfcrinKIDDiC71ySp_V01vdvOGDXvetx95jBDFRVEcDfq3r-rG9VJ1FfLDSeRHzIM78pDYzIMzG2RgWmKOvmi6k_FM02Hyh2yL"
                width={24}
              />
            </div>
            <h3 className="text-white font-semibold mb-2">
              Add Mailchimp Subscribers to HubSpot
            </h3>
            <p className="text-gray-400 text-sm">
              When a new subscriber is added in Mailchimp, create or update a
              contact in HubSpot.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2 bg-[#18232f] p-6 rounded-lg">
          <h2 className="text-white text-2xl font-bold mb-6">
            Or Build From Scratch
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
      <div className="bg-[#18232f] p-6 rounded-lg">
        <h2 className="text-white text-2xl font-bold mb-6">Active Workflows</h2>
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
  </div>
</div>
</body></html>