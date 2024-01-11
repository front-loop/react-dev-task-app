import { useReducer } from 'react'
import AddTask from './add-task'
import TaskList from './task-list'
import { tasksReducer } from '../lib/tasks-reducer'
import { initialTasks } from '../lib/constants'
import { TasksContext, TasksDispatchContext } from '../lib/tasks-context'

export default function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        <div className="app">
          <h1 className="title">Task App</h1>
          <AddTask />
          <TaskList />
        </div>
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  )
}
