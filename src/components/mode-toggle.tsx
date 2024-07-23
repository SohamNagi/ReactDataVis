import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { useEffect, useState } from "react"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [isDarkMode, setIsDarkMode] = useState(theme === 'dark')

  useEffect(() => {
    setIsDarkMode(theme === 'dark')
  }, [theme])

  const handleToggle = () => {
    if (isDarkMode) {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  return (
    <Button variant="outline" size="icon" onClick={handleToggle}>
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all ${
          isDarkMode ? "rotate-90 scale-0" : "rotate-0 scale-100"
        }`}
      />
      <Moon
        className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
          isDarkMode ? "rotate-0 scale-100" : "-rotate-90 scale-0"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
