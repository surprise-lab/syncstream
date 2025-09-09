
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { SyncStreamLogo } from '@/components/syncstream-logo';

const navLinks = [
  { href: '/dashboard', label: 'Home'},
  { href: '/dashboard/integrations', label: 'Integrations'},
  { href: '#', label: 'Connections' },
  { href: '/dashboard/logs', label: 'Logs'},
  { href: '/dashboard/settings', label: 'Settings'},
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#0d1117] text-white">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-800 px-10 py-4">
            <div className="flex items-center gap-4">
                <SyncStreamLogo className="h-8 w-8 text-primary-400" />
                <h1 className="text-xl font-bold">SyncStream</h1>
            </div>
            <nav className="flex items-center gap-8 text-sm text-gray-400">
                {navLinks.map((link) => {
                    const isActive = pathname.startsWith(link.href);
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn('transition-colors hover:text-primary-400', isActive ? 'active-nav font-medium text-white' : '')}
                        >
                            {link.label}
                        </Link>
                    );
                })}
            </nav>
            <div className="flex items-center gap-4">
                <button className="relative rounded-full p-2 hover:bg-gray-800">
                    <span className="material-symbols-outlined text-gray-400"> notifications </span>
                    <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
                </button>
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-gray-700" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD-bRtiEYuU-PWxfYFNel_OsyCl9K0LgcPZg_RcIyPKgULGZLMmMz8Ss92Ui6JysZQsrCmaIC74OtOrIlpWXqGJJIsVJeOvbljiLVaFMmGBrOXPeBOmZ9y1MRkP9hyh9NgRwNst_fm--3bMCy1VCruBari8P4g-McW6Zmmz1bSuMYgro9Wxe-uWSEzyrg3TusoUxlCQ-ReuXEn5b7ijMP-XJtgSfN7hW0aiMbARIrAz9mbLnLrcZrvGzGr9i1vPn01KsxJr1INQmZjC")'}}></div>
            </div>
      </header>
      <div className="flex-1 flex flex-col overflow-hidden">
        {children}
      </div>
      <style jsx>{`
        .active-nav {
          color: var(--primary-400);
          position: relative;
        }
        .active-nav::after {
          content: '';
          position: absolute;
          bottom: -26px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: var(--primary-400);
        }
      `}</style>
    </div>
  );
}
