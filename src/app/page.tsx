
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
            <span className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Step 1 of 4
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Welcome to SyncStream
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Let's get you started by connecting your first integration. This
              will unlock the power of automated workflows.
            </p>
          </div>
          <div className="mt-8">
            <div className="relative pt-1">
              <div className="mb-4 flex h-2 overflow-hidden rounded-full bg-[#233648] text-xs">
                <div
                  className="flex flex-col justify-center whitespace-nowrap bg-primary text-center text-white shadow-none transition-all duration-500"
                  style={{ width: '25%' }}
                ></div>
              </div>
            </div>
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
