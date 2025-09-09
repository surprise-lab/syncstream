
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import * as React from 'react';

const clients = [
  {
    name: 'Project Alpha',
    clientId: 'proj_alpha_123',
    accessLevel: 'Read-only',
    permissions: [
        { name: 'View user profile', description: 'Access your name, email, and avatar.' },
        { name: 'Read connections', description: 'View list of your established connections.' },
        { name: 'Read data flows', description: 'View list and details of your data flows.' },
    ],
    status: 'Active',
    icon: 'apps',
  },
  {
    name: 'Integration Beta',
    clientId: 'int_beta_456',
    accessLevel: 'Full access',
    permissions: [
        { name: 'Manage account settings', description: 'Modify your profile, notification preferences, and billing information.' },
        { name: 'Manage connections', description: 'Create, update, and delete connections to third-party services.' },
        { name: 'Manage data flows', description: 'Create, update, and delete data flows between your connections.' },
    ],
    status: 'Active',
    icon: 'integration_instructions',
  },
  {
    name: 'Service Gamma',
    clientId: 'svc_gamma_789',
    accessLevel: 'Limited access',
    permissions: [
        { name: 'Read \'Sales\' data flow', description: 'Access data specifically from the \'Sales\' data flow.' },
        { name: 'Trigger \'Marketing\' data flow', description: 'Initiate runs of the \'Marketing\' data flow.' },
    ],
    status: 'Inactive',
    icon: 'miscellaneous_services',
  },
];

export default function OauthClientsPage() {
    const [openRow, setOpenRow] = React.useState<string | null>(null);
  return (
    <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white">
            Third-Party Access
          </h2>
          <p className="mt-2 text-base text-[#92adc9]">
            Manage third-party applications with access to your SyncStream account.
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
                  Access Level
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
                <React.Fragment key={client.clientId}>
                <tr>
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
                    <button onClick={() => setOpenRow(openRow === client.clientId ? null : client.clientId)} className="flex items-center gap-1 text-sm text-primary hover:underline">
                        <span>{client.accessLevel}</span>
                        <span className="material-symbols-outlined text-base">{openRow === client.clientId ? 'expand_less' : 'expand_more'}</span>
                    </button>
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
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          className="flex items-center gap-2 rounded-md bg-gray-600/20 px-3 py-1.5 text-sm font-semibold text-gray-300 hover:bg-gray-600/30"
                        >
                          Manage
                          <span className="material-symbols-outlined text-base">expand_more</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56 bg-[#233648] text-white border-[#344a60]">
                        <DropdownMenuItem className="hover:bg-[#344a60] hover:text-white">
                          <span className="material-symbols-outlined text-base mr-3">refresh</span>
                          Reauthorize
                        </DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-[#344a60] hover:text-white">
                          <span className="material-symbols-outlined text-base mr-3">settings</span>
                          Reconfigure
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-400 hover:bg-red-600/30 hover:!text-red-400">
                          <span className="material-symbols-outlined text-base mr-3">link_off</span>
                          Revoke
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
                {openRow === client.clientId && (
                    <tr>
                        <td className="px-6 py-4" colSpan={4}>
                            <div className="rounded-md bg-[#111a22] p-4">
                                <h4 className="font-semibold text-white">Permissions Granted:</h4>
                                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-400">
                                    {client.permissions.map(permission => (
                                        <li key={permission.name}><span className="font-medium text-gray-300">{permission.name}:</span> {permission.description}</li>
                                    ))}
                                </ul>
                            </div>
                        </td>
                    </tr>
                )}
                </React.Fragment>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </main>
  );
}
