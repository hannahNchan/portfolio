import React from 'react'

import MenuItems from '../../components/MenuItems';
import Typography from '../../components/Typography';
import SocialNetworks from '../../components/SocialNetworks';

import PHOTO from '../../assets/hannita.jpg';
import './styles.css';

const SideBar = () => {
  return (
    <div className="hannah-sidebar">
      <div className="hannah-sidebar__picProfile">
        <img src={PHOTO} alt="Profile" className="hannah-picProfile"/>
        <div className="hannah-sidebar__titles">
          <Typography component="h1" variant="uppercase" color="white">Hannah Narvaez</Typography>
          <Typography component="h2" color="white">Front-End Web UI Developer</Typography>
        </div>
      </div>
      <div className="hannah-sidebar__itemMenu"><MenuItems /></div>
      <div className="hannah-sidebar__socialNet"><SocialNetworks /></div>
    </div>
  )
}

export default SideBar
