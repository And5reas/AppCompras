import { View, FlatList } from "react-native";
import GestureHandleBackGround from "./GestureHandleBackGround";
import listaLocal from "../../../compra.json"
import ValorTotal from "./ValorTotal";
import Item from "./Item"
import styles from "./styles";

let setValorTotal = null;

export default function Itens({ listItens, setListItens }) {

    const getSetValorTotal = (get) => {
        setValorTotal = get
    }

    const handleDelete = item => {
        const newItem = listItens.filter(i => i.id !== item.id); // Fazendo uma lova lista sem o item
        listaLocal.splice(listaLocal.findIndex(i => i.id === item.id), 1) // Removendo o item da listaLocal
        setListItens(newItem)
        item.delete(setValorTotal)
    }

    return(
        <View style={styles.container}>
            <FlatList 
                data={listItens}
                renderItem={({item}) => <Item 
                    itemProperties={item}
                    renderRightActions={() => <GestureHandleBackGround onPress={() => handleDelete(item)} />}
                    setValorTotal={setValorTotal}
                />}
                keyExtractor={item => item.id}
                extraData={listItens}
            />
            <ValorTotal getSetValorTotal={getSetValorTotal} handleDelete={handleDelete} />
        </View>
    );
}