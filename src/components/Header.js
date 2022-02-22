import React from 'react'
// import airbnbLogo from '../images/airbnb-logo.png'

export default function Header(props) {
    return (
        <header>
            <nav>
                <img src={`../images/${props.img}`} className="nav--logo"/>
            </nav>
        </header>
    )
}