import React, { useState } from 'react'
import './Catalog.css';
import {MOVIE_DB_IMAGE_URL, MOVIE_DB_API_KEY} from '../../Constants'
import { useParams } from 'react-router-dom';

export default function MovieDescription() {
    const {id} = useParams();
    let [movie, setMovie] = useState({})
    async function getMovie(id) {
        let response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${MOVIE_DB_API_KEY}`)
        let data = await response.json()

        setMovie(data)
      }
    getMovie(id)   

    
    return (
      <div className="movie-description">
        <h2>{movie.original_title} ({new Date(movie.release_date).getFullYear()})</h2>
        <img src={MOVIE_DB_IMAGE_URL+movie.poster_path} alt={movie.original_title}></img>
        <p>{movie.overview}</p>
      </div>
    );
  }

