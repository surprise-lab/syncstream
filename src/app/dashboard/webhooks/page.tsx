
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-[#161B22] border border-[#30363D] rounded-lg">
            <div className="px-6 py-4 border-b border-[#30363D]">
              <h3 className="text-lg font-semibold text-white">
                Active Webhooks
              </h3>
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
                    <TableRow
                      key={webhook.name}
                      className="hover:bg-[#21262D]/50"
                    >
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
        </div>
        <div className="lg:col-span-1">
          <div className="bg-[#161B22] border border-[#30363D] rounded-lg">
            <div className="px-6 py-4 border-b border-[#30363D]">
              <h3 className="text-lg font-semibold text-white">
                Test Webhook
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label
                  className="block text-sm font-medium text-[#C9D1D9] mb-1"
                  htmlFor="webhook-url"
                >
                  Webhook URL
                </label>
                <input
                  className="w-full bg-[#0D1117] border border-[#30363D] text-white text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  id="webhook-url"
                  placeholder="https://example.com/webhooks/test"
                  type="text"
                  defaultValue="https://example.com/webhooks/orders"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-[#C9D1D9] mb-1"
                  htmlFor="payload"
                >
                  Payload
                </label>
                <textarea
                  className="w-full bg-[#0D1117] border border-[#30363D] text-white text-sm rounded-md px-3 py-2 h-48 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-primary-500"
                  id="payload"
                  placeholder='{ "event": "test" }'
                  defaultValue={`{
  "event_id": "evt_12345",
  "event_type": "order.created",
  "data": {
    "order_id": "ord_67890",
    "amount": 99.99,
    "currency": "usd"
  },
  "timestamp": "2024-03-15T10:00:00Z"
}`}
                ></textarea>
              </div>
              <button className="w-full flex items-center justify-center gap-2 min-w-[84px] cursor-pointer rounded-md h-10 px-4 bg-transparent border border-[#30363D] text-white text-sm font-medium hover:bg-[#21262D] transition-colors">
                <span className="material-symbols-outlined text-lg">
                  {' '}
                  send{' '}
                </span>
                <span>Send Test</span>
              </button>
              <div className="bg-[#0D1117] p-4 rounded-md border border-[#30363D]">
                <h4 className="text-sm font-semibold text-white mb-2">
                  Response
                </h4>
                <div className="flex items-center gap-2 text-sm text-green-400">
                  <span className="material-symbols-outlined text-base">
                    {' '}
                    check_circle{' '}
                  </span>
                  <span>Success (200 OK)</span>
                </div>
                <pre className="mt-2 text-xs text-[#8B949E] bg-[#010409] p-2 rounded-md overflow-x-auto">
                  <code>{`{
  "status": "received"
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
