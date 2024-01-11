import { useState } from 'react'
import { useTasksDispatch } from '../lib/tasks-provider'
import { ACTIONS } from '../lib/types'

export default function AddTask() {
  const [text, setText] = useState('')
  const dispatch = useTasksDispatch()

  return (
    <div className="add">
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          if (!text.trim()) return
          dispatch({
            type: ACTIONS.ADD,
            id: crypto.randomUUID(),
            text,
          })
          setText('')
        }}
      >
        Add
      </button>
    </div>
  )
}
