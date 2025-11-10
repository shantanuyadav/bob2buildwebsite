import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import PortfolioCard from '@/components/PortfolioCard';
import ProcessStep from '@/components/ProcessStep';
import CTA from '@/components/CTA';
import { services } from '@/lib/services-data';
import { getFeaturedCaseStudies } from '@/lib/portfolio-data';
import { processSteps } from '@/lib/team-data';

export default function Home() {
  const featuredProjects = getFeaturedCaseStudies();

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="We Build Websites That Drive Real Results"
        subtitle="Professional web development for startups and growing businesses. Transform your online presence with custom websites, eCommerce solutions, and web applications designed to convert."
        ctaPrimary={{ text: 'Start Your Project', href: '/contact' }}
        ctaSecondary={{ text: 'View Our Work', href: '/portfolio' }}
      />

      {/* Value Propositions Section */}
      <section className="section-padding bg-white dark:bg-dark-bg-primary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4 text-secondary-900 dark:text-dark-text-primary">Why Choose bob2build?</h2>
            <p className="text-body max-w-2xl mx-auto text-secondary-600 dark:text-dark-text-secondary">
              We're not just developers—we're your partners in digital success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="heading-sm mb-3 text-secondary-900 dark:text-dark-text-primary">Lightning Fast</h3>
              <p className="text-body text-secondary-600 dark:text-dark-text-secondary">
                Speed matters. We build websites that load in under 2 seconds, keeping your visitors engaged and improving SEO rankings.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 dark:bg-accent-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-600 dark:text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="heading-sm mb-3 text-secondary-900 dark:text-dark-text-primary">ROI Focused</h3>
              <p className="text-body text-secondary-600 dark:text-dark-text-secondary">
                Every design decision is made with your bottom line in mind. We create websites that convert visitors into customers.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="heading-sm mb-3 text-secondary-900 dark:text-dark-text-primary">Support You Can Trust</h3>
              <p className="text-body text-secondary-600 dark:text-dark-text-secondary">
                We're here for the long haul. Get dedicated support and ongoing optimization to ensure your website keeps performing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-secondary-50 dark:bg-dark-bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4 text-secondary-900 dark:text-dark-text-primary">Our Services</h2>
            <p className="text-body max-w-2xl mx-auto text-secondary-600 dark:text-dark-text-secondary">
              Comprehensive web development solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.shortDescription}
                href={`/services#${service.slug}`}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/services" className="btn-primary">
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* Featured Portfolio Section */}
      <section className="section-padding bg-white dark:bg-dark-bg-primary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4 text-secondary-900 dark:text-dark-text-primary">Featured Projects</h2>
            <p className="text-body max-w-2xl mx-auto text-secondary-600 dark:text-dark-text-secondary">
              Real results for real businesses. See how we've helped our clients succeed online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <PortfolioCard
                key={project.id}
                slug={project.slug}
                title={project.title}
                client={project.client}
                industry={project.industry}
                projectType={project.projectType}
                description={project.description}
                image={project.images.hero}
                results={project.results}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/portfolio" className="btn-primary">
              View All Projects
            </a>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-dark-bg-secondary dark:via-dark-bg-primary dark:to-dark-bg-tertiary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4 text-secondary-900 dark:text-dark-text-primary">Our Process</h2>
            <p className="text-body max-w-2xl mx-auto text-secondary-600 dark:text-dark-text-secondary">
              A proven approach to delivering exceptional web projects on time and on budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.id}
                number={index + 1}
                title={step.title}
                description={step.description}
                duration={step.duration}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Transform Your Online Presence?"
        description="Let's discuss your project and explore how we can help your business grow with a powerful, conversion-focused website."
        primaryButton={{ text: 'Get Started Today', href: '/contact' }}
        secondaryButton={{ text: 'View Our Portfolio', href: '/portfolio' }}
        variant="primary"
      />
    </>
  );
}
