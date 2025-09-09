
'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Search } from 'lucide-react';

const popularIntegrations = [
  {
    name: 'CRM System',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9gZKXQWP2sr2QidyRnd0vczRxpPKsgrmVdtCaOO7wFsHDTaZ4fKyVIU2axjVOFMbGHL6G2Yk_bwYEwgz3JYwHTZ3X69ChEGeLoQ6je_D0ovqVS2gs-LAkfnzjbL7aEBTJSkzE8ENUt6RxavGbxyEJpYNTrxR2B__bhTpF6aZ8Oo_5NEnIp7Zuj-9bh1JYP8Py5dQlfoR9WVESrmAD8aAnhvg0IrclNyXlXa68O1saNbSZ6DIJgcsOrK7Rq37QUab3vl1kvu-2UQRW',
    hint: 'sales team',
  },
  {
    name: 'Marketing Automation',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjlvMCHxYpjaN7jiZE_0QYbbNZmIeDmEwv8xf2pQUOETYbAKjwuXRxsR9hb59Fir9mwHEy82_VBcGXPqP-lLeIzw06rjQZD-0megTPrJ14Pp5rvujn3HsKUq0VUa6f-ami457ok8W4EItg0XQx7nXNqBagO_ncuPJ5U22Ajxmv3Vqs0HHztvyi3lWwaWPo8Oo9UFahNLKpG7Ukc3r4cKKy670J-emIfpeghPo0K68hnL7vdQijx6UkY27aTpisaGO1p8m-__W63vBr',
    hint: 'marketing campaign',
  },
  {
    name: 'E-commerce Platform',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmeukHeUAxVs2ZwnwaWo1FsZ7yF5BfdUxEdvy81Qy5tEJ6lfYMQH0YdL-6bzakSezhozdw01iQVtV5tUrTzsYAKLd7BlMgwACak0GbH2YB8jivt5HRlMYLHYgPGFPldLl0xJ3TwIn6ivnwMNVFp6mu07bSZ_T055n8v2JrxC-ifdQzSD-LVlgLM8Er-_DbZfUOUvAphUHr_m1r0ss9UqQ6ghI9BVPDCBWWHVRy-ALnCmf2IP9MbAQAPjGgzpZQh3O-dUhvZiz7ylYh',
    hint: 'online store',
  },
  {
    name: 'Customer Support',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDr2TSSPxLn7VvSW5O9Nb2PUznSOmXx4511DbZDfiaXCclZXc6Wfwr4WwEK0NRzS7RQjaQPHwCfn_GDaFaM5cQC_tsExUpqZ3b2i5SjaBxvC00Vh398jk3R47bgS0K7QtPcJYYty1Lx7IgzWJ5OC49weLiCnRpDQsiQk-saR0ItFhMl8jiSLQQ2NvWJLogEjtdjQoYmUzUrVTQRWOrFn2x_b9uBmXdBjTVOpV6GoQltFgvH8gpIfWEXMgfBqe7tejFBzjNywT5kdoQ3',
    hint: 'support ticket',
  },
];

