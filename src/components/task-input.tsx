import { useState } from 'react'
import { useTasksDispatch } from './task-provider'
import { ACTIONS } from '../lib/types'

export default function TaskInput() {
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
