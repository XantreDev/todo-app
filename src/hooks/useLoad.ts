import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import TodoService from "../services/TodoService"
import { AC } from "../state"

const useLoad = () => {
  
    const dispatch = useDispatch()
    const { setTodos } = bindActionCreators(AC, dispatch)

    useEffect(() => {
        const initTodos = async () => {
            try{
                const result = await TodoService.getTodos()
                setTodos(result)
            } catch {
                console.warn("Can't load data from api")
            }
        }

        initTodos()
    }, [])
}

export default useLoad