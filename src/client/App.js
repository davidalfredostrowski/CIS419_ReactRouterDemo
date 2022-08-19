import React, { Component } from 'react';
import { BrowserRouter ,Routes, Route, Link } from 'react-router-dom';

import Header from  './pages/Header';
import Home from    './pages/Home';
import About from   './pages/About';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Post from    './pages/Post';
//import './App.css';
  
function App() {
    return (

	  <BrowserRouter>
           <div className="App">
                 <Header />
	    </div>

	    <Routes> 
	        <Route  path='/' element={< Home />}></Route>
                <Route exact path='/about' element={< About />}></Route>
       		<Route exact path='/contact' element={< Contact />}></Route>
       		<Route exact path='/profile' element={< Profile />}></Route>
         	     <Route exact path='/post/:id' element={< Post />}></Route>



	    </Routes>

       </BrowserRouter>
   );
}
  
export default App;
