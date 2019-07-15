import React, { Component } from 'react'
import styled from 'styled-components'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import oldCol from 'react-bootstrap/Col'

import Part from './Part'

const Col = styled(oldCol)`
    background-color: white; 
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 5px;
`

export default class WorkExperience extends Component {
    render() {
        return (
            <div>
            <Container fluid>
                <Row noGutters>
                <Col>
                    <Part 
                        date="Sept 2015 - June 2019"
                        img='markham.png' 
                        link='https://www.markham.ca' 
                        title='Computer Instructor'
                        location='Markham, Canada' 
                        sub='Tools: Java, Python, C, C++' 
                        desc={['Right from a young age, I aspired to learn more about possibilities technology can bring to people. By working as a computer instructor, I was able to share my passion for technology, especially programming, with not just children of all ages, but also some adults who share that interest I have.',
                        <br />,
                        <br />,
                        "As an instuctor for both children and adults, I taught a variety of topics from the basics such as ifs and loops up to more advanced topics like OOP and Inheritance"]}
                    />    
                </Col>
                <Col>
                    <Part 
                        date="Feb - Nov, 2017"
                        img='first_robotics.jpg' 
                        link='https://www.firstroboticscanada.org/' 
                        title='FIRST Robotics Mentor'
                        location='Toronto, Canada' 
                        sub='Tools: LEGO NXT' 
                        desc='Having experience from previous competitions, I led my team to victory. Despite being the youngest team at the competition, I was still able to guide my team of 9-11 y/o to success, earning nearly all the possible points even available to obtain.'
                    />
                </Col>
                </Row>
            </Container>
            </div>
        )
    }
}
