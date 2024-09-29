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
                    <div className='hero-message'>
                        <div className='socials-flex'>
                            <div>
                                <button className='socials-item hero-btn'>Projects</button>
                                <i class="fa-solid fa-arrow-down socials-arrow"></i>
                            </div>
                            <div className='socials-icons'>
                                <i class="fa-brands fa-facebook fa-1x"></i>
                                <i class="fa-brands fa-twitter fa-1x"></i>
                                <i class="fa-brands fa-instagram fa-1x"></i>
                                <i class="fa-brands fa-linkedin fa-1x"></i>
                            </div>
                        </div>
                        <div>{items.message}</div>
                    </div>
                </div>
            ))}
          </div>
        )
    }