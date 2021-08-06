import { BrowserRouter as Router } from 'react-router-dom'
import { OverlayProvider } from './hooks/useOverlay'
import { Routes } from './routes'

export function App() {
  return (
    <Router>
      <OverlayProvider>
        <Routes />
      </OverlayProvider>
    </Router>
  )
}
