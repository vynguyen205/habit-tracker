const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const routes = require('./routes');
const chalk = require('chalk');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3008;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);

if (process.env.NODE_ENV === 'production') {
  console.log("production");
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(chalk.green.bold.italic(`🌎 API server running http://localhost:${PORT} 🌎`));
      console.log(chalk.green.bold.italic(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`));
    })
  })
  };
  
  // Call the async function to start the server
  startApolloServer(typeDefs, resolvers);
