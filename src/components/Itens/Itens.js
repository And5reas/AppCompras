import { useState } from "react";
import { View, FlatList, Text, Image, TouchableOpacity } from "react-native";
import Item from "./Item"
import GestureHandleBackGround from "./GestureHandleBackGround";
import styles from "./styles";

export default function Itens() {

    const [listItens, setListItens] = useState([
        {id: 1, valorItem: 3.78, nameItem: "Leite", image: require("../../../test/images/Leite.jpg")},  
        {id: 2, valorItem: 10.49, nameItem: "Refri", image: require("../../../test/images/Refri.jpg")},  
        {id: 3, valorItem: 18.99, nameItem: "Ovinhos", image: require("../../../test/images/Ovinhos.jpg")},  
    ]);

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