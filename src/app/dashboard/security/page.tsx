
import { Button } from '@/components/ui/button';
import { SyncStreamLogo } from '@/components/syncstream-logo';
import Image from 'next/image';
import Link from 'next/link';

export default function SecurityPage() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col dark group/design-root"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
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
                    <Button asChild className="mt-6 flex w-fit items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 h-10 text-sm font-medium text-white transition-colors hover:bg-primary/90">
                      <Link href="#">
                        <span>View Certificate</span>
                        <span className="material-symbols-outlined text-base">
                          download
                        </span>
                      </Link>
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
                        asChild
                        className="mt-6 flex w-fit items-center justify-center gap-2 rounded-md bg-gray-700/50 px-4 py-2 h-10 text-sm font-medium text-white transition-colors hover:bg-gray-700"
                      >
                        <Link href="#">
                            <span>Learn More</span>
                            <span className="material-symbols-outlined text-base">
                            arrow_forward
                            </span>
                        </Link>
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
                        asChild
                        className="mt-6 flex w-fit items-center justify-center gap-2 rounded-md bg-gray-700/50 px-4 py-2 h-10 text-sm font-medium text-white transition-colors hover:bg-gray-700"
                      >
                         <Link href="#">
                            <span>Learn More</span>
                            <span className="material-symbols-outlined text-base">
                            arrow_forward
                            </span>
                        </Link>
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
                <h2 className="text-white text-3xl font-bold tracking-tight mb-8">Security Timeline</h2>
                <div className="relative pl-8 border-l border-gray-700">
                  <div className="absolute -left-4 top-2 h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center ring-8 ring-[#111827]">
                    <span className="material-symbols-outlined text-white">shield</span>
                  </div>
                  <div className="mb-12">
                    <p className="text-sm font-medium text-gray-400">October 26, 2023</p>
                    <h3 className="text-xl font-semibold text-white mt-1">Platform Security Update v2.5.1</h3>
                    <p className="mt-2 text-gray-400">Implemented enhanced encryption protocols for data in transit and at rest. Addressed a minor cross-site scripting (XSS) vulnerability.</p>
                  </div>
                  <div className="absolute -left-4 top-[calc(50%-1rem)] h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center ring-8 ring-[#111827]">
                    <span className="material-symbols-outlined text-white">verified_user</span>
                  </div>
                  <div className="mb-12">
                    <p className="text-sm font-medium text-gray-400">September 15, 2023</p>
                    <h3 className="text-xl font-semibold text-white mt-1">Quarterly Security Audit Completed</h3>
                    <p className="mt-2 text-gray-400">Successfully completed our Q3 2023 security audit conducted by an independent third-party. No major vulnerabilities were found. Full report available to enterprise customers upon request.</p>
                  </div>
                  <div className="absolute -left-4 bottom-2 h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center ring-8 ring-[#111827]">
                    <span className="material-symbols-outlined text-white">gpp_good</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-400">August 5, 2023</p>
                    <h3 className="text-xl font-semibold text-white mt-1">Vulnerability Patch for CVE-2023-4567</h3>
                    <p className="mt-2 text-gray-400">A patch was deployed to address a critical vulnerability in a third-party library. All systems were updated within 24 hours of the vulnerability disclosure.</p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-white text-3xl font-bold tracking-tight mb-8">Our Security Measures</h2>
                <div className="prose prose-invert max-w-none text-gray-400 space-y-4">
                  <p>
                    SyncStream employs a multi-layered security approach, including encryption, access controls, and regular audits, to protect your data from unauthorized access
                    and breaches. Our infrastructure is designed to provide high availability and resilience, ensuring continuous operation and data integrity.
                  </p>
                  <p>
                    We conduct regular security assessments and penetration testing to identify and address potential vulnerabilities. Our security team is dedicated to maintaining
                    the highest standards of security and compliance, providing you with a secure and reliable platform for your integration needs.
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-white text-3xl font-bold tracking-tight mb-8">Contact Our Security Team</h2>
                <div className="rounded-lg bg-gray-800/50 p-6 ring-1 ring-white/10">
                <p className="text-gray-400 mb-6">
                  Have a security concern or question? Our team is here to help. You can reach us by email or through our dedicated support form. We take all security-related inquiries seriously and will respond promptly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                <a className="flex items-center justify-center gap-2 rounded-md h-10 px-4 bg-gray-700/50 text-white text-sm font-medium hover:bg-gray-700 transition-colors flex-1" href="mailto:security@syncstream.com">
                <span className="material-symbols-outlined text-base"> email </span>
                <span>Email: security@syncstream.com</span>
                </a>
                <a className="flex items-center justify-center gap-2 rounded-md h-10 px-4 bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors flex-1" href="#">
                <span className="material-symbols-outlined text-base"> description </span>
                <span>Open Security Support Form</span>
                </a>
                </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
