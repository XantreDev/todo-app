import React from "react";

const Logo: React.FC<{className?: string}> = ({className = ''}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      fill="none"
      viewBox="0 0 48 48"
    >
      <mask
        id="mask0_78_108"
        style={{ maskType: "alpha" }}
        width="25"
        height="25"
        x="16"
        y="11"
        maskUnits="userSpaceOnUse"
      >
        <path
          fill="#C4C4C4"
          d="M16.737 31.172l18.89-18.89c.421-.421 1.102-.421 1.523 0l3.33 3.33c.42.42.42 1.101 0 1.522L22.858 34.756c-.7.7-1.836.7-2.536 0l-3.585-3.584z"
        ></path>
      </mask>
      <g mask="url(#mask0_78_108)">
        <path
          fill="url(#paint0_linear_78_108)"
          d="M16.713 31.112H45.123000000000005V38.976H16.713z"
          transform="rotate(-45.025 16.713 31.112)"
        ></path>
      </g>
      <g clipPath="url(#clip0_78_108)">
        <mask
          id="mask1_78_108"
          style={{ maskType: "alpha" }}
          width="16"
          height="16"
          x="7"
          y="16"
          maskUnits="userSpaceOnUse"
        >
          <path
            fill="#fff"
            d="M12.242 16.616c.42-.42 1.102-.42 1.522 0l8.912 8.912-5.779 5.779-8.912-8.912a1.076 1.076 0 010-1.522l4.257-4.257z"
          ></path>
        </mask>
        <g mask="url(#mask1_78_108)">
          <path
            fill="url(#paint1_linear_78_108)"
            d="M7.583 15.95H24.085V31.375999999999998H7.583z"
          ></path>
        </g>
      </g>
      <circle
        cx="24"
        cy="24"
        r="23.28"
        stroke="url(#paint2_angular_78_108)"
        strokeWidth="1.44"
      ></circle>
      <defs>
        <linearGradient
          id="paint0_linear_78_108"
          x1="17.939"
          x2="44.147"
          y1="35.461"
          y2="35.248"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.011" stopColor="#229E17"></stop>
          <stop offset="0.626" stopColor="#4CA87D"></stop>
          <stop offset="1" stopColor="#5AB2F1"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_78_108"
          x1="7.583"
          x2="24.085"
          y1="15.95"
          y2="31.375"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#007966"></stop>
          <stop offset="0.719" stopColor="#229E17"></stop>
        </linearGradient>
        <radialGradient
          id="paint2_angular_78_108"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(0 24 -24 0 24 24)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#99C"></stop>
          <stop offset="1" stopColor="#5AB2F1"></stop>
        </radialGradient>
        <clipPath id="clip0_78_108">
          <path
            fill="#fff"
            d="M0 0H15.452V15.452H0z"
            transform="translate(7.224 15.855)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default React.memo(Logo);