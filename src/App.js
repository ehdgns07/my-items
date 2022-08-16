import logo from './logo.svg';
import './App.css';

import {useState} from "react";

import itemForm from "./components/itemForm";
import mockItems from "./db/mock.json"
import ItemList from "./components/ItemList";

function App() {
  const [items, setItems] = useState(mockItems);


  return (
  <div>
  {/*<itemForm/>*/}
    <ItemList items={items}/>
  </div>
  );
}

export default App;
