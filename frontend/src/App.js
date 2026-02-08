import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("http://backend-service:5000/api/movies")
      .then(res => setMovies(res.data));
  }, []);

  return (
    <div className="app">
      <h1>Netflix Clone</h1>
      <div className="movies">
        {movies.map(movie => (
          <div key={movie.id} className="movie">
            <img src={movie.image} alt={movie.title} />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
