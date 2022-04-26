import { Col, Row } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive'
import './Contact.css'
import { Social } from './Social'

interface IContactInfo {
  text: string
  value: any
  link?: string
}

export function Contact() {
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  const contactInfo: IContactInfo[] = [
    {
      text: 'Location',
      value: 'Toronto, Canada',
    },
    {
      text: 'Phone',
      value: '+1 (647) 863 1337',
      link: 'tel: +1 (647) 863 1337',
    },
    {
      text: 'Email',
      value: 'kennymiu2@gmail.com',
      link: 'mailto: kennymiu2@gmail.com',
    },
    {
      text: 'Social',
      value: <Social fillColour="var(--contactTextRight)" />,
    },
  ]

  const renderRows = (data: IContactInfo[]) => {
    return data.map((info, index) => (
      <div key={info.text}>
        <Row>
          <Col className="contactLeftCol" xs={isMobile ? 4 : 2}>
            {info.text}
          </Col>
          <Col className="contactRightCol">
            {info.link != null ? (
              <a className="contactLink" href={info.link}>
                {info.value}
              </a>
            ) : (
              info.value
            )}
          </Col>
        </Row>
        {index !== data.length - 1 && <hr />}
      </div>
    ))
  }

  return (
    <div className={isMobile ? 'contactWrapper mobile' : 'contactWrapper'}>
      {renderRows(contactInfo)}
    </div>
  )
}
