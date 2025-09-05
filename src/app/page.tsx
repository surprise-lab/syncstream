import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowRight, Key, Lock, CheckCircle, KeyRound, Bell } from 'lucide-react';
import { ConnectrLogo } from '@/components/connectr-logo';

export default function ConnectPage() {
  return (
    <div className="relative flex size-full min-h-screen flex-col overflow-x-hidden bg-gray-900 text-gray-200">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-800 px-10 py-4">
        <div className="flex items-center gap-4">
          <ConnectrLogo className="size-8 text-primary" />
          <h1 className="text-2xl font-bold text-white">Integrate</h1>
        </div>
        <nav className="flex items-center gap-8">
          <Link
            className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
            href="#"
          >
            Dashboard
          </Link>
          <a className="text-sm font-medium text-white" href="#">
            Integrations
          </a>
          <a
            className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
            href="#"
          >
            Support
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="relative">
            <Bell className="text-gray-400" />
            <span className="absolute right-0 top-0 block h-2 w-2 rounded-full bg-primary"></span>
          </button>
          <div
            className="aspect-square size-10 rounded-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB74NcmuDCnnQbowsppz3gR3XrcUSeXpw1STY1SeHNWw9AW58vmKJ95bgGvJeYxSi8FnE9tu2_eG9vus0tcqjyzsPysuNnd8U51CpIRAYXqQ5jSk_wbm-ISVG0SgWDTFi1muVd3hlx5R222Vu7BaZdkBUfdwNxtXpCCe54oo-ggmm0--RFUDtfEj2czzKiD82J_6QE7y71wd3Lh0-V_B5JUirc6IJ0s2lRhZvsfChXP4hdYlSHYwlIHKB8tOgXZtHWCRB1x6jxVjRQ")',
            }}
          ></div>
        </div>
      </header>
      <main className="flex flex-1 items-center justify-center py-16">
        <div className="w-full max-w-xl px-4">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white">
              Connect your Takealot and Xero accounts
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Follow the steps below to securely link your accounts and
              automate your sales data synchronization.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-700/50 bg-gray-800/50 p-8 shadow-2xl shadow-black/20">
            <ol className="mb-10 flex w-full items-center">
              <li className="flex w-full items-center text-primary after:inline-block after:h-1 after:w-full after:rounded-full after:border-4 after:border-b after:border-primary/30 after:content-['']">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-gray-900 ring-4 ring-primary/20">
                  <KeyRound className="size-6" />
                </span>
              </li>
              <li className="flex w-full items-center after:inline-block after:h-1 after:w-full after:rounded-full after:border-4 after:border-b after:border-gray-700 after:content-['']">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-gray-700 bg-gray-800">
                  <Key className="text-gray-500" />
                </span>
              </li>
              <li className="flex items-center">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-gray-700 bg-gray-800">
                  <CheckCircle className="text-gray-500" />
                </span>
              </li>
            </ol>
            <div className="mb-8 text-center">
              <h3 className="text-xl font-semibold text-white">
                Step 1: Authenticate with Takealot
              </h3>
              <p className="mt-1 text-gray-400">
                Enter your Takealot Seller API Key to begin.
              </p>
            </div>
            <form className="space-y-6">
              <div>
                <Label
                  className="mb-2 block text-sm font-medium text-gray-400"
                  htmlFor="takealot-key"
                >
                  Takealot API Key
                </Label>
                <div className="relative">
                  <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                  <Input
                    className="h-14 w-full rounded-lg border-2 border-gray-700 bg-gray-800 pl-12 pr-4 text-base text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900"
                    id="takealot-key"
                    placeholder="Paste your API Key here"
                    type="password"
                  />
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  Find your API Key in your Takealot Seller Portal under
                  Integrations.
                </p>
              </div>
              <div className="pt-4">
                <Button
                  className="flex h-12 w-full items-center justify-center rounded-lg bg-primary px-6 text-base font-bold tracking-wide text-gray-900 transition-colors hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900"
                  type="submit"
                  asChild
                >
                  <Link href="/dashboard">
                    <span className="truncate">Connect to Takealot</span>
                    <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </div>
            </form>
            <p className="mt-8 flex items-center justify-center text-center text-xs text-gray-500">
              <Lock className="mr-1 inline-block size-3 align-middle" />
              Your credentials are encrypted and stored securely.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
