import React, {useEffect, useMemo, useState} from 'react';
import Service from "../../API/Service";
import axios from "axios";
import classes from './Movies.module.css'
import MoviesList from "../../components/MoviesList";
import Loader from "../../UI/Loader/Loader";
import MyInput from "../../UI/input/MyInput";
import {useDispatch, useSelector} from "react-redux";

const Movies = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchMovies();
    }, []);

    async function fetchMovies() {
        const response = await Service.getData();
        setMovies([...movies, ...response.data.results]);

    }

    const dispatch = useDispatch();
    const query = useSelector(state => state.query);

    const setQuery = (event) => {
        dispatch({type: 'CHANGE_QUERY', payload: event.target.value})
    }

    const searchingMovies = useMemo(() => {
        return movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));
    }, [query])


    return (
        <div>
            {(!movies.length) ?
                <Loader/>
                :
                <div style={{fontSize: '50px'}}>
                    <MyInput onChange={event => setQuery(event)}></MyInput>
                    <MoviesList movies={searchingMovies} />
                </div>
            }
        </div>
    );
};

export default Movies;