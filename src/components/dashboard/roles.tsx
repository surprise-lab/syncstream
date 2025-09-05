
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Check, X, Shield, PlusCircle } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const roles = [
  {
    name: 'Admin',
    description: 'Full access to all features and settings.',
    permissions: {
      'Manage Users & Roles': true,
      'Configure Settings': true,
      'View & Manage All Orders': true,
      'Full API Access': true,
    },
  },
  {
    name: 'Manager',
    description: 'Can manage products and orders.',
    permissions: {
      'Manage Users & Roles': false,
      'Configure Settings': false,
      'View & Manage All Orders': true,
      'View & Manage Products': true,
    },
  },
  {
    name: 'User',
    description: 'Can view orders and products.',
    permissions: {
      'Manage Users & Roles': false,
      'Configure Settings': false,
      'View Own Orders': true,
      'View Products': true,
    },
  },
];

export function Roles() {
  return (
    <main className="flex-1 p-6 bg-gray-900 text-white">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Roles & Permissions</h1>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <PlusCircle className="mr-2 h-4 w-4" />
          Create New Role
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roles.map((role) => (
          <Card key={role.name} className="bg-gray-800 border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl text-white">{role.name}</CardTitle>
                  <CardDescription className="text-gray-400">{role.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 pt-2">
              <h4 className="font-semibold text-gray-300">Permissions:</h4>
              <ul className="space-y-2 text-sm">
                {Object.entries(role.permissions).map(([permission, granted]) => (
                  <li key={permission} className="flex items-center gap-2">
                    {granted ? (
                      <Check className="h-4 w-4 text-green-400" />
                    ) : (
                      <X className="h-4 w-4 text-red-400" />
                    )}
                    <span className="text-gray-300">{permission}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-end pt-4">
                <Button variant="link" className="text-primary hover:text-primary/80">Edit Role</Button>
              </div>
            </CardContent>
          </Card>
        ))}

        <Card className="bg-gray-800 border-gray-700 border-dashed">
            <CardHeader>
                <CardTitle className="text-xl text-white">Create a New Role</CardTitle>
                <CardDescription className="text-gray-400">Define a new role and set its permissions.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div>
                    <Label htmlFor="role-name" className="text-gray-300">Role Name</Label>
                    <Input id="role-name" placeholder="e.g. Accountant" className="mt-2 bg-gray-900 border-gray-600 focus:ring-primary" />
                </div>
                 <div>
                    <Label htmlFor="role-desc" className="text-gray-300">Description</Label>
                    <Input id="role-desc" placeholder="Briefly describe this role" className="mt-2 bg-gray-900 border-gray-600 focus:ring-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-300 mb-3">Set Permissions:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="perm-users" className="text-gray-300">Manage Users & Roles</Label>
                        <Switch id="perm-users" />
                    </div>
                    <div className="flex items-center justify-between">
                        <Label htmlFor="perm-settings" className="text-gray-300">Configure Settings</Label>
                        <Switch id="perm-settings" />
                    </div>
                    <div className="flex items-center justify-between">
                        <Label htmlFor="perm-orders" className="text-gray-300">View & Manage All Orders</Label>
                        <Switch id="perm-orders" />
                    </div>
                     <div className="flex items-center justify-between">
                        <Label htmlFor="perm-api" className="text-gray-300">Full API Access</Label>
                        <Switch id="perm-api" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-end pt-2">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Save Role</Button>
                </div>
            </CardContent>
        </Card>

      </div>
    </main>
  );
}
