import React, { Component } from 'react'
import styled from 'styled-components'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import oldCol from 'react-bootstrap/Col'

import Part from './Part'

const Col = styled(oldCol)`
  background-color: white;
  margin: 5px;
  border-radius: 5px;
`;

export default class Showcase extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row noGutters>
            <Col>
              <Part
                img='car.png'
                link='/car.zip'
                title='Soapbox Car'
                location=''
                sub='SolidWorks'
                desc={['With a team of 4 people other, I designed a fully functioning soapbox car. Since at this time, the Cybertruck car recently came out, we modelled the car after its peculiar design.']}
              />
            </Col>
            <Col>
              <Part
                img='trampoline.png'
                link='/trampoline.zip'
                title='Trampoline'
                sub='SolidWorks'
                desc={['A challenge I was given was to design a trampoline that was targeted for children. By adding walls and as well creating a large mat for the trampoline, this design ensures that any child playing in this trampoline would be safe.']}
              />
            </Col>
          </Row>
          <Row noGutters>
            <Col>
              <Part
                img='circuit.jpg'
                link=''
                title='Soldering'
                location=''
                sub=''
                desc={['Using the few parts given, I soldered these two LEDs, resistor and switch in series.']}
              />
            </Col>
            <Col>
              <Part
                img='electroplate.jpg'
                link=''
                title='Electroplating'
                location=''
                sub=''
                desc={['Using a copper (II) nitrate solution and galvanized steel, I plated this Pikachu design onto the galvanized steel plate with copper.']}
              />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
