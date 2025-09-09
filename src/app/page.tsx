
'use client';

import { Logo } from '@/components/logo';

export default function OnboardingPage() {
  return (
    <div className="flex h-full grow flex-col">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#233648] px-10 py-3">
        <div className="flex items-center gap-4 text-white">
          <div className="size-8 text-primary">
            <Logo />
          </div>
          <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] text-white">
            SyncStream
          </h2>
        </div>
        <div className="flex flex-1 justify-end gap-2">
          <button className="flex h-10 w-10 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-gray-700/50 hover:text-white">
            <span className="material-symbols-outlined">help</span>
          </button>
          <div className="ml-4">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDL0QsvRuSY9y6iRDnNjAoq1TqVMlHvFDCMbssxrQx8uAtJsoBx2DBYFCh1WmnqeIf5ndu0tcn5DgBSXZH-RLRseyI_0BRhmJem-mhbgfr0Yy3WLqKtUVDf6YJydkaYynW0lTrgDBPRiwTEwfeOxj5ZKAY7eoWlHjuNN00amdqUyqRtWae6p1WxH52Zt69t8jCyBq4l6KiTkZCaXqJ3GZNn36Wmmw6kgH-5HZMLZEsRiAAm7VvREwOTHwIlSQhvqwTtcO2zyZNq5MBZ")',
              }}
            ></div>
          </div>
        </div>
      </header>
      <main className="flex flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-lg">
          <div className="text-center">
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Welcome to SyncStream
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Let's get you started by connecting your first integration. This
              will unlock the power of automated workflows.
            </p>
          </div>
          <div className="mb-8 mt-12">
            <nav aria-label="Progress">
              <ol className="flex items-center" role="list">
                <li className="relative pr-8 sm:pr-20">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center"
                  >
                    <div className="h-0.5 w-full bg-primary"></div>
                  </div>
                  <a
                    className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary"
                    href="#"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        clipRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Step 1: Welcome</span>
                  </a>
                </li>
                <li className="relative pr-8 sm:pr-20">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center"
                  >
                    <div className="h-0.5 w-full bg-[#233648]"></div>
                  </div>
                  <a
                    className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#233648] hover:bg-[#344a5f]"
                    href="#"
                  >
                    <span className="text-sm font-medium text-gray-300">
                      02
                    </span>
                    <span className="sr-only">Step 2: Connect</span>
                  </a>
                </li>
                <li className="relative pr-8 sm:pr-20">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center"
                  >
                    <div className="h-0.5 w-full bg-[#233648]"></div>
                  </div>
                  <a
                    className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#233648] hover:bg-[#344a5f]"
                    href="#"
                  >
                    <span className="text-sm font-medium text-gray-300">
                      03
                    </span>
                    <span className="sr-only">Step 3: Configure</span>
                  </a>
                </li>
                <li className="relative">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center"
                  >
                    <div className="h-0.5 w-full bg-[#233648]"></div>
                  </div>
                  <a
                    className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#233648] hover:bg-[#344a5f]"
                    href="#"
                  >
                    <span className="text-sm font-medium text-gray-300">
                      04
                    </span>
                    <span className="sr-only">Step 4: Finalize</span>
                  </a>
                </li>
              </ol>
            </nav>
          </div>
          <div className="mt-8 rounded-lg bg-[#18232F] p-8 shadow-lg">
            <h3 className="mb-2 text-xl font-bold text-white">
              Setup your first integration
            </h3>
            <p className="mb-6 text-gray-400">
              Connect your favorite apps and services to start automating tasks.
            </p>
            <button className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#111A22]">
              Start Setup
            </button>
            <div className="mt-6 text-center">
              <button className="text-sm text-gray-400 transition-colors hover:text-white">
                Skip for now
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
