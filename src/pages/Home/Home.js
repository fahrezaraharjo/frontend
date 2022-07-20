import React, { useEffect, useState } from 'react'
import './Home.css'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import Logout from "../../components/Logout/Logout";
import { Link } from "react-router-dom";
import { getHotels } from '../../utils/api';


function Home() {

  const [data, setData] = useState();
  useEffect(() => {
    getHotels().then(data => {
      const dataMapping = data.map(item => (
        <Link key={item._id} className='link_home' to={`/details/${item._id}`} style={{ textDecoration: "none" }}>
          <Card
            photos={item.photos[0]}
            title={item.title}
            cheapestPrice={item.cheapestPrice}
            rating={item.rating}
          />
        </Link>
      ))
      setData(dataMapping)
    })
  }, []);

  return (
    <div className='home'>
      <Logout />
      <Banner />

      <div className='home_section'>
        {data}
      </div>

      
    </div >
  )
}

export default Home