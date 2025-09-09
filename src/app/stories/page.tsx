
'use client';

import { Button } from '@/components/ui/button';
import { SyncStreamLogo } from '@/components/syncstream-logo';
import Image from 'next/image';
import Link from 'next/link';

export default function StoriesPage() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#111a22] dark group/design-root overflow-x-hidden" style={{fontFamily: 'Inter, "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#233648] px-10 py-3">
          <div className="flex items-center gap-4 text-white">
            <div className="size-8 text-primary">
              <SyncStreamLogo />
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">SyncStream</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <nav className="flex items-center gap-9">
              <a className="text-white/80 hover:text-white transition-colors text-sm font-medium leading-normal" href="#">Overview</a>
              <a className="text-white/80 hover:text-white transition-colors text-sm font-medium leading-normal" href="#">Integrations</a>
              <a className="text-white/80 hover:text-white transition-colors text-sm font-medium leading-normal" href="#">Pricing</a>
              <a className="text-white/80 hover:text-white transition-colors text-sm font-medium leading-normal" href="#">Support</a>
            </nav>
            <Button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Get Started</span>
            </Button>
          </div>
        </header>
        <main className="px-40 flex flex-1 justify-center py-16">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-col gap-4 text-center mb-12">
              <h1 className="text-white tracking-tight text-5xl font-bold leading-tight">Customer Stories</h1>
              <p className="text-[#92adc9] text-lg font-normal leading-normal max-w-2xl mx-auto">See how businesses are using SyncStream to streamline their workflows and achieve their goals.</p>
            </div>
            <div className="flex flex-col gap-16">
              <div className="p-4 @container">
                <div className="flex flex-col items-stretch justify-start rounded-xl overflow-hidden @xl:flex-row @xl:items-center bg-[#182330]">
                  <div className="w-full @xl:w-1/2 bg-center bg-no-repeat aspect-video bg-cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCu-okGB1mJD1v9_kk-gVR-BRNO1fM310yCFB01qijDSw6WMSk3PH949IoyzkWILT01UZ6dy7dHigal4XK3pa8oJnlaSI9LA7P0Vv0QZjDBmScdcZ77EuQEv3AeqZL-HRF9AM295HQ29CESi0cldhtTqTXNw-rTVr429w7vosVjdGbbaAbrFCc4umyrTy5GHXULsQ4U8JE7qXAFdX7MWNEkbCwrfM_4finUVYNB8FZdIijBeIj584RTrXnH6P1KpiftpPuHHs6bv-y5")'}}></div>
                  <div className="flex w-full @xl:w-1/2 min-w-72 grow flex-col items-start justify-center gap-4 p-8">
                    <h3 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">Streamlining Data Flow for a Growing E-commerce Business</h3>
                    <p className="text-[#92adc9] text-base font-normal leading-relaxed">
                      Learn how 'Urban Threads' integrated their e-commerce platform, CRM, and marketing tools with SyncStream, resulting in a 30% sales increase and better customer engagement.
                    </p>
                    <Button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-5 bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-medium leading-normal">
                      <span className="truncate">Read Case Study</span>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-4 @container">
                <div className="flex flex-col items-stretch justify-start rounded-xl overflow-hidden @xl:flex-row-reverse @xl:items-center bg-[#182330]">
                  <div className="w-full @xl:w-1/2 bg-center bg-no-repeat aspect-video bg-cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDBlh7tAtSflypFvm12R10zTzQcpFlyKmVp_jFw-M2hELHjPH5tCp79qabiGmD-3sbfTo7MKt-ldGXxgo2ikIm2CKX-h8VcIsf26l3pzp5ig31CQILf4d4p9nP2MMwaKsp94W8uoJqJ5osyfqCbqvJD-Igsrty3ZXGugor2HTzWndN3l9ZkReVP5rbHUz2Hdei0jF-TD8a09ekS9GDoAY-eHIn7--8yAN4nY1EAtUjAcojd_MG-AP3oYvKHq39gmA4iZpiigWX4cbbg")'}}></div>
                  <div className="flex w-full @xl:w-1/2 min-w-72 grow flex-col items-start justify-center gap-4 p-8">
                    <h3 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">Automating Customer Support for a Tech Startup</h3>
                    <p className="text-[#92adc9] text-base font-normal leading-relaxed">
                      Discover how 'TechGenius Solutions' automated customer support by integrating their helpdesk with project management tools via SyncStream, cutting response times by 40%.
                    </p>
                    <Button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-5 bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-medium leading-normal">
                      <span className="truncate">Read Case Study</span>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-4 @container">
                <div className="flex flex-col items-stretch justify-start rounded-xl overflow-hidden @xl:flex-row @xl:items-center bg-[#182330]">
                  <div className="w-full @xl:w-1/2 bg-center bg-no-repeat aspect-video bg-cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBDU9-BVSCbNMqf0n5kRt0R_MiRrtVCbjdRpiAO_Cq4mRlzkPaEdT3ZfqKf2luvrFkolxRu4i-Fpk2AOFZK9f7dcJ5LKq1ney8PI030Wf9aA9GCKijLn5GQm-5iXJiwfXUiMBjrDpyA1uwwrtDRDEpBh_jzVxnYvI8YXyYL9hnsDJMz3YTnFUhIgCNGBa0wEs7QmTXzSGR85PDMAQUzwxLAv6grBIPZPqa15kDOCdZe14ovjT_8HTQQzNSLZ26d8XkZVFtwsU4YCjWF")'}}></div>
                  <div className="flex w-full @xl:w-1/2 min-w-72 grow flex-col items-start justify-center gap-4 p-8">
                    <h3 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">Enhancing Marketing Efficiency for a Digital Agency</h3>
                    <p className="text-[#92adc9] text-base font-normal leading-relaxed">
                      Explore how 'Digital Edge Agency' boosted marketing efficiency by 25% by integrating social media and analytics tools with SyncStream, improving campaign performance and ROI.
                    </p>
                    <Button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-5 bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-medium leading-normal">
                      <span className="truncate">Read Case Study</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-white text-4xl font-bold leading-tight tracking-tight px-4 pb-3 pt-20 text-center">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 mt-8">
              <div className="flex flex-col gap-4 bg-[#182330] p-6 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCQtjStwTGJz-qWNHODu7GEJ-61d0xlf3IONsVe_0DsW8Hor6RsDmkwOPfgSXF5-G2KgAufnNG4yA9SNwiwNN4fOiRqc6QJJR3QwepmZxCTefkadPgj3quBEbcjj4U8-fvQNUbDHrjlMfxklSnhAL5_da_LXeE6sXXdkY3zMQRzS6nRDbv4Nuy3NfcxMLLxKadjKuU9VdOaNTV3HePcSacmdTHClpefRbLs3CdZbX9Snm_KLAP_zL-1Up8j4oenmqraIlhXLF8gi8Qs")'}}></div>
                  <div className="flex-1">
                    <p className="text-white text-base font-bold leading-normal">Sarah Chen</p>
                    <p className="text-[#92adc9] text-sm font-normal leading-normal">CEO, Urban Threads</p>
                  </div>
                </div>
                <div className="flex gap-0.5 text-primary">
                  <span className="material-symbols-outlined !text-xl">star</span>
                  <span className="material-symbols-outlined !text-xl">star</span>
                  <span className="material-symbols-outlined !text-xl">star</span>
                  <span className="material-symbols-outlined !text-xl">star</span>
                  <span className="material-symbols-outlined !text-xl">star</span>
                </div>
                <p className="text-white/90 text-base font-normal leading-relaxed">
                  "SyncStream has been a game-changer for our business. It seamlessly connects all our critical systems, allowing us to focus on growth and customer satisfaction."
                </p>
              </div>
              <div className="flex flex-col gap-4 bg-[#182330] p-6 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB5cWbM0niH2yU0Dw6F-3jylKIjWw80tFqEVR4Ig61htRsz_eb1Ebg7M8lJkVjiv2z5N9-pqMVcotEavjQiw4BrdpDRL_TD4mDjG-wrD45qkTRsDGbpTjuMJBRVNXP4AvoCdZXQXpgZHWw-2kgpbwbHUUDmrcObFjAYhVL7c9tJy18oSbf4AXnmNVtNbXnEB4NIjENIE5Coj8jDn8WaKvXmkI0Qp6VPwGZQytr_z6cHeOxJI6ZevKWMa0D89SamzGUJIL0quP9C2CJi")'}}></div>
                  <div className="flex-1">
                    <p className="text-white text-base font-bold leading-normal">David Lee</p>
                    <p className="text-[#92adc9] text-sm font-normal leading-normal">CTO, TechGenius Solutions</p>
                  </div>
                </div>
                <div className="flex gap-0.5 text-primary">
                  <span className="material-symbols-outlined !text-xl">star</span>
                  <span className="material-symbols-outlined !text-xl">star</span>
                  <span className="material-symbols-outlined !text-xl">star</span>
                  <span className="material-symbols-outlined !text-xl">star</span>
                  <span className="material-symbols-outlined !text-xl">star</span>
                </div>
                <p className="text-white/90 text-base font-normal leading-relaxed">
                  "The automation capabilities of SyncStream have significantly improved our customer support efficiency. We can now respond to customer inquiries much faster."
                </p>
              </div>
              <div className="flex flex-col gap-4 bg-[#182330] p-6 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBkPQZZeA2U_6zRqg_M0r5Huv46aekkJRuswKAkQ_lQjchernR5h0iB2sy2RNzM9Auqcy7dNPf9vvIFmhC-CU4N0JrZygMf1ouDxqnl941z6FyC_Oh4emn_iZWa7j4V4WYitOeZl2YC9hLPTS01OFHbaGfBKYz893DspfbpFLMzVur49r52uac_vVNlftrYhfrtYc-a44cLkXABstz9BQU-Bebukl7qCeCbbQQkkKR90hdCfV-xvJ0Uwo4mNYb2_01pQlmbmDrfSJDq")'}}></div>
                  <div className="flex-1">
                    <p className="text-white text-base font-bold leading-normal">Emily Wong</p>
                    <p className="text-[#92adc9] text-sm font-normal leading-normal">Marketing Director, Digital Edge</p>
                  </div>
                </div>
                <div className="flex gap-0.5 text-primary">
                  <span className="material-symbols-outlined !text-xl">star</span>
                  <span className="material-symbols-outlined !text-xl">star</span>
                  <span className="material-symbols-outlined !text-xl">star</span>
                  <span className="material-symbols-outlined !text-xl">star</span>
                  <span className="material-symbols-outlined !text-xl">star</span>
                </div>
                <p className="text-white/90 text-base font-normal leading-relaxed">
                  "SyncStream has revolutionized our marketing efforts. The integration with our analytics platform gives us valuable insights, enabling us to optimize our campaigns."
                </p>
              </div>
            </div>
          </div>
        </main>
        <footer className="flex justify-center border-t border-solid border-t-[#233648]">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <footer className="flex flex-col gap-8 px-5 py-12 @container sm:flex-row sm:justify-between sm:items-center">
              <p className="text-[#92adc9] text-sm font-normal leading-normal text-center sm:text-left">© 2024 SyncStream. All rights reserved.</p>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
                <a className="text-[#92adc9] hover:text-white transition-colors text-sm font-normal leading-normal" href="#">Privacy Policy</a>
                <a className="text-[#92adc9] hover:text-white transition-colors text-sm font-normal leading-normal" href="#">Terms of Service</a>
                <a className="text-[#92adc9] hover:text-white transition-colors text-sm font-normal leading-normal" href="#">Contact Us</a>
              </div>
            </footer>
          </div>
        </footer>
      </div>
    </div>
  );
}
