
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function DashboardPage() {
  return (
    <div className="p-10">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-text-primary">Welcome back, Alex!</h2>
        <p className="text-lg text-text-secondary">
          Here's an overview of your integrations.
        </p>
      </div>
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-text-primary mb-6">Quick Links</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a
            className="bg-background-secondary rounded-lg p-6 flex flex-col justify-between hover:bg-background-tertiary transition-colors duration-200"
            href="#"
          >
            <div>
              <div className="bg-info-color/20 p-3 rounded-full w-fit mb-4">
                <span className="material-symbols-outlined text-3xl text-info-color">
                  history
                </span>
              </div>
              <h4 className="text-text-primary font-semibold text-lg mb-1">
                Sync History
              </h4>
              <p className="text-text-secondary text-sm">
                View logs of all data synchronizations.
              </p>
            </div>
          </a>
          <a
            className="bg-background-secondary rounded-lg p-6 flex flex-col justify-between hover:bg-background-tertiary transition-colors duration-200"
            href="#"
          >
            <div>
              <div className="bg-warning-color/20 p-3 rounded-full w-fit mb-4">
                <span className="material-symbols-outlined text-3xl text-warning-color">
                  notifications_active
                </span>
              </div>
              <h4 className="text-text-primary font-semibold text-lg mb-1">Alerts</h4>
              <p className="text-text-secondary text-sm">
                Check notifications and system warnings.
              </p>
            </div>
          </a>
          <a
            className="bg-background-secondary rounded-lg p-6 flex flex-col justify-between hover:bg-background-tertiary transition-colors duration-200"
            href="#"
          >
            <div>
              <div className="bg-success-color/20 p-3 rounded-full w-fit mb-4">
                <span className="material-symbols-outlined text-3xl text-success-color">
                  add_circle
                </span>
              </div>
              <h4 className="text-text-primary font-semibold text-lg mb-1">
                Manage Integrations
              </h4>
              <p className="text-text-secondary text-sm">
                Add, edit, or remove your integrations.
              </p>
            </div>
          </a>
        </div>
      </section>
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-text-primary mb-6">Key Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-background-secondary rounded-lg p-6 flex items-center gap-6">
            <div className="bg-primary-color/20 p-3 rounded-full">
              <span className="material-symbols-outlined text-3xl text-primary-color">
                extension
              </span>
            </div>
            <div>
              <p className="text-text-secondary text-sm font-medium">
                Total Integrations
              </p>
              <p className="text-text-primary text-3xl font-bold">25</p>
            </div>
          </div>
          <div className="bg-background-secondary rounded-lg p-6 flex items-center gap-6">
            <div className="bg-green-500/20 p-3 rounded-full">
              <span className="material-symbols-outlined text-3xl text-green-500">
                power
              </span>
            </div>
            <div>
              <p className="text-text-secondary text-sm font-medium">
                Active Connections
              </p>
              <p className="text-text-primary text-3xl font-bold">18</p>
            </div>
          </div>
          <div className="bg-background-secondary rounded-lg p-6 flex items-center gap-6">
            <div className="bg-purple-500/20 p-3 rounded-full">
              <span className="material-symbols-outlined text-3xl text-purple-500">
                sync
              </span>
            </div>
            <div>
              <p className="text-text-secondary text-sm font-medium">
                Data Syncs Today
              </p>
              <p className="text-text-primary text-3xl font-bold">1,542</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-text-primary mb-6">
          System Health
        </h3>
        <div className="bg-background-secondary p-6 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <p className="text-text-primary font-medium">Overall System Health</p>
            <p className="text-text-primary font-bold text-lg">85%</p>
          </div>
          <div className="w-full bg-background-tertiary rounded-full h-2.5">
            <div
              className="bg-primary-color h-2.5 rounded-full"
              style={{ width: '85%' }}
            ></div>
          </div>
          <p className="text-sm text-text-secondary mt-2">
            All systems are operational.
          </p>
        </div>
      </section>
      <section>
        <h3 className="text-xl font-semibold text-text-primary mb-6">
          Recent Activity
        </h3>
        <div className="overflow-x-auto bg-background-secondary rounded-lg">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-border-color">
                <TableHead className="px-6 py-4 font-medium text-sm text-text-secondary">
                  Activity
                </TableHead>
                <TableHead className="px-6 py-4 font-medium text-sm text-text-secondary">
                  Timestamp
                </TableHead>
                <TableHead className="px-6 py-4 font-medium text-sm text-text-secondary">
                  Status
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-b border-border-color">
                <TableCell className="px-6 py-4 text-text-primary">
                  Integration 'Customer Data Sync' completed
                </TableCell>
                <TableCell className="px-6 py-4 text-text-secondary">
                  2024-01-20 14:30
                </TableCell>
                <TableCell className="px-6 py-4">
                  <Badge className="inline-flex items-center gap-x-1.5 rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium text-green-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                    Success
                  </Badge>
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-border-color">
                <TableCell className="px-6 py-4 text-text-primary">
                  Connection 'Salesforce' established
                </TableCell>
                <TableCell className="px-6 py-4 text-text-secondary">
                  2024-01-20 12:15
                </TableCell>
                <TableCell className="px-6 py-4">
                  <Badge className="inline-flex items-center gap-x-1.5 rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                    Active
                  </Badge>
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-border-color">
                <TableCell className="px-6 py-4 text-text-primary">
                  Alert: 'Order Processing' integration delays
                </TableCell>
                <TableCell className="px-6 py-4 text-text-secondary">
                  2024-01-20 10:00
                </TableCell>
                <TableCell className="px-6 py-4">
                  <Badge className="inline-flex items-center gap-x-1.5 rounded-full bg-yellow-500/20 px-3 py-1 text-xs font-medium text-yellow-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-yellow-500"></span>
                    Warning
                  </Badge>
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-border-color">
                <TableCell className="px-6 py-4 text-text-primary">
                  Integration 'Inventory Update' started
                </TableCell>
                <TableCell className="px-6 py-4 text-text-secondary">
                  2024-01-20 09:45
                </TableCell>
                <TableCell className="px-6 py-4">
                  <Badge className="inline-flex items-center gap-x-1.5 rounded-full bg-purple-500/20 px-3 py-1 text-xs font-medium text-purple-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                    In Progress
                  </Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4 text-text-primary">
                  Connection 'Shopify' disconnected
                </TableCell>
                <TableCell className="px-6 py-4 text-text-secondary">
                  2024-01-20 08:20
                </TableCell>
                <TableCell className="px-6 py-4">
                  <Badge className="inline-flex items-center gap-x-1.5 rounded-full bg-gray-500/20 px-3 py-1 text-xs font-medium text-gray-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-500"></span>
                    Inactive
                  </Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
    </div>
  );
}
