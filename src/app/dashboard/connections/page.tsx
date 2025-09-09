
'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

const featuredConnectors = [
  {
    name: 'Marketing Automation',
    description: 'Automate marketing workflows and sync data between tools.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAPJWVwpmdeHAolVnxy2JlNJTMv4rkibNuF9kKjj65y1gdbqAt_WMUHGqx1FlKe3enKMzCpc_saHQ-fbPJTzIqHemdZ7uJXcy32h9FQBg8J0sh6Pks3e-CiBH2KyaLSzq7Gs_vKmmDA_NKg-ou7l7Ly2htxTSKjfTAjEd3Bp9ZPI6FM1GRnWS2fw9QfNP6K8kAcVBM28ew7vXG0r7yU25Pu2z0Lix5zREqg3YpvtGe2VC4D3GULH8Fz8CFWeRDXUlkEqdEC7327zIw5',
    hint: 'marketing workflows',
  },
  {
    name: 'CRM Connector',
    description: 'Integrate your CRM for seamless data flow across apps.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAI6g1akvVfNNDfPR1m2KsUAXPqm03Zw1vTneU-STYtF9tlK_hP1InQiOv1UPwkm7-qTsWQOTwh29fi3l3xhPFiRU1lCU6KupgXt7tOfD4MCK5N10jxmWWCoMaT3uX6bKJ_yUtxkE6r4GtZlioQ_pq9-qXz8JmFaxdcaqcFohJu8CAQxFlcVAqN-MpElqlmtmOoCU-HzBluoDpXyBUdZ0zXYEGscpUr3TE_9LcAovrQ49oWkbzbAWHnizS0xRwb6m0dLGa9v6MSt2QC',
    hint: 'sales pipeline',
  },
  {
    name: 'Customer Support',
    description: 'Connect your support platform to improve customer service.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCPyl-aidyjq8r7ZRsk1-D3pQMgTfIJpxo98QqqUAx7QszXNPUhXD_Uo7q8D5eJUOD6UqjPGo-yv7SCzITG0ApAn5fj0qrWlfV5nJNwVpKOkBhQYmaFRsoGsYUOceOQr86aoUh2pAT1FMvrUg2rtuMp46fHihAYVuGByH7_MWUtU6ZWgAWSQR-fY2W9TDlJzdyJcaVMp6XhBtgMttHp-gGABYXZwfTF2_PUrveTKAx7sfy2oG8bdB9NOtPjaQY3ie8D9sL-Yo-c653N',
    hint: 'support tickets',
  },
];

