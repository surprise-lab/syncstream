
'use client';

import { Button } from '@/components/ui/button';
import React, { useState } from 'react';

const initialRoles = {
  administrator: {
    name: 'Administrator',
    users: '2 users',
    permissions: [
      'Create Workflows',
      'Edit Workflows',
      'Delete Workflows',
      'View Workflows',
      'Manage Connections',
      'View Logs',
      'Manage Users',
      'Manage Settings',
    ],
  },
  editor: {
    name: 'Editor',
    users: '5 users',
    permissions: ['Create Workflows', 'Edit Workflows', 'Delete Workflows'],
  },
  viewer: {
    name: 'Viewer',
    users: '10 users',
    permissions: ['View Workflows', 'View Logs'],
  },
};

const allPermissions = [
  'Create Workflows',
  'Edit Workflows',
  'Delete Workflows',
  'View Workflows',
  'Manage Connections',
  'View Logs',
  'Manage Users',
  'Manage Settings',
];

export default function PermissionsPage() {
  const [selectedRole, setSelectedRole] = useState('editor');
  const [roles, setRoles] = useState(initialRoles);

  const selectedRoleData = roles[selectedRole];
  const availablePermissions = allPermissions.filter(
    (p) => !selectedRoleData.permissions.includes(p)
  );

  return (
    <main className="flex-1 p-8">
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-white text-4xl font-bold leading-tight tracking-tight">
          Permissions &amp; Roles
        </h1>
        <div className="flex items-center gap-4">
          <Button className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 h-10 text-white text-sm font-bold hover:bg-blue-700 transition-colors">
            <span className="material-symbols-outlined"> add </span>
            <span>Create Role</span>
          </Button>
        </div>
      </header>
      <div className="grid grid-cols-3 gap-8">
        <section className="col-span-1">
          <h2 className="text-white text-2xl font-bold leading-tight tracking-tight mb-4">
            Roles
          </h2>
          <div className="space-y-4">
            {Object.keys(roles).map((roleKey) => (
              <div
                key={roleKey}
                onClick={() => setSelectedRole(roleKey)}
                className={`rounded-lg p-4 cursor-pointer transition-colors ${
                  selectedRole === roleKey
                    ? 'border border-blue-500 ring-2 ring-blue-500 bg-[#192633]'
                    : 'bg-[#192633] border border-[#324d67] hover:border-blue-500'
                }`}
              >
                <h3 className="font-bold text-white">{roles[roleKey].name}</h3>
                <p className="text-sm text-[#92adc9]">{roles[roleKey].users}</p>
              </div>
            ))}

            <div className="bg-transparent rounded-lg p-4 border-2 border-dashed border-[#324d67] text-center text-[#92adc9] hover:border-blue-500 hover:text-white transition-colors cursor-pointer">
              <p className="font-medium">Create New Role</p>
            </div>
          </div>
        </section>
        <section className="col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-white text-2xl font-bold leading-tight tracking-tight">
              Permissions for {selectedRoleData.name}
            </h2>
            <Button className="flex items-center justify-center gap-2 rounded-lg bg-gray-600 px-4 h-10 text-white text-sm font-bold hover:bg-gray-700 transition-colors">
              <span className="material-symbols-outlined"> save </span>
              <span>Save Changes</span>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-[#192633] rounded-lg p-4 border border-[#324d67]">
              <h3 className="text-white font-bold mb-4">
                Assigned Permissions
              </h3>
              <div className="space-y-3 min-h-[200px] bg-[#111A22] p-2 rounded-md">
                {selectedRoleData.permissions.map((permission) => (
                  <div
                    key={permission}
                    className="flex items-center justify-between bg-[#233648] p-3 rounded-md cursor-grab"
                  >
                    <span className="text-white font-medium text-sm">
                      {permission}
                    </span>
                    <span className="material-symbols-outlined text-gray-400">
                      {' '}
                      drag_indicator{' '}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#192633] rounded-lg p-4 border border-[#324d67]">
              <h3 className="text-white font-bold mb-4">
                Available Permissions
              </h3>
              <div className="space-y-3 min-h-[200px] bg-[#111A22] p-2 rounded-md">
                {availablePermissions.map((permission) => (
                  <div
                    key={permission}
                    className="flex items-center justify-between bg-[#233648] p-3 rounded-md cursor-grab"
                  >
                    <span className="text-white font-medium text-sm">
                      {permission}
                    </span>
                    <span className="material-symbols-outlined text-gray-400">
                      {' '}
                      drag_indicator{' '}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
