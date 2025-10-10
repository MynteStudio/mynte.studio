import { useState } from 'react'
import { Available } from '../../atoms/available/available'
import { DynamicIslandModal } from './dynamic_island_modal'

export const DynamicIsland = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="relative w-full">
        <div className="glass h-10 flex items-center justify-between rounded-3xl">
          <div className="flex items-center gap-3">
            <div className="ml-4">
              <Available />
            </div>
            <span>available right now for your project :)</span>
          </div>
          <button
            className="glass h-[1.35rem] w-[5.5rem] flex items-center justify-center mr-3 rounded-xl bg-[rgba(0,0,0,0.9)]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? 'close' : 'contact'}
          </button>
        </div>
        <DynamicIslandModal isOpen={isOpen} />
      </div>
    </>
  )
}
