
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

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'future-procedural',
    title: 'The Future of Procedural Motion in UI Design',
    excerpt: 'Deep dive into how algorithmic movement is replacing traditional keyframing in modern web interfaces, and what it means for user experience.',
    date: 'March 24, 2024',
    category: 'Featured',
    readTime: '10 MIN READ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfNtmgBJi9_gqzY29C5LA92c6L7AXPhWeEilDfzefY8kaulvD_7tcmVhh9B_YJ0AeTVgCUStcOZw4rv1O7K4bRsZaplTvEdzNsRKLQCToMN-iUR7M6HeP-H8RfvHxqTvPCBPF2nV2xYoILZ01N9kRgb-ryRMtECRV5ASoyH3z-mFtYoYudMQZhRdujRhj3azdt_xyLLAjlIiQHzyzUFnNpmTqeNRh-ZAEKWiiCvGXJawXujundiEo-sat-Ub46ArPswNnWdtb7heMi',
    featured: true,
    author: {
      name: 'Sizan Smith Lamichhane',
      role: 'Principal Motion Designer',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLi0Edv-JxREvnqNZ2bySexDmMmXBqqYuQ1f8S6Wv8ebqzdixVLiuQ1jy_hM5DPg1F5aigLJYMRu3YMuu9IGmfJVEdwZ_CBgPfWc5IGG0_B-kaBrPGlnmuzavHlIlLLFygRPnGkWivB9Z87VuWnceLCOVq6rdFuoQqVrQPru3FTwINbYfLTdW1uM6i9Z5g-kHk5hezpFbo3EvobeD8IjiMuVHiYyKTUQUkZR6wfei4ilhyo_VDmIDC_uNFEVsbI7vZ6LJqv_zPCS6W'
    }
  },
  {
    id: 'loop-expressions',
    title: 'Mastering loopOut() expressions in After Effects',
    excerpt: 'A comprehensive guide for beginners on how to simplify your timeline using powerful loop expressions.',
    date: 'February 10, 2024',
    category: 'Design Guide',
    readTime: '5 MIN READ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9np-6NSjHhh_epPV42gWaqdk0wxNsGsPe0ZeXoPbEaIIoapzEVVke7N4z1pAOfxbAPtXdgLiqN10lzNypOAHlBmLK2Be_UDAmDB7qh5nsLoRm_0QADkbVgfZydYy6UVq2v61ir7QjPY3cEgBtTrPamMkmi3TJazAOsO8goSINWlNOaKYPCM9Mx_Wv23tFzmjZFCFXh-HBNdkwuoieelD4IFMUNYR6MwuWqvrzwayl-TJ9yqjvHQISVrRjm5nSPxyGgg3t5zI7qAWt',
    series: '2024 Series'
  },
  {
    id: 'training-ai-influencer',
    title: 'Project Leyla: Training an AI Influencer',
    excerpt: 'Exploring the ethical and technical challenges of creating a consistent virtual persona using Stable Diffusion.',
    date: 'January 15, 2024',
    category: 'AI Case Study',
    readTime: '8 MIN READ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6FUEP-ILRFigZhhCXW1BJuuXeX5GPmPmJSARYB6RQS81Tip6u3mUWWxR7L_GqQ7h2oy-5Q3Oii_CG2iafQ2yPsl9dkBEbuhmUKgWNSzQZGAUCBIOTmBgl5y8Prqr_wXBTGwgst-HUvOh2wCosHpY6ezrMoCXNwZGFjqRONhFLIS73NhbpwW4762rSv4_ItnFtF7IX8DWeWbIMaD1lfNdlhCz_lZruTekSOAD7dnrPIyRKa8hCZHnlihFS_xelubjWu7JyOA6z2gsg',
    series: 'Experimental Lab'
  },
  {
    id: 'kinetic-rulebook',
    title: 'Typography in Motion: The Kinetic Rulebook',
    excerpt: "Why legibility shouldn't be sacrificed for style, and how to balance both in high-energy sequences.",
    date: 'December 05, 2023',
    category: 'Motion Studies',
    readTime: '12 MIN READ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBczM5A9nrglUNTRMhPUcrQrQ67p76QRKzBeSKy_n5Do8ubMIkqhX3tUivHeBWZTAsMhU12Xx_6FQwsBV91OeWSw357g5NoCnNIvbcLOxucFVASbmVrPrY23wgHn6M9oMWopruttTrfJ1tWcfyV1vFVcgMmqj1LU9oyY3H0spycIegYMKRjlad7JZ9GdCqYFHledtZZeUADMsqB8ROnPMZY_d_pBnKjsWWwEsYh2HVtIXfrhyyxAoi3v9xrXS1a_0ZS5ks7GwlLEIC3',
    series: 'Theory'
  },
  {
    id: 'dark-mode-guide',
    title: 'Get Your Perfect Color: A Dark Mode Guide',
    excerpt: 'How to choose accent colors that pop without causing eye fatigue for your users on OLED displays.',
    date: 'November 20, 2023',
    category: 'Color Theory',
    readTime: '4 MIN READ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQ6xjs63Ah0r6368KYO_Dl434E4NCPc0faSJW2pO5j2lWlONFQARmyWzAd2VSCsYfgIPEvSrUJoilsK-7icgIl029j2dyMZQlM_r_iMNWtyuxrD3CJ7s9FrS8VD6F0YFXyU7t0bugF3NLBUyVpb7BUbW1ZzGrTWu9UwY1fXzXAXJym2tXR-9nbm0jrFYT7ja2As7NBkeP4kL1GdFjJciMaNGR546LqiD2WcNZgvYFrjNONg6xTY1PGXfGDVRHncOuS2LQmtbyB-ugH',
    series: 'Practical Tips'
  }
];
