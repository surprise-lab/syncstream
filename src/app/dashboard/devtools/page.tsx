
'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function DeveloperToolsPage() {
  return (
    <div className="flex flex-col gap-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-[var(--text-color)]">
          Developer Tools
        </h1>
        <p className="text-[var(--text-muted-color)]">
          Test API endpoints, simulate data flows, and debug integration
          issues.
        </p>
      </header>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="flex flex-col gap-6 lg:col-span-2">
          <section className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold tracking-tight text-[var(--text-color)]">
                API Request Builder
              </h2>
              <div className="flex items-center gap-2">
                <button className="flex h-9 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-md border border-[var(--border-color)] bg-[var(--secondary-color)] px-3 text-sm text-[var(--text-muted-color)] hover:bg-[var(--border-color)]">
                  <span className="material-symbols-outlined text-base">
                    save
                  </span>
                  <span>Save Config</span>
                </button>
                <button className="flex h-9 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-md border border-[var(--border-color)] bg-[var(--secondary-color)] px-3 text-sm text-[var(--text-muted-color)] hover:bg-[var(--border-color)]">
                  <span className="material-symbols-outlined text-base">
                    folder_open
                  </span>
                  <span>Load Config</span>
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <Select>
                  <SelectTrigger className="form-select w-1/3 appearance-none rounded-md border-0 bg-[var(--secondary-color)] text-base text-[var(--text-color)] placeholder:text-[var(--text-muted-color)] focus:ring-2 focus:ring-[var(--primary-color)]">
                    <SelectValue placeholder="GET" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="GET">GET</SelectItem>
                    <SelectItem value="POST">POST</SelectItem>
                    <SelectItem value="PUT">PUT</SelectItem>
                    <SelectItem value="DELETE">DELETE</SelectItem>
                  </SelectContent>
                </Select>
                <input
                  className="w-2/3 rounded-md border-0 bg-[var(--secondary-color)] text-base text-[var(--text-color)] placeholder:text-[var(--text-muted-color)] focus:ring-2 focus:ring-[var(--primary-color)]"
                  placeholder="Enter API endpoint"
                  defaultValue="/api/v1/users"
                />
              </div>
              <textarea
                className="min-h-48 resize-y rounded-md border-0 bg-[var(--secondary-color)] text-base text-[var(--text-color)] placeholder:text-[var(--text-muted-color)] focus:ring-2 focus:ring-[var(--primary-color)]"
                placeholder="Request Body (JSON)"
              ></textarea>
              <div className="flex justify-end">
                <button className="flex h-10 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-md bg-primary px-4 text-sm font-bold tracking-wide text-white hover:bg-blue-600">
                  <span className="material-symbols-outlined"> send </span>
                  <span>Send Request</span>
                </button>
              </div>
            </div>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold tracking-tight text-[var(--text-color)]">
              Response Viewer
            </h2>
            <div className="min-h-48 rounded-md bg-[var(--secondary-color)] p-4 font-mono text-sm text-[var(--text-color)]">
              <pre>
                <code>
                  {`{
  "status": "success",
  "data": []
}`}
                </code>
              </pre>
            </div>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold tracking-tight text-[var(--text-color)]">
              Log Console
            </h2>
            <div className="flex h-[calc(100%-2.5rem)] flex-col gap-2 rounded-md bg-[var(--secondary-color)] p-4">
              <div className="font-mono text-xs">
                <p className="text-green-400">
                  [<span className="text-gray-500">2023-10-27 10:30:00</span>]
                  INFO: Request received: GET /api/v1/users
                </p>
                <p className="text-blue-400">
                  [<span className="text-gray-500">2023-10-27 10:30:01</span>]
                  DEBUG: Authenticating request...
                </p>
                <p className="text-green-400">
                  [<span className="text-gray-500">2023-10-27 10:30:02</span>]
                  INFO: Request successful.
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold tracking-tight text-[var(--text-color)]">
            Request History
          </h2>
          <div className="flex flex-col gap-2">
            <div className="rounded-md bg-[var(--secondary-color)] p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-green-400">GET</span>
                  <p className="text-sm text-[var(--text-color)]">
                    /api/v1/users
                  </p>
                </div>
                <span className="text-xs text-[var(--text-muted-color)]">
                  2m ago
                </span>
              </div>
              <p className="mt-2 text-xs text-green-400">200 OK</p>
            </div>
            <div className="rounded-md bg-[var(--secondary-color)] p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-blue-400">POST</span>
                  <p className="text-sm text-[var(--text-color)]">
                    /api/v1/connections
                  </p>
                </div>
                <span className="text-xs text-[var(--text-muted-color)]">
                  5m ago
                </span>
              </div>
              <p className="mt-2 text-xs text-green-400">201 Created</p>
            </div>
            <div className="rounded-md bg-[var(--secondary-color)] p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-orange-400">PUT</span>
                  <p className="text-sm text-[var(--text-color)]">
                    /api/v1/dataflows/123
                  </p>
                </div>
                <span className="text-xs text-[var(--text-muted-color)]">
                  1h ago
                </span>
              </div>
              <p className="mt-2 text-xs text-red-400">404 Not Found</p>
            </div>
            <div className="rounded-md bg-[var(--secondary-color)] p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-red-400">DELETE</span>
                  <p className="text-sm text-[var(--text-color)]">
                    /api/v1/connections/456
                  </p>
                </div>
                <span className="text-xs text-[var(--text-muted-color)]">
                  3h ago
                </span>
              </div>
              <p className="mt-2 text-xs text-green-400">204 No Content</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
