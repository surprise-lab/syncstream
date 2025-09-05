
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  Settings,
  ListBullets,
  FileText,
  Plug,
  Users,
} from 'lucide-react';
import { ConnectrLogo } from '@/components/connectr-logo';
import { Header } from './header';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: Home },
  { href: '/dashboard/mapping', label: 'Mapping', icon: Plug },
  { href: '/dashboard/rules', label: 'Rules', icon: ListBullets },
  { href: '/dashboard/logs', label: 'Logs', icon: FileText },
  { href: '/dashboard/users', label: 'Users', icon: Users },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
];

function NavLink({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: React.ElementType;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-3 rounded-full px-4 py-2 text-sm font-medium transition-colors',
        isActive
          ? 'bg-primary/10 text-primary'
          : 'text-muted-foreground hover:bg-primary/10 hover:text-primary'
      )}
    >
      <Icon className="size-5" />
      <span>{label}</span>
    </Link>
  );
}

export function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 flex-shrink-0 bg-card p-4">
        <div className="flex h-full flex-col">
          <div className="mb-10 flex items-center gap-2">
            <ConnectrLogo className="size-6 text-primary" />
            <span className="text-lg font-bold text-white">SyncStream</span>
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
      </aside>
      <div className="flex flex-1 flex-col">
        <Header />
        {children}
      </div>
    </div>
  );
}
