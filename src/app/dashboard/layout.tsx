
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen text-white">
      <aside className="w-64 bg-gray-900 flex flex-col border-r border-gray-800">
        <div className="flex items-center gap-3 h-16 px-6 border-b border-gray-800">
          <svg
            className="h-8 w-8 text-primary-500"
            fill="none"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_6_535)">
              <path
                clipRule="evenodd"
                d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_6_535">
                <rect fill="white" height="48" width="48"></rect>
              </clipPath>
            </defs>
          </svg>
          <h1 className="text-xl font-bold">SyncStream</h1>
        </div>
        <nav className="flex-1 px-4 py-4 space-y-2">
          <Link
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium bg-gray-800 text-white"
            href="/dashboard"
          >
            <span className="material-symbols-outlined">dashboard</span>
            Dashboard
          </Link>
          <Link
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-800 hover:text-white"
            href="/dashboard/integrations"
          >
            <span className="material-symbols-outlined">sync_alt</span>
            Integrations
          </Link>
          <Link
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-800 hover:text-white"
            href="/dashboard/workflows"
          >
            <span className="material-symbols-outlined">lan</span>
            Workflows
          </Link>
          <Link
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-800 hover:text-white"
            href="/dashboard/data"
          >
            <span className="material-symbols-outlined">database</span>
            Data
          </Link>
        </nav>
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="flex h-16 items-center justify-end px-6 bg-gray-900 border-b border-gray-800">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="relative rounded-full p-2 text-gray-400 hover:text-white hover:bg-gray-800"
            >
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-red-500"></span>
            </Button>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA-YOcQtaHFVZsGrxllC7bK_pksdmZwZCg_94Fbt8vQaeUcU04aw9xSeUqulG2YLDcqGw7OR7fypK6SINjefQ-VJeDxdzyUU6YA1enc-09xiIiixwKkYCqr3b_1kXhpLwPo29F6J5b7QPH75xVJ8bQDXIJx60u-FVjeX-0zZhsMdV3atbLPkvv1_a-_5whLggqhzuqO0DQNA65fC1XphSmAzmAjL42V2nzP8VI8g5opy9zzLPqkLT2GfPGp5wS0gHoR3laB2PVE35xa")',
              }}
            ></div>
          </div>
        </header>
        {children}
      </div>
    </div>
  );
}
