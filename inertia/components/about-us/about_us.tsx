import { SectionTitle } from '../section_title'
import { AgencyInfo } from './agency_info'
import { TeamMember } from './team_member'

const teamMembers = [
  {
    name: 'Mehmet Badem',
    age: 25,
    location: 'Strasbourg',
    title: 'Co-founder & Technical Director',
    description: 'In charge of the technical direction of the agency.',
    videoSrc: '/assets/videos/mehmet.mp4',
    links: [
      { label: 'LinkedIn', url: 'https://linkedin.com/in/memsbdm' },
      { label: 'GitHub', url: 'https://github.com/memsbdm' },
    ],
    availabilityColor: 'orange' as const,
  },
  {
    name: 'Youcef Douifi',
    age: 27,
    location: 'Barcelona',
    title: 'Co-founder & Creative Director',
    description: 'In charge of the creative direction of the agency.',
    videoSrc: '/assets/videos/youcef.mp4',
    links: [
      { label: 'LinkedIn', url: 'https://linkedin.com/in/youcef-douifi/' },
      { label: 'Behance', url: 'https://be.net/youcefdouifi' },
    ],
    availabilityColor: 'orange' as const,
  },
]

export const AboutUs = () => {
  return (
    <section id="about-us-section" className="mt-128 mb-40" data-scroll-section>
      <div>
        <SectionTitle>our company and team</SectionTitle>

        <div className="mt-26 flex flex-col gap-10 items-center">
          <AgencyInfo />

          <div className="flex justify-center gap-10 flex-wrap" data-scroll>
            {teamMembers.map((member, index) => (
              <TeamMember key={member.name} {...member} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
