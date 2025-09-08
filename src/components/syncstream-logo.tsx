
import type { SVGProps } from 'react';

export function SyncStreamLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2 12h20"></path>
      <path d="M12 2v20"></path>
      <path d="m19 9-7 7-7-7"></path>
    </svg>
  );
}
