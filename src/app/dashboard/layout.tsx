
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SyncStreamLogo } from '@/components/syncstream-logo';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen text-white">
      <aside className="hidden lg:flex lg:flex-col lg:w-64 bg-gray-950/95 border-r border-white/5">
        <div className="flex flex-col flex-grow p-4 space-y-6">
        <Link className="flex items-center gap-3 px-2" href="/dashboard">
          <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAMqnkg9HzK4aAsdzMFUSRiGAGkWXyWxAinXHO-O7JkZvk7L5s9E2RRHyKlGbBYeDVkEftRUFz0lYMdwkKi9sLlyLnLk5MOikuMUwezkxR1nDF029lf40CITas_BCpj2dSSBTqjz5GkhT6qWWTQJtQP1JpRMHOvGa7fMI-aqUQJl_hl-JSPhL1ejLb4czhvtj_7r7qa2WwRvcwWsB8a-UnSNQ5q37-DJYIcJ9NuKCbTFS7kEhNsxbdRP7UBn4AxGtFbeY5pWcoA7UNg")',
              }}
            ></div>
          <h1 className="text-white text-lg font-semibold">SyncStream</h1>
          </Link>
        <nav className="flex-1 space-y-1">
          <Link
            className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-300 hover:bg-white/5 hover:text-white transition-colors duration-200"
            href="/dashboard"
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm font-medium">Home</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-300 hover:bg-white/5 hover:text-white transition-colors duration-200"
            href="/dashboard/integrations"
          >
            <span className="material-symbols-outlined">sync_alt</span>
            <span className="text-sm font-medium">Integrations</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-300 hover:bg-white/5 hover:text-white transition-colors duration-200"
            href="/dashboard/api-keys"
          >
            <span className="material-symbols-outlined">key</span>
            <span className="text-sm font-medium">API Keys</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-300 hover:bg-white/5 hover:text-white transition-colors duration-200"
            href="/dashboard/oauth-clients"
          >
            <span className="material-symbols-outlined">key</span>
            <span className="text-sm font-medium">OAuth Clients</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-300 hover:bg-white/5 hover:text-white transition-colors duration-200"
            href="/dashboard/workflows"
          >
            <span className="material-symbols-outlined">lan</span>
            <span className="text-sm font-medium">Workflows</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-300 hover:bg-white/5 hover:text-white transition-colors duration-200"
            href="/dashboard/webhooks"
          >
            <span className="material-symbols-outlined">webhook</span>
            <span className="text-sm font-medium">Webhooks</span>
          </Link>
           <Link
            className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-300 hover:bg-white/5 hover:text-white transition-colors duration-200"
            href="/dashboard/export-import"
          >
            <span className="material-symbols-outlined">import_export</span>
            <span className="text-sm font-medium">Export &amp; Import</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-300 hover:bg-white/5 hover:text-white transition-colors duration-200"
            href="/dashboard/notifications"
          >
            <span className="material-symbols-outlined">notifications</span>
            <span className="text-sm font-medium">Notifications</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-300 hover:bg-white/5 hover:text-white transition-colors duration-200"
            href="/dashboard/data"
          >
            <span className="material-symbols-outlined">database</span>
            <span className="text-sm font-medium">Data</span>
          </Link>
           <Link
            className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-300 hover:bg-white/5 hover:text-white transition-colors duration-200"
            href="/dashboard/whats-new"
          >
            <span className="material-symbols-outlined">new_releases</span>
            <span className="text-sm font-medium">What's New</span>
          </Link>
           <Link
            className="flex items-center gap-3 px-3 py-2 rounded-md bg-primary-500/10 text-primary-400"
            href="/dashboard/settings"
          >
            <span className="material-symbols-outlined">settings</span>
            <span className="text-sm font-medium">Settings</span>
          </Link>
        </nav>
        </div>
      </aside>
      <div className="flex-1 flex flex-col bg-gray-900">
        {children}
      </div>
    </div>
  );
}
