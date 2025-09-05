
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
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, UserPlus, Pencil, Trash2, Download, Save } from 'lucide-react';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';

const users = [
  {
    name: 'Ethan Harper',
    email: 'ethan.harper@example.com',
    role: 'Admin',
    status: 'Active',
  },
  {
    name: 'Olivia Bennett',
    email: 'olivia.bennett@example.com',
    role: 'Manager',
    status: 'Active',
  },
  {
    name: 'Noah Carter',
    email: 'noah.carter@example.com',
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
    name: 'Liam Foster',
    email: 'liam.foster@example.com',
    role: 'Manager',
    status: 'Active',
  },
];

const activityLogs = [
  {
    timestamp: '2023-10-27 10:15:32',
    user: 'Ethan Harper',
    action: 'User Login',
    details: 'Logged in from IP 192.168.1.1',
  },
  {
    timestamp: '2023-10-27 09:45:11',
    user: 'Olivia Bennett',
    action: 'Product Updated',
    details: 'Updated product SKU #12345',
  },
  {
    timestamp: '2023-10-27 09:30:05',
    user: 'Ava Morgan',
    action: 'Order Created',
    details: 'Created new order #9876',
  },
  {
    timestamp: '2023-10-26 18:05:20',
    user: 'Liam Foster',
    action: 'Settings Changed',
    details: 'Updated Xero integration settings',
  },
  {
    timestamp: '2023-10-26 17:50:45',
    user: 'Ethan Harper',
    action: 'User Logout',
    details: 'Logged out',
  },
];

