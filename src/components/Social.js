import React, { Component } from 'react'

import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'

export default class Social extends Component {
  render() {
    return (
      <ButtonToolbar style={{ filter: 'grayscale(25%)' }}>
        <Button variant="outline-link" href="https://www.github.com/kmiu2/" target={"_blank"}>
          <img
            src={require('../assets/github.png')}
            style={{
              borderRadius: "50%",
              width: 30,
              height: 30,
            }}
            alt="github"
          />
        </Button>
        <Button variant="outline-link" href="https://www.linkedin.com/in/kennymiu/" target={"_blank"}>
          <img
            src={require('../assets/linkedin.svg')}
            style={{
              borderRadius: "50%",
              width: 30,
              height: 30,
            }}
            alt="linkedin"
          />
        </Button>
      </ButtonToolbar>
    )
  }
}
