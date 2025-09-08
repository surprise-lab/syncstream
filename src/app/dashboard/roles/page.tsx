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
import { Badge } from "@/components/ui/badge"
import { Plus, Edit } from 'lucide-react';
import * as React from 'react';

const rolesData = [
  {
    name: 'Administrator',
    permissions: 'Full access to all features and settings',
    users: 5,
  },
  {
    name: 'Manager',
    permissions: 'Access to orders, products, and accounting',
    users: 10,
  },
  {
    name: 'Viewer',
    permissions: 'Read-only access to orders and products',
    users: 20,
  },
];

const auditLogsData = [
    {
    timestamp: '2023-10-27 09:15:33',
    user: 'admin@example.com',
    action: 'Role Updated',
    details: "Changed permissions for role 'Manager'. Added 'Delete Orders' permission.",
  },
  {
    timestamp: '2023-10-26 14:30:01',
    user: 'jane.doe@example.com',
    action: 'User Assigned to Role',
    details: "Assigned user 'john.smith@example.com' to 'Viewer' role.",
  },
  {
    timestamp: '2023-10-26 11:05:22',
    user: 'admin@example.com',
    action: 'Role Created',
    details: "Created new role 'Support' with permissions 'View Orders' and 'View Products'.",
  },
  {
    timestamp: '2023-10-25 18:00:56',
    user: 'admin@example.com',
    action: 'Role Deleted',
    details: "Deleted role 'Intern'.",
  },
  {
    timestamp: '2023-10-25 16:21:40',
    user: 'jane.doe@example.com',
    action: 'User Removed from Role',
    details: "Removed user 'mark.johnson@example.com' from 'Manager' role.",
  },
];

const getActionBadge = (action: string) => {
    switch (action) {
      case 'Role Updated':
        return <Badge className="bg-blue-900/50 text-blue-300 hover:bg-blue-900/50">Role Updated</Badge>;
      case 'User Assigned to Role':
        return <Badge className="bg-indigo-900/50 text-indigo-300 hover:bg-indigo-900/50">User Assigned to Role</Badge>;
      case 'Role Created':
        return <Badge className="bg-green-900/50 text-green-300 hover:bg-green-900/50">Role Created</Badge>;
      case 'Role Deleted':
        return <Badge className="bg-red-900/50 text-red-300 hover:bg-red-900/50">Role Deleted</Badge>;
      case 'User Removed from Role':
        return <Badge className="bg-purple-900/50 text-purple-300 hover:bg-purple-900/50">User Removed from Role</Badge>;
      default:
        return <Badge variant="secondary">{action}</Badge>;
    }
}


export default function RolesPage() {
  return (
    <main className="flex-1 px-10 py-8 bg-gray-100">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold text-gray-900">User Roles</h1>
            <p className="text-base text-gray-500">Manage roles and permissions for users within the application.</p>
          </div>
          <Button className="bg-primary-500 hover:bg-primary-600 text-white">
            <Plus className="mr-2 h-4 w-4" /> Create New Role
          </Button>
        </div>
        <div className="mb-8 overflow-hidden rounded-lg border border-gray-200 bg-white">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-gray-50">
                <TableRow>
                  <TableHead className="p-4 text-sm font-medium text-gray-700">Role Name</TableHead>
                  <TableHead className="p-4 text-sm font-medium text-gray-700">Permissions</TableHead>
                  <TableHead className="p-4 text-center text-sm font-medium text-gray-700">Users</TableHead>
                  <TableHead className="p-4 text-sm font-medium text-gray-700"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="divide-y divide-gray-200">
                {rolesData.map((role, index) => (
                  <TableRow key={index} className="transition-colors hover:bg-gray-50">
                    <TableCell className="p-4 text-sm font-medium text-gray-900">{role.name}</TableCell>
                    <TableCell className="max-w-xs truncate p-4 text-sm text-gray-600">{role.permissions}</TableCell>
                    <TableCell className="p-4 text-center text-sm text-gray-600">{role.users}</TableCell>
                    <TableCell className="p-4 text-right">
                      <Button variant="ghost" className="text-gray-700 hover:bg-gray-100">
                        <Edit className="mr-1 h-4 w-4" /> Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-white">Audit Trail</h2>
          <div className="overflow-hidden rounded-lg border border-gray-700 bg-black">
            <div className="overflow-x-auto">
              <Table className="min-w-[800px]">
                <TableHeader className="border-b border-gray-700 bg-gray-900">
                  <TableRow>
                    <TableHead className="whitespace-nowrap p-4 text-sm font-semibold text-gray-300">Timestamp</TableHead>
                    <TableHead className="whitespace-nowrap p-4 text-sm font-semibold text-gray-300">User</TableHead>
                    <TableHead className="whitespace-nowrap p-4 text-sm font-semibold text-gray-300">Action</TableHead>
                    <TableHead className="p-4 text-sm font-semibold text-gray-300">Details</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="divide-y divide-gray-800">
                  {auditLogsData.map((log, index) => (
                    <TableRow key={index} className="transition-colors hover:bg-gray-900/50">
                      <TableCell className="p-4 align-top text-sm text-gray-400">{log.timestamp}</TableCell>
                      <TableCell className="p-4 align-top text-sm text-gray-200">{log.user}</TableCell>
                      <TableCell className="p-4 align-top text-sm text-gray-200">
                        {getActionBadge(log.action)}
                      </TableCell>
                      <TableCell className="p-4 text-sm text-gray-300">{log.details}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
