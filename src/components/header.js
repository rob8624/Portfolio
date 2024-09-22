import React from 'react'


export default function Header({ headerData }) {
    return (
    <div id="header" className='header-flex'>
        {headerData.map((items, index) =>(
            <>
            <div id="logo-section">
                <div className='title-text centre-text' key={index}>{items.Title}</div>
                <div className='subtitle-text centre-text' key={index}>{items.Subtitle}</div>
            </div>

            <div id="message-section">
                <div dangerouslySetInnerHTML={{ __html: items.header_message }} key={index}></div>
            </div>
            </>
        ))}

        </div>
    
    )
}

