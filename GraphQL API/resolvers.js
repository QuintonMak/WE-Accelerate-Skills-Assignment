const basePath = "http://localhost:3000";
import fetch from 'node-fetch';
const Query = {
    movies: (parent, args, context, info) => {
        const movies = fetch(`${basePath}/movies`)
                .then((res => res.json()))
                .catch(error => console.error(error));
        return movies;
    },

    // can query a movie based on id or name
    movie: (parent, args, context, info) => {
        const {id, name} = args;
        if (id) {
            return fetch(`${basePath}/movies?id=${id}`)
            .then(res => res.json())
            .catch(error => console.error(error));
        } else if (name) {
            return fetch(`${basePath}/movies/?name=${name}`)
            .then(res => res.json())
            .catch(error => console.error(error));
        }
        return null;

    }
}

export default {Query};