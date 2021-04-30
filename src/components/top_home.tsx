import Link from "next/link";
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
// import meImage from '../assets/me.jpg';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useMediaQuery } from 'react-responsive';
import Contact from './contact';
import Sidebar from './sidebar';
import Social from './social';

export default function TopHome(props: any) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <div>
      <div className="px-5">
        <Jumbotron style={{
          backgroundColor: 'transparent',
          color: '#fff',
          textAlign: 'center'
        }}>
          <h1 style={{
            fontSize: isTabletOrMobile ? '3.7rem' : '4.5rem',
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
            // src={meImage}
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
            href="/KennyMiuResume.pdf"
            target={"_blank"}
          >
            Resume
        </Button>
        </Jumbotron>
      </div>

      {isTabletOrMobile 
        ? <Sidebar />
        : <div style={{ padding: "0 7.5%" }}>
          <Navbar variant="dark" expand="lg" className="home-nav">
            <Nav>
              <Nav.Link>
                <div className="nav-link">
                  <Link href="/work_experience">
                    Work Experience
                  </Link>
                </div>
              </Nav.Link>
              <Nav.Link>
                <div className="nav-link">
                  <Link href="/projects">
                    Projects
                </Link>
                </div>
              </Nav.Link>
              <Nav.Link>
                <div className="nav-link">
                  <Link href="/education">
                    Education
                </Link>
                </div>
              </Nav.Link>
              <Nav.Link>
                <div className="nav-link">
                  <Link href="/showcase">
                    Showcase
                </Link>
                </div>
              </Nav.Link>
            </Nav>
            <Navbar.Collapse className="justify-content-end">
              <Social />
            </Navbar.Collapse>
          </Navbar>
        </div>
      }
    </div>
  )
};
