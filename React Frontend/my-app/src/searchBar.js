import React from 'react'
//import ReactDOM from 'react-dom'
import { useState } from "react";
import SearchResult from './searchResult.js';

function searchBar() {
    const [search, setSearch] = useState("");
    const [display, setDisplay] = useState(<div></div>); // display info of the searched movie
    return (
        <div> 
            <input type='text'
                value={search}
                onChange={(input) => setSearch(input.target.value)}/>
            <span> </span> 
            <button onClick={()  => {
                setDisplay(<SearchResult name={search}/>)
            }}>Search</button>
            {display}
        </div>
        
    )
};

export default searchBar;