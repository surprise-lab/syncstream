
'use client';

export default function MonitoringPage() {
  return (
    <div className="flex-1 flex flex-col">
      <header className="flex items-center justify-between h-16 px-8 border-b border-[var(--border-color)] bg-[#111a22]">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold">
            Application Performance Monitoring
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <label className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]">
              search
            </span>
            <input
              className="form-input w-64 rounded-md border-0 bg-[var(--secondary-color)] pl-10 pr-4 text-sm text-white placeholder:text-[var(--text-secondary)] focus:ring-2 focus:ring-[var(--primary-color)]"
              placeholder="Search..."
              type="search"
            />
          </label>
          <button className="flex items-center justify-center size-10 rounded-md bg-[var(--secondary-color)] text-[var(--text-secondary)] hover:text-white hover:bg-[var(--accent-color)]">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB6zp3Or0HfpQvRfUyvoeK18jDYO8ln3Vtc-y6naP9FgOecdEU1Z0P9LohOakM8_uL5LWaFz_fA1_Q4Apxp7emT62sS-M6-ZmSbJiJhsk8e9fm1CkOYmtf2I5bSLwH7oSv7REe3gSfO0s3KBuLmM405AtjUkj8WjySDtFU2qaNDvGxg2DmFSfLc9qszEwlWrzp9fF-_J5rjQvUqP9jfxW_uiY10nThvZ0E4fE-xQJ5L_oEIeKhYwxDqHGWL4x9HX7OyU6faplaMvzBg")',
            }}
          ></div>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto p-8">
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-[var(--border-color)] mb-6">
            <nav aria-label="Tabs" className="-mb-px flex space-x-8">
              <a
                className="whitespace-nowrap py-4 px-1 border-b-2 border-[var(--primary-color)] font-semibold text-[var(--primary-color)] text-sm"
                href="#"
              >
                Overview
              </a>
              <a
                className="whitespace-nowrap py-4 px-1 border-b-2 border-transparent text-[var(--text-secondary)] hover:text-white hover:border-gray-300 font-medium text-sm"
                href="#"
              >
                Transactions
              </a>
              <a
                className="whitespace-nowrap py-4 px-1 border-b-2 border-transparent text-[var(--text-secondary)] hover:text-white hover:border-gray-300 font-medium text-sm"
                href="#"
              >
                Infrastructure
              </a>
            </nav>
          </div>
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Key Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[var(--accent-color)] rounded-lg p-6 flex flex-col gap-2">
                <p className="text-sm font-medium text-[var(--text-secondary)]">
                  Average Response Time
                </p>
                <p className="text-3xl font-bold">250 ms</p>
                <div className="flex items-center text-sm font-medium text-red-400">
                  <span className="material-symbols-outlined text-base">
                    arrow_downward
                  </span>
                  <span>5%</span>
                </div>
              </div>
              <div className="bg-[var(--accent-color)] rounded-lg p-6 flex flex-col gap-2">
                <p className="text-sm font-medium text-[var(--text-secondary)]">
                  Error Rate
                </p>
                <p className="text-3xl font-bold">0.5%</p>
                <div className="flex items-center text-sm font-medium text-green-400">
                  <span className="material-symbols-outlined text-base">
                    arrow_upward
                  </span>
                  <span>0.1%</span>
                </div>
              </div>
              <div className="bg-[var(--accent-color)] rounded-lg p-6 flex flex-col gap-2">
                <p className="text-sm font-medium text-[var(--text-secondary)]">
                  Throughput
                </p>
                <p className="text-3xl font-bold">1200 rpm</p>
                <div className="flex items-center text-sm font-medium text-green-400">
                  <span className="material-symbols-outlined text-base">
                    arrow_upward
                  </span>
                  <span>10%</span>
                </div>
              </div>
            </div>
          </section>
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-[var(--accent-color)] rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4">
                Response Time Distribution
              </h4>
              <div className="h-64 flex items-end gap-4">
                <div className="flex-1 h-full flex flex-col justify-end items-center gap-2">
                  <div
                    className="chart-bar w-full rounded"
                    style={{ height: '75%' }}
                  ></div>
                  <p className="text-xs text-[var(--text-secondary)]">
                    0-100ms
                  </p>
                </div>
                <div className="flex-1 h-full flex flex-col justify-end items-center gap-2">
                  <div
                    className="chart-bar w-full rounded"
                    style={{ height: '20%' }}
                  ></div>
                  <p className="text-xs text-[var(--text-secondary)]">
                    100-200ms
                  </p>
                </div>
                <div className="flex-1 h-full flex flex-col justify-end items-center gap-2">
                  <div
                    className="chart-bar w-full rounded"
                    style={{ height: '45%' }}
                  ></div>
                  <p className="text-xs text-[var(--text-secondary)]">
                    200-300ms
                  </p>
                </div>
                <div className="flex-1 h-full flex flex-col justify-end items-center gap-2">
                  <div
                    className="chart-bar w-full rounded"
                    style={{ height: '15%' }}
                  ></div>
                  <p className="text-xs text-[var(--text-secondary)]">
                    300-400ms
                  </p>
                </div>
                <div className="flex-1 h-full flex flex-col justify-end items-center gap-2">
                  <div
                    className="chart-bar w-full rounded"
                    style={{ height: '25%' }}
                  ></div>
                  <p className="text-xs text-[var(--text-secondary)]">
                    400-500ms
                  </p>
                </div>
                <div className="flex-1 h-full flex flex-col justify-end items-center gap-2">
                  <div
                    className="chart-bar w-full rounded"
                    style={{ height: '35%' }}
                  ></div>
                  <p className="text-xs text-[var(--text-secondary)]">500ms+</p>
                </div>
              </div>
            </div>
            <div className="bg-[var(--accent-color)] rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4">
                Error Rate Over Time
              </h4>
              <div className="h-64 flex flex-col">
                <svg
                  fill="none"
                  height="100%"
                  preserveAspectRatio="none"
                  viewBox="0 0 472 150"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                    stroke="var(--primary-color)"
                    strokeLinecap="round"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                  ></path>
                  <path
                    d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V150H0V109Z"
                    fill="url(#paint0_linear_error)"
                    vectorEffect="non-scaling-stroke"
                  ></path>
                  <defs>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="paint0_linear_error"
                      x1="236"
                      x2="236"
                      y1="1"
                      y2="150"
                    >
                      <stop
                        stopColor="var(--primary-color)"
                        stopOpacity="0.2"
                      ></stop>
                      <stop
                        offset="1"
                        stopColor="var(--primary-color)"
                        stopOpacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="flex justify-between text-xs text-[var(--text-secondary)] -mt-4">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="bg-[var(--accent-color)] rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4">
                Throughput Over Time
              </h4>
              <div className="h-64 flex flex-col">
                <svg
                  fill="none"
                  height="100%"
                  preserveAspectRatio="none"
                  viewBox="0 0 472 150"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 41C18.1538 41 18.1538 129 36.3077 129C54.4615 129 54.4615 109 72.6154 109C90.7692 109 90.7692 57 108.923 57C127.077 57 127.077 117 145.231 117C163.385 117 163.385 49 181.538 49C199.692 49 199.692 89 217.846 89C236 89 236 105 254.154 105C272.308 105 272.308 29 290.462 29C308.615 29 308.615 1 326.769 1C344.923 1 344.923 149 363.077 149C381.231 149 381.231 69 399.385 69C417.538 69 417.538 21 435.692 21C453.846 21 453.846 125 472 125"
                    stroke="#34d399"
                    strokeLinecap="round"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                  ></path>
                  <path
                    d="M0 41C18.1538 41 18.1538 129 36.3077 129C54.4615 129 54.4615 109 72.6154 109C90.7692 109 90.7692 57 108.923 57C127.077 57 127.077 117 145.231 117C163.385 117 163.385 49 181.538 49C199.692 49 199.692 89 217.846 89C236 89 236 105 254.154 105C272.308 105 272.308 29 290.462 29C308.615 29 308.615 1 326.769 1C344.923 1 344.923 149 363.077 149C381.231 149 381.231 69 399.385 69C417.538 69 417.538 21 435.692 21C453.846 21 453.846 125 472 125V150H0V41Z"
                    fill="url(#paint0_linear_throughput)"
                    vectorEffect="non-scaling-stroke"
                  ></path>
                  <defs>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="paint0_linear_throughput"
                      x1="236"
                      x2="236"
                      y1="1"
                      y2="150"
                    >
                      <stop stopColor="#34d399" stopOpacity="0.2"></stop>
                      <stop
                        offset="1"
                        stopColor="#34d399"
                        stopOpacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="flex justify-between text-xs text-[var(--text-secondary)] -mt-4">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  </div>
</body></html>