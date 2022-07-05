const { ApolloServer } = require ('apollo-server-koa');
const { ApolloServerPluginDrainHttpServer } = require ('apollo-server-core');
const Koa = require ('koa');
const http = require ('http');
const _ = require('underscore');
const typeDefs = require("./schema/typeDefs");
const resolvers = require("./schema/resolvers");

async function startApolloServer(typeDefs, resolvers) {
  try {
    const httpServer = http.createServer();
    const server = new ApolloServer({
      typeDefs ,
      resolvers,
      csrfPrevention: true,
      cache: 'bounded',
      plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });
    
    await server.start();
    const app = new Koa();
    server.applyMiddleware({ app });
    httpServer.on('request', app.callback());
    await new Promise(resolve => httpServer.listen({ port: 3000 }, resolve));
    console.log(`Server ready at http://localhost:3000${server.graphqlPath}`);
    return { server, app };
    
  } catch (error) {
    console.log(error);
  }
  
}

startApolloServer(typeDefs.typeDefs, resolvers.resolvers)
// module.exports = {
//     startApolloServer
// }