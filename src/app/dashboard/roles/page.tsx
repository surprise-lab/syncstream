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
import { Plus, Edit, ArrowUpDown } from 'lucide-react';
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
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Role Updated</Badge>;
      case 'User Assigned to Role':
        return <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100">User Assigned to Role</Badge>;
      case 'Role Created':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Role Created</Badge>;
      case 'Role Deleted':
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Role Deleted</Badge>;
      case 'User Removed from Role':
        return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">User Removed from Role</Badge>;
      default:
        return <Badge variant="secondary">{action}</Badge>;
    }
}

type SortableKeys = 'timestamp' | 'user' | 'action' | 'details';

export function Roles() {
  const [sortedAuditLogs, setSortedAuditLogs] = React.useState(auditLogsData);
  const [sortConfig, setSortConfig] = React.useState<{ key: SortableKeys; direction: 'ascending' | 'descending' } | null>({ key: 'timestamp', direction: 'descending' });

  React.useEffect(() => {
    let sortedData = [...auditLogsData];
    if (sortConfig !== null) {
      sortedData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    setSortedAuditLogs(sortedData);
  }, [sortConfig]);

  const requestSort = (key: SortableKeys) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };
  
  const getSortIndicator = (key: SortableKeys) => {
    if (!sortConfig || sortConfig.key !== key) {
      return <ArrowUpDown className="ml-2 h-4 w-4 text-gray-400" />;
    }
    if (sortConfig.direction === 'ascending') {
      return <ArrowUpDown className="ml-2 h-4 w-4" />;
    }
    return <ArrowUpDown className="ml-2 h-4 w-4" />;
  };

  return (
    <main className="flex-1 px-10 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold text-gray-900">User Roles</h1>
            <p className="text-base text-gray-500">Manage roles and permissions for users within the application.</p>
          </div>
          <Button className="bg-primary-500 hover:bg-primary-600 text-white">
            <Plus className="mr-2" /> Create New Role
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
                        <Edit className="mr-1 text-lg" /> Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        <div className="flex flex-col gap-6" style={{ fontFamily: '"Arial", sans-serif' }}>
          <h2 className="text-2xl font-bold text-gray-900">Audit Trail</h2>
          <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-gray-50">
                  <TableRow>
                    <TableHead className="whitespace-nowrap p-4 text-base font-semibold text-gray-600">
                      <Button variant="ghost" onClick={() => requestSort('timestamp')} className="p-0 hover:bg-transparent text-base">
                        Timestamp {getSortIndicator('timestamp')}
                      </Button>
                    </TableHead>
                    <TableHead className="whitespace-nowrap p-4 text-base font-semibold text-gray-600">
                      <Button variant="ghost" onClick={() => requestSort('user')} className="p-0 hover:bg-transparent text-base">
                        User {getSortIndicator('user')}
                      </Button>
                    </TableHead>
                    <TableHead className="whitespace-nowrap p-4 text-base font-semibold text-gray-600">
                      <Button variant="ghost" onClick={() => requestSort('action')} className="p-0 hover:bg-transparent text-base">
                        Action {getSortIndicator('action')}
                      </Button>
                    </TableHead>
                    <TableHead className="p-4 text-base font-semibold text-gray-600">Details</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="divide-y divide-gray-200">
                  {sortedAuditLogs.map((log, index) => (
                    <TableRow key={index} className="transition-colors hover:bg-gray-50/50">
                      <TableCell className="p-4 align-top text-base text-gray-500">{log.timestamp}</TableCell>
                      <TableCell className="p-4 align-top text-base text-gray-800">{log.user}</TableCell>
                      <TableCell className="p-4 align-top text-base text-gray-800">
                        {getActionBadge(log.action)}
                      </TableCell>
                      <TableCell className="p-4 text-base text-gray-600">{log.details}</TableCell>
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
