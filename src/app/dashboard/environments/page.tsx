
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

const productionVariables = [
  {
    name: 'API_KEY',
    value: '••••••••••••••••',
    lastUpdated: '2024-01-15',
  },
  {
    name: 'DATABASE_URL',
    value: '••••••••••••••••',
    lastUpdated: '2024-02-20',
  },
  {
    name: 'SECRET_TOKEN',
    value: '••••••••••••••••',
    lastUpdated: '2024-03-10',
  },
];

const stagingVariables = [
    {
        name: 'API_KEY',
        value: '••••••••••••••••',
        lastUpdated: '2024-01-10',
    },
    {
        name: 'DATABASE_URL',
        value: '••••••••••••••••',
        lastUpdated: '2024-02-15',
    },
];

export default function EnvironmentsPage() {
  return (
    <main className="flex-1 p-8">
      <header className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Environments
        </h2>
        <p className="text-neutral-400">
          Manage your environment variables and secrets securely.
        </p>
      </header>
      <div className="space-y-12">
        <section>
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white">Production</h3>
            <Button className="flex items-center gap-2 rounded-md bg-primary-500 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-neutral-900">
              <span className="material-symbols-outlined text-base">add</span>
              <span>Add Variable</span>
            </Button>
          </div>
          <div className="overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950">
            <Table>
              <TableHeader className="bg-neutral-900">
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Last Updated</TableHead>
                  <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {productionVariables.map((variable) => (
                  <TableRow key={variable.name}>
                    <TableCell className="font-medium text-white">
                      {variable.name}
                    </TableCell>
                    <TableCell>
                      <span className="font-mono rounded bg-neutral-800 px-2 py-1 text-xs">
                        {variable.value}
                      </span>
                    </TableCell>
                    <TableCell>{variable.lastUpdated}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-4">
                        <button className="text-primary-500 hover:text-primary-600">
                          <span className="material-symbols-outlined">
                            visibility
                          </span>
                        </button>
                        <button className="text-neutral-400 hover:text-white">
                          <span className="material-symbols-outlined">
                            edit
                          </span>
                        </button>
                        <button className="text-red-500 hover:text-red-600">
                          <span className="material-symbols-outlined">
                            delete
                          </span>
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>
        <section>
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white">Staging</h3>
            <Button className="flex items-center gap-2 rounded-md bg-primary-500 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-neutral-900">
              <span className="material-symbols-outlined text-base">add</span>
              <span>Add Variable</span>
            </Button>
          </div>
          <div className="overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950">
            <Table>
              <TableHeader className="bg-neutral-900">
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Last Updated</TableHead>
                  <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {stagingVariables.map((variable) => (
                  <TableRow key={variable.name}>
                    <TableCell className="font-medium text-white">
                      {variable.name}
                    </TableCell>
                    <TableCell>
                      <span className="font-mono rounded bg-neutral-800 px-2 py-1 text-xs">
                        {variable.value}
                      </span>
                    </TableCell>
                    <TableCell>{variable.lastUpdated}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-4">
                        <button className="text-primary-500 hover:text-primary-600">
                          <span className="material-symbols-outlined">
                            visibility
                          </span>
                        </button>
                        <button className="text-neutral-400 hover:text-white">
                          <span className="material-symbols-outlined">
                            edit
                          </span>
                        </button>
                        <button className="text-red-500 hover:text-red-600">
                          <span className="material-symbols-outlined">
                            delete
                          </span>
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>
      </div>
    </main>
  );
}
