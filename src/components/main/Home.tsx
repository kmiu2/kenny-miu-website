import Button from 'react-bootstrap/Button'
import { useMediaQuery } from 'react-responsive'
import './Home.css'

export function Home() {
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <div className="homeWrapper">
      <div className="homeContent">
        <div className={isMobile ? 'nameHeader mobile' : 'nameHeader'}>
          Kenny Miu
        </div>
        <div className={isMobile ? 'titlesSubheader mobile' : 'titlesSubheader'}>
          SDE @ Amazon
        </div>
        <div className="heroSpacer" aria-hidden="true" />
        <Button
          className="homeButton"
          href="/resume-kenny.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </Button>
      </div>
    </div>
  )
}
