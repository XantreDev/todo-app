import React, { useState } from "react";
import { useSelector } from "react-redux";
import Nav from "../components/Nav/Nav";
import TodoItem from "../components/TodoItem/TodoItem";
import { NavActive } from "../types/props";
import { RootState } from "../types/state";

const todosInPage = 10;
const buttonsPerPage = 4;

const TodoPage = () => {
    const todos = useSelector((state: RootState) => state.todo);
    const [pageIndex, setPageIndex] = useState(1);
    const requiredTodos = todos.slice(
        pageIndex * todosInPage,
        (pageIndex + 1) * todosInPage
    );

    const totalPages = Math.ceil(todos.length / todosInPage);

    return (
        <>
            <Nav active={NavActive.todo} />
            <div>
                {requiredTodos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        id={todo.id}
                    />
                ))}
            </div>
            <div>
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
        </>
    );
};

export default TodoPage;
