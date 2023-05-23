import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import datasource from "./utils";
import { buildSchema } from "type-graphql";
import { PaysResolver } from "./resolvers/PaysResolver";

const PORT = 5000

async function bootstrap(): Promise<void> {
  // ... Building schema here
  const schema = await buildSchema({
    resolvers: [PaysResolver],
  });

  // Create the GraphQL server
  const server = new ApolloServer({
    schema,
    cors: true,
  });

  // Start the server
  const { url } = await server.listen(PORT);
  console.log(`Server is running, GraphQL Playground available at ${url}`);

  try {
    await datasource.initialize();
    console.log("I'm connected!");
  } catch (err) {
    console.log("Too bad");
    console.error(err);
  }
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
