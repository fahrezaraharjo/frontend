import React from 'react';
import './SearchResult.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from "@mui/icons-material/Star";

function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
}) {
    return (
        <div className='searchResult'>
            <FavoriteBorderIcon classname="searchResult_heart" />

            <div className='searchResult_info'>
            <img className='imgSearch' src={img} alt="" />
                <div className='searchResult_infoTop'>
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>
                <div className='searchResult_infoBottom'>
                    <div className='searchResult_stars'>
                        <StarIcon className="searchResult_star" />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className='searchResult_price'>
                        <h2>Rp {price} / Night</h2>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SearchResult