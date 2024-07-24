import {TaskItem, TaskName, TaskTagContainer, TaskTag} from './styledComponents'

const TaskListItem = props => {
  const {taskDetails} = props
  const {taskName, taskTag} = taskDetails

  return (
    <TaskItem>
      <TaskName>{taskName}</TaskName>
      <TaskTagContainer>
        <TaskTag>{taskTag}</TaskTag>
      </TaskTagContainer>
    </TaskItem>
  )
}

export default TaskListItem
