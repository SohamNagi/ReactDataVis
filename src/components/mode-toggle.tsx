import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark");

  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);

  const handleToggle = () => {
    if (isDarkMode) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <Button variant="ic" size="ic" className="pr-2" onClick={handleToggle}>
      <Sun
        className={` absolute hover:bg-accent rounded-full hover:text-accent-foreground h-4 w-4 transition-all ${
          isDarkMode ? "rotate-90 scale-0" : "rotate-0 scale-100"
        }`}
      />
      <Moon
        className={` absolute hover:bg-accent rounded-full hover:text-accent-foreground h-4 w-4 transition-all ${
          isDarkMode ? "rotate-0 scale-100" : "-rotate-90 scale-0"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
