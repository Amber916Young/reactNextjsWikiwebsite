import React from "react";

type props = {
    titleName: string
}

export const HeadTitle = ({titleName}: props) => {
    const titleLine = " border-s-4 border-purple-darker border-l-4  pl-2";
    const titleSize = "text-xl font-semibold text-purple-darker";

    return (
        <div className={`${titleSize} ${titleLine}`}>{titleName}</div>
    );
};