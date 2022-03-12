import styles from "./TodoAddIcon.module.css"
import React from "react";

const TodoAddIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
    >
      <rect
        width="29.43"
        height="29.43"
        x="1.338"
        y="1.338"
        fill="#99C"
        stroke="#99C"
        strokeWidth="2.675"
        rx="8.695"
      ></rect>
      <path
        fill="#181820"
        d="M13.667 5.333a1 1 0 011-1h2a1 1 0 011 1V26a1 1 0 01-1 1h-2a1 1 0 01-1-1V5.333z"
      ></path>
      <path
        fill="#181820"
        d="M5.333 17.667a1 1 0 01-1-1v-2a1 1 0 011-1H26a1 1 0 011 1v2a1 1 0 01-1 1H5.333z"
      ></path>
    </svg>
  );
}

export default React.memo(TodoAddIcon);
