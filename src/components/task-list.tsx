import { TaskItem } from '../lib/types'
import Task from './task'

interface TaskListProps {
  tasks: TaskItem[]
  onChangeTask: (newTask: TaskItem) => void
  onDeleteTask: (id: string) => void
}

export default function TaskList({ tasks, onChangeTask, onDeleteTask }: TaskListProps) {
  return (
    <ul>
      {tasks.map((t) => (
        <li key={t.id}>
          <Task task={t} onChangeTask={onChangeTask} onDeleteTask={onDeleteTask} />
        </li>
      ))}
    </ul>
  )
}
