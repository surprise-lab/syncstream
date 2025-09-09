
'use client';

import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { ChevronRight, File, Download, MessageSquare, MenuBook } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function TicketDetailsPage() {
  return (
    <main className="flex-1 bg-[#0b1118] p-8">
      <div className="flex items-start gap-8">
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Link
                  className="text-sm font-medium text-gray-400 hover:text-primary-500"
                  href="/dashboard/tickets"
                >
                  Tickets
                </Link>
                <ChevronRight className="h-4 w-4 text-gray-500" />
                <span className="text-sm font-medium text-white">#12346</span>
              </div>
              <h2 className="mt-2 text-3xl font-bold text-white">
                Data sync error between Hubspot and Mailchimp
              </h2>
            </div>
          </div>
          <div className="mt-8">
            <div className="rounded-lg border border-gray-700 bg-[#111a22]">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <Image
                    alt="User Avatar"
                    className="h-10 w-10 rounded-full"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkPYIxXnSTEJA8dB5Sl4-9XvGPadVQnGf8vk8Nci8Rk23bi7WBf79Rofe51fbt_dFbkK_8Kst0G9_fErzXKNW8DU5aH24pUtTNLHn044mTADSOfSzm9qXLJLaEDGmRvIB-eXzgxKPooFCqNkGAw5qvncNWH5aec7gjT4fPbbM8TeWitq6CqVhJlcJM7k5T-oV2fkGCpFwcHoflo6zdkw63xvm2ns9buUsni7ZdR-Dbg8mAoETooubr36RH7w1JcFaz8eZbhMjbGcK6"
                    width={40}
                    height={40}
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-white">John Doe</h3>
                      <span className="text-xs text-gray-400">
                        2024-01-16 10:30 AM
                      </span>
                    </div>
                    <p className="mt-2 text-gray-300">
                      Our data sync between Hubspot and Mailchimp is failing.
                      We're seeing an "Authentication error" message. We've
                      tried reconnecting the accounts, but the issue persists.
                      Can you please investigate?
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-700 p-6">
                <div className="flex items-start gap-4">
                  <Image
                    alt="User Avatar"
                    className="h-10 w-10 rounded-full"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-20PI489g4piII4GMlyb4vrAgg2EbeygVYId_BC-tDagOuRKTC6ZcZoRi5f2nyyKc-1dvMp9WqdGBbAxrvSKbMD4jT1YDO-4Mt7QK4uOkvrMr_V9mAUqB96DXCJJIY711GrPFk_BPtmYSUcPw_PpDN2sy5w04sqRerXUaRgQrzlzjGnEe8FUJ8xpRNeCJVVAK792ZkAT48eLyrGiNuctUQeE_ONYfPVNMihOkXnYU6Ttdblv7oybHpcvr8ok_33WNCytPIEPf5WtP"
                    width={40}
                    height={40}
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-white">
                        Alex Bennett (Support)
                      </h3>
                      <span className="text-xs text-gray-400">
                        2024-01-16 11:15 AM
                      </span>
                    </div>
                    <p className="mt-2 text-gray-300">
                      Hi John, thanks for reaching out. I'm looking into this
                      now. It seems like the API key for Mailchimp may have
                      expired. Could you please try generating a new one and
                      updating the connection settings?
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-700 bg-gray-800/50 p-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-yellow-300">info</span>
                  <p className="text-sm text-yellow-300">
                    Internal Note: Awaiting new API key from the customer.
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-700 p-6">
                <h3 className="text-lg font-semibold text-white">
                  Reply to Ticket
                </h3>
                <div className="mt-4">
                  <Textarea
                    className="w-full rounded-md border border-gray-600 bg-gray-800 p-3 text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none focus:ring-primary-500"
                    placeholder="Type your reply here..."
                    rows={4}
                  ></Textarea>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2 rounded-md border border-gray-600 px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700"
                    >
                      <File className="h-4 w-4" />
                      Attach File
                    </Button>
                    <Button
                      variant="outline"
                      className="flex items-center gap-2 rounded-md border border-gray-600 px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700"
                    >
                      <MessageSquare className="h-4 w-4" />
                      Canned Response
                    </Button>
                    <Button
                      variant="outline"
                      className="flex items-center gap-2 rounded-md border border-gray-600 px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700"
                    >
                      <MenuBook className="h-4 w-4" />
                      Knowledge Base
                    </Button>
                  </div>
                  <Button className="rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700">
                    Send Reply
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <aside className="w-80 space-y-6">
          <div className="rounded-lg border border-gray-700 bg-[#111a22] p-6">
            <h3 className="text-lg font-semibold text-white">
              Ticket Details
            </h3>
            <div className="mt-4 space-y-4">
              <div>
                <label
                  className="text-sm font-medium text-gray-400"
                  htmlFor="status"
                >
                  Status
                </label>
                <Select defaultValue="in-progress">
                  <SelectTrigger
                    className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 py-2 pl-3 pr-10 text-base text-white focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
                    id="status"
                    name="status"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="resolved">Resolved</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label
                  className="text-sm font-medium text-gray-400"
                  htmlFor="assignee"
                >
                  Assignee
                </label>
                 <Select defaultValue="alex-bennett">
                  <SelectTrigger
                    className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 py-2 pl-3 pr-10 text-base text-white focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
                    id="assignee"
                    name="assignee"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="unassigned">Unassigned</SelectItem>
                    <SelectItem value="alex-bennett">Alex Bennett</SelectItem>
                    <SelectItem value="chris-evans">Chris Evans</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label
                  className="text-sm font-medium text-gray-400"
                  htmlFor="priority"
                >
                  Priority
                </label>
                 <Select defaultValue="medium">
                  <SelectTrigger
                    className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 py-2 pl-3 pr-10 text-base text-white focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
                    id="priority"
                    name="priority"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button className="mt-6 w-full rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700">
              Update Ticket
            </Button>
          </div>
          <div className="rounded-lg border border-gray-700 bg-[#111a22] p-6">
            <h3 className="text-lg font-semibold text-white">Attachments</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <File className="text-gray-400" />
                  <span className="text-sm text-gray-300">error_log.txt</span>
                </div>
                <Link className="text-primary-500 hover:underline" href="#">
                  <Download className="h-5 w-5" />
                </Link>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <File className="text-gray-400" />
                  <span className="text-sm text-gray-300">screenshot.png</span>
                </div>
                <Link className="text-primary-500 hover:underline" href="#">
                  <Download className="h-5 w-5" />
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
