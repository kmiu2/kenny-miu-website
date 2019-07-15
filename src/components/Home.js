import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

export default class Home extends Component {
    render() {
        return (
            <div className="px-5">
            <Jumbotron style={{
                backgroundColor: 'transparent',
                color: '#fff',
                fontFamily: 'Helvetica',
                textAlign: 'center'
            }}>
                <h1 style={{
                    fontSize: '4.5rem',
                    fontWeight: '900',
                    textTransform: 'uppercase'
                }}>Kenny Miu</h1>
                <br />
                <h3 style={{
                    fontSize: '2rem'
                }}>Nanotechnology Engineer</h3>
                <br />
                <h3 style={{
                    fontStyle: 'italic',
                    fontFamily: 'Times'
                }}>Full-Stack Developer, ML and AI Adventurist, Computer and Physics Nerd</h3>
                <br />
                <img src={require('../assets/me.jpg')} width="65%" alt="" style={{borderRadius: '20px'}}/>
                <br />
                <br />
                <p>
                    <Button variant="outline-light" size="lg" href="/KennyMiuResume.pdf" style={{
                        fontSize: '2rem',
                        fontWeight: '350'
                    }}>Resume</Button>
                </p>
            </Jumbotron>
            </div>
        )
    }
}
