import type { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface StatusCardProps {
  icon: ReactNode;
  title: string;
  value: string;
}

export function StatusCard({ icon, title, value }: StatusCardProps) {
  return (
    <Card className="rounded-2xl bg-card p-6">
      <CardContent className="flex items-center gap-4 p-0">
        <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
          <div className="text-2xl">{icon}</div>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold text-white">{value}</p>
        </div>
      </CardContent>
    </Card>
  );
}
