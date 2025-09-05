
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowRight, KeyRound, Lock, Receipt, Store, Check } from 'lucide-react';
import { Header } from '@/components/layout/header';

export default function ConnectPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 items-center justify-center py-16">
        <div className="mx-auto w-full max-w-lg px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Connect your Takealot and Xero accounts
            </h2>
            <p className="mt-3 text-muted-foreground">
              This integration will automatically sync your sales data from
              Takealot to Xero, streamlining your accounting processes.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <ol className="mb-8 flex w-full items-center">
              <li className="flex w-full items-center text-primary after:inline-block after:h-1 after:w-full after:border-2 after:border-b after:border-border after:content-['']">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-background">
                  <Lock className="size-5" />
                </span>
              </li>
              <li className="flex w-full items-center after:inline-block after:h-1 after:w-full after:border-b after:border-muted after:content-['']">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-border bg-background text-muted-foreground">
                  <KeyRound className="size-5" />
                </span>
              </li>
              <li className="flex items-center">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-border bg-background text-muted-foreground">
                  <Check className="size-5" />
                </span>
              </li>
            </ol>
            <form className="space-y-6">
              <div>
                <Label htmlFor="takealot-id" className="mb-2 block">
                  Takealot Seller ID
                </Label>
                <div className="relative">
                  <Store className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="takealot-id"
                    placeholder="Enter your Takealot Seller ID"
                    className="h-14 pl-12"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="xero-id" className="mb-2 block">
                  Xero Tenant ID
                </Label>
                <div className="relative">
                  <Receipt className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="xero-id"
                    placeholder="Enter your Xero Tenant ID"
                    className="h-14 pl-12"
                  />
                </div>
              </div>
              <div className="pt-4">
                <Button className="h-12 w-full rounded-full" asChild>
                  <Link href="/dashboard">
                    Connect Accounts
                    <ArrowRight />
                  </Link>
                </Button>
              </div>
            </form>
            <p className="mt-6 text-center text-xs text-muted-foreground">
              <Lock className="mr-1 inline-block size-3 align-middle" />
              Your credentials are secure and encrypted.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
