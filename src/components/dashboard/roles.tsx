
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
} from "@/components/ui/dropdown-menu"
import { Plus, Edit, Filter, FileDown, Search, RotateCcw, Copy } from 'lucide-react';
import * as React from 'react';
import { Input } from '../ui/input';

const auditLogsData = [
  {
    timestamp: '2023-10-26 15:45:12',
    user: 'john.doe@example.com',
    action: 'Role Update',
    details: "Role 'Manager' permissions changed from 'Read, Write' to 'Read, Write, Delete'.",
  },
  {
    timestamp: '2023-10-25 10:12:34',
    user: 'jane.smith@example.com',
    action: 'Role Creation',
    details: "New role 'Accountant' created with 'Read-only' access to Accounting.",
  },
  {
    timestamp: '2023-10-24 17:20:05',
    user: 'john.doe@example.com',
    action: 'Role Deletion',
    details: "Role 'Temporary Staff' was deleted.",
  },
  {
    timestamp: '2023-10-23 09:00:51',
    user: 'admin@example.com',
    action: 'User Assignment',
    details: "User 'test@example.com' assigned to role 'Viewer'.",
  },
    {
    timestamp: '2023-10-22 11:30:18',
    user: 'susan.adams@example.com',
    action: 'Permission Change',
    details: "Permission 'Export Data' added to role 'Manager'.",
  },
];


export function Roles() {
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredAuditLogs = auditLogsData.filter((log) => {
    const searchTermLower = searchTerm.toLowerCase();
    return (
      log.user.toLowerCase().includes(searchTermLower) ||
      log.action.toLowerCase().includes(searchTermLower) ||
      log.details.toLowerCase().includes(searchTermLower) ||
      log.timestamp.toLowerCase().includes(searchTermLower)
    );
  });
  
  return (
    <main className="flex-1 px-10 py-8">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-col gap-1">
            <h1 className="text-white text-3xl font-bold">User Roles</h1>
            <p className="text-[#9eb7a8] text-base">
              Manage roles and permissions for users within the application.
            </p>
          </div>
          <Button className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-bold text-white bg-primary hover:bg-primary-600 transition-colors">
            <Plus className="mr-2" />
            Create New Role
          </Button>
        </div>
        <div className="overflow-hidden rounded-md border border-[#3d5245] bg-[#1a231e] mb-8">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-[#1c2620]">
                <TableRow>
                  <TableHead className="p-4 text-sm font-medium text-white">
                    Role Name
                  </TableHead>
                  <TableHead className="p-4 text-sm font-medium text-white">
                    Permissions
                  </TableHead>
                  <TableHead className="p-4 text-sm font-medium text-white text-center">
                    Users
                  </TableHead>
                  <TableHead className="p-4 text-sm font-medium text-white"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="divide-y divide-[#3d5245]">
                <TableRow className="hover:bg-[#1f2a24] transition-colors">
                  <TableCell className="p-4 text-sm text-white font-medium">
                    Administrator
                  </TableCell>
                  <TableCell className="p-4 text-sm text-[#9eb7a8] max-w-xs truncate">
                    Full access to all features and settings
                  </TableCell>
                  <TableCell className="p-4 text-sm text-[#9eb7a8] text-center">
                    5
                  </TableCell>
                  <TableCell className="p-4 text-right space-x-2">
                    <Button
                      variant="ghost"
                      className="inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium text-white hover:bg-gray-700 transition-colors"
                    >
                      <Copy className="text-lg mr-1" />
                      Duplicate
                    </Button>
                    <Button
                      variant="ghost"
                      className="inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium text-white hover:bg-gray-700 transition-colors"
                    >
                      <Edit className="text-lg mr-1" />
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-[#1f2a24] transition-colors">
                  <TableCell className="p-4 text-sm text-white font-medium">
                    Manager
                  </TableCell>
                  <TableCell className="p-4 text-sm text-[#9eb7a8] max-w-xs truncate">
                    Access to orders, products, and accounting
                  </TableCell>
                  <TableCell className="p-4 text-sm text-[#9eb7a8] text-center">
                    10
                  </TableCell>
                  <TableCell className="p-4 text-right space-x-2">
                     <Button
                      variant="ghost"
                      className="inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium text-white hover:bg-gray-700 transition-colors"
                    >
                      <Copy className="text-lg mr-1" />
                      Duplicate
                    </Button>
                    <Button
                      variant="ghost"
                      className="inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium text-white hover:bg-gray-700 transition-colors"
                    >
                      <Edit className="text-lg mr-1" />
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-[#1f2a24] transition-colors">
                  <TableCell className="p-4 text-sm text-white font-medium">
                    Viewer
                  </TableCell>
                  <TableCell className="p-4 text-sm text-[#9eb7a8] max-w-xs truncate">
                    Read-only access to orders and products
                  </TableCell>
                  <TableCell className="p-4 text-sm text-[#9eb7a8] text-center">
                    20
                  </TableCell>
                  <TableCell className="p-4 text-right space-x-2">
                     <Button
                      variant="ghost"
                      className="inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium text-white hover:bg-gray-700 transition-colors"
                    >
                      <Copy className="text-lg mr-1" />
                      Duplicate
                    </Button>
                    <Button
                      variant="ghost"
                      className="inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium text-white hover:bg-gray-700 transition-colors"
                    >
                      <Edit className="text-lg mr-1" />
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-white text-2xl font-bold">Audit Trail</h2>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input 
                  placeholder="Search audit trail..."
                  className="bg-[#2d3748] border-gray-600 pl-9"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button
                variant="outline"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#2d3748] px-3 py-1.5 text-sm font-medium text-gray-300 border border-gray-600 hover:bg-gray-600 transition-colors"
              >
                <Filter className="text-base" /> Filter
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-[#2d3748] px-3 py-1.5 text-sm font-medium text-gray-300 border border-gray-600 hover:bg-gray-600 transition-colors"
                  >
                    <FileDown className="text-base" /> Export
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Export as CSV</DropdownMenuItem>
                  <DropdownMenuItem>Export as JSON</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredAuditLogs.map((log, index) => (
              <div key={index} className="bg-card border border-border rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-white">{log.action}</p>
                    <p className="text-sm text-gray-400">{log.user}</p>
                    <p className="text-xs text-gray-500">{log.timestamp}</p>
                  </div>
                  <Button variant="ghost" size="sm" className="text-gray-300 hover:bg-gray-700 hover:text-white">
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Revert
                  </Button>
                </div>
                <div className="mt-4 text-sm text-gray-300" dangerouslySetInnerHTML={{ __html: log.details.replace(/'(.*?)'/g, '<span class="font-semibold text-gray-100">\'$1\'</span>') }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
