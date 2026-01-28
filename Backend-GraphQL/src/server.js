const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const sequelize = require('./config/database');
const typeDefs = require('./schema/typeDefs');
const resolvers = require('./resolvers/productoResolver');

async function start() {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();
  server.applyMiddleware({ app });

  await sequelize.sync();
  app.listen(4000, () => console.log('GraphQL en http://localhost:4000/graphql'));
}

start();
