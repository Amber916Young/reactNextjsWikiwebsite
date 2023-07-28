import React from "react";

type Props = {
    children: React.ReactNode;
    onClick: () => void;
};

const IconButton = ({ children, onClick }: Props) => {
    const buttonColor = "hidden   md:inline-block flex items-center px-4 py-2 mr-4 text-white bg-purple-light rounded hover:bg-purple-base";

    return (
        <>
            <button
                className={`${buttonColor} 	place-content-center rounded  px-10  hover:text-white h-10`}
                onClick={onClick}
            >
                {children}
            </button>
        </>

    );
};

export default IconButton;
