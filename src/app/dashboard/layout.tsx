
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
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { NavLink } from '@/components/layout/nav-link';
import { SyncStreamLogo } from '@/components/syncstream-logo';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from '@/components/ui/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="relative flex size-full min-h-screen flex-col group/design-root bg-slate-900">
        <Sidebar className="flex flex-col bg-slate-950 p-4">
          <SidebarHeader>
            <div className="flex items-center gap-2 px-4 py-2">
              <SyncStreamLogo className="h-6 w-6 text-primary-500" />
              <h1 className="text-xl font-bold text-white">SyncStream</h1>
            </div>
          </SidebarHeader>

          <SidebarContent className="mt-8">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard">
                    <LayoutDashboard />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/orders">
                    <ListOrdered />
                    <span>Connections</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/products">
                    <Power />
                    <span>Syncs</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/history">
                    <History />
                    <span>History</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>

          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <HelpCircle />
                    <span>Support</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
            <div className="mt-4 flex items-center gap-3 border-t border-slate-800 pt-4">
              <Avatar>
                <AvatarImage
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW2ZS6vdHnjcDZetC8BPIoRU3UlQP76J6iwF5zEeQQMfataRNBIG8P9KRfvlNMvsAmKbvWr11SX2AcMTae_bLNrYJzSjk8RExTXFif5CwNFeuMzxibmsp7pa_ULkrq395Kapz-0EUIuqLjwtwaMD70wpm3Zhqw0q6ITGWESvq7PfryDmstC89M60fwYJoVw_zxerHnQ3O90iejzNskUuudk0ciMR0fT0715qfPFT1-oP0iXfactUklEoANWs6afzwclByhtOjwNtw"
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
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1">
          <header className="flex items-center justify-end whitespace-nowrap p-4 gap-4 md:hidden">
            <SidebarTrigger />
          </header>
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
