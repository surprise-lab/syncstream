
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SyncStreamLogo } from '@/components/syncstream-logo';
import Link from 'next/link';
import { NavLink } from '@/components/layout/nav-link';
import { Bell } from 'lucide-react';
import Image from 'next/image';


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20 border-b border-solid border-border">
            <div className="flex items-center gap-4">
              <SyncStreamLogo className="h-8 w-8 text-primary" />
              <h1 className="text-white text-2xl font-bold">SyncLog</h1>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <NavLink href="/dashboard">Dashboard</NavLink>
              <NavLink href="/dashboard/logs">Sync Logs</NavLink>
              <NavLink href="/dashboard/settings">Settings</NavLink>
              <NavLink href="#">Help</NavLink>
            </nav>
            <div className="flex items-center gap-4">
              <button className="relative text-white hover:text-primary transition-colors duration-300">
                <Bell />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
              </button>
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBvSffiJiA0dJxQ983slUHX4ETTabUDsNh3ABe9pd2wL-15zLPreM9MKNFVhb8A1qenO3BZpRBgiBfQNA3uYyZzhqFsePHZPK_yz_peZXm0MCBmBoWrP05chHd8iV8Du3f5gmSW9rIzNzsbPvxi7taf4U0CFIDi__ikJNE9DLtug_fOZLQeuJzl8elTDk78LNXDooiMWChN-SZsEDEWw6K0j6gOInBA84-MQrDXA1y-wwp8xNJhSX-1kBMPBZXyHVLkoE4yvdvzwE4")`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}
