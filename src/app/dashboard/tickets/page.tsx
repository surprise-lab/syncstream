
'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const tickets = [
    { id: '#12345', subject: 'Issue with Salesforce integration', status: 'Open', priority: 'High', assignee: 'Unassigned', submitted: '2024-01-15' },
    { id: '#12346', subject: 'Data sync error between Hubspot and Mailchimp', status: 'In Progress', priority: 'Medium', assignee: 'Alex Bennett', submitted: '2024-01-16' },
    { id: '#12347', subject: 'New integration request for Shopify', status: 'Open', priority: 'Low', assignee: 'Unassigned', submitted: '2024-01-17' },
    { id: '#12348', subject: 'API connection failure with Zendesk', status: 'Resolved', priority: 'High', assignee: 'Chris Evans', submitted: '2024-01-18' },
    { id: '#12349', subject: 'Question about data mapping in Pipedrive', status: 'In Progress', priority: 'Medium', assignee: 'Alex Bennett', submitted: '2024-01-19' },
]

export default function TicketsPage() {
    return (
        <main className="flex-1 bg-[#0b1118] p-8">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold text-white">Support Tickets</h2>
                    <p className="mt-1 text-gray-400">Manage and resolve user-submitted support requests.</p>
                </div>
            </div>
            <div className="mt-8 flex items-center justify-between">
                <div className="relative w-full max-w-md">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="currentColor" height="20" viewBox="0 0 256 256" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                    </svg>
                    <input className="w-full rounded-md border border-gray-700 bg-gray-800 py-2 pl-10 pr-4 text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none focus:ring-primary-500" placeholder="Search tickets..." type="search"/>
                </div>
            </div>
            <div className="mt-6 border-b border-gray-700">
                <nav className="-mb-px flex space-x-8">
                    <a className="whitespace-nowrap border-b-2 border-primary-500 px-1 py-4 text-sm font-medium text-primary-500" href="#">All Tickets</a>
                    <a className="whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-400 hover:border-gray-500 hover:text-gray-300" href="#">Open</a>
                    <a className="whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-400 hover:border-gray-500 hover:text-gray-300" href="#">In Progress</a>
                    <a className="whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-400 hover:border-gray-500 hover:text-gray-300" href="#">Resolved</a>
                </nav>
            </div>
            <div className="mt-6 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="overflow-hidden rounded-md border border-gray-700">
                            <Table>
                                <TableHeader className="bg-gray-800">
                                    <TableRow>
                                        <TableHead className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Ticket ID</TableHead>
                                        <TableHead className="px-3 py-3.5 text-left text-sm font-semibold text-white">Subject</TableHead>
                                        <TableHead className="px-3 py-3.5 text-left text-sm font-semibold text-white">Status</TableHead>
                                        <TableHead className="px-3 py-3.5 text-left text-sm font-semibold text-white">Priority</TableHead>
                                        <TableHead className="px-3 py-3.5 text-left text-sm font-semibold text-white">Assignee</TableHead>
                                        <TableHead className="px-3 py-3.5 text-left text-sm font-semibold text-white">Submitted</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody className="divide-y divide-gray-800 bg-[#111a22]">
                                    {tickets.map((ticket) => (
                                    <TableRow key={ticket.id}>
                                        <TableCell className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">{ticket.id}</TableCell>
                                        <TableCell className="whitespace-nowrap px-3 py-4 text-sm text-gray-400">{ticket.subject}</TableCell>
                                        <TableCell className="whitespace-nowrap px-3 py-4 text-sm">
                                            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-sm font-medium ${
                                                ticket.status === 'Open' ? 'bg-blue-900/50 text-blue-300' :
                                                ticket.status === 'In Progress' ? 'bg-yellow-900/50 text-yellow-300' :
                                                'bg-green-900/50 text-green-300'
                                            }`}>{ticket.status}</span>
                                        </TableCell>
                                        <TableCell className="whitespace-nowrap px-3 py-4 text-sm">
                                            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-sm font-medium ${
                                                ticket.priority === 'High' ? 'bg-red-900/50 text-red-300' :
                                                ticket.priority === 'Medium' ? 'bg-orange-900/50 text-orange-300' :
                                                'bg-green-900/50 text-green-300'
                                            }`}>{ticket.priority}</span>
                                        </TableCell>
                                        <TableCell className="whitespace-nowrap px-3 py-4 text-sm text-gray-400">{ticket.assignee}</TableCell>
                                        <TableCell className="whitespace-nowrap px-3 py-4 text-sm text-gray-400">{ticket.submitted}</TableCell>
                                    </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
