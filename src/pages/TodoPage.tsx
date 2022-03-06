import React, { useState } from "react";
import Nav from "../components/Nav/Nav";
import TodoList from "../components/TodoList/TodoList";
import { NavActive } from "../types/props";


const TodoPage = () => {

    return (
        <>
            <Nav active={NavActive.todo} />
            <TodoList/>
        </>
    );
};

export default TodoPage;
