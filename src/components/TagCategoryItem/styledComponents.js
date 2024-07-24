import styled from 'styled-components'

export const TagListItem = styled.li``

export const TagButton = styled.button`
  background-color: ${props => (props.isActive ? '#f3aa4e' : '#1a171d')};
  color: #f1f5f9;
  font-weight: bold;
  border: 1px solid #f3aa4e;
  border-radius: 20px;
  padding: 5px 10px;
  cursor: pointer;
`
