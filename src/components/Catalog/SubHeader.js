import React, { useEffect, useState } from 'react'
import { BEARER, MOVIE_DB_API_KEY, MOVIE_DB_SEARCH_URL } from '../../Constants'

export default function SubHeader({clearRented, balance, setTrandingMovies, activeUser, action}) {
    const [searchText, setSearchText] = useState('')





    async function getMovies() {
        if (searchText==="") {
            return
        }

        clearRented()

        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: BEARER
            }
          };
        let response = await fetch(MOVIE_DB_SEARCH_URL+`?query=${searchText}&include_adult=false&language=en-US&page=1`, options)
        let data = await response.json()
        let movies = [...data.results].slice(0, 10);
        movies.forEach(m => { m.rentCost = 3 });
        setTrandingMovies(movies)        
    }

    useEffect(() => {
        const delaySearch = setTimeout(() => {
            getMovies()

        }, 2000)
    
        return () => clearTimeout(delaySearch)
      }, [searchText])


  return (
    <div>
    <input
      autoFocus
      type='text'
      autoComplete='off'
      className='live-search-field'
      placeholder='Search movie...'
      onChange={(e) => setSearchText(e.target.value)}
    />
    Balance=${balance}
    </div>
  )
}
