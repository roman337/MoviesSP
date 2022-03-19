import React from 'react';
import classes from "../pages/Movies/Movies.module.css";
import MovieItem from "./MovieItem";

const MoviesList = ({movies}) => {
    return (
        <div>
            {
                movies.map(movie =>
                    <MovieItem
                        movie={movie}
                        key={movie.id}
                    />
                )}
        </div>
    )};

export default MoviesList;