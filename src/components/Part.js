import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'

export default class Part extends Component {
    constructor(props) {
        super(props)

        this.link = this.props.link
        this.img = this.props.img
        this.title = this.props.title
        this.location = this.props.location
        this.tools = this.props.tools
        this.desc = this.props.desc
    }
    render() {
        return (
            <div>
            <Jumbotron style={{
                backgroundColor: 'rgba(255,255,255,0.8)',
                fontFamily: 'Helvetica',
                textAlign: 'center',
                height: '1300px',
                marginLeft: '-20px',
                marginRight: '-20px'
            }}>
                <a href={this.link} style={{textDecoration: 'none', color: 'inherit'}}>
                <h1 style={{
                    fontSize: '3.5rem',
                    fontWeight: '350',
                }}>{this.title}</h1></a>
                <br />
                <h3>{this.location}</h3>
                <Image src={require(`../assets/${this.img}`)} rounded fluid width="60%"/>
                <br />
                <br />
                <h4><b>Tools: {this.tools}</b></h4>
                <br />
                <p style={{
                    fontSize: '1.5rem',
                    fontWeight: '200',
                }}>{this.desc}</p>
            </Jumbotron>
            </div>
        )
    }
}
