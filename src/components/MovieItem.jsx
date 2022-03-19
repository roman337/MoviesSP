import React from 'react';
import classes from "../pages/Movies/Movies.module.css";

const MovieItem = (props) => {
    return (
        <div className={classes.movie} key={props.movie.id}>
            <div className='movie__content'>
                {/*<img src="https://image.tmdb.org/t/p/w500/e1mjopzAS2KNsvpbpahQ1a6SkSn.jpg" alt="Идёт загрузка..."/>*/}
                <strong>{props.movie.title }</strong>
                <div>{props.movie.overview}</div>
                <div>Description: {props.movie.release_date}</div>
                <div>Rating: {props.movie.vote_average}</div>
            </div>
        </div>
    );
};

export default MovieItem;