import Button from 'react-bootstrap/Button';
import { useMediaQuery } from 'react-responsive';
import meImage from '../../assets/base/me.jpg';
import { Spacer } from '../reusable/Spacer';
import './Home.css';

export function Home() {
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <div className="homeWrapper">
      <div className={isMobile ? 'nameHeader mobile' : 'nameHeader'}>
        Kenny Miu
      </div>
      <div className={isMobile ? 'titlesSubheader mobile' : 'titlesSubheader'}>
        Software Developer, Nanotechnology Engineer
      </div>
      <img className="imgWrapper" src={meImage} alt="me" />
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
  );
}
