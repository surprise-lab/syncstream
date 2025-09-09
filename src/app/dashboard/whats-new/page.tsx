
'use client';

import { useState } from 'react';

const updates = [
    {
        date: 'October 28, 2024',
        title: 'CloudDrive Integration',
        description: "We've added a new integration with CloudDrive, allowing you to sync files directly from your cloud storage. This update also includes performance improvements for the Salesforce integration and a fix for a bug that caused occasional errors when syncing large datasets.",
        tags: ['New Feature', 'Improvement', 'Bug Fix'],
        month: 'October',
        year: '2024',
    },
    {
        date: 'October 15, 2024',
        title: 'Dashboard Redesign',
        description: "The latest version introduces a redesigned dashboard with improved data visualization and filtering options. We've also enhanced the error handling for the Shopify integration and added support for custom fields in the HubSpot integration.",
        tags: ['Improvement'],
        month: 'October',
        year: '2024',
    },
    {
        date: 'September 22, 2024',
        title: 'Scheduled Syncs',
        description: "This update brings a new feature that allows you to schedule syncs at specific times. We've also improved the performance of the QuickBooks integration and fixed a bug that caused issues with the Zendesk integration.",
        tags: ['New Feature', 'Improvement', 'Bug Fix'],
        month: 'September',
        year: '2024',
    },
    {
        date: 'September 8, 2024',
        title: 'Webhook Support',
        description: "We've added support for webhooks, allowing you to receive real-time updates from your integrated applications. This update also includes minor bug fixes and performance improvements.",
        tags: ['New Feature'],
        month: 'September',
        year: '2024',
    },
    {
        date: 'August 14, 2024',
        title: 'MailBlaster Integration',
        description: "This release includes a new integration with MailBlaster, enabling you to sync your email marketing data. We've also improved the user interface for managing connections and added support for multi-factor authentication.",
        tags: ['New Feature', 'Improvement'],
        month: 'August',
        year: '2024',
    },
    {
        date: 'August 1, 2024',
        title: 'Custom Field Mapping',
        description: "We've introduced a new feature that allows you to map custom fields between integrated applications. This update also includes performance enhancements and bug fixes.",
        tags: ['New Feature', 'Bug Fix'],
        month: 'August',
        year: '2024',
    },
];

const getTagClasses = (tag) => {
    switch (tag) {
        case 'New Feature':
            return 'bg-teal-900/50 text-teal-300';
        case 'Improvement':
            return 'bg-sky-900/50 text-sky-300';
        case 'Bug Fix':
            return 'bg-rose-900/50 text-rose-300';
        default:
            return 'bg-gray-700 text-gray-300';
    }
}

export default function WhatsNewPage() {
    const [filter, setFilter] = useState('All');

    const filteredUpdates = filter === 'All'
        ? updates
        : updates.filter(update => update.tags.includes(filter));

    const groupedUpdates = filteredUpdates.reduce((acc, update) => {
        const key = `${update.month} ${update.year}`;
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(update);
        return acc;
    }, {});


    return (
        <main className="flex-1 px-10 py-8">
            <div className="mx-auto max-w-4xl">
                <header className="mb-8">
                    <h1 className="text-white text-4xl font-bold tracking-tight">What's New in SyncStream</h1>
                    <p className="text-slate-400 mt-2 text-lg">Our latest features, improvements, and bug fixes.</p>
                </header>
                <div className="mb-8 flex items-center justify-between">
                    <p className="text-slate-300 font-medium">Filter by:</p>
                    <div className="flex items-center gap-2">
                        <button onClick={() => setFilter('All')} className={`rounded-md px-3 py-1.5 text-sm font-medium ${filter === 'All' ? 'bg-slate-700 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}>All</button>
                        <button onClick={() => setFilter('New Feature')} className={`rounded-md px-3 py-1.5 text-sm font-medium ${filter === 'New Feature' ? 'bg-teal-900 text-teal-300' : 'bg-teal-900/50 text-teal-300 hover:bg-teal-900/80'}`}>New Feature</button>
                        <button onClick={() => setFilter('Improvement')} className={`rounded-md px-3 py-1.5 text-sm font-medium ${filter === 'Improvement' ? 'bg-sky-900 text-sky-300' : 'bg-sky-900/50 text-sky-300 hover:bg-sky-900/80'}`}>Improvement</button>
                        <button onClick={() => setFilter('Bug Fix')} className={`rounded-md px-3 py-1.5 text-sm font-medium ${filter === 'Bug Fix' ? 'bg-rose-900 text-rose-300' : 'bg-rose-900/50 text-rose-300 hover:bg-rose-900/80'}`}>Bug Fix</button>
                    </div>
                </div>
                <div className="space-y-16">
                    {Object.entries(groupedUpdates).map(([group, updates]) => (
                        <section key={group}>
                            <h2 className="text-white text-2xl font-semibold mb-6 pb-2 border-b border-slate-700">{group}</h2>
                            <div className="space-y-8">
                                {updates.map((update, index) => (
                                    <article key={index} className="relative pl-8 border-l border-slate-700">
                                        <div className="absolute -left-2 top-1.5 h-4 w-4 rounded-full bg-primary"></div>
                                        <p className="text-slate-400 text-sm font-medium mb-1">{update.date}</p>
                                        <h3 className="text-white text-lg font-semibold mb-2">{update.title}</h3>
                                        <p className="text-slate-300 text-base leading-relaxed">{update.description}</p>
                                        <div className="mt-3 flex gap-2">
                                            {update.tags.map(tag => (
                                                <span key={tag} className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getTagClasses(tag)}`}>{tag}</span>
                                            ))}
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </main>
    )
}
