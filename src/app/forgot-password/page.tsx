
'use client';

import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import Link from 'next/link';
import {ConnectrLogo} from '@/components/connectr-logo';

export default function ForgotPasswordPage() {
  return (
    <div className="relative flex size-full min-h-screen flex-col overflow-x-hidden">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[var(--border-color)] px-10 py-4">
        <div className="flex items-center gap-3 text-[var(--text-primary)]">
          <ConnectrLogo className="h-6 w-6 text-[var(--primary-color)]" />
          <h1 className="text-xl font-bold">SyncStream</h1>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-medium text-[var(--text-secondary)] md:flex">
          <Link
            className="transition-colors hover:text-[var(--text-primary)]"
            href="#"
          >
            Overview
          </Link>
          <Link
            className="transition-colors hover:text-[var(--text-primary)]"
            href="#"
          >
            Integrations
          </Link>
          <Link
            className="transition-colors hover:text-[var(--text-primary)]"
            href="#"
          >
            Connections
          </Link>
          <Link
            className="transition-colors hover:text-[var(--text-primary)]"
            href="#"
          >
            Logs
          </Link>
          <Link
            className="transition-colors hover:text-[var(--text-primary)]"
            href="#"
          >
            Docs
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="flex size-10 items-center justify-center rounded-full bg-[var(--secondary-color)] text-[var(--text-secondary)] transition-colors hover:bg-gray-700 hover:text-[var(--text-primary)]"
          >
            <span className="material-symbols-outlined">help</span>
          </Button>
          <div
            className="size-10 rounded-full bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzAXHKJK_12VUn7tfnC-CtrUlm4-kBt4N7gKwIbBAk37vwXENIDNlbwmCbT-hqyloGTl2AWOpLMbY7B44uPgipZMaiBnS7IkQE7M6f9BamzSBeEPdcBnpdkThMXwnB2XK2mnI-oUOIbi3foAVBjuCU1kBrvap0lddhxl9WopJH1I7AeGl7dGg1jQwkKnYKPsVYRHEA5qyjHB_S9cS_YD91oPZ7XcQLCWcd2QtB8pyp0yRSmWUiR0dtVoPX-8verSG7WMZg8Ig6O0kC")',
            }}
          ></div>
        </div>
      </header>
      <main className="flex flex-1 items-center justify-center px-4 py-16">
        <div className="mx-auto w-full max-w-md">
          <div className="flex flex-col items-center rounded-lg bg-[var(--secondary-color)] p-8 text-center shadow-lg">
            <div className="mb-6">
              <span className="material-symbols-outlined text-5xl text-[var(--primary-color)]">
                lock_reset
              </span>
            </div>
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
              Forgot Password?
            </h2>
            <p className="text-[var(--text-secondary)] mb-8">
              No worries, we'll help you get back in.
            </p>
            <form className="flex w-full flex-col gap-6">
              <div className="relative">
                <span className="material-symbols-outlined pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]">
                  email
                </span>
                <Input
                  className="h-14 w-full rounded-md border-0 bg-[#111a22] pl-12 pr-4 text-base text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] shadow-none transition-shadow focus:ring-2 focus:ring-inset focus:ring-[var(--primary-color)]"
                  placeholder="you@example.com"
                  required
                  type="email"
                />
              </div>
              <Button
                className="flex h-12 w-full items-center justify-center rounded-md bg-[var(--primary-color)] px-6 text-base font-bold text-white shadow-none transition-opacity hover:bg-opacity-90"
                type="submit"
              >
                Send Password Reset Email
              </Button>
            </form>
            <div className="relative my-6 flex w-full items-center justify-center">
              <div className="absolute inset-x-0 h-px bg-[var(--border-color)]"></div>
              <span className="relative bg-[var(--secondary-color)] px-4 text-sm text-[var(--text-secondary)]">
                OR
              </span>
            </div>
            <div className="w-full space-y-4 text-left">
              <button className="flex w-full items-center gap-4 rounded-lg border border-[var(--border-color)] p-4 text-left transition-colors hover:bg-[#2e4359]">
                <span className="material-symbols-outlined text-2xl text-[var(--primary-color)]">
                  quiz
                </span>
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)]">
                    Answer Security Questions
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Verify your identity by answering your preset security
                    questions.
                  </p>
                </div>
              </button>
              <button className="flex w-full items-center gap-4 rounded-lg border border-[var(--border-color)] p-4 text-left transition-colors hover:bg-[#2e4359]">
                <span className="material-symbols-outlined text-2xl text-[var(--primary-color)]">
                  smartphone
                </span>
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)]">
                    Verify by Phone
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Receive a verification code via SMS to your registered phone
                    number.
                  </p>
                </div>
              </button>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link
              className="flex items-center justify-center gap-2 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
              href="#"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              Back to Log In
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
