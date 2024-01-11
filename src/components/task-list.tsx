import { useContext } from 'react'
import Task from './task'
import { TasksContext } from '../lib/tasks-context'

export default function TaskList() {
  const tasks = useContext(TasksContext)

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  )
}
