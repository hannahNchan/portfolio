import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const MenuItems = () => {
  return (
    <ul className="hannah-menuitems-list">
      <li className="hannah-menuitems-list__items">
        <Link to="/">Home</Link>
      </li>
      <li className="hannah-menuitems-list__items">
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li className="hannah-menuitems-list__items">
        <Link to="/my-offer">My offer</Link>
      </li>
      <li className="hannah-menuitems-list__items">
        <Link to="/contact-me">Contact me</Link>
      </li>
      <li className="hannah-menuitems-list__items">
        <Link to="/resume">Mi resume</Link>
      </li>
      <li className="hannah-menuitems-list__items">
        <Link to="/blog">Personal Blog</Link>
      </li>
      <li className="hannah-menuitems-list__items">
        <Link to="/creations">Things that I created</Link>
      </li>
    </ul>
  );
};

export default MenuItems;

