'use client';

import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink} from "@apollo/client"

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_A2IMCMS_API_GQL_URL}`
});
const client = new ApolloClient({
  cache,
  link
});

export default client;

export function Providers({ children }) {
  return (
    <ApolloProvider client={client}>
        {children}
        </ApolloProvider>
  );
}