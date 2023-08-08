import {Editor} from "@tinymce/tinymce-react";


function TextEditor(){
    const appKey = "z5y8nmdqviubfg0awiozideh5vrnpcywjbbsjiitytvosryd"

    return (
        <>
            <Editor apiKey={`${appKey}`} />

        </>
    )
}

export  default  TextEditor;