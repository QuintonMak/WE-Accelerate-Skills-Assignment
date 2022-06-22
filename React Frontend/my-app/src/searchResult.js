import React from 'react'
//import ReactDOM from 'react-dom'
import { useState } from "react";
// GraphQL stuff from this tutorial: https://www.apollographql.com/docs/react/data/queries/
import {gql, useQuery} from '@apollo/client';

function searchResult ({name}) {

    if (!name) {
        return <div></div>
    }

    const query = gql`
    query Query($name: String){
        movie(name: $name) {
            name
            director
            date
            score
        }
    }`;
    const {loading, error, data} = useQuery(query, {variables: {name}});
    if (loading) return <pre>Loading...</pre>;
    if (error) return <pre>{error.message}</pre>
    
    console.log(data.movie);

    // if the movie doesn't exist
    if (!data.movie.name) {
        return <div>This movie doesn't exist in the database (make sure the capitalization is correct). </div>
    }

    return (
    <div>
        <ul>
            <li>Title: {data.movie.name}</li>
            <li>Release Date: {data.movie.date}</li>
            <li>Director: {data.movie.director}</li>
            <li>Rotten Tomatoes Score: {data.movie.score}</li>
        </ul>  
    </div>
    );
};

export default searchResult;