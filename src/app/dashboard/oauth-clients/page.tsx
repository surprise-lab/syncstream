
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

const clients = [
  {
    name: 'Project Alpha',
    clientId: 'proj_alpha_123',
    permissions: 'Read-only access to user data',
    status: 'Active',
    icon: 'apps',
  },
  {
    name: 'Integration Beta',
    clientId: 'int_beta_456',
    permissions: 'Full access to account settings',
    status: 'Active',
    icon: 'integration_instructions',
  },
  {
    name: 'Service Gamma',
    clientId: 'svc_gamma_789',
    permissions: 'Limited access to specific resources',
    status: 'Inactive',
    icon: 'miscellaneous_services',
  },
];

export default function OauthClientsPage() {
  return (
    <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white">
            OAuth Clients
          </h2>
          <p className="mt-2 text-base text-[#92adc9]">
            Manage the third-party applications that have been granted access to
            your SyncStream account.
          </p>
        </div>
        <div className="overflow-x-auto rounded-md border border-[#233648] bg-[#192633]">
          <Table className="min-w-full divide-y divide-[#233648]">
            <thead className="bg-[#111a22]">
              <tr>
                <th
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400"
                  scope="col"
                >
                  Application
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400"
                  scope="col"
                >
                  Permissions
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400"
                  scope="col"
                >
                  Status
                </th>
                <th className="relative px-6 py-3" scope="col">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#233648]">
              {clients.map((client) => (
                <tr key={client.clientId}>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="flex items-center">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-[#233648]">
                        <span className="material-symbols-outlined text-[#92adc9]">
                          {client.icon}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-white">
                          {client.name}
                        </div>
                        <div className="text-sm text-gray-400">
                          client_id: {client.clientId}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-400">
                    {client.permissions}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {client.status === 'Active' ? (
                      <span className="inline-flex rounded-full bg-green-900 px-2 text-xs font-semibold leading-5 text-green-200">
                        Active
                      </span>
                    ) : (
                      <span className="inline-flex rounded-full bg-gray-700 px-2 text-xs font-semibold leading-5 text-gray-300">
                        Inactive
                      </span>
                    )}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                    {client.status === 'Active' ? (
                      <Button
                        variant="destructive"
                        className="flex items-center gap-2 rounded-md bg-red-600/20 px-3 py-1.5 text-sm font-semibold text-red-400 hover:bg-red-600/30"
                      >
                        <span className="material-symbols-outlined text-base">
                          link_off
                        </span>
                        Revoke
                      </Button>
                    ) : (
                      <Button
                        variant="secondary"
                        className="flex items-center gap-2 rounded-md bg-gray-600/20 px-3 py-1.5 text-sm font-semibold text-gray-300 hover:bg-gray-600/30"
                      >
                        <span className="material-symbols-outlined text-base">
                          settings
                        </span>
                        Manage
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </main>
  );
}
