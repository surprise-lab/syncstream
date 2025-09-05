
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import {
  Home,
  Settings,
  ListBullets,
  FileText,
  Plug,
} from 'lucide-react';
import { ConnectrLogo } from '@/components/connectr-logo';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Bell } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Header } from './header';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: Home },
  { href: '/dashboard/connections', label: 'Connections', icon: Plug },
  { href: '/dashboard/rules', label: 'Rules', icon: ListBullets },
  { href: '/dashboard/logs', label: 'Logs', icon: FileText },
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
    <Link href={href} legacyBehavior passHref>
      <SidebarMenuButton
        asChild
        isActive={isActive}
        className={cn(
          'rounded-full',
          isActive
            ? 'bg-primary/10 text-primary'
            : 'text-muted-foreground hover:bg-primary/10 hover:text-primary'
        )}
      >
        <a>
          <Icon className="size-5" />
          <span>{label}</span>
        </a>
      </SidebarMenuButton>
    </Link>
  );
}

export function SidebarLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
  return (
    <SidebarProvider>
        <Sidebar>
          <SidebarContent className="p-4 flex flex-col">
            <div className="flex items-center gap-2 mb-10">
              <ConnectrLogo className="size-6 text-primary" />
              <span className="text-white font-bold text-lg">Connectr</span>
            </div>
            <nav className="flex flex-col gap-2">
              <NavLink href="/dashboard" label="Dashboard" icon={Home} />
              <NavLink href="/dashboard/mapping" label="Mapping" icon={Plug} />
              <NavLink href="/dashboard/rules" label="Rules" icon={ListBullets} />
              <NavLink href="/dashboard/logs" label="Logs" icon={FileText} />
              <NavLink href="/dashboard/settings" label="Settings" icon={Settings} />
            </nav>
          </SidebarContent>
        </Sidebar>
      <div className="flex-1 flex flex-col">
        <Header />
        {children}
      </div>
    </SidebarProvider>
  );
}
