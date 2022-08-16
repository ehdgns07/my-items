import React from "react";

function ConvertingDate(date) {

    return date.getFullYear() + "." + (date.getMonth() + 1) + "." + date.getDate() + " " +date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

function Item({ item }){
    // console.log(item);
    const {calorie, content, createdAt, imgUrl, title} = item;
    const date = new Date(createdAt);

    return (

        <div>
            <div>{title}</div>
            <div>{content}</div>
            <div>{calorie}</div>
            <img src={imgUrl}/>
            {/*<div>{createdAt}</div>*/}
            <div>{ConvertingDate(date)}</div>
        </div>

    )

}

function itemList({items}) {

    return (
            items.map((item) => {
                return (
                    <ul>
                    <li key={item.id}>
                        <Item item={item}/>
                    </li>
                    </ul>
                )

            })



    );

}

export default itemList