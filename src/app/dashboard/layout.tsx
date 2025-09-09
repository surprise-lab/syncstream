
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { SyncStreamLogo } from '@/components/syncstream-logo';

const navLinks = [
  { href: '/dashboard', label: 'Dashboard', icon: 'home' },
  { href: '/dashboard/integrations', label: 'Integrations', icon: 'cable' },
  {
    href: '/dashboard/connections',
    label: 'Connections',
    icon: 'sync_alt',
  },
  { href: '/dashboard/logs', label: 'Logs', icon: 'description' },
  { href: '/dashboard/devtools', label: 'Developer Tools', icon: 'code' },
  { href: '/dashboard/docs', label: 'Docs', icon: 'code' },
  { href: '/dashboard/settings', label: 'Settings', icon: 'settings' },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isDocsPage = pathname.startsWith('/dashboard/docs');
  const isDevToolsPage = pathname.startsWith('/dashboard/devtools');

  if (isDevToolsPage) {
    return (
      <div className="flex min-h-screen bg-[var(--background-color)] text-white">
        <aside className="flex w-64 flex-col bg-slate-900 p-4">
          <div className="flex items-center gap-2 px-2 pb-6">
            <img
              className="h-8 w-8"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcDKI_fYmW7uMUuvvDI7FgVhx_mJftIFoapGRu7ijEAoxOMLlWWX2PffLnQYhlLfFUfPtjTCF7JDcwhOdCEgJoz1webqJPKrwrtse5hW7rJvRpMF9MAglWqu6GAk_tBIcmcoJXD0tnQnEM4StWGv0bccoQ-aVbnhzDoH3s-PfzrR2H2GC3OF08gWDWzHkDhiscgwAMCOLV50etKN0HtOTBFlmQYy3RwBngkQ1G7oP7Pzq0o6UKLi9jCMET9Lmr2yXclVyyv5gE7zUg"
              alt="SyncStream Logo"
            />
            <h1 className="text-xl font-bold leading-normal text-[var(--text-color)]">
              SyncStream
            </h1>
          </div>
          <nav className="flex flex-col gap-2">
            <Link
              className="flex items-center gap-3 rounded-md px-3 py-2 text-[var(--text-muted-color)] hover:bg-[var(--secondary-color)] hover:text-[var(--text-color)]"
              href="#"
            >
              <span className="material-symbols-outlined"> dashboard </span>
              <p className="text-sm font-medium">Overview</p>
            </Link>
            <Link
              className="flex items-center gap-3 rounded-md px-3 py-2 text-[var(--text-muted-color)] hover:bg-[var(--secondary-color)] hover:text-[var(--text-color)]"
              href="/dashboard/connections"
            >
              <span className="material-symbols-outlined">Lan</span>
              <p className="text-sm font-medium">Connections</p>
            </Link>
            <Link
              className="flex items-center gap-3 rounded-md px-3 py-2 text-[var(--text-muted-color)] hover:bg-[var(--secondary-color)] hover:text-[var(--text-color)]"
              href="#"
            >
              <span className="material-symbols-outlined"> sync_alt </span>
              <p className="text-sm font-medium">Data Flows</p>
            </Link>
            <Link
              className="flex items-center gap-3 rounded-md bg-primary px-3 py-2 text-[var(--text-color)]"
              href="/dashboard/devtools"
            >
              <span className="material-symbols-outlined"> code </span>
              <p className="text-sm font-medium">Developer Tools</p>
            </Link>
            <Link
              className="flex items-center gap-3 rounded-md px-3 py-2 text-[var(--text-muted-color)] hover:bg-[var(--secondary-color)] hover:text-[var(--text-color)]"
              href="/dashboard/settings"
            >
              <span className="material-symbols-outlined"> settings </span>
              <p className="text-sm font-medium">Settings</p>
            </Link>
          </nav>
          <div className="mt-auto flex flex-col gap-4">
            <button className="flex h-10 w-full cursor-pointer items-center justify-center overflow-hidden rounded-md bg-primary px-4 text-sm font-bold tracking-wide text-white hover:bg-blue-600">
              <span>New Connection</span>
            </button>
            <Link
              className="flex items-center gap-3 rounded-md px-3 py-2 text-[var(--text-muted-color)] hover:bg-[var(--secondary-color)] hover:text-[var(--text-color)]"
              href="/dashboard/docs"
            >
              <span className="material-symbols-outlined"> help_outline </span>
              <p className="text-sm font-medium">Help and docs</p>
            </Link>
          </div>
        </aside>
        <main className="flex-1 p-8">{children}</main>
      </div>
    );
  }

  if (isDocsPage) {
    return (
      <div className="relative flex size-full min-h-screen flex-col bg-[#111a22] text-white">
        <div className="flex h-full grow">
          <aside className="sticky top-0 flex h-full min-h-screen w-80 flex-col bg-[#18232f] p-6">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                  <span className="material-symbols-outlined text-white">
                    sync_alt
                  </span>
                </div>
                <h1 className="text-xl font-bold text-white">
                  SyncStream API
                </h1>
              </div>
              <div className="flex flex-col gap-2">
                <div className="relative px-3">
                    <span className="material-symbols-outlined absolute left-6 top-1/2 -translate-y-1/2 text-[#92adc9] text-xl">search</span>
                    <input className="form-input w-full rounded-md border-0 bg-[#233648] py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-[#92adc9] focus:ring-2 focus:ring-inset focus:ring-[var(--primary-color)]" placeholder="Search documentation..." type="search"/>
                </div>
                <Link
                  className="flex items-center gap-3 px-3 py-2 rounded-md text-[#b0c7e2] hover:bg-[#233648] hover:text-white transition-colors duration-200 mt-4"
                  href="#"
                >
                  <span className="material-symbols-outlined text-xl">
                    book
                  </span>
                  <span className="text-sm font-medium">Overview</span>
                </Link>
                <Link
                  className="flex items-center gap-3 px-3 py-2 rounded-md text-[#b0c7e2] hover:bg-[#233648] hover:text-white transition-colors duration-200"
                  href="#"
                >
                  <span className="material-symbols-outlined text-xl">
                    key
                  </span>
                  <span className="text-sm font-medium">Authentication</span>
                </Link>
                <Link
                  className="flex items-center gap-3 px-3 py-2 rounded-md bg-primary text-white"
                  href="#"
                >
                  <span className="material-symbols-outlined text-xl">
                    code
                  </span>
                  <span className="text-sm font-medium">Endpoints</span>
                </Link>
                <Link
                  className="flex items-center gap-3 px-3 py-2 rounded-md text-[#b0c7e2] hover:bg-[#233648] hover:text-white transition-colors duration-200"
                  href="#"
                >
                  <span className="material-symbols-outlined text-xl">
                    bug_report
                  </span>
                  <span className="text-sm font-medium">Error Codes</span>
                </Link>
                <Link
                  className="flex items-center gap-3 px-3 py-2 rounded-md text-[#b0c7e2] hover:bg-[#233648] hover:text-white transition-colors duration-200"
                  href="#"
                >
                  <span className="material-symbols-outlined text-xl">
                    support_agent
                  </span>
                  <span className="text-sm font-medium">Support</span>
                </Link>
              </div>
            </div>
            <div className="mt-auto">
              <p className="text-xs font-normal text-[#92adc9]">
                Version 1.0.0
              </p>
            </div>
          </aside>
           <div className="flex-1 flex flex-col overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#0d1117] text-white">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#233648] px-10 py-3">
        <div className="flex items-center gap-4 text-white">
          <div className="size-6 text-primary">
            <SyncStreamLogo />
          </div>
          <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">
            SyncStream
          </h2>
        </div>
        <div className="flex flex-1 justify-end gap-2">
          <div className="flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white text-sm font-medium leading-normal px-4 py-2 rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full text-gray-300 hover:bg-[#233648] hover:text-white transition-colors">
            <span className="material-symbols-outlined text-2xl">help</span>
          </button>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDDZoabNJj6kZBSrsTeKoCZUpXseesVu34sDjIye0mTnMYRI2NEEYx-jy6tJ5s0LR3n2vBCeJlB_K82JE8bCwbKA-lr8azD-TLZfR5mpSY7D4DlpoBJr9H_0ZgtioA_QMZvSlqmtDZ2ooZRxPqntGFJYLGY7m_69rmhcsF4j09yBpYNvS1SAKFm-ZfWjFItB0NXFkzr0NCbRENyu1SmnDgpycRoaT6lAjEhdNgRu-e83kjOaz5mg4yzzaZVp_kH8PZ3w8BzF42p3Ocw")',
            }}
          ></div>
        </div>
      </header>
      <div className="flex-1 flex flex-col overflow-hidden">{children}</div>
    </div>
  );
}
