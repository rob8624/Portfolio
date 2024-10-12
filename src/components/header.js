import React from 'react'
import '../css/header.css';


export default function Header({ headerData, activeIndex }) {
    return (
    <div>
        {headerData.map((items, index) => (
            <div id="header" className='header-flex' key={items.id}>
            <div id="logo-section">
                <div className='title-text centre-text'>{items.Title}</div>
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


