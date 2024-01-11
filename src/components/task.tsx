import { useState } from 'react'
import { ACTIONS, TaskItem } from '../lib/types'
import { useTasksDispatch } from '../lib/tasks-provider'

export default function Task({ task }: { task: TaskItem }) {
  const [isEditing, setIsEditing] = useState(false)
  const dispatch = useTasksDispatch()

  if (isEditing) {
    return (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: ACTIONS.CHANGE,
              task: {
                ...task,
                text: e.target.value,
              },
            })
          }}
        />
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
            dispatch({
              type: ACTIONS.CHANGE,
              task: {
                ...task,
                done: e.target.checked,
              },
            })
          }}
        />
        <span>{task.text}</span>
      </label>
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button
        onClick={() => {
          dispatch({
            type: ACTIONS.DELETE,
            id: task.id,
          })
        }}
      >
        Delete
      </button>
    </>
  )
}
