import Link from 'next/link';

interface CTAProps {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
  variant?: 'primary' | 'secondary';
}

const CTA = ({ title, description, primaryButton, secondaryButton, variant = 'primary' }: CTAProps) => {
  return (
    <section
      className={`section-padding ${
        variant === 'primary'
          ? 'bg-gradient-to-br from-primary-600 to-primary-800 dark:from-primary-700 dark:to-primary-950'
          : 'bg-secondary-50 dark:bg-dark-bg-secondary'
      }`}
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`heading-lg mb-6 ${
              variant === 'primary' ? 'text-white' : 'text-secondary-900 dark:text-dark-text-primary'
            }`}
          >
            {title}
          </h2>
          <p
            className={`text-xl mb-10 ${
              variant === 'primary' ? 'text-primary-100' : 'text-secondary-600 dark:text-dark-text-secondary'
            }`}
          >
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={primaryButton.href}
              className={
                variant === 'primary'
                  ? 'bg-white dark:bg-primary-100 text-primary-600 dark:text-primary-800 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 dark:hover:bg-white transition-colors duration-200 inline-block text-center min-w-[200px]'
                  : 'btn-primary px-8 py-4 min-w-[200px]'
              }
            >
              {primaryButton.text}
            </Link>
            {secondaryButton && (
              <Link
                href={secondaryButton.href}
                className={
                  variant === 'primary'
                    ? 'border-2 border-white dark:border-primary-200 text-white dark:text-primary-100 px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 dark:hover:bg-primary-100 dark:hover:text-primary-800 transition-colors duration-200 inline-block text-center min-w-[200px]'
                    : 'btn-outline px-8 py-4 min-w-[200px]'
                }
              >
                {secondaryButton.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
