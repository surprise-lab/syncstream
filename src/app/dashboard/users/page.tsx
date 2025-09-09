
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

const members = [
    {
        name: 'Sophia Carter',
        email: 'sophia.carter@example.com',
        role: 'Member',
        status: 'Active',
    },
    {
        name: 'Ethan Bennett',
        email: 'ethan.bennett@example.com',
        role: 'Member',
        status: 'Active',
    },
    {
        name: 'Olivia Hayes',
        email: 'olivia.hayes@example.com',
        role: 'Member',
        status: 'Inactive',
    },
];

const getStatusBadge = (status: string) => {
    switch (status) {
        case 'Active':
            return (
                <span className="inline-flex items-center rounded-full bg-green-500/20 px-2.5 py-0.5 text-xs font-medium text-green-400">
                    <svg className="mr-1.5 h-2 w-2 text-green-400" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3"></circle>
                    </svg>
                    Active
                </span>
            );
        case 'Inactive':
            return (
                <span className="inline-flex items-center rounded-full bg-red-500/20 px-2.5 py-0.5 text-xs font-medium text-red-400">
                    <svg className="mr-1.5 h-2 w-2 text-red-400" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3"></circle>
                    </svg>
                    Inactive
                </span>
            );
        default:
            return null;
    }
};

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
                        <span>All Groups</span>
                        <span className="rounded-full bg-[#324d67] px-2 text-xs">12</span>
                    </a>
                    <a className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-[#92adc9] hover:bg-[#233648]" href="#">
                        <span>Marketing</span>
                        <span className="rounded-full bg-[#324d67] px-2 text-xs">3</span>
                    </a>
                    <a className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-[#92adc9] hover:bg-[#233648]" href="#">
                        <span>Sales</span>
                        <span className="rounded-full bg-[#324d67] px-2 text-xs">4</span>
                    </a>
                    <a className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-[#92adc9] hover:bg-[#233648]" href="#">
                        <span>Engineering</span>
                        <span className="rounded-full bg-[#324d67] px-2 text-xs">5</span>
                    </a>
                </nav>
            </aside>
            <main className="flex-1 p-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-3xl font-bold text-white">Marketing</h2>
                    <Button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-9 px-3 bg-[#1172d4] text-white text-sm font-bold leading-normal tracking-[0.015em] gap-2">
                        <span className="material-symbols-outlined">add</span>
                        <span className="truncate">Add Member</span>
                    </Button>
                </div>
                <div className="border-b border-[#324d67]">
                    <nav className="-mb-px flex space-x-8">
                        <a className="whitespace-nowrap border-b-2 border-[#1172d4] px-1 py-4 text-sm font-medium text-white" href="#">Members</a>
                        <a className="whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm font-medium text-[#92adc9] hover:border-gray-300 hover:text-white" href="#">Permissions</a>
                    </nav>
                </div>
                <div className="mt-6">
                    <div className="overflow-hidden rounded-md border border-[#324d67] bg-[#192633]">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="px-4 py-3.5 text-left text-sm font-semibold text-white">Name</TableHead>
                                    <TableHead className="px-3 py-3.5 text-left text-sm font-semibold text-white">Email</TableHead>
                                    <TableHead className="px-3 py-3.5 text-left text-sm font-semibold text-white">Role</TableHead>
                                    <TableHead className="px-3 py-3.5 text-left text-sm font-semibold text-white">Status</TableHead>
                                    <TableHead className="relative py-3.5 pl-3 pr-4">
                                        <span className="sr-only">Edit</span>
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody className="divide-y divide-[#324d67] bg-[#111a22]">
                                {members.map((member, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white">{member.name}</TableCell>
                                        <TableCell className="whitespace-nowrap px-3 py-4 text-sm text-[#92adc9]">{member.email}</TableCell>
                                        <TableCell className="whitespace-nowrap px-3 py-4 text-sm text-[#92adc9]">{member.role}</TableCell>
                                        <TableCell className="whitespace-nowrap px-3 py-4 text-sm">{getStatusBadge(member.status)}</TableCell>
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
