import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-9xl font-bold text-primary-600 mb-4">404</div>
          <h1 className="heading-lg mb-4">Page Not Found</h1>
          <p className="text-body text-xl mb-8">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary">
              Go to Homepage
            </Link>
            <Link href="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="mt-16 pt-8 border-t border-secondary-200">
            <p className="text-secondary-600 mb-4">Looking for something specific?</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/services" className="text-primary-600 hover:text-primary-700 font-medium">
                Our Services
              </Link>
              <span className="text-secondary-300">•</span>
              <Link href="/portfolio" className="text-primary-600 hover:text-primary-700 font-medium">
                Portfolio
              </Link>
              <span className="text-secondary-300">•</span>
              <Link href="/about" className="text-primary-600 hover:text-primary-700 font-medium">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
