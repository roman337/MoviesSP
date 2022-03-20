import React, {useEffect, useState} from 'react';
import Service from "../../API/Service";
import axios from "axios";
import classes from './Movies.module.css'
import MoviesList from "../../components/MoviesList";
import Loader from "../../UI/Loader/Loader";

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
        <div>
            {(!movies.length) ?
                <Loader/>
                :
                <div style={{fontSize: '50px'}}>
                    <MoviesList movies={movies} />
                </div>
            }
        </div>
    );
};

export default Movies;