
import { Button } from '@/components/ui/button';
import { SyncStreamLogo } from '@/components/syncstream-logo';
import Image from 'next/image';

export default function SecurityPage() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col dark group/design-root"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-800 px-10 py-4">
          <div className="flex items-center gap-4 text-white">
            <SyncStreamLogo className="h-8 w-8 text-primary" />
            <h2 className="text-xl font-bold tracking-tight text-white">
              SyncStream
            </h2>
          </div>
          <nav className="flex flex-1 justify-center">
            <div className="flex items-center gap-8">
              <a
                className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
                href="#"
              >
                Overview
              </a>
              <a
                className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
                href="#"
              >
                Integrations
              </a>
              <a
                className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
                href="#"
              >
                Data Flows
              </a>
              <a
                className="border-b-2 border-primary pb-1 text-sm font-semibold text-white"
                href="#"
              >
                Security
              </a>
              <a
                className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
                href="#"
              >
                Support
              </a>
            </div>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
            >
              <span className="material-symbols-outlined text-2xl"> help </span>
            </Button>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB3xrQ8oA6RwDyDOrOFEniqFuAlJ9-qVSBfxWBlTAeD9n38OuJlrybU--e39wmEDTBfqd4VUbuEzOQ3_Goh4MUl0-kgh6LvdDg2jyF9pMD5GoVDNSMH7IRpSyb_t6Sj4pUghfreuxS0_6zYZmIano72rMJp8mDiGTr-yWXF4dZEVprLgAPWIxLPCg9WoQJ93cWxyIiDjhfgZxfX3GT0YDAZyyysdqPDz8ZC2roiq157mlaEY96A9N6e7rCyD0NPJarwqr46FrhFC0KI")',
              }}
            ></div>
          </div>
        </header>
        <main className="flex-1 px-10 py-12">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">
                Security and Compliance
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-400">
                At SyncStream, we prioritize the security and privacy of your
                data. Our platform is built with robust security measures and
                adheres to industry-leading compliance standards to ensure your
                information is protected.
              </p>
            </div>
            <div className="space-y-16">
              <div>
                <h2 className="mb-8 text-3xl font-bold tracking-tight text-white">
                  Certifications
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="flex flex-col justify-between rounded-lg bg-gray-800/50 p-6 ring-1 ring-white/10">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        ISO 27001
                      </h3>
                      <p className="mt-2 text-gray-400">
                        SyncStream is ISO 27001 certified, demonstrating our
                        commitment to information security management systems.
                      </p>
                    </div>
                    <Button className="mt-6 flex w-fit items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 h-10 text-sm font-medium text-white transition-colors hover:bg-primary/90">
                      <span>View Certificate</span>
                      <span className="material-symbols-outlined text-base">
                        download
                      </span>
                    </Button>
                  </div>
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      alt="ISO 27001 Certificate"
                      className="absolute inset-0 h-full w-full object-cover"
                      width={600}
                      height={400}
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsOAnvXXX7Gg_jzQaT5DIOeDZNydgtmgMsZ3PvmKrrZj_-ZBgpTwXPR7f54edz2v6w5gJKD_uEKfS6HhfkO_gOipm1N7wCRKH3F17FYGzy0ER2CV3AU8p29K6tJGn8Wdb1ICDiLd2pJdTmUjzQ4Zk1m4kGPZvlYHepr9W6Y6-lp-3CCFZUyoIzIDLLEaafnL0HS04BuGnpu5Q0Syi-87ePlIu4quMX0qIHGxmNICN0HmExxP9go--XSQseHAzvsiida1_wnI9AH5OD"
                      data-ai-hint="certificate design"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="mb-8 text-3xl font-bold tracking-tight text-white">
                  Compliance Standards
                </h2>
                <div className="space-y-8">
                  <div className="flex flex-col items-stretch gap-8 rounded-lg bg-gray-800/50 p-6 ring-1 ring-white/10 md:flex-row">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white">
                        General Data Protection Regulation (GDPR)
                      </h3>
                      <p className="mt-2 text-gray-400">
                        We comply with GDPR to ensure the protection of personal
                        data for individuals within the European Union.
                      </p>
                      <Button
                        variant="secondary"
                        className="mt-6 flex w-fit items-center justify-center gap-2 rounded-md bg-gray-700/50 px-4 py-2 h-10 text-sm font-medium text-white transition-colors hover:bg-gray-700"
                      >
                        <span>Learn More</span>
                        <span className="material-symbols-outlined text-base">
                          arrow_forward
                        </span>
                      </Button>
                    </div>
                    <div className="relative flex-1 overflow-hidden rounded-md md:w-1/3">
                      <Image
                        alt="GDPR Compliance"
                        className="absolute inset-0 h-full w-full object-cover"
                        width={600}
                        height={400}
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7eS471QY9mG8i_GxzUUClmbY61fwsCmMVzOVe1b-uIWSW8QCQNG49xfdEYKVGQx3y3GJaD58OFmqFvn7lEKPyTqpAbfZjcu85TyH_lTUsQoGw2LM7Dk9URi_U59NPcAFcEOb5PnyxB0nDmJ-qlRRIuUusXgfQJ-H2G-cSQ4J8MNidCCOFHDqSFmDr55rnuZ8zO9NAa_fSB4yEKbTo9B9LOu2yia1U2yaA1YAg-xzEI_UtHOEaMNnOGcHg_hDu6IBollVpQsxYn61i"
                        data-ai-hint="lock key"
                      />
                      <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch gap-8 rounded-lg bg-gray-800/50 p-6 ring-1 ring-white/10 md:flex-row">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white">
                        Health Insurance Portability and Accountability Act
                        (HIPAA)
                      </h3>
                      <p className="mt-2 text-gray-400">
                        SyncStream adheres to HIPAA regulations to safeguard
                        protected health information.
                      </p>
                      <Button
                        variant="secondary"
                        className="mt-6 flex w-fit items-center justify-center gap-2 rounded-md bg-gray-700/50 px-4 py-2 h-10 text-sm font-medium text-white transition-colors hover:bg-gray-700"
                      >
                        <span>Learn More</span>
                        <span className="material-symbols-outlined text-base">
                          arrow_forward
                        </span>
                      </Button>
                    </div>
                    <div className="relative flex-1 overflow-hidden rounded-md md:w-1/3">
                      <Image
                        alt="HIPAA Compliance"
                        className="absolute inset-0 h-full w-full object-cover"
                        width={600}
                        height={400}
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuACEqMrm1IzDiGpPup4NnVOuVeycDAUl1ti5yu-tj08w4yBXI8TaLJ7GLaciLBVgfXImjnXRDcy9-m5-QmM2wlX8lpTvhtgWoo9V9U7V8l-SfRJgl26_eGDasN3yv2hB3QXEXdt-idZtwjbJdl5H8g_3xVoWTlsN6EwtK5hKJcY27d_tGDseLhGshAcyQWsNQ7GR1tN3jsoxmU6Clhu5khresbhrHjdgkDRn63qyJUWhWzQWIko72Z6Tn5eZ3vsdHID2J8egWbQzWdH"
                        data-ai-hint="medical compliance"
                      />
                      <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="mb-8 text-3xl font-bold tracking-tight text-white">
                  Our Security Measures
                </h2>
                <div className="prose prose-invert max-w-none space-y-4 text-gray-400">
                  <p>
                    SyncStream employs a multi-layered security approach,
                    including encryption, access controls, and regular audits,
                    to protect your data from unauthorized access and breaches.
                    Our infrastructure is designed to provide high availability
                    and resilience, ensuring continuous operation and data
                    integrity.
                  </p>
                  <p>
                    We conduct regular security assessments and penetration
                    testing to identify and address potential vulnerabilities.
                    Our security team is dedicated to maintaining the highest
                    standards of security and compliance, providing you with a
                    secure and reliable platform for your integration needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
