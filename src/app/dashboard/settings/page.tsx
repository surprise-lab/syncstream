
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
    <main className="py-10 lg:pl-16">
        <div className="px-4 sm:px-6 lg:px-8">
            <header>
                <h1 className="text-3xl font-bold leading-tight tracking-tight text-white">Settings</h1>
            </header>
            <div className="mt-8">
                <div className="border-b border-white/10">
                    <nav aria-label="Tabs" className="-mb-px flex space-x-8">
                        <a aria-current="page" className="border-primary-500 text-primary-400 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium" href="#">Profile</a>
                        <a className="border-transparent text-gray-400 hover:border-gray-500 hover:text-gray-200 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium" href="#">Notifications</a>
                        <a className="border-transparent text-gray-400 hover:border-gray-500 hover:text-gray-200 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium" href="#">Security</a>
                    </nav>
                </div>
            </div>
            <div className="mt-10 divide-y divide-white/10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10 py-10">
                    <div>
                        <h2 className="text-base font-semibold leading-7 text-white">Personal Information</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-400">Update your photo and personal details here.</p>
                    </div>
                    <form className="md:col-span-2">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <Label className="block text-sm font-medium leading-6 text-white" htmlFor="name">Name</Label>
                                <div className="mt-2">
                                    <Input autoComplete="name" className="form-input" id="name" name="name" type="text" defaultValue="Amelia"/>
                                </div>
                            </div>
                            <div className="sm:col-span-4">
                                <Label className="block text-sm font-medium leading-6 text-white" htmlFor="email">Email address</Label>
                                <div className="mt-2">
                                    <Input autoComplete="email" className="form-input" id="email" name="email" type="email" defaultValue="amelia.f@example.com"/>
                                </div>
                            </div>
                            <div className="sm:col-span-4">
                                <Label className="block text-sm font-medium leading-6 text-white" htmlFor="phone">Phone</Label>
                                <div className="mt-2">
                                    <Input autoComplete="tel" className="form-input" id="phone" name="phone" type="tel" defaultValue="+1 (555) 123-4567"/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10 py-10">
                    <div>
                        <h2 className="text-base font-semibold leading-7 text-white">Change password</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-400">Update your password associated with your account.</p>
                    </div>
                    <form className="md:col-span-2">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <Label className="block text-sm font-medium leading-6 text-white" htmlFor="current-password">Current password</Label>
                                <div className="mt-2">
                                    <Input autoComplete="current-password" className="form-input" id="current-password" name="current-password" type="password"/>
                                </div>
                            </div>
                            <div className="sm:col-span-4">
                                <Label className="block text-sm font-medium leading-6 text-white" htmlFor="new-password">New password</Label>
                                <div className="mt-2">
                                    <Input autoComplete="new-password" className="form-input" id="new-password" name="new-password" type="password"/>
                                </div>
                            </div>
                            <div className="sm:col-span-4">
                                <Label className="block text-sm font-medium leading-6 text-white" htmlFor="confirm-password">Confirm new password</Label>
                                <div className="mt-2">
                                    <Input autoComplete="new-password" className="form-input" id="confirm-password" name="confirm-password" type="password"/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
                <Button className="text-sm font-semibold leading-6 text-white" type="button" variant="ghost">Cancel</Button>
                <Button className="rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600" type="submit">
                    Save Changes
                </Button>
            </div>
        </div>
    </main>
  );
}
