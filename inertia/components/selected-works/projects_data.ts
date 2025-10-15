export interface Project {
  id: number
  name: string
  logo: string
  backgroundImage: string
  company: string
  location: string
  year: number
  description: string
  technologies: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'DZRPT',
    logo: '/assets/images/dzrpt.svg',
    backgroundImage: '/assets/images/dzrpt.jpg',
    company: 'Apparel Company',
    location: 'Barcelona, Spain',
    year: 2024,
    description:
      "DZRPT is an apparel brand that draws its identity from a fusion of cultural roots and a desire to disrupt. The name itself merges 'Djazair' with a mindset of innovation, creating a bold statement that honors heritage while challenging convention. Their ethos is built on the principles of openness, movement, and constant reinvention, guided by a spirit that seeks to Defy, Shatter, Revolt, Rewire, and Reinvent.",
    technologies: ['React', 'Firebase', 'Stripe', 'Framer Motion'],
  },
  {
    id: 2,
    name: 'Project Two',
    logo: '/assets/images/roshni.svg',
    backgroundImage: '/assets/images/roshni.png',
    company: 'Tech Startup',
    location: 'Paris, France',
    year: 2024,
    description:
      'A revolutionary platform that transforms the way teams collaborate and communicate. Built with modern technologies and a focus on user experience, this project showcases our expertise in creating scalable and performant web applications.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
  },
  {
    id: 3,
    name: 'Project Three',
    logo: '/assets/images/mynte.svg',
    backgroundImage: '/assets/images/dzrpt.jpg',
    company: 'E-commerce Platform',
    location: 'London, UK',
    year: 2023,
    description:
      'A comprehensive e-commerce solution that provides seamless shopping experiences across devices. This project demonstrates our capability to handle complex business logic and integrate multiple payment systems.',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'AWS'],
  },
  {
    id: 4,
    name: 'Project Four',
    logo: '/assets/images/terra.svg',
    backgroundImage: '/assets/images/roshni.png',
    company: 'Creative Agency',
    location: 'Berlin, Germany',
    year: 2023,
    description:
      'An innovative portfolio platform that showcases creative work through interactive experiences. This project highlights our design-first approach and attention to detail in creating memorable digital experiences.',
    technologies: ['Three.js', 'React', 'GSAP', 'WebGL'],
  },
]
