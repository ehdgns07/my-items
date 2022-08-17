import React, {useState} from "react";
import FileInput from "./FileInput";

function ItemForm({onSubmitData}) {

    // const [title, setTitle] = useState('');
    // const [calorie, setCalorie] = useState(0);
    // const [content, setContent] = useState('');

    //===>

    const [values, setValues] = useState({
        title: '',
        calorie: 0,
        content: '',
        imgFile: null
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

    const handleInputChange = (e) => {
        const {name, value, type} = e.target;

        handleValueChange(name, convertNumber(type, value));
    }

    // 입력값을 객체로 저장
    function handleValueChange(name, value) {

        setValues((previousValue) => (
            {
                ...previousValue,
                [name]: value

                // [name]: convertNumber(type, value)
            }
        ))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        values.createdAt = Date.now();

        onSubmitData(values);

    }

    return (
        <form onSubmit={handleSubmit}>

            <FileInput name={"imgFile"}
                       value={values.imgFile}
                       onChange={handleValueChange}
            />

            <input
                name={"title"}
                type={"text"}
                // onChange={onTitleChange}
                onChange={handleInputChange}
                value={values.title}
            />
            <input
                name={"calorie"}
                type={"number"}
                // onChange={onCalorieChange}
                onChange={handleInputChange}
                value={values.calorie}
            />
            <input
                name={"content"}
                type={"text"}
                // onChange={onContentChange}
                onChange={handleInputChange}
                value={values.content}
            />

            {/*<input*/}
            {/*    type={"submit"} value={"추가"}/>*/}

            <button type={"submit"}>추가</button>
        </form>

    );
}

export function convertNumber(type, value) {
    //칼로리를 숫자로 변경해줄 수 있는 기능이기 때문에 함수로 만들어주는게 좋다.
    // console.log(type);
    if (type === 'number') {
        return Number(value) || 0;
    } else {
        return value;
    }
}

export default ItemForm