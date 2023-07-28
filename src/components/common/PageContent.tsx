"use client";

import react, {useState} from "react";
// import ReactQuill from "react-quill";

type props = {
    content: any
}
export const PageContent = ({content}: props) => {
    const [htmlContent, setContent] = useState('');

    // const handleContentChange = (content) => {
    //     setContent(newContent);
    // };

    return (
        <>
            {/* <ReactQuill
                value={content}
                readOnly
                theme="snow"
            /> */}
        </>

    );
};
