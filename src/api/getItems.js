import axios from "axios";

export async function getItems(){
    return await axios.get("https://ehdgns07.github.io/items/img/mock.json");
}