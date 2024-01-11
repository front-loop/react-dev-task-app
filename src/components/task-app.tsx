import { TaskProvider } from './task-provider'
import TaskInput from './task-input'
import TaskList from './task-list'

export default function App() {
  return (
    <TaskProvider>
      <div className="app">
        <h1 className="title">Task App</h1>
        <TaskInput />
        <TaskList />
      </div>
    </TaskProvider>
  )
}
