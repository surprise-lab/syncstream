
import { Button } from '@/components/ui/button';

export default function ReportsPage() {
  return (
    <div className="px-40 flex flex-1 justify-center py-10">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-4 p-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-3xl font-bold">Reports</h1>
            <p className="text-[#92adc9] text-sm">
              Generate custom reports and view insights from your integrated
              data.
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <Button className="flex items-center gap-2 rounded-md h-9 px-3 text-sm font-medium text-slate-300 bg-[#233648] hover:bg-[#324d67] transition-colors">
              <span className="material-symbols-outlined text-lg">add</span>
              <span>New Report</span>
            </Button>
            <Button className="flex items-center gap-2 rounded-md h-9 px-3 text-sm font-medium text-white bg-primary hover:bg-blue-600 transition-colors">
              <span className="material-symbols-outlined text-lg">
                download
              </span>
              <span>Export</span>
            </Button>
          </div>
        </div>
        <div className="pb-3">
          <div className="flex border-b border-[#324d67] px-4 gap-8">
            <a
              className="flex items-center justify-center border-b-2 border-b-primary text-white pb-3 pt-4 text-sm font-medium"
              href="#"
            >
              Overview
            </a>
            <a
              className="flex items-center justify-center border-b-2 border-b-transparent text-[#92adc9] pb-3 pt-4 text-sm font-medium hover:text-white transition-colors"
              href="#"
            >
              Custom Reports
            </a>
            <a
              className="flex items-center justify-center border-b-2 border-b-transparent text-[#92adc9] pb-3 pt-4 text-sm font-medium hover:text-white transition-colors"
              href="#"
            >
              Logs
            </a>
          </div>
        </div>
        <h2 className="text-white text-xl font-bold leading-tight px-4 pb-3 pt-8">
          Dashboard
        </h2>
        <div className="grid grid-cols-3 gap-6 px-4 py-6">
          <div className="flex flex-col gap-4 rounded-lg border border-[#324d67] p-6 bg-[#192633]/50">
            <div className="flex items-center justify-between">
              <p className="text-white text-base font-medium">
                Integration Status
              </p>
              <span className="text-[#0bda5b] text-sm font-medium">+5%</span>
            </div>
            <p className="text-white text-4xl font-bold">95%</p>
            <div className="h-40">
              <div className="grid h-full grid-flow-col gap-4 items-end justify-items-center">
                <div
                  className="bg-primary/20 hover:bg-primary/40 transition-colors w-full rounded-t-sm"
                  style={{ height: '60%' }}
                ></div>
                <div
                  className="bg-primary/20 hover:bg-primary/40 transition-colors w-full rounded-t-sm"
                  style={{ height: '10%' }}
                ></div>
                <div
                  className="bg-primary/20 hover:bg-primary/40 transition-colors w-full rounded-t-sm"
                  style={{ height: '60%' }}
                ></div>
                <div
                  className="bg-primary/20 hover:bg-primary/40 transition-colors w-full rounded-t-sm"
                  style={{ height: '50%' }}
                ></div>
                <div
                  className="bg-primary/20 hover:bg-primary/40 transition-colors w-full rounded-t-sm"
                  style={{ height: '90%' }}
                ></div>
                <div
                  className="bg-primary/20 hover:bg-primary/40 transition-colors w-full rounded-t-sm"
                  style={{ height: '70%' }}
                ></div>
                <div
                  className="bg-primary/20 hover:bg-primary/40 transition-colors w-full rounded-t-sm"
                  style={{ height: '60%' }}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-lg border border-[#324d67] p-6 bg-[#192633]/50">
            <div className="flex items-center justify-between">
              <p className="text-white text-base font-medium">
                Data Sync Frequency
              </p>
              <span className="text-[#fa6238] text-sm font-medium">-2%</span>
            </div>
            <p className="text-white text-4xl font-bold">Daily</p>
            <div className="h-40">
              <svg
                fill="none"
                height="100%"
                preserveAspectRatio="none"
                viewBox="0 0 472 150"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint0_linear_1131_5935_updated"
                    x1="236"
                    x2="236"
                    y1="1"
                    y2="149"
                  >
                    <stop stopColor="hsl(var(--primary))" stopOpacity="0.3"></stop>
                    <stop offset="1" stopColor="hsl(var(--primary))" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
                <path
                  d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H0V109Z"
                  fill="url(#paint0_linear_1131_5935_updated)"
                ></path>
                <path
                  d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                  stroke="hsl(var(--primary))"
                  strokeLinecap="round"
                  strokeWidth="3"
                ></path>
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-lg border border-[#324d67] p-6 bg-[#192633]/50">
            <div className="flex items-center justify-between">
              <p className="text-white text-base font-medium">Error Rates</p>
              <span className="text-[#fa6238] text-sm font-medium">-1%</span>
            </div>
            <p className="text-white text-4xl font-bold">2%</p>
            <div className="h-40 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-36 h-36" viewBox="0 0 100 100">
                  <circle
                    className="text-[#233648]"
                    cx="50"
                    cy="50"
                    fill="transparent"
                    r="45"
                    stroke="currentColor"
                    strokeWidth="10"
                  ></circle>
                  <circle
                    className="text-primary"
                    cx="50"
                    cy="50"
                    fill="transparent"
                    r="45"
                    stroke="currentColor"
                    strokeDasharray="282.74"
                    strokeDashoffset="calc(282.74 - (282.74 * 2) / 100)"
                    strokeLinecap="round"
                    strokeWidth="10"
                  ></circle>
                </svg>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-white">2%</span>
                <span className="text-xs text-slate-400">Errors</span>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-white text-xl font-bold leading-tight px-4 pb-3 pt-8">
          Key Metrics
        </h2>
        <div className="grid grid-cols-3 gap-6 px-4 py-6">
          <div className="flex flex-col gap-2 rounded-lg p-6 bg-[#192633]/50 border border-[#324d67]">
            <p className="text-slate-300 text-base font-medium">
              Total Integrations
            </p>
            <p className="text-white text-3xl font-bold">15</p>
            <p className="text-[#0bda5b] text-sm font-medium">+2 this month</p>
          </div>
          <div className="flex flex-col gap-2 rounded-lg p-6 bg-[#192633]/50 border border-[#324d67]">
            <p className="text-slate-300 text-base font-medium">Active Users</p>
            <p className="text-white text-3xl font-bold">1,200</p>
            <p className="text-[#0bda5b] text-sm font-medium">+150 this month</p>
          </div>
          <div className="flex flex-col gap-2 rounded-lg p-6 bg-[#192633]/50 border border-[#324d67]">
            <p className="text-slate-300 text-base font-medium">Data Synced</p>
            <p className="text-white text-3xl font-bold">500GB</p>
            <p className="text-[#0bda5b] text-sm font-medium">+100GB this month</p>
          </div>
        </div>
        <h2 className="text-white text-xl font-bold leading-tight px-4 pb-3 pt-8">
          Recent Activity
        </h2>
        <div className="px-4 py-3">
          <div className="overflow-hidden rounded-lg border border-[#324d67] bg-[#192633]/50">
            <table className="w-full">
              <thead className="bg-[#192633]">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                    Integration
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#324d67]">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#92adc9]">
                    2023-08-15
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                    CRM to Marketing Automation
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-400">
                      Success
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#92adc9]">
                    Synced 1000 records
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#92adc9]">
                    2023-08-14
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                    E-commerce to Inventory
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-400">
                      Success
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#92adc9]">
                    Updated 500 products
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#92adc9]">
                    2023-08-13
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                    Support to CRM
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-500/10 text-red-400">
                      Failed
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#92adc9]">
                    Error: Invalid credentials
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#92adc9]">
                    2023-08-12
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                    Marketing Automation to Analytics
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-400">
                      Success
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#92adc9]">
                    Transferred 2000 leads
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#92adc9]">
                    2023-08-11
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                    CRM to E-commerce
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-400">
                      Success
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#92adc9]">
                    Synced 800 orders
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
