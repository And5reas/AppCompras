import { useState } from "react";
import { View, FlatList, Text, Image, TouchableOpacity } from "react-native";
import Item from "./Item"
import GestureHandleBackGround from "./GestureHandleBackGround";
import styles from "./styles";

export default function Itens() {

    const [listItens, setListItens] = useState([
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
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
                        renderRightActions={() => <GestureHandleBackGround onPress={() => handleDelete(item)} />}
                    />}
                keyExtractor={item => item.id}
                extraData={listItens}
            />
        </View>
    );
}