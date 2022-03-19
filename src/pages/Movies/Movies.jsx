import React, {useEffect, useState} from 'react';
import Service from "../../API/Service";
import axios from "axios";
import classes from './Movies.module.css'
import MoviesList from "../../components/MoviesList";

const Movies = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchMovies();
    }, []);

    async function fetchMovies() {
        const response = await Service.getData();
        setMovies([...movies, ...response.data.results]);
    }

    return (
        <div style={{fontSize: '50px'}}>
            {/*<button onClick={fetchMovies}>Загрузить фильмы</button>*/}
            <MoviesList movies={movies} />
        </div>
    );
};

export default Movies;