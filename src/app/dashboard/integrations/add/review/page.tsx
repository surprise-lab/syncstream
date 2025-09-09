
import { Button } from '@/components/ui/button';
import { ChevronRight, KeyRound, Users } from 'lucide-react';
import Link from 'next/link';

export default function ReviewIntegrationPage() {
  return (
    <main className="flex-grow overflow-y-auto">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-2xl">
          <div className="mb-6 flex items-center gap-2 text-sm text-[#92adc9]">
            <Link className="hover:text-white" href="/dashboard/integrations">
              Integrations
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link className="hover:text-white" href="/dashboard/integrations/add">
              Add Integration
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="font-medium text-white">Review</span>
          </div>
          <div className="rounded-xl bg-[#182430] p-8 shadow-2xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Review and Confirm
              </h2>
              <p className="mt-2 text-base text-[#92adc9]">
                Please review the details of your new integration before
                finalizing. Ensure all configurations are correct.
              </p>
            </div>
            <div className="mt-8 space-y-8">
              <div>
                <h3 className="mb-4 text-lg font-bold leading-tight tracking-[-0.015em] text-white">
                  Integration Type
                </h3>
                <div className="flex items-center gap-4 rounded-md bg-[#233648] p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
                    <Users className="h-8 w-8" />
                  </div>
                  <div>
                    <p className="text-base font-medium text-white">CRM</p>
                    <p className="text-sm text-[#92adc9]">
                      Customer Relationship Management
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-bold leading-tight tracking-[-0.015em] text-white">
                  Authentication
                </h3>
                <div className="flex items-center gap-4 rounded-md bg-[#233648] p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
                    <KeyRound className="h-8 w-8" />
                  </div>
                  <div>
                    <p className="text-base font-medium text-white">
                      OAuth 2.0
                    </p>
                    <p className="text-sm text-[#92adc9]">
                      Secure Token-Based Authentication
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-bold leading-tight tracking-[-0.015em] text-white">
                  Data Mapping
                </h3>
                <div className="divide-y divide-[#324d67] rounded-md bg-[#233648] p-4">
                  <div className="grid grid-cols-2 gap-4 py-3">
                    <p className="text-sm text-[#92adc9]">Contacts</p>
                    <p className="text-right text-sm text-white">
                      Mapped to users
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-3">
                    <p className="text-sm text-[#92adc9]">Accounts</p>
                    <p className="text-right text-sm text-white">
                      Mapped to organizations
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-3">
                    <p className="text-sm text-[#92adc9]">Opportunities</p>
                    <p className="text-right text-sm text-white">
                      Mapped to deals
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end gap-4">
              <Button asChild variant="secondary">
                <Link href="/dashboard/integrations/add">Back</Link>
              </Button>
              <Button asChild>
                <Link href="/dashboard">Confirm Integration</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

    