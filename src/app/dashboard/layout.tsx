
'use client';

import {
  Bell,
  HelpCircle,
  Settings,
  Users,
  Home,
  Link as LinkIcon,
  Power,
  ChevronDown,
  GitBranch,
  FileText,
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
  FileClock,
  BookCopy,
  FolderSync,
  Cable,
  Network,
  Search,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { SyncStreamLogo } from '@/components/syncstream-logo';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/dashboard', label: 'Dashboard', icon: Home },
  { href: '/dashboard/integrations', label: 'Integrations', icon: LinkIcon },
  { href: '/dashboard/users', label: 'Users', icon: Users },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
];

const bottomNavLinks = [
    { href: '/dashboard/docs', label: 'Docs', icon: Book },
    { href: '/dashboard/help', label: 'Help', icon: HelpCircle },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-surface-1">
      <aside className="flex w-64 flex-col bg-surface-2 border-r border-surface-3">
        <div className="flex h-16 items-center gap-3 px-6">
          <SyncStreamLogo className="h-8 w-8 text-brand-primary" />
          <h1 className="text-xl font-bold text-white">SyncStream</h1>
        </div>
        <nav className="flex-1 space-y-2 px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-text-2 hover:bg-surface-3 hover:text-white',
                pathname.startsWith(link.href) && 'bg-brand-primary/10 text-brand-primary font-semibold',
                pathname === '/dashboard' && link.href === '/dashboard' && 'bg-brand-primary/10 text-brand-primary font-semibold',
                 pathname !== '/dashboard' && link.href !== '/dashboard' && pathname.startsWith(link.href) && 'bg-brand-primary/10 text-brand-primary font-semibold'
              )}
            >
              <link.icon className="h-5 w-5" />
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>
      </aside>
      <div className="flex flex-1 flex-col">
        <header className="sticky top-0 z-10 flex items-center justify-between border-b border-surface-3 bg-surface-2/80 px-6 py-3 backdrop-blur-lg">
            <div/>
            <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="flex items-center justify-center rounded-full text-text-2 hover:bg-surface-3 hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-surface-1">
                <Bell className="h-10 w-10 p-2" />
            </Button>
            <div className="relative">
                <button className="flex items-center gap-2">
                    <img alt="User avatar" className="size-9 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyucO3zsI2PVFz-E0bJyk4YkYWtWviVdJZPaaKweSoARrYZkD6bqVh-aj6-mpXPUOSIXZVTJRUwhPQ9E3E5VoyWnP4GE9163As_aitYxKVc01p-sAwYPbYtxhrTedZzzICJMJo-7Uq41RqHUrWEc-uK4JmzcHON_Q7zdDjY3OnzcpsJOo11uHXc6uJQ4pNmCQ8kni6ZNZbjCmbuhzguN33wTWWzVgCcd-2Rl1GLIdqP_h0ERMYQygDQsmCmO5jGyLNqh87fWSHMcqa"/>
                    <div className="hidden text-left lg:block">
                        <p className="text-sm font-semibold text-white">Admin User</p>
                        <p className="text-xs text-text-3">admin@syncstream.io</p>
                    </div>
                </button>
            </div>
            </div>
        </header>
        <main className="flex-1">
            {children}
        </main>
      </div>
    </div>
  );
}
