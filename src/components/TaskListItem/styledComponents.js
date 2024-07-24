import styled from 'styled-components'

export const TaskItem = styled.li`
  width: 100%;
  background-color: #1a171d;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 25px;
`

export const TaskName = styled.p`
  color: #f8fafc;
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`

export const TaskTagContainer = styled.div`
  background-color: #f3aa4e;
  border-radius: 20px;
  padding: 8px 15px;
`

export const TaskTag = styled.p`
  color: #323f4b;
  font-size: 14px;
  font-weight: bold;
  margin: 0;
`
