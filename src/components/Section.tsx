import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Part from './Part'
import React from 'react'
import Row from 'react-bootstrap/Row'
import { useMediaQuery } from 'react-responsive'

export default function Section(props: any) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  const parts = props.parts;
  const rows = []

  if (isTabletOrMobile) {
    for (let i = 0; i < parts.length; i++) {
      rows.push(
        <Row key={i + "row"} noGutters>
          <Col 
            key={i + "col"} 
            className={i < parts.length - 1
              ? "col-right"
              : "col-right-bottom"
            }
          >
            <Part
              key={i + "part"}
              date={parts[i].date}
              img={parts[i].img}
              link={parts[i].link}
              linkText={parts[i].linkText}
              title={parts[i].title}
              location={parts[i].location}
              sub={parts[i].sub}
              desc={parts[i].desc}
            />
          </Col>
        </Row>
      )
    }
  }
  else {
    for (let i = 0; i < parts.length; i += 2) {
      if (parts[i].spotlight) {
        rows.push(
          <Row key={i + "row"} noGutters>
            <Col className="col-right">
              <Part
                key={i + "part"}
                date={parts[i].date}
                img={parts[i].img}
                link={parts[i].link}
                linkText={parts[i].linkText}
                title={parts[i].title}
                location={parts[i].location}
                sub={parts[i].sub}
                desc={parts[i].desc}
              />
            </Col>
          </Row>
        )
        i--;
      }
      else {
        rows.push(
          <Row key={i + "row"} noGutters>
            <Col className={i < parts.length - 2
              ? "col-left"
              : "col-left-bottom"
            }>
              <Part
                key={i + "part"}
                date={parts[i].date}
                img={parts[i].img}
                link={parts[i].link}
                linkText={parts[i].linkText}
                title={parts[i].title}
                location={parts[i].location}
                sub={parts[i].sub}
                desc={parts[i].desc}
              />
            </Col>
            <Col className={i < parts.length - 2
              ? "col-right"
              : "col-right-bottom"
            }>
              <Part
                key={i + "part"}
                date={parts[i + 1]?.date}
                img={parts[i + 1]?.img}
                link={parts[i + 1]?.link}
                linkText={parts[i].linkText}
                title={parts[i + 1]?.title}
                location={parts[i + 1]?.location}
                sub={parts[i + 1]?.sub}
                desc={parts[i + 1]?.desc}
              />
            </Col>
          </Row>
        )
      }
    }
  }

  return (
    <Container fluid="xl">
      {rows}
    </Container>
  );
}
