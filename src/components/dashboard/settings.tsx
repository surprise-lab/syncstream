
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Save } from 'lucide-react';

export function Settings() {
  return (
    <main className="flex-1 p-6">
        <h1 className="text-white text-3xl font-bold mb-6">Settings</h1>
        <div className="p-6 rounded-md border border-border bg-card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Alertable Actions</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="failed-login">Failed login attempts</Label>
                            <Switch id="failed-login" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                            <Label htmlFor="permission-changes">Permission changes</Label>
                            <Switch id="permission-changes" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                            <Label htmlFor="user-added">New user added</Label>
                            <Switch id="user-added" />
                        </div>
                        <div className="flex items-center justify-between">
                            <Label htmlFor="user-removed">User removed</Label>
                            <Switch id="user-removed" defaultChecked />
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Notification Methods</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="email-notifications">Email Notifications</Label>
                            <Switch id="email-notifications" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                            <Label htmlFor="inapp-notifications">In-App Notifications</Label>
                            <Switch id="inapp-notifications" defaultChecked />
                        </div>
                    </div>
                    <div className="mt-6">
                        <Label htmlFor="admin-email" className="block text-sm font-medium mb-2">Admin Email Address</Label>
                        <Input id="admin-email" placeholder="admin@example.com" type="email" />
                    </div>
                </div>
            </div>
            <div className="mt-8 flex justify-end">
                <Button>
                    <Save />
                    Save Settings
                </Button>
            </div>
        </div>
    </main>
  );
}
