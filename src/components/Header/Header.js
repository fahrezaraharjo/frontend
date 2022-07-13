import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Company from "../../assets/afv.png"

function Header() {
  const navigate = useNavigate();

  return (
    <div className='header'>
      <Link to="/">
        <img className='header_icon' src={Company} alt='' />

      </Link>

      <div className='header_center'>
        <input type="text" />
        <SearchIcon />
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