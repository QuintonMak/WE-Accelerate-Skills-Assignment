import {gql} from 'apollo-server';

const typeDefs = gql`
    type Query {
        movies: [Movie]
        movie(id: ID, name: String): Movie
    }

    type Movie {
        id: ID
        name: String
        director: String
        score: String
        date: String
    }
`;

export default typeDefs;