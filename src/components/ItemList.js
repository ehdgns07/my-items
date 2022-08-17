import React, {useState} from "react";
import styled from "styled-components";

const ItemStyle = styled.ul`
    // display: flex;
    overflow: word-break;
`

const LiDesign = styled.li`
    display: flex;
    margin-left : 1rem;
`
const ImgStyle = styled.img`
    // width: 200px;
`
function convertingDate(date) {

    return date.getFullYear() + "." + (date.getMonth() + 1) + "." + date.getDate() + " " +date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

function Item({ item, onDelete, onUpdate, onModify, correctId, modifySubmit }){
    // console.log(item);
    const {calorie, content, createdAt, imgUrl, title, id} = item;
    const date = new Date(createdAt);
    const [changeValue, setChangeValue] = useState('title');
    const [inputValue, setInputValue] = useState();

    const onChange = (e) => {

        setChangeValue(e.target.value);

    }
    const handleValueChange = (e) => {
        setInputValue(e.target.value);
    }

    const hideInput = (e) => {
        e.preventDefault();
    }

    return (

        <div>
            <ImgStyle src={imgUrl}/>
            <div>{title}</div>
            <div>{content}</div>
            <div>{calorie} kal</div>
            {/*<div>{createdAt}</div>*/}
            <div>{convertingDate(date)}</div>
            <button onClick={() => (onDelete(id))}>삭제</button>
            <button onClick={() => {
                (onUpdate(id));
            }}>수정</button>
            {(id === correctId) && onModify && (
                <div>
                <input onChange={handleValueChange}/>
                    <select onChange={onChange} >
                        <option value="title">title</option>
                        <option value="content">content</option>
                        <option value="calorie">calorie</option>
                    </select>
                    <input type={"submit"} onClick={()=>{
                        return modifySubmit(id, changeValue, inputValue)}}/>
                    </div>)}
        </div>

    )

}

function itemList({items, onDelete, onUpdate, onModify, correctId, modifySubmit, setItems}) {

    return (
        <ItemStyle>
            {items.map((item) => {
                    return (
                        <LiDesign key={item.id}>
                            <Item item={item}
                                  onDelete={onDelete}
                                  onUpdate={onUpdate}
                                  onModify={onModify}
                                  correctId={correctId}
                                  modifySubmit={modifySubmit}
                            />
                        </LiDesign>
                    )

                }
            )}
        </ItemStyle>


    );

}

export default itemList