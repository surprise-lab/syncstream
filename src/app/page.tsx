
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowRight, KeyRound, Lock, Receipt, Store, Check, Bell } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { ConnectrLogo } from '@/components/connectr-logo';

export default function ConnectPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#111714]">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#29382f] px-10 py-4">
        <div className="flex items-center gap-4">
          <ConnectrLogo className="size-6 text-primary" />
          <h1 className="text-xl font-bold text-white">Connectr</h1>
        </div>
        <nav className="flex items-center gap-8">
          <Link className="text-sm font-medium text-gray-300 hover:text-white transition-colors" href="#">Dashboard</Link>
          <a className="text-sm font-medium text-white" href="#">Integrations</a>
          <a className="text-sm font-medium text-gray-300 hover:text-white transition-colors" href="#">Support</a>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="text-muted-foreground" />
            <span className="absolute right-2 top-2 block h-2 w-2 rounded-full bg-primary"></span>
          </Button>
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB74NcmuDCnnQbowsppz3gR3XrcUSeXpw1STY1SeHNWw9AW58vmKJ95bgGvJeYxSi8FnE9tu2_eG9vus0tcqjyzsPysuNnd8U51CpIRAYXqQ5jSk_wbm-ISVG0SgWDTFi1muVd3hlx5R222Vu7BaZdkBUfdwNxtXpCCe54oo-ggmm0--RFUDtfEj2czzKiD82J_6QE7y71wd3Lh0-V_B5JUirc6IJ0s2lRhZvsfChXP4hdYlSHYwlIHKB8tOgXZtHWCRB1x6jxVjRQ")'}}></div>
        </div>
      </header>
      <main className="flex-1 items-center justify-center py-16">
        <div className="mx-auto w-full max-w-lg px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Connect your Takealot and Xero accounts
            </h2>
            <p className="mt-3 text-gray-400">
              This integration will automatically sync your sales data from
              Takealot to Xero, streamlining your accounting processes.
            </p>
          </div>
          <div className="rounded-2xl border border-[#29382f] bg-[#181F1C] p-8">
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
                <Label htmlFor="takealot-id" className="mb-2 block text-gray-300">
                  Takealot Seller ID
                </Label>
                <div className="relative">
                  <Store className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <Input
                    id="takealot-id"
                    placeholder="Enter your Takealot Seller ID"
                    className="h-14 rounded-xl border-[#3d5245] bg-[#1c2620] pl-12 text-white placeholder:text-[#9eb7a8] focus:border-transparent focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="xero-id" className="mb-2 block text-gray-300">
                  Xero Tenant ID
                </Label>
                <div className="relative">
                  <Receipt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <Input
                    id="xero-id"
                    placeholder="Enter your Xero Tenant ID"
                    className="h-14 rounded-xl border-[#3d5245] bg-[#1c2620] pl-12 text-white placeholder:text-[#9eb7a8] focus:border-transparent focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div className="pt-4">
                <Button className="h-12 w-full rounded-full bg-primary text-[#111714] hover:bg-emerald-400" asChild>
                  <Link href="/dashboard">
                    Connect Accounts
                    <ArrowRight />
                  </Link>
                </Button>
              </div>
            </form>
            <p className="mt-6 text-center text-xs text-gray-500">
              <Lock className="mr-1 inline-block size-3 align-middle" />
              Your credentials are secure and encrypted.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
