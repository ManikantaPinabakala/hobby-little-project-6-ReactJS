import styled from 'styled-components'

export const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
`

export const CreateTaskContainer = styled.form`
  width: 40%;
  background-color: #131213;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 30px;
`

export const CreateTaskHeading = styled.h1`
  color: #f3aa4e;
`

export const LabelAndInputContainer = styled.div`
  width: 90%;
`

export const InputLabel = styled.label`
  align-self: flex-start;
  color: #f1f5f9;
  font-size: 16px;
`

export const InputElement = styled.input`
  width: 100%;
  font-size: 18px;
  color: ${props => (props.as === 'select' ? '#1a171d' : '#475569')};
  padding: 10px;
  margin-top: 10px;
  outline: none;
`

export const AddTaskButton = styled.button`
  background-color: #f3aa4e;
  color: #f8f8f8;
  font-size: 20px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  padding: 10px 30px;
  margin-top: 20px;
  cursor: pointer;
`

export const OptionItem = styled.option``

export const ContentContainer = styled.div`
  flex-grow: 1;
  background-color: #000000;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
`

export const SectionHeading = styled.h1`
  color: #ffffff;
  font-size: 24px;
  margin: 0;
`

export const TagList = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  gap: 10px;
`

export const TaskList = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const NoTasksContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NoTasksText = styled.p`
  color: #f8fafc;
  font-weight: bold;
  font-size: 24px;
`
