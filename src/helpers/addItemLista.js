import { ClassItem } from "../helpers";
import listaLocal from "../../compra.json"
import { AndroidToasts } from "../helpers"

const msgToasts = new AndroidToasts()

export default addItemLista = (item) => {
    let cadastrar = true;
    listaLocal.forEach(e => {
        if (e['id'] === item['id']) cadastrar = false;
    })
    if (cadastrar) {
        msgToasts.simpleToast("Item adicionado com Sucesso");
        listaLocal.push(new ClassItem(item['id'], item['nome'], item['img'], item['valorVarejo'], item['valorAtacado']));
    } else {
        msgToasts.simpleToast("Item já adicionado");
    }
}