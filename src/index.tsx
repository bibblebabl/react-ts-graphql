import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// apollo
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import config from './config'

const client = new ApolloClient({
  uri: config.apiUrl
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
