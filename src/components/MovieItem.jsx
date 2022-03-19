import React from 'react';
import classes from "../pages/Movies/Movies.module.css";

const MovieItem = (props) => {
    return (
        <div className={classes.movie} key={props.movie.id}>
            <div className='movie__content'>
                <strong>{props.movie.title }</strong>
                <div>{props.movie.overview}</div>
                <div>Description: {props.movie.release_date}</div>
                <div>Rating: {props.movie.vote_average}</div>
            </div>
        </div>
    );
};

export default MovieItem;