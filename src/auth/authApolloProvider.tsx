import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';

const AuthApolloProvider = ({ children }: { children: React.ReactNode }) => {

  const uploadLink = createUploadLink({
    uri: process.env.REACT_APP_API!,
  });

  const wsLink = new GraphQLWsLink(createClient({
    url: 'ws://localhost:3000/graphql',
    // url: 'http://localhost:3000/graphql',
  }));

  // The split function takes three parameters:
  //
  // * A function that's called for each operation to execute
  // * The Link to use for an operation if the function returns a "truthy" value
  // * The Link to use for an operation if the function returns a "falsy" value
  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink,
    uploadLink,
  );

  const apolloClient = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={apolloClient}>
      {children}
    </ApolloProvider>
  );
};

export default AuthApolloProvider;
