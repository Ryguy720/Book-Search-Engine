const express = require('express');
const path = require('path');
const db = require('./config/connection');

const { ApolloServer } = require('apollo-server-express')

const { authMiddleWare } = require('./utils/auth')
const { typeDefs, resolvers,  } = require('./schemas');




const app = express();
const PORT = process.env.PORT || 3001;

const startServer = async () => 
{
  console.log("happened")
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleWare
  });
  await server.start();
  console.log("happened2");
  server.applyMiddleware({ app });
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
}

startServer();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}



db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
