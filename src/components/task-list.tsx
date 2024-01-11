import { useTasks } from '../lib/tasks-provider'
import Task from './task'

export default function TaskList() {
  const tasks = useTasks()

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
