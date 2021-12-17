import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import jwtDecode from "jwt-decode";
import GlobalStyle from "./Styles/gloabalStyle";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  makeVar,
  createHttpLink,
} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";
import {AUTH_TOKEN} from "./utils/AuthSecrete";

export const user = makeVar(null);
const httpLink = createHttpLink({
  uri: "https://healthcarebackenddemo.herokuapp.com/graphql",
});
const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem("AUTH_TOKEN");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      isLogged: {
        fields: {
          user: {
            read() {
              return user();
            },
          },
        },
      },
    },
  }),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyle />
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
