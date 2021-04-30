import Link from "next/link";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import useResponsive from "./helpers";
import Sidebar from './sidebar';
import Social from './social';

export default function TopHome(props: any) {
  const { isMobile } = useResponsive();

  return (
    <div>
      <div className="px-5">
        <Jumbotron style={{
          backgroundColor: 'transparent',
          color: '#fff',
          textAlign: 'center'
        }}>
          <h1 style={{
            fontSize: isMobile ? '3.7rem' : '4.5rem',
            fontWeight: 900,
            textTransform: 'uppercase'
          }}>Kenny Miu</h1>
          <br />
          <h3 style={{
            fontSize: isMobile ? '1.7rem' : '2rem'
          }}>Software Developer, Nanotechnology Engineer</h3>
          <br />
          <br />
          <Image
            src="/images/me.jpg"
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

      {isMobile
        ? <Sidebar />
        : <div style={{ padding: "0 7.5%" }}>
          <Navbar variant="dark" expand="lg" className="home-nav">
            <Nav>
              <Nav.Link>
                <Link href="/work_experience">
                  <a className="nav-link">Work Experience</a>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link href="/projects">
                  <a className="nav-link">Projects</a>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link href="/education">
                  <a className="nav-link">Education</a>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link href="/showcase">
                  <a className="nav-link">Showcase</a>
                </Link>
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
