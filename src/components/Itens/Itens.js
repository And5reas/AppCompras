import { View, FlatList, Text, Image, TouchableOpacity } from "react-native";
import { icons } from "../../constants";
import { useState } from "react";
import styles from "./styles";

export default function Itens() {

    const [qtd, setQtd] = useState(1)

    const DATA = [
        {qtd: qtd, nome: "andreas"},
        {qtd: qtd, nome: "sefudeou"}
    ]

    return(
        <View style={styles.container}>
            <FlatList 
                data={DATA}
                renderItem={({item}) => (
                    <View style={styles.containerFlatList}>
                        <Image 
                            source={{
                                uri: 'https://reactnative.dev/img/tiny_logo.png',
                              }}
                            style={styles.image}
                        />
                        <TouchableOpacity onPress={() => {
                            setQtd(item.qtd += 1)
                            console.log(item.qtd)
                        }}>
                            <Image 
                                source={icons.plusSing}
                                style={styles.iconSize}
                            />
                        </TouchableOpacity>
                        <Text style={styles.text}>{item.qtd}</Text>
                        <TouchableOpacity>
                            <Image 
                                source={icons.minus}
                                style={styles.iconSize}
                            />
                        </TouchableOpacity>
                        <Text style={styles.textCurrency}>R$</Text>
                        <Text style={styles.text}>{item.valorTotal}</Text>
                    </View>
                )}
                extraData={qtd}
            />
        </View>
    );
}