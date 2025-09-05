"use client"

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  resolveDataConflicts,
  type ResolveDataConflictsOutput,
} from '@/ai/flows/resolve-data-conflicts';

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from '../ui/scroll-area';

const formSchema = z.object({
  takealotData: z.string().min(1, 'Takealot data cannot be empty.'),
  xeroData: z.string().min(1, 'Xero data cannot be empty.'),
});

const defaultTakealotData = JSON.stringify(
  {
    "orders": [
      { "orderId": "TA-12345", "customer": "John Doe", "total": 150.00, "items": [ { "sku": "SKU-A", "price": 100.00 }, { "sku": "SKU-B", "price": 50.00 } ] }
    ]
  }, null, 2
);

const defaultXeroData = JSON.stringify(
  {
    "products": [
      { "sku": "SKU-A", "price": 99.00 },
      { "sku": "SKU-B", "price": 50.00 }
    ]
  }, null, 2
);

interface SyncModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function SyncModal({ isOpen, onOpenChange }: SyncModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resolution, setResolution] = useState<ResolveDataConflictsOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      takealotData: defaultTakealotData,
      xeroData: defaultXeroData,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setResolution(null);
    try {
      const result = await resolveDataConflicts(values);
      setResolution(result);
    } catch (error) {
      console.error("Conflict resolution failed:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to resolve data conflicts. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }
  
  const handleOpenChange = (open: boolean) => {
    onOpenChange(open);
    if (!open) {
      // Reset state when closing
      setResolution(null);
      form.reset({
        takealotData: defaultTakealotData,
        xeroData: defaultXeroData
      });
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[800px] bg-card">
        <DialogHeader>
          <DialogTitle>Resolve Data Conflicts</DialogTitle>
          <DialogDescription>
            Use AI to identify and resolve discrepancies between Takealot and Xero data before syncing.
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="max-h-[70vh] pr-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="takealotData"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Takealot Data (JSON)</FormLabel>
                      <FormControl>
                        <Textarea rows={10} className="font-code text-sm" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="xeroData"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Xero Data (JSON)</FormLabel>
                      <FormControl>
                        <Textarea rows={10} className="font-code text-sm" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className='flex justify-end'>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Resolve Conflicts
                </Button>
              </div>
            </form>
          </Form>
          
          {resolution && (
            <div className="mt-6 space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Resolution Report</h3>
                <div className="bg-muted p-4 rounded-md border">
                  <p className="text-sm whitespace-pre-wrap">{resolution.resolutionReport}</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Resolved Data</h3>
                <div className="bg-muted p-4 rounded-md border">
                  <pre className="text-sm font-code whitespace-pre-wrap">{resolution.resolvedData}</pre>
                </div>
              </div>
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
