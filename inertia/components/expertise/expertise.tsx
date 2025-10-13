import { useState, useEffect, useRef, useMemo } from 'react'
import { SectionTitle } from '../section_title'
import { devTags, designTags, briefingTags, marketingTags } from './tags'
import { useLocomotiveScroll } from '../smooth_scroll_wrapper'

const expertiseData = [
  { title: 'Briefing, Research, & Conceptualization', tags: briefingTags },
  { title: 'Design', tags: designTags },
  { title: 'Development', tags: devTags },
  { title: 'Marketing', tags: marketingTags },
]

function shuffleTags(tags: string[]) {
  const shuffled = [...tags]
  // Fisher-Yates algorithm
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export const Expertise = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const { scroll } = useLocomotiveScroll()

  const shuffledTags = useMemo(() => {
    const allTags = [...briefingTags, ...designTags, ...devTags, ...marketingTags]
    return shuffleTags(allTags)
  }, [])

  useEffect(() => {
    if (!scroll) return

    const handleScroll = (args: any) => {
      if (!sectionRef.current) return

      const section = sectionRef.current
      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const sectionHeight = section.offsetHeight

      const scrollStart = rect.top - windowHeight / 2
      const scrollEnd = rect.bottom - windowHeight / 2
      const scrollRange = sectionHeight - windowHeight / 2

      if (scrollStart > 0) {
        setActiveIndex(-1)
      } else if (scrollEnd < 0) {
        setActiveIndex(4)
      } else if (scrollEnd > 0 && scrollStart < 0) {
        const offset = windowHeight * 0.6
        const progress = Math.max(0, Math.min(1, (-scrollStart - offset) / scrollRange))
        const newIndex = Math.min(3, Math.floor(progress * 3.99))
        setActiveIndex(newIndex)
      }
    }

    scroll.on('scroll', handleScroll)

    return () => {
      scroll.off('scroll', handleScroll)
    }
  }, [scroll])

  const activeTags = activeIndex >= 0 && activeIndex <= 3 ? expertiseData[activeIndex].tags : []

  return (
    <section
      ref={sectionRef}
      id="expertise-section"
      className="mt-40 lg:min-h-[200vh] relative"
      data-scroll-section
    >
      {/* NOTE: mobile */}
      <div className="lg:hidden">
        <SectionTitle>our process and expertise</SectionTitle>

        <div className="mt-20 flex flex-col gap-10 items-start">
          {expertiseData.map((item, index) => (
            <div key={index} className="flex flex-col gap-4 items-start w-full">
              <h3 className="font-serif italic font-normal text-2xl text-left">{item.title}</h3>
              <div className="flex flex-wrap gap-3 justify-start">
                {item.tags.map((tag, tagIndex) => (
                  <h4
                    key={tagIndex}
                    className="glass flex justify-center items-center px-6 h-10 min-w-24 rounded-full"
                  >
                    {tag}
                  </h4>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* NOTE: desktop */}
      <div
        className="hidden lg:block relative top-[30vh]"
        data-scroll
        data-scroll-sticky
        data-scroll-target="#expertise-section"
      >
        <SectionTitle>our process and expertise</SectionTitle>

        <div className="mt-20 flex flex-nowrap">
          <aside className="w-1/2 flex flex-col gap-8">
            {expertiseData.map((item, index) => (
              <h3
                key={index}
                className={`font-serif font-normal italic transition-all duration-500 ease-out ${
                  activeIndex === -1 || activeIndex === 4
                    ? 'opacity-30 text-4xl'
                    : activeIndex === index
                      ? 'opacity-100 font-semibold text-4xl'
                      : 'opacity-40 text-4xl'
                }`}
                data-scroll
                data-scroll-speed={index * 0.5}
              >
                {item.title}
              </h3>
            ))}
          </aside>
          <div className="w-1/2 flex flex-wrap gap-5 justify-end">
            {shuffledTags.map((tag, index) => (
              <h4
                key={index}
                className={`glass flex justify-center items-center px-6 h-10 min-w-24 rounded-full transition-opacity duration-500 ease-out ${
                  activeIndex === -1 || activeIndex === 4
                    ? 'opacity-20'
                    : activeTags.includes(tag)
                      ? 'opacity-100'
                      : 'opacity-30'
                }`}
                data-scroll
                data-scroll-speed={0.2}
              >
                {tag}
              </h4>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
