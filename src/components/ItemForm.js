import React, {useState} from "react";

function ItemForm() {

    // const [title, setTitle] = useState('');
    // const [calorie, setCalorie] = useState(0);
    // const [content, setContent] = useState('');

    //===>

    const [values, setValues] = useState({
        title : '',
        calorie : 0,
        content : ''
    })

    // const onTitleChange = (e) =>{
    //     setTitle(e.target.value);
    // }
    //
    // const onCalorieChange = (e) =>{
    //     setCalorie(e.target.value);
    // }
    //
    // const onContentChange = (e) =>{
    //     setContent(e.target.value);
    // }

    // setValues([...values,
    //     {
    //         title : e.target.name
    //     }])

    const handleValueChange = (e) =>{
        const {name, value} = e.target;

        setValues((previousValue) => (
            {...previousValue,
                    [name] : value
                }
        ))
    }
    console.log(values);
    return (
        <form >
            <input
                name={"title"}
                type={"text"}
                // onChange={onTitleChange}
                onChange={handleValueChange}
            />
            <input
                name={"calorie"}
                type={"number"}
                // onChange={onCalorieChange}
                onChange={handleValueChange}
            />
            <input
                name={"content"}
                type={"text"}
                // onChange={onContentChange}
                onChange={handleValueChange}
            />
            {/*<input*/}
            {/*/>*/}

            {/*<input*/}
            {/*    type={"submit"} value={"추가"}/>*/}

            <button type={"submit"} >추가</button>
        </form>

    );
}

export default ItemForm