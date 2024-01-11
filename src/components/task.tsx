import { useState } from 'react'
import { TaskItem } from '../lib/types'

interface TaskProps {
  task: TaskItem
  onChangeTask: (newTask: TaskItem) => void
  onDeleteTask: (id: string) => void
}

export default function Task({ task, onChangeTask, onDeleteTask }: TaskProps) {
  const [isEditing, setIsEditing] = useState(false)

  if (isEditing) {
    return (
      <>
        <input value={task.text} onChange={(e) => onChangeTask({ ...task, text: e.target.value })} />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    )
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) => {
            onChangeTask({
              ...task,
              done: e.target.checked,
            })
          }}
        />
        <span>{task.text}</span>
      </label>
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </>
  )
}
