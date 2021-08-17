import { OverlayProvider } from './useOverlay'
import { SideCartProvider } from './useSideCart'

export function AppProvider({ children }) {
  return (
    <OverlayProvider>
      <SideCartProvider>{children}</SideCartProvider>
    </OverlayProvider>
  )
}
