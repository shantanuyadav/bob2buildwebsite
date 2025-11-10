'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import PortfolioCard from '@/components/PortfolioCard';
import { caseStudies, getIndustries, getProjectTypes } from '@/lib/portfolio-data';

export default function PortfolioPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [selectedProjectType, setSelectedProjectType] = useState<string>('all');

  const industries = getIndustries();
  const projectTypes = getProjectTypes();

  const filteredProjects = caseStudies.filter((project) => {
    const industryMatch = selectedIndustry === 'all' || project.industry === selectedIndustry;
    const typeMatch = selectedProjectType === 'all' || project.projectType === selectedProjectType;
    return industryMatch && typeMatch;
  });

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-dark-bg-secondary dark:via-dark-bg-primary dark:to-dark-bg-tertiary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6 text-secondary-900 dark:text-dark-text-primary">Our Portfolio</h1>
            <p className="text-body text-xl text-secondary-600 dark:text-dark-text-secondary">
              Explore our successful projects and see how we've helped businesses like yours achieve their digital goals
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white dark:bg-dark-bg-secondary border-b border-secondary-200 dark:border-dark-border sticky top-[73px] z-40">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            {/* Industry Filter */}
            <div className="w-full sm:w-auto">
              <label htmlFor="industry" className="sr-only">
                Filter by Industry
              </label>
              <select
                id="industry"
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="w-full sm:w-64 px-4 py-2 rounded-lg border border-secondary-300 dark:border-dark-border bg-white dark:bg-dark-bg-tertiary text-secondary-900 dark:text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent"
              >
                <option value="all">All Industries</option>
                {industries.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
            </div>

            {/* Project Type Filter */}
            <div className="w-full sm:w-auto">
              <label htmlFor="projectType" className="sr-only">
                Filter by Project Type
              </label>
              <select
                id="projectType"
                value={selectedProjectType}
                onChange={(e) => setSelectedProjectType(e.target.value)}
                className="w-full sm:w-64 px-4 py-2 rounded-lg border border-secondary-300 dark:border-dark-border bg-white dark:bg-dark-bg-tertiary text-secondary-900 dark:text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent"
              >
                <option value="all">All Project Types</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Clear Filters */}
            {(selectedIndustry !== 'all' || selectedProjectType !== 'all') && (
              <button
                onClick={() => {
                  setSelectedIndustry('all');
                  setSelectedProjectType('all');
                }}
                className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold text-sm"
              >
                Clear Filters
              </button>
            )}
          </div>

          {/* Results Count */}
          <div className="text-center mt-4">
            <p className="text-sm text-secondary-600 dark:text-dark-text-tertiary">
              Showing {filteredProjects.length} of {caseStudies.length} projects
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-white dark:bg-dark-bg-primary">
        <div className="container-custom">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
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
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-secondary-900 dark:text-dark-text-primary mb-2">No projects found</h3>
              <p className="text-body text-secondary-600 dark:text-dark-text-secondary mb-6">Try adjusting your filters to see more results</p>
              <button
                onClick={() => {
                  setSelectedIndustry('all');
                  setSelectedProjectType('all');
                }}
                className="btn-primary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
