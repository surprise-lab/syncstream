
'use client';

import {
  Bell,
  HelpCircle,
  Settings,
  History,
  Home,
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
  { href: '/dashboard', label: 'Home', icon: Home },
  { href: '/dashboard/integrations', label: 'Integrations', icon: LinkIcon },
  { href: '/dashboard/flows', label: 'Flows', icon: Network },
  { href: '/dashboard/connections', label: 'Connections', icon: Cable },
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
    <div className="flex min-h-screen bg-neutral-900">
      <aside className="flex w-64 flex-col bg-neutral-950/50">
        <div className="flex h-16 items-center gap-3 px-6">
          <div className="w-8 h-8 flex items-center justify-center text-white bg-primary rounded-md">
            <Sync className="text-xl" />
          </div>
          <h1 className="text-xl font-bold text-white">SyncStream</h1>
        </div>
        <nav className="flex-1 space-y-2 px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-neutral-300 hover:bg-neutral-800 hover:text-white',
                pathname.startsWith(link.href) && link.href !== '/dashboard' && 'bg-primary/10 text-primary font-semibold',
                pathname === link.href && 'bg-primary/10 text-primary font-semibold'
              )}
            >
              <link.icon className="text-base" />
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>
        <div className="border-t border-neutral-800 p-4">
            {bottomNavLinks.map((link) => (
                <Link
                key={link.href}
                href={link.href}
                className={cn(
                    'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-neutral-300 hover:bg-neutral-800 hover:text-white',
                    pathname === link.href && 'bg-primary/10 text-primary font-semibold'
                )}
                >
                <link.icon className="text-base" />
                <span>{link.label}</span>
                </Link>
            ))}
        </div>
      </aside>
      <main className="flex-1">
        <header className="flex h-16 items-center justify-end border-b border-neutral-800 bg-neutral-900 px-6">
            <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="flex items-center justify-center rounded-full text-neutral-400 hover:bg-neutral-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-neutral-900">
                <Search className="h-10 w-10 p-2" />
            </Button>
            <Button variant="ghost" size="icon" className="flex items-center justify-center rounded-full text-neutral-400 hover:bg-neutral-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-neutral-900">
                <Bell className="h-10 w-10 p-2" />
            </Button>
            <Avatar>
                <AvatarImage
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuqFQMEAE0FPI6D10EDWfuGprnts2peqhFk5R_YWlmbY94Pojl910su2N1HYqzCjGuBadxr1VtTqDzBP9ggGgbtFUJoi3C_6DnT6rOauyyNERMJgFsuYjhzmKlwj-t2jftniICef97_6j9soYTgBXljiNqy8GLWvFLMxJ7kz7CHBEKRhyxQWeJX7--Cv1NUM-nAvY1ziGk7FTunOlQpyykfb96hkFyTfxicB3Ns40CNXaSHWhrARCx6uOg2dUVyUIrHtiiP6IBNCFa"
                    alt="User avatar"
                    data-ai-hint="person face"
                />
                <AvatarFallback>U</AvatarFallback>
            </Avatar>
            </div>
        </header>
        {children}
      </main>
    </div>
  );
}
