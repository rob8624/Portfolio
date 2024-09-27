import React from 'react'

export default function Hero({ heroData }) {
    
    return (
    <>
    {
        heroData.map((items, index) => (
            <div key={items.id}>{items.hero_title}</div>
        ))
    }
    </>
    )
}