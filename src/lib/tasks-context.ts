import { Dispatch, createContext } from 'react'
import { ActionType, TaskItem } from './types'

export const TasksContext = createContext<TaskItem[]>([])
export const TasksDispatchContext = createContext<Dispatch<ActionType>>(() => {})
// type Dispatch<ActionType> = (action: ActionType) => void
