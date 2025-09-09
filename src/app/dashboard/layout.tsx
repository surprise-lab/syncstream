
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { SyncStreamLogo } from '@/components/syncstream-logo';

const navLinks = [
  { href: '/dashboard', label: 'Home', icon: 'home' },
  { href: '/dashboard/integrations', label: 'Integrations', icon: 'sync_alt' },
  { href: '/dashboard/logs', label: 'Logs', icon: 'description' },
  { href: '/dashboard/audit-log', label: 'Audit Log', icon: 'receipt_long' },
  { href: '/dashboard/settings', label: 'Settings', icon: 'settings' },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-[#0D151C] text-white">
      <aside className="sticky top-0 flex h-screen w-64 flex-col bg-[#111A22] p-4">
        <div className="flex items-center gap-2 px-3 py-2">
            <SyncStreamLogo className="h-8 w-8 text-primary" />
            <h1 className="text-xl font-bold leading-normal">SyncStream</h1>
        </div>
        <nav className="mt-8 flex flex-col gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/dashboard');
            if (link.href === '/dashboard' && pathname !== '/dashboard') {
              // special case for home
            } else if (pathname.startsWith(link.href) && link.href !== '/dashboard') {
            }


            return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'flex items-center gap-3 rounded-md px-3 py-2 text-gray-300 hover:bg-[#1A2530]',
                (pathname === link.href || (pathname === '/dashboard/health' && link.href === '/dashboard'))
                  ? 'bg-[#1A2530] text-white'
                  : 'text-gray-300 hover:bg-[#1A2530]',
                (pathname.startsWith(link.href) && link.href !== '/dashboard' || link.href === '/dashboard/settings' && pathname.startsWith('/dashboard/settings')) ? 'bg-primary-800/20 text-primary-400' : ''
              )}
            >
              <span className="material-symbols-outlined">{link.icon}</span>
              <span className="text-sm font-medium">{link.label}</span>
            </Link>
          )})}
        </nav>
        <div className="mt-auto">
            <div className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-300 hover:bg-[#1A2530]">
                <span className="material-symbols-outlined">logout</span>
                <span className="text-sm font-medium">Logout</span>
            </div>
        </div>
      </aside>
      <div className="flex-1 flex flex-col overflow-hidden">
        {children}
      </div>
    </div>
  );
}
