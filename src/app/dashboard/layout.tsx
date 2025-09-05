
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
              <h1 className="text-white text-2xl font-bold">SyncStream</h1>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <NavLink href="/dashboard">Dashboard</NavLink>
              <NavLink href="/dashboard/orders">Connections</NavLink>
              <NavLink href="/dashboard/mapping">Mapping</NavLink>
              <NavLink href="/dashboard/settings">Settings</NavLink>
            </nav>
            <div className="flex items-center gap-4">
              <button className="relative text-white hover:text-primary transition-colors duration-300">
                <Bell />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
              </button>
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuA3Ov5J2VBIvBhNwSEPtyPWH0HfDK6K-GoPqTXzXFbV8y8ozoX9niNoNd684tgTJVWzhza2h5_HPH7ERTkPsahhXHwWpP89T6fUSlVdmfGyUMdiGUthwATTAmgdLfkSFIG2rf-_AKXx5ZkjzQPP7pIa_mK0NKmlEWawO1-IuVC7gsvakoLcdjX_kpAjZQT_q67r7g_UdFtwWefvPTcjBhp63JHOBt3f4u8NMcqQmF2H7-8SIT53sgYgeVCdCMtrTen6tHIQVmY6dUI")`,
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
