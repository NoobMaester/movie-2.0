
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import Heading from './components/Heading';
import SearchBox from './components/SearchBox';

function App() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [fave, setFave] = useState([]);

  const getMovies = async (search) => {

    const res = await fetch(`http://www.omdbapi.com/?s=${search}&apikey=9f170193`);

    const data = await res.json();

    console.log(data.Search);

    if(data.Search){
      setMovies(data.Search)
    }
  };

  useEffect(() => {
    getMovies(search);
  }, [search])

  const addFave = (movie) => {
    const newFave = [...fave, movie];
    setFave(newFave);
  };

  return (
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <Heading heading='Movies'/>
        <SearchBox search={search} setSearch={setSearch} />
      </div>

      <div className='slide'>
        <MovieList movies = {movies} handleAdd = {addFave}/>
      </div>
      <Heading heading='Favorites'/>
      <div className='slide'>
        <MovieList movies={fave}/>
      </div>
    </div>
  );
}

export default App;
