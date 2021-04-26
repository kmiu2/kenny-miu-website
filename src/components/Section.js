import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Part from './Part'

export default class Section extends Component {
  constructor(props) {
    super(props)
    this.parts = this.props.parts
  }
  render() {
    const rows = []
    for (var i = 0; i < this.parts.length; i+=2){
      if(this.parts[i].spotlight){
        rows.push(
          <Row noGutters>
            <Col className="col-right">
              <Part
                date={this.parts[i].date}
                img={this.parts[i].img}
                link={this.parts[i].link}
                linkText={this.parts[i].linkText}
                title={this.parts[i].title}
                location={this.parts[i].location}
                sub={this.parts[i].sub}
                desc={this.parts[i].desc}
              />
            </Col>
          </Row>
        )
        i--;
      } 
      else {
        rows.push(
          <Row noGutters>
            <Col className={i < this.parts.length - 2
              ? "col-left"
              : "col-left-bottom"
            }>
              <Part
                date={this.parts[i].date}
                img={this.parts[i].img}
                link={this.parts[i].link}
                linkText={this.parts[i].linkText}
                title={this.parts[i].title}
                location={this.parts[i].location}
                sub={this.parts[i].sub}
                desc={this.parts[i].desc}
              />
            </Col>
            <Col className={i < this.parts.length - 2
              ? "col-right"
              : "col-right-bottom"
            }>
              <Part
                date={this.parts[i+1]?.date}
                img={this.parts[i+1]?.img}
                link={this.parts[i+1]?.link}
                linkText={this.parts[i].linkText}
                title={this.parts[i+1]?.title}
                location={this.parts[i+1]?.location}
                sub={this.parts[i+1]?.sub}
                desc={this.parts[i+1]?.desc}
              />
            </Col>
          </Row>
        )
      }
    }

    return (
      <div>
        <Container fluid="xl">
          {rows}
        </Container>
      </div>
    )
  }
}
