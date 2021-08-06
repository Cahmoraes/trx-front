import { useState, createContext, useCallback, useContext } from 'react'

const OverlayContext = createContext()

export function OverlayProvider({ children }) {

  const [visibleOverlay, setVisibleOverlay] = useState(false)

  const changeOverlayVisibility = useCallback((visibility = true) => {
    setVisibleOverlay(visibility)
  }, [])

  return (
    <OverlayContext.Provider value={{
      visibleOverlay,
      changeOverlayVisibility
    }}>
      {children}
    </OverlayContext.Provider>
  )
}

export function useOverlay () {
  return useContext(OverlayContext)
}