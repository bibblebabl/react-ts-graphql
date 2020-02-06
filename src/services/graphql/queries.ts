import { gql } from 'apollo-boost'

const GET_CHARACTERS = gql`
  query Characters($name: String!) {
    characters(page: 2, filter: { name: $name }) {
      info {
        count
      }
      results {
        id
        name
        image
      }
    }
  }
`

export { GET_CHARACTERS }
