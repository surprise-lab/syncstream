
import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen text-white bg-[#111A22]">
      <aside className="flex w-64 flex-col gap-y-6 border-r border-slate-800 bg-[#0d151c] p-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-[#1173d4]"></div>
          <h1 className="text-xl font-bold text-white">SyncStream</h1>
        </div>
        <nav className="mt-10 flex flex-col gap-4">
          <Link
            className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-300 hover:bg-[#1173d4]/20 hover:text-white"
            href="/dashboard"
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm font-medium">Home</span>
          </Link>
          <Link
            className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-300 hover:bg-[#1173d4]/20 hover:text-white"
            href="/dashboard/integrations"
          >
            <span className="material-symbols-outlined">sync_alt</span>
            <span className="text-sm font-medium">Integrations</span>
          </Link>
          <Link
            className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-300 hover:bg-[#1173d4]/20 hover:text-white"
            href="/dashboard/api-keys"
          >
            <span className="material-symbols-outlined">key</span>
            <span className="text-sm font-medium">API Keys</span>
          </Link>
          <Link
            className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-300 hover:bg-[#1173d4]/20 hover:text-white"
            href="/dashboard/oauth-clients"
          >
            <span className="material-symbols-outlined">key</span>
            <span className="text-sm font-medium">OAuth Clients</span>
          </Link>
          <Link
            className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-300 hover:bg-[#1173d4]/20 hover:text-white"
            href="/dashboard/workflows"
          >
            <span className="material-symbols-outlined">lan</span>
            <span className="text-sm font-medium">Workflows</span>
          </Link>
          <Link
            className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-300 hover:bg-[#1173d4]/20 hover:text-white"
            href="/dashboard/webhooks"
          >
            <span className="material-symbols-outlined">webhook</span>
            <span className="text-sm font-medium">Webhooks</span>
          </Link>
           <Link
            className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-300 hover:bg-[#1173d4]/20 hover:text-white"
            href="/dashboard/export-import"
          >
            <span className="material-symbols-outlined">import_export</span>
            <span className="text-sm font-medium">Export &amp; Import</span>
          </Link>
          <Link
            className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-300 hover:bg-[#1173d4]/20 hover:text-white"
            href="/dashboard/notifications"
          >
            <span className="material-symbols-outlined">notifications</span>
            <span className="text-sm font-medium">Notifications</span>
          </Link>
          <Link
            className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-300 hover:bg-[#1173d4]/20 hover:text-white"
            href="/dashboard/data"
          >
            <span className="material-symbols-outlined">database</span>
            <span className="text-sm font-medium">Data</span>
          </Link>
           <Link
            className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-300 hover:bg-[#1173d4]/20 hover:text-white"
            href="/dashboard/whats-new"
          >
            <span className="material-symbols-outlined">new_releases</span>
            <span className="text-sm font-medium">What's New</span>
          </Link>
           <Link
            className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-300 hover:bg-[#1173d4]/20 hover:text-white"
            href="/dashboard/settings"
          >
            <span className="material-symbols-outlined">settings</span>
            <span className="text-sm font-medium">Settings</span>
          </Link>
        </nav>
      </aside>
      <div className="flex-1 flex flex-col">
        {children}
      </div>
    </div>
  );
}
