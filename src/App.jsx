import { BrowserRouter as Router } from 'react-router-dom'
import { AppProvider } from './hooks/AppProvider'
import { Routes } from './routes'

export function App() {
  return (
    <Router>
      <AppProvider>
        <Routes />
      </AppProvider>
    </Router>
  )
}
