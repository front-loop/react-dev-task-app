import { useState } from 'react'
import { TaskItem } from './types'
import AddTask from './components/add-task'
import TaskList from './components/task-list'

const initialTasks: TaskItem[] = []

export default function App() {
  const [tasks, setTasks] = useState<TaskItem[]>(initialTasks)

  function handleAddTask(text: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        text,
        done: false,
      },
    ])
  }

  function handleChangeTask(newTask: TaskItem) {
    setTasks(
      tasks.map((t) => {
        if (t.id === newTask.id) {
          return newTask
        } else {
          return t
        }
      })
    )
  }

  function handleDeleteTask(id: string) {
    setTasks(tasks.filter((t) => t.id !== id))
  }

  return (
    <div className="app">
      <h1 className="title">Task App</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />
    </div>
  )
}
