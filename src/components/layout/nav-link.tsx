
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import type { ComponentProps, ReactNode } from 'react';

type NavLinkProps = ComponentProps<typeof Link> & {
  children: ReactNode;
};

export function NavLink({ children, ...props }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === props.href;

  return (
    <Link
      {...props}
      className={cn(
        'relative flex items-center text-sm font-medium transition-colors',
        isActive
          ? 'text-gray-900'
          : 'text-gray-600 hover:text-gray-900',
      )}
    >
      {children}
      {isActive && (
        <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"></span>
      )}
    </Link>
  );
}
