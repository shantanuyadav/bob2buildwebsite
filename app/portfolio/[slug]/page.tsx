import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCaseStudyBySlug, caseStudies } from '@/lib/portfolio-data';
import CTA from '@/components/CTA';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: caseStudy.title,
    description: caseStudy.description,
  };
}

export default function CaseStudyPage({ params }: Props) {
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    notFound();
  }

  // Get related projects (same industry, excluding current)
  const relatedProjects = caseStudies
    .filter((study) => study.industry === caseStudy.industry && study.slug !== caseStudy.slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-dark-bg-secondary dark:via-dark-bg-primary dark:to-dark-bg-secondary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-6">
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <Link href="/portfolio" className="text-primary-600 hover:text-primary-700">
                    Portfolio
                  </Link>
                </li>
                <li className="text-secondary-400">/</li>
                <li className="text-secondary-600">{caseStudy.title}</li>
              </ol>
            </nav>

            {/* Header */}
            <div className="mb-6">
              <span className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {caseStudy.projectType}
              </span>
              <h1 className="heading-xl mb-4 dark:text-dark-text-primary">{caseStudy.title}</h1>
              <p className="text-xl text-secondary-600 dark:text-dark-text-secondary mb-4">
                {caseStudy.client} • {caseStudy.industry}
              </p>
              {caseStudy.liveUrl && (
                <a
                  href={caseStudy.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View Live Site
                </a>
              )}
            </div>

            {/* Hero Image */}
            <div className="relative h-64 sm:h-96 rounded-xl overflow-hidden shadow-2xl mb-8">
              <Image
                src={caseStudy.images.hero}
                alt={caseStudy.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {caseStudy.results.map((result, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-1">
                    {result.value}
                  </div>
                  <div className="text-sm text-secondary-600">{result.metric}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="section-padding bg-white dark:bg-dark-bg-primary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Challenge */}
            <div className="mb-16">
              <h2 className="heading-md mb-6">The Challenge</h2>
              <p className="text-body text-lg leading-relaxed">{caseStudy.challenge}</p>
            </div>

            {/* Solution */}
            <div className="mb-16">
              <h2 className="heading-md mb-6">Our Solution</h2>
              <p className="text-body text-lg leading-relaxed">{caseStudy.solution}</p>
            </div>

            {/* Screenshots */}
            {caseStudy.images.screenshots && caseStudy.images.screenshots.length > 0 && (
              <div className="mb-16">
                <h2 className="heading-md mb-6">Project Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {caseStudy.images.screenshots.map((screenshot, index) => (
                    <div
                      key={index}
                      className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <Image
                        src={screenshot}
                        alt={`${caseStudy.title} screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Results */}
            <div className="mb-16">
              <h2 className="heading-md mb-6">The Results</h2>
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {caseStudy.results.map((result, index) => (
                    <div key={index} className="text-center">
                      <div className="text-5xl font-bold text-primary-600 mb-2">
                        {result.value}
                      </div>
                      <div className="text-secondary-700 font-medium">{result.metric}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="mb-16">
              <div className="bg-secondary-900 text-white rounded-xl p-8 sm:p-12 relative">
                <div className="text-6xl text-primary-400 opacity-50 mb-4">"</div>
                <blockquote className="text-xl sm:text-2xl leading-relaxed mb-6">
                  {caseStudy.testimonial.quote}
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-2xl font-bold">
                    {caseStudy.testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-lg">{caseStudy.testimonial.author}</div>
                    <div className="text-secondary-300">
                      {caseStudy.testimonial.position} at {caseStudy.testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-16">
              <h2 className="heading-md mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {caseStudy.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-secondary-100 text-secondary-700 px-4 py-2 rounded-lg font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="section-padding bg-secondary-50">
          <div className="container-custom">
            <h2 className="heading-md mb-12 text-center">More {caseStudy.industry} Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/portfolio/${project.slug}`}
                  className="group block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48 bg-secondary-100">
                    <Image
                      src={project.images.hero}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-secondary-600 text-sm">{project.client}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTA
        title="Ready to See Similar Results?"
        description="Let's discuss how we can help your business achieve its digital goals with a custom web solution."
        primaryButton={{ text: 'Start Your Project', href: '/contact' }}
        secondaryButton={{ text: 'View All Projects', href: '/portfolio' }}
        variant="primary"
      />
    </>
  );
}
