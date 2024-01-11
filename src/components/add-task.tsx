import { useState } from 'react'

interface AddTaskProps {
  onAddTask: (text: string) => void
}

export default function AddTask({ onAddTask }: AddTaskProps) {
  const [text, setText] = useState('')

  return (
    <div className="add">
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          if (!text.trim()) return
          onAddTask(text)
          setText('')
        }}
      >
        Add
      </button>
    </div>
  )
}
