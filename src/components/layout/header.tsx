
import Link from 'next/link';
import { ConnectrLogo } from '@/components/connectr-logo';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Bell } from 'lucide-react';
import { NavLink } from './nav-link';

export function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-border px-10 py-4">
      <div className="flex items-center gap-4 text-white">
        <ConnectrLogo className="size-6 text-primary" />
        <h1 className="text-xl font-bold">Connectr</h1>
      </div>
      <nav className="hidden items-center gap-8 md:flex">
        <NavLink href="/dashboard">Dashboard</NavLink>
        <NavLink href="/dashboard/mapping">Mapping</NavLink>
        <NavLink href="#">Integrations</NavLink>
        <NavLink href="#">Support</NavLink>
      </nav>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="text-muted-foreground" />
          <span className="absolute right-2 top-2 block h-2 w-2 rounded-full bg-primary"></span>
        </Button>
        <Avatar>
          <AvatarImage src="https://picsum.photos/40/40" alt="User avatar" data-ai-hint="person face" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
