export type WorkItem = {
  src: string
  video: string
  orientation: 'portrait' | 'landscape'
  title: string
  category: string
  year: string
  description?: string
  workDescription: string
  logoComponent: string
  location: string
  companyDescription: string
  keypoints: string[]
  tagline: string
  primaryButtonText?: string
  primaryButtonUrl?: string
  secondaryButtonText?: string
  secondaryButtonUrl?: string
}

// Grid configuration
export const GRID_COLS = 4
export const GRID_ROWS = 3
export const PORTRAIT_WIDTH = 3
export const PORTRAIT_HEIGHT = 4
export const LANDSCAPE_HEIGHT = PORTRAIT_HEIGHT / 2 // 2
export const GAP = 0.5
export const TOTAL_WORKS = 10

export const worksData: WorkItem[] = [
  {
    src: '/assets/images/works/01.jpg',
    video: '/assets/videos/works/01.webm',
    orientation: 'portrait',
    title: 'Roshni Technologies',
    category: 'Branding',
    year: '2025',
    description: 'Digital agency website with UI/UX-first approach',
    workDescription: `We designed and built the website from scratch with a <strong>UI/UX‑first</strong> approach, turning <strong>research</strong> and <strong>user flows</strong> into clear <strong>information architecture, wireframes</strong>, and <strong>high‑fidelity prototypes</strong>. The final build is fast, responsive, and accessible, with streamlined navigation, concise messaging, and prominent calls‑to‑action that guide users to inquire with minimal friction. Performance and SEO are engineered in through lightweight components, optimized media, semantic HTML, and structured metadata, while adaptive layouts and touch‑friendly interactions ensure a great mobile experience. A scalable CMS and modular design system make content updates effortless and keep the brand consistent as the site grows.`,
    logoComponent: 'roshni',
    location: 'Abu Dhabi, United Arab Emirates',
    companyDescription: `Digital agency based in Abu Dhabi, delivering websites, e‑commerce, apps, and creative services for businesses across the UAE. They focus on user‑centric design, fast and responsive builds, and measurable growth through performance, accessibility, and SEO‑driven execution.`,
    keypoints: ['Webdesign', 'User Interface Design', 'User Experience Optimization', 'Svelte'],
    tagline:
      'We minted the design, shaped the UI and UX, and built the site with clean, production‑ready code',
    primaryButtonText: 'Case Study on Bēhance',
    primaryButtonUrl: 'x',
    secondaryButtonText: 'Visit the website',
    secondaryButtonUrl: 'x',
  },
  {
    src: '/assets/images/works/02.jpg',
    video: '/assets/videos/works/01.webm',
    orientation: 'landscape',
    title: 'Project Title 2',
    category: 'Web Design',
    year: '2024',
    workDescription: 'Project description with <strong>highlights</strong>',
    logoComponent: 'roshni',
    location: 'Location',
    companyDescription: 'Company description',
    keypoints: ['Design', 'Development'],
    tagline: 'Project tagline',
    primaryButtonText: 'Primary Action',
    primaryButtonUrl: '',
    secondaryButtonText: 'Secondary Action',
    secondaryButtonUrl: '',
  },
  {
    src: '/assets/images/works/03.jpg',
    video: '/assets/videos/works/01.webm',
    orientation: 'portrait',
    title: 'Project Title 3',
    category: 'Development',
    year: '2023',
    workDescription: 'Project description with <strong>highlights</strong>',
    logoComponent: 'roshni',
    location: 'Location',
    companyDescription: 'Company description',
    keypoints: ['Design', 'Development'],
    tagline: 'Project tagline',
    primaryButtonText: 'Primary Action',
    primaryButtonUrl: '',
    secondaryButtonText: 'Secondary Action',
    secondaryButtonUrl: '',
  },
  {
    src: '/assets/images/works/04.jpg',
    video: '/assets/videos/works/01.webm',
    orientation: 'portrait',
    title: 'Project Title 4',
    category: 'Branding',
    year: '2024',
    workDescription: 'Project description with <strong>highlights</strong>',
    logoComponent: 'roshni',
    location: 'Location',
    companyDescription: 'Company description',
    keypoints: ['Design', 'Development'],
    tagline: 'Project tagline',
    primaryButtonText: 'Primary Action',
    primaryButtonUrl: '',
    secondaryButtonText: 'Secondary Action',
    secondaryButtonUrl: '',
  },
  {
    src: '/assets/images/works/05.jpg',
    video: '/assets/videos/works/01.webm',
    orientation: 'landscape',
    title: 'Project Title 5',
    category: 'Marketing',
    year: '2023',
    workDescription: 'Project description with <strong>highlights</strong>',
    logoComponent: 'roshni',
    location: 'Location',
    companyDescription: 'Company description',
    keypoints: ['Design', 'Development'],
    tagline: 'Project tagline',
    primaryButtonText: 'Primary Action',
    primaryButtonUrl: '',
    secondaryButtonText: 'Secondary Action',
    secondaryButtonUrl: '',
  },
  {
    src: '/assets/images/works/06.jpg',
    video: '/assets/videos/works/01.webm',
    orientation: 'portrait',
    title: 'Project Title 6',
    category: 'Development',
    year: '2024',
    workDescription: 'Project description with <strong>highlights</strong>',
    logoComponent: 'roshni',
    location: 'Location',
    companyDescription: 'Company description',
    keypoints: ['Design', 'Development'],
    tagline: 'Project tagline',
    primaryButtonText: 'Primary Action',
    primaryButtonUrl: '',
    secondaryButtonText: 'Secondary Action',
    secondaryButtonUrl: '',
  },
  {
    src: '/assets/images/works/07.jpg',
    video: '/assets/videos/works/01.webm',
    orientation: 'portrait',
    title: 'Project Title 7',
    category: 'Branding',
    year: '2023',
    workDescription: 'Project description with <strong>highlights</strong>',
    logoComponent: 'roshni',
    location: 'Location',
    companyDescription: 'Company description',
    keypoints: ['Design', 'Development'],
    tagline: 'Project tagline',
    primaryButtonText: 'Primary Action',
    primaryButtonUrl: '',
    secondaryButtonText: 'Secondary Action',
    secondaryButtonUrl: '',
  },
  {
    src: '/assets/images/works/08.jpg',
    video: '/assets/videos/works/01.webm',
    orientation: 'landscape',
    title: 'Project Title 8',
    category: 'Web Design',
    year: '2024',
    workDescription: 'Project description with <strong>highlights</strong>',
    logoComponent: 'roshni',
    location: 'Location',
    companyDescription: 'Company description',
    keypoints: ['Design', 'Development'],
    tagline: 'Project tagline',
    primaryButtonText: 'Primary Action',
    primaryButtonUrl: '',
    secondaryButtonText: 'Secondary Action',
    secondaryButtonUrl: '',
  },
  {
    src: '/assets/images/works/09.jpg',
    video: '/assets/videos/works/01.webm',
    orientation: 'portrait',
    title: 'Project Title 9',
    category: 'Marketing',
    year: '2023',
    workDescription: 'Project description with <strong>highlights</strong>',
    logoComponent: 'roshni',
    location: 'Location',
    companyDescription: 'Company description',
    keypoints: ['Design', 'Development'],
    tagline: 'Project tagline',
    primaryButtonText: 'Primary Action',
    primaryButtonUrl: '',
    secondaryButtonText: 'Secondary Action',
    secondaryButtonUrl: '',
  },
  {
    src: '/assets/images/works/10.jpg',
    video: '/assets/videos/works/01.webm',
    orientation: 'portrait',
    title: 'Project Title 10',
    category: 'Development',
    year: '2024',
    workDescription: 'Project description with <strong>highlights</strong>',
    logoComponent: 'roshni',
    location: 'Location',
    companyDescription: 'Company description',
    keypoints: ['Design', 'Development'],
    tagline: 'Project tagline',
    primaryButtonText: 'Primary Action',
    primaryButtonUrl: '',
    secondaryButtonText: 'Secondary Action',
    secondaryButtonUrl: '',
  },
]
