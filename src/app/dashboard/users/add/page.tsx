
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

export default function AddUserPage() {
  return (
      <main className="flex-1 bg-[#111827] p-12">
        <div className="mx-auto max-w-lg">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white">
              Create a New User
            </h2>
            <p className="text-gray-400 mt-2">
              Fill out the form below to add a new user to SyncStream.
            </p>
          </div>
          <form className="space-y-6">
            <div>
              <Label
                className="block text-sm font-medium text-gray-300"
                htmlFor="name"
              >
                Name
              </Label>
              <div className="mt-2">
                <Input
                  className="block w-full rounded-md border-0 bg-[#1F2937] px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-[#374151] placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  id="name"
                  name="name"
                  placeholder="e.g. Jane Doe"
                  type="text"
                />
              </div>
            </div>
            <div>
              <Label
                className="block text-sm font-medium text-gray-300"
                htmlFor="email"
              >
                Email address
              </Label>
              <div className="mt-2">
                <Input
                  autoComplete="email"
                  className="block w-full rounded-md border-0 bg-[#1F2937] px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-[#374151] placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  id="email"
                  name="email"
                  placeholder="e.g. jane.doe@example.com"
                  type="email"
                />
              </div>
            </div>
            <div>
              <Label
                className="block text-sm font-medium text-gray-300"
                htmlFor="password"
              >
                Password
              </Label>
              <div className="mt-2">
                <Input
                  autoComplete="new-password"
                  className="block w-full rounded-md border-0 bg-[#1F2937] px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-[#374151] placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  id="password"
                  name="password"
                  placeholder="Enter a secure password"
                  type="password"
                />
              </div>
            </div>
            <div>
              <Label
                className="block text-sm font-medium text-gray-300"
                htmlFor="role"
              >
                Role
              </Label>
              <div className="mt-2">
                <Select>
                  <SelectTrigger
                    id="role"
                    name="role"
                    className="block w-full rounded-md border-0 bg-[#1F2937] px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-[#374151] focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  >
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="administrator">Administrator</SelectItem>
                    <SelectItem value="editor">Editor</SelectItem>
                    <SelectItem value="viewer">Viewer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-end pt-4">
              <Button
                className="flex justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                type="submit"
              >
                Create User
              </Button>
            </div>
          </form>
        </div>
      </main>
  );
}
