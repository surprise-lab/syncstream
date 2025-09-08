

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
import { Search, UserPlus, Pencil, Trash2, Check, X, MoreVertical, ShieldCheck, ShieldX, KeyRound, Save, LogOut } from 'lucide-react';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from 'next/link';


const users = [
  {
    name: 'Ethan Harper',
    email: 'ethan.harper@example.com',
    role: 'Admin',
    lastLogin: '2023-10-27 10:15:32',
    status: 'Active',
    mfa: true,
  },
  {
    name: 'Olivia Bennett',
    email: 'olivia.bennett@example.com',
    role: 'Manager',
    lastLogin: '2023-10-27 09:45:11',
    status: 'Active',
    mfa: true,
  },
  {
    name: 'Noah Carter',
    email: 'noah.carter@example.com',
    role: 'User',
    lastLogin: '2023-10-25 14:22:01',
    status: 'Pending',
    mfa: false,
  },
  {
    name: 'Ava Morgan',
    email: 'ava.morgan@example.com',
    role: 'User',
    lastLogin: '2023-10-27 09:30:05',
    status: 'Active',
    mfa: false,
  },
  {
    name: 'Liam Foster',
    email: 'liam.foster@example.com',
    role: 'Manager',
    lastLogin: '2023-10-26 18:05:20',
    status: 'Suspended',
    mfa: true,
  },
];

