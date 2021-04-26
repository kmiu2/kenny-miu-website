import React, { Component } from 'react'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'
import { ReactComponent as GitHubIcon } from '../assets/github.svg';
import { ReactComponent as LinkedInIcon } from '../assets/linkedin.svg';

export default class Social extends Component {
  constructor(props){
    super(props)
    this.fill = this.props.fill
  }
  render() {
    return (
      <ButtonToolbar style={{ filter: 'grayscale(25%)' }}>
        <Button variant="outline-link" href="https://www.github.com/kmiu2/" target={"_blank"}>
          <GitHubIcon 
            fill={this.fill ?? "white"}
            width="30" 
            height="30"
          />
        </Button>
        <Button variant="outline-link" href="https://www.linkedin.com/in/kennymiu/" target={"_blank"}>
          <LinkedInIcon 
            fill={this.fill ?? "white"}
            width="30" 
            height="30"
          />
        </Button>
      </ButtonToolbar>
    )
  }
}
