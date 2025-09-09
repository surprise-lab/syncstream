
import Link from 'next/link';
import { SyncStreamLogo } from '@/components/syncstream-logo';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="w-64 flex-shrink-0 bg-[var(--background-secondary)] p-6 flex flex-col justify-between">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <SyncStreamLogo className="text-[var(--primary-color)] h-6 w-6" />
            <h1 className="text-white text-xl font-bold">SyncStream</h1>
          </div>
          <nav className="flex flex-col gap-2">
            <Link
              className="flex items-center gap-3 px-4 py-2.5 rounded-md bg-[var(--background-tertiary)] text-white font-medium"
              href="/dashboard"
            >
              <span className="material-symbols-outlined">dashboard</span>
              <span>Dashboard</span>
            </Link>
            <Link
              className="flex items-center gap-3 px-4 py-2.5 rounded-md text-[var(--text-secondary)] hover:bg-[var(--background-tertiary)] hover:text-white transition-colors duration-200"
              href="/dashboard/integrations"
            >
              <span className="material-symbols-outlined">extension</span>
              <span>Integrations</span>
            </Link>
            <Link
              className="flex items-center gap-3 px-4 py-2.5 rounded-md text-[var(--text-secondary)] hover:bg-[var(--background-tertiary)] hover:text-white transition-colors duration-200"
              href="/dashboard/connections"
            >
              <span className="material-symbols-outlined">power</span>
              <span>Connections</span>
            </Link>
            <Link
              className="flex items-center gap-3 px-4 py-2.5 rounded-md text-[var(--text-secondary)] hover:bg-[var(--background-tertiary)] hover:text-white transition-colors duration-200"
              href="/dashboard/logs"
            >
              <span className="material-symbols-outlined">description</span>
              <span>Logs</span>
            </Link>
            <Link
              className="flex items-center gap-3 px-4 py-2.5 rounded-md text-[var(--text-secondary)] hover:bg-[var(--background-tertiary)] hover:text-white transition-colors duration-200"
              href="/dashboard/settings"
            >
              <span className="material-symbols-outlined">settings</span>
              <span>Settings</span>
            </Link>
          </nav>
        </div>
        <div className="flex flex-col gap-2">
          <a
            className="flex items-center gap-3 px-4 py-2.5 rounded-md text-[var(--text-secondary)] hover:bg-[var(--background-tertiary)] hover:text-white transition-colors duration-200"
            href="#"
          >
            <span className="material-symbols-outlined">help</span>
            <span>Help</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-2.5 rounded-md text-[var(--text-secondary)] hover:bg-[var(--background-tertiary)] hover:text-white transition-colors duration-200"
            href="#"
          >
            <span className="material-symbols-outlined">group_add</span>
            <span>Invite team</span>
          </a>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-[var(--border-color)] px-10 py-4">
          <div className="flex items-center gap-4">
            <h2 className="text-white text-2xl font-bold">Dashboard</h2>
          </div>
          <div className="flex items-center gap-6">
            <button className="text-[var(--text-secondary)] hover:text-white transition-colors duration-200">
              <span className="material-symbols-outlined text-2xl relative">
                notifications
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-[var(--primary-color)]"></span>
              </span>
            </button>
            <div className="flex items-center gap-3">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAcZ8OzvpXf93NrpdaGY89WrEz7MrvUO1QoK3QQV1wQcz5vhPkM2ERgIsNNZJblc1tgEhMaDMrqJEE35h58i3jzlwk-DcguaNBsIbjUSlov69cvQXUmt0XJYXvvw0hQhk2Rj6J765V9b9411e3oLvAXDcu2MeXHZsAu7sUYXKruccQ3CXCmN0ff8lLISXO2IHDmWOOPY_mdPB0gNbEE6ANgMLjlnxd5BWSKUEMCnZANnrzLq-FaSW0rszrKhAFvctQEQtXSg9coGnb")',
                }}
              ></div>
              <div>
                <p className="text-white font-semibold">Alex Hartman</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  alex@syncstream.io
                </p>
              </div>
            </div>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}
