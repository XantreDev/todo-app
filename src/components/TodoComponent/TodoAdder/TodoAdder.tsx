import styles from "./TodoAdder.module.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { AC } from "../../../state";
import TodoAddIcon from "../../icons/TodoAddIcon/TodoAddIcon";
import TodoTitle from "../../TodoTitle/TodoTitle";

const TodoAdder = () => {
    const [title, setTitle] = useState("");

    const dispatch = useDispatch();
    const { createTodo } = bindActionCreators(AC, dispatch);

    return (
        <div className={styles.root}>
            <button
                onClick={(_) => {
                    if (title === "") return;
                    createTodo(title);
                    setTitle("");
                }}
                className={styles.button}
            >
                <TodoAddIcon />
            </button>
            <TodoTitle title={title} setTitle={setTitle} className={styles.input}/>
        </div>
    );
};

export default TodoAdder;
