
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

const webhooks = [
  {
    name: 'Order Created',
    url: 'https://example.com/webhooks/orders',
    events: ['order.created'],
    status: 'Active',
  },
  {
    name: 'Customer Updated',
    url: 'https://example.com/webhooks/customers',
    events: ['customer.updated'],
    status: 'Active',
  },
  {
    name: 'Product Deleted',
    url: 'https://example.com/webhooks/products',
    events: ['product.deleted'],
    status: 'Inactive',
  },
];

export default function WebhooksPage() {
  return (
    <main className="flex-1 p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Webhooks</h1>
          <p className="text-[#8B949E] mt-1">
            Manage your webhooks for real-time notifications and data pushes.
          </p>
        </div>
        <Button className="flex items-center gap-2 min-w-[84px] cursor-pointer justify-center rounded-md h-10 px-4 bg-primary-600 text-white text-sm font-medium hover:bg-primary-700 transition-colors">
          <span className="material-symbols-outlined text-lg"> add </span>
          <span className="truncate">New Webhook</span>
        </Button>
      </div>
      <div className="bg-[#161B22] border border-[#30363D] rounded-lg">
        <div className="px-6 py-4 border-b border-[#30363D]">
          <h3 className="text-lg font-semibold text-white">Active Webhooks</h3>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-[#30363D]">
                <TableHead>Name</TableHead>
                <TableHead>URL</TableHead>
                <TableHead>Events</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {webhooks.map((webhook) => (
                <TableRow key={webhook.name} className="hover:bg-[#21262D]/50">
                  <TableCell className="font-medium text-white whitespace-nowrap">
                    {webhook.name}
                  </TableCell>
                  <TableCell className="font-mono text-xs">
                    {webhook.url}
                  </TableCell>
                  <TableCell>
                    {webhook.events.map((event) => (
                      <span
                        key={event}
                        className="bg-[#21262D] border border-[#30363D] text-[#8B949E] text-xs font-medium me-2 px-2.5 py-0.5 rounded-full"
                      >
                        {event}
                      </span>
                    ))}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div
                        className={`h-2.5 w-2.5 rounded-full ${
                          webhook.status === 'Active'
                            ? 'bg-green-500'
                            : 'bg-gray-500'
                        }`}
                      ></div>
                      <span>{webhook.status}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-4">
                      <button className="text-[#8B949E] hover:text-primary-400 transition-colors">
                        <span className="material-symbols-outlined text-xl">
                          {' '}
                          edit{' '}
                        </span>
                      </button>
                      <button className="text-[#8B949E] hover:text-red-500 transition-colors">
                        <span className="material-symbols-outlined text-xl">
                          {' '}
                          delete{' '}
                        </span>
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
}
