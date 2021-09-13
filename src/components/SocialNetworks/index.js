import React from 'react'

import MailIcon from '@material-ui/icons/Mail';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

import './styles.css';

const SocialNetworks = () => {
  return (
    <div className="hannah-socialnetworks">
      <p>My social networks:</p>
      <ul>
        <li><LinkedInIcon /></li>
        <li><InstagramIcon /></li>
        <li><MailIcon /></li>
        <li><TwitterIcon/></li>
        <li><FacebookIcon/></li>
      </ul>
    </div>
  )
}

export default SocialNetworks;
