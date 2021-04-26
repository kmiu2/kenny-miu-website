import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Social from './Social';

export default class Contact extends Component {
  render() {
    const info = [
      {
        title: "Location",
        value: "Toronto, Canada",
      },
      {
        title: "Phone",
        value: "+1 (647) 863 1337",
      },
      {
        title: "Email",
        value: "kennymiu2@gmail.com",
      },
      {
        title: "Social",
        value: <Social fill="#787878"/>,
      },
    ];

    const rows = []
    for (var i = 0; i < info.length; i++){
      rows.push(
        <Row noGutters>
          <Col xs={3} className="contact-left-col">
            {info[i].title}
          </Col>
          <Col xs={9} className="contact-right-col">
            {info[i].value}
          </Col>
        </Row>
      )

      if(i !== info.length - 1)
        rows.push(<hr />)
    }

    return (
      <div style={{padding: 30, backgroundColor: "#e0e0e0"}}>
        <Container fluid="xl">
          {rows}
        </Container>
      </div>
    )
  }
}
