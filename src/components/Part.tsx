import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'
import NavLink from 'react-bootstrap/NavLink';
import { Button } from 'react-bootstrap';

export default function Part(props: any) {
  const { link, linkText, img, title, location, sub, desc, date } = props;

  return (
    <div className="container">
      <Jumbotron style={{
        backgroundColor: 'transparent',
        textAlign: 'center',
        height: '100%'
      }}>
        <p style={{
          fontSize: '1.2rem',
          fontStyle: 'italic'
        }}>{date}</p>
        <br />
        {link != null ?
          <NavLink
            className="part-link"
            href={link}
            target={"_blank"}
          >
            <h1 style={{
              fontSize: '2.1rem',
              fontWeight: 350,
            }}>{title}</h1>
          </NavLink>
          :
          <h1 style={{
            fontSize: '2.1rem',
            fontWeight: 350,
          }}>{title}</h1>}
        <br />
        {location != null ? <h3>{location}</h3> : null}
        {img != null ?
          <div style={{ padding: 15 }}>
            <Image
              src={require(`../assets/${img}`)}
              rounded
              style={{
                minWidth: '50%',
                maxWidth: 250,
              }}
            />
          </div> : null}
        <br />
        <br />
        {sub != null ? <h4 style={{ fontWeight: 'bold' }}>{sub}</h4> : null}
        <br />
        <p style={{
          fontSize: '1.5rem',
          fontWeight: 200,
          lineHeight: '165%'
        }}>{desc}</p>
        <br />
        {link != null ?
          <Button
            className="part-button"
            href={link}
            target={"_blank"}
          >
            {linkText ?? "Website"}
          </Button> : null}
      </Jumbotron>
    </div>
  );
}
