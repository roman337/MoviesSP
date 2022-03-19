import React, {useState} from 'react';
import Service from "../../API/Service";
import axios from "axios";
import classes from './Movies.module.css'
import MoviesList from "../../components/MoviesList";

const Movies = () => {

    const response = Service.getData();
    const [movies, setMovies] = useState([
        // { title: 'Aquaman', overview: "Overview Aquaman", release_date: '2020-02-02', vote_average: 9.3}
    ]);
    // response
    //     .then(resp => {
    //         console.log(resp.data.results);
    //         setMovies(resp.data.results);
    //         // movies.push(resp.data.results);
    //         console.log(movies);
    //
    //     })
    //     .catch(error => {
    //         console.log('ошибка!: ' + error);
    //     })
    //

    async function fetchMovies() {
        const response = await axios.get(' https://api.themoviedb.org/3/movie/popular?api_key=5f81dd9c090f679cd5704b0e1c0f59b2&language=en-US&page=1');
        console.log(response.data.results);
        setMovies([...movies, ...response.data.results]);
        console.log(movies);
    }
    return (
        <div style={{fontSize: '50px'}}>
            <button onClick={fetchMovies}>Загрузить фильмы</button>
            <MoviesList movies={movies} />
        </div>
    );
};

export default Movies;