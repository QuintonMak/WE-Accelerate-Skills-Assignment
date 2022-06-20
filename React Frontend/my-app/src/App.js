//import logo from './logo.svg';
import React from 'react'
//import ReactDOM from 'react-dom'
import './App.css';
import MovieList from './movieList.js';

function App() {
  return (
    <div className="App">
      <h2>
        <strong>Movie Data Finder</strong>
      </h2>

      <MovieList/>
    </div>
  );
}

export default App;
