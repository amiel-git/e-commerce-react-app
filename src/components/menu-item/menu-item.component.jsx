import React from 'react'
import './menu-item.styles.scss'
import {withRouter} from 'react-router-dom'

const MenuItem = ({title, size, imageUrl, linkUrl, history, match}) => (
    <div className={`${size} menu-item`}>

        <div style={{
            backgroundImage: `url(${imageUrl})`
        }}
        className='background-image'/>
 
        <div className='content'
        onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
            </div> 
        </div>
 
    )

export default withRouter(MenuItem);