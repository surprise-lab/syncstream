
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
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/dashboard/integrations', label: 'Integrations', icon: FolderSync },
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

  const isUsersPage = pathname.startsWith('/dashboard/users');

  return (
    <div className="flex min-h-screen bg-surface-1">
      <aside className="flex w-64 flex-col items-center gap-y-6 bg-[#0D1117] p-6">
        <div className="flex items-center gap-2">
          <SyncStreamLogo className="h-8 w-8 text-white" />
          <h1 className="text-xl font-bold text-white">SyncStream</h1>
        </div>
        <nav className="flex flex-col gap-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'flex items-center gap-3 rounded-md px-3 py-2 text-[#9CA3AF] hover:bg-[#1F2937] hover:text-white',
                pathname.startsWith(link.href) && link.href !== '/dashboard' && 'bg-[#1F2937] text-white',
                pathname === link.href && 'bg-[#1F2937] text-white',
                link.label === 'Users' && isUsersPage && 'bg-[#1F2937] text-white',
              )}
            >
              <link.icon className="h-6 w-6" />
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>
        <div className="mt-auto flex flex-col items-center gap-y-4">
            <Avatar>
                <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOrMIGLGq1gHfK6DWQFC2dxhh-gaUuO46i6ij8KYwB_TmDtyZJnr3lHiVpgNMp5bF577b1m_pQDa2rpdTIAnzS-hJyK0OD34CQtp9INeW_YCbV6aTy2RmYzdlca1PkttN3qnYIOdJR-ZIbNL9mo8gc40eaTAaBFc8PicoxEoERcMwHInF6fT18ehieJGu3jJE3DjLbPZvoR41JEknQtrXmJXSY6dmHLRMOV46BpLuYqsHH72JUii-TUnszVBAmAXxcjww42oYwc-8I" />
                <AvatarFallback>U</AvatarFallback>
            </Avatar>
        </div>
      </aside>
      <div className="flex flex-1 flex-col">
        {children}
      </div>
    </div>
  );
}
