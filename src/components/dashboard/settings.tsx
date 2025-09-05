
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Save } from 'lucide-react';

export function Settings() {
  return (
    <main className="flex-1 p-10">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
        <p className="text-muted-foreground mb-8">
          Manage your integration settings and preferences.
        </p>

        <div className="space-y-8">
          <div className="bg-card p-8 rounded-2xl border border-border">
            <h2 className="text-xl font-bold text-white mb-6">
              Account Information
            </h2>
            <div className="space-y-6">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue="user@example.com" />
              </div>
              <div>
                <Button variant="outline">Change Password</Button>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-2xl border border-border">
            <h2 className="text-xl font-bold text-white mb-6">
              Notification Settings
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="sync-success">Sync Success</Label>
                <Switch id="sync-success" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="sync-failure">Sync Failure</Label>
                <Switch id="sync-failure" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="weekly-summary">Weekly Summary</Label>
                <Switch id="weekly-summary" />
              </div>
            </div>
          </div>
          
          <div className="flex justify-end gap-4">
            <Button variant="outline">
              <span>Cancel</span>
            </Button>
            <Button>
              <Save />
              <span>Save Settings</span>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
