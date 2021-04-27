import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import { useMediaQuery } from 'react-responsive';

export default function Home(props) {
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
          fontWeight: '900',
          textTransform: 'uppercase'
        }}>Kenny Miu</h1>
        <br />
        <h3 style={{
          fontSize: isTabletOrMobile ? '1.7rem' : '2rem'
        }}>Software Developer, Nanotechnology Engineer</h3>
        <br />
        <br />
        <img
          src={require('../assets/me.jpg')}
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
  )
};
