import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'
import NavLink from 'react-bootstrap/NavLink';
import { Button } from 'react-bootstrap';

export default class Part extends Component {
  constructor(props) {
    super(props)
    this.link = this.props.link
    this.linkText = this.props.linkText
    this.img = this.props.img
    this.title = this.props.title
    this.location = this.props.location
    this.sub = this.props.sub
    this.desc = this.props.desc
    this.date = this.props.date
  }
  render() {
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
          }}>{this.date}</p>
          <br />
          {this.link != null ?
            <NavLink 
              className="part-link"
              href={this.link} 
              target={"_blank"}
            >
              <h1 style={{
                fontSize: 'auto',
                fontWeight: '350',
              }}>{this.title}</h1>
            </NavLink>
            :
            <h1 style={{
              fontSize: 'auto',
              fontWeight: '350',
            }}>{this.title}</h1>}
          <br />
          {this.location != null ? <h3>{this.location}</h3> : null}
          {this.img != null ?
            <div style={{padding: 15}}>
              <Image 
                src={require(`../assets/${this.img}`)} 
                rounded 
                width="45%"
              />
            </div> : null}
          <br />
          <br />
          {this.sub != null ? <h4 style={{fontWeight: 'bold'}}>{this.sub}</h4> : null}
          <br />
          <p style={{
            fontSize: '1.5rem',
            fontWeight: '200',
            lineHeight: '165%'
          }}>{this.desc}</p>
          <br />
          {this.link != null ? 
            <Button
              className="part-button"
              href={this.link} 
              target={"_blank"}
            >
              {this.linkText ?? "Website"}
            </Button> : null}
        </Jumbotron>
      </div>
    )
  }
}
