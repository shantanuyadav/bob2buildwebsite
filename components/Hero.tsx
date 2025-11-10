import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaPrimary?: {
    text: string;
    href: string;
  };
  ctaSecondary?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
}

const Hero = ({ title, subtitle, ctaPrimary, ctaSecondary, backgroundImage }: HeroProps) => {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-dark-bg-secondary dark:via-dark-bg-primary dark:to-dark-bg-tertiary -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05] -z-10" />

      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-xl mb-6 text-balance animate-fade-in">
            {title}
          </h1>
          <p className="text-body text-xl mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {ctaPrimary && (
              <Link href={ctaPrimary.href} className="btn-primary text-lg px-8 py-4 min-w-[200px]">
                {ctaPrimary.text}
              </Link>
            )}
            {ctaSecondary && (
              <Link href={ctaSecondary.href} className="btn-outline text-lg px-8 py-4 min-w-[200px]">
                {ctaSecondary.text}
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 dark:bg-primary-800 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-20 dark:opacity-10 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent-400 dark:bg-accent-800 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-20 dark:opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default Hero;
