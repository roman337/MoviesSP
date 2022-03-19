import axios from "axios";

export default class Service {
    static async getData() {
        const response = await axios.get(' https://api.themoviedb.org/3/movie/popular?api_key=5f81dd9c090f679cd5704b0e1c0f59b2&language=en-US&page=1');
        return response;
    }
}