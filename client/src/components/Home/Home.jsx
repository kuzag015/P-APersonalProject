import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import "./Home.css";

const Home = () => {

  return (
        <div className="container">
            <h1 className="homeTitle">Welcome to Picture Book</h1>
            <h4 className="homeSubTitle">Create a memory below</h4>
            <Link to="/new"><button type="button" class="btn btn-outline-light large">New Post</button></Link> 
        </div>
  )
}

export default Home