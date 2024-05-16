import { Accordion, Button } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import NavLink from 'react-bootstrap/NavLink'
import './Part.css'

export interface IPart {
  date?: string
  description: string[]
  img: string
  link?: string
  linkText?: string
  location?: string
  spotlight?: boolean
  subtitle?: string
  title: string
}

export function Part(props: { part: IPart }) {
  const {
    date,
    description,
    img,
    link,
    linkText,
    location,
    spotlight,
    subtitle,
    title,
  } = props.part

  const renderDescription = (data: string[]) => {
    return (
      <div className="descriptionWrapper">
        <Accordion className="accordionWrapper" defaultActiveKey="1">
          <Accordion.Item className="accordionWrapper" eventKey="0">
            <Accordion.Header>Read More</Accordion.Header>
            <Accordion.Body>
              {data.map((text) => (
                <div className="descriptionText" key={text}>
                  {text}
                </div>
              ))}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    )
  }

  return (
    <div className="partWrapper">
      {date && <div className="dateText">{date}</div>}
      <div className="titleText">
        <NavLink
          className={link ? 'partLink' : 'partLink inactive'}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </NavLink>
      </div>
      {location && <div className="locationText">{location}</div>}
      <Image
        className={spotlight ? 'image spotlight' : 'image'}
        src={img}
        alt={title}
      />
      {subtitle && <div className="subtitleText">{subtitle}</div>}
      {renderDescription(description)}
      {link && (
        <Button
          className="partButton"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkText ?? 'Website'}
        </Button>
      )}
    </div>
  )
}
