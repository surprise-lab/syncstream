
'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function MfaSetupPage() {
  return (
    <main className="flex-1 p-8">
      <div className="mx-auto w-full max-w-2xl rounded-lg bg-card-background-color p-8 shadow-2xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Set up Multi-Factor Authentication
          </h2>
          <p className="mt-2 text-text-secondary-color">
            MFA adds an extra layer of security to your account. You'll need
            to provide a code from your phone in addition to your password
            when you sign in.
          </p>
        </div>
        <div className="mt-8 space-y-8">
          <div>
            <h3 className="text-lg font-semibold">
              1. Choose a verification method
            </h3>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="flex cursor-pointer items-center gap-4 rounded-md border border-border-color p-4 transition-all hover:border-primary-color has-[:checked]:border-primary-color has-[:checked]:bg-primary-color/10">
                <input
                  defaultChecked
                  className="radio-button size-5 appearance-none rounded-full border-2 border-border-color bg-transparent transition-all checked:border-primary-color"
                  name="mfa-method"
                  type="radio"
                />
                <div className="flex-1">
                  <p className="font-medium">Authenticator app</p>
                  <p className="text-sm text-text-secondary-color">
                    Use an app like Authy or Google Authenticator.
                  </p>
                </div>
              </label>
              <label className="flex cursor-pointer items-center gap-4 rounded-md border border-border-color p-4 transition-all hover:border-primary-color has-[:checked]:border-primary-color has-[:checked]:bg-primary-color/10">
                <input
                  className="radio-button size-5 appearance-none rounded-full border-2 border-border-color bg-transparent transition-all checked:border-primary-color"
                  name="mfa-method"
                  type="radio"
                />
                <div className="flex-1">
                  <p className="font-medium">SMS code</p>
                  <p className="text-sm text-text-secondary-color">
                    Receive a code via text message.
                  </p>
                </div>
              </label>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">
              2. Set up your authenticator app
            </h3>
            <p className="mt-2 text-sm text-text-secondary-color">
              Scan the QR code below with your authenticator app, or manually
              enter the secret key.
            </p>
            <div className="mt-4 flex flex-col items-center gap-6 sm:flex-row">
              <div className="flex-shrink-0">
                <div className="size-40 rounded-md bg-white p-2">
                  <img
                    alt="QR Code"
                    className="h-full w-full object-contain"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJMhBrUnyJjJEWsvsc9d2dqc-05dW-BTzPfcUedueZ54pu-doR9hHnHie4d2BfS-0z8VWNT7BVPSrElpuxd_hruwTtJiz7WHjFc3oKN-KuGG7VRCWzWqQk338-mTJCS2k06Eng3gkqSbtkG-e4Jn2T0p1rCYMKeGluhFydnnH6GXIIVWCEfdT7m-I_0D0f90tIYA9ZTGHflDbxrZNu0I9e3GWwcR8Ogvyd-_AN_VnSsApy6Z8opTVBHN-kyQt4xzgbysecaFI9TvTU"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 sm:items-start">
                <p className="text-sm text-text-secondary-color">
                  Can't scan? Enter this key manually:
                </p>
                <div className="flex items-center gap-2 rounded-md bg-slate-800 px-3 py-2">
                  <span className="font-mono text-lg tracking-wider">
                    JBSW Y3DP EHPK 3PXP
                  </span>
                  <button
                    className="text-text-secondary-color transition-colors hover:text-white"
                    title="Copy to clipboard"
                  >
                    <span className="material-symbols-outlined text-base">
                      content_copy
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">
              3. Verify your setup
            </h3>
            <p className="mt-2 text-sm text-text-secondary-color">
              Enter the 6-digit code from your authenticator app to complete
              the setup.
            </p>
            <div className="mt-4">
              <label className="sr-only" htmlFor="verification-code">
                Verification Code
              </label>
              <Input
                autoComplete="one-time-code"
                className="form-input block w-full max-w-xs rounded-md border-0 bg-slate-800 px-4 py-3 text-lg tracking-widest text-white placeholder:text-text-secondary-color focus:outline-none focus:ring-2 focus:ring-primary-color"
                id="verification-code"
                maxLength={6}
                placeholder="Enter 6-digit code"
                type="text"
              />
            </div>
          </div>
          <div className="border-t border-border-color pt-6">
            <h3 className="text-lg font-semibold">
              4. Save your recovery codes
            </h3>
            <p className="mt-2 text-sm text-text-secondary-color">
              If you lose access to your authenticator app, you can use these
              recovery codes to sign in. Keep them safe and accessible.
            </p>
            <div className="mt-4 rounded-md border border-border-color bg-slate-800 p-4">
              <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                <div className="font-mono text-lg tracking-wider">
                  a9b8-c7d6-e5f4
                </div>
                <div className="font-mono text-lg tracking-wider">
                  g3h2-i1j0-k9l8
                </div>
                <div className="font-mono text-lg tracking-wider">
                  m7n6-o5p4-q3r2
                </div>
                <div className="font-mono text-lg tracking-wider">
                  s1t0-u9v8-w7x6
                </div>
                <div className="font-mono text-lg tracking-wider">
                  y5z4-a3b2-c1d0
                </div>
                <div className="font-mono text-lg tracking-wider">
                  e9f8-g7h6-i5j4
                </div>
                <div className="font-mono text-lg tracking-wider">
                  k3l2-m1n0-o9p8
                </div>
                <div className="font-mono text-lg tracking-wider">
                  q7r6-s5t4-u3v2
                </div>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <button className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-text-secondary-color transition-colors hover:bg-slate-700 hover:text-white">
                  <span className="material-symbols-outlined text-base">
                    file_download
                  </span>
                  Download
                </button>
                <button className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-text-secondary-color transition-colors hover:bg-slate-700 hover:text-white">
                  <span className="material-symbols-outlined text-base">
                    print
                  </span>
                  Print
                </button>
                <button className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-text-secondary-color transition-colors hover:bg-slate-700 hover:text-white">
                  <span className="material-symbols-outlined text-base">
                    content_copy
                  </span>
                  Copy
                </button>
              </div>
            </div>
            <div className="mt-4 flex items-start gap-3">
              <input
                className="mt-1 size-4 shrink-0 rounded border-border-color bg-slate-800 text-primary-color focus:ring-primary-color"
                id="saved-codes"
                type="checkbox"
              />
              <label
                className="text-sm text-text-secondary-color"
                htmlFor="saved-codes"
              >
                I have saved my recovery codes in a secure place.
              </label>
            </div>
          </div>
          <div className="flex justify-end border-t border-border-color pt-6">
            <Button className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-md bg-primary-color px-6 py-3 text-base font-bold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50">
              Enable MFA
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
