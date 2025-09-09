
'use client';

export default function FeedbackPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans text-white">
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-gray-800 bg-[#0D1117]/80 px-6 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <svg
              className="h-8 w-8 text-[var(--primary-color)]"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M12 2L2 7V17L12 22L22 17V7L12 2ZM12 19.5L4 15.5V8.5L12 12.5V19.5ZM20 15.5L14 18.5V12.5L20 9.5V15.5ZM12 4.5L18.5 8L12 11.5L5.5 8L12 4.5Z"
                fillRule="evenodd"
              ></path>
            </svg>
            <h1 className="text-xl font-bold">SyncStream</h1>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <a
              className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
              href="#"
            >
              Home
            </a>
            <a
              className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
              href="#"
            >
              Integrations
            </a>
            <a
              className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
              href="#"
            >
              Workflows
            </a>
            <a className="text-sm font-medium text-white" href="#">
              Feedback
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-gray-700">
            <span className="material-symbols-outlined text-xl text-gray-400">
              {' '}
              help{' '}
            </span>
          </button>
          <div
            className="h-9 w-9 rounded-full bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCZRB07bshECau9A6EXFsYeYn70DEPfdG7NPLWezVevVeKCPLnoqlG33fTCJZ_ySeQWsSYE1xfzSSkfQeYWa6YQzXyNiu9QBwLke5p_zdB3VC6rkruFI3zxIp_nUwFwBuGvBM6PSZ5gX0FuH8paTYDkpmWW-R7GKb-9JJde7NptcJilc2hZlg7kHSY3oRIXbH_wGPRgqUuk9V8qsdqwoJJSumDbOniicQgXyTdWRUnEy42eGC3Jid1jdxGkZrMCmbXVO0TvIqdQQXhy")',
            }}
          ></div>
        </div>
      </header>
      <main className="flex-1 px-6 py-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold tracking-tight">
              Feedback &amp; Suggestions
            </h2>
            <p className="mt-3 text-lg text-gray-400">
              Your insights are valuable. Help us make SyncStream better for
              everyone.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="rounded-lg border border-gray-800 bg-gray-900 p-8">
              <h3 className="mb-6 text-xl font-bold">Submit Your Feedback</h3>
              <form className="space-y-6">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-300"
                    htmlFor="category"
                  >
                    Category
                  </label>
                  <select
                    className="mt-2 block w-full rounded-md border-gray-700 bg-gray-800 px-3 py-2 text-white placeholder-gray-500 focus:border-[var(--primary-color)] focus:outline-none focus:ring-[var(--primary-color)] sm:text-sm"
                    id="category"
                  >
                    <option>Select a category</option>
                    <option>Bug Report</option>
                    <option>Feature Request</option>
                    <option>General Feedback</option>
                    <option>UI/UX Suggestion</option>
                  </select>
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-300"
                    htmlFor="subject"
                  >
                    Subject
                  </label>
                  <input
                    className="mt-2 block w-full rounded-md border-gray-700 bg-gray-800 px-3 py-2 text-white placeholder-gray-500 focus:border-[var(--primary-color)] focus:outline-none focus:ring-[var(--primary-color)] sm:text-sm"
                    id="subject"
                    placeholder="e.g., New integration for Service Y"
                    type="text"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-300"
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <textarea
                    className="mt-2 block w-full rounded-md border-gray-700 bg-gray-800 px-3 py-2 text-white placeholder-gray-500 focus:border-[var(--primary-color)] focus:outline-none focus:ring-[var(--primary-color)] sm:text-sm"
                    id="description"
                    placeholder="Describe your idea or the issue you're facing in detail."
                    rows={5}
                  ></textarea>
                </div>
                <div className="flex justify-end pt-2">
                  <button
                    className="flex items-center justify-center gap-2 rounded-md bg-[var(--primary-color)] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-color)]"
                    type="submit"
                  >
                    <span className="material-symbols-outlined"> send </span>
                    Submit Feedback
                  </button>
                </div>
              </form>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-bold">Your Previous Submissions</h3>
              <div className="space-y-4">
                <div className="rounded-lg border border-gray-800 bg-gray-900 p-4 transition-shadow hover:shadow-lg hover:shadow-gray-900/50">
                  <div className="flex items-start justify-between">
                    <p className="font-semibold">
                      Enhance Workflow Automation
                    </p>
                    <div className="status-pill status-in-review">
                      <span className="material-symbols-outlined text-base">
                        {' '}
                        hourglass_top{' '}
                      </span>
                      <span>In Review</span>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-400">
                    Feature Request submitted on 2023-08-15
                  </p>
                </div>
                <div className="rounded-lg border border-gray-800 bg-gray-900 p-4 transition-shadow hover:shadow-lg hover:shadow-gray-900/50">
                  <div className="flex items-start justify-between">
                    <p className="font-semibold">
                      Integration Error with System X
                    </p>
                    <div className="status-pill status-resolved">
                      <span className="material-symbols-outlined text-base">
                        {' '}
                        task_alt{' '}
                      </span>
                      <span>Resolved</span>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-400">
                    Bug Report submitted on 2023-07-22
                  </p>
                </div>
                <div className="rounded-lg border border-gray-800 bg-gray-900 p-4 transition-shadow hover:shadow-lg hover:shadow-gray-900/50">
                  <div className="flex items-start justify-between">
                    <p className="font-semibold">Overall App Performance</p>
                    <div className="status-pill status-acknowledged">
                      <span className="material-symbols-outlined text-base">
                        {' '}
                        thumb_up{' '}
                      </span>
                      <span>Acknowledged</span>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-400">
                    General Feedback submitted on 2023-06-10
                  </p>
                </div>
              </div>
              <div className="text-center">
                <a
                  className="text-sm font-medium text-[var(--primary-color)] hover:underline"
                  href="#"
                >
                  View all submissions
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
