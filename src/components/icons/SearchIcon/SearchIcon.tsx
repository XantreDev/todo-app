import React from "react";

const SearchIcon: React.FC<{ className: string }> = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 18 18"
            className={className}
        >
            <path
                d="M7.495 0C3.365 0 0 3.365 0 7.495c0 4.131 3.365 7.496 7.495 7.496a7.456 7.456 0 004.74-1.697l4.475 4.476a.75.75 0 101.06-1.06l-4.476-4.476a7.456 7.456 0 001.697-4.739C14.99 3.365 11.626 0 7.495 0zm0 1.5a5.985 5.985 0 015.997 5.995 5.985 5.985 0 01-5.997 5.997A5.985 5.985 0 011.5 7.495 5.985 5.985 0 017.495 1.5z"
            ></path>
        </svg>
    );
};

export default SearchIcon;
