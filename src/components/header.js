import React from 'react'
import '../css/header.css';
import { useState, useEffect } from 'react';
import { throttle } from 'lodash';

import { Link } from 'react-router-dom'


export default function Header({ headerData, activeIndex }) {
    const [opacity, setOpacity] = useState(1)
    

    
    const handleScroll = throttle(() => {
        const scrollPosition = window.scrollY;
        const newOpacity = Math.max(1 - scrollPosition / 300, 0.2);
        setOpacity(newOpacity);
        
})
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }) 
    


    
    
    
    return (
    <div className='header-wrapper' style={{ opacity }}>
        {headerData.map((items, index) => (
            <div id="header" className='header-flex' key={items.id}>
                <div id="logo-section">
                    <Link to={"/"} style={{ textDecoration: 'none' }}><div className='title-text centre-text'>{items.Title}</div></Link>
                    <div className='subtitle-text centre-text'>{items.Subtitle}</div>
                </div>

                <div id="message-section">
                    <div dangerouslySetInnerHTML={{ __html: items.header_message }}></div>
                </div>
            </div>
        ))}

    </div>
    )
}


