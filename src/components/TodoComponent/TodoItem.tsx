import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { AC } from "../../state";
import TodoIcon, { TodoStatus } from "../icons/TodoIcon/TodoIcon";
import TodoTitle from "../TodoTitle/TodoTitle";
import styles from "./TodoItem.module.css";

export interface TodoItemProps {
    title: string;
    completed: boolean;
    id: number;
    creating?: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({
    title: propTitle,
    completed,
    id,
    creating,
}) => {
    const dispatch = useDispatch();
    const { changeTodoStatus, deleteTodo, changeTodoTitle } =
        bindActionCreators(AC, dispatch);
    
    const iconStatus: TodoStatus = !completed ? "active" : "in-active" 

    const [title, setTitle] = useState(propTitle)

    return (
        <div className={styles.root}>
            <button onClick={_ => changeTodoStatus(id)} className={styles.button}>
                <TodoIcon status={ iconStatus }/>
            </button>

            <TodoTitle title={title} setTitle={setTitle} className={styles.input}/>
        </div>
    );
};

export default TodoItem;
