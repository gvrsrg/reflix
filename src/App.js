import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Header/Navbar';
import { useEffect, useState } from 'react';
import Catalog from './components/Catalog/Catalog';
import MovieDescription from './components/Catalog/MovieDescription';
import Landing from './components/Landing';
import { BEARER } from './Constants';


function App() {
  let [trandingMovies, setTrandingMovies] = useState([])
  let [activeUser, setActiveUser] = useState()
  let [balance, setBalance] = useState(0)

  useEffect(() => {
    async function getSomeMovies() {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: BEARER
        }
      };
      let response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
      let data = await response.json()
      let movies = [...data.results].slice(0, 10);
      movies.forEach(m => { m.rentCost = 3 });
      setTrandingMovies(movies)
    }
    getSomeMovies()
    }, [])

  const chooseUser = function(user){
    setActiveUser(user)
    setBalance(user.balance)
  }

  const rentMovie=function(id) {
    if (activeUser === undefined) {
      return
    }

    const indexInRentedMovies = activeUser.rentedMovies.findIndex(rentedMovie => id === rentedMovie.id);
    let movie = trandingMovies.filter(movie => movie.id === id)[0];
    let newBalance = balance    
    if (indexInRentedMovies === -1) {

      if (newBalance >= movie.rentCost) {
        newBalance -= movie.rentCost;
        activeUser.balance = newBalance;
        activeUser.rentedMovies.push(movie);
        } else {
           alert(`You balance is $${activeUser.balance}, to rent a movie costs $${movie.rentCost}`);
          return;
        }
      } else {
          if (movie===undefined){
            movie = activeUser.rentedMovies.filter(movie => movie.id === id)[0];
          }
          newBalance += movie.rentCost;
          activeUser.balance = newBalance;
          activeUser.rentedMovies.splice(indexInRentedMovies, 1);


    }
    setBalance(newBalance)
    setActiveUser(activeUser);
}

const clearRented = function(){
  let rentedMovies = [...activeUser.rentedMovies]
  let returnBalance = 0
  rentedMovies.forEach(m => returnBalance += m.rentCost)
  activeUser.rentedMovies = []
  setBalance( balance + returnBalance)
  setActiveUser(activeUser);


}


  return (
    <Router>
        <div className="App">
          <Navbar activeUser={activeUser}/>

        </div>
        <Routes>
          <Route path="/" element={<Landing chooseUser={chooseUser}/>} />
          <Route path="/catalog" element={<Catalog clearRented={clearRented} movieList={trandingMovies} activeUser={activeUser} rentMovie={rentMovie} balance={balance} setTrandingMovies={setTrandingMovies}/>} />
          <Route path="/movies/:id" element={<MovieDescription />} />
        </Routes>
    </Router>

  );
}

export default App;
