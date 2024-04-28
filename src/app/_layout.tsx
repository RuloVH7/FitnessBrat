{/* This will wrapp up alll the screens from the application */}

import { Stack } from "expo-router";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://shestipery.us-east-a.ibm.stepzen.net/api/existing-hog/graphql',
    cache: new InMemoryCache(),
    headers: {
        "Authorization": 'apikey shestipery::local.net+1000::8872ca0aabd0a1a46eb1a55d2f457dc251b68dfad95a29ee006567beed6f9958'},
  });

const RootLayout = () => {
  return (
    <ApolloProvider client={client}>
        <Stack />
    </ApolloProvider>
  )
}

export default RootLayout

