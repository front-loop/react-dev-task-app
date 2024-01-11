import { useReducer } from 'react'
import AddTask from './components/add-task'
import TaskList from './components/task-list'
import { ACTIONS, TaskItem } from './lib/types'
import { tasksReducer } from './lib/tasks-reducer'
import { initialTasks } from './lib/constants'

export default function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

  function handleAddTask(text: string) {
    dispatch({
      type: ACTIONS.ADD,
      id: crypto.randomUUID(),
      text,
    })
  }

  function handleChangeTask(newTask: TaskItem) {
    dispatch({
      type: ACTIONS.CHANGE,
      task: newTask,
    })
  }

  function handleDeleteTask(id: string) {
    dispatch({
      type: ACTIONS.DELETE,
      id,
    })
  }

  return (
    <div className="app">
      <h1 className="title">Task App</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />
    </div>
  )
}
