
'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';

export default function SettingsPage() {
  return (
    <main className="flex-1 p-8">
      <div className="mx-auto max-w-4xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Security
          </h1>
          <p className="mt-2 text-slate-400">
            Manage your organization's security settings and access controls.
          </p>
        </header>
        <div className="space-y-10">
          <section>
            <h2 className="text-xl font-semibold text-white">
              Multi-factor authentication
            </h2>
            <p className="mt-1 text-slate-400">
              Require all users to use multi-factor authentication for an extra
              layer of security.
            </p>
            <div className="mt-6 overflow-hidden rounded-lg bg-[#18232F]">
              <div className="flex items-center justify-between p-6">
                <div>
                  <h3 className="font-medium text-white">Require MFA</h3>
                  <p className="mt-1 text-sm text-slate-400">
                    Enforce MFA for all members of your organization.
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">
              IP whitelisting
            </h2>
            <p className="mt-1 text-slate-400">
              Restrict access to your account to a specific range of IP
              addresses.
            </p>
            <div className="mt-6 overflow-hidden rounded-lg bg-[#18232F]">
              <div className="flex items-center justify-between p-6">
                <div>
                  <h3 className="font-medium text-white">
                    Enable IP whitelisting
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">
                    Only allow access from specified IP addresses.
                  </p>
                </div>
                <Switch />
              </div>
              <div className="border-t border-slate-700/50 bg-[#111A22] px-6 py-4">
                <Label
                  className="mb-2 block text-sm font-medium text-white"
                  htmlFor="ip-address"
                >
                  Allowed IP Addresses
                </Label>
                <Input
                  className="form-input w-full rounded-md border-slate-600 bg-[#192633] text-white focus:border-blue-500 focus:ring-blue-500/50"
                  id="ip-address"
                  placeholder="e.g., 203.0.113.1, 198.51.100.0/24"
                  type="text"
                />
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">
              Session management
            </h2>
            <p className="mt-1 text-slate-400">
              Configure session timeout settings to automatically log out users
              after a period of inactivity.
            </p>
            <div className="mt-6 rounded-lg bg-[#18232F] p-6">
              <div className="max-w-xs">
                <Label
                  className="mb-2 block text-sm font-medium text-white"
                  htmlFor="session-timeout"
                >
                  Session timeout
                </Label>
                <Select defaultValue="30">
                  <SelectTrigger
                    id="session-timeout"
                    className="form-select w-full rounded-md border-slate-600 bg-[#192633] text-white focus:border-blue-500 focus:ring-blue-500/50"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">15 minutes</SelectItem>
                    <SelectItem value="30">30 minutes</SelectItem>
                    <SelectItem value="60">1 hour</SelectItem>
                    <SelectItem value="480">8 hours</SelectItem>
                    <SelectItem value="1440">24 hours</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">
              Activity Log
            </h2>
            <p className="mt-1 text-slate-400">
              A log of security-related events, such as logins and
              configuration changes.
            </p>
            <div className="mt-6 overflow-hidden rounded-lg bg-[#18232F]">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-300">
                  <thead className="bg-[#233648] text-xs uppercase text-slate-400">
                    <tr>
                      <th className="px-6 py-3" scope="col">
                        Event
                      </th>
                      <th className="px-6 py-3" scope="col">
                        User
                      </th>
                      <th className="px-6 py-3" scope="col">
                        IP Address
                      </th>
                      <th className="px-6 py-3" scope="col">
                        Timestamp
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700/50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
                          <span>Successful login</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">admin@syncstream.com</td>
                      <td className="px-6 py-4">192.168.1.100</td>
                      <td className="px-6 py-4">2023-10-27 10:00:00 UTC</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-yellow-500"></span>
                          <span>Failed login attempt</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">guest@syncstream.com</td>
                      <td className="px-6 py-4">203.0.113.25</td>
                      <td className="px-6 py-4">2023-10-27 09:45:12 UTC</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                          <span>Password changed</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">user1@syncstream.com</td>
                      <td className="px-6 py-4">198.51.100.2</td>
                      <td className="px-6 py-4">2023-10-26 15:30:45 UTC</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                          <span>MFA policy enabled</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">admin@syncstream.com</td>
                      <td className="px-6 py-4">192.168.1.100</td>
                      <td className="px-6 py-4">2023-10-26 11:05:00 UTC</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                          <span>IP whitelist updated</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">admin@syncstream.com</td>
                      <td className="px-6 py-4">192.168.1.100</td>
                      <td className="px-6 py-4">2023-10-25 18:20:10 UTC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex items-center justify-between border-t border-slate-700/50 bg-[#111A22] p-4">
                <span className="text-sm text-slate-400">
                  Showing 1 to 5 of 20 entries
                </span>
                <div className="inline-flex items-center gap-2">
                  <button
                    className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-700/50 text-slate-400 transition-colors hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
                    disabled
                  >
                    <span className="material-symbols-outlined text-base">
                      chevron_left
                    </span>
                  </button>
                  <button className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-700/50 text-slate-400 transition-colors hover:bg-slate-700">
                    <span className="material-symbols-outlined text-base">
                      chevron_right
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
