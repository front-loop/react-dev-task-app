import { TasksProvider } from '../lib/tasks-provider'
import AddTask from './add-task'
import TaskList from './task-list'

export default function App() {
  return (
    <TasksProvider>
      <div className="app">
        <h1 className="title">Task App</h1>
        <AddTask />
        <TaskList />
      </div>
    </TasksProvider>
  )
}
