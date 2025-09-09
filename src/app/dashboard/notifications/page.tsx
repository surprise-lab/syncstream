
'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

export default function NotificationsPage() {
  return (
    <main className="flex-1 p-8">
      <h1 className="text-4xl font-bold text-white">Notifications</h1>
      <p className="mt-2 text-gray-400">
        Manage your email notification preferences.
      </p>
      <div className="mt-8 space-y-12">
        <div>
          <h2 className="text-2xl font-semibold text-white">Email Notifications</h2>
          <p className="mt-1 text-gray-400">
            Subscribe or unsubscribe from different types of alerts.
          </p>
          <div className="mt-6 space-y-8">
            <div className="space-y-4">
              <h3 className="font-medium text-white">Sync Status</h3>
              <div className="space-y-4 pl-6 border-l border-gray-700">
                <label className="flex items-center gap-4 cursor-pointer">
                  <Checkbox
                    className="h-5 w-5 shrink-0 rounded border-2 border-[#324d67] bg-transparent text-[#1173d4] checked:border-[#1173d4] checked:bg-[#1173d4] focus:ring-0 focus:ring-offset-0 focus:border-[#324d67] focus:outline-none"
                  />
                  <span className="text-gray-300">
                    Integration Connection Lost
                  </span>
                </label>
                <label className="flex items-center gap-4 cursor-pointer">
                  <Checkbox
                    defaultChecked
                    className="h-5 w-5 shrink-0 rounded border-2 border-[#324d67] bg-transparent text-[#1173d4] checked:border-[#1173d4] checked:bg-[#1173d4] focus:ring-0 focus:ring-offset-0 focus:border-[#324d67] focus:outline-none"
                  />
                  <span className="text-gray-300">Sync Job Succeeded</span>
                </label>
                <label className="flex items-center gap-4 cursor-pointer">
                  <Checkbox
                    defaultChecked
                    className="h-5 w-5 shrink-0 rounded border-2 border-[#324d67] bg-transparent text-[#1173d4] checked:border-[#1173d4] checked:bg-[#1173d4] focus:ring-0 focus:ring-offset-0 focus:border-[#324d67] focus:outline-none"
                  />
                  <span className="text-gray-300">Sync Job Failed</span>
                </label>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium text-white">Security</h3>
              <div className="space-y-4 pl-6 border-l border-gray-700">
                <label className="flex items-center gap-4 cursor-pointer">
                  <Checkbox
                    defaultChecked
                    className="h-5 w-5 shrink-0 rounded border-2 border-[#324d67] bg-transparent text-[#1173d4] checked:border-[#1173d4] checked:bg-[#1173d4] focus:ring-0 focus:ring-offset-0 focus:border-[#324d67] focus:outline-none"
                  />
                  <span className="text-gray-300">New Login Detected</span>
                </label>
                <label className="flex items-center gap-4 cursor-pointer">
                  <Checkbox
                    defaultChecked
                    className="h-5 w-5 shrink-0 rounded border-2 border-[#324d67] bg-transparent text-[#1173d4] checked:border-[#1173d4] checked:bg-[#1173d4] focus:ring-0 focus:ring-offset-0 focus:border-[#324d67] focus:outline-none"
                  />
                  <span className="text-gray-300">Password Changed</span>
                </label>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium text-white">Product Updates</h3>
              <div className="space-y-4 pl-6 border-l border-gray-700">
                <label className="flex items-center gap-4 cursor-pointer">
                  <Checkbox
                    defaultChecked
                    className="h-5 w-5 shrink-0 rounded border-2 border-[#324d67] bg-transparent text-[#1173d4] checked:border-[#1173d4] checked:bg-[#1173d4] focus:ring-0 focus:ring-offset-0 focus:border-[#324d67] focus:outline-none"
                  />
                  <span className="text-gray-300">New Feature Available</span>
                </label>
                <label className="flex items-center gap-4 cursor-pointer">
                  <Checkbox
                    className="h-5 w-5 shrink-0 rounded border-2 border-[#324d67] bg-transparent text-[#1173d4] checked:border-[#1173d4] checked:bg-[#1173d4] focus:ring-0 focus:ring-offset-0 focus:border-[#324d67] focus:outline-none"
                  />
                  <span className="text-gray-300">Scheduled Maintenance</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white">
            Notification Delivery
          </h2>
          <p className="mt-1 text-gray-400">
            Configure how often you receive notifications.
          </p>
          <div className="mt-6 space-y-4">
            <label className="flex cursor-pointer items-center gap-4 rounded-md border border-[#324d67] p-4 has-[:checked]:border-[#1173d4] has-[:checked]:bg-[#1173d4]/10">
              <input
                defaultChecked
                className="h-5 w-5 border-2 border-[#324d67] bg-transparent text-transparent checked:border-[#1173d4] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#1173d4]"
                name="notification-frequency"
                type="radio"
              />
              <span className="font-medium text-white">Immediate</span>
            </label>
            <label className="flex cursor-pointer items-center gap-4 rounded-md border border-[#324d67] p-4 has-[:checked]:border-[#1173d4] has-[:checked]:bg-[#1173d4]/10">
              <input
                className="h-5 w-5 border-2 border-[#324d67] bg-transparent text-transparent checked:border-[#1173d4] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#1173d4]"
                name="notification-frequency"
                type="radio"
              />
              <span className="font-medium text-white">Daily Summary</span>
            </label>
            <label className="flex cursor-pointer items-center gap-4 rounded-md border border-[#324d67] p-4 has-[:checked]:border-[#1173d4] has-[:checked]:bg-[#1173d4]/10">
              <input
                className="h-5 w-5 border-2 border-[#324d67] bg-transparent text-transparent checked:border-[#1173d4] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#1173d4]"
                name="notification-frequency"
                type="radio"
              />
              <span className="font-medium text-white">Weekly Summary</span>
            </label>
          </div>
        </div>
        <div>
            <h2 className="text-2xl font-semibold text-white">Email Summaries</h2>
            <p className="mt-1 text-gray-400">Consolidate your notifications into a single daily or weekly email digest.</p>
            <div className="mt-6 space-y-6">
                <label className="flex items-start gap-4 cursor-pointer">
                    <Checkbox className="mt-1 h-5 w-5 shrink-0 rounded border-2 border-[#324d67] bg-transparent text-[#1173d4] checked:border-[#1173d4] checked:bg-[#1173d4] focus:ring-0 focus:ring-offset-0 focus:border-[#324d67] focus:outline-none" />
                    <div>
                        <p className="font-medium text-white">Daily Digest</p>
                        <p className="text-gray-400">Receive a summary of all notifications once a day.</p>
                    </div>
                </label>
                <label className="flex items-start gap-4 cursor-pointer">
                    <Checkbox className="mt-1 h-5 w-5 shrink-0 rounded border-2 border-[#324d67] bg-transparent text-[#1173d4] checked:border-[#1173d4] checked:bg-[#1173d4] focus:ring-0 focus:ring-offset-0 focus:border-[#324d67] focus:outline-none" />
                    <div>
                        <p className="font-medium text-white">Weekly Digest</p>
                        <p className="text-gray-400">Receive a summary of all notifications once a week.</p>
                    </div>
                </label>
            </div>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-700 pt-6">
        <Button className="rounded-md bg-[#1173d4] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1173d4]/80">
          Save Changes
        </Button>
      </div>
    </main>
  );
}
