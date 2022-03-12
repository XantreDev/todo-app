import React, { useEffect, useRef } from "react";

const maxTitleLength = 75;

const TodoTitle: React.FC<{
    className: string;
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
}> = ({ className, title, setTitle }) => {
    const printable = /^[ -~]+$/;

    const control = useRef(null)

    useEffect(() => {
        (control.current as any).innerText = title
    }, [])

    return (
        <div
            ref={control}
            className={className}
            contentEditable
            suppressContentEditableWarning
            onKeyPress={(event) => {
                if (
                    event.key.length === 1 &&
                    printable.test(event.key) &&
                    title.length + 1 > maxTitleLength
                ) {
                    event.preventDefault();
                    event.stopPropagation();
                }
            }}
            onPaste={(event) => {
                const pastedText = event.clipboardData.getData("text");
                if (pastedText.length + title.length > maxTitleLength) {
                    event.stopPropagation();
                    event.preventDefault();
                }
            }}
            onInput={(event: any) =>
                setTitle((previous) => {
                    const value = event.target.innerText;
                    return value;
                })
            }
        >
            {/* {title} */}
        </div>
    );
};

export default TodoTitle;
