import React, {useEffect, useMemo, useState} from 'react';
import Service from "../../API/Service";
import axios from "axios";
import classes from './Movies.module.css'
import MoviesList from "../../components/MoviesList";
import Loader from "../../UI/Loader/Loader";
import MyInput from "../../UI/input/MyInput";
import {useDispatch, useSelector} from "react-redux";
import {useMovies} from "../../hooks/useMovies";
import {setQueryAction} from "../../store/queryReducer";


const Movies = () => {
    const [movies, setMovies] = useState([]);

    const dispatch = useDispatch();
    const query = useSelector(state => state.query);

    const searchingMovies = useMovies(movies, query);

    async function fetchMovies() {
        const response = await Service.getData();
        setMovies([...movies, ...response.data.results]);
    }

    const setQuery = (event) => {
        // dispatch({type: 'SET_QUERY', payload: event.target.value})
        dispatch(setQueryAction(event.target.value));
    }

    useEffect(() => {
        fetchMovies()
    }, []);

    return (
        <div>
            {(!movies.length) ?
                <Loader/>
                :
                <div style={{fontSize: '50px'}}>
                    <MyInput style={{marginLeft: '200px'}} onChange={event => setQuery(event)} placeholder='Поиск по названию...' alt=' '/>
                    <MoviesList movies={searchingMovies} />
                </div>
            }
        </div>
    );
};

export default Movies;