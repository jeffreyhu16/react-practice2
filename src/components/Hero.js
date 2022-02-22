import React from 'react'
// import heroPhoto from '../images/photo-grid.png'

export default function Hero(props) {
    return (
        <section className="hero-section">
            <h1 className="hero-title">Online Experiences</h1>
            <p className="hero-desc">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            <img src={`../images/${props.img}`} alt="" className="hero-img"/>
        </section>
    )
}