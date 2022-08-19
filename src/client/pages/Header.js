import React, { Component } from 'react';
import { BrowserRouter ,Routes, Route, Link } from 'react-router-dom';



const Header = () =>
{
 return (
  <><h1> React Router Tutorial </h1>
	<ul className="App-header">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/profile">Profile </Link>
              </li>
              <li>
                <Link to="/post/15?first=david&last=ostrowski">Post </Link>
              </li>



	 </ul>
</>

)}

export default Header;
