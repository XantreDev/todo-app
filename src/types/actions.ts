import { Todo } from "./state"

interface TodoSetAction {
    type: 'todo/set',
    payload: Todo[]
}

interface TodoDeleteAction {
    type: 'todo/delete',
    payload: number
}

interface TodoChangeStatusAction {
    type: 'todo/change-status',
    payload: number
}

interface TodoChangeTitleAction {
    type: 'todo/change-title'
    payload: {
        id: number
        title: string
    }
}

interface TodoCreate {
    type: 'todo/create-todo',
    payload: {
        title: string
    }
}

export type TodoAction = TodoSetAction | TodoDeleteAction | TodoChangeTitleAction | TodoChangeStatusAction | TodoCreate