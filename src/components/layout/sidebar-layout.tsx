'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Settings,
  History,
  Users,
  LogOut,
  AlertTriangle,
} from 'lucide-react';
import { SyncStreamLogo } from '@/components/syncstream-logo';
import { cn } from '@/lib/utils';
import { Header } from './header';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/dashboard/sync-history', label: 'Sync History', icon: History },
  { href: '/dashboard/alerts', label: 'Alerts', icon: AlertTriangle },
  { href: '/dashboard/users', label: 'Users', icon: Users },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
];

function NavLink({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label:string;
  icon: React.ElementType;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors',
        isActive
          ? 'bg-gray-800 text-white font-semibold'
          : 'text-gray-300 hover:bg-gray-800'
      )}
    >
      <Icon className="size-5" />
      <span>{label}</span>
    </Link>
  );
}

export function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      <aside className="w-64 bg-gray-950 p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-10">
            <SyncStreamLogo className="size-8 text-primary-500" />
            <h1 className="text-xl font-bold text-white">SyncStream</h1>
          </div>
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                icon={item.icon}
              />
            ))}
          </nav>
        </div>
        <div>
          <a className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800 text-gray-300" href="#">
            <LogOut className="size-5" />
            Logout
          </a>
        </div>
      </aside>
      <div className="flex-1 flex flex-col">
        <Header />
        {children}
      </div>
    </div>
  );
}
