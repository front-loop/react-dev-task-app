import { useReducer } from 'react'
import { ACTIONS, ActionType, TaskItem } from './types'
import AddTask from './components/add-task'
import TaskList from './components/task-list'

const initialTasks: TaskItem[] = []

function tasksReducer(tasks: typeof initialTasks, action: ActionType) {
  switch (action.type) {
    case ACTIONS.ADD: {
      return [...tasks, { id: action.id, text: action.text, done: false }]
    }
    case ACTIONS.CHANGE: {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task
        } else {
          return t
        }
      })
    }
    case ACTIONS.DELETE: {
      return tasks.filter((t) => t.id !== action.id)
    }
  }
}

export default function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

  function handleAddTask(text: string) {
    dispatch({
      type: ACTIONS.ADD,
      id: crypto.randomUUID(),
      text,
    })
  }

  function handleChangeTask(newTask: TaskItem) {
    dispatch({
      type: ACTIONS.CHANGE,
      task: newTask,
    })
  }

  function handleDeleteTask(id: string) {
    dispatch({
      type: ACTIONS.DELETE,
      id,
    })
  }

  return (
    <div className="app">
      <h1 className="title">Task App</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />
    </div>
  )
}
