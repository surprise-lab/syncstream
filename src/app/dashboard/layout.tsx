
'use client';

import {
  Bell,
  HelpCircle,
  LayoutDashboard,
  Settings,
  History,
  Link as LinkIcon,
  Power,
  ChevronDown,
  GitBranch,
  FileText,
  Users,
  Package,
  ListOrdered,
  Users2,
  GitCommitHorizontal,
  FileUp,
  FileDown,
  Trash2,
  ArrowUpDown,
  Filter,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { SyncStreamLogo } from '@/components/syncstream-logo';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/dashboard', label: 'Home', icon: 'home' },
  { href: '/dashboard/orders', label: 'Connections', icon: 'link' },
  { href: '/dashboard/products', label: 'Syncs', icon: 'sync' },
  { href: '/dashboard/logs', label: 'Alerts', icon: 'notifications' },
  { href: '/dashboard/history', label: 'History', icon: 'history' },
  { href: '/dashboard/roles', label: 'Roles', icon: 'people' },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-[#0f172a]">
      <aside className="flex w-64 flex-col bg-[#1e293b]/50 p-4">
        <div className="flex items-center gap-3 px-3 py-2 text-white">
          <SyncStreamLogo className="h-8 w-8 text-primary" />
          <h1 className="text-xl font-bold text-white">SyncStream</h1>
        </div>
        <nav className="mt-8 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'flex items-center gap-3 rounded-md px-3 py-2 text-gray-400 hover:bg-[#334155] hover:text-white',
                pathname === link.href && 'bg-[#334155] font-semibold text-white'
              )}
            >
              <span className="material-symbols-outlined">{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>
        <div className="mt-auto">
          <a
            className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-400 hover:bg-[#334155] hover:text-white"
            href="#"
          >
            <span className="material-symbols-outlined"> help_outline </span>
            <span>Help</span>
          </a>
          <div className="mt-4 flex items-center gap-3 border-t border-slate-700 pt-4">
            <Avatar>
              <AvatarImage
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNn8AzsAXXl3PrYkFDhi90RO-nB9C4lOJnkavr1DI21d2M_Oct1OZFWxsG3y7UooInmTgMlclU_jlJEYmhpcmcz1WAeANFyiFOm4Nb5Za45mnY98aBy1JSPrRRiKsC82VlNF7Pv6OVo5Xur-oAXKrtAZElKJZ64rsb0oCzgV7mSts064fP9NAfGMl9EA1DU-Gq2TDZXPYZOJa8UxsXQguUCdK26L6d1OliE58J49Kf5_HF1u7peu4Svfis703dvuJZjW-ZnCpmOhX3"
                alt="User avatar"
                data-ai-hint="person face"
              />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="font-medium text-white">John Doe</span>
              <span className="text-sm text-gray-400">john.doe@example.com</span>
            </div>
          </div>
        </div>
      </aside>
      <main className="flex-1 overflow-auto custom-scrollbar">{children}</main>
    </div>
  );
}
