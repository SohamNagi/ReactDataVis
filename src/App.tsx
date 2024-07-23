import './App.css'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from './components/mode-toggle'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className='p-5'><ModeToggle></ModeToggle></div>
    </ThemeProvider>
  )
}

export default App
