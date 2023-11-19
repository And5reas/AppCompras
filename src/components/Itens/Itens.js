import { useState } from "react";
import { View, FlatList, Text, Image, TouchableOpacity } from "react-native";
import Item from "./Item"
import GestureHandleBackGround from "./GestureHandleBackGround";
import styles from "./styles";

export default function Itens() {

    const [listItens, setListItens] = useState([
        {id: 1, valorItem: 3.78, nameItem: "Leite"},
        {id: 2, valorItem: 10.49, nameItem: "Refri"},
        {id: 3, valorItem: 3.39, nameItem: "Refrigereco"},
        {id: 4, valorItem: 12.78, nameItem: "Ovo"},
    ])

    const handleDelete = item => {
        const newItem = listItens.filter(i => i.id !== item.id);
        setListItens(newItem)
    }

    return(
        <View style={styles.container}>
            <FlatList 
                data={listItens}
                renderItem={({item}) => 
                    <Item 
                        itemProperties={item}
                        renderRightActions={() => <GestureHandleBackGround onPress={() => handleDelete(item)} />}
                    />}
                keyExtractor={item => item.id}
                extraData={listItens}
            />
        </View>
    );
}