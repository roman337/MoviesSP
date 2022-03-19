import Main from "../pages/Main";
import Login from "../pages/Login";
import Error from "../pages/Error";
import Movies from "../pages/Movies/Movies";
import Profile from "../pages/Profile";
import MovieIdPage from "../pages/MovieIdPage/MovieIdPage";

export const publicRoutes = [
    {path: '/', element: Main, exact: false },
    {path: '/login', element: Login, exact: false },
    {path: '/profile', element: Login, exact: false },
    {path: '/*', element: Error, exact: false },
]

export const privateRoutes = [
    {path: '/movies', element: Movies, exact: false},
    {path: '/movies/:id', element: MovieIdPage, exact: false},
    {path: '/profile', element: Profile, exact: false},

]