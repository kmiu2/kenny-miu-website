import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'
import styled from 'styled-components'
import NavLink from 'react-bootstrap/NavLink';

const Link = styled(NavLink)`     
    background: transparent;
    color: inherit;
    &:hover {
        color: #8eb0e8;
    }
`

export default class Part extends Component {
    constructor(props) {
        super(props)

        this.link = this.props.link
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
                fontFamily: 'Helvetica',
                textAlign: 'center',
                height: '100%'
            }}>
                <p style={{
                    fontSize: '1.2rem',
                    fontStyle: 'italic'
                }}>{this.date}</p>
                <br />
                {this.link !== '' ? 
                    <Link href={this.link} target={"_blank"}>
                    <h1 style={{
                        fontSize: 'auto',
                        fontWeight: '350',
                    }}>{this.title}</h1></Link>
                    :
                    <h1 style={{
                        fontSize: 'auto',
                        fontWeight: '350',
                    }}>{this.title}</h1>}
                <br />
                {this.location !== "" ? <h3>{this.location}</h3> : null}
                {this.img !== undefined ? <Image src={require(`../assets/${this.img}`)} rounded fluid width="60%"/> : null}
                <br />
                <br />
                {this.sub !== "" ? <h4><b>{this.sub}</b></h4> : null}
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
