import React from 'react'
import '../css/hero.css';

export default function Hero({ heroData, socialsData }) {
    
    return (
        <div>
            {console.log(heroData)}
            {console.log(socialsData)}
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
                            
                                { socialsData.map((items, index) => (
                                <div className='socials-icons' key={items.id}>
                                    <i className="fa-brands fa-facebook fa-1x click" onClick={() => window.open(items.Facebook)}></i>
                                    <i className="fa-brands fa-twitter fa-1x"></i>
                                    <i className="fa-brands fa-instagram fa-1x"></i>
                                    <i className="fa-brands fa-linkedin fa-1x"></i>
                                </div>
                                    ))}
                            
                        </div>
                        <div>{items.message}</div>
                    </div>
                </div>
            ))}
          </div>
        )
    }