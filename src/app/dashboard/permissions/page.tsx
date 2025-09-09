
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
          Permissions &amp; Roles
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
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white text-2xl font-bold leading-tight tracking-tight">
              Roles
            </h2>
            <div className="flex items-center gap-4">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  {' '}
                  search{' '}
                </span>
                <input
                  className="w-64 bg-[#192633] border border-[#324d67] text-white text-sm rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Search roles..."
                  type="text"
                />
              </div>
              <div className="relative">
                <select className="w-48 appearance-none bg-[#192633] border border-[#324d67] text-white text-sm rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option selected>All Permissions</option>
                  <option>Can edit workflows</option>
                  <option>Can view workflows</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                  {' '}
                  expand_more{' '}
                </span>
              </div>
            </div>
          </div>
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
