
'use client';

import {
  Bell,
  HelpCircle,
  Settings,
  Users,
  LayoutDashboard,
  FolderSync,
  Book,
} from 'lucide-react';
import Link from 'next/link';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { SyncStreamLogo } from '@/components/syncstream-logo';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/dashboard', label: 'Home', icon: 'home' },
  { href: '/dashboard/integrations', label: 'Integrations', icon: 'sync_alt' },
  { href: '#', label: 'Workflows', icon: 'lan' },
  { href: '#', label: 'Data Mapping', icon: 'map' },
  { href: '/dashboard/audit-log', label: 'Audit Log', icon: 'receipt_long' },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-surface-1">
      <aside className="w-64 flex-shrink-0 border-r border-gray-800 bg-gray-900">
        <div className="flex h-16 items-center justify-center border-b border-gray-800">
            <div className="flex items-center gap-3">
                <SyncStreamLogo className="h-8 w-8 text-primary-500" />
                <h2 className="text-xl font-bold">SyncStream</h2>
            </div>
        </div>
        <nav className="flex flex-col gap-2 p-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white',
                (pathname.startsWith(link.href) && link.href !== '/dashboard' && link.href !== '#') && 'bg-primary-800/20 text-primary-400'
              )}
            >
              <span className="material-symbols-outlined text-base">{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>
      </aside>
      <div className="flex flex-1 flex-col">
        <header className="flex h-16 items-center justify-between border-b border-gray-800 bg-gray-900 px-6">
            <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold">Audit Log</h1>
            </div>
            <div className="flex items-center gap-4">
                <button className="rounded-full p-2 text-gray-400 hover:bg-gray-800 hover:text-white">
                    <span className="material-symbols-outlined">help</span>
                </button>
                <button className="rounded-full p-2 text-gray-400 hover:bg-gray-800 hover:text-white">
                    <span className="material-symbols-outlined">notifications</span>
                </button>
                <div className="h-10 w-10 rounded-full bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAoqwLlHuHKE4qqoInIc-mMgqmZPzXErer8JY-Jk4tTq9Vb2fhxDnBgAqcrU-ITCAr0QoOnPhF7BNLXJ916YSAqhX1EZQMPSQrn7tOn-LB1qlcxbK_ztOaCAP56Ur4h5dFuMMycB5sIGbtcA7n19PpEPOQsRuvC1oRdOt7TRlCMktKYxtnN02CEZbs-s1jw80HTS9TXuHGAriKmdgzum7Zy2sL6qXC9H0YpDAcgKPxMoZjHlOoAMSwKeY1mwPH4YVe98Nya_fONlu6k")'}}></div>
            </div>
        </header>
        {children}
      </div>
    </div>
  );
}
