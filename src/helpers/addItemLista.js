import { ClassItem } from "../helpers";
import listaLocal from "../../compra.json"

export default addItemLista = (item) => {
    let cadastrar = true;
    listaLocal.forEach(e => {
        console.log(e)
        console.log(item)
        if (e['id'] === item['id']) cadastrar = false;
    })
    if (cadastrar) 
        listaLocal.push(new ClassItem(item['id'], item['nome'], item['img'], item['valorVarejo'], item['valorAtacado']));
}