import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Bell } from 'lucide-react';

export function Header() {
  return (
    <header className="flex items-center justify-between p-6 border-b border-gray-800">
      <div>
        <h2 className="text-2xl font-bold text-white">Dashboard</h2>
        <p className="text-gray-400">Welcome back, User!</p>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="text-gray-400 hover:bg-gray-800 h-10 w-10">
          <Bell />
        </Button>
        <Avatar>
          <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0x08xrTMBzIxZunaKJy1YzfNtb4NSs41DpLPnYye01wVs2fY2a0ZZos2D8WNDNJlYDWcJDSJ1LbJ1n-_ZeRjxBXvlUOdN9u-0C2A1nn3b7AV4p1Kj_MjPcPvsgiytTJY5q-F4MiygITlo01_rsyZbUHwfKi0H-IfUD3K8VowHzfFOd5kaLUrcF2yf8_FasBuVrV1HkWMabpKbxXvqoqp79IaYJ2Wbd-Lca67ZHYfR9QPjEUIMXZCamUY138vZvSXM7FC_H6aUKNc" alt="User avatar" data-ai-hint="person face" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
