import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Service from "../../API/Service";
import classes from "./MoveIdPage.module.css";
import MyButton from "../../UI/button/MyButton";
import {useNavigate} from "react-router";

const MovieIdPage = () => {
    const params = useParams();
    const router = useNavigate();
    const [movie, setMovie] = useState([]);

    async function getMovie() {
        const response = await Service.getMovieById(params.id);
        setMovie(response.data);
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
            <div>
                <MyButton style={{marginTop: '15px', marginLeft: '400px'}} onClick={() => router('/movies')}>Назад</MyButton>
            </div>
        </div>
    );
};

export default MovieIdPage;