
import {
  Bell,
  HelpCircle,
  LayoutDashboard,
  Package,
  Settings,
  Users,
  FileText,
  GitBranch,
  ListOrdered,
  Users2,
  ListTodo,
} from 'lucide-react';

import Link from 'next/link';
import {Button} from '@/components/ui/button';
import {Avatar, AvatarImage, AvatarFallback} from '@/components/ui/avatar';
import { NavLink } from '@/components/layout/nav-link';
import { SyncStreamLogo } from '@/components/syncstream-logo';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex size-full min-h-screen flex-col group/design-root bg-gray-100">
      <div className="layout-container flex h-full grow flex-col">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-gray-200 bg-white px-10 py-3">
          <div className="flex items-center gap-4 text-gray-800">
            <div className="size-6 text-primary-500">
            <SyncStreamLogo />
            </div>
            <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] text-gray-800">Connect</h2>
          </div>
          <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
            <NavLink href="/dashboard">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </NavLink>
            <NavLink href="/dashboard/orders">
              <ListOrdered className="mr-2 h-4 w-4" />
              Orders
            </NavLink>
            <NavLink href="/dashboard/products">
              <Package className="mr-2 h-4 w-4" />
              Products
            </NavLink>
            <NavLink href="/dashboard/users">
              <Users2 className="mr-2 h-4 w-4" />
              Users
            </NavLink>
            <NavLink href="/dashboard/roles">
              <Users className="mr-2 h-4 w-4" />
              Roles
            </NavLink>
            <NavLink href="/dashboard/mapping">
              <GitBranch className="mr-2 h-4 w-4" />
              Mapping
            </NavLink>
            <NavLink href="/dashboard/rules">
              <ListTodo className="mr-2 h-4 w-4" />
              Rules
            </NavLink>
            <NavLink href="/dashboard/logs">
              <FileText className="mr-2 h-4 w-4" />
              Logs
            </NavLink>
            <NavLink href="/dashboard/settings">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </NavLink>
          </nav>
          <div className="flex items-center gap-4">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-900">
              <HelpCircle className="text-2xl" />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-900">
              <Bell className="text-2xl" />
            </button>
            <Avatar>
              <AvatarImage
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW2ZS6vdHnjcDZetC8BPIoRU3UlQP76J6iwF5zEeQQMfataRNBIG8P9KRfvlNMvsAmKbvWr11SX2AcMTae_bLNrYJzSjk8RExTXFif5CwNFeuMzxibmsp7pa_ULkrq395Kapz-0EUIuqLjwtwaMD70wpm3Zhqw0q6ITGWESvq7PfryDmstC89M60fwYJoVw_zxerHnQ3O90iejzNskUuudk0ciMR0fT0715qfPFT1-oP0iXfactUklEoANWs6afzwclByhtOjwNtw"
                alt="User avatar"
                data-ai-hint="person face"
              />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
