
'use client';

export default function ResourcesPage() {
  return (
    <main className="flex-1 px-10 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-white text-3xl font-bold leading-tight tracking-tight">
            Resources
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Manage resource allocation and scaling options for SyncStream's
            infrastructure.
          </p>
        </div>
        <div className="space-y-12">
          <section>
            <h2 className="text-white text-xl font-bold leading-tight tracking-tight mb-6">
              Resource Usage
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col gap-4 rounded-md border border-orange-500/50 bg-orange-950/20 p-6 ring-2 ring-orange-500/30">
                <div className="flex items-center justify-between">
                  <p className="text-slate-300 text-sm font-medium">
                    CPU Utilization
                  </p>
                  <span className="text-green-500 text-sm font-medium flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">
                      {' '}
                      trending_up{' '}
                    </span>
                    +5%
                  </span>
                </div>
                <p className="text-white text-4xl font-bold">75%</p>
                <div className="h-40 flex flex-col justify-end">
                  <svg
                    fill="none"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 472 149"
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H0V109Z"
                      fill="url(#paint0_linear_1131_5935_updated)"
                    ></path>
                    <path
                      d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                      stroke="var(--primary-color)"
                      strokeLinecap="round"
                      strokeWidth="2"
                    ></path>
                    <defs>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="paint0_linear_1131_5935_updated"
                        x1="236"
                        x2="236"
                        y1="1"
                        y2="149"
                      >
                        <stop
                          stopColor="var(--primary-color)"
                          stopOpacity="0.3"
                        ></stop>
                        <stop
                          offset="1"
                          stopColor="var(--primary-color)"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <p className="text-slate-400 text-xs text-center">
                  Last 24 Hours
                </p>
              </div>
              <div className="flex flex-col gap-4 rounded-md border border-[#233648] bg-[#192633] p-6">
                <div className="flex items-center justify-between">
                  <p className="text-slate-300 text-sm font-medium">
                    Memory Usage
                  </p>
                  <span className="text-red-500 text-sm font-medium flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">
                      {' '}
                      trending_down{' '}
                    </span>
                    -2%
                  </span>
                </div>
                <p className="text-white text-4xl font-bold">60%</p>
                <div className="h-40 flex items-end gap-2 px-2">
                  <div
                    className="bg-[var(--primary-color)] w-full rounded-t-sm"
                    style={{ height: '70%' }}
                  ></div>
                  <div
                    className="bg-[var(--primary-color)] w-full rounded-t-sm"
                    style={{ height: '100%' }}
                  ></div>
                  <div
                    className="bg-[var(--primary-color)] w-full rounded-t-sm"
                    style={{ height: '20%' }}
                  ></div>
                  <div
                    className="bg-[var(--primary-color)] w-full rounded-t-sm"
                    style={{ height: '50%' }}
                  ></div>
                  <div
                    className="bg-[var(--primary-color)] w-full rounded-t-sm"
                    style={{ height: '10%' }}
                  ></div>
                  <div
                    className="bg-[var(--primary-color)] w-full rounded-t-sm"
                    style={{ height: '30%' }}
                  ></div>
                  <div
                    className="bg-[var(--primary-color)] w-full rounded-t-sm"
                    style={{ height: '60%' }}
                  ></div>
                  <div
                    className="bg-[var(--primary-color)] w-full rounded-t-sm"
                    style={{ height: '80%' }}
                  ></div>
                </div>
                <p className="text-slate-400 text-xs text-center">
                  Last 24 Hours
                </p>
              </div>
              <div className="flex flex-col gap-4 rounded-md border border-orange-500/50 bg-orange-950/20 p-6 ring-2 ring-orange-500/30">
                <div className="flex items-center justify-between">
                  <p className="text-slate-300 text-sm font-medium">
                    Database Connections
                  </p>
                  <span className="text-green-500 text-sm font-medium flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">
                      {' '}
                      trending_up{' '}
                    </span>
                    +10%
                  </span>
                </div>
                <p className="text-white text-4xl font-bold">450/500</p>
                <div className="h-40 flex flex-col justify-center gap-2">
                  <div className="flex items-center gap-2 text-orange-400">
                    <span className="material-symbols-outlined text-xl">
                      {' '}
                      warning{' '}
                    </span>
                    <p className="text-sm font-medium">
                      High utilization warning
                    </p>
                  </div>
                  <div className="w-full bg-[#233648] rounded-full h-3">
                    <div
                      className="bg-orange-500 h-3 rounded-full"
                      style={{ width: '90%' }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-slate-400 text-xs">
                    <span>Used: 450</span>
                    <span>Available: 50</span>
                  </div>
                </div>
                <p className="text-slate-400 text-xs text-center">Current</p>
              </div>
            </div>
            <div className="mt-6 rounded-md border border-yellow-500/50 bg-yellow-950/20 p-4">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-yellow-400 text-xl mt-0.5">
                  {' '}
                  info{' '}
                </span>
                <div>
                  <h3 className="text-yellow-300 font-bold">
                    CPU Utilization Approaching Limit
                  </h3>
                  <p className="text-yellow-400/80 text-sm mt-1">
                    CPU usage has reached 75%, which is close to the configured
                    maximum of 80%. Consider increasing CPU units or optimizing
                    processes to prevent performance degradation.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-white text-xl font-bold leading-tight tracking-tight mb-6">
              Scaling Configuration
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <label className="block">
                  <span className="text-slate-300 text-sm font-medium pb-2 block">
                    Scaling Mode
                  </span>
                  <select className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-md text-white focus:outline-0 focus:ring-2 focus:ring-[var(--primary-color)] border border-[#324d67] bg-[#192633] focus:border-[var(--primary-color)] h-12 bg-[image:--select-button-svg] placeholder:text-slate-400 p-3 text-sm">
                    <option value="auto">Auto-scaling</option>
                    <option value="manual">Manual</option>
                  </select>
                </label>
              </div>
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block">
                    <span className="text-slate-300 text-sm font-medium pb-2 block">
                      Minimum CPU Units
                    </span>
                    <input
                      className="form-input w-full rounded-md text-white focus:outline-0 focus:ring-2 focus:ring-[var(--primary-color)] border border-[#324d67] bg-[#192633] focus:border-[var(--primary-color)] h-12 placeholder:text-slate-400 px-3 text-sm"
                      placeholder="e.g. 2"
                    />
                  </label>
                </div>
                <div>
                  <label className="block">
                    <span className="text-slate-300 text-sm font-medium pb-2 block">
                      Maximum CPU Units
                    </span>
                    <input
                      className="form-input w-full rounded-md text-white focus:outline-0 focus:ring-2 focus:ring-[var(--primary-color)] border border-[#324d67] bg-[#192633] focus:border-[var(--primary-color)] h-12 placeholder:text-slate-400 px-3 text-sm"
                      placeholder="e.g. 10"
                    />
                  </label>
                </div>
                <div>
                  <label className="block">
                    <span className="text-slate-300 text-sm font-medium pb-2 block">
                      Minimum Memory (GB)
                    </span>
                    <input
                      className="form-input w-full rounded-md text-white focus:outline-0 focus:ring-2 focus:ring-[var(--primary-color)] border border-[#324d67] bg-[#192633] focus:border-[var(--primary-color)] h-12 placeholder:text-slate-400 px-3 text-sm"
                      placeholder="e.g. 4"
                    />
                  </label>
                </div>
                <div>
                  <label className="block">
                    <span className="text-slate-300 text-sm font-medium pb-2 block">
                      Maximum Memory (GB)
                    </span>
                    <input
                      className="form-input w-full rounded-md text-white focus:outline-0 focus:ring-2 focus:ring-[var(--primary-color)] border border-[#324d67] bg-[#192633] focus:border-[var(--primary-color)] h-12 placeholder:text-slate-400 px-3 text-sm"
                      placeholder="e.g. 16"
                    />
                  </label>
                </div>
                <div>
                  <label className="block">
                    <span className="text-slate-300 text-sm font-medium pb-2 block">
                      Minimum DB Connections
                    </span>
                    <input
                      className="form-input w-full rounded-md text-white focus:outline-0 focus:ring-2 focus:ring-[var(--primary-color)] border border-[#324d67] bg-[#192633] focus:border-[var(--primary-color)] h-12 placeholder:text-slate-400 px-3 text-sm"
                      placeholder="e.g. 100"
                    />
                  </label>
                </div>
                <div>
                  <label className="block">
                    <span className="text-slate-300 text-sm font-medium pb-2 block">
                      Maximum DB Connections
                    </span>
                    <input
                      className="form-input w-full rounded-md text-white focus:outline-0 focus:ring-2 focus:ring-[var(--primary-color)] border border-[#324d67] bg-[#192633] focus:border-[var(--primary-color)] h-12 placeholder:text-slate-400 px-3 text-sm"
                      placeholder="e.g. 1000"
                    />
                  </label>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-white text-xl font-bold leading-tight tracking-tight mb-6">
              Manual Resource Adjustment
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block">
                  <span className="text-slate-300 text-sm font-medium pb-2 block">
                    CPU Units
                  </span>
                  <input
                    className="form-input w-full rounded-md text-white focus:outline-0 focus:ring-2 focus:ring-[var(--primary-color)] border border-[#324d67] bg-[#192633] focus:border-[var(--primary-color)] h-12 placeholder:text-slate-400 px-3 text-sm"
                    placeholder="Current: 8"
                  />
                </label>
              </div>
              <div>
                <label className="block">
                  <span className="text-slate-300 text-sm font-medium pb-2 block">
                    Memory (GB)
                  </span>
                  <input
                    className="form-input w-full rounded-md text-white focus:outline-0 focus:ring-2 focus:ring-[var(--primary-color)] border border-[#324d67] bg-[#192633] focus:border-[var(--primary-color)] h-12 placeholder:text-slate-400 px-3 text-sm"
                    placeholder="Current: 12"
                  />
                </label>
              </div>
              <div>
                <label className="block">
                  <span className="text-slate-300 text-sm font-medium pb-2 block">
                    Database Connections
                  </span>
                  <input
                    className="form-input w-full rounded-md text-white focus:outline-0 focus:ring-2 focus:ring-[var(--primary-color)] border border-[#324d67] bg-[#192633] focus:border-[var(--primary-color)] h-12 placeholder:text-slate-400 px-3 text-sm"
                    placeholder="Current: 450"
                  />
                </label>
              </div>
            </div>
          </section>
          <div className="flex justify-end pt-4">
            <button className="flex items-center justify-center rounded-md h-10 px-6 bg-[var(--primary-color)] text-white text-sm font-bold hover:bg-blue-600 transition-colors">
              Apply Changes
            </button>
          </div>
        </div>
      </div>
    </main>
</div>
</div>
</body></html>
