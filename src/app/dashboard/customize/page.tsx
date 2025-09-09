
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
            </aside>
            <div className="flex flex-1 flex-col p-8">
                <div className="mb-6">
                    <h2 className="text-3xl font-bold text-[var(--text-primary)]">Customize Dashboard</h2>
                    <p className="text-[var(--text-secondary)] mt-1">Drag and drop widgets to personalize your dashboard view. Select from the library on the left.</p>
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
                        Reset Layout
                    </Button>
                    <Button className="rounded-md bg-[var(--primary-color)] px-4 py-2 text-sm font-semibold text-white hover:bg-opacity-90 transition-opacity">
                        Save Changes
                    </Button>
                </div>
            </div>
        </main>
    );
}
