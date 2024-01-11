import { initialTasks } from './constants'
import { ACTIONS, ActionType } from './types'

export function tasksReducer(tasks: typeof initialTasks, action: ActionType) {
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
