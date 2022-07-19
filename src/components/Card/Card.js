import React, { useEffect, useState } from 'react'
import { getHotels } from '../../utils/api';
import './Card.css'



function Card(props) {
  

  return (
    <div className='card'>
      <img src={props.photos} alt="" />
      <div className='card_info'>
        <h2>{props.id}</h2>
        <h2>{props.title}</h2>
        <h4>{props.description}</h4>
        <h3>{props.cheapestPrice}</h3>
      </div>
    </div>
  )
}

export default Card