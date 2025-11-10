import { Metadata } from 'next';
import TeamMember from '@/components/TeamMember';
import ProcessStep from '@/components/ProcessStep';
import CTA from '@/components/CTA';
import { teamMembers, companyValues, processSteps } from '@/lib/team-data';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about bob2build, our mission, our team, and how we help businesses succeed online with professional web development services.',
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">About bob2build</h1>
            <p className="text-body text-xl">
              We're a team of passionate developers, designers, and strategists dedicated to helping businesses thrive online
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-8 text-center">Our Story</h2>

            <div className="space-y-6 text-body text-lg">
              <p>
                bob2build was founded with a simple but powerful mission: to make professional, high-performance web development accessible to startups and growing businesses. We saw too many talented entrepreneurs held back by outdated websites that didn't reflect the quality of their products or services.
              </p>

              <p>
                What started as a small team of developers has grown into a full-service web development agency. But our core values remain the same: deliver exceptional quality, maintain transparent communication, and measure success by our clients' results. We believe that every business deserves a website that not only looks great but drives real business growth.
              </p>

              <p>
                Today, we've helped dozens of businesses across industries achieve their digital goals. From local service businesses to fast-growing SaaS companies, we bring the same level of dedication and technical excellence to every project. We're not just building websites—we're building long-term partnerships with our clients.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-secondary-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
                <div className="text-secondary-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">5+</div>
                <div className="text-secondary-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
                <div className="text-secondary-600">Industries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-md mb-4">Our Core Values</h2>
            <p className="text-body max-w-2xl mx-auto">
              These principles guide everything we do and every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value) => (
              <div
                key={value.id}
                className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">{value.title}</h3>
                <p className="text-body">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-md mb-4">Meet Our Team</h2>
            <p className="text-body max-w-2xl mx-auto">
              The talented people behind your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamMember
                key={member.id}
                name={member.name}
                position={member.position}
                bio={member.bio}
                expertise={member.expertise}
                image={member.image}
                linkedin={member.linkedin}
                twitter={member.twitter}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-md mb-4">Our Development Process</h2>
            <p className="text-body max-w-2xl mx-auto">
              A proven, transparent approach that delivers results on time and on budget
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

          {/* Process Benefits */}
          <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-center text-secondary-900 mb-8">
              Why Our Process Works
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-bold text-secondary-900 mb-2">No Surprises</h4>
                <p className="text-sm text-secondary-600">
                  Clear milestones and regular updates keep you informed every step of the way
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-secondary-900 mb-2">On-Time Delivery</h4>
                <p className="text-sm text-secondary-600">
                  Our structured process ensures we meet deadlines without compromising quality
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-bold text-secondary-900 mb-2">Quality Guaranteed</h4>
                <p className="text-sm text-secondary-600">
                  Rigorous testing and QA ensure your website works flawlessly at launch
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Let's Build Something Great Together"
        description="Ready to work with a team that's as invested in your success as you are? Let's discuss your project."
        primaryButton={{ text: 'Get in Touch', href: '/contact' }}
        secondaryButton={{ text: 'See Our Work', href: '/portfolio' }}
        variant="primary"
      />
    </>
  );
}
