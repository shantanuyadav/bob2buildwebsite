import { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/lib/services-data';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Professional web development services including custom websites, eCommerce solutions, web applications, and website redesigns for businesses of all sizes.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-dark-bg-secondary dark:via-dark-bg-primary dark:to-dark-bg-tertiary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Our Services</h1>
            <p className="text-body text-xl">
              Comprehensive web development solutions designed to help your business thrive online
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="section-padding bg-white dark:bg-dark-bg-primary">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.slug}
                className={`scroll-mt-24 ${index !== 0 ? 'pt-12 border-t border-secondary-200' : ''}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  {/* Service Info */}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-6xl">{service.icon}</span>
                      <h2 className="heading-md">{service.title}</h2>
                    </div>
                    <p className="text-body text-lg mb-6">{service.fullDescription}</p>
                    {service.priceRange && (
                      <div className="bg-primary-50 dark:bg-primary-900/20 border-l-4 border-primary-600 dark:border-primary-500 p-4 mb-6">
                        <p className="text-sm font-semibold text-secondary-700 dark:text-secondary-300 mb-1">Typical Investment</p>
                        <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">{service.priceRange}</p>
                      </div>
                    )}
                    <Link href="/contact" className="btn-primary">
                      Get Started
                    </Link>
                  </div>

                  {/* Features & Details */}
                  <div className="space-y-6">
                    {/* What's Included */}
                    <div>
                      <h3 className="text-xl font-bold text-secondary-900 dark:text-dark-text-primary mb-4">What's Included</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <svg
                              className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-secondary-700 dark:text-secondary-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Use Cases */}
                    <div>
                      <h3 className="text-xl font-bold text-secondary-900 dark:text-dark-text-primary mb-4">Perfect For</h3>
                      <ul className="space-y-2">
                        {service.useCases.map((useCase, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <svg
                              className="w-5 h-5 text-primary-500 flex-shrink-0 mt-1"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-secondary-700 dark:text-secondary-300">{useCase}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div>
                      <h3 className="text-xl font-bold text-secondary-900 dark:text-dark-text-primary mb-4">You'll Receive</h3>
                      <ul className="space-y-2">
                        {service.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <svg
                              className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span className="text-secondary-700 dark:text-secondary-300">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Transparency Section */}
      <section className="section-padding bg-secondary-50 dark:bg-dark-bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-md mb-6">Transparent, Value-Based Pricing</h2>
            <p className="text-body mb-8">
              Every project is unique, and we believe in transparent pricing. Our quotes are based on your specific requirements, timeline, and the value we'll deliver to your business. No hidden fees, no surprises.
            </p>
            <div className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-8 shadow-lg dark:shadow-primary-900/10 border dark:border-dark-border">
              <h3 className="text-xl font-bold text-secondary-900 dark:text-dark-text-primary mb-4">What Affects Project Cost?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-secondary-900 dark:text-dark-text-primary mb-2">Complexity & Features</h4>
                  <p className="text-sm text-secondary-600 dark:text-dark-text-secondary">Number of pages, custom functionality, integrations</p>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900 dark:text-dark-text-primary mb-2">Design Requirements</h4>
                  <p className="text-sm text-secondary-600 dark:text-dark-text-secondary">Custom vs. template design, branding needs, animations</p>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900 dark:text-dark-text-primary mb-2">Timeline</h4>
                  <p className="text-sm text-secondary-600 dark:text-dark-text-secondary">Standard delivery vs. rush projects</p>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900 dark:text-dark-text-primary mb-2">Ongoing Support</h4>
                  <p className="text-sm text-secondary-600 dark:text-dark-text-secondary">Maintenance, updates, and optimization needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Let's Discuss Your Project"
        description="Ready to get started? Tell us about your needs and we'll provide a detailed proposal with transparent pricing."
        primaryButton={{ text: 'Request a Quote', href: '/contact' }}
        secondaryButton={{ text: 'See Our Work', href: '/portfolio' }}
        variant="primary"
      />
    </>
  );
}
