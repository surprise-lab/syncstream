
'use client';

import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import Link from 'next/link';
import {ConnectrLogo} from '@/components/connectr-logo';

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#111827] text-white">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-800 px-10 py-4">
        <div className="flex items-center gap-3">
          <ConnectrLogo className="h-8 w-8 text-primary" />
          <h1 className="text-xl font-bold">SyncStream</h1>
        </div>
      </header>
      <div className="flex flex-1 items-center justify-center py-16 px-4">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Welcome to SyncStream
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Log in or create an account to get started.
            </p>
          </div>
          <form action="#" className="space-y-6" method="POST">
            <div>
              <label className="sr-only" htmlFor="email">
                Email or Username
              </label>
              <Input
                autoComplete="email"
                className="h-12 border-gray-700 bg-gray-800 p-3 text-base placeholder:text-gray-400 focus:ring-primary"
                id="email"
                name="email"
                placeholder="Email or Username"
                required
                type="email"
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="password">
                Password
              </label>
              <Input
                autoComplete="current-password"
                className="h-12 border-gray-700 bg-gray-800 p-3 text-base placeholder:text-gray-400 focus:ring-primary"
                id="password"
                name="password"
                placeholder="Password"
                required
                type="password"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  className="form-checkbox h-4 w-4 rounded border-gray-600 bg-gray-800 text-primary focus:ring-primary"
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                />
                <label
                  className="ml-2 block text-sm text-gray-400"
                  htmlFor="remember-me"
                >
                  {' '}
                  Remember me{' '}
                </label>
              </div>
              <div className="text-sm">
                <Link
                  className="font-medium text-primary hover:text-blue-400"
                  href="/forgot-password"
                >
                  {' '}
                  Forgot Password?{' '}
                </Link>
              </div>
            </div>
            <div>
              <Button
                className="h-12 w-full bg-primary text-base font-bold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                type="submit"
              >
                Log In
              </Button>
            </div>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-gray-900 px-2 text-gray-400">
                Or continue with
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Button
              variant="outline"
              className="gap-3 border-gray-700 bg-gray-800 py-3 text-sm font-medium text-white hover:bg-gray-700"
            >
              <span className="material-symbols-outlined text-gray-300">
                cloud_sync
              </span>
              <span className="truncate">Continue with CloudSync</span>
            </Button>
            <Button
              variant="outline"
              className="gap-3 border-gray-700 bg-gray-800 py-3 text-sm font-medium text-white hover:bg-gray-700"
            >
              <span className="material-symbols-outlined text-gray-300">
                hub
              </span>
              <span className="truncate">Continue with ConnectHub</span>
            </Button>
          </div>
          <p className="text-center text-sm text-gray-400">
            Don't have an account?
            <Link
              className="font-medium text-primary hover:text-blue-400"
              href="#"
            >
              {' '}
              Sign up{' '}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
