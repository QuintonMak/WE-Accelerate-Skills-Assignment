import React from 'react'
//import ReactDOM from 'react-dom'
import { useState, useEffect } from "react";
import Movie from './movie.js';
// GraphQL stuff from this tutorial: https://www.apollographql.com/docs/react/data/queries/
import {gql, useQuery} from '@apollo/client';



function MovieList(props) {
    // List of movie data for each movie
    //const [movies, setMovies] = useState([]);


    const query = gql`
    {
        movies {
            id
            name
            director
            date
            score
        }
    }`;
    
    const {loading, error, data} = useQuery(query);
    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>
    console.log(data);
    //setMovies(data.movies);
    const movies = data.movies;

    // Fetch returns 400 error, idk why. Decided to use useQuery instead.
    /*
    useEffect(() => {
        fetch('http://localhost:3030', {method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json',
                                        },
                                        body: JSON.stringify(query)})
        .then(data => data.json())
        .then(data => setMovies(data.movies))
        .catch(error => console.error(error));
    }, [])
    */
        

    return (
        <div>
            {movies.map(movieData => <Movie {...movieData} key={movieData.id}/>)}
        </div>
    );
};

export default MovieList;