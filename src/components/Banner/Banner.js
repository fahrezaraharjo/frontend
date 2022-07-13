import React, { useState } from 'react'
import './Banner.css'
import { Button } from "@mui/material"
import Search from '../Search/Search';
import { useNavigate } from 'react-router-dom';

function Banner() {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className='banner'>
      <div className='banner_search'>{showSearch && <Search />}
        <Button onClick={() => setShowSearch(!showSearch)} className='banner_searchButton' 
        variant='uotlined'>{showSearch ? "Hide" : "Search Dates"}</Button>
      </div>
      <div className='banner_info'>
        <h1>Get out and stretch your imagination</h1>
        <h5>Plan a different kind  of gataway to uncover the hidden gems near you.</h5>
        <Button onClick={() => navigate('/search')} variant='outlined'>Explore Nearby</Button>
      </div>
    </div>
  )
}

export default Banner