import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import { FaSearch } from 'react-icons/fa';
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
    const [searchTerm, setSearchTerm] = useState("Marvel");
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        searchMovies("Marvel");
    }, []);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    };

    return (
        <div className="app">

            <h1>Poster Finder</h1>

            <div className="search">

                <input 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key == 'Enter') {
                        searchMovies(searchTerm);
                    } 
                }}
                placeholder="Search"
                />
                <button onClick={() => searchMovies(searchTerm)}>
                    <FaSearch />
                </button>
                
            </div>


            
            {movies?.length > 0 ? (
                <div className="results">
                    <div className="container">
                        {movies.map((movie) => (
                        <MovieCard movie={movie} />
                        ))}
                    </div>
                </div>
            ) : (
                <div className="empty">
                    <h2>0 results for {searchTerm} </h2>    
                </div>
            )}
    </div>
    );
};

export default App;