import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-border px-10 py-3">
      <div className="flex items-center gap-4 text-white">
        <Logo className="size-8 text-primary" />
        <h2 className="text-lg font-bold tracking-tight">
          SyncStream
        </h2>
      </div>
      <div className="flex flex-1 items-center justify-end gap-2">
        <nav className="hidden items-center gap-1 md:flex">
          <Button variant="ghost" asChild className="rounded-full">
            <Link href="#">Dashboard</Link>
          </Button>
          <Button variant="ghost" asChild className="rounded-full">
            <Link href="#">Settings</Link>
          </Button>
          <Button variant="ghost" asChild className="rounded-full">
            <Link href="#">Support</Link>
          </Button>
        </nav>
        <div className="ml-6">
          <Avatar>
            <AvatarImage src="https://picsum.photos/40/40" alt="User avatar" data-ai-hint="person face" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
