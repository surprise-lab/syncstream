
import { SyncStreamLogo } from '@/components/syncstream-logo';
import Link from 'next/link';
import { NavLink } from '@/components/layout/nav-link';
import { Bell, LayoutDashboard, History, Users, Settings } from 'lucide-react';
import Image from 'next/image';


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
       <aside className="w-64 flex-shrink-0 bg-gray-800 p-4">
        <div className="flex h-full flex-col justify-between">
            <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 px-3 mb-6">
                <SyncStreamLogo className="h-8 w-8 text-primary" />
                <h1 className="text-white text-xl font-bold">Takealot-Xero</h1>
            </div>
            <nav className="flex flex-col gap-2 mt-4">
                <Link className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-md" href="/dashboard">
                    <LayoutDashboard />
                    <p className="text-sm font-medium">Dashboard</p>
                </Link>
                <Link className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-md" href="/dashboard/orders">
                    <History />
                    <p className="text-sm font-medium">Orders</p>
                </Link>
                <Link className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-md" href="/dashboard/products">
                    <LayoutDashboard />
                    <p className="text-sm font-medium">Products</p>
                </Link>
                <Link className="flex items-center gap-3 px-3 py-2 text-white bg-green-500/20 rounded-md" href="/dashboard/users">
                    <Users className="text-green-400" />
                    <p className="text-sm font-medium text-green-400">Users</p>
                </Link>
                <Link className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-md" href="/dashboard/settings">
                    <Settings />
                    <p className="text-sm font-medium">Settings</p>
                </Link>
            </nav>
            </div>
        </div>
        </aside>
      <main className="flex-1">{children}</main>
    </div>
  );
}
