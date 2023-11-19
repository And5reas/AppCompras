import React, { useState } from "react";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Image } from "react-native";
import { icons } from "../../constants";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import styles from "./styles";

export default function Item({ renderRightActions, itemProperties }){
    
    const [qtd, setQtd] = useState(1);

    const onClick = (sing) => {
        console.log(itemProperties)
        sing == "+"
        ? setQtd(qtd + 1) 
        : (qtd > 1)? setQtd(qtd - 1)
        : setQtd(1);
    }

    return(
        <Swipeable renderRightActions={renderRightActions} >
            <View style={styles.containerFlatList}>
                <Image 
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }}
                    style={styles.image}
                />
                <TouchableOpacity onPress={() => onClick("+")}>
                    <Image 
                        source={icons.plusSing}
                        style={styles.iconSize}
                    />
                </TouchableOpacity>
                <Text style={styles.text}>{qtd}</Text>
                <TouchableOpacity onPress={() => onClick("-")}>
                    <Image 
                        source={icons.minus}
                        style={styles.iconSize}
                    />
                </TouchableOpacity>
                <Text style={styles.textCurrency}>R$</Text>
                <Text style={styles.text}>{itemProperties.valorItem*qtd}</Text>
            </View>
        </Swipeable>
    );
}

