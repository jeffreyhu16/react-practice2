import React from 'react'
import data from '../data'

export default function Card(props) {
    // const { openSpots, location, img, title, price, star } = props;

    // console.log(openSpots);

    let stockQuant = '';
    if (!props.openSpots) {
        stockQuant = 'SOLD OUT'
    } else if (props.location === 'Online') {
        stockQuant = 'ONLINE'
    }

    return (
        <div className="card-component">
            {stockQuant && <div className="card-badge">{stockQuant}</div>}
            <img src={`../images/${props.coverImg}`} className="card-img" />
            <h2 className="card-title">{props.title}</h2>
            <p className="card-price"><strong>From {props.price}</strong> / person</p>
            <div className="rating">
                <img src={`../images/${props.star}`} className="star-img" />
                <p className="rating-info">5.0 (6) USA</p>
            </div>
        </div>
    )
}