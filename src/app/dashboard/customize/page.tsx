
'use client';

import { Button } from '@/components/ui/button';

const widgets = [
    {
        icon: 'show_chart',
        title: 'Performance Overview',
        description: 'Key performance indicators and metrics.',
    },
    {
        icon: 'bar_chart',
        title: 'Integration Status',
        description: 'Current status of all integrations.',
    },
    {
        icon: 'pie_chart',
        title: 'Data Flow Metrics',
        description: 'Real-time metrics for data flows.',
    },
    {
        icon: 'list_alt',
        title: 'Recent Activity',
        description: 'A log of recent system activities.',
    },
    {
        icon: 'timer',
        title: 'System Uptime',
        description: 'System uptime and availability.',
    },
    {
        icon: 'campaign',
        title: 'Alerts Summary',
        description: 'A summary of recent system alerts.',
    },
    {
        icon: 'description',
        title: 'Data Usage',
        description: 'Data usage statistics and trends.',
    },
];

export default function CustomizeDashboardPage() {
    return (
        <main className="flex flex-1">
            <aside className="w-80 border-r border-[var(--border-color)] p-6">
                <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Widget Library</h2>
                <div className="grid grid-cols-1 gap-4">
                    {widgets.map((widget, index) => (
                        <div key={index} className="flex cursor-grab flex-col gap-3 rounded-md border border-[var(--border-color)] bg-[var(--secondary-color)] p-4 transition-all hover:border-[var(--primary-color)] hover:shadow-lg">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-xl text-[var(--primary-color)]">{widget.icon}</span>
                                <h3 className="font-semibold text-[var(--text-primary)]">{widget.title}</h3>
                            </div>
                            <p className="text-sm text-[var(--text-secondary)]">{widget.description}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-6 border-t border-[var(--border-color)] pt-6">
                    <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Share Layout</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="text-sm font-medium text-[var(--text-secondary)]" htmlFor="share-user">Share with User</label>
                            <div className="relative mt-1">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-lg text-[var(--text-secondary)]"> person_add </span>
                                <input className="form-input w-full rounded-md border-none bg-[var(--secondary-color)] py-2 pl-10 pr-4 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]" id="share-user" placeholder="Enter username or email" type="text"/>
                            </div>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-[var(--text-secondary)]" htmlFor="share-team">Share with Team</label>
                            <select className="form-select mt-1 block w-full rounded-md border-none bg-[var(--secondary-color)] py-2 pl-3 pr-10 text-sm text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]" id="share-team">
                                <option>Select a team</option>
                                <option>Engineering Team</option>
                                <option>Product Team</option>
                                <option>Support Team</option>
                            </select>
                        </div>
                        <button className="flex w-full items-center justify-center gap-2 rounded-md border border-[var(--border-color)] bg-[var(--secondary-color)] px-4 py-2 text-sm font-semibold text-[var(--text-primary)] hover:bg-[var(--border-color)] transition-colors">
                            <span className="material-symbols-outlined text-base">share</span>
                            Share Layout
                        </button>
                    </div>
                </div>
            </aside>
            <div className="flex flex-1 flex-col p-8">
                <div className="mb-6 flex items-start justify-between">
                    <div>
                        <h2 className="text-3xl font-bold text-[var(--text-primary)]">Customize Dashboard</h2>
                        <p className="text-[var(--text-secondary)] mt-1">Drag and drop widgets to personalize your dashboard view. Select from the library on the left.</p>
                    </div>
                    <Button variant="outline" className="flex items-center gap-2 rounded-md border border-[var(--border-color)] px-4 py-2 text-sm font-semibold text-[var(--text-primary)] hover:bg-[var(--border-color)] transition-colors">
                        <span className="material-symbols-outlined text-base">restart_alt</span>
                        Reset to Default Layout
                    </Button>
                </div>
                <div className="flex-1 rounded-lg border-2 border-dashed border-[var(--border-color)] p-6">
                    <div className="flex h-full flex-col items-center justify-center text-center">
                        <span className="material-symbols-outlined text-6xl text-[var(--text-secondary)]"> add_circle </span>
                        <h3 className="mt-4 text-xl font-semibold text-[var(--text-primary)]">Drag and drop widgets here</h3>
                        <p className="mt-2 max-w-sm text-sm text-[var(--text-secondary)]">
                            Select widgets from the library on the left and drag them to this area to add them to your dashboard. You can rearrange and resize them to fit your needs.
                        </p>
                    </div>
                </div>
                <div className="mt-6 flex justify-end gap-4">
                    <Button variant="outline" className="rounded-md bg-[var(--border-color)] px-4 py-2 text-sm font-semibold text-[var(--text-primary)] hover:bg-opacity-80 transition-opacity">
                        Cancel
                    </Button>
                    <Button className="rounded-md bg-[var(--primary-color)] px-4 py-2 text-sm font-semibold text-white hover:bg-opacity-90 transition-opacity">
                        Save Changes
                    </Button>
                </div>
            </div>
        </main>
    );
}
