
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
          <div className="mb-6 rounded-lg border border-neutral-800 bg-neutral-950 p-6">
            <h3 className="text-xl font-semibold text-white">External Secrets Management</h3>
            <p className="mt-2 text-neutral-400">Integrate with your preferred secrets manager to securely sync your credentials.</p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <button className="flex w-full items-center justify-center gap-3 rounded-md border border-neutral-700 bg-neutral-800 px-4 py-3 text-sm font-medium text-white hover:bg-neutral-700 sm:w-auto">
                <img alt="HashiCorp Vault Logo" className="h-6 w-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxBpUh7XE3wxxyWM8ZMvFIbaxcPu6WmMTt_ztIIM53teJ2Z5yc-U0FVsrwtfPgmJMKxu9pDvwcEfYN-KYmzjlnMnEprXa487AvptjqF8TfP-ZPER7TQJMfIOZDFU1YTDr2cxNKpKET-qbFrMfVa3F32d-UQw38Nu-s1hiEiHj3ntkmF-HfZdRLEmImK9399aaj_akj_18tzJU1L3aAeed9oWrsaFhFCC56VPuIMFk5T5KNFLD8ZKflhaPzZHgYhJFOCREH0YbFsbNw" />
                <span>Connect with HashiCorp Vault</span>
              </button>
              <button className="flex w-full items-center justify-center gap-3 rounded-md border border-neutral-700 bg-neutral-800 px-4 py-3 text-sm font-medium text-white hover:bg-neutral-700 sm:w-auto">
                <img alt="AWS Secrets Manager Logo" className="h-6 w-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy3aj3V08FM-xoIkB8y9qgVjqxzJNceBk73_GDhuRjf9FLV_ODrc1i05KTWWnbUEC8o66d07z868NedGFT__qbeM1q65g2o0ZbGV6JhZLZcERQsYgfu3hXIRTKiBDfpUDpoKCSaoOkTaC-43eaDi-lyrzIhC11jSu2Glq7ZL_CmTcL73paRNJemJWlKZBw_7u301rOzdvjWKBapVMdCX3kDUOoD8FmVEhH6GzsH6-nDBxc6x6g1mOIJSo-5s1Y55AmKDdjzxN_yZze" />
                <span>Connect with AWS Secrets Manager</span>
              </button>
            </div>
          </div>
        </section>
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
