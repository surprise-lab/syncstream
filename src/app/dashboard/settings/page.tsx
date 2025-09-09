
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
import Link from 'next/link';

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
                        <a aria-current="page" className="border-primary-500 text-primary-400 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium" href="/dashboard/settings">Profile</a>
                        <a className="border-transparent text-gray-400 hover:border-gray-500 hover:text-gray-200 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium" href="/dashboard/notifications">Notifications</a>
                        <a className="border-transparent text-gray-400 hover:border-gray-500 hover:text-gray-200 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium" href="/dashboard/security">Security</a>
                        <a className="border-transparent text-gray-400 hover:border-gray-500 hover:text-gray-200 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium" href="/dashboard/settings/data-retention">Data Retention</a>
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
                            <div className="col-span-full">
                                <Label className="block text-sm font-medium leading-6 text-white" htmlFor="photo">Photo</Label>
                                <div className="mt-2 flex items-center gap-x-3">
                                    <img alt="Amelia" className="h-12 w-12 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUYsHfCNpwMlQneICtKxVVO0lbjTiybBZkV9gyXmfiAUdvwppFP9jFGZ3hmLba1gcdE_qojraocig7MNzSbs-_ap6f4dBMHtxQ0XTndLEmasWMm8TtykfwC2KAsHx-SsIehSeUBi_tmdbWUCTQ2LPDD_4nZgwHVgZX5dBpUYMQZWnLco6C7SHPm25KSNEn2FgaDqOsE9h5cNAvnZz5s-RIV0yzJBl7SBfeEGfqXypeSUC5aNpgP5xu0MTNzcjuqRXvbFiFaL87Xvhv"/>
                                    <button className="rounded-md bg-white/10 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20" type="button">Change</button>
                                </div>
                            </div>
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
                        <h2 className="text-base font-semibold leading-7 text-white">Connected Accounts</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-400">Manage your social logins and connected services.</p>
                    </div>
                    <div className="md:col-span-2">
                        <ul className="space-y-4">
                            <li className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 48 48">
                                        <g clipPath="url(#clip0_104_2)">
                                            <path d="M47.5315 24.5528C47.5315 22.8856 47.3824 21.2828 47.0805 19.7443H24.2383V28.718H37.3325C36.8188 31.892 35.2483 34.5517 32.9515 36.1472V41.7247H40.1873C44.7891 37.3113 47.5315 31.4678 47.5315 24.5528Z" fill="#4285F4"></path>
                                            <path d="M24.2388 48.0001C30.4965 48.0001 35.7925 46.0349 39.9972 42.0461L32.952 36.1473C30.932 37.4933 27.868 38.4552 24.2388 38.4552C17.7538 38.4552 12.2471 34.0418 10.227 28.3242H2.80078V33.9016C6.96698 42.148 14.8878 48.0001 24.2388 48.0001Z" fill="#34A853"></path>
                                            <path d="M10.2271 28.3242C9.7519 26.9038 9.48974 25.4057 9.48974 23.8643C9.48974 22.3229 9.7519 20.8248 10.2271 19.4044V13.8269H2.80088C1.03714 17.1517 0 20.3902 0 23.8643C0 27.3384 1.03714 30.5768 2.80088 33.9016L10.2271 28.3242Z" fill="#FBBC05"></path>
                                            <path d="M24.2388 9.27344C28.2562 9.27344 31.42 10.658 33.794 12.9379L40.4851 6.24683C36.2711 2.37899 30.6409 0 24.2388 0C14.8878 0 6.96698 5.85203 2.80078 14.0984L10.227 19.6759C12.2471 13.6868 17.7538 9.27344 24.2388 9.27344Z" fill="#EA4335"></path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_104_2">
                                                <rect fill="white" height="48" width="48"></rect>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span className="text-sm font-medium text-white">Google</span>
                                </div>
                                <button className="text-sm font-semibold leading-6 text-red-500 hover:text-red-400" type="button">Unlink</button>
                            </li>
                            <li className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 23 23">
                                        <path d="M1 1H10.2609V10.2609H1V1Z" fill="#F25022"></path>
                                        <path d="M12.7391 1H22V10.2609H12.7391V1Z" fill="#7FBA00"></path>
                                        <path d="M1 12.7391H10.2609V22H1V12.7391Z" fill="#00A4EF"></path>
                                        <path d="M12.7391 12.7391H22V22H12.7391V12.7391Z" fill="#FFB900"></path>
                                    </svg>
                                    <span className="text-sm font-medium text-white">Microsoft</span>
                                </div>
                                <button className="rounded-md bg-white/10 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20" type="button">Link</button>
                            </li>
                        </ul>
                    </div>
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
