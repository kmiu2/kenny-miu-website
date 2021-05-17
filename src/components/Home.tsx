import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { useMediaQuery } from 'react-responsive';
import meImage from '../assets/me.jpg';

export default function Home(props: any) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <div className="px-5">
      <Jumbotron style={{
        backgroundColor: 'transparent',
        color: '#fff',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: isTabletOrMobile ? '3.7rem' :'4.5rem',
          fontWeight: 900,
          textTransform: 'uppercase'
        }}>Kenny Miu</h1>
        <br />
        <h3 style={{
          fontSize: isTabletOrMobile ? '1.7rem' : '2rem'
        }}>Software Developer, Nanotechnology Engineer</h3>
        <br />
        <br />
        <img
          src={meImage}
          alt="me"
          style={{
            borderRadius: '20px',
            minWidth: '50%',
            maxWidth: 250,
          }}
        />
        <br />
        <br />
        <Button
          className="home-button"
          href="/resume-kenny.pdf"
          target={"_blank"}
        >
          Resume
        </Button>
      </Jumbotron>
    </div>
  )
};
