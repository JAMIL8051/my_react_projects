import {useEffect, React, useState} from 'react'
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

// OMDB API key--> 5eeae8d1

const API_URL = 'http://www.omdbapi.com?apikey=5eeae8d1'




// Main functional component!!!
const App = () =>
{ 
    const [movies, setMovies] = useState([]);  
    const [searchTerm, setSearchTerm] = useState('');

    const searchMoives = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
        //console.log(data);
        // for (var i = 0; i < 10; i++)
        // {
        //     console.log(data.Search[i].Title);
        // }
    };

    useEffect(() => {
        searchMoives('Spiderman');

    },[]);

    // const movie1 = {
    //     "Title": "Amazing Spiderman Syndrome",
    //     "Year": "2012",
    //     "imdbID": "tt2586634",
    //     "Type": "movie",
    //     "Poster": "N/A"
    // }
    return (
        <div className='app'>
            <h1>My React MovieLand</h1>
            <div className='search'>
                <input
                placeholder='Search for movies'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value) } />
                <img
                src={SearchIcon}
                alt='search'
                onClick={() => searchMoives(searchTerm) } />
            </div>
            {movies.length > 0 ? (<div className='container'>{movies.map((movie) =>(<MovieCard movie={movie} />) )}</div>) : (<div className='empty'><h2>No movies found</h2></div>)


            }
        </div>  
    );
};

export default App;