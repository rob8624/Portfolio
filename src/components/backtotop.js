import React from 'react'
import { useEffect } from 'react';

import '../css/backToTop.css';



export default function BackToTop() {

    useEffect(() => {
        const button = document.getElementById('backToTop');

        const handleScroll = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 ) {
             button.classList.add('show');
            } else {
                button.classList.remove('show');
            }
        }

        const handleClick = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }

        window.addEventListener('scroll', handleScroll)
        button.addEventListener('click', handleClick)



        return () => {
            window.removeEventListener('scroll', handleScroll);
            button.removeEventListener('click', handleClick); 
          };


    }, [])

    
    return (
        
        
        <button id="backToTop" className='back-top-btn'>
        <i class="fa-regular fa-circle-up"></i> Scroll to top</button>
        
    )
}