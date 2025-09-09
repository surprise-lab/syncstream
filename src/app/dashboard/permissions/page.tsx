
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

const roles = [
  { name: 'Administrator', permissions: 'All permissions', users: '2 users' },
  { name: 'Editor', permissions: 'Can edit workflows', users: '5 users' },
  { name: 'Viewer', permissions: 'Can view workflows', users: '10 users' },
];

const userRoles = [
  { name: 'Sophia Clark', role: 'Administrator' },
  { name: 'Ethan Carter', role: 'Editor' },
  { name: 'Olivia Bennett', role: 'Viewer' },
  { name: 'Liam Harper', role: 'Editor' },
  { name: 'Ava Foster', role: 'Viewer' },
];

export default function PermissionsPage() {
  return (
    <main className="flex-1 p-8">
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-white text-4xl font-bold leading-tight tracking-tight">
          Permissions
        </h1>
        <div className="flex items-center gap-4">
          <Button className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 h-10 text-white text-sm font-bold hover:bg-blue-700 transition-colors">
            <span className="material-symbols-outlined"> add </span>
            <span>Create Role</span>
          </Button>
        </div>
      </header>
      <div className="space-y-12">
        <section>
          <h2 className="text-white text-2xl font-bold leading-tight tracking-tight mb-4">
            Roles
          </h2>
          <div className="overflow-hidden rounded-lg border border-[#324d67] bg-[#192633]">
            <table className="min-w-full">
              <thead className="bg-[#192633]">
                <tr>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400"
                    scope="col"
                  >
                    Role
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
                    Users
                  </th>
                  <th className="relative px-6 py-3" scope="col">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#324d67] bg-[#111a22]">
                {roles.map((role) => (
                  <tr key={role.name}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                      {role.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#92adc9]">
                      {role.permissions}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#92adc9]">
                      {role.users}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link
                        className="text-blue-500 hover:text-blue-400"
                        href="#"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section>
          <h2 className="text-white text-2xl font-bold leading-tight tracking-tight mb-4">
            User-Role Matrix
          </h2>
          <div className="overflow-hidden rounded-lg border border-[#324d67] bg-[#192633]">
            <table className="min-w-full">
              <thead className="bg-[#192633]">
                <tr>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400"
                    scope="col"
                  >
                    User
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400"
                    scope="col"
                  >
                    Role
                  </th>
                  <th className="relative px-6 py-3" scope="col">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#324d67] bg-[#111a22]">
                {userRoles.map((user) => (
                  <tr key={user.name}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                      {user.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#92adc9]">
                      {user.role}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link
                        className="text-blue-500 hover:text-blue-400"
                        href="#"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
