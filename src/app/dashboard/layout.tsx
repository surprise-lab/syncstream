
'use client';

import {
  Bell,
  HelpCircle,
  Settings,
  Users,
  LayoutDashboard,
  FolderSync,
  Book,
} from 'lucide-react';
import Link from 'next/link';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { SyncStreamLogo } from '@/components/syncstream-logo';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/dashboard/integrations', label: 'Integrations', icon: FolderSync },
  { href: '/dashboard/users', label: 'Users', icon: Users },
  { href: '/dashboard/audit-log', label: 'Audit Log', icon: Book },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
];

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
                (pathname.startsWith(link.href) && link.href !== '/dashboard' || pathname === link.href) && 'bg-[#1F2937] text-white',
              )}
            >
              <link.icon className="h-6 w-6" />
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>
        <div className="mt-auto flex flex-col items-center gap-y-4">
          <Link href="#" className="flex items-center gap-3 rounded-md px-4 py-2 text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white">
            <HelpCircle className="h-6 w-6" />
            <span>Support</span>
          </Link>
          <div className="flex items-center gap-3 border-t border-slate-800 pt-4">
            <Avatar>
                <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuC--MijKFOJkTHMOI3iAq2_tCn9FnrIzsq7IIRZeRWi7Nqn2jApEZAs3Xt4ovU5x5kRe_afhSIS47peugOhaqpnNQyLn15vCUdN0YDafEMGqTBeVNc5V8PpiKMtEf1F40UicESiGPBN0W205pptOxwhJ1EQ_4Qj0IQF5OloFFGA-T-Ex8TH03Qfdd8Y37Ckus1O6APKW4AtKXkjKOC3dvit9unaOh4kjuyWJhBSwvTeUMxhlOKRC87uqJWKPis5YhZwWtfGPOfdZ5HU" />
                <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-white">Admin User</p>
              <a className="text-xs text-slate-400 hover:text-primary-color" href="#">Log out</a>
            </div>
          </div>
        </div>
      </aside>
      <div className="flex flex-1 flex-col">
        {children}
      </div>
    </div>
  );
}
