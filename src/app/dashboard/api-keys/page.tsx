
'use client';

import { Button } from '@/components/ui/button';

const existingKeys = [
  {
    name: 'Production Key',
    key: 'sk_live_...aBcD',
    created: 'August 15, 2023',
    permissions: 'Read, Write',
    lastUsed: '2 days ago',
    status: 'Active',
  },
  {
    name: 'Staging Key',
    key: 'sk_test_...xYz1',
    created: 'September 22, 2023',
    permissions: 'Read Only',
    lastUsed: '1 week ago',
    status: 'Active',
  },
  {
    name: 'Compromised Key',
    key: 'sk_live_...pQrS',
    created: 'October 05, 2023',
    permissions: 'Read, Write',
    lastUsed: 'October 6, 2023',
    status: 'Revoked',
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'Active':
      return (
        <span className="inline-flex items-center rounded-full bg-green-500/20 px-2.5 py-0.5 text-xs font-medium text-green-400">
          <svg
            className="mr-1.5 h-2 w-2 text-green-400"
            fill="currentColor"
            viewBox="0 0 8 8"
          >
            <circle cx="4" cy="4" r="3"></circle>
          </svg>
          Active
        </span>
      );
    case 'Revoked':
      return (
        <span className="inline-flex items-center rounded-full bg-red-500/20 px-2.5 py-0.5 text-xs font-medium text-red-400">
          <svg
            className="mr-1.5 h-2 w-2 text-red-400"
            fill="currentColor"
            viewBox="0 0 8 8"
          >
            <circle cx="4" cy="4" r="3"></circle>
          </svg>
          Revoked
        </span>
      );
    default:
      return null;
  }
};

export default function ApiKeysPage() {
  return (
    <main className="flex-1 p-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">API Keys</h2>
          <p className="text-text-secondary">
            Manage your API keys for secure access to SyncStream's services.
          </p>
        </div>
        <Button className="flex items-center justify-center gap-2 rounded-md bg-primary-color px-4 py-2 text-sm font-medium text-white hover:opacity-90">
          <span className="material-symbols-outlined"> add </span>
          <span>Generate New Key</span>
        </Button>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold">Existing Keys</h3>
        <div className="mt-4 overflow-hidden rounded-md border border-border-color">
          <table className="min-w-full divide-y divide-border-color">
            <thead className="bg-secondary-color">
              <tr>
                <th
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-secondary"
                  scope="col"
                >
                  Key
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-secondary"
                  scope="col"
                >
                  Created
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-secondary"
                  scope="col"
                >
                  Permissions
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-secondary"
                  scope="col"
                >
                  Last Used
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-secondary"
                  scope="col"
                >
                  Status
                </th>
                <th className="relative px-6 py-3" scope="col">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-color bg-background-color">
              {existingKeys.map((item, index) => (
                <tr key={index}>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="text-sm font-medium text-text-primary">
                      {item.name}
                    </div>
                    <div className="text-xs text-text-secondary">
                      {item.key}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-text-secondary">
                    {item.created}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-text-secondary">
                    {item.permissions}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-text-secondary">
                    {item.lastUsed}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {getStatusBadge(item.status)}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                    <button className="text-red-500 hover:text-red-700">
                      Revoke
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
