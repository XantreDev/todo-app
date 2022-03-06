import store from '../state/store';

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch

export type Todo = {
    id: number
    title: string
    completed: boolean
    creating?: boolean
}
export type Todos = Todo[]
