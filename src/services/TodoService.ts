import axios from "axios"
import { Todo } from "../types/state"

type OriginTodo = Todo & {
    userId: number
}

class TodoService{
    static apiURL = "https://jsonplaceholder.typicode.com/todos"

    static getTodos = async () => {
        const answer = await axios({
            method: "GET",
            url: this.apiURL
        })
        const todosList: OriginTodo[] = answer.data
        const preparedData: Todo[] = todosList.map(todo => ({...(todo as Todo)}))

        return preparedData
    }
}

export default TodoService