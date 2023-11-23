import { View } from "react-native";
import { Header, SimpleInput, SimpleButton } from "../../components";
import styles from "./styles";

export default function AddItem() {
    return(
        <View style={styles.container}>
            <Header title="Cadastrar Item" />
            <View style={{flexDirection: "row", marginTop: 10}}>
                <SimpleInput 
                    nmField="Produto: "
                    nmFieldStyle={styles.text}
                    fieldStyle={[styles.textInput, {width: 200}]}
                    textAlign="right"
                />
            </View>
            <View style={{flexDirection: "row", marginTop: 10}}>
                <SimpleInput 
                    nmField="Valor Varejo: "
                    nmFieldStyle={styles.text}
                    fieldStyle={[styles.textInput, {width: 155}]}
                    textAlign="right"
                    keyboardType="numeric"
                />
            </View>
            <View style={{flexDirection: "row", marginTop: 10}}>
                <SimpleInput 
                    nmField="Valor Atacado: "
                    nmFieldStyle={styles.text}
                    fieldStyle={[styles.textInput, {width: 135}]}
                    textAlign="right"
                    keyboardType="numeric"
                />
            </View>
            <SimpleButton 
                title="Adicionar Item"
                style={styles.button}
                textStyle={styles.text}
            />
        </View>
    )
}
