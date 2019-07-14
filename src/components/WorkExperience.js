import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Part from './Part'

export default class WorkExperience extends Component {
    render() {
        return (
            <div className="px-5">
                <Container fluid>
                    <Row>
                    <Col>
                        <div className="container"><Part 
                        img='logo.svg' 
                        link='https://app.staugustinechs.ca/' 
                        title='iOS Developer' 
                        location='St. Augustine Catholic High School' 
                        tools='Swift, Objective-C, XCode, Firebase' 
                        desc='As an aspiring software developer and'
                    /></div>
                    </Col>
                    <Col>
                        <div className="container"><Part 
                        img='me.png' 
                        link='https://app.staugustinechs.ca/' 
                        title='NodeJS Developer' 
                        location='St. Augustine Catholic High School' 
                        tools='Swift, Objective-C, XCode, Firebase' 
                        desc='As an aspiring software developer and'
                    /></div>
                        
                    </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
