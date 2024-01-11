import { Dispatch, ReactNode, createContext, useContext, useReducer } from 'react'
import { ACTIONS, ActionType, TaskItem } from '../lib/types'

const initialTasks: TaskItem[] = []
const TasksContext = createContext<TaskItem[]>([])
const TasksDispatchContext = createContext<Dispatch<ActionType>>(() => {})

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
    default: {
      throw new Error('Unhandled action type')
    }
  }
}

export function useTasks() {
  return useContext(TasksContext)
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext)
}

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>{children}</TasksDispatchContext.Provider>
    </TasksContext.Provider>
  )
}
