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
  {
    id: '5',
    slug: 'babylon-hospital',
    title: 'Babylon Hospital - Modern Healthcare Website',
    client: 'Babylon Hospital',
    industry: 'Healthcare',
    projectType: 'Hospital Website',
    description: 'Comprehensive healthcare website for a premier multi-specialty hospital offering world-class medical services and patient care',
    challenge: 'Babylon Hospital needed a modern, trustworthy digital presence to showcase their extensive medical services, specialist doctors, and state-of-the-art facilities. The challenge was to create a website that would inspire confidence in potential patients, provide easy access to critical information like emergency services and appointments, while maintaining HIPAA compliance and accessibility standards for all users including elderly patients.',
    solution: 'We developed a professional, user-friendly hospital website with a clean, calming design that reflects healthcare excellence. The solution includes comprehensive department listings, detailed doctor profiles with specializations and qualifications, online appointment booking system, emergency contact information prominently displayed, patient resources section, and health blog for community education. We implemented fast loading times, mobile responsiveness for patients on-the-go, and intuitive navigation to help users quickly find the medical services they need.',
    results: [
      { metric: 'Online Appointments', value: '320%' },
      { metric: 'Patient Inquiries', value: '165%' },
      { metric: 'Mobile Bookings', value: '58%' },
      { metric: 'Average Session Time', value: '5.2 min' },
    ],
    testimonial: {
      quote: 'bob2build delivered a website that perfectly represents our commitment to patient care and medical excellence. The clean design, easy navigation, and online appointment system have significantly improved patient experience. We have seen a remarkable increase in appointment bookings and positive feedback from patients who find all the information they need effortlessly.',
      author: 'Dr. Rajesh Kumar',
      position: 'Chief Medical Officer',
      company: 'Babylon Hospital',
    },
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Appointment Booking API', 'SEO Optimization', 'Google Analytics'],
    images: {
      hero: 'https://placehold.co/1200x750/0066cc/ffffff?text=Babylon+Hospital',
      screenshots: [
        'https://placehold.co/800x500/0066cc/ffffff?text=Services+%26+Departments',
        'https://placehold.co/800x500/0066cc/ffffff?text=Medical+Excellence',
        'https://placehold.co/800x500/0066cc/ffffff?text=Patient+Care',
      ],
    },
    featured: true,
    liveUrl: 'https://www.babylonhospital.com/',
  },
  {
    id: '6',
    slug: 'swaadanusar',
    title: 'Swaadanusar - Authentic Indian Food Delivery',
    client: 'Swaadanusar',
    industry: 'Food & Beverage',
    projectType: 'E-commerce Website',
    description: 'Modern food delivery platform offering authentic Indian homemade cuisine with online ordering and seamless checkout experience',
    challenge: 'Swaadanusar needed a compelling digital platform to bring their authentic homemade Indian cuisine to customers online. The challenge was to create an appetizing, easy-to-navigate e-commerce website that could showcase their menu beautifully, handle online orders efficiently, integrate with payment gateways, and provide a smooth ordering experience across devices. They also needed features for menu management, delivery zone mapping, and order tracking.',
    solution: 'We developed a vibrant, mouth-watering food delivery website with rich food photography, intuitive menu navigation, and a streamlined checkout process. The solution includes a dynamic menu system with dietary filters (vegetarian, vegan, spicy levels), shopping cart with real-time pricing, integrated payment processing, order confirmation system, and delivery time estimation. We implemented responsive design optimized for mobile ordering, fast loading times for food images, and SEO optimization to attract local food lovers searching for authentic Indian cuisine.',
    results: [
      { metric: 'Online Orders', value: '280%' },
      { metric: 'Average Order Value', value: '+45%' },
      { metric: 'Mobile Orders', value: '72%' },
      { metric: 'Customer Retention', value: '68%' },
    ],
    testimonial: {
      quote: 'bob2build created a beautiful website that truly captures the essence of our homemade Indian food. The ordering process is incredibly smooth, and our customers love how easy it is to browse the menu and place orders. We have seen tremendous growth in online orders and customer satisfaction since launch.',
      author: 'Priya Sharma',
      position: 'Founder & Head Chef',
      company: 'Swaadanusar',
    },
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Stripe Payment', 'Google Maps API', 'Firebase', 'Image Optimization'],
    images: {
      hero: 'https://placehold.co/1200x750/ff6b35/ffffff?text=Swaadanusar',
      screenshots: [
        'https://placehold.co/800x500/ff6b35/ffffff?text=Menu+%26+Dishes',
        'https://placehold.co/800x500/ff6b35/ffffff?text=Online+Ordering',
        'https://placehold.co/800x500/ff6b35/ffffff?text=Easy+Checkout',
      ],
    },
    featured: true,
    liveUrl: 'https://swaadanusar.com/',
  },
  {
    id: '7',
    slug: 'doles-music',
    title: 'Doles Music - Premium Music Production & DJ Services',
    client: 'Doles Music',
    industry: 'Music & Entertainment',
    projectType: 'Portfolio Website',
    description: 'Professional music production and DJ services website showcasing original tracks, mixes, and event booking platform',
    challenge: 'Doles Music needed a dynamic online presence to showcase their music production portfolio, DJ services, and original tracks while providing an easy way for clients to book events and listen to demos. The challenge was to create an immersive, audio-focused website that would capture the energy of their brand, integrate music players seamlessly, handle event inquiries efficiently, and stand out in the competitive music industry while maintaining fast load times despite heavy media content.',
    solution: 'We developed a sleek, modern music portfolio website with integrated audio players, stunning visuals, and smooth animations. The solution features an embedded music player for tracks and mixes, event booking inquiry form, photo and video gallery showcasing past performances, responsive design optimized for mobile music listeners, and fast-loading media optimization. We implemented dynamic content sections for latest releases, upcoming events, and client testimonials, along with social media integration for Instagram, SoundCloud, and YouTube to maximize reach and engagement.',
    results: [
      { metric: 'Event Bookings', value: '+195%' },
      { metric: 'Music Plays', value: '50K+' },
      { metric: 'Social Engagement', value: '+240%' },
      { metric: 'Average Session', value: '6.8 min' },
    ],
    testimonial: {
      quote: 'bob2build created an incredible website that perfectly captures the vibe of my music brand. The audio integration is seamless, and I have seen a massive increase in event bookings and track plays. My clients love browsing through my mixes and booking me directly through the site.',
      author: 'Doles',
      position: 'Music Producer & DJ',
      company: 'Doles Music',
    },
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Audio Player Integration', 'SoundCloud API', 'Contact Form', 'Image Optimization'],
    images: {
      hero: 'https://placehold.co/1200x750/8b00ff/ffffff?text=Doles+Music',
      screenshots: [
        'https://placehold.co/800x500/8b00ff/ffffff?text=Music+Player',
        'https://placehold.co/800x500/8b00ff/ffffff?text=Event+Gallery',
        'https://placehold.co/800x500/8b00ff/ffffff?text=Booking+Form',
      ],
    },
    featured: true,
    liveUrl: 'https://www.dolesmusic.com/',
  },
  {
    id: '8',
    slug: 'roshna-horizon',
    title: 'Roshna Horizon - Premium Real Estate & Property Development',
    client: 'Roshna Horizon',
    industry: 'Real Estate',
    projectType: 'Corporate Website',
    description: 'Sophisticated real estate website showcasing luxury properties, development projects, and investment opportunities with virtual tours and interactive property listings',
    challenge: 'Roshna Horizon needed an elegant, high-end digital presence to showcase their premium real estate portfolio and attract high-net-worth investors and homebuyers. The challenge was to create a visually stunning website that could display properties with immersive photography, provide detailed project information, integrate virtual tours, handle property inquiries professionally, and convey trust and luxury while maintaining fast performance despite rich media content.',
    solution: 'We developed a premium real estate website with a sophisticated design emphasizing luxury and professionalism. The solution features high-resolution property galleries with zoom functionality, interactive floor plans and virtual tours, comprehensive project listings with location maps, investment calculator tools, and streamlined inquiry forms. We implemented advanced filtering for properties by type, location, and price range, mobile-responsive design for on-the-go property browsing, SEO optimization for local property searches, and integration with Google Maps for property locations.',
    results: [
      { metric: 'Property Inquiries', value: '+310%' },
      { metric: 'Virtual Tour Views', value: '15K+' },
      { metric: 'Average Time on Site', value: '7.5 min' },
      { metric: 'Lead Conversion', value: '+85%' },
    ],
    testimonial: {
      quote: 'bob2build delivered a stunning website that perfectly represents the luxury and quality of our properties. The virtual tours and property galleries are exceptional, and we have seen a tremendous increase in qualified leads and investor interest. The site has become our most effective sales tool.',
      author: 'Roshna Patel',
      position: 'Managing Director',
      company: 'Roshna Horizon',
    },
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Google Maps API', 'Virtual Tour Integration', 'Image Gallery', 'SEO Optimization', 'Contact Forms'],
    images: {
      hero: 'https://placehold.co/1200x750/1e40af/ffffff?text=Roshna+Horizon',
      screenshots: [
        'https://placehold.co/800x500/1e40af/ffffff?text=Property+Listings',
        'https://placehold.co/800x500/1e40af/ffffff?text=Virtual+Tours',
        'https://placehold.co/800x500/1e40af/ffffff?text=Project+Details',
      ],
    },
    featured: true,
    liveUrl: 'https://www.roshnahorizon.com/',
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((study) => study.featured);
}

// Hardcoded lists to prevent hydration errors
const INDUSTRIES = [
  'FinTech',
  'Food & Beverage',
  'Healthcare',
  'Logistics & Freight',
  'Media & Entertainment',
  'Music & Entertainment',
  'Professional Services',
  'Real Estate',
];

const PROJECT_TYPES = [
  'Corporate Website',
  'Custom Website Development',
  'E-commerce Website',
  'Hospital Website',
  'Portfolio Website',
  'Web Application',
];

export function getIndustries(): string[] {
  return INDUSTRIES;
}

export function getProjectTypes(): string[] {
  return PROJECT_TYPES;
}
