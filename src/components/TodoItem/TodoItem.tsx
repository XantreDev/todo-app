import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { AC } from "../../state";
import styles from "./TodoItem.module.css";

const TodoItem: React.FC<{ title: string; completed: boolean; id: number, creating?: boolean }> = ({
    title,
    completed,
    id,
    creating
}) => {
    const dispatch = useDispatch();
    const { changeTodoStatus, deleteTodo, changeTodoTitle } =
        bindActionCreators(AC, dispatch);

    const [editing, setEditing] = useState(creating ?? false);
    const [editableTitle, setEditableTitle] = useState(title);

    const submitEdit = () => {
        setEditing(false);
        changeTodoTitle(id, editableTitle)
    };

    const cancelEdit = () => {
        setEditableTitle(title);
        setEditing(false);
    };

    const completedClass = completed ? styles.rootCompleted : ''

    return (
        <div className={`${styles.root} ${completedClass}`}>
            { editing ? (
                <input className={styles.textEdit} type="text" name={`edit${id}`} id={`edit${id}`} value={editableTitle} onChange={input => setEditableTitle(input.target.value)} />
            ) : (
                <div className={styles.title}>{editableTitle}</div>
            ) }
            <div className={styles.buttons}>
                {editing ? (
                    <>
                        <button onClick={submitEdit}>Submit</button>
                        {
                            editing ?? false 
                            ? <></>
                            : <button onClick={cancelEdit}>Cancel</button> 
                        }
                    </>
                ) : (
                    <>
                        <button onClick={(_) => setEditing(true)}>Edit</button>
                        <button onClick={(_) => changeTodoStatus(id)}>
                            {!completed ? "Complete" : "Cancel"}
                        </button>
                        <button onClick={(_) => deleteTodo(id)}>Delete</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default TodoItem;
