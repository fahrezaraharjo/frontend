import React from 'react'
import './Card.css'
import StarIcon from "@mui/icons-material/Star";



function Card(props) {


  return (
    <div className='card'>
      <img src={props.photos} alt="" />
      <div className='card_info'>
        <h2>{props.id}</h2>
        <h2>{props.title}</h2>
        <h4>{props.description}</h4>
        <h3>Rp {props.cheapestPrice} / Night</h3>
        <div className='searchResult_infoBottom'>
          <div className='searchResult_stars'>
            <p><StarIcon className="searchResult_star">
            </StarIcon>
              {props.rating}
            </p>

          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Card