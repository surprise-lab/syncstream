
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Save } from 'lucide-react';
import Image from 'next/image';

export function Mapping() {
  return (
    <main className="flex-grow container mx-auto px-6 lg:px-10 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-2">Field Mapping</h2>
          <p className="text-muted-foreground text-lg">
            Map fields between Takealot and Xero to ensure accurate data
            transfer.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-6 p-8 bg-[#1c2620] rounded-2xl border border-border">
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
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Label
                  className="w-1/3 text-md text-muted-foreground"
                  htmlFor="takealot-order-number"
                >
                  Order Number
                </Label>
                <Select defaultValue="order-id">
                  <SelectTrigger
                    className="flex-1"
                    id="takealot-order-number"
                  >
                    <SelectValue placeholder="Select field" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="order-id">Order ID</SelectItem>
                    <SelectItem value="reference">Reference</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-4">
                <Label
                  className="w-1/3 text-md text-muted-foreground"
                  htmlFor="takealot-order-date"
                >
                  Order Date
                </Label>
                <Select defaultValue="order-date">
                  <SelectTrigger className="flex-1" id="takealot-order-date">
                    <SelectValue placeholder="Select field" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="order-date">Order Date</SelectItem>
                    <SelectItem value="created-at">Created At</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-4">
                <Label
                  className="w-1/3 text-md text-muted-foreground"
                  htmlFor="takealot-customer-name"
                >
                  Customer Name
                </Label>
                <Select defaultValue="customer-name">
                  <SelectTrigger
                    className="flex-1"
                    id="takealot-customer-name"
                  >
                    <SelectValue placeholder="Select field" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="customer-name">Customer Name</SelectItem>
                    <SelectItem value="buyer-name">Buyer Name</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-4">
                <Label
                  className="w-1/3 text-md text-muted-foreground"
                  htmlFor="takealot-total-amount"
                >
                  Total Amount
                </Label>
                <Select defaultValue="total-amount">
                  <SelectTrigger
                    className="flex-1"
                    id="takealot-total-amount"
                  >
                    <SelectValue placeholder="Select field" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="total-amount">Total Amount</SelectItem>
                    <SelectItem value="order-total">Order Total</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 p-8 bg-[#1c2620] rounded-2xl border border-border">
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
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Label
                  className="w-1/3 text-md text-muted-foreground"
                  htmlFor="xero-invoice-number"
                >
                  Invoice Number
                </Label>
                <Select defaultValue="invoice-number">
                  <SelectTrigger
                    className="flex-1"
                    id="xero-invoice-number"
                  >
                    <SelectValue placeholder="Select field" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="invoice-number">
                      Invoice Number
                    </SelectItem>
                    <SelectItem value="reference">Reference</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-4">
                <Label
                  className="w-1/3 text-md text-muted-foreground"
                  htmlFor="xero-invoice-date"
                >
                  Invoice Date
                </Label>
                <Select defaultValue="date">
                  <SelectTrigger className="flex-1" id="xero-invoice-date">
                    <SelectValue placeholder="Select field" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date">Date</SelectItem>
                    <SelectItem value="due-date">Due Date</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-4">
                <Label
                  className="w-1/3 text-md text-muted-foreground"
                  htmlFor="xero-contact-name"
                >
                  Contact Name
                </Label>
                <Select defaultValue="contact">
                  <SelectTrigger className="flex-1" id="xero-contact-name">
                    <SelectValue placeholder="Select field" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="contact">Contact</SelectItem>
                    <SelectItem value="person">Person</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-4">
                <Label
                  className="w-1/3 text-md text-muted-foreground"
                  htmlFor="xero-total"
                >
                  Total
                </Label>
                <Select defaultValue="total">
                  <SelectTrigger className="flex-1" id="xero-total">
                    <SelectValue placeholder="Select field" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="total">Total</SelectItem>
                    <SelectItem value="subtotal">SubTotal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-end gap-4">
          <Button variant="outline">
            <span>Cancel</span>
          </Button>
          <Button>
            <Save />
            <span>Save Mapping</span>
          </Button>
        </div>
      </div>
    </main>
  );
}
