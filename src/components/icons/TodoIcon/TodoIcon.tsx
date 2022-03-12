import styles from "./TodoIcon.module.css"
import React from "react";

export type TodoStatus = "active" | "in-active"

const TodoIcon: React.FC<{ status: TodoStatus }> = ({ status }) => {
    const statusStyle = status === "active" ? styles.active : styles.inactive
    return (
        <svg
            className={statusStyle}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 32 33"
        >
            <rect
                width="29.333"
                height="29.333"
                x="1.333"
                y="2.228"
                stroke="#99C"
                strokeWidth="2.667"
                rx="8.667"
            ></rect>
            <rect
                width="29.333"
                height="29.333"
                x="1.333"
                y="2.333"
                fill="#99C"
                stroke="#99C"
                strokeWidth="2.667"
                rx="8.667"
            ></rect>
            <path
                fill="#21212B"
                d="M5.752 13.513a1.337 1.337 0 012.014-.143l4.649 4.648a1.337 1.337 0 001.89 0l9.928-9.928a1.337 1.337 0 012.015.143l2.358 3.145c.413.55.34 1.323-.166 1.787l-14.198 13.01c-.502.46-1.27.469-1.783.02L3.6 18.443a1.337 1.337 0 01-.189-1.808l2.342-3.122z"
            ></path>
        </svg>
    );
};

export default React.memo(TodoIcon);
