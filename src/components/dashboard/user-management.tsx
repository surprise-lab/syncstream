
'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function UserManagement() {
  return (
    <main className="flex-1 p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-white text-3xl font-bold">
            Members &amp; Invitations
          </h1>
          <p className="text-slate-400">Manage your team's access to SyncStream.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              search
            </span>
            <Input
              className="form-input w-full rounded-md border-slate-700 bg-[#192633] text-white pl-10 pr-4 py-2 focus:border-[#1172d4] focus:ring-[#1172d4]"
              placeholder="Search..."
              type="text"
            />
          </div>
          <div className="relative">
            <Button className="flex items-center gap-2 rounded-md border border-slate-700 bg-[#192633] px-4 py-2 text-sm font-medium text-white hover:bg-[#233648]">
              <span className="material-symbols-outlined text-base">
                filter_list
              </span>
              <span>Filter</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="border-b border-slate-700 mb-6">
        <nav className="flex gap-8">
          <a
            className="pb-3 text-slate-400 hover:text-white border-b-2 border-transparent hover:border-[#1172d4]"
            href="#"
          >
            Members
          </a>
          <a className="pb-3 text-white border-b-2 border-[#1172d4]" href="#">
            Invitations
          </a>
        </nav>
      </div>
      <div className="bg-[#192633] p-6 rounded-lg mb-8">
        <h2 className="text-xl font-bold text-white mb-4">
          Send New Invitation
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div className="col-span-1">
            <label
              className="block text-sm font-medium text-slate-300 mb-1"
              htmlFor="email"
            >
              Recipient Email
            </label>
            <Input
              className="form-input w-full rounded-md border-slate-700 bg-[#233648] text-white focus:border-[#1172d4] focus:ring-[#1172d4]"
              id="email"
              placeholder="name@company.com"
              type="email"
            />
          </div>
          <div className="col-span-1">
            <label
              className="block text-sm font-medium text-slate-300 mb-1"
              htmlFor="role"
            >
              Role
            </label>
            <Select>
                <SelectTrigger id="role" className="form-select w-full rounded-md border-slate-700 bg-[#233648] text-white focus:border-[#1172d4] focus:ring-[#1172d4]">
                    <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Admin">Admin</SelectItem>
                    <SelectItem value="Member">Member</SelectItem>
                    <SelectItem value="Viewer">Viewer</SelectItem>
                </SelectContent>
            </Select>
          </div>
          <div className="col-span-1">
            <Button
              className="w-full flex items-center justify-center gap-2 rounded-md bg-[#1172d4] px-4 py-2 text-sm font-bold text-white hover:bg-blue-600 transition-colors"
              type="submit"
            >
              <span className="material-symbols-outlined"> send </span>
              <span>Send Invitation</span>
            </Button>
          </div>
        </form>
      </div>
      <div>
        <h2 className="text-xl font-bold text-white mb-4">
          Pending Invitations
        </h2>
        <div className="overflow-x-auto rounded-lg border border-slate-700">
          <table className="w-full text-left text-sm text-slate-400">
            <thead className="bg-[#192633] text-xs uppercase text-slate-400">
              <tr>
                <th className="px-6 py-3" scope="col">
                  Email
                </th>
                <th className="px-6 py-3" scope="col">
                  Role
                </th>
                <th className="px-6 py-3" scope="col">
                  Status
                </th>
                <th className="px-6 py-3" scope="col">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700 bg-[#111a22] hover:bg-[#192633]">
                <td className="px-6 py-4 font-medium text-white">
                  alice.smith@example.com
                </td>
                <td className="px-6 py-4">Admin</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center rounded-full bg-yellow-900 px-2.5 py-0.5 text-xs font-medium text-yellow-300">
                    Pending
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-4">
                    <button className="font-medium text-[#1172d4] hover:underline">
                      Resend
                    </button>
                    <button className="font-medium text-red-500 hover:underline">
                      Revoke
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-slate-700 bg-[#111a22] hover:bg-[#192633]">
                <td className="px-6 py-4 font-medium text-white">
                  bob.johnson@example.com
                </td>
                <td className="px-6 py-4">Member</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center rounded-full bg-green-900 px-2.5 py-0.5 text-xs font-medium text-green-300">
                    Sent
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-4">
                    <button className="font-medium text-[#1172d4] hover:underline">
                      Resend
                    </button>
                    <button className="font-medium text-red-500 hover:underline">
                      Revoke
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="bg-[#111a22] hover:bg-[#192633]">
                <td className="px-6 py-4 font-medium text-white">
                  carol.williams@example.com
                </td>
                <td className="px-6 py-4">Member</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center rounded-full bg-yellow-900 px-2.5 py-0.5 text-xs font-medium text-yellow-300">
                    Pending
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-4">
                    <button className="font-medium text-[#1172d4] hover:underline">
                      Resend
                    </button>
                    <button className="font-medium text-red-500 hover:underline">
                      Revoke
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
