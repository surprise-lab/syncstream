
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
  CheckCircle,
  XCircle,
  AlertTriangle,
} from 'lucide-react';

const logs = [
  {
    timestamp: '2024-03-15 14:30:15',
    status: 'Success',
    summary: 'Takealot Orders: 52 synced, Xero Invoices: 52 created.',
  },
  {
    timestamp: '2024-03-15 10:00:42',
    status: 'Success',
    summary: 'Takealot Orders: 45 synced, Xero Invoices: 45 created.',
  },
  {
    timestamp: '2024-03-14 22:15:03',
    status: 'Failure',
    summary: 'API connection to Xero failed. No records transferred.',
  },
  {
    timestamp: '2024-03-14 18:45:55',
    status: 'Success',
    summary: 'Takealot Orders: 61 synced, Xero Invoices: 61 created.',
  },
  {
    timestamp: '2024-03-14 14:00:21',
    status: 'Partial',
    summary: 'Takealot Orders: 30 synced, Xero Invoices: 28 created. 2 failed.',
  },
  {
    timestamp: '2024-03-13 20:30:10',
    status: 'Success',
    summary: 'Takealot Orders: 55 synced, Xero Invoices: 55 created.',
  },
  {
    timestamp: '2024-03-13 16:00:05',
    status: 'Success',
    summary: 'Takealot Orders: 48 synced, Xero Invoices: 48 created.',
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'Success':
      return (
        <Badge className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
          <CheckCircle className="text-base" />
          Success
        </Badge>
      );
    case 'Failure':
      return (
        <Badge className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400">
          <XCircle className="text-base" />
          Failure
        </Badge>
      );
    case 'Partial':
      return (
        <Badge className="inline-flex items-center gap-2 rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-400">
          <AlertTriangle className="text-base" />
          Partial
        </Badge>
      );
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

export function Logs() {
  return (
    <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">
              Synchronization Logs
            </h1>
            <p className="text-muted-foreground">
              Review the history of data transfers between Takealot and Xero.
            </p>
          </div>
          <Button variant="outline" className="bg-gray-800 hover:bg-gray-700">
            <Filter className="mr-2 h-4 w-4" />
            Filter Logs
          </Button>
        </div>

        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              className="h-12 w-full resize-none overflow-hidden rounded-lg border-none bg-gray-800 px-12 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Search logs by ID, status, or keyword..."
              type="search"
            />
          </div>
        </div>

        <div className="mt-4 overflow-hidden rounded-xl border border-border bg-gray-900">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-border">
                  <TableHead className="px-6 py-4 text-left text-sm font-semibold text-white">Timestamp</TableHead>
                  <TableHead className="px-6 py-4 text-left text-sm font-semibold text-white">Status</TableHead>
                  <TableHead className="px-6 py-4 text-left text-sm font-semibold text-white">Summary</TableHead>
                  <TableHead className="px-6 py-4 text-left text-sm font-semibold text-white"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="divide-y divide-border text-muted-foreground">
                {logs.map((log, index) => (
                  <TableRow key={index}>
                    <TableCell className="whitespace-nowrap px-6 py-4">
                      {log.timestamp}
                    </TableCell>
                    <TableCell>{getStatusBadge(log.status)}</TableCell>
                    <TableCell className="whitespace-nowrap px-6 py-4">
                      {log.summary}
                    </TableCell>
                    <TableCell className="px-6 py-4 text-right">
                      <Button variant="link" className="font-semibold text-primary hover:underline">
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
          <p>Showing 1 to 7 of 123 entries</p>
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
              18
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
