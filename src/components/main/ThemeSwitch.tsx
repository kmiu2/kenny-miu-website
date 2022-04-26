import { Form } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive'
import './ThemeSwitch.css'

export function ThemeSwitch(props: { theme: string; setTheme: any }) {
  const { theme, setTheme } = props
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  const switchTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div
      className={isMobile ? 'themeSwitchWrapper mobile' : 'themeSwitchWrapper'}
    >
      <Form>
        <Form.Check
          className={isMobile ? 'themeToggle mobile' : 'themeToggle'}
          type="switch"
          id="themeToggle"
          aria-label="dark mode toggle"
          label={theme === 'dark' ? '☾' : '☀'}
          checked={theme === 'dark'}
          onChange={switchTheme}
        />
      </Form>
    </div>
  )
}
