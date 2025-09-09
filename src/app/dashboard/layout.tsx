
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { SyncStreamLogo } from '@/components/syncstream-logo';

const navLinks = [
  { href: '/dashboard', label: 'Dashboard'},
  { href: '/dashboard/integrations', label: 'Integrations'},
  { href: '/dashboard/connections', label: 'Connections' },
  { href: '/dashboard/logs', label: 'Logs'},
  { href: '/dashboard/docs', label: 'Docs'},
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#0d1117] text-white">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#233648] px-10 py-3">
            <div className="flex items-center gap-4 text-white">
                <div className="size-6 text-[var(--primary-color)]">
                    <SyncStreamLogo />
                </div>
                <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">SyncStream</h2>
            </div>
            <div className="flex flex-1 justify-end gap-2">
                <div className="flex items-center gap-4">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="text-gray-300 hover:text-white text-sm font-medium leading-normal px-4 py-2 rounded-md transition-colors">
                            {link.label}
                        </Link>
                    ))}
                </div>
                <button className="flex h-10 w-10 items-center justify-center rounded-full text-gray-300 hover:bg-[#233648] hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-2xl">help</span>
                </button>
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDDZoabNJj6kZBSrsTeKoCZUpXseesVu34sDjIye0mTnMYRI2NEEYx-jy6tJ5s0LR3n2vBCeJlB_K82JE8bCwbKA-lr8azD-TLZfR5mpSY7D4DlpoBJr9H_0ZgtioA_QMZvSlqmtDZ2ooZRxPqntGFJYLGY7m_69rmhcsF4j09yBpYNvS1SAKFm-ZfWjFItB0NXFkzr0NCbRENyu1SmnDgpycRoaT6lAjEhdNgRu-e83kjOaz5mg4yzzaZVp_kH8PZ3w8BzF42p3Ocw")'}}></div>
            </div>
      </header>
      <div className="flex-1 flex flex-col overflow-hidden">
        {children}
      </div>
    </div>
  );
}
