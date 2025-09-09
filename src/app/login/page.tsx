
'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { SyncStreamLogo } from '@/components/syncstream-logo';

export default function LoginPage() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#111827] dark group/design-root overflow-x-hidden" style={{fontFamily: 'Inter, "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-gray-800 px-10 py-4">
          <div className="flex items-center gap-3 text-white">
              <SyncStreamLogo className="h-8 w-8 text-primary" />
            <h1 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">SyncStream</h1>
          </div>
        </header>
        <div className="flex flex-1 items-center justify-center py-16 px-4">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Welcome to SyncStream</h2>
              <p className="mt-2 text-sm text-gray-400">Log in or create an account to get started.</p>
            </div>
            <div className="mt-8">
              <input defaultChecked className="sr-only" id="login-tab" name="tabs" type="radio" />
              <input className="sr-only" id="register-tab" name="tabs" type="radio" />
              <nav className="flex border-b border-gray-700">
                <label className="w-1/2 cursor-pointer py-4 px-1 text-center text-sm font-medium text-gray-400 hover:text-white border-b-2 border-transparent" htmlFor="login-tab">Log In</label>
                <label className="w-1/2 cursor-pointer py-4 px-1 text-center text-sm font-medium text-gray-400 hover:text-white border-b-2 border-transparent" htmlFor="register-tab">Register</label>
              </nav>
              <div className="pt-8">
                <form action="#" className="space-y-6" id="login-form" method="POST">
                  <div>
                    <label className="sr-only" htmlFor="login-email">Email or Username</label>
                    <Input autoComplete="email" className="h-12 border-gray-700 bg-gray-800 p-3 text-base placeholder:text-gray-400 focus:ring-primary" id="login-email" name="email" placeholder="Email or Username" required type="email" />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="login-password">Password</label>
                    <Input autoComplete="current-password" className="h-12 border-gray-700 bg-gray-800 p-3 text-base placeholder:text-gray-400 focus:ring-primary" id="login-password" name="password" placeholder="Password" required type="password" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input className="form-checkbox h-4 w-4 rounded border-gray-600 bg-gray-800 text-primary focus:ring-primary" id="remember-me" name="remember-me" type="checkbox" />
                      <label className="ml-2 block text-sm text-gray-400" htmlFor="remember-me"> Remember me </label>
                    </div>
                    <div className="text-sm">
                      <a className="font-medium text-primary hover:text-blue-400" href="/forgot-password"> Forgot Password? </a>
                    </div>
                  </div>
                  <div>
                    <Button className="h-12 w-full bg-primary text-base font-bold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" type="submit">
                      Log In
                    </Button>
                  </div>
                </form>
                <form action="#" className="space-y-6 hidden" id="register-form" method="POST">
                  <div>
                    <label className="sr-only" htmlFor="register-username">Username</label>
                    <Input className="h-12 border-gray-700 bg-gray-800 p-3 text-base placeholder:text-gray-400 focus:ring-primary" id="register-username" name="username" placeholder="Username" required type="text" />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="register-email">Email Address</label>
                    <Input autoComplete="email" className="h-12 border-gray-700 bg-gray-800 p-3 text-base placeholder:text-gray-400 focus:ring-primary" id="register-email" name="email" placeholder="Email Address" required type="email" />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="register-password">Password</label>
                    <Input autoComplete="new-password" className="h-12 border-gray-700 bg-gray-800 p-3 text-base placeholder:text-gray-400 focus:ring-primary" id="register-password" name="password" placeholder="Password" required type="password" />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="confirm-password">Confirm Password</label>
                    <Input autoComplete="new-password" className="h-12 border-gray-700 bg-gray-800 p-3 text-base placeholder:text-gray-400 focus:ring-primary" id="confirm-password" name="confirm-password" placeholder="Confirm Password" required type="password" />
                  </div>
                  <div>
                    <Button className="h-12 w-full bg-primary text-base font-bold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" type="submit">
                      Register
                    </Button>
                  </div>
                </form>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-gray-900 px-2 text-gray-400">Or continue with</span>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button className="flex w-full items-center justify-center gap-3 rounded-md border border-gray-700 bg-gray-800 py-3 px-4 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                <span className="material-symbols-outlined text-gray-300">cloud_sync</span>
                <span className="truncate">Continue with CloudSync</span>
              </button>
              <button className="flex w-full items-center justify-center gap-3 rounded-md border border-gray-700 bg-gray-800 py-3 px-4 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                <span className="material-symbols-outlined text-gray-300">hub</span>
                <span className="truncate">Continue with ConnectHub</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
