import React from 'react'
import { useState, useEffect } from 'react';
import axios from "../axios";
import requests from '../requests';
import "./Banner.css"


const Banner = () => {
    const [movie, setMovie] = useState([]);
    
    useEffect(() => {
      async function fetchData () {
        const request = await axios.get(requests.fetchNetflixOriginals);
        
        const bannerMovie = request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
        ]

        setMovie(bannerMovie);
      
      }
      fetchData();
    }, [])

//   console.log("movie :", movie);
  
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }
    
  return (
    <header className='banner'
        style={{
            
            background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path || ""}") center center`,
            
        }}
    >
        <div className="banner__contents">
     
        <h1> {movie?.name || movie?.title || movie?.original_name } </h1>
        {/* buttons */}
        <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
        </div>
        {/* desc */}
        <div className="banner__description">
            {truncate(movie?.overview, 150)}
        </div>
        </div>
       <div className="banner--fadeBottom"></div>
    </header>
  )
}

export default Banner