import React, { useEffect, useState } from 'react';
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar, Button, Card } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Company from "../../assets/afv.png"
import { useParams } from "react-router-dom";
import { getHotel } from '../../utils/api';

function Header() {
  const navigate = useNavigate();
  let { id } = useParams();
  const [searchTerm, setSearchTerm] = useState("")
  const [item, setItem] = useState({})

  useEffect(() => {
    getHotel(id).then((data) => {
      console.log('ini dari backend', data)
      setItem(data)
    }).catch((err) => {
      console.log('gagal bro', err)
    })
  }, [])

  const submitForm = (event) => {
    event.preventDefault()
    console.log(searchTerm, "ini searchTerm")
    navigate('/search', { state: { title: searchTerm ,cheapestPrice: searchTerm } })
  }

  return (
    <div className='header'>
      <Link to="/">
        <img className='header_icon' src={Company} alt='' />

      </Link>

      <div className='header_center'>
        <form onSubmit={submitForm}>
          <input
            type="search"
            placeholder='search'
            name='searchTerm'
            onChange={event => { setSearchTerm(event.target.value) }}
          />

          <button type="submit"><SearchIcon /></button>
        </form>
      </div>

      <div className='header_right'>
        <Link to="/Admin" style={{ textDecoration: "none" }}>
          <div className="viewButton">Become a guest</div>
        </Link>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Button onClick={() => navigate('/Profile')}>
          <Avatar />
        </Button>
      </div>
    </div>

  )
}

export default Header