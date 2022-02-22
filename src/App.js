import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Card from './components/Card'
import data from './data'

export default function App() {
    const cardData = data.map(card => {
        return (
            <Card
                img={card.coverImg}
                rating={card.stats.rating}
                reviewCount={card.stats.reviewCount}
                location={card.location}
                title={card.title}
                price={card.price}
                star={card.star}
            />
        )    
    });

    return (
        <>
            <Header img="airbnb-logo.png"/>
            <Main />
            <section class="card-section">
                {cardData}
            </section>
        </>
    )
}