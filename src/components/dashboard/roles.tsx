
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
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, History, Copy, Calendar as CalendarIcon, Search } from 'lucide-react';
import * as React from 'react';
import { DateRange } from 'react-day-picker';
import { addDays, format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '../ui/input';

export function Roles() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    to: new Date(),
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
                  <TableCell className="p-4 text-right">
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
                  <TableCell className="p-4 text-right">
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
                  <TableCell className="p-4 text-right">
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
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-white text-2xl font-bold">Audit Trail</h2>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Filter by user..." className="pl-9 bg-card border-border h-9" />
              </div>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="date"
                    variant={'outline'}
                    className={cn(
                      'w-[260px] justify-start text-left font-normal bg-card border-border hover:bg-accent h-9',
                      !date && 'text-muted-foreground'
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date?.from ? (
                      date.to ? (
                        <>
                          {format(date.from, 'LLL dd, y')} -{' '}
                          {format(date.to, 'LLL dd, y')}
                        </>
                      ) : (
                        format(date.from, 'LLL dd, y')
                      )
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="end">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={date?.from}
                    selected={date}
                    onSelect={setDate}
                    numberOfMonths={2}
                  />
                </PopoverContent>
              </Popover>

              <Button variant="outline">Export</Button>
            </div>
          </div>
          <div className="space-y-4 font-code">
            <div className="flex flex-col gap-4 rounded-md border border-[#3d5245] bg-[#1a231e] p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-white font-medium">
                    John Doe
                  </span>
                  <Badge className="inline-flex items-center rounded-md bg-gray-700 px-2 py-1 text-xs font-medium text-gray-300 ring-1 ring-inset ring-gray-600/50">
                    ROLE UPDATED
                  </Badge>
                </div>
                <span className="text-sm text-[#9eb7a8]">
                  Oct 26, 2023, 3:45 PM
                </span>
              </div>
              <p className="text-sm text-[#9eb7a8]">
                Changed 'Viewer' role permissions: Added 'Export Data'
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-md border border-[#3d5245] bg-[#1a231e] p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-white font-medium">
                    Jane Smith
                  </span>
                  <Badge className="inline-flex items-center rounded-md bg-gray-700 px-2 py-1 text-xs font-medium text-gray-300 ring-1 ring-inset ring-gray-600/50">
                    ROLE CREATED
                  </Badge>
                </div>
                <span className="text-sm text-[#9eb7a8]">
                  Oct 25, 2023, 10:12 AM
                </span>
              </div>
              <p className="text-sm text-[#9eb7a8]">
                Created new role: 'Accountant'
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-md border border-[#3d5245] bg-[#1a231e] p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-white font-medium">
                    John Doe
                  </span>
                  <Badge className="inline-flex items-center rounded-md bg-gray-700 px-2 py-1 text-xs font-medium text-gray-300 ring-1 ring-inset ring-gray-600/50">
                    ROLE DELETED
                  </Badge>
                </div>
                <span className="text-sm text-[#9eb7a8]">
                  Oct 24, 2023, 5:20 PM
                </span>
              </div>
              <p className="text-sm text-[#9eb7a8]">
                Deleted role: 'Temporary Staff'
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-md border border-[#3d5245] bg-[#1a231e] p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-white font-medium">Admin</span>
                  <Badge className="inline-flex items-center rounded-md bg-gray-700 px-2 py-1 text-xs font-medium text-gray-300 ring-1 ring-inset ring-gray-600/50">
                    PERMISSION ADDED
                  </Badge>
                </div>
                <span className="text-sm text-[#9eb7a8]">
                  Oct 23, 2023, 9:00 AM
                </span>
              </div>
              <p className="text-sm text-[#9eb7a8]">
                Added 'Manage Users' permission to 'Manager' role
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
