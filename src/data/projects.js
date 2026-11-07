import { Clapperboard, ClipboardList, Cpu, ShoppingBag } from 'lucide-react';

// Edit this file to manage portfolio projects.
// github / liveDemo: set to a real URL, or null to hide that button.
// Never add a liveDemo URL unless the demo is actually deployed and reachable.

export const projects = [
  {
    id: 'cineverse',
    icon: Clapperboard,
    title: 'CineVerse',
    category: 'Web Application',
    description: 'A movie discovery and browsing application with dynamic movie details and navigation.',
    details:
      'CineVerse lets visitors browse, search, and explore movies with rich detail pages. Movie data is fetched from the TMDB API, with client-side routing between listings and detail views and centralized state management with Redux Toolkit.',
    highlights: [
      'Dynamic movie detail pages driven by route parameters',
      'Data fetching from the TMDB REST API using Axios',
      'Global state management with Redux Toolkit',
    ],
    technologies: ['React', 'Vite', 'React Router', 'Redux Toolkit', 'Axios', 'TMDB API'],
    github: null,
    liveDemo: null,
    visual: { from: '#672EFF', to: '#17122E', accent: '#00D9FF' },
  },
  {
    id: 'trendystation',
    icon: ShoppingBag,
    title: 'TrendyStation',
    category: 'E-Commerce',
    description: 'A responsive e-commerce frontend with customer and admin interfaces.',
    details:
      'TrendyStation is a responsive storefront with separate customer and admin experiences. Customers can browse and shop, while the admin side covers product management, designed to work cleanly across phones, tablets, and desktops.',
    highlights: [
      'Separate customer and admin interfaces',
      'Responsive product browsing and layouts',
      'Built with plain JavaScript and modular CSS',
    ],
    technologies: ['React', 'JavaScript', 'CSS'],
    github: null,
    liveDemo: null,
    visual: { from: '#0B3B4F', to: '#080B16', accent: '#00D9FF' },
  },
  {
    id: 'field-service',
    icon: ClipboardList,
    title: 'Enterprise Field Service Management',
    category: 'Enterprise Application',
    description:
      'Enterprise application experience covering service requests, technician assignments, inventory tracking, and work orders.',
    details:
      'An enterprise field service platform where teams manage service requests, assign technicians, track inventory, and monitor work orders. Includes sorting, filtering, pagination, and responsive dashboards for operational visibility.',
    highlights: [
      'Service request and technician assignment interfaces',
      'Inventory tracking and work-order monitoring',
      'Sorting, filtering, pagination, and responsive dashboards',
    ],
    technologies: ['React', 'JavaScript', 'Axios', 'REST APIs'],
    github: null,
    liveDemo: null,
    visual: { from: '#1A2440', to: '#080B16', accent: '#A8B5D1' },
  },
  {
    id: 'portfolio',
    icon: Cpu,
    title: 'Personal Portfolio',
    category: 'Immersive Experience',
    description: 'An immersive 3D anime-inspired developer portfolio.',
    details:
      'NEXUS, the portfolio you are viewing now. A continuous 3D scene built with Three.js and React Three Fiber, scroll-driven camera movement with GSAP, and interface animations powered by Framer Motion.',
    highlights: [
      'Procedural 3D city rendered with Three.js',
      'Scroll-driven camera with GSAP ScrollTrigger',
      'Reduced-motion and low-power fallbacks',
    ],
    technologies: ['React', 'Three.js', 'GSAP', 'Tailwind CSS'],
    github: null,
    liveDemo: null,
    visual: { from: '#672EFF', to: '#080B16', accent: '#00D9FF' },
  },
];
