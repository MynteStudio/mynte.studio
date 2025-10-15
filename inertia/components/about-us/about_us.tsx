import { useState, useEffect } from 'react'
import { SectionTitle } from '../section_title'
import { AgencyInfo } from './agency_info'
import { TeamMember } from './team_member'

const teamMembers = [
  {
    name: 'Youcef Douifi',
    age: 27,
    location: 'Barcelona',
    title: 'Co-founder & Creative Director',
    description: 'In charge of the creative direction of the agency.',
    videoSrc: '/assets/videos/youcef.mp4',
    links: [
      { label: 'LinkedIn', url: '' },
      { label: 'Behance', url: '' },
    ],
    availabilityColor: 'orange' as const,
  },
  {
    name: 'Mehmet Badem',
    age: 25,
    location: 'Strasbourg',
    title: 'Co-founder & Technical Director',
    description: 'In charge of the technical direction of the agency.',
    videoSrc: '/assets/videos/mehmet.mp4',
    links: [
      { label: 'LinkedIn', url: '' },
      { label: 'GitHub', url: '' },
    ],
    availabilityColor: 'orange' as const,
  },
]

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export const AboutUs = () => {
  const [shuffledMembers, setShuffledMembers] = useState(teamMembers)

  useEffect(() => {
    setShuffledMembers(shuffleArray(teamMembers))
  }, [])

  return (
    <section id="about-us-section" className="mt-128 min-h-[100vh]" data-scroll-section>
      <div>
        <SectionTitle>our company and team</SectionTitle>

        <div className="mt-26 flex flex-col gap-10 items-center">
          <AgencyInfo />

          <div className="flex justify-center gap-10 flex-wrap" data-scroll>
            {shuffledMembers.map((member, index) => (
              <TeamMember key={member.name} {...member} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
