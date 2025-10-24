export type WorkItem = {
  src: string
  video: string
  orientation: 'portrait' | 'landscape'
  title: { en: string; ar: string }
  category: { en: string; ar: string }
  year: string
  description?: { en: string; ar: string }
  workDescription: { en: string; ar: string }
  logoComponent: string
  location: { en: string; ar: string }
  companyDescription: { en: string; ar: string }
  keypoints: { en: string[]; ar: string[] }
  tagline: { en: string; ar: string }
  primaryButtonText?: { en: string; ar: string }
  primaryButtonUrl?: string
  secondaryButtonText?: { en: string; ar: string }
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
    title: { en: 'Roshni Technologies', ar: 'روشني تكنولوجيز' },
    category: { en: 'Branding', ar: 'العلامة التجارية' },
    year: '2025',
    description: {
      en: 'Digital agency website with UI/UX-first approach',
      ar: 'موقع وكالة رقمية مع نهج واجهة المستخدم/تجربة المستخدم أولاً',
    },
    workDescription: {
      en: `We designed and built the website from scratch with a <strong>UI/UX‑first</strong> approach, turning <strong>research</strong> and <strong>user flows</strong> into clear <strong>information architecture, wireframes</strong>, and <strong>high‑fidelity prototypes</strong>. The final build is fast, responsive, and accessible, with streamlined navigation, concise messaging, and prominent calls‑to‑action that guide users to inquire with minimal friction. Performance and SEO are engineered in through lightweight components, optimized media, semantic HTML, and structured metadata, while adaptive layouts and touch‑friendly interactions ensure a great mobile experience. A scalable CMS and modular design system make content updates effortless and keep the brand consistent as the site grows.`,
      ar: `قمنا بتصميم وبناء الموقع من الصفر بنهج <strong>واجهة المستخدم/تجربة المستخدم أولاً</strong>، وتحويل <strong>البحث</strong> و <strong>تدفقات المستخدم</strong> إلى <strong>بنية معلومات واضحة، وإطارات سلكية</strong>، و <strong>نماذج عالية الدقة</strong>. البناء النهائي سريع ومتجاوب ويمكن الوصول إليه، مع تنقل مبسط ورسائل موجزة ودعوات بارزة للعمل توجه المستخدمين للاستفسار بأقل قدر من الاحتكاك. يتم هندسة الأداء وتحسين محركات البحث من خلال مكونات خفيفة الوزن ووسائط محسنة وHTML دلالي وبيانات وصفية منظمة، بينما تضمن التخطيطات التكيفية والتفاعلات الملائمة للمس تجربة محمول رائعة. نظام إدارة المحتوى القابل للتطوير ونظام التصميم المعياري يجعلان تحديثات المحتوى سهلة ويحافظان على اتساق العلامة التجارية مع نمو الموقع.`,
    },
    logoComponent: 'roshni',
    location: { en: 'Abu Dhabi, United Arab Emirates', ar: 'أبو ظبي، الإمارات العربية المتحدة' },
    companyDescription: {
      en: `Digital agency based in Abu Dhabi, delivering websites, e‑commerce, apps, and creative services for businesses across the UAE. They focus on user‑centric design, fast and responsive builds, and measurable growth through performance, accessibility, and SEO‑driven execution.`,
      ar: `وكالة رقمية مقرها أبو ظبي، تقدم مواقع الويب والتجارة الإلكترونية والتطبيقات والخدمات الإبداعية للشركات في جميع أنحاء الإمارات العربية المتحدة. يركزون على التصميم الذي يركز على المستخدم والبناء السريع والمتجاوب والنمو القابل للقياس من خلال الأداء وإمكانية الوصول والتنفيذ المدفوع بتحسين محركات البحث.`,
    },
    keypoints: {
      en: ['Webdesign', 'User Interface Design', 'User Experience Optimization', 'Svelte'],
      ar: ['تصميم الويب', 'تصميم واجهة المستخدم', 'تحسين تجربة المستخدم', 'Svelte'],
    },
    tagline: {
      en: 'We minted the design, shaped the UI and UX, and built the site with clean, production‑ready code',
      ar: 'صممنا التصميم وشكلنا واجهة المستخدم وتجربة المستخدم وبنينا الموقع بكود نظيف وجاهز للإنتاج',
    },
    primaryButtonText: {
      en: 'Case Study on Bēhance',
      ar: 'دراسة الحالة على Bēhance',
    },
    primaryButtonUrl: 'x',
    secondaryButtonText: { en: 'Visit the website', ar: 'زيارة الموقع' },
    secondaryButtonUrl: 'x',
  },
  {
    src: '/assets/images/works/02.jpg',
    video: '/assets/videos/works/01.webm',
    orientation: 'landscape',
    title: { en: 'Project Title 2', ar: 'عنوان المشروع 2' },
    category: { en: 'Web Design', ar: 'تصميم الويب' },
    year: '2024',
    workDescription: {
      en: 'Project description with <strong>highlights</strong>',
      ar: 'وصف المشروع مع <strong>النقاط البارزة</strong>',
    },
    logoComponent: 'roshni',
    location: { en: 'Location', ar: 'الموقع' },
    companyDescription: { en: 'Company description', ar: 'وصف الشركة' },
    keypoints: { en: ['Design', 'Development'], ar: ['التصميم', 'التطوير'] },
    tagline: { en: 'Project tagline', ar: 'شعار المشروع' },
    primaryButtonText: { en: 'Primary Action', ar: 'الإجراء الأساسي' },
    primaryButtonUrl: '',
    secondaryButtonText: { en: 'Secondary Action', ar: 'الإجراء الثانوي' },
    secondaryButtonUrl: '',
  },
  {
    src: '/assets/images/works/03.jpg',
    video: '/assets/videos/works/01.webm',
    orientation: 'portrait',
    title: { en: 'Project Title 3', ar: 'عنوان المشروع 3' },
    category: { en: 'Development', ar: 'التطوير' },
    year: '2023',
    workDescription: {
      en: 'Project description with <strong>highlights</strong>',
      ar: 'وصف المشروع مع <strong>النقاط البارزة</strong>',
    },
    logoComponent: 'roshni',
    location: { en: 'Location', ar: 'الموقع' },
    companyDescription: { en: 'Company description', ar: 'وصف الشركة' },
    keypoints: { en: ['Design', 'Development'], ar: ['التصميم', 'التطوير'] },
    tagline: { en: 'Project tagline', ar: 'شعار المشروع' },
    primaryButtonText: { en: 'Primary Action', ar: 'الإجراء الأساسي' },
    primaryButtonUrl: '',
    secondaryButtonText: { en: 'Secondary Action', ar: 'الإجراء الثانوي' },
    secondaryButtonUrl: '',
  },
  {
    src: '/assets/images/works/04.jpg',
    video: '/assets/videos/works/01.webm',
    orientation: 'portrait',
    title: { en: 'Project Title 4', ar: 'عنوان المشروع 4' },
    category: { en: 'Branding', ar: 'العلامة التجارية' },
    year: '2024',
    workDescription: {
      en: 'Project description with <strong>highlights</strong>',
      ar: 'وصف المشروع مع <strong>النقاط البارزة</strong>',
    },
    logoComponent: 'roshni',
    location: { en: 'Location', ar: 'الموقع' },
    companyDescription: { en: 'Company description', ar: 'وصف الشركة' },
    keypoints: { en: ['Design', 'Development'], ar: ['التصميم', 'التطوير'] },
    tagline: { en: 'Project tagline', ar: 'شعار المشروع' },
    primaryButtonText: { en: 'Primary Action', ar: 'الإجراء الأساسي' },
    primaryButtonUrl: '',
    secondaryButtonText: { en: 'Secondary Action', ar: 'الإجراء الثانوي' },
    secondaryButtonUrl: '',
  },
  {
    src: '/assets/images/works/05.jpg',
    video: '/assets/videos/works/01.webm',
    orientation: 'landscape',
    title: { en: 'Project Title 5', ar: 'عنوان المشروع 5' },
    category: { en: 'Marketing', ar: 'التسويق' },
    year: '2023',
    workDescription: {
      en: 'Project description with <strong>highlights</strong>',
      ar: 'وصف المشروع مع <strong>النقاط البارزة</strong>',
    },
    logoComponent: 'roshni',
    location: { en: 'Location', ar: 'الموقع' },
    companyDescription: { en: 'Company description', ar: 'وصف الشركة' },
    keypoints: { en: ['Design', 'Development'], ar: ['التصميم', 'التطوير'] },
    tagline: { en: 'Project tagline', ar: 'شعار المشروع' },
    primaryButtonText: { en: 'Primary Action', ar: 'الإجراء الأساسي' },
    primaryButtonUrl: '',
    secondaryButtonText: { en: 'Secondary Action', ar: 'الإجراء الثانوي' },
    secondaryButtonUrl: '',
  },
  {
    src: '/assets/images/works/06.jpg',
    video: '/assets/videos/works/01.webm',
    orientation: 'portrait',
    title: { en: 'Project Title 6', ar: 'عنوان المشروع 6' },
    category: { en: 'Development', ar: 'التطوير' },
    year: '2024',
    workDescription: {
      en: 'Project description with <strong>highlights</strong>',
      ar: 'وصف المشروع مع <strong>النقاط البارزة</strong>',
    },
    logoComponent: 'roshni',
    location: { en: 'Location', ar: 'الموقع' },
    companyDescription: { en: 'Company description', ar: 'وصف الشركة' },
    keypoints: { en: ['Design', 'Development'], ar: ['التصميم', 'التطوير'] },
    tagline: { en: 'Project tagline', ar: 'شعار المشروع' },
    primaryButtonText: { en: 'Primary Action', ar: 'الإجراء الأساسي' },
    primaryButtonUrl: '',
    secondaryButtonText: { en: 'Secondary Action', ar: 'الإجراء الثانوي' },
    secondaryButtonUrl: '',
  },
  {
    src: '/assets/images/works/07.jpg',
    video: '/assets/videos/works/01.webm',
    orientation: 'portrait',
    title: { en: 'Project Title 7', ar: 'عنوان المشروع 7' },
    category: { en: 'Branding', ar: 'العلامة التجارية' },
    year: '2023',
    workDescription: {
      en: 'Project description with <strong>highlights</strong>',
      ar: 'وصف المشروع مع <strong>النقاط البارزة</strong>',
    },
    logoComponent: 'roshni',
    location: { en: 'Location', ar: 'الموقع' },
    companyDescription: { en: 'Company description', ar: 'وصف الشركة' },
    keypoints: { en: ['Design', 'Development'], ar: ['التصميم', 'التطوير'] },
    tagline: { en: 'Project tagline', ar: 'شعار المشروع' },
    primaryButtonText: { en: 'Primary Action', ar: 'الإجراء الأساسي' },
    primaryButtonUrl: '',
    secondaryButtonText: { en: 'Secondary Action', ar: 'الإجراء الثانوي' },
    secondaryButtonUrl: '',
  },
  {
    src: '/assets/images/works/08.jpg',
    video: '/assets/videos/works/01.webm',
    orientation: 'landscape',
    title: { en: 'Project Title 8', ar: 'عنوان المشروع 8' },
    category: { en: 'Web Design', ar: 'تصميم الويب' },
    year: '2024',
    workDescription: {
      en: 'Project description with <strong>highlights</strong>',
      ar: 'وصف المشروع مع <strong>النقاط البارزة</strong>',
    },
    logoComponent: 'roshni',
    location: { en: 'Location', ar: 'الموقع' },
    companyDescription: { en: 'Company description', ar: 'وصف الشركة' },
    keypoints: { en: ['Design', 'Development'], ar: ['التصميم', 'التطوير'] },
    tagline: { en: 'Project tagline', ar: 'شعار المشروع' },
    primaryButtonText: { en: 'Primary Action', ar: 'الإجراء الأساسي' },
    primaryButtonUrl: '',
    secondaryButtonText: { en: 'Secondary Action', ar: 'الإجراء الثانوي' },
    secondaryButtonUrl: '',
  },
  {
    src: '/assets/images/works/09.jpg',
    video: '/assets/videos/works/01.webm',
    orientation: 'portrait',
    title: { en: 'Project Title 9', ar: 'عنوان المشروع 9' },
    category: { en: 'Marketing', ar: 'التسويق' },
    year: '2023',
    workDescription: {
      en: 'Project description with <strong>highlights</strong>',
      ar: 'وصف المشروع مع <strong>النقاط البارزة</strong>',
    },
    logoComponent: 'roshni',
    location: { en: 'Location', ar: 'الموقع' },
    companyDescription: { en: 'Company description', ar: 'وصف الشركة' },
    keypoints: { en: ['Design', 'Development'], ar: ['التصميم', 'التطوير'] },
    tagline: { en: 'Project tagline', ar: 'شعار المشروع' },
    primaryButtonText: { en: 'Primary Action', ar: 'الإجراء الأساسي' },
    primaryButtonUrl: '',
    secondaryButtonText: { en: 'Secondary Action', ar: 'الإجراء الثانوي' },
    secondaryButtonUrl: '',
  },
  {
    src: '/assets/images/works/10.jpg',
    video: '/assets/videos/works/01.webm',
    orientation: 'portrait',
    title: { en: 'Project Title 10', ar: 'عنوان المشروع 10' },
    category: { en: 'Development', ar: 'التطوير' },
    year: '2024',
    workDescription: {
      en: 'Project description with <strong>highlights</strong>',
      ar: 'وصف المشروع مع <strong>النقاط البارزة</strong>',
    },
    logoComponent: 'roshni',
    location: { en: 'Location', ar: 'الموقع' },
    companyDescription: { en: 'Company description', ar: 'وصف الشركة' },
    keypoints: { en: ['Design', 'Development'], ar: ['التصميم', 'التطوير'] },
    tagline: { en: 'Project tagline', ar: 'شعار المشروع' },
    primaryButtonText: { en: 'Primary Action', ar: 'الإجراء الأساسي' },
    primaryButtonUrl: '',
    secondaryButtonText: { en: 'Secondary Action', ar: 'الإجراء الثانوي' },
    secondaryButtonUrl: '',
  },
]
