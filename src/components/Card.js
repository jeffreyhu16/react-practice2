import React from 'react'
// import star from '../images/star.png'

export default function Card(props) {


    return (
        <div className="card-component">
            <img src={`../images/${props.img}`} className="card-img" />
            <h2 className="card-title">{props.title}</h2>
            <p className="card-price"><strong>From ${props.price}</strong> / person</p>
            <div className="rating">
                <img src={`../images/${props.star}`} className="star-img" />
                <p className="rating-info">5.0 (6) USA</p>
            </div>
        </div>
    )
}