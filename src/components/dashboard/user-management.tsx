
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
import { Search, UserPlus, Pencil, Trash2 } from 'lucide-react';

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

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'Active':
      return (
        <Badge className="inline-flex items-center gap-1.5 border-transparent bg-green-900 text-green-300 hover:bg-green-900/80">
          <span className="size-1.5 rounded-full bg-green-500"></span>
          Active
        </Badge>
      );
    case 'Inactive':
      return (
        <Badge className="inline-flex items-center gap-1.5 border-transparent bg-red-900 text-red-300 hover:bg-red-900/80">
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
        <Badge className="border-transparent bg-blue-900 text-blue-300 hover:bg-blue-900/80">
          Admin
        </Badge>
      );
    case 'Manager':
      return (
        <Badge className="border-transparent bg-purple-900 text-purple-300 hover:bg-purple-900/80">
          Manager
        </Badge>
      );
    case 'User':
      return (
        <Badge className="border-transparent bg-slate-700 text-slate-300 hover:bg-slate-700/80">
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
      return <Badge className="bg-green-900 text-green-300">{action}</Badge>
    case 'Product Updated':
        return <Badge className="bg-yellow-900 text-yellow-300">{action}</Badge>
    case 'Order Created':
        return <Badge className="bg-blue-900 text-blue-300">{action}</Badge>
    case 'Settings Changed':
        return <Badge className="bg-purple-900 text-purple-300">{action}</Badge>
    case 'User Logout':
        return <Badge className="bg-red-900 text-red-300">{action}</Badge>
    default:
      return <Badge variant="secondary">{action}</Badge>
  }
}

export function UserManagement() {
  return (
    <main className="flex-1 p-6">
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
            className="w-full rounded-md border-border bg-card pl-10 text-white placeholder:text-muted-foreground"
            placeholder="Search users"
            type="text"
          />
        </div>
      </div>
      <div className="overflow-x-auto rounded-md border border-border bg-card">
        <Table>
          <TableHeader className="bg-muted/30 text-xs uppercase tracking-wider">
            <TableRow>
              <TableHead className="px-6 py-3">Name</TableHead>
              <TableHead className="px-6 py-3">Email</TableHead>
              <TableHead className="px-6 py-3">Role</TableHead>
              <TableHead className="px-6 py-3">Status</TableHead>
              <TableHead className="px-6 py-3 text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-border">
            {users.map((user, index) => (
              <TableRow key={index} className="hover:bg-muted/30">
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
        <h2 className="text-white text-2xl font-bold mb-4">User Activity Log</h2>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              className="w-full rounded-md border-border bg-card pl-10 text-white placeholder:text-muted-foreground"
              placeholder="Search logs by user or action"
              type="text"
            />
          </div>
          <div className="flex gap-4">
            <Select>
              <SelectTrigger className="w-full md:w-auto rounded-md border-border bg-card text-white">
                <SelectValue placeholder="Filter by user" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Users</SelectItem>
                {users.map(user => <SelectItem key={user.email} value={user.name}>{user.name}</SelectItem>)}
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-auto rounded-md border-border bg-card text-white">
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
          </div>
        </div>
        <div className="overflow-x-auto rounded-md border border-border bg-card">
          <Table>
            <TableHeader className="bg-muted/30 text-xs uppercase tracking-wider">
              <TableRow>
                <TableHead className="px-6 py-3">Timestamp</TableHead>
                <TableHead className="px-6 py-3">User</TableHead>
                <TableHead className="px-6 py-3">Action</TableHead>
                <TableHead className="px-6 py-3">Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-border">
              {activityLogs.map((log, index) => (
                <TableRow key={index} className="hover:bg-muted/30">
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
