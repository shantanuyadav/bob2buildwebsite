import Link from 'next/link';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
}

const ServiceCard = ({ icon, title, description, href }: ServiceCardProps) => {
  return (
    <div className="bg-white dark:bg-dark-bg-tertiary p-8 rounded-xl shadow-lg hover:shadow-xl dark:shadow-primary-900/10 dark:hover:shadow-primary-900/20 transition-all duration-300 border border-secondary-100 dark:border-dark-border h-full flex flex-col">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="heading-sm mb-3">{title}</h3>
      <p className="text-body mb-6 flex-grow">{description}</p>
      <Link
        href={href}
        className="text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors inline-flex items-center group"
      >
        Learn More
        <svg
          className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
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
      </Link>
    </div>
  );
};

export default ServiceCard;
