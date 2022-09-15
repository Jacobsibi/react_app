import  { useEffect }  from 'react';
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';
{/* */}
{/* key: 1d859fa6 */}
//calling API
const API_URL = 'http://www.omdbapi.com?apikey=1d859fa6';

const movie1 = {
    "Title": "The Dark Knight",
    "Year": "2008",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg"
}

const App = () => {
  //async = asynchronous data (takes time to fetch this data)
  //accepts movie title to search by
  const searchMovies = async (title) => {
    // (``) = template string (backticks)
    // (`${}`) = dynamically specify API_URL & title
    // this will call the API
    const response = await fetch(`${API_URL}&s=${title}`);
    //retrieve data 
    const data = await response.json();
    console.log(data.Search);
  }
  useEffect(() => {
    //call function which will fetch movies
    searchMovies('The Dark Knight');
  }, []);

  return (
    //begin JSX code for App, className in jsx, class in html
    <div className="app">
      <h1>MovieMania</h1>

      <div className="search">  
        <input 
          placeholder="Search for movies"
          //statically set value to The Dark Knight (can't change it)
          value="The Dark Knight"
          //inorder to change search value, onChange with call back function
          onChange={() => {}}
        />
        <img 
          src={SearchIcon}
          //every image needs alt tag for screen readers
          alt="search"
          onClick={() => {}}
        />
      </div>
      <div className="container">
        <MovieCard movie1={movie1}/>
      </div>
    </div>
  );
}

//export every component to be able to call it
export default App;
