
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { SyncStreamLogo } from '@/components/syncstream-logo';

const navLinks = [
  { href: '/dashboard/health', label: 'Dashboard', icon: 'dashboard' },
  {
    href: '/dashboard/integrations',
    label: 'Integrations',
    icon: 'sync_alt',
  },
  { href: '/dashboard/logs', label: 'Logs', icon: 'description' },
  { href: '/dashboard/settings', label: 'Settings', icon: 'settings' },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <aside className="w-64 bg-[var(--surface)] flex flex-col border-r border-[var(--border)]">
        <div className="flex items-center gap-3 px-6 h-16 border-b border-[var(--border)]">
          <SyncStreamLogo className="h-8 w-8 text-[var(--primary)]" />
          <h1 className="text-xl font-bold">SyncStream</h1>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'flex items-center gap-3 px-4 py-2 rounded-md font-medium',
                pathname === link.href
                  ? 'bg-[var(--primary)] text-white font-semibold'
                  : 'text-[var(--text-secondary)] hover:bg-[var(--secondary)] hover:text-white'
              )}
            >
              <span className="material-symbols-outlined">{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="px-4 py-6 border-t border-[var(--border)]">
          <div className="flex items-center gap-3">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCN9QmutLH7f2DyliXRQ9L-FLEprNYdqobg30f327LBboIQn5LlcRKZpZab56_l4KjDNqgEcyHc248CKfvraM9-T4WI6nm44Qx00MuZo5xeAY6Tx2Xa08WanPwKJGTerNVHclws1Jb-4dgzxNrKWIp8ATD46_QQ9XKueN49F7KJ6qbH0xqRnVLP4dYyzZjbHv0T5kYRzL7epkn57p17zIqwKeL-c8OA5TuVFGfTVMRGHkK9SwC54p4lL7Q-cTansuoGYVrlDpvtHaQR")',
              }}
            ></div>
            <div>
              <p className="font-semibold">John Doe</p>
              <p className="text-sm text-[var(--text-secondary)]">
                Administrator
              </p>
            </div>
          </div>
        </div>
      </aside>
      <div className="flex flex-1 flex-col">
        <header className="sticky top-0 bg-[var(--background)]/80 backdrop-blur-md z-10 flex items-center justify-between h-16 px-8 border-b border-[var(--border)]">
          <h2 className="text-2xl font-bold">System Health Overview</h2>
          {pathname === '/dashboard/health' ? (
             <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-[var(--primary)] text-white font-semibold hover:bg-opacity-90 transition">
                    <span className="material-symbols-outlined">add_circle</span>
                    Add Widget
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-[var(--secondary)] text-[var(--text-primary)] font-semibold hover:bg-opacity-90 transition">
                    <span className="material-symbols-outlined">grid_view</span>
                    Customize Layout
                </button>
             </div>
          ) : (
            <div className="flex items-center gap-4">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]">
                  search
                </span>
                <input
                  className="bg-[var(--secondary)] border border-[var(--border)] rounded-md pl-10 pr-4 py-2 w-64 focus:ring-2 focus:ring-[var(--primary)] focus:outline-none transition"
                  placeholder="Search..."
                  type="text"
                />
              </div>
              <button className="relative p-2 rounded-full hover:bg-[var(--secondary)]">
                <span className="material-symbols-outlined text-[var(--text-secondary)]">
                  notifications
                </span>
                <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500"></span>
              </button>
            </div>
          )}
        </header>
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}