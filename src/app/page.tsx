
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
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold tracking-tight">
              Feedback &amp; Suggestions
            </h2>
            <p className="mt-3 text-lg text-gray-400">
              Your insights are valuable. Help us make SyncStream better for
              everyone.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-800 bg-gray-900 p-8 lg:col-span-1">
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
            <div className="space-y-6 lg:col-span-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Feature Requests</h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400">Sort by:</span>
                  <select className="rounded-md border-gray-700 bg-gray-800 px-3 py-1.5 text-sm text-white focus:border-[var(--primary-color)] focus:outline-none focus:ring-[var(--primary-color)]">
                    <option>Most Voted</option>
                    <option>Newest</option>
                    <option>Trending</option>
                  </select>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg border border-gray-800 bg-gray-900 p-4 transition-shadow hover:shadow-lg hover:shadow-gray-900/50">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="font-semibold">
                        Native integration with Salesforce
                      </p>
                      <p className="mt-2 text-sm text-gray-400">
                        Allow direct synchronization of data between SyncStream
                        and Salesforce objects.
                      </p>
                    </div>
                    <div className="ml-4 flex flex-col items-center gap-1">
                      <button className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-700 hover:text-green-400">
                        <span className="material-symbols-outlined text-xl">
                          {' '}
                          thumb_up{' '}
                        </span>
                      </button>
                      <span className="text-sm font-bold text-green-400">
                        128
                      </span>
                      <button className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-700 hover:text-red-400">
                        <span className="material-symbols-outlined text-xl">
                          {' '}
                          thumb_down{' '}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border border-gray-800 bg-gray-900 p-4 transition-shadow hover:shadow-lg hover:shadow-gray-900/50">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="font-semibold">
                        Conditional logic in workflows
                      </p>
                      <p className="mt-2 text-sm text-gray-400">
                        Add if/then/else branching to create more
                        sophisticated automation sequences.
                      </p>
                    </div>
                    <div className="ml-4 flex flex-col items-center gap-1">
                      <button className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-700 hover:text-green-400">
                        <span className="material-symbols-outlined text-xl">
                          {' '}
                          thumb_up{' '}
                        </span>
                      </button>
                      <span className="text-sm font-bold">92</span>
                      <button className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-700 hover:text-red-400">
                        <span className="material-symbols-outlined text-xl">
                          {' '}
                          thumb_down{' '}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border border-gray-800 bg-gray-900 p-4 transition-shadow hover:shadow-lg hover:shadow-gray-900/50">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="font-semibold">
                        Improved dashboard customization
                      </p>
                      <p className="mt-2 text-sm text-gray-400">
                        More widgets and layout options to personalize the main
                        dashboard view.
                      </p>
                    </div>
                    <div className="ml-4 flex flex-col items-center gap-1">
                      <button className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-700 hover:text-green-400">
                        <span className="material-symbols-outlined text-xl">
                          {' '}
                          thumb_up{' '}
                        </span>
                      </button>
                      <span className="text-sm font-bold">76</span>
                      <button className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-700 hover:text-red-400">
                        <span className="material-symbols-outlined text-xl">
                          {' '}
                          thumb_down{' '}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <a
                  className="text-sm font-medium text-[var(--primary-color)] hover:underline"
                  href="#"
                >
                  View all feature requests
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
