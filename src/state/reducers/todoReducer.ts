import { TodoAction } from '../../types/actions';
import { Todos } from '../../types/state';
import produce from 'immer'

export const todoReducer = (state: Todos = [], action: TodoAction) => (
    produce(state, draft => {
        switch (action.type) {
            case 'todo/set':
                return action.payload
            case 'todo/change-status':
                const indexChangeStatus = draft.findIndex(value => value.id === action.payload)
                draft[indexChangeStatus].completed = !draft[indexChangeStatus].completed
                draft[indexChangeStatus].creating = false
                return 
            case 'todo/delete':
                const indexDelete = draft.findIndex(value => value.id === action.payload)
                draft.splice(indexDelete, 1)
                return
            case 'todo/change-title':
                const indexChangeTitle = draft.findIndex(value => value.id === action.payload.id)
                draft[indexChangeTitle].title = action.payload.title
                draft[indexChangeTitle].creating = false
                return
            case 'todo/create-todo':
                const lastId = draft.at(-1)?.id ?? 1
                draft.push({completed: false, id: lastId + 1, title: '', creating: true})
                return
            default:
                return 
        }
    })
)
