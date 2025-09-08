
"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { SyncModal } from "./sync-modal";

const activities = [
  { entity: "Sales Invoices", time: "2024-05-21 14:30", status: "Success", records: "42" },
  { entity: "Product Inventory", time: "2024-05-21 14:00", status: "Success", records: "112" },
  { entity: "Customer Contacts", time: "2024-05-21 13:30", status: "Warning", records: "5 (2 duplicates found)" },
  { entity: "Payment Reconciliation", time: "2024-05-21 13:00", status: "Success", records: "35" },
];

export function ActivityTable() {
  const [isSyncModalOpen, setIsSyncModalOpen] = useState(false);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Success":
        return <Badge className="inline-flex items-center gap-1.5 rounded-full bg-green-900/50 px-2 py-1 text-xs font-medium text-green-400"><span className="size-1.5 rounded-full bg-green-400"></span>Success</Badge>;
      case "Warning":
        return <Badge className="inline-flex items-center gap-1.5 rounded-full bg-yellow-900/50 px-2 py-1 text-xs font-medium text-yellow-400"><span className="size-1.5 rounded-full bg-yellow-400"></span>Warning</Badge>;
      case "Failed":
        return <Badge className="inline-flex items-center gap-1.5 rounded-full bg-red-900/50 px-2 py-1 text-xs font-medium text-red-400"><span className="size-1.5 rounded-full bg-red-400"></span>Failed</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <>
      <div className="bg-gray-950 border border-gray-800 rounded-xl">
        <div className="p-6 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-white">Recent Synchronization Activities</h3>
          <Button className="bg-primary-600 hover:bg-primary-700 text-white shadow-sm" onClick={() => setIsSyncModalOpen(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Manual Sync
          </Button>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-gray-800">
                <TableHead className="text-left text-xs font-medium uppercase tracking-wider text-gray-400">Entity</TableHead>
                <TableHead className="text-left text-xs font-medium uppercase tracking-wider text-gray-400">Sync Time</TableHead>
                <TableHead className="text-left text-xs font-medium uppercase tracking-wider text-gray-400">Status</TableHead>
                <TableHead className="text-left text-xs font-medium uppercase tracking-wider text-gray-400">Records Affected</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-800">
              {activities.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="whitespace-nowrap text-sm text-gray-300">{item.entity}</TableCell>
                  <TableCell className="whitespace-nowrap text-sm text-gray-300">{item.time}</TableCell>
                  <TableCell className="whitespace-nowrap text-sm">{getStatusBadge(item.status)}</TableCell>
                  <TableCell className={`whitespace-nowrap text-sm ${item.status === 'Failed' ? 'text-red-400 hover:underline cursor-pointer' : 'text-gray-300'}`}>{item.records}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <SyncModal isOpen={isSyncModalOpen} onOpenChange={setIsSyncModalOpen} />
    </>
  );
}
