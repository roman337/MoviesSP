import {useMemo} from "react";

export const useMovies = (movies, query) => {
    const searchingMovies = useMemo(() => {
        return movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));
    }, [query])

    return searchingMovies;
}