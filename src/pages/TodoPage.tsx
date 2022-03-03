import React from 'react'
import Nav from '../components/Nav/Nav';
import { NavActive } from '../types/props';

const TodoPage = () => {
  return (
    <>
        <Nav active={NavActive.todo}/>
        <div>Todo</div>
    </>
  )
}

export default TodoPage