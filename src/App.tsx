import React, { useState, useEffect } from 'react'

import { useLazyQuery, useQuery } from '@apollo/react-hooks'

import { Wrapper, Container, SearchInput } from './App.styles'

import { GET_CHARACTERS } from './services/graphql/queries'

import './index.css'
import Cards from './components/cards'

const App: React.FC = () => {
  const [query, setQuery] = useState('')

  const onInputChange = event => {
    setQuery(event.target.value)
  }

  const { data, loading } = useQuery(GET_CHARACTERS, {
    variables: { name: query },
    pollInterval: 500
  })

  console.log(data, loading)

  return (
    <Wrapper>
      <Container>
        <SearchInput value={query} type="search" onChange={onInputChange} />
        {/* {loading ? <p>Loading...</p> : <Cards data={data.characters.results} />} */}
      </Container>
    </Wrapper>
  )
}

export default App
