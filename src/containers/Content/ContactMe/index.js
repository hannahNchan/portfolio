import React from 'react'
import MailIcon from '@material-ui/icons/Mail';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

import Typography from '../../../components/Typography';

import './styles.scss'; 

const ContactMe = () => {
  return (
    <div className="hannah-contactme">
      <div container item sm={6} xs={12} justify="space-between" direction="column">
        <Typography component="h1" variant="uppercase">Contact me</Typography>
        <Typography component="h2">I'm very glad to collaborate with you</Typography>
      </div>
      <ul className="hannah-contactme__itemList">
        <li className="hannah-contactme__linkedin">
          <LinkedInIcon />
          <a href="https://www.linkedin.com/in/hannah-noelia-narv%C3%A1ez-ju%C3%A1rez-54229b133">LinkedIn</a>
        </li>
        {/*<li className="hannah-contactme__instagram">
          <InstagramIcon />
        </li>*/}
        <li className="hannah-contactme__gmail">
          <MailIcon />
          <a href="https://www.linkedin.com/in/hannah-noelia-narv%C3%A1ez-ju%C3%A1rez-54229b133">e-mail</a>
        </li>
        <li className="hannah-contactme__twitter">
          <TwitterIcon/>
          <a href="https://www.linkedin.com/in/hannah-noelia-narv%C3%A1ez-ju%C3%A1rez-54229b133">Twitter</a>
        </li>
        <li className="hannah-contactme__facebook">
          <FacebookIcon/>
          <a href="https://www.linkedin.com/in/hannah-noelia-narv%C3%A1ez-ju%C3%A1rez-54229b133">Facebook</a>
        </li>
      </ul>
    </div>
  )
}

export default ContactMe
