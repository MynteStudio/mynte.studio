import { AvailabilityStatus } from '~/components/availability_status'

interface TeamMemberLink {
  label: string
  url: string
}

interface TeamMemberProps {
  name: string
  age: number
  location: string
  title: string
  description: string
  videoSrc: string
  links: TeamMemberLink[]
  availabilityColor: 'green' | 'orange' | 'red'
  index: number
}

export const TeamMember = ({
  name,
  age,
  location,
  title,
  description,
  videoSrc,
  links,
  availabilityColor,
  index,
}: TeamMemberProps) => {
  return (
    <div
      className="relative w-full lg:w-[25rem] h-[27rem] p-[3px] rounded-3xl"
      data-scroll
      data-scroll-speed={index === 0 ? '1' : '-0.5'}
      style={{
        background:
          'linear-gradient(180deg, rgba(255, 255, 255, 0.62) 0%, rgba(0, 0, 0, 1) 32%, rgba(0, 0, 0, 1) 54%, rgba(255, 255, 255, 0.64) 100%)',
      }}
    >
      <div className="relative w-full h-full rounded-3xl flex flex-col justify-between overflow-hidden bg-[#080808]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/30 z-1"></div>

        <div className="mx-5">
          <div className="relative z-10 flex items-center w-fit mx-auto mt-7 py-1 pl-5 gap-3 pr-4 rounded-full glass">
            <AvailabilityStatus color={availabilityColor} />
            <h5 className="font-semibold">{title}</h5>
          </div>
        </div>
        <div className="relative z-10 rounded-3xl m-4">
          <div className="flex justify-between items-center border-light border-b-1 pb-1">
            <h3 className="font-serif text-4xl italic">{name}</h3>
            <span className="font-light italic">
              {age}, from {location}
            </span>
          </div>

          <p className="font-light mt-[0.15rem]">{description}</p>

          <div className="flex justify-center gap-3 mt-2">
            {links.map((link, index) => (
              <a
                key={link.label}
                href={link.url}
                className="glass rounded-full px-5 text-sm font-normal"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
