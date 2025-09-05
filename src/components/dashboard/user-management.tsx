

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
import { Badge } from '@/components/ui/badge';
import { Search, UserPlus, Pencil, Trash2, Check, X, MoreVert } from 'lucide-react';

const users = [
  {
    name: 'Ethan Harper',
    email: 'ethan.harper@example.com',
    role: 'Admin',
    lastLogin: '2023-10-27 10:15:32',
    status: 'Active',
  },
  {
    name: 'Olivia Bennett',
    email: 'olivia.bennett@example.com',
    role: 'Manager',
    lastLogin: '2023-10-27 09:45:11',
    status: 'Active',
  },
  {
    name: 'Noah Carter',
    email: 'noah.carter@example.com',
    role: 'User',
    lastLogin: '2023-10-25 14:22:01',
    status: 'Pending',
  },
  {
    name: 'Ava Morgan',
    email: 'ava.morgan@example.com',
    role: 'User',
    lastLogin: '2023-10-27 09:30:05',
    status: 'Active',
  },
  {
    name: 'Liam Foster',
    email: 'liam.foster@example.com',
    role: 'Manager',
    lastLogin: '2023-10-26 18:05:20',
    status: 'Suspended',
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'Active':
      return (
        <Badge className="inline-flex items-center gap-1.5 border-transparent bg-green-900 px-2 py-1 text-xs font-medium text-green-300">
          <span className="size-1.5 rounded-full bg-green-500"></span>
          Active
        </Badge>
      );
    case 'Pending':
        return (
            <Badge className="inline-flex items-center gap-1.5 border-transparent bg-yellow-900 px-2 py-1 text-xs font-medium text-yellow-300">
                <span className="size-1.5 rounded-full bg-yellow-500"></span>
                Pending
            </Badge>
        );
    case 'Suspended':
        return (
            <Badge className="inline-flex items-center gap-1.5 border-transparent bg-red-900 px-2 py-1 text-xs font-medium text-red-300">
                <span className="size-1.5 rounded-full bg-red-500"></span>
                Suspended
            </Badge>
        );
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

const getRoleBadge = (role: string) => {
  switch (role) {
    case 'Admin':
      return (
        <Badge className="border-transparent bg-blue-900 px-2 py-1 text-xs font-medium text-blue-300">
          Admin
        </Badge>
      );
    case 'Manager':
      return (
        <Badge className="border-transparent bg-purple-900 px-2 py-1 text-xs font-medium text-purple-300">
          Manager
        </Badge>
      );
    case 'User':
      return (
        <Badge className="border-transparent bg-slate-700 px-2 py-1 text-xs font-medium text-gray-300">
          User
        </Badge>
      );
    default:
      return <Badge variant="secondary">{role}</Badge>;
  }
};


export function UserManagement() {
  return (
    <main className="flex-1 p-6 bg-gray-900">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-white text-3xl font-bold">User Management</h1>
        <Button className="bg-green-500 text-gray-900 hover:bg-green-600">
          <UserPlus className="mr-2" />
          Add User
        </Button>
      </div>
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <Input
            className="w-full rounded-md border-gray-700 bg-gray-800 pl-10 text-white placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500"
            placeholder="Search users by name or email"
            type="text"
          />
        </div>
      </div>
      <div className="overflow-x-auto rounded-lg border border-gray-800">
        <Table>
          <TableHeader className="bg-gray-800 text-xs uppercase tracking-wider">
            <TableRow className="border-gray-800">
              <TableHead className="px-6 py-3">Name</TableHead>
              <TableHead className="px-6 py-3">Email</TableHead>
              <TableHead className="px-6 py-3">Role</TableHead>
              <TableHead className="px-6 py-3">Last Login</TableHead>
              <TableHead className="px-6 py-3 text-center">Status</TableHead>
              <TableHead className="px-6 py-3 text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-gray-800 bg-gray-800/50">
            {users.map((user, index) => (
              <TableRow key={index} className="hover:bg-gray-800 transition-colors">
                <TableCell className="whitespace-nowrap px-6 py-4 font-medium text-white">
                  {user.name}
                </TableCell>
                <TableCell className="px-6 py-4 text-muted-foreground">
                  {user.email}
                </TableCell>
                <TableCell className="px-6 py-4">
                  {getRoleBadge(user.role)}
                </TableCell>
                <TableCell className="px-6 py-4 text-muted-foreground">
                    {user.lastLogin}
                </TableCell>
                <TableCell className="px-6 py-4 text-center">
                  {getStatusBadge(user.status)}
                </TableCell>
                <TableCell className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-4">
                    <Button variant="ghost" size="icon" className="h-auto w-auto p-0 text-muted-foreground hover:text-white">
                      <Pencil className="size-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-auto w-auto p-0 text-muted-foreground hover:text-red-500">
                      <Trash2 className="size-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mt-4 flex justify-between items-center text-sm text-gray-400">
        <span>Showing 1 to 5 of 20 users</span>
        <div className="flex items-center gap-1">
          <Button variant="outline" size="sm" disabled className="disabled:opacity-50">
            Previous
          </Button>
          <Button variant="default" size="sm" className="bg-green-500/20 text-green-400">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="sm">
            4
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
      <div className="mt-10">
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-white text-2xl font-bold">Roles &amp; Permissions</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg border border-gray-800 bg-gray-800/50">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-lg font-semibold text-white">Admin</h3>
                        <p className="text-sm text-gray-400">Full access to all features</p>
                    </div>
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white"><MoreVert /></Button>
                </div>
                <div className="space-y-2">
                    <p className="text-sm text-gray-300 flex items-center gap-2"><Check className="text-green-400 size-4" /> Manage Users &amp; Roles</p>
                    <p className="text-sm text-gray-300 flex items-center gap-2"><Check className="text-green-400 size-4" /> Configure Settings</p>
                    <p className="text-sm text-gray-300 flex items-center gap-2"><Check className="text-green-400 size-4" /> View &amp; Manage All Orders</p>
                    <p className="text-sm text-gray-300 flex items-center gap-2"><Check className="text-green-400 size-4" /> Full API Access</p>
                </div>
            </div>
            <div className="p-6 rounded-lg border border-gray-800 bg-gray-800/50">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-lg font-semibold text-white">Manager</h3>
                        <p className="text-sm text-gray-400">Can manage products and orders</p>
                    </div>
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white"><MoreVert /></Button>
                </div>
                <div className="space-y-2">
                    <p className="text-sm text-gray-300 flex items-center gap-2"><Check className="text-green-400 size-4" /> View &amp; Manage All Orders</p>
                    <p className="text-sm text-gray-300 flex items-center gap-2"><Check className="text-green-400 size-4" /> View &amp; Manage Products</p>
                    <p className="text-sm text-gray-300 flex items-center gap-2"><X className="text-red-400 size-4" /> Manage Users &amp; Roles</p>
                    <p className="text-sm text-gray-300 flex items-center gap-2"><X className="text-red-400 size-4" /> Configure Settings</p>
                </div>
            </div>
            <div className="p-6 rounded-lg border border-gray-800 bg-gray-800/50">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-lg font-semibold text-white">User</h3>
                        <p className="text-sm text-gray-400">Can view orders and products</p>
                    </div>
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white"><MoreVert /></Button>
                </div>
                <div className="space-y-2">
                    <p className="text-sm text-gray-300 flex items-center gap-2"><Check className="text-green-400 size-4" /> View Own Orders</p>
                    <p className="text-sm text-gray-300 flex items-center gap-2"><Check className="text-green-400 size-4" /> View Products</p>
                    <p className="text-sm text-gray-300 flex items-center gap-2"><X className="text-red-400 size-4" /> Manage Users &amp; Roles</p>
                    <p className="text-sm text-gray-300 flex items-center gap-2"><X className="text-red-400 size-4" /> Configure Settings</p>
                </div>
            </div>
        </div>
        <div className="mt-6 flex justify-end">
            <Button className="bg-gray-700 text-white hover:bg-gray-600">
                <UserPlus className="mr-2"/>
                Create New Role
            </Button>
        </div>
      </div>
    </main>
  );
}
