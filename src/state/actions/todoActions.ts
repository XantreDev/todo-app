import { RootDispatch, Todo } from "../../types/state";

export const setTodos = (todos: Todo[]) => 
    (dispatch: RootDispatch) => 
        dispatch({
            type: "todo/set",
            payload: todos
        })

export const deleteTodo = (id: number) => 
    (dispatch: RootDispatch) => 
        dispatch({
            type: "todo/delete",
            payload: id
        })


export const changeTodoStatus = (id: number) => 
    (dispatch: RootDispatch) => 
        dispatch({
            type: "todo/change-status",
            payload: id
        })


export const changeTodoTitle = (id: number, title: string) => 
    (dispatch: RootDispatch) => 
        dispatch({
            type: "todo/change-title",
            payload: {
                id,
                title
            }
        })

export const createTodo = (title: string) => 
    (dispatch: RootDispatch) => 
        dispatch({
            type: 'todo/create-todo',
            payload: {
                title
            }
        })