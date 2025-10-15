import { createContext, useContext, useState, ReactNode } from 'react'

interface DynamicIslandContextType {
  isHeaderVisible: boolean
  setIsHeaderVisible: (visible: boolean) => void
}

const DynamicIslandContext = createContext<DynamicIslandContextType | undefined>(undefined)

export const DynamicIslandProvider = ({ children }: { children: ReactNode }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)

  return (
    <DynamicIslandContext.Provider value={{ isHeaderVisible, setIsHeaderVisible }}>
      {children}
    </DynamicIslandContext.Provider>
  )
}

export const useDynamicIslandVisibility = () => {
  const context = useContext(DynamicIslandContext)
  if (!context) {
    throw new Error('useDynamicIslandVisibility must be used within DynamicIslandProvider')
  }
  return context
}
