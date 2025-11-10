import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with bob2build to discuss your web development project. We\'re here to help bring your digital vision to life.',
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-dark-bg-secondary dark:via-dark-bg-primary dark:to-dark-bg-tertiary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6 text-secondary-900 dark:text-dark-text-primary">Let's Work Together</h1>
            <p className="text-body text-xl text-secondary-600 dark:text-dark-text-secondary">
              Ready to transform your online presence? Tell us about your project and we'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white dark:bg-dark-bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              {/* Contact Details */}
              <div>
                <h2 className="heading-sm mb-6 text-secondary-900 dark:text-dark-text-primary">Get in Touch</h2>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900 dark:text-dark-text-primary mb-1">Email</h3>
                      <a href="mailto:hello@bob2build.com" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300">
                        hello@bob2build.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900 dark:text-dark-text-primary mb-1">Phone</h3>
                      <a href="tel:+918949752854" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300">
                        +91 8949752854
                      </a>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900 dark:text-dark-text-primary mb-1">Business Hours</h3>
                      <p className="text-secondary-600 dark:text-dark-text-secondary">Mon - Fri: 9:00 AM - 6:00 PM EST</p>
                      <p className="text-secondary-600 dark:text-dark-text-secondary">Weekend: By Appointment</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 border border-primary-100 dark:border-primary-800">
                <h3 className="font-bold text-secondary-900 dark:text-dark-text-primary mb-4">What to Expect</h3>
                <ul className="space-y-3 text-sm text-secondary-700 dark:text-dark-text-secondary">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Response within 24 hours (usually faster)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Free consultation to discuss your needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Detailed proposal with timeline and pricing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>No obligation - we're here to help</span>
                  </li>
                </ul>
              </div>

              {/* Social Proof */}
              <div className="bg-secondary-50 dark:bg-dark-bg-secondary rounded-xl p-6 border border-secondary-100 dark:border-dark-border">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 dark:text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="font-bold text-secondary-900 dark:text-dark-text-primary">4.9/5.0</span>
                </div>
                <p className="text-sm text-secondary-600 dark:text-dark-text-tertiary">
                  Based on 50+ client reviews
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-dark-bg-tertiary rounded-xl border border-secondary-200 dark:border-dark-border p-8 sm:p-10 shadow-sm dark:shadow-primary-900/10">
                <h2 className="heading-sm mb-6 text-secondary-900 dark:text-dark-text-primary">Tell Us About Your Project</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-secondary-50 dark:bg-dark-bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-md mb-12 text-center text-secondary-900 dark:text-dark-text-primary">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-6 shadow-sm dark:shadow-primary-900/10 border border-secondary-100 dark:border-dark-border">
                <h3 className="font-bold text-secondary-900 dark:text-dark-text-primary mb-2">How long does a typical project take?</h3>
                <p className="text-body text-secondary-600 dark:text-dark-text-secondary">
                  Most projects take 6-12 weeks from kickoff to launch, depending on complexity and scope. We'll provide a detailed timeline in our proposal based on your specific requirements.
                </p>
              </div>

              <div className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-6 shadow-sm dark:shadow-primary-900/10 border border-secondary-100 dark:border-dark-border">
                <h3 className="font-bold text-secondary-900 dark:text-dark-text-primary mb-2">What information do you need to provide a quote?</h3>
                <p className="text-body text-secondary-600 dark:text-dark-text-secondary">
                  We'll need to understand your business goals, target audience, desired features, timeline, and budget range. The contact form above collects this information, but we can also discuss it during our initial consultation.
                </p>
              </div>

              <div className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-6 shadow-sm dark:shadow-primary-900/10 border border-secondary-100 dark:border-dark-border">
                <h3 className="font-bold text-secondary-900 dark:text-dark-text-primary mb-2">Do you offer ongoing support after launch?</h3>
                <p className="text-body text-secondary-600 dark:text-dark-text-secondary">
                  Yes! All our projects include post-launch support. We offer maintenance packages for ongoing updates, security, and optimization to ensure your website continues to perform at its best.
                </p>
              </div>

              <div className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-6 shadow-sm dark:shadow-primary-900/10 border border-secondary-100 dark:border-dark-border">
                <h3 className="font-bold text-secondary-900 dark:text-dark-text-primary mb-2">Can you work with our existing brand guidelines?</h3>
                <p className="text-body text-secondary-600 dark:text-dark-text-secondary">
                  Absolutely! If you have existing brand guidelines, we'll ensure the website design aligns perfectly with your brand identity. If you don't have guidelines yet, we can help develop them as part of the project.
                </p>
              </div>

              <div className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-6 shadow-sm dark:shadow-primary-900/10 border border-secondary-100 dark:border-dark-border">
                <h3 className="font-bold text-secondary-900 dark:text-dark-text-primary mb-2">What if I'm not sure what I need?</h3>
                <p className="text-body text-secondary-600 dark:text-dark-text-secondary">
                  That's perfectly fine! Many of our clients come to us with a general idea but aren't sure about the technical details. We'll guide you through the process, ask the right questions, and recommend the best solution for your goals and budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
