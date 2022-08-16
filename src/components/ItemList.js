import React from "react";

function ConvertingDate(date) {

    return date.getFullYear() + "." + (date.getMonth() + 1) + "." + date.getDate() + " " +date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

function Item({ item, onDelete }){
    // console.log(item);
    const {calorie, content, createdAt, imgUrl, title, id} = item;
    const date = new Date(createdAt);

    return (

        <div>
            <img src={imgUrl}/>
            <div>{title}</div>
            <div>{content}</div>
            <div>{calorie} kal</div>
            {/*<div>{createdAt}</div>*/}
            <div>{ConvertingDate(date)}</div>
            <button onClick={() => (onDelete(id))}>삭제</button>
        </div>

    )

}

function itemList({items, onDelete}) {

    return (
            items.map((item) => {
                return (
                    <ul>
                    <li key={item.id}>
                        <Item item={item} onDelete={onDelete}/>
                    </li>
                    </ul>
                )

            })



    );

}

export default itemList