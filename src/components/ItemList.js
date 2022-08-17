import React, {useContext, useState} from "react";
import styled from "styled-components";
import LocaleContext, {useLocale} from "../contexts/LocaleContext";

const ItemStyle = styled.ul`
    display: flex;
    overflow: scroll;
    width : 400px;
`

const LiDesign = styled.li`
    // display: flex;
    margin-left : 1rem;
    list-style : none;
`
const ImgStyle = styled.img`
    width: 200px;
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

    const contextData = useLocale();

    const onChange = (e) => {

        setChangeValue(e.target.value);

    }
    const handleValueChange = (e) => {
        setInputValue(e.target.value);
    }

    const hideInput = (e) => {
        e.preventDefault();
    }

    console.log(contextData);

    return (

        <div>
            <ImgStyle src={imgUrl}/>
            <div>{title}</div>
            <div>{content}</div>
            <div>{calorie} kal</div>
            {/*<div>{createdAt}</div>*/}
            <div>{convertingDate(date)}</div>
            <button onClick={() => (onDelete(id))}>{(contextData === "kor") ? "삭제": "delete"}</button>
            <button onClick={() => {
                (onUpdate(id));
            }}>{(contextData === "kor") ? "수정": "modify"}</button>
            <p>{contextData}</p>
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