const allIntegrations = [
  {
    name: 'CRM System',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGcUz6QcFwJgjbux3EC0xjgbYCxodRMehtp7gi6YtpEkuljef6laIg6fVJEslnNSu3bB-W0D48ES4kdmO4HkSYIOMJGphTWKpvnwWeVfJ7EwSOZ5nGheyODZQhmtbxu1MGLfcv2BPRBBMzWjrvqwrX6ylOxrH_f4CM-12PgndznN0RkJsbq6apBCgw31Zt8teoIwS3vztfZnNt65vLu-bH3kWsaTHNFnCJ94qg2Avfz_ygzzJpLnErWAYWSMSKmaqxAEj74FTbuo_7',
    hint: 'sales team',
  },
  {
    name: 'Marketing Automation',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAk5481h1etk9-EmzM5_OmDZQdJLoEheSybiKU2kGHDtCJAZPoVWpEZnwDLYLbMWEWWv9q0tOkCtmu7wcfWN5K3uOKvw0HhCL1zVgMtjR0xNcpnz3muAk3WwPOoYWllubH34E3VA3p-0RUvkdR-vVr_-KYn8KC1HjgCbcbQXgyNLKNbtMkHmEYcLA4UKM3PLVYxzgU3fmqKqwbHzPohoXObG5UpsZX7qjQcW1nD3AlaHpARGqSQsEcSBjS4_P8S7k6XN8gmFMLWWFe',
    hint: 'marketing campaign',
  },
  {
    name: 'E-commerce Platform',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPxf-uNsNDQBHX42OTqi4u_9Xd1KXYNEY9mu56jswTQx8Fx6GJ4R9UfixPzmpURTgf-sceOxQ4WwAsvg7q9wzMmP5tHvcPc2MXmzc2EskxNI3nC3QEdYfV-g4CzvFNqjm3PyaB3212A9dDusK1vbU204MJJleJ6pzCdtYZxNz1z8IHeuHYlq4n-88AGmt4jw7whQMKBuWSBpV2e_ojipD0mxpVhaDYLkeoLOW0_grBDihqVauXxCd1VooSWmwvXT-LTW7sgITqGCad',
    hint: 'online store',
  },
  {
    name: 'Customer Support',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANrOLcP9YnPvUwObIklnNFjkQCj4TWQL_3KyMaK4G3aFPOY_XLyDWBCKOrmEHAsW5rYGNE4phuEQL97AcxmQO2d7nnTh7NuEQpS_vhg8scJ9yjPdp2ima4A6V52MFEknoNx1nLUm8c2touhBn6phFIt6DwJi4jJpHGxvmNct3vbC_Txn7qSui529FC5w-4AIqSiF9iaGMmJVxdVinIXrK2OuHosmZLJFUqbb6e6OnFO3KTt41Q7YX7haanHLE8LwKLb4dWHbG4dth1',
    hint: 'support ticket',
  },
  {
    name: 'Project Management',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAr-zrbg9Xb38o1PbsG3zXYoOpaCQrySlOUqS587jz71rCVb1fb_AzbWMN4slHZWwgl1Q5Sc29W_VPck14_YZxCqd0LB_JLNP81VozxZ8IAOFTncBByrP8sP4o0DElCNheOx-TdKu_DUmYPhvOXnpVkwrMd8IuPoHM90TGp_dIb1BX4S7K-aSQTWLbTU0Wc5AuliGmO7qPsxjUTtPLgfJVWPQJi8cxD9ku-bbG9oC60kgZqvEKYYnLkwPs2JXUTgWrweJO4mbo2z4wy',
    hint: 'gantt chart',
  },
  {
    name: 'Email Marketing',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4dejcmO5xxfoQ_HBKTh7_5Zx1MiwoCcD0eYg7vfm6G2YWviSyki5tFu14wjaJmEuxCERDp2soFQH_x7s9peD51KTW71HyIzEeHcisr4iDu2CjsLApMqKmy6rwzwSoJ0mx2ySl3wFCz7KRAAPv8L24Ky2tX1iygiYePsPKcC9MzWXNT-XBd6a2ETnqHTtu00kxSmD3SAhJHsWH_U4keS5khuSZReaht7-o6fkRv69e7SCVvzSvQvKfYSFFSpdqoFKOzm6ezx-PdUt6',
    hint: 'email newsletter',
  },
  {
    name: 'Social Media',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAoLrOUM7VpX5xyUO6TWWy1TDZ8mTxnNdtcHZRQ9B6ukEHIs_ftLa9KckK5LBphEl6-1nc-66sYd9zq4i6mt2IU0eyIVFyVbtOfEFrRigwX4dEbWHn419X6wdrSTObC0BcJObId1CnGTNblLa2528dqSiSpbWC4taPtGXUQ6l0qLfWBfthHN-RWK1-0jkhlcvC4YKokpW7Jogg-shV873dAmyIgwMH1MY16dNls_8e6rdbi3qEXcz3FpkZOQgkEN0LjSl3ycDvXiDl',
    hint: 'social feed',
  },
  {
    name: 'Analytics',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCblswbx71p6Hy9QCbFd7I74HJtPnlbfsa1Iu9auDR5gjcAqGc2BdE6gkW6dmZgP3UgX5O5AoT_jb9krofM_wxspgEBLdwAYUeVYeKkWes3gpYWmBoNTsrB22H5nvppIJuwV3vQTtSCRD4JNqhCZVdUVUz6JeBiFG9pfOAn3_R6PYUPDIFo05XyOpXcCp_3KkIs0WRfXuCMdfZTt6sXxAnTuV7_Iaupv2dF83Nh9vFBmlJdmTv-gc2Z4Nbd5NJ3tlQk_g9FYZcSFYHC',
    hint: 'data dashboard',
  },
];

export default function AddIntegrationPage() {
  return (
    <div className="flex-grow overflow-y-auto bg-[#111A22] text-white">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-xl">
          <div className="mb-8 text-center">
            <p className="text-sm font-medium text-gray-400">Step 1 of 4</p>
            <div className="mt-2 h-1.5 w-full rounded-full bg-gray-700">
              <div
                className="h-1.5 rounded-full bg-primary"
                style={{ width: '25%' }}
              ></div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight">
                Select Integration
              </h2>
              <p className="mt-2 text-gray-400">
                Choose an integration to connect with your SyncStream account.
              </p>
            </div>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="text-gray-400" />
              </div>
              <Input
                className="w-full rounded-lg border border-[#324d67] bg-[#192633] py-3 pl-10 pr-4 placeholder:text-gray-500"
                placeholder="Search integrations..."
                type="search"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Popular Integrations</h3>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {popularIntegrations.map((integration) => (
                  <div
                    key={integration.name}
                    className="group flex cursor-pointer flex-col items-center gap-3 rounded-lg border border-transparent p-4 transition-colors hover:border-gray-600 hover:bg-gray-800"
                  >
                    <Image
                      src={integration.image}
                      alt={`${integration.name} logo`}
                      width={64}
                      height={64}
                      className="h-16 w-16 rounded-lg object-cover"
                      data-ai-hint={integration.hint}
                    />
                    <p className="text-sm font-medium text-center">
                      {integration.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">All Integrations</h3>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {allIntegrations.map((integration) => (
                   <div key={integration.name} className="flex cursor-pointer items-center gap-4 rounded-lg border border-[#324d67] bg-[#192633] p-4 transition-colors hover:border-gray-600 hover:bg-gray-800">
                    <Image
                      src={integration.image}
                      alt={`${integration.name} logo`}
                      width={40}
                      height={40}
                      className="h-10 w-10 shrink-0 rounded-lg object-cover"
                      data-ai-hint={integration.hint}
                    />
                    <h4 className="font-semibold">{integration.name}</h4>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-end pt-6">
              <Button asChild className="flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary/80">
                <Link href="/dashboard/integrations/add/review">
                  <span>Next Step</span>
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

    