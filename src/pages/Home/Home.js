import React from 'react'
import './Home.css'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import Logout from "../../components/Logout/Logout";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";


function Home() {
  const navigate = useNavigate();

  return (
    <div className='home'>
      <Logout />
      <Banner />

      <div className='home_section'>
        <Link to="/search" style={{ textDecoration: "none" }}>
          <Card
          // id={1}
            src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
            title="Online Experiences"
            description="Unique activities we can do together, led by a world of hosts."
          />
        </Link>
        <Link to="/search" style={{ textDecoration: "none" }}>
          <Card
          // id={2}
            src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
            title="Unique stays"
            description="Spaces that are more than just a place to sleep."
          />
        </Link>
        <Link to="/search" style={{ textDecoration: "none" }}>
          <Card
          // id={3}
            src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
            title="Entire homes"
            description="Comfortable private places, with room for friends or family."
          />
        </Link>
      </div>

      <div className='home_section'>
        <Link to="/Details" style={{ textDecoration: "none" }}>
          <Card
          // id={4}
            src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
            title="3 Bedroom Flat in Bournemouth"
            description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
            price="£130/night"
          />
        </Link>

        <Link to="/Details" style={{ textDecoration: "none" }}>
        <Card
          src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="£350/night"
        />
      </Link>

      <Link to="/Details" style={{ textDecoration: "none" }}>
      <Card
        src="https://media.nomadicmatt.com/2018/apartment.jpg"
        title="1 Bedroom apartment"
        description="Superhost with great amenities and a fabolous shopping complex nearby"
        price="£70/night"
      />
    </Link>

      </div >
    </div >
  )
}

export default Home