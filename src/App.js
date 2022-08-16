import logo from './logo.svg';
import './App.css';

import {useState} from "react";

import ItemForm from "./components/ItemForm";
import mockItems from "./db/mock.json"
import ItemList from "./components/ItemList";

function App() {
  const [items, setItems] = useState(mockItems);
  const [soltedItmes, setSoltedItems] = useState([])

  const handleNewest = ()=> {
    const newEstItem =  items.sort((item1, item2)=> (item2.createdAt - item1.createdAt) )
    console.log(newEstItem);
    setItems([...newEstItem]);
  }


  return (
  <div>
  <ItemForm/>
    <button onClick={handleNewest}>최신순</button>
    <button>칼로리순</button>
    <ItemList items={items}/>

  </div>
  );
}

export default App;
