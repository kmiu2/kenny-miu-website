import Button from 'react-bootstrap/Button'
import { useMediaQuery } from 'react-responsive'
import { Spacer } from '../reusable/Spacer'
import './Home.css'

export function Home() {
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <div className="homeWrapper">
      <div className={isMobile ? 'nameHeader mobile' : 'nameHeader'}>
        Kenny Miu
      </div>
      <div className={isMobile ? 'titlesSubheader mobile' : 'titlesSubheader'}>
        SDE @ Amazon
      </div>
      <img
        className="imgWrapper"
        src="/images/me.jpg"
        srcSet="/images/me-small.jpg 500w, /images/me.jpg 1000w"
        sizes="(max-width: 768px) 80vw, 500px"
        alt="me"
        width="1000"
        height="1333"
      />
      <Spacer height={25} />
      <Button
        className="homeButton"
        href="/resume-kenny.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </Button>
    </div>
  )
}
