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

export default class Projects extends Component {
    render() {
        return (
            <div>
            <Container fluid>
            <Row noGutters>
            <Col>
                <Part
                    date=''
                    img='react.svg'
                    link='' 
                    title='React Website'
                    location='' 
                    sub='Tools: ReactJS, Bootstrap, npm, CSS, HTML' 
                    desc={['Using React, I was able to create several quick and responsive SPAs such as this website.',
                        <br />,
                        <br />,
                        'By using React Router and the SPA architecture, this website is able to instantly switch between subpages']}
                />
            </Col>
            <Col>
                <Part
                    date='Sept 2018 - June 2019'
                    img='xcode.png' 
                    link='https://itunes.apple.com/app/id1449888784/' 
                    title='iOS Developer'
                    location='St. Augustine Catholic High School' 
                    sub='Tools: Swift, Objective-C, XCode, Firebase' 
                    desc={['Starting from zero knowledge of Swift and app development, I self-taught myself everything required to create a successful app.',
                        <br />,
                        <br />,
                        'In order to properly support the entire school, we had to ensure both the Android and iOS apps have the same UI and functionality. Using the Agile approach to development, I was able to coordinate with the team and our principal to ensure the app was a success. Through mediums like Slack and emailing the student body, our team cooperated and fulfilled the requests of our student body.'
                        ]}
                />
            </Col>
            </Row>
            <br />
            <Row noGutters>
            <Col>
                <Part 
                    date='Sept 2018 - June 2019'
                    img='nodejs.png' 
                    link='https://app.staugustinechs.ca/' 
                    title='NodeJS Developer' 
                    location='St. Augustine Catholic High School' 
                    sub='Tools: NodeJS, npm, Cloud Platform, Firebase, CronJobs' 
                    desc={['Alongside creating the front end of the St. Augustine CHS App, I was also responsible for maintaining the back end of the app',
                        <br />,
                        <br />,
                        "I was responsible for creating the functions that cemented the app's importance in the school (such as sending push notifications for new announcements). Using third party resources like CronJobs, I programmed algorithms of varying functionality from creating daily backups of the database to deleting the top student voted song each morning"
                        ]}
                />
            </Col>
            
            <Col>
                <Part
                    date=''
                    img='tf.svg'
                    link='https://github.com/kmiu2/ML-Projects' 
                    title='Machine Learning Projects'
                    location='' 
                    sub='Tools: TensorFlow, Python, Gym' 
                    desc="Using Google's TensorFlow library, I completed several projects and challenges from the Gym toolkit. Using their environments, I challenged myself to write algorithms that successfully overcome these tasks."
                />
            </Col>

            </Row>
            </Container>
            </div>
        )
    }
}