const allConnectors = [
  {
    name: 'Marketing Automation',
    description: 'Connect your marketing platform.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCj3dIFRv68UgDdCCVf8JyVH5M_5eliNjyeUgL8j3kzouukqNA1Zk68obmF3lBhkVM_BpuWo3-surMGs54qqsP8W38kXHSTET-bXj8ZgTvNuecLnzyz9uir0ntMubLWtq6yebR11mVQeEnxKuv12TDlpmUtcKlv9bAOqUQ2Z3VxU7WIhMh5LF7nc6Uj211UqrN8PoT_lrGl8rL3Cz8276Ak0IAbOMdaDu4021fCZ4UA-6KRmqTj4kdBrA0hkaan7QZlWVJumubux8On',
    hint: 'marketing data',
  },
  {
    name: 'CRM Connector',
    description: 'Integrate your CRM.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCnYcL7Nlp3-6yE_z1lCEOe243JsQ1XrNgx7G5RYivsATOPLEzkkNlxXaxkrTYeuW3tI164ZYJ0tMAYEgxHqIv1WkJ1bew2JihSDDMV2TF-xMIn7f8cTREqPZJ_si4t83gD-PcBRRBd3PsB4-r0i-dYBVrkcE-zAqfi9K_R3HhozAtFwfjxuhbk4lqkhPKUy2I7Tergtmsm2b2SXYoOXZNqp5hWIQSpYkJf-Le9LCl5fPmE-31vB7vHPGZ4lqZvUOpWHuou96O8S3E_',
    hint: 'sales team',
  },
  {
    name: 'Customer Support',
    description: 'Connect your support platform.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCWXnezMkimoHesoWYXOfwvm4C_fXtByPxf7rK0OuTmogFSyEdnfZ3VBUQ8K4IxYIgiuE6eRAO0BFQjuU9xCdFsiiovz3GZlIqgOtcBpJFNV5S7wfFJ7XidQf86FR0Atx_jIYs0gnvIv6V0i2yuk2sYqPKzPpgpkNDioJVlDKkh2e8Q8O-omK-vO0KSQq1Ov6smLwyw9uJ4tK956ijA-9oq6gWMVo2s6-mjvjzFtFO7kAfeXh-FPLvR42obYeabx177Dip0d3Xy1PKZ',
    hint: 'helpdesk tickets',
  },
  {
    name: 'Productivity Connector',
    description: 'Integrate productivity tools.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCPiELDWwRlfE2FbW6lM3TxQRPOdFNDNaXxK8BU1Q8cjYxCjh_6QFkGUGGrPNIdxidKc4f7GsknqFqhm3weHDVe8a0wohkgCMkgxrpuq_nw18udQ9o0AFbg8Rr662VYGYAvocNj6k-9v-8us11jBoeArjJKd-7QwxQB9AakCgdE7dlPSlMK8cf6nTLvMM3WiVyt7WbqfHUo8xLk9FD1mEhoQdjxCNapAWmksPd_CAkzIJ4JrJhzfFaZ2ZykCKL6LVsN94_-11QzOCaI',
    hint: 'team collaboration',
  },
  {
    name: 'Finance Connector',
    description: 'Connect finance applications.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAtpGFyL9fdSQxWGuW5jX19PakurE91X-u800rBEfG8Ts2xvdssb9yeERXKIywe5PulKyGRAh0GQ_ScdMT0aW8a8T-psO6Nds8bOw68mzhKYU2v9vrN8M_doNzMszmSS1PXFlk9aFLM8Uzrx0p_PbNxM2jRm1c7brGEzOsdZrY-kXEJ6XZVheEwNi3zuqKB9r3JS3JJgno8o-4_Jd96TYAec1RRReEeSzKMJlvPB_Y0FrZFWtn67fVr2uBsbNmftieH7nyMrT1V5N_9',
    hint: 'financial statements',
  },
  {
    name: 'E-commerce Connector',
    description: 'Integrate e-commerce platforms.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDD5QBo4G-l1mMelpvM3-GlKJ4sHHlasuPgshCKz6yAZqc0UnL4OoNiAlNDkbAnMSF5qHHhzOl6Yai2yPSesouoetFE71iuOafiMnerGhdoZY6szxQQyYbgtU78kZI0KNsfpbUHDVApAwooJFuL3As4f7WQ-1oqUkiH4oW_t1jOH-oNYQXeKRGhWnJqocKhoytl8TFXq0fpW5ZLETWyQKPUNeBRB7_yoNeubFoMfH43RVH_EEHXMm6w6HMmF0FLklsFyd8XQ7XJPNcF',
    hint: 'online store',
  },
  {
    name: 'Social Media Connector',
    description: 'Connect social media accounts.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBPZOleR-qNTI4SF7dP2vLadyCOtXXeKJAGXmcmYUHTiOdvFBvRkGSWGbQ8K63AOCj9FG9bx-YeItv-D0xRrbGz3K_QMBLH-bzC-MewJAp982i7YmZDbdJC3ObqLnc3xJxPnEB5ZA_uVNV9M3hop9WX9Sum2BUMyrZCBsfB-y8NZ7PW-hdpjsOlZ1yvTfEg4zd4tmI7uGdyQpA_Vkt3yfGWpUAQxlhWPXPPCCSeOp4vaKCNfQpV_-vva8LtfNkXv9LfRVXZm-t41YPT',
    hint: 'social feed',
  },
  {
    name: 'Analytics Connector',
    description: 'Integrate analytics tools.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCtshvc4xTCZ3XmXGflfgkkLY4mv-oycgE4BDSa7-T6OzIUAmFP1u8LOIYiunashnskg2TFVd409vJCP8m-UJEB192OKxIXh_sOMoVHAZ1xiywR19Mx3DyFMjDFoM_WLzAk6Uy9HVyMjtRq5Uk9X8yLnTyGsz0Ef_S9evwmsvn5LdKVAUetYIYOGNlOx01B1vNJRrn8L6-o1WbUBdgqQovfnnfZr5dKJ_9pKmiVQVP48Em63DXOyL5EpOpG63jQHYiSB0NhkUxnZcgD',
    hint: 'data dashboard',
  },
];

