require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { authMiddleware } = require("./utils/auth");
const cors = require("cors");
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
const { createServer } = require("http");
const { SubscriptionServer } = require("subscriptions-transport-ws");
const { execute, subscribe } = require("graphql");

const PORT = process.env.PORT || 3001;
const app = express();
const httpServer = createServer(app);
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
const subServer = SubscriptionServer.create(
  { schema, execute, subscribe },
  {
    server: httpServer,
    path: "/graphql",
  }
);
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
  plugins: [
    {
      async serverWillStart() {
        return {
          async drainServer() {
            subServer.close();
          },
        };
      },
    },
  ],
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

// Serve up static assets
app.use("/images", express.static(path.join(__dirname, "../client/images")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    httpServer.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);
