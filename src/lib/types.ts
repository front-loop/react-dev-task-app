export interface TaskItem {
  id: string
  text: string
  done: boolean
}

export enum ACTIONS {
  ADD = 'added',
  CHANGE = 'changed',
  DELETE = 'deleted',
}

export type ActionType =
  | { type: ACTIONS.ADD; id: string; text: string }
  | { type: ACTIONS.CHANGE; task: TaskItem }
  | { type: ACTIONS.DELETE; id: string }
