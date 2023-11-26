import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { icons } from "../../constants";
import { MultiplicarValorQtd } from "../../helpers";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import styles from "./styles";

export default function Item({ renderRightActions, itemProperties, setValorTotal }){
    
    const [qtd, setQtd] = useState(1);

    const onClick = (sing) => {
        sing == "+"
        ?   (
            itemProperties.qtd += 1,
            setValorTotal(itemProperties.getValorTotal('increment'))
            )
        :   (qtd > 1)? (
            itemProperties.qtd -= 1,
            setValorTotal(itemProperties.getValorTotal('decrement'))
            ) 
        : itemProperties.qtd = 1 ;
        setQtd(itemProperties.qtd)
    }

    return(
        <Swipeable renderRightActions={renderRightActions} >
            <View style={styles.containerFlatList}>
                <Image 
                    source={{uri: itemProperties.img}}
                    style={styles.image}
                />
                <View style={styles.viewTextName}>
                    <Text style={styles.textTitle} >{itemProperties.nome}</Text>
                </View>
                <View style={styles.ViewNormal}>
                    <View style={styles.ViewRow}>
                        <Text style={styles.text}>R${MultiplicarValorQtd(itemProperties.valorVarejo.toFixed(2), qtd)}</Text>
                    </View>
                    <View style={styles.ViewRow}>
                        <TouchableOpacity onPress={() => onClick("-")}>
                            <Image 
                                source={icons.minus}
                                style={styles.iconSize}
                            />
                        </TouchableOpacity>
                        <Text style={styles.text}>{qtd}</Text>
                        <TouchableOpacity onPress={() => onClick("+")}>
                            <Image 
                                source={icons.plusSing}
                                style={styles.iconSize}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Swipeable>
    );
}

