import React from 'react'

import MailIcon from '@material-ui/icons/Mail';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

import './styles.scss';

const SocialNetworks = () => {
  return (
    <div className="hannah-socialnetworks">
      <p>My social networks:</p>
      <ul>
        <li className="hannah-socialnetworks__linkedin">
          <LinkedInIcon />
        </li>
        <li className="hannah-socialnetworks__instagram">
          <InstagramIcon />
        </li>
        <li className="hannah-socialnetworks__gmail">
          <MailIcon />
        </li>
        <li className="hannah-socialnetworks__twitter">
          <TwitterIcon/>
        </li>
        <li className="hannah-socialnetworks__facebook">
          <FacebookIcon/>
        </li>
      </ul>
    </div>
  )
}

export default SocialNetworks;
