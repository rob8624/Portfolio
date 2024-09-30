import React from 'react'
import '../css/hero.css';

export default function Hero({ heroData, socialsData,}) {
    
    
    return (
        <div>
            
               
            
            {heroData.map((items, index) => (
                <div key={items.id} id="flex-wrapper" className='hero-flex'>
                    <div className='hero-title' >{items.title}</div>
                    <div className="line"></div>
                    <div className='hero-message'>
                        <div className='socials-flex'>
                            <div>
                                <button className='socials-item hero-btn'>Projects</button>
                                <i className="fa-solid fa-arrow-down socials-arrow"></i>
                            </div>
                            
                                { socialsData.map((items, index) => (
                                <div className='socials-icons' key={items.id}>
                                    <i className="fa-brands fa-facebook fa-2x click" onClick={() => window.open(items.Facebook)}></i>
                                    <i className="fa-brands fa-twitter fa-2x"></i>
                                    <i className="fa-brands fa-instagram fa-2x"></i>
                                    <i className="fa-brands fa-linkedin fa-2x"></i>
                                    <i className="fa-brands fa-github fa-2x"></i>
                                </div>
                                    ))}
                            
                        </div>
                        <div className='hero-message-text'>{items.message}</div>
                    </div>
                </div>
            ))}
          </div>
        )
    }