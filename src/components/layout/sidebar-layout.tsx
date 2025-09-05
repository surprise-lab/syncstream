
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  Settings,
  ListOrdered,
  FileText,
  Plug,
  Users,
  Receipt,
  Package,
} from 'lucide-react';
import { ConnectrLogo } from '@/components/connectr-logo';
import { Header } from './header';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: Home },
  { href: '/dashboard/orders', label: 'Orders', icon: Receipt },
  { href: '/dashboard/products', label: 'Products', icon: Package },
  { href: '/dashboard/mapping', label: 'Mapping', icon: Plug },
  { href: '/dashboard/rules', label: 'Rules', icon: ListOrdered },
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
  label:string;
  icon: React.ElementType;
}) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
        isActive
          ? 'bg-primary/20 text-primary'
          : 'text-gray-300 hover:bg-gray-700'
      )}
    >
      <Icon className="size-5" />
      <span>{label}</span>
    </Link>
  );
}

export function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-900">
      <aside className="w-64 flex-shrink-0 bg-gray-800 p-4">
        <div className="flex h-full flex-col">
          <div className="mb-10 flex items-center gap-2 px-3">
            <h1 className="text-xl font-bold text-white">Takealot-Xero</h1>
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
        {children}
      </div>
    </div>
  );
}
