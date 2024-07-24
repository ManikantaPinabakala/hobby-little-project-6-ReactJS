import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import TagCategoryItem from '../TagCategoryItem'
import TaskListItem from '../TaskListItem'

import {
  AppContainer,
  CreateTaskContainer,
  CreateTaskHeading,
  LabelAndInputContainer,
  InputLabel,
  InputElement,
  OptionItem,
  AddTaskButton,
  ContentContainer,
  SectionHeading,
  TagList,
  TaskList,
  NoTasksContainer,
  NoTasksText,
} from './styledComponents'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class CreateTaskApp extends Component {
  state = {
    taskList: [],
    taskInputValue: '',
    tagInputValue: tagsList[0].optionId,
    activeCategoryId: '',
  }

  onChangeTaskInput = event => {
    this.setState({taskInputValue: event.target.value})
  }

  onChangeTagInput = event => {
    this.setState({tagInputValue: event.target.value})
  }

  setCategoryId = id => {
    const {activeCategoryId} = this.state

    if (activeCategoryId === id) {
      this.setState({activeCategoryId: ''})
    } else {
      this.setState({activeCategoryId: id})
    }
  }

  onAddTask = event => {
    event.preventDefault()

    const {taskInputValue, tagInputValue} = this.state
    const correspondingTagItem = tagsList.find(
      eachTag => eachTag.optionId === tagInputValue.toUpperCase(),
    )

    const newTask = {
      taskName: taskInputValue,
      taskTag: correspondingTagItem.displayText,
      taskId: uuidv4(),
    }

    this.setState(prevState => ({
      taskList: [...prevState.taskList, newTask],
      taskInputValue: '',
      tagInputValue: tagsList[0].optionId,
    }))
  }

  render() {
    const {taskList, taskInputValue, tagInputValue, activeCategoryId} = this.state // prettier-ignore
    const filteredTaskList = taskList.filter(eachTask =>
      eachTask.taskTag.toUpperCase().includes(activeCategoryId),
    )

    return (
      <AppContainer>
        <CreateTaskContainer onSubmit={this.onAddTask}>
          <CreateTaskHeading>Create a task!</CreateTaskHeading>
          <LabelAndInputContainer>
            <InputLabel htmlFor="taskInput">Task</InputLabel>
            <InputElement
              type="text"
              id="taskInput"
              placeholder="Enter the task here"
              value={taskInputValue}
              onChange={this.onChangeTaskInput}
            />
          </LabelAndInputContainer>
          <LabelAndInputContainer>
            <InputLabel htmlFor="tagInput">Tags</InputLabel>
            <InputElement
              as="select"
              id="tagInput"
              value={tagInputValue}
              onChange={this.onChangeTagInput}
            >
              {tagsList.map(eachTag => (
                <OptionItem
                  key={`option-{eachTag.optionId}`}
                  value={eachTag.optionId}
                >
                  {eachTag.displayText}
                </OptionItem>
              ))}
            </InputElement>
          </LabelAndInputContainer>
          <AddTaskButton type="submit">Add Task</AddTaskButton>
        </CreateTaskContainer>
        <ContentContainer>
          <SectionHeading>Tags</SectionHeading>
          <TagList>
            {tagsList.map(eachTag => (
              <TagCategoryItem
                key={eachTag.optionId}
                tagDetails={eachTag}
                setCategoryId={this.setCategoryId}
                isActive={eachTag.optionId === activeCategoryId}
              />
            ))}
          </TagList>
          <SectionHeading>Tasks</SectionHeading>
          {taskList.length > 0 ? (
            <TaskList>
              {filteredTaskList.map(eachTask => (
                <TaskListItem key={eachTask.taskId} taskDetails={eachTask} />
              ))}
            </TaskList>
          ) : (
            <NoTasksContainer>
              <NoTasksText>No Tasks Added Yet</NoTasksText>
            </NoTasksContainer>
          )}
        </ContentContainer>
      </AppContainer>
    )
  }
}

export default CreateTaskApp
