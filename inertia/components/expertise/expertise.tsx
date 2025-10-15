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
  const [activeIndex, setActiveIndex] = useState(-1)
  const { scroll } = useLocomotiveScroll()

  const [shuffledTags, setShuffledTags] = useState(() => {
    const allTags = [...briefingTags, ...designTags, ...devTags, ...marketingTags]
    return allTags
  })

  useEffect(() => {
    const allTags = [...briefingTags, ...designTags, ...devTags, ...marketingTags]
    setShuffledTags(shuffleTags(allTags))
  }, [])

  useEffect(() => {
    if (!scroll) return

    const handleScroll = (args: any) => {
      if (typeof args.currentElements['expertise-section'] === 'object') {
        const progress = args.currentElements['expertise-section'].progress

        if (progress === 0) {
          setActiveIndex(-1)
        } else if (progress >= 1) {
          setActiveIndex(4)
        } else {
          const index = Math.min(3, Math.floor(progress * 4))
          setActiveIndex(index)
        }
      } else {
        setActiveIndex(-1)
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
      id="expertise-section"
      className="mt-40 min-h-[300vh] relative"
      data-scroll-section
      data-scroll
      data-scroll-id="expertise-section"
    >
      {/* NOTE: mobile */}
      <div className="xl:hidden absolute top-0 left-0 right-0">
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
        className="hidden xl:block absolute top-[30vh] left-0 right-0"
        data-scroll
        data-scroll-sticky
        data-scroll-target="#expertise-section"
      >
        <SectionTitle>our process and expertise</SectionTitle>

        <div className="mt-20 flex flex-nowrap">
          <aside className="w-1/2 flex flex-col gap-15">
            {expertiseData.map((item, index) => (
              <h3
                key={index}
                className={`font-serif font-normal italic transition-all duration-500 ease-out max-w-[25ch] ${
                  activeIndex === -1 || activeIndex === 4
                    ? 'opacity-30 text-4xl'
                    : activeIndex === index
                      ? 'opacity-100 text-4xl'
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
