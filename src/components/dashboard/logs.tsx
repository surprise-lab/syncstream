
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
import {
  Filter,
  Search,
  CheckCircle2,
  XCircle,
  MoreHorizontal,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

const logs = [
  {
    timestamp: '2024-01-15 14:30:15',
    status: 'Success',
    records: 'Orders: 15, Invoices: 12',
  },
  {
    timestamp: '2024-01-15 10:00:42',
    status: 'Success',
    records: 'Orders: 20, Invoices: 18',
  },
  {
    timestamp: '2024-01-14 22:15:03',
    status: 'Failure',
    records: 'Orders: 5, Invoices: 4',
  },
  {
    timestamp: '2024-01-14 18:45:55',
    status: 'Success',
    records: 'Orders: 18, Invoices: 16',
  },
  {
    timestamp: '2024-01-14 14:00:21',
    status: 'Success',
    records: 'Orders: 22, Invoices: 20',
  },
  {
    timestamp: '2024-01-13 20:30:10',
    status: 'Success',
    records: 'Orders: 17, Invoices: 15',
  },
  {
    timestamp: '2024-01-13 16:00:05',
    status: 'Success',
    records: 'Orders: 25, Invoices: 23',
  },
  {
    timestamp: '2024-01-13 12:45:33',
    status: 'Failure',
    records: 'Orders: 3, Invoices: 2',
  },
  {
    timestamp: '2024-01-12 23:15:48',
    status: 'Success',
    records: 'Orders: 19, Invoices: 17',
  },
  {
    timestamp: '2024-01-12 19:00:19',
    status: 'Success',
    records: 'Orders: 21, Invoices: 19',
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'Success':
      return (
        <Badge className="border-transparent bg-green-900/50 text-green-400 hover:bg-green-900/60">
          <CheckCircle2 className="mr-2" />
          Success
        </Badge>
      );
    case 'Failure':
      return (
        <Badge className="border-transparent bg-red-900/50 text-red-400 hover:bg-red-900/60">
          <XCircle className="mr-2" />
          Failure
        </Badge>
      );
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

export function Logs() {
  return (
    <main className="flex-1 px-10 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white">
              Synchronization Logs
            </h1>
            <p className="text-muted-foreground">
              Review the history of data transfers between Takealot and Xero.
            </p>
          </div>
          <Button>
            <Filter className="mr-2 h-4 w-4" />
            Filter Logs
          </Button>
        </div>

        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              className="h-12 rounded-full bg-card pl-12"
              placeholder="Search logs by ID, status, or keyword..."
            />
          </div>
        </div>

        <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-card">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-white/5">
                <TableRow>
                  <TableHead className="uppercase">Timestamp</TableHead>
                  <TableHead className="uppercase">Status</TableHead>
                  <TableHead className="uppercase">Records Transferred</TableHead>
                  <TableHead className="uppercase text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {logs.map((log, index) => (
                  <TableRow key={index}>
                    <TableCell className="whitespace-nowrap text-muted-foreground">
                      {log.timestamp}
                    </TableCell>
                    <TableCell>{getStatusBadge(log.status)}</TableCell>
                    <TableCell className="whitespace-nowrap">
                      {log.records}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="link" className="text-primary">
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between text-sm text-muted-foreground">
          <p>Showing 1 to 10 of 123 entries</p>
          <div className="flex items-center gap-1">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="default" size="sm">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <span className="px-2">...</span>
            <Button variant="outline" size="sm">
              13
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
