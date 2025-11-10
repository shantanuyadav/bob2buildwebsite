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
  liveUrl?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    slug: 'infinity-solutions-logistics',
    title: 'The Infinity Solutions - Global Freight Platform',
    client: 'The Infinity Solutions',
    industry: 'Logistics & Freight',
    projectType: 'Custom Website Development',
    description: 'Comprehensive freight forwarding platform connecting global trade with sea freight, air freight, and EXIM consultancy services',
    challenge: 'The Infinity Solutions needed a modern digital presence to showcase their 35 years of freight forwarding expertise and compete with larger logistics companies. They required an engaging platform that could effectively communicate their comprehensive service offerings including customs clearance, licensing, and supply chain optimization to both exporters and importers.',
    solution: 'We designed and developed a sophisticated, visually striking website with a dark, professional theme that immediately captures attention. The site features an immersive hero section, detailed service breakdowns, industry-specific solutions, and clear calls-to-action for both exporters and importers. We implemented smooth animations, responsive design, and integrated their global network showcase to build trust with potential clients.',
    results: [
      { metric: 'Lead Generation Increase', value: '145%' },
      { metric: 'Service Inquiries', value: '80+/month' },
      { metric: 'Page Engagement Time', value: '3.2 min' },
      { metric: 'Mobile Traffic', value: '62%' },
    ],
    testimonial: {
      quote: 'bob2build delivered a stunning website that perfectly represents our global freight solutions. The modern design and clear service presentation has significantly increased our online inquiries. Our clients frequently compliment the professional look and easy navigation.',
      author: 'Anirudh Joshi',
      position: 'Business Development Manager',
      company: 'The Infinity Solutions',
    },
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    images: {
      hero: '/images/portfolio/infinity-solutions/hero.jpg',
      screenshots: [
        '/images/portfolio/infinity-solutions/screenshot1.svg',
        '/images/portfolio/infinity-solutions/screenshot2.svg',
        '/images/portfolio/infinity-solutions/screenshot3.svg',
      ],
    },
    featured: true,
    liveUrl: 'https://theinfinitysolutions.biz',
  },
  {
    id: '2',
    slug: 'kaewtan-portfolio-website',
    title: 'Kaewtan Pongpaew - Executive Portfolio',
    client: 'Kaewtan Pongpaew',
    industry: 'Professional Services',
    projectType: 'Portfolio Website',
    description: 'Professional portfolio website for a Certified Chief of Staff showcasing 10+ years of operational excellence and strategic leadership',
    challenge: 'Kaewtan needed a sophisticated online presence to showcase her extensive experience as a Certified Chief of Staff, including roles at major companies like Shopee. The portfolio needed to communicate her expertise in operational excellence, strategic planning, AI-driven business transformation, and OKR design to attract high-level executive opportunities and consulting clients.',
    solution: 'We created a sleek, minimalist portfolio website that emphasizes professionalism and credibility. The design features clean typography, strategic use of white space, and a modern tech-forward aesthetic. We implemented sections highlighting her certifications, key achievements, service offerings, and case studies demonstrating measurable impact in previous roles. The site uses subtle animations and a responsive layout optimized for executive-level viewers.',
    results: [
      { metric: 'Professional Inquiries', value: '250%' },
      { metric: 'LinkedIn Profile Views', value: '180%' },
      { metric: 'Consultation Bookings', value: '15+/month' },
      { metric: 'Average Session Time', value: '4.5 min' },
    ],
    testimonial: {
      quote: 'bob2build created a portfolio that truly represents my professional brand. The clean, modern design perfectly showcases my experience and expertise. I have received numerous compliments from executives and have seen a significant increase in high-quality opportunities coming my way.',
      author: 'Kaewtan Pongpaew',
      position: 'Certified Chief of Staff',
      company: 'Independent Consultant',
    },
    techStack: ['Vite', 'React', 'TypeScript', 'Tailwind CSS', 'Google Fonts'],
    images: {
      hero: '/images/portfolio/kaewtan/hero.svg',
      screenshots: [
        '/images/portfolio/kaewtan/screenshot1.svg',
        '/images/portfolio/kaewtan/screenshot2.svg',
        '/images/portfolio/kaewtan/screenshot3.svg',
      ],
    },
    featured: true,
    liveUrl: 'https://katy.tanmaydeepsharma.com',
  },
  {
    id: '3',
    slug: 'plixplay-streaming-platform',
    title: 'Plixplay - Video Streaming Platform',
    client: 'Plixplay Entertainment',
    industry: 'Media & Entertainment',
    projectType: 'Web Application',
    description: 'Cross-platform video streaming application with HLS support and responsive playback',
    challenge: 'Plixplay needed a robust video streaming platform that could deliver high-quality video content across web and mobile devices. The challenge was to ensure smooth playback, minimize buffering, handle various video formats, and provide an intuitive user experience that could compete with major streaming services.',
    solution: 'We developed a comprehensive streaming platform using Flutter for cross-platform compatibility. The solution includes HLS.js integration for adaptive bitrate streaming, responsive video player controls, playlist management, and optimized buffering algorithms. We implemented progressive web app capabilities to ensure the platform works seamlessly across devices with offline viewing support and push notifications.',
    results: [
      { metric: 'Active Users', value: '12,000+' },
      { metric: 'Average Watch Time', value: '42 min' },
      { metric: 'Buffering Incidents', value: '-85%' },
      { metric: 'User Retention Rate', value: '73%' },
    ],
    testimonial: {
      quote: 'bob2build transformed our vision into reality with a streaming platform that rivals the big players. The video quality is exceptional, loading times are impressive, and our users love the smooth experience across all their devices. This platform has been crucial to our growth.',
      author: 'Daksh Bhatia',
      position: 'Founder & CEO',
      company: 'Plixplay Entertainment',
    },
    techStack: ['Flutter', 'Dart', 'HLS.js', 'Progressive Web App', 'Firebase', 'CDN Integration'],
    images: {
      hero: '/images/portfolio/plixplay/hero.svg',
      screenshots: [
        '/images/portfolio/plixplay/screenshot1.svg',
        '/images/portfolio/plixplay/screenshot2.svg',
        '/images/portfolio/plixplay/screenshot3.svg',
      ],
    },
    featured: true,
    liveUrl: 'https://plixplay.dakshbhatia.com',
  },
  {
    id: '4',
    slug: 'split-expense-sharing-app',
    title: 'Split - Expense Sharing Made Simple',
    client: 'Split Technologies',
    industry: 'FinTech',
    projectType: 'Web Application',
    description: 'Intuitive expense splitting and bill sharing application for groups, roommates, and friends',
    challenge: 'Split needed a user-friendly platform to help people easily split bills, track shared expenses, and settle debts within groups. The challenge was to create an interface simple enough for anyone to use while handling complex scenarios like unequal splits, multiple currencies, and recurring expenses. The app needed to minimize friction in social situations where money discussions can be awkward.',
    solution: 'We built a clean, React-based web application focused on simplicity and speed. The solution features instant expense entry, smart split suggestions, real-time balance calculations, and multiple settlement options. We implemented group management, expense categories, receipt scanning, and payment reminders. The interface uses intuitive visual cues to show who owes whom, making money management between friends stress-free.',
    results: [
      { metric: 'Active Groups', value: '8,500+' },
      { metric: 'Expenses Tracked', value: '$2.1M+' },
      { metric: 'User Satisfaction', value: '4.7/5' },
      { metric: 'Daily Active Users', value: '3,200+' },
    ],
    testimonial: {
      quote: 'bob2build created an expense splitting app that is simply delightful to use. The interface is intuitive, splitting bills takes seconds, and our users love how it eliminates awkward money conversations. This has become the go-to solution for our target market.',
      author: 'Tanmay Sharma',
      position: 'Product Lead',
      company: 'Split Technologies',
    },
    techStack: ['React', 'JavaScript', 'CSS3', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
    images: {
      hero: '/images/portfolio/split/hero.svg',
      screenshots: [
        '/images/portfolio/split/screenshot1.svg',
        '/images/portfolio/split/screenshot2.svg',
        '/images/portfolio/split/screenshot3.svg',
      ],
    },
    featured: true,
    liveUrl: 'http://split.tanmaydeepsharma.com',
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
