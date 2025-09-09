
import Link from 'next/link';
import { SyncStreamLogo } from '@/components/syncstream-logo';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="w-64 flex-shrink-0 bg-[#111a22] border-r border-gray-800 p-4 flex flex-col">
        <div className="flex items-center gap-2 mb-8">
          <SyncStreamLogo className="h-8 w-8 text-[#1173d4]" />
          <h1 className="text-white text-xl font-bold leading-normal">
            SyncStream
          </h1>
        </div>
        <nav className="flex flex-col gap-2 overflow-y-auto custom-scrollbar">
          <Link
            className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:bg-[#233648] hover:text-white rounded-md"
            href="/dashboard"
          >
            <span className="material-symbols-outlined">dashboard</span>
            <p className="text-sm font-medium leading-normal">Dashboard</p>
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:bg-[#233648] hover:text-white rounded-md"
            href="/dashboard/integrations"
          >
            <span className="material-symbols-outlined">extension</span>
            <p className="text-sm font-medium leading-normal">Integrations</p>
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:bg-[#233648] hover:text-white rounded-md"
            href="/dashboard/jobs"
          >
            <span className="material-symbols-outlined">schedule</span>
            <p className="text-sm font-medium leading-normal">Jobs</p>
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:bg-[#233648] hover:text-white rounded-md"
            href="/dashboard/connections"
          >
            <span className="material-symbols-outlined">power</span>
            <p className="text-sm font-medium leading-normal">Connections</p>
          </Link>
           <Link
            className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:bg-[#233648] hover:text-white rounded-md"
            href="/dashboard/mapping"
          >
            <span className="material-symbols-outlined">mediation</span>
            <p className="text-sm font-medium leading-normal">Mapping</p>
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:bg-[#233648] hover:text-white rounded-md"
            href="/dashboard/monitoring"
          >
            <span className="material-symbols-outlined">monitoring</span>
            <p className="text-sm font-medium leading-normal">Monitoring</p>
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:bg-[#233648] hover:text-white rounded-md"
            href="/dashboard/environments"
          >
            <span className="material-symbols-outlined">fact_check</span>
            <p className="text-sm font-medium leading-normal">Environments</p>
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:bg-[#233648] hover:text-white rounded-md"
            href="/dashboard/tickets"
          >
            <span className="material-symbols-outlined">confirmation_number</span>
            <p className="text-sm font-medium leading-normal">Tickets</p>
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:bg-[#233648] hover:text-white rounded-md"
            href="/dashboard/audit-log"
          >
            <span className="material-symbols-outlined">list_alt</span>
            <p className="text-sm font-medium leading-normal">Audit Log</p>
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:bg-[#233648] hover:text-white rounded-md"
            href="/dashboard/performance"
          >
            <span className="material-symbols-outlined">speed</span>
            <p className="text-sm font-medium leading-normal">Performance</p>
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:bg-[#233648] hover:text-white rounded-md"
            href="/dashboard/alerts"
          >
            <span className="material-symbols-outlined">campaign</span>
            <p className="text-sm font-medium leading-normal">Alerts</p>
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:bg-[#233648] hover:text-white rounded-md"
            href="/dashboard/permissions"
          >
            <span className="material-symbols-outlined">security</span>
            <p className="text-sm font-medium leading-normal">Permissions</p>
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:bg-[#233648] hover:text-white rounded-md"
            href="/dashboard/resources"
          >
            <span className="material-symbols-outlined">memory</span>
            <p className="text-sm font-medium leading-normal">Resources</p>
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:bg-[#233648] hover:text-white rounded-md"
            href="/dashboard/docs"
          >
            <span className="material-symbols-outlined">description</span>
            <p className="text-sm font-medium leading-normal">Docs</p>
          </Link>
           <Link
            className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:bg-[#233648] hover:text-white rounded-md"
            href="/dashboard/faq"
          >
            <span className="material-symbols-outlined">help_outline</span>
            <p className="text-sm font-medium leading-normal">FAQ</p>
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:bg-[#233648] hover:text-white rounded-md"
            href="/dashboard/settings"
          >
            <span className="material-symbols-outlined">settings</span>
            <p className="text-sm font-medium leading-normal">Settings</p>
          </Link>
        </nav>
        <div className="mt-auto">
          <div className="flex items-center gap-3 p-3 border-t border-gray-800">
            <img
              alt="User avatar"
              className="h-10 w-10 rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwDKdAYGNpjfhGpVeK_xRs-dWMq9ld2kSx6H3zNfQt8Fad8JehVSl3nya1fPhWKp7JOeWmN8WPKdJFXQBF0FmlFq7JirpvLjlY3NzWOtnCSQAQ7kZyaOubIJFvFlQPHftXwxPSP9C88ZMA9mz3q_V55i3v7DXNnIjlA4C_xhX2Gh0zO-9SuENfCR5pZiFcOmVc2zC76ECfzrdFDJXuGYgjKSzm9gg8WoETkVCsNE9Gn03EkhvmgePXfuu7J7X8QbruxFx5Gqk0Tb8H"
            />
            <div>
              <p className="text-white font-semibold">Admin</p>
              <p className="text-gray-400 text-sm">admin@syncstream.io</p>
            </div>
          </div>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
