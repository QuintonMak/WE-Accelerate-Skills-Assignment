import {ApolloServer} from 'apollo-server';
const {PORT = 3030 } = process.env;
import typeDefs from './typedefs.js';
import resolvers from './resolvers.js';


const server = new ApolloServer({typeDefs, resolvers});

server.listen(PORT)
  .then(({url}) => console.log(`Server is listening at ${url}`));
