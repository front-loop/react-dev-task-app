import { Dispatch, ReactNode, createContext, useContext, useReducer } from 'react'
import { ACTIONS, ActionType, TaskItem } from './types'

export const initialTasks: TaskItem[] = []

export const TasksContext = createContext<TaskItem[]>([])
export const TasksDispatchContext = createContext<Dispatch<ActionType>>(() => {})
// type Dispatch<ActionType> = (action: ActionType) => void

export function TasksProvider({ children }: { children: ReactNode }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>{children}</TasksDispatchContext.Provider>
    </TasksContext.Provider>
  )
}

export function useTasks() {
  return useContext(TasksContext)
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext)
}

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
      throw Error('Unknown Type')
    }
  }
}
