import React, {useEffect, useRef, useState} from "react";

function FileInput({name, value, onChange}) {

    const [preview, setPreview] = useState();
    const inputRef = useRef();
    // console.log("inputRef: ", inputRef.current)

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        // console.log(file);

        onChange(name, file);
    }

    const handleClearFile = () => {
        inputRef.current.value = '';
        onChange(name, null);
    }

    useEffect(()=>{

        if(!value){
            return;
        }

        const nextPreview = URL.createObjectURL(value);
        setPreview(nextPreview);

        return() =>{
            setPreview(null);
            URL.revokeObjectURL(nextPreview);
        }
    },[value])

    return (
        <div>
            {preview && <img src={preview} alt={"preview"}></img>}
            <input type={"file"}
                   onChange={handleFileChange}
                   ref={inputRef}/>
            <button onClick={handleClearFile}>X</button>
        </div>
    )
}

export default FileInput