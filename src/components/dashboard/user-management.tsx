

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const users = [
  {
    name: 'Ethan Carter',
    email: 'ethan.carter@example.com',
    role: 'Admin',
    status: 'Active',
  },
  {
    name: 'Olivia Bennett',
    email: 'olivia.bennett@example.com',
    role: 'User',
    status: 'Active',
  },
  {
    name: 'Liam Harper',
    email: 'liam.harper@example.com',
    role: 'User',
    status: 'Inactive',
  },
  {
    name: 'Ava Morgan',
    email: 'ava.morgan@example.com',
    role: 'User',
    status: 'Active',
  },
  {
    name: 'Noah Foster',
    email: 'noah.foster@example.com',
    role: 'User',
    status: 'Active',
  },
];

const getRoleBadge = (role: string) => {
    if (role === 'Admin') {
        return <span className="inline-flex items-center rounded-full bg-blue-500/10 px-2 py-1 text-xs font-medium text-blue-400">Admin</span>
    }
    return <span className="inline-flex items-center rounded-full bg-gray-500/10 px-2 py-1 text-xs font-medium text-gray-400">User</span>
}

const getStatusBadge = (status: string) => {
    if (status === 'Active') {
        return <span className="inline-flex items-center rounded-full bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400">Active</span>
    }
    return <span className="inline-flex items-center rounded-full bg-yellow-500/10 px-2 py-1 text-xs font-medium text-yellow-400">Inactive</span>
}


export function UserManagement() {
  return (
    <main className="flex-1 px-6 py-8 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-3xl font-bold tracking-tight text-white">User Management</h2>
            <button className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary">
                <span className="material-symbols-outlined"> add </span>
                Add New User
            </button>
            </div>
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="relative flex-1">
                <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-3"> search </span>
                <input className="w-full rounded-md border-0 bg-surface-2 py-2 pl-10 pr-4 text-white placeholder:text-text-3 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:w-80" placeholder="Search users by name or email..." type="search"/>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-text-2" htmlFor="role-filter">Role:</label>
                <Select defaultValue="All">
                    <SelectTrigger id="role-filter" className="rounded-md border-0 bg-surface-2 py-1.5 pl-3 pr-8 text-sm text-white focus:ring-2 focus:ring-inset focus:ring-brand-primary w-auto">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="All">All</SelectItem>
                        <SelectItem value="Admin">Admin</SelectItem>
                        <SelectItem value="User">User</SelectItem>
                    </SelectContent>
                </Select>
                </div>
                <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-text-2" htmlFor="status-filter">Status:</label>
                <Select defaultValue="All">
                    <SelectTrigger id="status-filter" className="rounded-md border-0 bg-surface-2 py-1.5 pl-3 pr-8 text-sm text-white focus:ring-2 focus:ring-inset focus:ring-brand-primary w-auto">
                        <SelectValue/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="All">All</SelectItem>
                        <SelectItem value="Active">Active</SelectItem>
                        <SelectItem value="Inactive">Inactive</SelectItem>
                    </SelectContent>
                </Select>
                </div>
            </div>
            </div>
            <div className="overflow-x-auto rounded-lg border border-surface-3 bg-surface-2">
            <table className="min-w-full divide-y divide-surface-3">
                <thead className="bg-surface-3/50">
                <tr>
                    <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6" scope="col">Name</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-white" scope="col">Email</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-white" scope="col">Role</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-white" scope="col">Status</th>
                    <th className="relative py-3.5 pl-3 pr-4 sm:pr-6" scope="col">
                    <span className="sr-only">Actions</span>
                    </th>
                </tr>
                </thead>
                <tbody className="divide-y divide-surface-3">
                {users.map((user) => (
                    <tr key={user.email}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">{user.name}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-text-2">{user.email}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-text-2">
                            {getRoleBadge(user.role)}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-text-2">
                            {getStatusBadge(user.status)}
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            <button className="p-1 text-text-2 transition-colors hover:text-white" title="Reset Password">
                                <span className="material-symbols-outlined text-base"> lock_reset </span>
                            </button>
                            <button className="p-1 text-text-2 transition-colors hover:text-white">
                                <span className="material-symbols-outlined text-base"> edit </span>
                            </button>
                            <button className="p-1 text-text-2 transition-colors hover:text-danger">
                                <span className="material-symbols-outlined text-base"> delete </span>
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
