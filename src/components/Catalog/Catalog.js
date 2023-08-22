import React from 'react'
import MovieCard from './MovieCard'
import SubHeader from './SubHeader'

export default function Catalog({movieList, activeUser, rentMovie, balance, setTrandingMovies}) {
    


    let rentedBlock = "" 
    if (activeUser !== undefined) {
        rentedBlock = activeUser.rentedMovies.length>0 ? activeUser.rentedMovies.map((movie) => (<MovieCard movie={movie} rented={true} action={rentMovie} key={movie.id}/>) ): ""
    }
    rentedBlock = rentedBlock=== ""?"":(
        <div>
            <p><h2>Rented</h2></p>
            {rentedBlock}
        </div>
    )


  return (
    <div className='movie-list'>
        <SubHeader balance={balance} setTrandingMovies={setTrandingMovies} activeUser={activeUser} action={rentMovie}/>
        <div className='rented'>{rentedBlock}</div>
        <p><h2>Catalog</h2></p>
        <div className='catalog'>{movieList.map((movie) => (<MovieCard movie={movie} rented={false} action={rentMovie} key={movie.id}/>) )}</div>
    </div>
  )
}
