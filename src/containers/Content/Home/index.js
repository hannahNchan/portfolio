import React from 'react'
import { Link } from "react-router-dom";

import './styles.scss';
import PHOTO_BG from '../../../assets/space.jpg';

const Home = () => {
  return (
    <div 
      style={{ backgroundImage: `url(${PHOTO_BG})` }}
      className="hannah-home"
    >
      <div className="container">
        <div className="box">
          <div className="title">
            <span className="block"></span>
            <h1>Hannah Narvaez<span></span></h1>
          </div>
          <div className="role">
            <div className="block"></div>
            <p>Full-Stack Web developer</p>
          </div>
        </div>
      </div>
        <Link to="/blog">
          <footer>
            <div class="texto">
              <span>Watch my Blog</span>
            </div>
          </footer>
       </Link>
    </div>
  )
}

export default Home
