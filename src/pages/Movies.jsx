import React, {useState} from 'react';
import Service from "../API/Service";
import axios from "axios";

const Movies = () => {

    const response = Service.getData();
    const [movies, setMovies] = useState([]);
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
        // response.then(resp => {
        //     console.log(resp.data.results);
        // })
        console.log(response.data.results);
        setMovies([...movies, ...response.data.results]);
        console.log(movies);
    }
    return (
        <div style={{fontSize: '50px'}}>
            <button onClick={fetchMovies}>Загрузить фильмы</button>
            {/*<h1> {movies[0].title || 'rerer'} </h1>*/}
        </div>
    );
};

export default Movies;