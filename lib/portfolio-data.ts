export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  projectType: string;
  description: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    position: string;
    company: string;
  };
  techStack: string[];
  images: {
    hero: string;
    screenshots: string[];
  };
  featured: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    slug: 'techflow-saas-platform',
    title: 'TechFlow SaaS Platform Redesign',
    client: 'TechFlow Analytics',
    industry: 'SaaS/Tech',
    projectType: 'Website Redesign',
    description: 'Complete redesign of a B2B SaaS platform to improve user experience and increase conversions',
    challenge: 'TechFlow was experiencing high bounce rates and low conversion on their marketing site. Their existing design was outdated and didn\'t effectively communicate their value proposition to enterprise clients.',
    solution: 'We conducted comprehensive user research and competitor analysis to redesign their entire marketing website. We implemented a modern, conversion-focused design with clear CTAs, interactive product demos, and streamlined navigation. The new site was built with Next.js for optimal performance and SEO.',
    results: [
      { metric: 'Conversion Rate Increase', value: '65%' },
      { metric: 'Bounce Rate Reduction', value: '42%' },
      { metric: 'Page Load Time', value: '1.2s' },
      { metric: 'Lead Generation Increase', value: '78%' },
    ],
    testimonial: {
      quote: 'Apex Web Studios transformed our online presence completely. The new design not only looks stunning but has dramatically improved our conversion rates. Their team understood our business needs perfectly.',
      author: 'Sarah Chen',
      position: 'VP of Marketing',
      company: 'TechFlow Analytics',
    },
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    images: {
      hero: 'https://placehold.co/1200x675/2563eb/ffffff?text=TechFlow+Platform',
      screenshots: [
        'https://placehold.co/800x600/3b82f6/ffffff?text=Homepage+Hero',
        'https://placehold.co/800x600/60a5fa/ffffff?text=Product+Demo',
        'https://placehold.co/800x600/93c5fd/ffffff?text=Pricing+Page',
      ],
    },
    featured: true,
  },
  {
    id: '2',
    slug: 'shopease-ecommerce',
    title: 'ShopEase eCommerce Store',
    client: 'ShopEase Retail',
    industry: 'eCommerce',
    projectType: 'eCommerce Solutions',
    description: 'Custom Shopify store development for a growing online retail business',
    challenge: 'ShopEase needed to launch their online store quickly to capitalize on market demand, but required a unique design that stood out from competitors and integrated with their existing inventory management system.',
    solution: 'We built a custom Shopify store with a unique theme tailored to their brand. Integrated their inventory system via API, implemented advanced filtering and search functionality, and optimized for mobile shopping. Added features like wishlist, quick view, and abandoned cart recovery.',
    results: [
      { metric: 'Monthly Revenue', value: '$50k+' },
      { metric: 'Mobile Conversion Rate', value: '4.2%' },
      { metric: 'Average Order Value', value: '+32%' },
      { metric: 'Customer Retention', value: '68%' },
    ],
    testimonial: {
      quote: 'Our Shopify store exceeded all expectations. The custom design perfectly represents our brand, and the seamless inventory integration has saved us countless hours. Sales have been phenomenal!',
      author: 'Michael Rodriguez',
      position: 'Founder & CEO',
      company: 'ShopEase Retail',
    },
    techStack: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'Shopify API', 'Google Analytics'],
    images: {
      hero: 'https://placehold.co/1200x675/7c3aed/ffffff?text=ShopEase+Store',
      screenshots: [
        'https://placehold.co/800x600/8b5cf6/ffffff?text=Product+Catalog',
        'https://placehold.co/800x600/a78bfa/ffffff?text=Product+Detail',
        'https://placehold.co/800x600/c4b5fd/ffffff?text=Checkout+Flow',
      ],
    },
    featured: true,
  },
  {
    id: '3',
    slug: 'localmed-clinic-website',
    title: 'LocalMed Medical Clinic Website',
    client: 'LocalMed Clinic',
    industry: 'Healthcare',
    projectType: 'Custom Website Development',
    description: 'Patient-focused website for a local medical clinic with online booking integration',
    challenge: 'LocalMed was relying solely on phone bookings and had no online presence. They needed a professional website that would attract new patients and streamline their booking process while maintaining HIPAA compliance.',
    solution: 'Designed and developed a modern, accessible website with integrated online booking system. Implemented secure patient portal, service information pages, doctor profiles, and location finder. Ensured full mobile responsiveness and WCAG AA compliance for accessibility.',
    results: [
      { metric: 'New Patient Inquiries', value: '40+/month' },
      { metric: 'Online Bookings', value: '60%' },
      { metric: 'Phone Call Reduction', value: '45%' },
      { metric: 'Patient Satisfaction', value: '94%' },
    ],
    testimonial: {
      quote: 'The website has been a game-changer for our practice. We\'ve seen a significant increase in new patients, and our staff loves how the online booking system has reduced their administrative workload.',
      author: 'Dr. Emily Watson',
      position: 'Medical Director',
      company: 'LocalMed Clinic',
    },
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    images: {
      hero: 'https://placehold.co/1200x675/059669/ffffff?text=LocalMed+Clinic',
      screenshots: [
        'https://placehold.co/800x600/10b981/ffffff?text=Homepage',
        'https://placehold.co/800x600/34d399/ffffff?text=Booking+System',
        'https://placehold.co/800x600/6ee7b7/ffffff?text=Doctor+Profiles',
      ],
    },
    featured: true,
  },
  {
    id: '4',
    slug: 'fintrack-web-app',
    title: 'FinTrack Financial Dashboard',
    client: 'FinTrack Solutions',
    industry: 'Finance',
    projectType: 'Web Application',
    description: 'Real-time financial dashboard web application for investment tracking',
    challenge: 'FinTrack needed a sophisticated web application that could handle real-time financial data updates, complex calculations, and provide an intuitive interface for both novice and experienced investors.',
    solution: 'Built a full-stack web application using React and Node.js with WebSocket integration for real-time data. Implemented advanced charting, portfolio analytics, customizable dashboards, and secure authentication. Optimized for performance with large datasets and multiple concurrent users.',
    results: [
      { metric: 'Active Users', value: '5,000+' },
      { metric: 'Data Update Speed', value: '<100ms' },
      { metric: 'User Engagement', value: '+120%' },
      { metric: 'System Uptime', value: '99.9%' },
    ],
    testimonial: {
      quote: 'Apex Web Studios delivered a powerful, reliable platform that our users love. The real-time updates are incredibly fast, and the interface is intuitive. This has been critical to our business growth.',
      author: 'David Park',
      position: 'CTO',
      company: 'FinTrack Solutions',
    },
    techStack: ['React', 'Node.js', 'Express', 'WebSocket', 'MongoDB', 'Chart.js', 'AWS'],
    images: {
      hero: 'https://placehold.co/1200x675/dc2626/ffffff?text=FinTrack+Dashboard',
      screenshots: [
        'https://placehold.co/800x600/ef4444/ffffff?text=Dashboard+Overview',
        'https://placehold.co/800x600/f87171/ffffff?text=Portfolio+Analytics',
        'https://placehold.co/800x600/fca5a5/ffffff?text=Real-time+Charts',
      ],
    },
    featured: false,
  },
  {
    id: '5',
    slug: 'greenleaf-landscaping',
    title: 'GreenLeaf Landscaping Services',
    client: 'GreenLeaf Landscaping',
    industry: 'Service Business',
    projectType: 'Custom Website Development',
    description: 'Lead generation website for a local landscaping and lawn care business',
    challenge: 'GreenLeaf was struggling to compete with larger landscaping companies online. They needed a professional website that would establish credibility, showcase their work, and generate quality leads from their service area.',
    solution: 'Created a visually stunning website featuring a portfolio gallery, service area map, online quote request system, and seasonal promotions section. Implemented local SEO optimization and Google Business integration to improve local search visibility.',
    results: [
      { metric: 'Lead Increase', value: '85%' },
      { metric: 'Local Search Ranking', value: 'Top 3' },
      { metric: 'Quote Requests', value: '30+/month' },
      { metric: 'Conversion Rate', value: '8.5%' },
    ],
    testimonial: {
      quote: 'Since launching our new website, we\'ve been busier than ever. The online quote system makes it easy for customers to reach us, and we\'re showing up at the top of Google searches in our area.',
      author: 'Tom Anderson',
      position: 'Owner',
      company: 'GreenLeaf Landscaping',
    },
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Google Maps API', 'Netlify'],
    images: {
      hero: 'https://placehold.co/1200x675/15803d/ffffff?text=GreenLeaf+Landscaping',
      screenshots: [
        'https://placehold.co/800x600/16a34a/ffffff?text=Service+Gallery',
        'https://placehold.co/800x600/22c55e/ffffff?text=Quote+Request',
        'https://placehold.co/800x600/4ade80/ffffff?text=Service+Areas',
      ],
    },
    featured: false,
  },
  {
    id: '6',
    slug: 'edutech-learning-platform',
    title: 'EduTech Online Learning Platform',
    client: 'EduTech Academy',
    industry: 'Education',
    projectType: 'Web Application',
    description: 'Interactive online learning platform with course management and video streaming',
    challenge: 'EduTech needed to pivot from in-person classes to online learning quickly. They required a robust platform that could handle video streaming, student progress tracking, assignments, and live interactions.',
    solution: 'Developed a comprehensive learning management system with video streaming capabilities, progress tracking, interactive quizzes, discussion forums, and live class integration. Implemented role-based access for students, instructors, and administrators. Built with scalability in mind to handle growing student base.',
    results: [
      { metric: 'Students Enrolled', value: '3,200+' },
      { metric: 'Course Completion Rate', value: '76%' },
      { metric: 'Student Satisfaction', value: '4.8/5' },
      { metric: 'Platform Uptime', value: '99.7%' },
    ],
    testimonial: {
      quote: 'The platform Apex built for us has been instrumental in our transition to online education. It\'s user-friendly for both students and instructors, and the video streaming quality is excellent.',
      author: 'Dr. Jennifer Martinez',
      position: 'Academic Director',
      company: 'EduTech Academy',
    },
    techStack: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS S3', 'WebRTC', 'Stripe'],
    images: {
      hero: 'https://placehold.co/1200x675/ea580c/ffffff?text=EduTech+Platform',
      screenshots: [
        'https://placehold.co/800x600/f97316/ffffff?text=Course+Dashboard',
        'https://placehold.co/800x600/fb923c/ffffff?text=Video+Player',
        'https://placehold.co/800x600/fdba74/ffffff?text=Student+Progress',
      ],
    },
    featured: false,
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((study) => study.featured);
}

export function getIndustries(): string[] {
  const industries = caseStudies.map((study) => study.industry);
  return Array.from(new Set(industries)).sort();
}

export function getProjectTypes(): string[] {
  const types = caseStudies.map((study) => study.projectType);
  return Array.from(new Set(types)).sort();
}
