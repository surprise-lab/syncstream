
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function Rules() {
  return (
    <main className="flex-1 p-10 bg-[#141a17]">
      <header className="mb-10">
        <h1 className="text-white text-4xl font-bold">Rules</h1>
        <p className="text-muted-foreground text-base mt-2">
          Automate your data synchronization with custom rules and pre-set
          templates.
        </p>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="bg-background p-8 rounded-2xl">
          <h2 className="text-white text-2xl font-bold mb-6">
            Create New Rule
          </h2>
          <form className="space-y-6">
            <div>
              <Label className="block text-sm text-white font-medium mb-2" htmlFor="rule-name">
                Rule Name
              </Label>
              <Input
                id="rule-name"
                placeholder="e.g., 'Sync High-Value Orders'"
                type="text"
                className="bg-[#1c2620] border-[#3d5245] rounded-xl h-12"
              />
            </div>
            <div>
              <Label className="block text-white text-sm font-medium mb-2" htmlFor="trigger">
                Trigger
              </Label>
              <Select>
                <SelectTrigger id="trigger" className="bg-[#1c2620] border-[#3d5245] rounded-xl h-12">
                  <SelectValue placeholder="New Order Received" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new-order">New Order Received</SelectItem>
                  <SelectItem value="status-update">Order Status Updated</SelectItem>
                  <SelectItem value="new-customer">New Customer Created</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="block text-white text-sm font-medium mb-2" htmlFor="frequency">
                Frequency
              </Label>
              <Select>
                <SelectTrigger id="frequency" className="bg-[#1c2620] border-[#3d5245] rounded-xl h-12">
                  <SelectValue placeholder="Instantly" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="instantly">Instantly</SelectItem>
                  <SelectItem value="15-min">Every 15 minutes</SelectItem>
                  <SelectItem value="hourly">Hourly</SelectItem>
                  <SelectItem value="daily">Daily</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="block text-white text-sm font-medium mb-2" htmlFor="conditions">
                Conditions
              </Label>
               <Select>
                <SelectTrigger id="conditions" className="bg-[#1c2620] border-[#3d5245] rounded-xl h-12">
                  <SelectValue placeholder="If Order Total is greater than R1000" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="total-gt-1000">If Order Total is greater than R1000</SelectItem>
                    <SelectItem value="city-johannesburg">If Shipping City is 'Johannesburg'</SelectItem>
                    <SelectItem value="sku-widget">If Product SKU contains 'WIDGET'</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full rounded-full bg-primary text-background hover:bg-primary/90" type="submit">
              Save Rule
            </Button>
          </form>
        </div>
        <div className="bg-background p-8 rounded-2xl">
          <h2 className="text-white text-2xl font-bold mb-6">
            Rule Templates
          </h2>
          <div className="space-y-4">
            <div className="bg-[#1c2620] p-4 rounded-lg flex justify-between items-center">
              <div>
                <h3 className="text-white font-semibold">
                  Sync All Orders to Xero
                </h3>
                <p className="text-sm text-muted-foreground">
                  A simple template to get all your orders synced.
                </p>
              </div>
              <Button variant="link" className="text-primary">
                Use Template
              </Button>
            </div>
            <div className="bg-[#1c2620] p-4 rounded-lg flex justify-between items-center">
              <div>
                <h3 className="text-white font-semibold">
                  Flag High-Value Orders
                </h3>
                <p className="text-sm text-muted-foreground">
                  Automatically tag orders over a certain value.
                </p>
              </div>
              <Button variant="link" className="text-primary">
                Use Template
              </Button>
            </div>
            <div className="bg-[#1c2620] p-4 rounded-lg flex justify-between items-center">
              <div>
                <h3 className="text-white font-semibold">
                  Regional Order Sync
                </h3>
                <p className="text-sm text-muted-foreground">
                  Sync orders based on customer location.
                </p>
              </div>
              <Button variant="link" className="text-primary">
                Use Template
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
