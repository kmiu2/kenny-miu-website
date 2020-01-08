import React, { Component } from 'react'

import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'

export default class Social extends Component {
    render() {
        return (
            <ButtonToolbar style={{filter: 'grayscale(25%)'}}>
              <Button variant="outline-link" href="https://www.github.com/kmiu2/">
                <img src={require('../assets/github.svg')} width="30" height="30" alt=""/>
              </Button>
              <Button variant="outline-link" href="https://www.linkedin.com/in/kennymiu/">
                <img src={require('../assets/linkedin.svg')} width="30" height="30" alt=""/>
              </Button>
            </ButtonToolbar>
        )
    }
}
