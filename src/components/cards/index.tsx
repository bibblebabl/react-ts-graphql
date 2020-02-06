import React from 'react'

import { List, ListItem } from './styles'

interface Character {
  id: string | number
  name: string
  image: string
}

interface CardsProps {
  data: Character[]
}

const Cards: React.FC<CardsProps> = ({ data }) => {
  return (
    <List>
      {data.map(({ id, name, image }) => (
        <ListItem key={id} name={name} image={image}></ListItem>
      ))}
    </List>
  )
}

export default Cards