const sessions = [
  {
    ipAddress: '192.168.1.10',
    device: 'Chrome on macOS',
    location: 'New York, USA',
    lastAccessed: '2 minutes ago',
  },
  {
    ipAddress: '10.0.0.5',
    device: 'Mobile App on iOS',
    location: 'London, UK',
    lastAccessed: '1 hour ago',
  },
    {
    ipAddress: '172.16.0.23',
    device: 'Firefox on Windows',
    location: 'Sydney, AU',
    lastAccessed: '3 days ago',
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

const getMfaBadge = (mfa: boolean) => {
    if (mfa) {
        return (
            <Badge className="inline-flex items-center gap-1.5 border-transparent bg-green-900 px-2 py-1 text-xs font-medium text-green-300">
                <ShieldCheck className="size-3.5" />
                Enabled
            </Badge>
        );
    }
    return (
        <Badge className="inline-flex items-center gap-1.5 border-transparent bg-red-900 px-2 py-1 text-xs font-medium text-red-300">
            <ShieldX className="size-3.5" />
            Disabled
        </Badge>
    );
}

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
              <TableHead className="px-6 py-3 text-center">MFA</TableHead>
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
                  {getMfaBadge(user.mfa)}
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
          <Button asChild variant="outline" size="sm">
            <Link href="#">2</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href="#">3</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href="#">4</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href="#">Next</Link>
          </Button>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">Multi-Factor Authentication (MFA)</h2>
          <div className="p-6 rounded-lg border border-gray-800 bg-gray-800/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">MFA Policy</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="mfa-enforce" className="text-gray-300">Enforce for all users</Label>
                      <Switch id="mfa-enforce" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="mfa-user-choice" className="text-gray-300">User configurable</Label>
                      <Switch id="mfa-user-choice" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Allowed Methods</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="mfa-app" className="text-gray-300">Authenticator App</Label>
                      <Switch id="mfa-app" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="mfa-sms" className="text-gray-300">SMS Text Message</Label>
                      <Switch id="mfa-sms" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="mfa-email" className="text-gray-300">Email Code</Label>
                      <Switch id="mfa-email" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Save className="mr-2 h-4 w-4"/>
                  Save MFA Settings
                </Button>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-white text-2xl font-bold mb-4">Admin Notifications</h2>
            <div className="p-6 rounded-lg border border-gray-800 bg-gray-800/50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Alertable Actions</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="failed-login" className="text-gray-300">Failed login attempts</Label>
                        <Switch id="failed-login" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="permission-changes" className="text-gray-300">Permission changes</Label>
                        <Switch id="permission-changes" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="user-added" className="text-gray-300">New user added</Label>
                        <Switch id="user-added" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="user-removed" className="text-gray-300">User removed</Label>
                        <Switch id="user-removed" defaultChecked />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Notification Methods</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="email-notifications" className="text-gray-300">Email</Label>
                        <Switch id="email-notifications" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="inapp-notifications" className="text-gray-300">In-App</Label>
                        <Switch id="inapp-notifications" defaultChecked />
                      </div>
                    </div>
                    <div className="mt-6">
                      <Label htmlFor="admin-email" className="block text-sm font-medium text-gray-300 mb-2">Admin Email</Label>
                      <Input id="admin-email" placeholder="admin@example.com" type="email" className="bg-gray-900 border-gray-700"/>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        <Save className="mr-2 h-4 w-4"/>
                        Save Notifications
                    </Button>
                </div>
            </div>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-white text-2xl font-bold mb-4">Session Management</h2>
        <div className="overflow-x-auto rounded-lg border border-gray-800">
            <Table>
                <TableHeader className="bg-gray-800 text-xs uppercase tracking-wider">
                    <TableRow className="border-gray-800">
                        <TableHead className="px-6 py-3">IP Address</TableHead>
                        <TableHead className="px-6 py-3">Device / Browser</TableHead>
                        <TableHead className="px-6 py-3">Location</TableHead>
                        <TableHead className="px-6 py-3">Last Accessed</TableHead>
                        <TableHead className="px-6 py-3 text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="divide-y divide-gray-800 bg-gray-800/50">
                    {sessions.map((session, index) => (
                        <TableRow key={index} className="hover:bg-gray-800 transition-colors">
                            <TableCell className="px-6 py-4 text-muted-foreground font-mono">{session.ipAddress}</TableCell>
                            <TableCell className="px-6 py-4 text-muted-foreground">{session.device}</TableCell>
                            <TableCell className="px-6 py-4 text-muted-foreground">{session.location}</TableCell>
                            <TableCell className="px-6 py-4 text-muted-foreground">{session.lastAccessed}</TableCell>
                            <TableCell className="px-6 py-4 text-right">
                                <Button variant="destructive" size="sm">
                                    <LogOut className="mr-2 h-4 w-4" />
                                    Revoke
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
      </div>

       <div className="mt-10">
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-white text-2xl font-bold">Audit Trail</h2>
             <div className="flex items-center gap-4">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <Input
                        className="w-full rounded-md border-gray-700 bg-gray-800 pl-10 text-white placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500"
                        placeholder="Search logs..."
                        type="text"
                    />
                </div>
                <Select>
                    <SelectTrigger className="w-[180px] bg-gray-800 border-gray-700">
                        <SelectValue placeholder="Filter by action" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="login">User Login</SelectItem>
                        <SelectItem value="logout">User Logout</SelectItem>
                        <SelectItem value="update">Product Updated</SelectItem>
                        <SelectItem value="create">Order Created</SelectItem>
                    </SelectContent>
                </Select>
                 <Button variant="outline">Export</Button>
            </div>
        </div>
        <div className="overflow-x-auto rounded-lg border border-gray-800">
            <Table>
                <TableHeader className="bg-gray-800 text-xs uppercase tracking-wider">
                    <TableRow className="border-gray-800">
                        <TableHead className="px-6 py-3">Timestamp</TableHead>
                        <TableHead className="px-6 py-3">User</TableHead>
                        <TableHead className="px-6 py-3">Action</TableHead>
                        <TableHead className="px-6 py-3">Details</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="divide-y divide-gray-800 bg-gray-800/50">
                    {auditLogs.map((log, index) => (
                        <TableRow key={index} className="hover:bg-gray-800 transition-colors">
                            <TableCell className="px-6 py-4 text-muted-foreground">{log.timestamp}</TableCell>
                            <TableCell className="px-6 py-4 text-white font-medium">{log.user}</TableCell>
                            <TableCell className="px-6 py-4"><Badge variant="secondary">{log.action}</Badge></TableCell>
                            <TableCell className="px-6 py-4 text-muted-foreground">{log.details}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
      </div>
    </main>
  );
}
