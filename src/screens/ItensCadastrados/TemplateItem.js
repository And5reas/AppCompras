import { View, Text, Image } from "react-native";
import styles from "./styles";

export default function TemplateItem({ properties }){
    return(
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
    );
}