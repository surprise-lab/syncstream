
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
import { Plus, Play, Edit, Trash2 } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

const rulesData = [
  {
    name: 'Lowercase Emails',
    description: 'Transforms email addresses to lowercase.',
    status: 'Active',
  },
  {
    name: 'Concatenate Names',
    description: 'Concatenates first and last names into a single "Full Name" field.',
    status: 'Inactive',
  },
  {
    name: 'Format Phone Numbers',
    description: 'Formats phone numbers to the E.164 standard.',
    status: 'Active',
  },
  {
    name: 'Standardize Dates',
    description: 'Converts all date formats to ISO 8601.',
    status: 'Draft',
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'Active':
      return (
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-900 text-green-300">
          Active
        </Badge>
      );
    case 'Inactive':
      return (
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-700 text-gray-300">
          Inactive
        </Badge>
      );
    case 'Draft':
        return (
            <Badge className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-900 text-yellow-300">
                Draft
            </Badge>
        )
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

export default function RulesPage() {
  return (
    <main className="flex-1 p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-white text-3xl font-bold">
            Data Transformation Rules
          </h2>
          <p className="text-gray-400 mt-1">
            Define, edit, and apply rules for how data is modified during
            synchronization.
          </p>
        </div>
        <Button asChild className="flex items-center gap-2 min-w-[84px] cursor-pointer justify-center rounded-md h-10 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold leading-normal tracking-wide transition-colors">
            <Link href="/dashboard/rules/builder">
                <Plus className="h-4 w-4" />
                <span className="truncate">Create Rule</span>
            </Link>
        </Button>
      </div>
      <div className="bg-[#18232F] rounded-lg overflow-hidden border border-gray-700">
        <div className="overflow-x-auto">
          <Table className="w-full text-left">
            <TableHeader className="bg-[#233648]">
              <TableRow>
                <TableHead className="p-4 text-white text-sm font-semibold uppercase tracking-wider">
                  Rule Name
                </TableHead>
                <TableHead className="p-4 text-white text-sm font-semibold uppercase tracking-wider">
                  Description
                </TableHead>
                <TableHead className="p-4 text-white text-sm font-semibold uppercase tracking-wider text-center">
                  Status
                </TableHead>
                <TableHead className="p-4 text-white text-sm font-semibold uppercase tracking-wider text-center">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-700">
              {rulesData.map((rule, index) => (
                <TableRow key={index}>
                  <TableCell className="p-4 text-white font-medium">
                    {rule.name}
                  </TableCell>
                  <TableCell className="p-4 text-gray-400">
                    {rule.description}
                  </TableCell>
                  <TableCell className="p-4 text-center">
                    {getStatusBadge(rule.status)}
                  </TableCell>
                  <TableCell className="p-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Button variant="ghost" size="icon" className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-md transition-colors">
                        <Play className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-md transition-colors">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="p-2 text-red-500 hover:text-white hover:bg-red-600 rounded-md transition-colors">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </tr>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
}
