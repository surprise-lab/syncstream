
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
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';

export default function EditIntegrationPage() {
  return (
    <div className="flex-1 p-8 text-white">
      <div className="mb-6 flex items-center gap-2">
        <Link
          className="text-sm font-medium text-gray-400 hover:text-white"
          href="/dashboard/integrations"
        >
          Integrations
        </Link>
        <span className="text-sm text-gray-400">/</span>
        <span className="text-sm font-medium text-white">Edit Integration</span>
      </div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white">Edit Integration</h1>
        <p className="mt-2 text-gray-400">
          Modify the settings and configurations for your existing integration.
        </p>
      </div>
      <div className="max-w-2xl space-y-8">
        <div>
          <h2 className="mb-6 text-2xl font-bold text-white">
            Authentication
          </h2>
          <div className="space-y-6">
            <div>
              <Label
                className="mb-2 block text-sm font-medium text-gray-300"
                htmlFor="apiKey"
              >
                API Key
              </Label>
              <Input
                className="form-input w-full rounded-md border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                id="apiKey"
                type="password"
                defaultValue="••••••••••••••••"
              />
            </div>
            <div>
              <Label
                className="mb-2 block text-sm font-medium text-gray-300"
                htmlFor="secretKey"
              >
                Secret Key
              </Label>
              <Input
                className="form-input w-full rounded-md border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                id="secretKey"
                type="password"
                defaultValue="••••••••••••••••••••••••"
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className="mb-6 text-2xl font-bold text-white">Data Mapping</h2>
          <div className="space-y-6">
            <div>
              <Label
                className="mb-2 block text-sm font-medium text-gray-300"
                htmlFor="sourceSystem"
              >
                Source System
              </Label>
              <Select defaultValue="salesforce">
                <SelectTrigger
                  id="sourceSystem"
                  className="form-select w-full rounded-md border-gray-700 bg-gray-800 text-white focus:border-blue-500 focus:ring-blue-500"
                >
                  <SelectValue placeholder="Select a source system" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="salesforce">Salesforce</SelectItem>
                  <SelectItem value="hubspot">HubSpot</SelectItem>
                  <SelectItem value="zendesk">Zendesk</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label
                className="mb-2 block text-sm font-medium text-gray-300"
                htmlFor="destinationSystem"
              >
                Destination System
              </Label>
              <Select defaultValue="quickbooks">
                <SelectTrigger
                  id="destinationSystem"
                  className="form-select w-full rounded-md border-gray-700 bg-gray-800 text-white focus:border-blue-500 focus:ring-blue-500"
                >
                  <SelectValue placeholder="Select a destination system" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="quickbooks">QuickBooks</SelectItem>
                  <SelectItem value="xero">Xero</SelectItem>
                  <SelectItem value="stripe">Stripe</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label
                className="mb-2 block text-sm font-medium text-gray-300"
                htmlFor="mappingRules"
              >
                Mapping Rules
              </Label>
              <Textarea
                className="form-textarea w-full rounded-md border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                id="mappingRules"
                placeholder="e.g. map contact.firstName to customer.givenName"
                rows={6}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 flex max-w-2xl justify-end gap-4">
        <Button
          variant="secondary"
          className="px-8 py-3 rounded-lg text-base font-semibold text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-gray-500 transition-colors"
        >
          Cancel
        </Button>
        <Button className="px-8 py-3 rounded-lg text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500 transition-colors">
          Save Changes
        </Button>
      </div>
    </div>
  );
}
