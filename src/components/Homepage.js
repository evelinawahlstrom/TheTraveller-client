import React from 'react'
import travel from '../images/travel.gif'

export default function Homepage() {
    return (
        <div>
        <img 
        className='globe'
        align='middle'
        src={travel}
        alt='travel'>
        </img>
        </div>
    )
}
