import { useState } from "react";


function MoviesList() {
    const [movies, setMovies] = useState(["E.T", "Jaws", "The Avengers", "Finding Nemo"]); 
    const [summaries, setSummaries] = useState(["A young boy helps an Alien evade the government to get back home",
      "A killer shark attacks at a beach resort", "A group of superheroes battle against a villian trying to take over the world", 
      "An overprotective clownfish travels across the ocean to save his only son"])
      
    const [showSum, setShowSum] = useState([false, false, false, false]);
    const [showMovies, setShowMovies] = useState(false)

    const handleMovieClick = (index) => {
      setShowSum([...showSum.slice(0,index),!showSum[index],...showSum.slice(index + 1)])
    }

    const removeMovie = (index) => {
      const newList = [...movies.slice(0,index), ...movies.slice(index + 1)];
      setMovies(newList);
    }

    const handleToggle = () => {
      setShowMovies(!showMovies);
    }


    return (
        <div>
         
          <button onClick={handleToggle}>{showMovies ? 'Show All Movies' : 'Action Movies' }</button>
          <ul>{showMovies ? [movies.slice(1,3).join(', ')] : ''}</ul>
          <ul>
            {movies.map((movie, index) => (
              <div>
              <li key={index}>{movie} - { <button onClick={() => handleMovieClick(index)}>Show Summary</button> } {<button onClick={() => removeMovie(index)}>Remove</button>}</li>
              <p>{showSum[index] ? summaries[index] : ''}</p></div>
            ))}
          </ul>
        </div>
      );
}


export default MoviesList;

