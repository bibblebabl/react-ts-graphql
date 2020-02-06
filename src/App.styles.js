import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;

  overflow-y: scroll;
`

export const Container = styled.div`
  width: 810px;
  padding-top: 141px;

  display: flex;
  align-items: center;
  flex-direction: column;
`

export const SearchInput = styled.input`
  width: 100%;
  padding: 22px 27px;
  margin-bottom: 30px;

  font-weight: 300;
  font-size: 30px;
  line-height: 35px;
  color: #000000;
  text-transform: uppercase;

  background-color: #ffffff;
  border: 1px solid #a0a0a0;
`
