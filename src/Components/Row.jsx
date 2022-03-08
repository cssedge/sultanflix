import React from 'react'
import { useState, useEffect } from 'react/cjs/react.development'
import axios from "../axios";
import "./Row.css";

import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';

const posterUrl ="https://image.tmdb.org/t/p/original";

const Row = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setmovies] = useState([]);

    const [trailerUrl, setTrailerUrl] = useState("");
    
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            // console.log(request.data.results);
            setmovies(request.data.results);
            return request;
       }
       fetchData();

    }, [fetchUrl])
    
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay:1,
        }
    }

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('')
        } else {
            movieTrailer(movie?.name || movie.title || movie.orginal_name )
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            }).catch(error => console.log(error));
        }
    }

  return (
  
       
       
        <div className="row">
            {/* title */}
            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map(movie => (
                    <img
                    key={movie.id} 
                    className={`row__poster ${isLargeRow ? "row__posterLarge" : ""}`} 
                    src={`${posterUrl}${isLargeRow? movie?.poster_path : movie?.backdrop_path}`} 
                    alt={movie.name} 

                    onClick={()=> handleClick(movie)}
                    />
                ))}
            </div>
            

          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} /> }  
        </div>

  
  )
}

export default Row