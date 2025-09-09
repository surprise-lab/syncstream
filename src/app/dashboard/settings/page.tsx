
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
    <main className="flex-1 p-8">
      <header className="mb-8">
        <h1 className="text-white text-3xl font-bold">Application Settings</h1>
        <p className="text-gray-400 mt-1">
          Configure global parameters for SyncStream.
        </p>
      </header>
      <div className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-white text-lg font-semibold">Localization</h3>
            <p className="text-gray-400 text-sm mt-1">
              Set the default language and regional settings.
            </p>
          </div>
          <div className="md:col-span-2 space-y-6">
            <div>
              <Label
                className="block text-sm font-medium text-gray-300 mb-2"
                htmlFor="language"
              >
                Default Language
              </Label>
              <Select defaultValue="en-us">
                <SelectTrigger
                  id="language"
                  className="form-select w-full rounded-md border border-[#324d67] bg-[#192633] text-white focus:ring-2 focus:ring-[#1173d4] focus:border-[#1173d4] bg-[image:--select-button-svg] placeholder:text-[#92adc9]"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en-us">English (United States)</SelectItem>
                  <SelectItem value="es-es">Español (España)</SelectItem>
                  <SelectItem value="fr-fr">Français (France)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label
                className="block text-sm font-medium text-gray-300 mb-2"
                htmlFor="regional-format"
              >
                Regional Format
              </Label>
              <Select defaultValue="us">
                <SelectTrigger
                  id="regional-format"
                  className="form-select w-full rounded-md border border-[#324d67] bg-[#192633] text-white focus:ring-2 focus:ring-[#1173d4] focus:border-[#1173d4] bg-[image:--select-button-svg] placeholder:text-[#92adc9]"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="de">Germany</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-white text-lg font-semibold">System</h3>
            <p className="text-gray-400 text-sm mt-1">
              Configure the core system settings.
            </p>
          </div>
          <div className="md:col-span-2 space-y-6">
            <div>
              <Label
                className="block text-sm font-medium text-gray-300 mb-2"
                htmlFor="timezone"
              >
                System Time Zone
              </Label>
              <Select defaultValue="pst">
                <SelectTrigger
                  id="timezone"
                  className="form-select w-full rounded-md border border-[#324d67] bg-[#192633] text-white focus:ring-2 focus:ring-[#1173d4] focus:border-[#1173d4] bg-[image:--select-button-svg] placeholder:text-[#92adc9]"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pst">
                    (UTC-08:00) Pacific Time (US &amp; Canada)
                  </SelectItem>
                  <SelectItem value="est">
                    (UTC-05:00) Eastern Time (US &amp; Canada)
                  </SelectItem>
                  <SelectItem value="cet">
                    (UTC+01:00) Central European Time
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-white text-lg font-semibold">
              General Behavior
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Manage general application behaviors.
            </p>
          </div>
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center justify-between bg-[#192633] p-4 rounded-md border border-[#324d67]">
              <div>
                <h4 className="font-medium text-white">
                  Enable Maintenance Mode
                </h4>
                <p className="text-sm text-gray-400">
                  Temporarily make the application unavailable.
                </p>
              </div>
              <Switch id="maintenance-mode" />
            </div>
            <div className="flex items-center justify-between bg-[#192633] p-4 rounded-md border border-[#324d67]">
              <div>
                <h4 className="font-medium text-white">Automatic Logout</h4>
                <p className="text-sm text-gray-400">
                  Log out users after a period of inactivity.
                </p>
              </div>
              <Switch id="auto-logout" defaultChecked />
            </div>
          </div>
        </div>
        <div className="flex justify-end pt-8 border-t border-gray-800">
          <Button className="px-6 py-2 rounded-md bg-[#1173d4] text-white text-sm font-bold hover:bg-[#0f63b6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#111a22] focus:ring-[#1173d4]">
            Save Changes
          </Button>
        </div>
      </div>
    </main>
  );
}
