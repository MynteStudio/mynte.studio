import { useState } from 'react'
import { SectionTitle } from '../section_title'
import { projects, type Project } from './projects_data'

export const SelectedWorks = () => {
  const [activeProjectId, setActiveProjectId] = useState<number>(projects[0].id)

  const activeProject = projects.find((p) => p.id === activeProjectId) || projects[0]

  const handleProjectClick = (projectId: number) => {
    setActiveProjectId(projectId)
  }

  return (
    <section id="selected-works-section" className="mt-32 mb-40" data-scroll-section>
      <SectionTitle parenthesis="ready to add yours?">our selected works</SectionTitle>

      <div className="mt-20 flex flex-col lg:flex-row gap-10">
        {/* NOTE: Left - Card glass with background image */}
        <div
          className="relative w-full lg:w-1/2 aspect-[16/10] rounded-[2.5rem] overflow-hidden"
          data-scroll
          data-scroll-speed="0.5"
        >
          {/* Background image */}
          <div className="absolute inset-0 w-full h-full z-0">
            <img
              src={activeProject.backgroundImage}
              alt={activeProject.name}
              className="w-full h-full object-cover transition-all duration-600 ease-out"
              key={activeProject.id}
              style={{
                animation: 'fadeInScale 0.6s ease-out forwards',
              }}
            />
          </div>

          <style>{`
            @keyframes fadeInScale {
              from {
                opacity: 0;
                transform: scale(1.05);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(10px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-1"></div>

          {/* Glass overlay with project selector - Bottom Center */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
            <div className="glass rounded-2xl p-3 w-fit">
              <div className="flex gap-3">
                {projects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => handleProjectClick(project.id)}
                    className={`
                      relative w-12 h-12 rounded-lg overflow-hidden
                      transition-all duration-300
                      ${
                        activeProjectId === project.id
                          ? 'opacity-100 scale-100'
                          : 'opacity-30 hover:opacity-60 scale-95 hover:scale-100'
                      }
                    `}
                    style={{
                      filter: activeProjectId === project.id ? 'blur(0px)' : 'blur(2px)',
                    }}
                  >
                    <div className="w-full h-full bg-white/10 flex items-center justify-center p-2">
                      <img
                        src={project.logo}
                        alt={project.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          // Fallback si l'image n'existe pas
                          e.currentTarget.style.display = 'none'
                          e.currentTarget.parentElement!.innerHTML = `<span class="text-xs text-center">${project.name}</span>`
                        }}
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* NOTE: Right - Description and tags */}
        <div
          className="w-full lg:w-1/2 flex flex-col justify-between"
          data-scroll
          data-scroll-speed="0.8"
        >
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl italic">{activeProject.name}</h2>

            <div className="flex flex-col gap-1">
              <h3 className="text-2xl md:text-3xl font-semibold">{activeProject.company}</h3>
              <span className="text-lg text-white/70 italic">
                {activeProject.location} - {activeProject.year}
              </span>
            </div>

            <p className="text-justify leading-relaxed text-white/90">
              {activeProject.description}
            </p>
          </div>

          {/* Technologies tags */}
          <div className="flex flex-wrap gap-3 mt-8" data-scroll data-scroll-speed="0.2">
            {activeProject.technologies.map((tech, index) => (
              <div
                key={`${activeProject.id}-${tech}-${index}`}
                className="glass flex justify-center items-center px-6 h-10 min-w-24 rounded-full"
                style={{
                  animation: 'fadeInUp 0.5s ease-out forwards',
                  animationDelay: `${index * 0.05}s`,
                  opacity: 0,
                }}
              >
                <span className="text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
