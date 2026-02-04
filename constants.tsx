
import { Project, BlogPost } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'loop-out',
    title: 'Mastering loopOut()',
    category: 'After Effects Tutorial',
    year: '2024',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9EeM8UCD5qWRCGB4qjxfZMqNApJEihy-BQ8NV6hP_lBq0hCB3kj5RSdUMHTAiBULyfJwTdrPTCvMeIW-NNGvEzSrBIgAh3lcYBa040tpdxmieU-KMLPJ8OWpOtQYneo0wT1jg-e6wOddYV3UYfy94YbEeicOvfUYNnziQENY2Jf-o96kSSdzFLeNBasnWsn2RT_qnK-RGE-W67lwKpg-sZ08RM7_iKDzxUXPw8IDL50XUPr1VbIxUuXnf0cx7b663AudIdtvS55Oo',
    icon: 'terminal',
    accentText: 'essentials.expression = 100;'
  },
  {
    id: 'project-leyla',
    title: 'Project Leyla: AI Influencer',
    category: 'AI Case Study',
    year: '2024',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjjlIMISpnhOluEUk_0ktbkinaky6bMXreoeG99CXa6W6O8ixkQw6B81lfmmSB7FijCUIc7pB43kzcgdeNB_pIkb3u_ci9Mxc5bGmHYem6PVP8SRfNE0Zn575C6U89Du6ldYDTGzkZwhX0SpTPFirMhJjcQHEbsAeg_famBXKweJ-bZk9UdjUT5oLFQS0pHou6vZH8CRFxJetEKNbZip_0rcrhkR-S6BSNivgO24Ny5eBmg1Zn1T-cD1JHqlqQHPx7I_oCDzF4uI1i',
    icon: 'grid_view',
    accentText: 'Inventory Made Visual'
  },
  {
    id: 'typo-motion',
    title: 'Typography in Motion',
    category: 'Design Guide',
    year: '2024',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsoU539WkhQYEaKhv4vr_AacL7qgBcy3bz4NQhyXY1LqZuscFv9hjpM8Q96BMOGS0YRrl_lzRWOqbpMKUyiLpitznmW-EQcxNS6sF4kcsLmr-nM3XQ09zrqIhEQFEcfwvZaVQ-MDFJZJK0MTjLzTEUYaZ1Dn_FtODfYmfbk2hI4RA3R-Fcx93NQRw-5NEV7vs2R8eWm4ZKON7cf7eOcfDemg75LNJ0myaKUKdf-qPuS2ywI1QJNkxK9oNy4GOIHrYaWmWn8HcWm_Z0',
    icon: 'palette',
    accentText: 'Get Your Perfect Color'
  }
];

import { BLOG_CONTENT } from './data/blog-content';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'volume-1-imperfection',
    title: 'The Imperfection Paradox: Why Flaws Are the New Luxury',
    excerpt: 'The most significant visual trend of 2026 is the deliberate rejection of glossy, over-processed surfaces in favor of "Authenticity through Imperfection".',
    date: 'February 3, 2026',
    category: 'Design Trends',
    readTime: '6 MIN READ',
    image: '/images/blog/volume-1.png',
    views: 12543,
    featured: true,
    author: {
      name: 'Sizan Smith Lamichhane',
      role: 'Principal Motion Designer',
      avatar: '/images/sizan_profile.jpg'
    },
    content: BLOG_CONTENT['volume-1-imperfection']
  },
  {
    id: 'volume-2-realtime',
    title: 'The Real-Time Renaissance: Creating at the Speed of Thought',
    excerpt: 'The barrier between "creating" and "capturing" has collapsed as tools like Unreal Engine challenge the dominance of After Effects.',
    date: 'February 3, 2026',
    category: 'Technology',
    readTime: '5 MIN READ',
    image: '/images/blog/volume-2.png',
    views: 8932,
    featured: false,
    content: BLOG_CONTENT['volume-2-realtime']
  },
  {
    id: 'volume-3-ai-infrastructure',
    title: 'The Synthetic Foundation: AI as Creative Infrastructure',
    excerpt: 'In 2026, artificial intelligence is no longer an external tool but the underlying infrastructure of the creative pipeline.',
    date: 'February 3, 2026',
    category: 'AI',
    readTime: '7 MIN READ',
    image: '/images/blog/volume-3.png',
    views: 15678,
    featured: false,
    content: BLOG_CONTENT['volume-3-ai-infrastructure']
  },
  {
    id: 'volume-4-ergonomics',
    title: 'The Ergonomics of Attention: Designing for the 9:16 World',
    excerpt: 'As vertical video cements its status as the "Discovery King," the ergonomics of how users consume content have reshaped editing priorities.',
    date: 'February 3, 2026',
    category: 'UX/UI',
    readTime: '4 MIN READ',
    image: '/images/blog/volume-4.png',
    views: 6543,
    featured: false,
    content: BLOG_CONTENT['volume-4-ergonomics']
  },
  {
    id: 'volume-5-director',
    title: 'The Creative Conductor: Orchestrating AI Agents',
    excerpt: 'The role of the creative professional is shifting from execution to orchestration as technical barriers vanish.',
    date: 'February 3, 2026',
    category: 'Career',
    readTime: '5 MIN READ',
    image: '/images/blog/volume-5.png',
    views: 9876,
    featured: false,
    content: BLOG_CONTENT['volume-5-director']
  },
  {
    id: 'volume-6-context-engineering',
    title: 'Context Engineering: The Orchestrator\'s Edge',
    excerpt: 'To drive traffic and dominate Generative Engine Optimization (GEO), you need to stop writing prompts and start engineering environments.',
    date: 'February 4, 2026',
    category: 'AI Strategy',
    readTime: '8 MIN READ',
    image: '/images/blog/volume-6.png',
    views: 18432,
    featured: true,
    content: BLOG_CONTENT['volume-6-context-engineering']
  }
];
