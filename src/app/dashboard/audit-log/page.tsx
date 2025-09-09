
'use client';

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

const auditLogs = [
  {
    timestamp: '2024-01-20 14:30',
    user: 'Alex Bennett',
    action: 'Permission Added',
    details: "Permission 'View Reports' added to role 'Analyst'",
  },
  {
    timestamp: '2024-01-20 12:15',
    user: 'Sarah Carter',
    action: 'Role Assigned',
    details: "Role 'Admin' assigned to user 'David Lee'",
  },
  {
    timestamp: '2024-01-19 18:45',
    user: 'Michael Chen',
    action: 'Permission Removed',
    details: "Permission 'Edit Settings' removed from role 'Editor'",
  },
  {
    timestamp: '2024-01-19 10:00',
    user: 'Emily Davis',
    action: 'Role Unassigned',
    details: "Role 'Viewer' unassigned from user 'Olivia Moore'",
  },
  {
    timestamp: '2024-01-18 22:30',
    user: 'Ryan Evans',
    action: 'Permission Added',
    details: "Permission 'Create Projects' added to role 'Project Manager'",
  },
  {
    timestamp: '2024-01-18 16:00',
    user: 'Jessica Foster',
    action: 'Role Assigned',
    details: "Role 'Developer' assigned to user 'Ethan Clark'",
  },
  {
    timestamp: '2024-01-17 09:45',
    user: 'Daniel Green',
    action: 'Permission Removed',
    details: "Permission 'Delete Data' removed from role 'Data Entry'",
  },
  {
    timestamp: '2024-01-17 07:15',
    user: 'Ashley Hayes',
    action: 'Role Unassigned',
    details: "Role 'Support' unassigned from user 'Noah Parker'",
  },
  {
    timestamp: '2024-01-16 15:30',
    user: 'Kevin Ingram',
    action: 'Permission Added',
    details: "Permission 'Manage Users' added to role 'HR'",
  },
  {
    timestamp: '2024-01-16 11:00',
    user: 'Lauren Jenkins',
    action: 'Role Assigned',
    details: "Role 'Marketing' assigned to user 'Sophia Reed'",
  },
];

const getActionBadge = (action: string) => {
  switch (action) {
    case 'Permission Added':
      return 'bg-green-900/50 text-green-400';
    case 'Role Assigned':
      return 'bg-blue-900/50 text-blue-400';
    case 'Permission Removed':
      return 'bg-red-900/50 text-red-400';
    case 'Role Unassigned':
      return 'bg-yellow-900/50 text-yellow-400';
    default:
      return 'bg-gray-700 text-gray-300';
  }
};

export default function AuditLogPage() {
  return (
    <div className="px-10 flex flex-1 justify-center py-8">
      <div className="layout-content-container flex flex-col w-full max-w-7xl">
        <div className="flex items-center justify-between p-4">
            <div className="flex flex-col gap-2">
                <h1 className="text-white tracking-tight text-4xl font-bold leading-tight">Audit Log</h1>
                <p className="text-gray-400 text-base font-normal leading-normal">Track changes made to user permissions and roles.</p>
            </div>
            <Button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-md border border-gray-700 bg-gray-800 px-4 text-white transition-colors hover:bg-gray-700">
                <span className="material-symbols-outlined text-xl">download</span>
                <p className="text-sm font-medium leading-normal">Export</p>
            </Button>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <div className="flex items-center gap-4">
            <label className="flex-1">
              <div className="relative flex w-full items-stretch rounded-md h-10">
                <div className="text-gray-400 flex items-center justify-center pl-3">
                  <span className="material-symbols-outlined text-xl">
                    search
                  </span>
                </div>
                <Input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-md text-white focus:outline-0 focus:ring-2 focus:ring-[var(--primary-color)] border-none bg-gray-800 focus:border-none h-full placeholder:text-gray-400 pl-2 pr-4 text-sm font-normal leading-normal"
                  placeholder="Search by user, role, or permission..."
                />
              </div>
            </label>
            <Button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-md bg-gray-800 hover:bg-gray-700 text-white pl-4 pr-2 transition-colors">
              <p className="text-sm font-medium leading-normal">Date Range</p>
              <span className="material-symbols-outlined text-xl text-gray-400">
                arrow_drop_down
              </span>
            </Button>
            <Button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-md bg-gray-800 hover:bg-gray-700 text-white pl-4 pr-2 transition-colors">
              <p className="text-sm font-medium leading-normal">User</p>
              <span className="material-symbols-outlined text-xl text-gray-400">
                arrow_drop_down
              </span>
            </Button>
            <Button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-md bg-gray-800 hover:bg-gray-700 text-white pl-4 pr-2 transition-colors">
              <p className="text-sm font-medium leading-normal">Role</p>
              <span className="material-symbols-outlined text-xl text-gray-400">
                arrow_drop_down
              </span>
            </Button>
          </div>
        </div>
        <div className="px-4 py-3 @container">
          <div className="overflow-hidden rounded-md border border-gray-800 bg-gray-900">
            <Table>
              <TableHeader className="bg-gray-800">
                <TableRow>
                  <TableHead className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                    Timestamp
                  </TableHead>
                  <TableHead className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                    User
                  </TableHead>
                  <TableHead className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                    Action
                  </TableHead>
                  <TableHead className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                    Details
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="divide-y divide-gray-800">
                {auditLogs.map((log, index) => (
                  <TableRow key={index}>
                    <TableCell className="h-16 px-4 py-2 text-sm text-gray-400">
                      {log.timestamp}
                    </TableCell>
                    <TableCell className="h-16 px-4 py-2 text-sm font-medium text-white">
                      {log.user}
                    </TableCell>
                    <TableCell className="h-16 px-4 py-2">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getActionBadge(
                          log.action
                        )}`}
                      >
                        {log.action}
                      </span>
                    </TableCell>
                    <TableCell className="h-16 px-4 py-2 text-sm text-gray-400">
                      {log.details}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
