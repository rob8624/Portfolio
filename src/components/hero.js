import React from 'react'
import '../css/hero.css';

export default function Hero({ heroData }) {
    
    return (
        <div>
            {console.log(heroData)}
            {heroData.map((items, index) => (
                <div key={items.id} id="flex-wrapper" className='hero-flex'>
                    <div className='hero-title'>{items.title}</div>
                    <div className="line"></div>
                    <div className='hero-message'>{items.message}</div>
                </div>
            ))}
          </div>
        )
    }