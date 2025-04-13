import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"


export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="mode-toggle">
      <button 
        onClick={() => setTheme("light")}
        className="mode-button"
        title="Modo Claro"
      >
        <Sun className={`icon ${theme === 'light' ? 'active' : ''}`} />
      </button>
      <button 
        onClick={() => setTheme("dark")}
        className="mode-button"
        title="Modo Escuro"
      >
        <Moon className={`icon ${theme === 'dark' ? 'active' : ''}`} />
      </button>
      {/* <button 
        onClick={() => setTheme("system")}
        className="mode-button"
        title="Usar tema do sistema"
      >
        Sistema
      </button> */}
    </div>
  )
} 