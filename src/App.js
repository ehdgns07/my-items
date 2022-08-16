import logo from './logo.svg';
import './App.css';

import {useState} from "react";

import ItemForm from "./components/ItemForm";
import mockItems from "./db/mock.json"
import ItemList from "./components/ItemList";

function App() {
  const [items, setItems] = useState(mockItems);
  const [order, setOrder] = useState('');

  // ver1
  // function handleNewest1() {
  //   const newEstItem = items.sort((item1, item2) => (item2.createdAt - item1.createdAt));
  //   return [...newEstItem]
  // }
  //
  // function handleCalorie1() {
  //   const newEstItem = items.sort((item1, item2) => (item2.calorie - item1.calorie));
  //   return [...newEstItem]
  // }
  ///////////////////////////////////////////////////////////////////////////////////////////////
  // function handleOrder (text) {
  //   console.log(e.target.name);
  //   let newEstItem = [];
  //   console.log(text === "createdAt")
  //   if(text === "createdAt") {
  //     newEstItem = items.sort((item1, item2) => (item2.createdAt - item1.createdAt))// 내림차순
  //   }
  //   setItems([...newEstItem]);
  // }

  //ver2
  const handleOrder = (e) => {
    const order = e.target.name;
    const newEstItem = items.sort((item1, item2) => (item2[order] - item1[order]));
    setItems([...newEstItem]);
  }

  // const handleCalorie = () => {
  //   const newEstItem =  items.sort((item1, item2)=> (item2.calorie - item1.calorie) )
  //   setItems([...newEstItem]);
  // }

  //ver3
  const handleNewest = ()=>{
    setOrder('createdAt');
  }
  const handleCalorie = ()=>{
    setOrder('calorie');
  }

  const orderedItems = items.sort((item1, item2) => (item2[order] - item1[order]));

  //삭제

  const handleDelete = (id) => {
    let newItems = items.filter(item => item.id !== id);
    setItems(newItems);
  }

  //추가



  return (
  <div>
  <ItemForm />

    {/*ver1*/}
    {/*<button name={"createdAt"} onClick={()=>{handleOrder("createdAt")}}>최신순</button>*/}
    {/*<button name={"createdAt"} onClick={handleOrder}>최신순</button>*/}

    {/*ver2*/}
    {/*<button name={"calorie"} onClick={handleOrder}>칼로리순</button>*/}

    {/*ver3*/}
    <button onClick={handleNewest}>최신순</button>
    <button onClick={handleCalorie}>칼로리순</button>
    <ItemList items={orderedItems} onDelete={handleDelete}/>

  </div>
  );
}

export default App;
