export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  expertise: string[];
  image: string;
  linkedin?: string;
  twitter?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Daksh Bhatia',
    position: 'CEO & Founder',
    bio: 'Visionary leader with 5+ years of experience in web development and digital strategy. Daksh founded Apex Web Studios with a mission to help startups and growing businesses succeed online. He specializes in architecting scalable web solutions and understanding the unique challenges faced by tech-savvy entrepreneurs.',
    expertise: [
      'Web Architecture',
      'Technical Strategy',
      'Full-Stack Development',
      'SaaS Platforms',
      'Product Development',
      'Team Leadership',
    ],
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=DB',
    linkedin: '#',
    twitter: '#',
  },
  {
    id: '2',
    name: 'Shantanu Kumar',
    position: 'Head of Business Development',
    bio: 'Expert in understanding client needs and translating them into effective web solutions. With a background in working with non-technical business owners, Shantanu excels at bridging the gap between technology and business goals. He ensures every project delivers measurable results and ROI for our clients.',
    expertise: [
      'Client Relations',
      'Business Strategy',
      'Project Management',
      'Solution Architecture',
      'ROI Optimization',
      'Stakeholder Communication',
    ],
    image: 'https://placehold.co/400x400/7c3aed/ffffff?text=SK',
    linkedin: '#',
    twitter: '#',
  },
  {
    id: '3',
    name: 'Eklavaya Singh Shekhawat',
    position: 'Marketing Manager',
    bio: 'Data-driven marketing professional focused on creating websites that don\'t just look good, but convert visitors into customers. Eklavaya brings deep expertise in digital marketing, SEO, and conversion optimization to ensure every website we build drives real business growth and measurable results.',
    expertise: [
      'Digital Marketing',
      'SEO & SEM',
      'Conversion Optimization',
      'Analytics & Tracking',
      'Content Strategy',
      'Growth Marketing',
    ],
    image: 'https://placehold.co/400x400/059669/ffffff?text=ES',
    linkedin: '#',
    twitter: '#',
  },
];

export const companyValues = [
  {
    id: '1',
    title: 'Results-Driven',
    description: 'We measure success by your success. Every project is designed to deliver measurable business results and ROI.',
    icon: '📈',
  },
  {
    id: '2',
    title: 'Transparent Communication',
    description: 'No jargon, no surprises. We keep you informed every step of the way with clear, honest communication.',
    icon: '💬',
  },
  {
    id: '3',
    title: 'Technical Excellence',
    description: 'We use modern, proven technologies and follow best practices to build websites that are fast, secure, and scalable.',
    icon: '⚡',
  },
  {
    id: '4',
    title: 'Long-Term Partnership',
    description: 'We\'re here for the long haul. Your success is our success, and we\'re committed to supporting your growth.',
    icon: '🤝',
  },
];

export const processSteps = [
  {
    id: '1',
    title: 'Discovery & Strategy',
    description: 'We start by understanding your business, goals, target audience, and competitive landscape. This ensures we build the right solution for your specific needs.',
    duration: '1-2 weeks',
  },
  {
    id: '2',
    title: 'Planning & Architecture',
    description: 'We create detailed wireframes, site maps, and technical specifications. You\'ll see exactly what we\'re building before we write a single line of code.',
    duration: '1-2 weeks',
  },
  {
    id: '3',
    title: 'Design',
    description: 'Our designers create beautiful, user-friendly interfaces that align with your brand and engage your audience. We iterate based on your feedback.',
    duration: '2-3 weeks',
  },
  {
    id: '4',
    title: 'Development',
    description: 'Our developers bring the designs to life with clean, efficient code. We build with modern technologies and best practices for performance and security.',
    duration: '4-8 weeks',
  },
  {
    id: '5',
    title: 'Testing & Quality Assurance',
    description: 'Rigorous testing across devices, browsers, and scenarios ensures everything works flawlessly before launch.',
    duration: '1-2 weeks',
  },
  {
    id: '6',
    title: 'Launch & Support',
    description: 'We handle the technical details of launching your site and provide training and ongoing support to ensure your continued success.',
    duration: 'Ongoing',
  },
];
