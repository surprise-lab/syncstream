
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

const groups = [
    {
        name: 'Marketing',
        members: '3 Members',
        permissions: ['Read-Only', 'Comment'],
    },
    {
        name: 'Sales',
        members: '4 Members',
        permissions: ['Full Access'],
    },
    {
        name: 'Engineering',
        members: '5 Members',
        permissions: ['Full Access', 'Admin'],
    },
];

const getPermissionBadge = (permission: string) => {
    switch (permission) {
        case 'Read-Only':
            return 'bg-blue-500/20 text-blue-400';
        case 'Comment':
            return 'bg-yellow-500/20 text-yellow-400';
        case 'Full Access':
            return 'bg-green-500/20 text-green-400';
        case 'Admin':
            return 'bg-purple-500/20 text-purple-400';
        default:
            return 'bg-gray-500/20 text-gray-400';
    }
}

export default function UsersPage() {
    return (
        <div className="flex flex-1">
            <aside className="flex flex-col w-80 bg-[#192633] p-4 border-r border-[#324d67]">
                <div className="flex items-center justify-between pb-4">
                    <h1 className="text-2xl font-bold text-white">Groups</h1>
                    <Button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-9 px-3 bg-[#1172d4] text-white text-sm font-bold leading-normal tracking-[0.015em] gap-2">
                        <span className="material-symbols-outlined">add</span>
                        <span className="truncate">New Group</span>
                    </Button>
                </div>
                <div className="relative mb-4">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="material-symbols-outlined text-[#92adc9]">search</span>
                    </div>
                    <Input className="form-input w-full rounded-md border-none bg-[#233648] py-2 pl-10 pr-4 text-white placeholder:text-[#92adc9] focus:outline-none focus:ring-2 focus:ring-[#1172d4]" placeholder="Search groups" type="text" />
                </div>
                <nav className="flex-1 space-y-1">
                    <a className="flex items-center justify-between rounded-md bg-[#233648] px-3 py-2 text-sm font-medium text-white" href="#">
                        <span className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-[#92adc9]">group</span>
                            <span>All Groups</span>
                        </span>
                        <span className="rounded-full bg-[#324d67] px-2 text-xs">12</span>
                    </a>
                    <a className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-[#92adc9] hover:bg-[#233648]" href="#">
                        <span className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-[#92adc9]">group</span>
                            <span>Marketing</span>
                        </span>
                        <span className="rounded-full bg-[#324d67] px-2 text-xs">3</span>
                    </a>
                    <a className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-[#92adc9] hover:bg-[#233648]" href="#">
                        <span className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-[#92adc9]">group</span>
                            <span>Sales</span>
                        </span>
                        <span className="rounded-full bg-[#324d67] px-2 text-xs">4</span>
                    </a>
                    <a className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-[#92adc9] hover:bg-[#233648]" href="#">
                        <span className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-[#92adc9]">group</span>
                            <span>Engineering</span>
                        </span>
                        <span className="rounded-full bg-[#324d67] px-2 text-xs">5</span>
                    </a>
                </nav>
            </aside>
            <main className="flex-1 p-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-3xl font-bold">All Groups</h2>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-9 px-3 bg-[#1172d4] text-white text-sm font-bold leading-normal tracking-[0.015em] gap-2">
                        <span className="material-symbols-outlined">add</span>
                        <span className="truncate">New Group</span>
                    </button>
                </div>
                <div className="mt-6">
                    <div className="flex items-center justify-between mb-4 gap-4">
                        <div className="relative w-full max-w-xs">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <span className="material-symbols-outlined text-[#92adc9]">search</span>
                            </div>
                            <input className="form-input w-full rounded-md border-none bg-[#192633] py-2 pl-10 pr-4 text-white placeholder:text-[#92adc9] focus:outline-none focus:ring-2 focus:ring-[#1172d4]" placeholder="Search groups" type="text" />
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="flex items-center gap-2 rounded-md bg-[#192633] px-4 py-2 text-sm font-medium text-white hover:bg-[#233648]">
                                <span className="material-symbols-outlined text-[#92adc9]">filter_list</span>
                                <span>Filter</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="@container">
                    <div className="overflow-hidden rounded-md border border-[#324d67] bg-[#192633]">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="px-4 py-3.5 text-left text-sm font-semibold text-white">Group Name</TableHead>
                                    <TableHead className="px-3 py-3.5 text-left text-sm font-semibold text-white">Members</TableHead>
                                    <TableHead className="px-3 py-3.5 text-left text-sm font-semibold text-white">Permissions Summary</TableHead>
                                    <TableHead className="relative py-3.5 pl-3 pr-4">
                                        <span className="sr-only">Edit</span>
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody className="divide-y divide-[#324d67] bg-[#111a22]">
                                {groups.map((group, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white">{group.name}</TableCell>
                                        <TableCell className="whitespace-nowrap px-3 py-4 text-sm text-[#92adc9]">{group.members}</TableCell>
                                        <TableCell className="whitespace-nowrap px-3 py-4 text-sm text-[#92adc9]">
                                            <div className="flex items-center gap-2">
                                                {group.permissions.map(p => (
                                                    <span key={p} className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getPermissionBadge(p)}`}>
                                                        {p}
                                                    </span>
                                                ))}
                                            </div>
                                        </TableCell>
                                        <TableCell className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium">
                                            <button className="text-[#92adc9] hover:text-white">
                                                <span className="material-symbols-outlined">more_vert</span>
                                            </button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </main>
        </div>
    );
}
