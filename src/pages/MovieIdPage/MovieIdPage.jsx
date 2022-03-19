import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Service from "../../API/Service";
import classes from "./MoveIdPage.module.css";

const MovieIdPage = () => {
    const params = useParams();
    const [movie, setMovie] = useState([]);
    const [counties, setCountries] = useState([]);

    async function getMovie() {
        const response = await Service.getMovieById(params.id);
        console.log(response.data);
        setMovie(response.data);
        setCountries(response.data.production_countries);
        // counties.push(movie.production_countries);
        console.log(counties);
    }

    useEffect(() => {
        getMovie();
    }, [])

    return (
        <div>
            <div className={classes.items}>
                <div className={classes.item}>Название: {movie.title} </div>
                {/*<div>Жанр: {*/}
                {/*    movie.genres.map(genre =>*/}
                {/*        <div>{genre.name} </div>*/}
                {/*    )}*/}
                {/*</div>*/}
                <div>Ограничение по возрасту: {movie.adult ? 'Да' : 'Нет'}</div>
                <div>Бюджет: ${movie.budget}</div>
                <div>Рейтинг: {movie.vote_average}</div>
                <div>Дата выхода: {movie.release_date}</div>
                <div>Длительность: {movie.runtime} минут</div>
            </div>
        </div>
    );
};

export default MovieIdPage;