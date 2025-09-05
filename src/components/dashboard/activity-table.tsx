import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const activities = [
  { date: "2024-03-15 10:00 AM", activity: "Sales Orders Synced", status: "Success", details: "15 orders synced" },
  { date: "2024-03-15 09:00 AM", activity: "Inventory Updated", status: "Success", details: "All products updated" },
  { date: "2024-03-14 05:00 PM", activity: "Payment Records Synced", status: "Success", details: "20 payments synced" },
  { date: "2024-03-14 01:00 PM", activity: "Customer Data Synced", status: "Warning", details: "10 new customers, 2 duplicates" },
  { date: "2024-03-13 11:00 AM", activity: "Initial Setup", status: "Error", details: "Connection failed" },
];

export function ActivityTable() {

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Success":
        return <Badge className="border-transparent bg-green-900/50 text-green-400 hover:bg-green-900/60">Success</Badge>;
      case "Warning":
        return <Badge className="border-transparent bg-yellow-900/50 text-yellow-400 hover:bg-yellow-900/60">Warning</Badge>;
      case "Error":
        return <Badge className="border-transparent bg-red-900/50 text-red-400 hover:bg-red-900/60">Error</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-card">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-white/5">
            <TableRow>
              <TableHead className="uppercase">Date</TableHead>
              <TableHead className="uppercase">Activity</TableHead>
              <TableHead className="uppercase">Status</TableHead>
              <TableHead className="uppercase">Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activities.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="whitespace-nowrap text-muted-foreground">{item.date}</TableCell>
                <TableCell className="whitespace-nowrap">{item.activity}</TableCell>
                <TableCell className="whitespace-nowrap">{getStatusBadge(item.status)}</TableCell>
                <TableCell className="whitespace-nowrap text-muted-foreground">{item.details}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