export default function ConnectionsPage() {
  return (
    <div className="flex h-full grow">
      <aside className="w-80 flex-shrink-0 border-r border-[#324d67]/50 bg-[#18232f] p-6">
        <div className="sticky top-6">
          <div className="mb-8">
            <label className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#92adc9]">
                {' '}
                search{' '}
              </span>
              <Input
                className="w-full rounded-md border-none bg-[#233648] py-2.5 pl-10 pr-4 text-base placeholder:text-[#92adc9] focus:outline-none focus:ring-2 focus:ring-[#1173d4]"
                placeholder="Search connectors"
              />
            </label>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="px-2 pb-3 text-base font-semibold leading-tight tracking-[-0.015em]">
                Categories
              </h3>
              <div className="space-y-2">
                <label className="flex cursor-pointer items-center gap-x-3 rounded-md p-2 hover:bg-[#233648]">
                  <Checkbox />
                  <span className="text-sm font-medium">All</span>
                </label>
                <label className="flex cursor-pointer items-center gap-x-3 rounded-md p-2 hover:bg-[#233648]">
                  <Checkbox />
                  <span className="text-sm font-medium">Marketing</span>
                </label>
                <label className="flex cursor-pointer items-center gap-x-3 rounded-md p-2 hover:bg-[#233648]">
                  <Checkbox />
                  <span className="text-sm font-medium">Sales</span>
                </label>
                <label className="flex cursor-pointer items-center gap-x-3 rounded-md p-2 hover:bg-[#233648]">
                  <Checkbox />
                  <span className="text-sm font-medium">Support</span>
                </label>
                <label className="flex cursor-pointer items-center gap-x-3 rounded-md p-2 hover:bg-[#233648]">
                  <Checkbox />
                  <span className="text-sm font-medium">Productivity</span>
                </label>
                <label className="flex cursor-pointer items-center gap-x-3 rounded-md p-2 hover:bg-[#233648]">
                  <Checkbox />
                  <span className="text-sm font-medium">Finance</span>
                </label>
              </div>
            </div>
            <div>
              <h3 className="px-2 pb-3 text-base font-semibold leading-tight tracking-[-0.015em]">
                Data Types
              </h3>
              <div className="space-y-2">
                <label className="flex cursor-pointer items-center gap-x-3 rounded-md p-2 hover:bg-[#233648]">
                  <Checkbox />
                  <span className="text-sm font-medium">All</span>
                </label>
                <label className="flex cursor-pointer items-center gap-x-3 rounded-md p-2 hover:bg-[#233648]">
                  <Checkbox />
                  <span className="text-sm font-medium">Contacts</span>
                </label>
                <label className="flex cursor-pointer items-center gap-x-3 rounded-md p-2 hover:bg-[#233648]">
                  <Checkbox />
                  <span className="text-sm font-medium">Accounts</span>
                </label>
                <label className="flex cursor-pointer items-center gap-x-3 rounded-md p-2 hover:bg-[#233648]">
                  <Checkbox />
                  <span className="text-sm font-medium">Products</span>
                </label>
                <label className="flex cursor-pointer items-center gap-x-3 rounded-md p-2 hover:bg-[#233648]">
                  <Checkbox />
                  <span className="text-sm font-medium">Orders</span>
                </label>
                <label className="flex cursor-pointer items-center gap-x-3 rounded-md p-2 hover:bg-[#233648]">
                  <Checkbox />
                  <span className="text-sm font-medium">Invoices</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto p-8">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10">
            <h1 className="text-4xl font-bold tracking-tighter">
              Connector Marketplace
            </h1>
            <p className="mt-2 text-lg text-[#92adc9]">
              Browse and install pre-built connectors for various third-party
              applications.
            </p>
          </header>
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold tracking-tight">
              Featured Connectors
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredConnectors.map((connector) => (
                <div
                  key={connector.name}
                  className="group transform overflow-hidden rounded-lg bg-[#18232f] transition-transform duration-300 ease-in-out hover:-translate-y-1"
                >
                  <Image
                    src={connector.image}
                    alt={`${connector.name} hero image`}
                    width={400}
                    height={160}
                    className="h-40 w-full object-cover"
                    data-ai-hint={connector.hint}
                  />
                  <div className="p-5">
                    <h3 className="text-lg font-semibold">{connector.name}</h3>
                    <p className="mt-1 text-sm text-[#92adc9]">
                      {connector.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="mb-6 text-2xl font-bold tracking-tight">
              All Connectors
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {allConnectors.map((connector) => (
                <div
                  key={connector.name}
                  className="group transform overflow-hidden rounded-lg bg-[#18232f] transition-transform duration-300 ease-in-out hover:-translate-y-1"
                >
                  <Image
                    src={connector.image}
                    alt={`${connector.name} logo`}
                    width={200}
                    height={200}
                    className="aspect-square w-full object-cover"
                    data-ai-hint={connector.hint}
                  />
                  <div className="p-4">
                    <h3 className="truncate font-semibold">
                      {connector.name}
                    </h3>
                    <p className="mt-1 truncate text-sm text-[#92adc9]">
                      {connector.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