const auditLogs = [
    {
      timestamp: '2023-10-27 11:05:17',
      user: 'Ethan Harper',
      action: 'Setting Changed',
      details: 'Enabled "New user added" alert',
    },
    {
      timestamp: '2023-10-26 18:05:20',
      user: 'Liam Foster',
      action: 'Setting Changed',
      details: 'Disabled "In-App Notifications"',
    },
    {
      timestamp: '2023-10-26 14:22:01',
      user: 'Ethan Harper',
      action: 'Setting Changed',
      details: 'Changed Admin Email Address to "admin@newdomain.com"',
    },
    {
      timestamp: '2023-10-25 09:12:45',
      user: 'Olivia Bennett',
      action: 'Setting Changed',
      details: 'Enabled "Permission changes" alert',
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
    case 'Inactive':
      return (
        <Badge className="inline-flex items-center gap-1.5 border-transparent bg-red-900 px-2 py-1 text-xs font-medium text-red-300">
          <span className="size-1.5 rounded-full bg-red-500"></span>
          Inactive
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

const getActionBadge = (action: string) => {
  switch (action) {
    case 'User Login':
      return <Badge className="bg-green-900 px-2 py-1 text-xs font-medium text-green-300">{action}</Badge>
    case 'Product Updated':
        return <Badge className="bg-yellow-900 px-2 py-1 text-xs font-medium text-yellow-300">{action}</Badge>
    case 'Order Created':
        return <Badge className="bg-blue-900 px-2 py-1 text-xs font-medium text-blue-300">{action}</Badge>
    case 'Settings Changed':
        return <Badge className="bg-purple-900/80 px-2 py-1 text-xs font-medium text-purple-300">{action}</Badge>
    case 'User Logout':
        return <Badge className="bg-red-900 px-2 py-1 text-xs font-medium text-red-300">{action}</Badge>
    default:
      return <Badge variant="secondary">{action}</Badge>
  }
}

const getAuditActionBadge = (action: string) => {
    switch (action) {
      case 'Setting Changed':
        return <Badge className="bg-indigo-900 px-2 py-1 text-xs font-medium text-indigo-300">{action}</Badge>
      default:
        return <Badge variant="secondary">{action}</Badge>
    }
  }

export function UserManagement() {
  return (
    <main className="flex-1 p-6 bg-gray-900">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Users</h1>
        <Button>
          <UserPlus className="mr-2" />
          Add User
        </Button>
      </div>
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            className="w-full rounded-md border-gray-700 bg-gray-800 pl-10 text-white placeholder:text-muted-foreground"
            placeholder="Search users"
            type="text"
          />
        </div>
      </div>
      <div className="overflow-x-auto rounded-md border border-gray-800 bg-transparent">
        <Table>
          <TableHeader className="bg-gray-800 text-xs uppercase tracking-wider">
            <TableRow className="border-gray-800">
              <TableHead className="px-6 py-3">Name</TableHead>
              <TableHead className="px-6 py-3">Email</TableHead>
              <TableHead className="px-6 py-3">Role</TableHead>
              <TableHead className="px-6 py-3">Status</TableHead>
              <TableHead className="px-6 py-3 text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-gray-800">
            {users.map((user, index) => (
              <TableRow key={index} className="hover:bg-gray-800 transition-colors border-gray-800">
                <TableCell className="whitespace-nowrap px-6 py-4 font-medium text-white">
                  {user.name}
                </TableCell>
                <TableCell className="px-6 py-4 text-muted-foreground">
                  {user.email}
                </TableCell>
                <TableCell className="px-6 py-4">
                  {getRoleBadge(user.role)}
                </TableCell>
                <TableCell className="px-6 py-4">
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

      <div className="mt-8">
        <h2 className="text-white text-2xl font-bold mb-4">Admin Notification Settings</h2>
        <div className="p-6 rounded-md border border-gray-800 bg-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Alertable Actions</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="failed-login">Failed login attempts</Label>
                            <Switch id="failed-login" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                            <Label htmlFor="permission-changes">Permission changes</Label>
                            <Switch id="permission-changes" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                            <Label htmlFor="user-added">New user added</Label>
                            <Switch id="user-added" />
                        </div>
                        <div className="flex items-center justify-between">
                            <Label htmlFor="user-removed">User removed</Label>
                            <Switch id="user-removed" defaultChecked />
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Notification Methods</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="email-notifications">Email Notifications</Label>
                            <Switch id="email-notifications" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                            <Label htmlFor="inapp-notifications">In-App Notifications</Label>
                            <Switch id="inapp-notifications" defaultChecked />
                        </div>
                    </div>
                    <div className="mt-6">
                        <Label htmlFor="admin-email" className="block text-sm font-medium mb-2">Admin Email Address</Label>
                        <Input id="admin-email" placeholder="admin@example.com" type="email" className="bg-gray-900" />
                    </div>
                </div>
            </div>
            <div className="mt-8 flex justify-end">
                <Button>
                    <Save />
                    Save Settings
                </Button>
            </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-white text-2xl font-bold mb-4">Notification Settings Audit Trail</h2>
        <div className="overflow-x-auto rounded-md border border-gray-800 bg-transparent">
          <Table>
            <TableHeader className="bg-gray-800 text-xs uppercase tracking-wider">
              <TableRow className="border-gray-800">
                <TableHead className="px-6 py-3">Timestamp</TableHead>
                <TableHead className="px-6 py-3">User</TableHead>
                <TableHead className="px-6 py-3">Action</TableHead>
                <TableHead className="px-6 py-3">Change Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-800">
              {auditLogs.map((log, index) => (
                <TableRow key={index} className="hover:bg-gray-800 border-gray-800">
                  <TableCell className="whitespace-nowrap px-6 py-4 text-muted-foreground">
                    {log.timestamp}
                  </TableCell>
                  <TableCell className="px-6 py-4 font-medium text-white whitespace-nowrap">
                    {log.user}
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    {getAuditActionBadge(log.action)}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-muted-foreground">
                    {log.details}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <h2 className="text-white text-2xl font-bold">User Activity Log</h2>
            <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
                <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        className="w-full md:w-auto rounded-md border-gray-700 bg-gray-800 pl-10 text-white placeholder:text-muted-foreground"
                        placeholder="Search logs"
                        type="text"
                    />
                </div>
                <Select>
                    <SelectTrigger className="w-full md:w-auto rounded-md border-gray-700 bg-gray-800 text-white">
                        <SelectValue placeholder="Filter by action" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Actions</SelectItem>
                        <SelectItem value="login">User Login</SelectItem>
                        <SelectItem value="logout">User Logout</SelectItem>
                        <SelectItem value="order-created">Order Created</SelectItem>
                        <SelectItem value="product-updated">Product Updated</SelectItem>
                        <SelectItem value="settings-changed">Settings Changed</SelectItem>
                    </SelectContent>
                </Select>
                <Button variant="outline" className="bg-gray-700 border-gray-700">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
            </div>
        </div>
        <div className="overflow-x-auto rounded-md border border-gray-800 bg-transparent">
          <Table>
            <TableHeader className="bg-gray-800 text-xs uppercase tracking-wider">
              <TableRow className="border-gray-800">
                <TableHead className="px-6 py-3">Timestamp</TableHead>
                <TableHead className="px-6 py-3">User</TableHead>
                <TableHead className="px-6 py-3">Action</TableHead>
                <TableHead className="px-6 py-3">Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-800">
              {activityLogs.map((log, index) => (
                <TableRow key={index} className="hover:bg-gray-800 border-gray-800">
                  <TableCell className="whitespace-nowrap px-6 py-4 text-muted-foreground">
                    {log.timestamp}
                  </TableCell>
                  <TableCell className="px-6 py-4 font-medium text-white whitespace-nowrap">
                    {log.user}
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    {getActionBadge(log.action)}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-muted-foreground">
                    {log.details}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
}
