
'use client';

export default function WhatsNewPage() {
    return (
        <main className="flex-1 px-10 py-8">
        <div className="mx-auto max-w-4xl">
            <header className="mb-12">
            <h1 className="text-white text-4xl font-bold tracking-tight">What's New in SyncStream</h1>
            <p className="text-slate-400 mt-2 text-lg">Our latest features, improvements, and bug fixes.</p>
            </header>
            <div className="space-y-16">
            <section>
                <h2 className="text-white text-2xl font-semibold mb-6 pb-2 border-b border-slate-700">October 2024</h2>
                <div className="space-y-8">
                <article className="relative pl-8 border-l border-slate-700">
                    <div className="absolute -left-2 top-1.5 h-4 w-4 rounded-full bg-primary"></div>
                    <p className="text-slate-400 text-sm font-medium mb-1">October 28, 2024</p>
                    <h3 className="text-white text-lg font-semibold mb-2">CloudDrive Integration</h3>
                    <p className="text-slate-300 text-base leading-relaxed">
                                    We've added a new integration with CloudDrive, allowing you to sync files directly from your cloud storage. This update also includes performance improvements
                                    for the Salesforce integration and a fix for a bug that caused occasional errors when syncing large datasets.
                                    </p>
                    <div className="mt-3 flex gap-2">
                    <span className="inline-flex items-center rounded-full bg-teal-900/50 px-2.5 py-0.5 text-xs font-medium text-teal-300">New Feature</span>
                    <span className="inline-flex items-center rounded-full bg-sky-900/50 px-2.5 py-0.5 text-xs font-medium text-sky-300">Improvement</span>
                    <span className="inline-flex items-center rounded-full bg-rose-900/50 px-2.5 py-0.5 text-xs font-medium text-rose-300">Bug Fix</span>
                    </div>
                </article>
                <article className="relative pl-8 border-l border-slate-700">
                    <div className="absolute -left-2 top-1.5 h-4 w-4 rounded-full bg-primary"></div>
                    <p className="text-slate-400 text-sm font-medium mb-1">October 15, 2024</p>
                    <h3 className="text-white text-lg font-semibold mb-2">Dashboard Redesign</h3>
                    <p className="text-slate-300 text-base leading-relaxed">
                                    The latest version introduces a redesigned dashboard with improved data visualization and filtering options. We've also enhanced the error handling for the
                                    Shopify integration and added support for custom fields in the HubSpot integration.
                                    </p>
                    <div className="mt-3 flex gap-2">
                    <span className="inline-flex items-center rounded-full bg-sky-900/50 px-2.5 py-0.5 text-xs font-medium text-sky-300">Improvement</span>
                    </div>
                </article>
                </div>
            </section>
            <section>
                <h2 className="text-white text-2xl font-semibold mb-6 pb-2 border-b border-slate-700">September 2024</h2>
                <div className="space-y-8">
                <article className="relative pl-8 border-l border-slate-700">
                    <div className="absolute -left-2 top-1.5 h-4 w-4 rounded-full bg-primary"></div>
                    <p className="text-slate-400 text-sm font-medium mb-1">September 22, 2024</p>
                    <h3 className="text-white text-lg font-semibold mb-2">Scheduled Syncs</h3>
                    <p className="text-slate-300 text-base leading-relaxed">
                                    This update brings a new feature that allows you to schedule syncs at specific times. We've also improved the performance of the QuickBooks integration and fixed
                                    a bug that caused issues with the Zendesk integration.
                                    </p>
                    <div className="mt-3 flex gap-2">
                    <span className="inline-flex items-center rounded-full bg-teal-900/50 px-2.5 py-0.5 text-xs font-medium text-teal-300">New Feature</span>
                    <span className="inline-flex items-center rounded-full bg-sky-900/50 px-2.5 py-0.5 text-xs font-medium text-sky-300">Improvement</span>
                    <span className="inline-flex items-center rounded-full bg-rose-900/50 px-2.5 py-0.5 text-xs font-medium text-rose-300">Bug Fix</span>
                    </div>
                </article>
                <article className="relative pl-8 border-l border-slate-700">
                    <div className="absolute -left-2 top-1.5 h-4 w-4 rounded-full bg-primary"></div>
                    <p className="text-slate-400 text-sm font-medium mb-1">September 8, 2024</p>
                    <h3 className="text-white text-lg font-semibold mb-2">Webhook Support</h3>
                    <p className="text-slate-300 text-base leading-relaxed">
                                    We've added support for webhooks, allowing you to receive real-time updates from your integrated applications. This update also includes minor bug fixes and
                                    performance improvements.
                                    </p>
                    <div className="mt-3 flex gap-2">
                    <span className="inline-flex items-center rounded-full bg-teal-900/50 px-2.5 py-0.5 text-xs font-medium text-teal-300">New Feature</span>
                    </div>
                </article>
                </div>
            </section>
            <section>
                <h2 className="text-white text-2xl font-semibold mb-6 pb-2 border-b border-slate-700">August 2024</h2>
                <div className="space-y-8">
                <article className="relative pl-8 border-l border-slate-700">
                    <div className="absolute -left-2 top-1.5 h-4 w-4 rounded-full bg-primary"></div>
                    <p className="text-slate-400 text-sm font-medium mb-1">August 14, 2024</p>
                    <h3 className="text-white text-lg font-semibold mb-2">MailBlaster Integration</h3>
                    <p className="text-slate-300 text-base leading-relaxed">
                                    This release includes a new integration with MailBlaster, enabling you to sync your email marketing data. We've also improved the user interface for managing
                                    connections and added support for multi-factor authentication.
                                    </p>
                    <div className="mt-3 flex gap-2">
                    <span className="inline-flex items-center rounded-full bg-teal-900/50 px-2.5 py-0.5 text-xs font-medium text-teal-300">New Feature</span>
                    <span className="inline-flex items-center rounded-full bg-sky-900/50 px-2.5 py-0.5 text-xs font-medium text-sky-300">Improvement</span>
                    </div>
                </article>
                <article className="relative pl-8 border-l border-slate-700">
                    <div className="absolute -left-2 top-1.5 h-4 w-4 rounded-full bg-primary"></div>
                    <p className="text-slate-400 text-sm font-medium mb-1">August 1, 2024</p>
                    <h3 className="text-white text-lg font-semibold mb-2">Custom Field Mapping</h3>
                    <p className="text-slate-300 text-base leading-relaxed">
                                    We've introduced a new feature that allows you to map custom fields between integrated applications. This update also includes performance enhancements and bug
                                    fixes.
                                    </p>
                    <div className="mt-3 flex gap-2">
                    <span className="inline-flex items-center rounded-full bg-teal-900/50 px-2.5 py-0.5 text-xs font-medium text-teal-300">New Feature</span>
                    <span className="inline-flex items-center rounded-full bg-rose-900/50 px-2.5 py-0.5 text-xs font-medium text-rose-300">Bug Fix</span>
                    </div>
                </article>
                </div>
            </section>
            </div>
        </div>
        </main>
    )
}
