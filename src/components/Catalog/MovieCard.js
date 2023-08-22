import React from 'react'
import './Catalog.css';
import {MOVIE_DB_IMAGE_URL} from '../../Constants'
import { Link } from 'react-router-dom';
import RentButton from './RentButton';

export default function MovieCard({movie, rented, action}) {

    
    return (
        <div className="movie-card" key={movie.id} style={{ backgroundImage: `url(${MOVIE_DB_IMAGE_URL+movie.poster_path})` }}>
            <RentButton rent={!rented} action={action} id={movie.id}/>
            <Link to={"/movies/"+movie.id}>
                <h2>{movie.original_title}</h2>
            </Link>
      </div>
    );
  }

