
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
  { href: '/dashboard', label: 'Dashboard', icon: 'dashboard' },
  { href: '/dashboard/orders', label: 'Connections', icon: 'link' },
  { href: '/dashboard/products', label: 'Syncs', icon: 'sync' },
  { href: '/dashboard/history', label: 'History', icon: 'history' },
  { href: '/dashboard/roles', label: 'Roles', icon: 'people' },
  { href: '/dashboard/users', label: 'Users', icon: 'group' },
  { href: '/dashboard/mapping', label: 'Mapping', icon: 'lan' },
  { href: '/dashboard/rules', label: 'rule' },
  { href: '/dashboard/logs', label: 'Logs', icon: 'assignment' },
  { href: '/dashboard/settings', label: 'Settings', icon: 'settings' },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen">
      <aside className="flex w-64 flex-col bg-slate-950 p-4">
        <div className="flex items-center gap-2 px-4 py-2">
          <SyncStreamLogo className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold text-white">SyncStream</h1>
        </div>
        <nav className="mt-8 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'flex items-center gap-3 rounded-md px-4 py-2 text-slate-400 hover:bg-slate-800 hover:text-white',
                pathname === link.href && 'bg-slate-800 font-semibold text-white'
              )}
            >
              <span className="material-symbols-outlined">{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>
        <div className="mt-auto">
          <a
            className="flex items-center gap-3 rounded-md px-4 py-2 text-slate-400 hover:bg-slate-800 hover:text-white"
            href="#"
          >
            <span className="material-symbols-outlined"> help_outline </span>
            <span>Support</span>
          </a>
          <div className="mt-4 flex items-center gap-3 border-t border-slate-800 pt-4">
            <Avatar>
              <AvatarImage
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_Nw1BEjOgPKVYS7N2EOYL_rgQGTY4itzdkKAeKlQT9UgwPvJ4UwPPAkJRxy3PzMXeRFbOIifJxz20S5lAk8qLdZCb9kA5Wgp4DmvXjlX3VTL8QFuBN0DKbauY8josNEBnqIaHUaQznQnLOUyqHEF9l1POMQHQ6TXLcr2CMp9-4xelVAP6kBF2oGxLkNeUYvqJzaxkveu2-3VvT877zW9sTpPsONnaLqzV682KVdWVXVM95FumiBdyUPYnGuLbcmMvIz10BnLr26Kl"
                alt="User avatar"
                data-ai-hint="person face"
              />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-white">John Doe</p>
              <p className="text-xs text-slate-400">john.doe@example.com</p>
            </div>
          </div>
        </div>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
