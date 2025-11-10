import Link from 'next/link';
import Image from 'next/image';

interface PortfolioCardProps {
  slug: string;
  title: string;
  client: string;
  industry: string;
  projectType: string;
  description: string;
  image: string;
  results?: {
    metric: string;
    value: string;
  }[];
}

const PortfolioCard = ({
  slug,
  title,
  client,
  industry,
  projectType,
  description,
  image,
  results,
}: PortfolioCardProps) => {
  return (
    <Link href={`/portfolio/${slug}`} className="group block">
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
        {/* Image */}
        <div className="relative h-48 sm:h-56 overflow-hidden bg-secondary-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {projectType}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-grow flex flex-col">
          <div className="mb-2">
            <span className="text-sm text-secondary-500">{client} • {industry}</span>
          </div>
          <h3 className="heading-sm mb-3 group-hover:text-primary-600 transition-colors">
            {title}
          </h3>
          <p className="text-body mb-4 flex-grow line-clamp-3">
            {description}
          </p>

          {/* Results Preview */}
          {results && results.length > 0 && (
            <div className="flex flex-wrap gap-4 mb-4">
              {results.slice(0, 2).map((result, index) => (
                <div key={index} className="flex-1 min-w-[120px]">
                  <div className="text-2xl font-bold text-primary-600">{result.value}</div>
                  <div className="text-xs text-secondary-600">{result.metric}</div>
                </div>
              ))}
            </div>
          )}

          <div className="text-primary-600 font-semibold inline-flex items-center group-hover:translate-x-1 transition-transform">
            View Case Study
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioCard;
