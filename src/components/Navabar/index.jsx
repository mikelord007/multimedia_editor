import React from 'react'
import { Link } from 'react-router-dom'
import Soul from '../../assets/Logo/Soulwithoutsoul.png'
import './index.scss'


const Navbar = () => {
  return (
    <div className='navbar'>
      <img className={'navbar__img'} src={Soul} alt="logo" />
            <ul className="navbar__links">
                <Link to="/dashboard" className="navbar__links__link">Home</Link>
                <Link to="/imgeditor" className="navbar__links__link">Edit Images</Link>
            </ul>
    </div>
  )
}

export default Navbar