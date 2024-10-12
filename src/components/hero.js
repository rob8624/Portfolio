import React from 'react'
import '../css/hero.css';

export default function Hero({ heroData, socialsData, activeIndex}) {
    
    
    return (
        <div>
            
               
            
            {heroData.map((items, index) => (
                <div key={items.id} id='flex-wrapper' className={`hero-flex  ${activeIndex !== 0 ? 'collapse' : ' '}`}>
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
                                    <i className="fa-brands fa-facebook social-icon click" onClick={() => window.open(items.Facebook)}></i>
                                    <i className="fa-brands fa-twitter social-icon"></i>
                                    <i className="fa-brands fa-instagram social-icon"></i>
                                    <i className="fa-brands fa-linkedin social-icon "></i>
                                    <i className="fa-brands fa-github social-icon"></i>
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