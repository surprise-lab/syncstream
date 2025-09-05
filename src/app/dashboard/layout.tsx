import {
  Bell,
  HelpCircle,
  LayoutDashboard,
  Package,
  Receipt,
  Settings,
  Users,
} from 'lucide-react';

import {ConnectrLogo} from '@/components/connectr-logo';
import Link from 'next/link';
import {Button} from '@/components/ui/button';
import {Avatar, AvatarImage, AvatarFallback} from '@/components/ui/avatar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex size-full min-h-screen flex-col dark group/design-root">
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#29382f] px-10 py-3">
          <div className="flex items-center gap-4 text-white">
            <div className="size-6 text-primary-500">
              <svg
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">
              Connect
            </h2>
          </div>
          <nav className="flex items-center gap-6 text-sm font-medium text-gray-300">
            <Link className="hover:text-white transition-colors" href="/dashboard">
              Dashboard
            </Link>
            <Link className="hover:text-white transition-colors" href="/dashboard/orders">
              Orders
            </Link>
            <Link className="hover:text-white transition-colors" href="/dashboard/products">
              Products
            </Link>
            <Link className="hover:text-white transition-colors" href="#">
              Accounting
            </Link>
            <Link className="text-white" href="/dashboard/settings">
              Settings
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="flex items-center justify-center rounded-full size-10 bg-[#29382f] text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
            >
              <HelpCircle className="text-2xl" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="flex items-center justify-center rounded-full size-10 bg-[#29382f] text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
            >
              <Bell className="text-2xl" />
            </Button>
            <Avatar>
              <AvatarImage
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW2ZS6vdHnjcDZetC8BPIoRU3UlQP76J6iwF5zEeQQMfataRNBIG8P9KRfvlNMvsAmKbvWr11SX2AcMTae_bLNrYJzSjk8RExTXFif5CwNFeuMzxibmsp7pa_ULkrq395Kapz-0EUIuqLjwtwaMD70wpm3Zhqw0q6ITGWESvq7PfryDmstC89M60fwYJoVw_zxerHnQ3O90iejzNskUuudk0ciMR0fT0715qfPFT1-oP0iXfactUklEoANWs6afzwclByhtOjwNtw"
                alt="User avatar"
                data-ai-hint="person face"
              />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
