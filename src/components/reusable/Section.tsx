import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useMediaQuery } from 'react-responsive'
import { IPart, Part } from './Part'
import './Section.css'

export function Section(props: { parts: IPart[] }) {
  const { parts } = props
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  const renderRows = (data: IPart[]) => {
    const rows: any[] = []
    let index = 0

    while (index < data.length) {
      const part = data[index]
      const nextPart = data[index + 1]
      const columnsPerRow = isMobile || part.spotlight ? 1 : 2
      let isLastRow = index >= data.length - columnsPerRow

      if (columnsPerRow === 1) {
        rows.push(
          <Row key={index} className="sectionRow">
            <Col className={isLastRow ? 'colRight bottom' : 'colRight'}>
              <Part part={part} />
            </Col>
          </Row>
        )
      } else {
        isLastRow = index >= data.length - 2
        rows.push(
          <Row key={index} className="sectionRow">
            <Col className={isLastRow ? 'colLeft bottom' : 'colLeft'}>
              <Part part={part} />
            </Col>
            <Col className={isLastRow ? 'colRight bottom' : 'colRight'}>
              {nextPart && <Part part={nextPart} />}
            </Col>
          </Row>
        )
      }
      index += columnsPerRow
    }

    return rows
  }

  return <div className="sectionWrapper">{renderRows(parts)}</div>
}
