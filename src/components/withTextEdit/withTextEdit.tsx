// import React, { useState } from 'react'
// import styles from './TodoWrapper.module.css'
// import TodoItem, { isTodoItemProps, TodoItemProps } from '../TodoItem/TodoItem';
// import TodoAdder, { TodoAdderProps } from '../TodoAdder/TodoAdder';

// type TextEditComponents = React.FC<TodoItemProps | {}>

// type HighOrderProps = {
//     setText: (value: string) => void
//     text: string 
// }

// export type TodoItemWithTextEdit = HighOrderProps & TodoItemProps 
// export type TodoAdderWitchTextEdit = TodoAdderProps & HighOrderProps

// const withTextEdit = (WrappedComponent: TextEditComponents) => {
const withTextEdit = () => {}
//     const WithTextEdit = (props: unknown) => {
//         const inputetdProps = isTodoItemProps(props) ? props as TodoItemProps : props as TodoAdderProps

//         const [text, setText] = useState('')

//         const hightOrderProps = { text, setText }

//         let componentProps = {...inputetdProps, ...hightOrderProps}

//         if (isTodoItemProps(inputetdProps))

//         return (
//             <WrappedComponent {...componentProps}/>
//         )
//     }


export default withTextEdit