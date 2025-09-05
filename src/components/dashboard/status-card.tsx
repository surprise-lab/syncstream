import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface StatusCardProps {
  icon: ReactNode;
  title: string;
  value: string;
  bgColor?: string;
}

export function StatusCard({ icon, title, value, bgColor }: StatusCardProps) {
  return (
    <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 flex items-center gap-4">
      <div className={cn("p-3 rounded-full", bgColor)}>
        <div className="text-3xl">{icon}</div>
      </div>
      <div>
        <p className="text-gray-400 text-sm">{title}</p>
        <p className="text-white text-xl font-bold">{value}</p>
      </div>
    </div>
  );
}
