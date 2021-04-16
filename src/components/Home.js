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
                }}>Software Developer, Nanotechnology Engineer</h3>
                <br />
                <br />
                <img 
                    src={require('../assets/me.jpg')}
                    alt="" 
                    style={{
                        borderRadius: '20px',
                        minWidth: '50%',
                        maxWidth: 250,
                    }}
                />
                <br />
                <br />
                <p>
                    <Button 
                        variant="outline-light" 
                        size="lg" 
                        href="/KennyMiuResume.pdf" 
                        target={"_blank"}
                        style={{
                            fontSize: '2rem',
                            fontWeight: '350'
                        }}>
                        Resume
                    </Button>
                </p>
            </Jumbotron>
            </div>
        )
    }
}
