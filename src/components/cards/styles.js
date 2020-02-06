import styled from 'styled-components'

export const List = styled.ul`
  height: 100%;
  width: 100%;

  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* justify-content: center; */
`

export const ListItem = styled.li`
  margin: 0 30px 30px 0;
  padding: 0;

  &:nth-child(4n) {
    margin-right: 0;
  }

  width: 180px;
  height: 220px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;

  list-style: none;
`
