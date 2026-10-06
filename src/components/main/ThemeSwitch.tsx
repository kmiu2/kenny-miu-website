import { FiMoon, FiSun } from 'react-icons/fi'
import './ThemeSwitch.css'

export function ThemeSwitch(props: { theme: string; setTheme: any }) {
  const { theme, setTheme } = props
  const isDark = theme === 'dark'

  return (
    <button
      className="themeSwitchBtn"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {isDark ? (
        <FiSun size={18} strokeWidth={2} />
      ) : (
        <FiMoon size={18} strokeWidth={2} />
      )}
    </button>
  )
}
