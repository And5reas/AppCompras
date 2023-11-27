import { View, Text, Image, TouchableOpacity } from "react-native";
import addItemLista from "../../helpers/addItemLista";
import styles from "./styles";

export default function TemplateItem({ properties }){
    return(
        <TouchableOpacity onPress={() => addItemLista(properties)}>
            <View style={styles.viewItem}>
                <Image 
                    source={{uri: properties.img}}
                    style={styles.image}
                />
                <View style={styles.viewTextName}>
                    <Text style={styles.text} >{properties.nome}</Text>
                </View>
                <View style={styles.viewTextName}>
                    <Text style={styles.textValor} >Varejo: R${properties.valorVarejo}</Text>
                    <Text style={styles.textValor} >Atacado: R${properties.valorAtacado}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}