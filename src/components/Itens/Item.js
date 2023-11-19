import React, { useState } from "react";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Image } from "react-native";
import { icons } from "../../constants";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import styles from "./styles";

export default function Item({ onPress, renderRightActions }){
    
    const [counter, setCounter] = useState(1);

    const onClick = (sing) => {
        sing == "+"
        ? setCounter(counter + 1) 
        : (counter > 0)? setCounter(counter - 1)
        : setCounter(0);
    }

    return(
        <Swipeable renderRightActions={renderRightActions} >
            <TouchableWithoutFeedback onPress={ onPress }>
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
                    <Text style={styles.text}>{counter}</Text>
                    <TouchableOpacity onPress={() => onClick("-")}>
                        <Image 
                            source={icons.minus}
                            style={styles.iconSize}
                        />
                    </TouchableOpacity>
                    <Text style={styles.textCurrency}>R$</Text>
                    <Text style={styles.text}>12</Text>
                </View>
            </TouchableWithoutFeedback>
        </Swipeable>
    );
}

