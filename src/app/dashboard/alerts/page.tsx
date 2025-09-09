
'use client';

import { useState } from "react";

const alertsData = [
  {
    category: 'Urgent',
    icon: 'schedule',
    iconColor: 'text-yellow-400',
    title: 'Scheduled Maintenance',
    date: 'July 15, 2024',
    description:
      "Scheduled maintenance will occur on Saturday, July 20th, from 10:00 PM to 2:00 AM PDT. During this time, the platform may be temporarily unavailable. We appreciate your understanding.",
  },
  {
    category: 'New Feature',
    icon: 'campaign',
    iconColor: 'text-blue-400',
    title: 'New Feature: Multi-Account Connections',
    date: 'July 10, 2024',
    description:
      "We've released a new feature that allows you to connect multiple accounts from the same service. Check out the documentation for more details.",
  },
  {
    category: 'Update',
    icon: 'description',
    iconColor: 'text-gray-400',
    title: 'Terms of Service Update',
    date: 'July 5, 2024',
    description:
      "We've updated our terms of service. Please review the changes to ensure compliance with our platform policies.",
  },
  {
    category: 'Resolved',
    icon: 'check_circle',
    iconColor: 'text-green-400',
    title: 'Issue Resolved: Project Management Tool Integration',
    date: 'June 28, 2024',
    description:
      "We've resolved the issue with the data synchronization for the 'Project Management Tool' integration. All data is now syncing correctly.",
  },
  {
    category: 'Integration',
    icon: 'add_circle',
    iconColor: 'text-indigo-400',
    title: 'New Integration: Customer Relationship Management System',
    date: 'June 20, 2024',
    description:
      "We've added support for a new integration with 'Customer Relationship Management System'. You can now connect your accounts and sync data seamlessly.",
  },
];

const getCategoryStyles = (category: string) => {
    switch (category) {
        case 'Urgent':
            return 'text-yellow-400 bg-yellow-400/10';
        case 'New Feature':
            return 'text-blue-400 bg-blue-400/10';
        case 'Update':
            return 'text-gray-400 bg-gray-400/10';
        case 'Resolved':
            return 'text-green-400 bg-green-400/10';
        case 'Integration':
            return 'text-indigo-400 bg-indigo-400/10';
        default:
            return '';
    }
}

export default function AlertsPage() {
    const [filter, setFilter] = useState('All');
    const filteredAlerts = filter === 'All' ? alertsData : alertsData.filter(alert => alert.category === filter || (filter === 'Updates' && alert.category === 'Update'));


  return (
    <main className="flex-1 px-10 py-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <h1 className="text-white text-3xl font-bold tracking-tight">
            Alerts &amp; Announcements
          </h1>
          <p className="text-[#92adc9] mt-2 text-base">
            Stay informed about important system messages, maintenance
            notifications, and updates.
          </p>
        </div>
        <div className="grid grid-cols-1 @[640px]:grid-cols-2 gap-8 mb-8">
          <div className="p-6 bg-[#18232F] rounded-lg border border-[#233648]">
            <h3 className="text-white text-lg font-semibold mb-4">Filters</h3>
            <div className="flex flex-wrap gap-3">
              <button onClick={() => setFilter('All')} className={`flex h-9 items-center justify-center gap-x-2 rounded-md px-4 text-sm font-medium transition-colors ${filter === 'All' ? 'bg-primary text-white' : 'bg-[#233648] hover:bg-[#2B4055] text-white'}`}>
                All
              </button>
              <button onClick={() => setFilter('Urgent')} className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-md px-4 text-sm font-medium text-white transition-colors ${filter === 'Urgent' ? 'bg-primary text-white' : 'bg-[#233648] hover:bg-[#2B4055]'}`}>
                Urgent
              </button>
              <button onClick={() => setFilter('Maintenance')} className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-md px-4 text-sm font-medium text-white transition-colors ${filter === 'Maintenance' ? 'bg-primary text-white' : 'bg-[#233648] hover:bg-[#2B4055]'}`}>
                Maintenance
              </button>
              <button onClick={() => setFilter('New Feature')} className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-md px-4 text-sm font-medium text-white transition-colors ${filter === 'New Feature' ? 'bg-primary text-white' : 'bg-[#233648] hover:bg-[#2B4055]'}`}>
                New Features
              </button>
              <button onClick={() => setFilter('Update')} className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-md px-4 text-sm font-medium text-white transition-colors ${filter === 'Update' ? 'bg-primary text-white' : 'bg-[#233648] hover:bg-[#2B4055]'}`}>
                Updates
              </button>
            </div>
          </div>
          <div className="p-6 bg-[#18232F] rounded-lg border border-[#233648]">
            <h3 className="text-white text-lg font-semibold mb-4">Notification Subscriptions</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm text-white" htmlFor="system-updates">System Updates</label>
                <label className="switch">
                  <input defaultChecked id="system-updates" type="checkbox"/>
                  <span className="slider"></span>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm text-white" htmlFor="feature-releases">Feature Releases</label>
                <label className="switch">
                  <input defaultChecked id="feature-releases" type="checkbox"/>
                  <span className="slider"></span>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm text-white" htmlFor="security-advisories">Security Advisories</label>
                <label className="switch">
                  <input id="security-advisories" type="checkbox"/>
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          {filteredAlerts.map((alert, index) => (
            <div key={index} className="flex items-start gap-4 rounded-lg border border-[#233648] bg-[#18232F] p-4 transition-shadow hover:shadow-lg hover:border-primary/50">
              <div className={`flex items-center justify-center rounded-full bg-[#233648] shrink-0 size-12 ${alert.iconColor}`}>
                <span className="material-symbols-outlined text-2xl">
                  {alert.icon}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white font-semibold">{alert.title}</p>
                    <p className="text-[#92adc9] text-sm">{alert.date}</p>
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${getCategoryStyles(alert.category)}`}>
                    {alert.category}
                  </span>
                </div>
                <p className="text-[#92adc9] text-sm mt-2">
                  {alert.description}
                </p>
                <div className="mt-3 flex gap-2">
                  <button className="text-sm font-medium text-white bg-transparent hover:bg-[#233648] px-3 py-1 rounded-md transition-colors">
                    Acknowledge
                  </button>
                  <button className="text-sm font-medium text-[#92adc9] hover:text-white px-3 py-1 rounded-md transition-colors">
                    Dismiss
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
       <style jsx>{`
        .switch {
          position: relative;
          display: inline-block;
          width: 38px;
          height: 22px;
        }
        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #384C60;
          transition: .4s;
          border-radius: 34px;
        }
        .slider:before {
          position: absolute;
          content: "";
          height: 16px;
          width: 16px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          transition: .4s;
          border-radius: 50%;
        }
        input:checked + .slider {
          background-color: var(--primary-color);
        }
        input:checked + .slider:before {
          transform: translateX(16px);
        }
    `}</style>
    </main>
  );
}
