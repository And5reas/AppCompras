import { useState } from "react";
import { View, FlatList, Text } from "react-native";
import Item from "./Item"
import GestureHandleBackGround from "./GestureHandleBackGround";
import styles from "./styles";

export default function Itens({ listItens, setListItens }) {

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