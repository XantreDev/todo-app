import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { AC } from "../../state";
import { RootState } from "../../types/state";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

const todosInPage = 10;
const buttonsPerPage = 4;

const TodoList = () => {
    const todos = useSelector((state: RootState) => state.todo);
    const [pageIndex, setPageIndex] = useState(1);
    const requiredTodos = todos.slice(
        pageIndex * todosInPage,
        (pageIndex + 1) * todosInPage
    );

    const dispatch = useDispatch()
    const { createTodo } = bindActionCreators(AC, dispatch)

    const totalPages = Math.ceil(todos.length / todosInPage);

    return (
        <div className={styles.root}>
            <div className={styles.addButtonRow}>
                <button onClick={createTodo}>Add Todo</button>
            </div>

            {requiredTodos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                    id={todo.id}
                    creating={todo.creating}
                />
            ))}
            <div className={styles.pageButtons}>
                <button onClick={(_) => setPageIndex(0)}>To start</button>
                {Array(buttonsPerPage + 1)
                    .fill(pageIndex)
                    .map((item, index) => item - buttonsPerPage / 2 + index)
                    .filter(
                        (item) =>
                            item >= 0 && item < totalPages && item !== pageIndex
                    )
                    .map((item) => (
                        <button
                            key={item + 1}
                            onClick={(_) => setPageIndex(item)}
                        >
                            {item + 1}
                        </button>
                    ))}
                <button onClick={(_) => setPageIndex(totalPages - 1)}>
                    To end
                </button>
            </div>
        </div>
    );
};

export default TodoList;
