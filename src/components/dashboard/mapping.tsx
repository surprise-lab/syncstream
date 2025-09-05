
import { Button } from '@/components/ui/button';
import { Save, MoveVertical } from 'lucide-react';
import Image from 'next/image';

export function Mapping() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-6 lg:px-10 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-2">Field Mapping</h2>
            <p className="text-muted-foreground text-lg">
              Drag and drop Takealot fields to map them to your Xero invoice
              fields.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col gap-6 p-8 bg-card rounded-2xl border border-border">
              <div className="flex items-center gap-4">
                <Image
                  alt="Takealot Logo"
                  className="h-8 w-8 bg-white p-1 rounded-md"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJYSjsWubd0n8fQq87c7AYRcuLWJzf9znd4l-33F85RF4qe6NgwK2AjtTjptJLNsgTNnHuds6LNIQf0iI2VphuQ3axTxBjeuVrlo6a3NauXE74ETu1p3hPs90zS16eP28oC-erdV4PlANcQac5BrtL_MR2io-MpiKUr6yqZ8GEqdaHLr4LC-k8tmSWa1TWU9mYXWOgF2rMbCI8VYU3CATuiQmNfO5pSrhr8tv8HiuhanLs8RuGlKtvOsU7gRbbr82X5knX2dKqxdM"
                  width={32}
                  height={32}
                  data-ai-hint="logo"
                />
                <h3 className="text-2xl font-bold text-white">
                  Takealot Order Data
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-background border-2 border-dashed border-border rounded-lg">
                  <MoveVertical className="drag-handle text-muted-foreground cursor-move" />
                  <span className="text-md text-white">Order ID</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-background border-2 border-dashed border-border rounded-lg">
                  <MoveVertical className="drag-handle text-muted-foreground cursor-move" />
                  <span className="text-md text-white">Order Date</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-background border-2 border-dashed border-border rounded-lg">
                  <MoveVertical className="drag-handle text-muted-foreground cursor-move" />
                  <span className="text-md text-white">Customer Name</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-background border-2 border-dashed border-border rounded-lg">
                  <MoveVertical className="drag-handle text-muted-foreground cursor-move" />
                  <span className="text-md text-white">Total Amount</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-background border-2 border-dashed border-border rounded-lg">
                  <MoveVertical className="drag-handle text-muted-foreground cursor-move" />
                  <span className="text-md text-white">SKU</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-background border-2 border-dashed border-border rounded-lg">
                  <MoveVertical className="drag-handle text-muted-foreground cursor-move" />
                  <span className="text-md text-white">Shipping Address</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 p-8 bg-card rounded-2xl border border-border">
              <div className="flex items-center gap-4">
                <Image
                  alt="Xero Logo"
                  className="h-8 w-8 bg-white p-1 rounded-md"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSalxZOs7Eob2em1AFfLjiJivXYY_uxwR4WNF6dD3vLcqrQD2fDuLLhiqe1ce8Iz-EZIIpkT1qgsPKzpHuMQi7zSObWFmzS7CIGEC3m9VZ8Pxv1zvDXu9Vvk3CJM82aXk-dhYwsnLFbylLZFkUTf--YLRwG2ATDBEl-99mhXBGzj4LPlHPSx7KqNVNB_QXASVYHecGvbuKRRXZCwHbkMCphK9DitIH3SzG_IUKxDGxuYH0zqdtkqDaD-ZLU4C6Ae0Y2r5H1s0EcNA"
                  width={32}
                  height={32}
                  data-ai-hint="logo"
                />
                <h3 className="text-2xl font-bold text-white">
                  Xero Invoice Fields
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4 p-4 bg-background rounded-lg border border-border">
                  <label
                    className="text-md text-muted-foreground"
                    htmlFor="xero-invoice-number"
                  >
                    Invoice Number
                  </label>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-card min-h-[44px] min-w-[150px] border border-dashed border-border">
                    <span className="text-sm text-muted-foreground italic">
                      Drop field here
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 p-4 bg-background rounded-lg border border-border">
                  <label
                    className="text-md text-muted-foreground"
                    htmlFor="xero-invoice-date"
                  >
                    Invoice Date
                  </label>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-card min-h-[44px] min-w-[150px] border border-dashed border-border">
                    <span className="text-sm text-muted-foreground italic">
                      Drop field here
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 p-4 bg-background rounded-lg border border-border">
                  <label
                    className="text-md text-muted-foreground"
                    htmlFor="xero-contact-name"
                  >
                    Contact Name
                  </label>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-card min-h-[44px] min-w-[150px] border border-dashed border-border">
                    <span className="text-sm text-muted-foreground italic">
                      Drop field here
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 p-4 bg-background rounded-lg border border-border">
                  <label
                    className="text-md text-muted-foreground"
                    htmlFor="xero-total"
                  >
                    Total
                  </label>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-card min-h-[44px] min-w-[150px] border border-dashed border-border">
                    <span className="text-sm text-muted-foreground italic">
                      Drop field here
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 p-4 bg-background rounded-lg border border-border">
                  <label
                    className="text-md text-muted-foreground"
                    htmlFor="xero-description"
                  >
                    Description
                  </label>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-card min-h-[44px] min-w-[150px] border border-dashed border-border">
                    <span className="text-sm text-muted-foreground italic">
                      Drop field here
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 p-4 bg-background rounded-lg border border-border">
                  <label
                    className="text-md text-muted-foreground"
                    htmlFor="xero-reference"
                  >
                    Reference
                  </label>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-card min-h-[44px] min-w-[150px] border border-dashed border-border">
                    <span className="text-sm text-muted-foreground italic">
                      Drop field here
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 flex justify-end gap-4">
            <Button
              variant="outline"
              className="px-6 py-3 rounded-full bg-transparent border-border hover:bg-card transition-colors duration-300"
            >
              <span>Cancel</span>
            </Button>
            <Button className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-background font-bold hover:bg-primary/80 transition-colors duration-300">
              <Save />
              <span>Save Mapping</span>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
