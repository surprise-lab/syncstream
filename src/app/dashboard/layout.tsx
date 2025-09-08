
'use client';

import {
  Bell,
  HelpCircle,
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
  LayoutDashboard,
  Webhook,
  Activity,
  Book,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { SyncStreamLogo } from '@/components/syncstream-logo';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/dashboard/orders', label: 'Integrations', icon: Webhook },
  { href: '/dashboard/history', label: 'Activity', icon: Activity },
  { href: '/dashboard/docs', label: 'Docs', icon: Book },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-[#111a22]">
      <aside className="flex w-64 flex-col bg-[#0d151c] text-gray-300">
        <div className="flex h-16 items-center gap-3 border-b border-gray-800 px-6">
          <SyncStreamLogo className="size-6 text-blue-500" />
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-white">
            SyncStream
          </h2>
        </div>
        <nav className="flex-1 space-y-2 p-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'flex items-center gap-3 rounded-md px-4 py-2 transition-colors',
                pathname.startsWith(link.href) && link.href !== '/dashboard' || pathname === link.href
                  ? 'bg-blue-600 font-medium text-white'
                  : 'hover:bg-[#233648]'
              )}
            >
              <link.icon className="text-lg" />
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>
        <div className="p-4">
        <a className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-[#233648] transition-colors" href="#">
            <HelpCircle className="text-lg" />
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
