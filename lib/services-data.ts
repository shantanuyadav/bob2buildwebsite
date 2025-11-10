export interface Service {
  id: string;
  title: string;
  slug: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  useCases: string[];
  deliverables: string[];
  priceRange?: string;
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Custom Website Development',
    slug: 'custom-website-development',
    icon: '🎨',
    shortDescription: 'Unique, professionally designed websites tailored to your brand and business goals',
    fullDescription: 'We create custom websites from the ground up, designed specifically for your business needs. Every element is crafted to reflect your brand identity and drive your business objectives forward.',
    features: [
      'Custom UI/UX design tailored to your brand',
      'Fully responsive across all devices',
      'SEO-optimized structure and content',
      'Fast loading speeds and performance optimization',
      'Content Management System (CMS) integration',
      'Contact forms and lead generation tools',
      'Social media integration',
      'Google Analytics setup and tracking',
    ],
    useCases: [
      'Small businesses establishing online presence',
      'Professional services (law firms, medical practices, consultancies)',
      'Personal portfolios and branding websites',
      'Local service businesses (contractors, salons, restaurants)',
    ],
    deliverables: [
      'Fully functional, responsive website',
      'Source code and documentation',
      'CMS training and documentation',
      '30 days of post-launch support',
      'Performance and SEO optimization report',
    ],
    priceRange: '₹1,60,000 - ₹4,80,000',
  },
  {
    id: '2',
    title: 'eCommerce Solutions',
    slug: 'ecommerce-solutions',
    icon: '🛒',
    shortDescription: 'Complete online store solutions that drive sales and scale with your business',
    fullDescription: 'Launch or upgrade your online store with our comprehensive eCommerce solutions. We build secure, scalable online stores optimized for conversions and customer experience.',
    features: [
      'Custom Shopify or WooCommerce store setup',
      'Product catalog management system',
      'Secure payment gateway integration',
      'Inventory management integration',
      'Shopping cart and checkout optimization',
      'Customer account management',
      'Order tracking and notifications',
      'Mobile-optimized shopping experience',
      'SEO and marketing tools integration',
    ],
    useCases: [
      'Retail businesses expanding online',
      'Digital product sellers',
      'Subscription-based product businesses',
      'B2B wholesale platforms',
    ],
    deliverables: [
      'Fully configured eCommerce platform',
      'Product upload and organization',
      'Payment and shipping setup',
      'Staff training on platform management',
      '60 days of post-launch support',
      'Marketing and analytics setup',
    ],
    priceRange: '₹2,60,000 - ₹8,00,000',
  },
  {
    id: '3',
    title: 'Web Applications',
    slug: 'web-applications',
    icon: '⚙️',
    shortDescription: 'Custom web applications and SaaS platforms built for performance and scalability',
    fullDescription: 'We develop sophisticated web applications that solve complex business problems. From internal tools to customer-facing SaaS platforms, we build scalable, secure solutions.',
    features: [
      'Custom application architecture and design',
      'User authentication and authorization',
      'Database design and optimization',
      'API development and integration',
      'Real-time data processing',
      'Role-based access control',
      'Cloud hosting and deployment',
      'Automated testing and CI/CD',
      'Scalable infrastructure',
    ],
    useCases: [
      'SaaS platforms and tools',
      'Customer portals and dashboards',
      'Internal business management systems',
      'Booking and scheduling platforms',
      'Data visualization and analytics tools',
    ],
    deliverables: [
      'Fully functional web application',
      'Complete source code and documentation',
      'Database schema and API documentation',
      'Deployment and hosting setup',
      '90 days of post-launch support',
      'User training and admin guides',
    ],
    priceRange: '₹4,80,000 - ₹16,00,000+',
  },
  {
    id: '4',
    title: 'Website Redesign',
    slug: 'website-redesign',
    icon: '🔄',
    shortDescription: 'Transform your outdated website into a modern, high-converting digital asset',
    fullDescription: 'Breathe new life into your existing website with a complete redesign focused on modern design, improved user experience, and better business results.',
    features: [
      'Comprehensive site audit and analysis',
      'Modern, mobile-first design',
      'Improved site architecture and navigation',
      'Content migration and optimization',
      'Performance optimization',
      'SEO preservation and enhancement',
      'Conversion rate optimization',
      'Analytics and tracking setup',
    ],
    useCases: [
      'Outdated websites needing modernization',
      'Sites with poor mobile experience',
      'Websites with high bounce rates',
      'Rebranding initiatives',
      'Sites with declining search rankings',
    ],
    deliverables: [
      'Completely redesigned website',
      'Content migration and optimization',
      'SEO redirect mapping',
      'Performance optimization report',
      '45 days of post-launch support',
      'Training on new platform (if applicable)',
    ],
    priceRange: '₹2,20,000 - ₹6,40,000',
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
