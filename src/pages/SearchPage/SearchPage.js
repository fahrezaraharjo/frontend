import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './SearchPage.css'
import SearchResult from '../../components/SearchResult/SearchResult'
import { Link, useLocation } from 'react-router-dom'
import { getHotels } from '../../utils/api'



function SearchPage() {
  const location = useLocation();

  const { title } = location.state

  const [data, setData] = useState()

  useEffect(() => {
    getHotels({ title, }).then(data => {
      console.log('data dari backend', data)
      const dataMapping = data.map(item => (
        <Link to={`/Details/${item._id}`} style={{ textDecoration: "none" }} key={item._id}>
          <SearchResult
            photos={item.photos}
            city={item.city}
            title={item.title}
            description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
            star={item.rating}
            cheapestPrice={item.cheapestPrice}
            total="£117 total"
          />
        </Link>
      ))
      setData(dataMapping)
    })
  }, [location]);



  return (
    <div className='searchPage'>
      <div className='searchPage_info'>
        <p>62 stays · 26 august to 30 august · 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant='outlined'>
          Cencellation Flexibility
        </Button>
        <Button variant='outlined'>
          Type of place
        </Button>
        <Button variant='outlined'>
          Price
        </Button>
        <Button variant='outlined'>
          Rooms and beds
        </Button>
        <Button variant='outlined'>
          More filters
        </Button>
      </div>

      {data}
    </div>
  )
}

export default SearchPage