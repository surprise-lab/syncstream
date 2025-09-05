import type { SVGProps } from 'react';

export function SyncStreamLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_6_535_syncstream)">
        <path
          d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_6_535_syncstream">
          <rect width="48" height="48" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  );
}
