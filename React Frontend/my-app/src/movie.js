import React from 'react'
//import ReactDOM from 'react-dom'
import { useState } from 'react';

function Movie(props) {

    const [data, setData] = useState(<div></div>);

    const showMoreData = () => {
        setData (
            <div>
                <ul>
                    <li>Release Date: {props.date}</li>
                    <li>Director: {props.director}</li>
                    <li>Rotten Tomatoes Score: {props.score}</li>
                    <img src={"images/" + props.id + ".jpg"} alt={ "The movie is " + props.name}/>
                </ul>
            </div>
        );
    }

    return (
        <div>
            <h3>{props.name}
                <span> </span>
             <button onClick={showMoreData}>More Info</button>
            </h3>
            {data}
        </div>
    );
};

export default Movie;
