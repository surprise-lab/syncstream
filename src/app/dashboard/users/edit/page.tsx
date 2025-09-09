
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
            Modify the user's details and permissions.
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
                  className="form-input w-full rounded-md border-slate-700 bg-slate-800 px-4 py-3 text-slate-200 placeholder-slate-500 focus:border-primary-color focus:ring-primary-color"
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
                  className="form-input w-full rounded-md border-slate-700 bg-slate-800 px-4 py-3 text-slate-200 placeholder-slate-500 focus:border-primary-color focus:ring-primary-color"
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
                    className="form-input w-full rounded-md border-slate-700 bg-slate-800 px-4 py-3 text-slate-200 placeholder-slate-500 focus:border-primary-color focus:ring-primary-color"
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
            <div>
              <Label
                className="block text-sm font-medium text-slate-300"
                htmlFor="status"
              >
                Status
              </Label>
              <div className="mt-2">
                <div className="flex items-center space-x-3">
                  <Switch id="status" defaultChecked />
                  <Label htmlFor="status" className="font-medium text-slate-300">
                    Active
                  </Label>
                </div>
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
