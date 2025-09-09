
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
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function EditUserPage() {
  return (
    <main className="flex-1 p-10">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8">
          <Link
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white"
            href="/dashboard/users"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Users
          </Link>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">
            Edit User
          </h2>
          <p className="mt-2 text-slate-400">
            Modify the user's details, permissions, and account status.
          </p>
        </div>
        <div className="rounded-md border border-slate-800 bg-slate-900/50 p-8">
          <form className="space-y-6">
            <div>
              <Label
                className="block text-sm font-medium text-slate-300"
                htmlFor="name"
              >
                Name
              </Label>
              <div className="mt-2">
                <Input
                  className="form-input"
                  id="name"
                  name="name"
                  placeholder="e.g. Jane Doe"
                  type="text"
                  defaultValue="Jane Doe"
                />
              </div>
            </div>
            <div>
              <Label
                className="block text-sm font-medium text-slate-300"
                htmlFor="email"
              >
                Email address
              </Label>
              <div className="mt-2">
                <Input
                  className="form-input"
                  id="email"
                  name="email"
                  placeholder="e.g. jane.doe@example.com"
                  type="email"
                  defaultValue="jane.doe@example.com"
                />
              </div>
            </div>
            <div>
              <Label
                className="block text-sm font-medium text-slate-300"
                htmlFor="role"
              >
                Role
              </Label>
              <div className="mt-2">
                <Select defaultValue="administrator">
                  <SelectTrigger
                    className="form-input appearance-none bg-[url('data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20fill=%27none%27%20viewBox=%270%200%2020%2020%27%3e%3cpath%20stroke=%27%2364748b%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27%20stroke-width=%271.5%27%20d=%27M6%208l4%204%204-4%27/%3e%3c/svg%3e')] bg-right-2.5 bg-no-repeat"
                    id="role"
                    name="role"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="user">User</SelectItem>
                    <SelectItem value="administrator">Administrator</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-6">
                <h3 className="text-base font-semibold leading-6 text-white">Account Status</h3>
                <p className="mt-1 text-sm text-slate-400">Deactivating an account will prevent the user from logging in.</p>
                <div className="mt-4 flex items-center">
                    <Switch id="account-status" defaultChecked />
                    <Label htmlFor="account-status" className="ms-3 text-sm font-medium text-slate-300">
                        User account is active
                    </Label>
                </div>
            </div>

            <div className="border-t border-slate-800 pt-6">
              <div className="flex items-center justify-end gap-4">
                <Button
                  className="rounded-md bg-slate-800 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
                  type="button"
                  variant="secondary"
                >
                  Cancel
                </Button>
                <Button
                  className="rounded-md bg-primary-color px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                  type="submit"
                >
                  Save Changes
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
