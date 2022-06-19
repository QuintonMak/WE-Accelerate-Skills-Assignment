const basePath = "http://localhost:3000";
import fetch from 'node-fetch';
const Query = {
    movies: (parent, args, context, info) => {
        const movies = fetch(`${basePath}/movies`)
                .then((res => res.json()))
                .catch(error => console.error(error));
        return movies;
    },
    movie: (parent, args, context, info) => {
        const {id} = args;

        const movie = fetch(`${basePath}/movies/${id}`)
                        .then(res => res.json())
                        .catch(error => console.error(error));
        return movie;

    }
}

export default {Query};