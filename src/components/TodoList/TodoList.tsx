import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { AC } from "../../state";
import { RootState } from "../../types/state";
import styles from "./TodoList.module.css";
import TodoItem from '../TodoComponent/TodoItem';
import TodoAdder from "../TodoComponent/TodoAdder/TodoAdder";

const TodoList = () => {
    const todos = useSelector((state: RootState) => state.todo);

    return (
        <div className={styles.root}>
            {/* <div className={styles.addButtonRow}>
                <button onClick={createTodo}>Add Todo</button>
            </div> */}
            <TodoAdder/>
            <div className={styles.todoCount}>
                Tasks - {todos.length}
            </div>

            {/* <TodoWrapper>? */}

            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                    id={todo.id}
                    creating={todo.creating}
                />
            ))}
        </div>
    );
};

export default TodoList;
