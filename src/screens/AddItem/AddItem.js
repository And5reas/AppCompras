import { useEffect } from "react";
import { Keyboard, View } from "react-native";
import { Header, SimpleInput, SimpleButton, CameraEtiqueta } from "../../components";
import styles from "./styles";
import { COLORS } from "../../constants";
import { useState } from "react";

export default function AddItem() {
    const [imgUri, setImgUri] = useState("");
    const [nmProduto, setNmProduto] = useState("");
    const [vlVarejo, setVlVarejo] = useState("");
    const [vlAtacado, setVlAtacado] = useState("");
    const [keyBoardShow, setKeyBoardShow] = useState(false);

    const ValidInfo = () => {
        if (nmProduto == "" || vlVarejo == "" || vlAtacado == "")
            return "Todos os compos devem estár preenchidos"
        if (imgUri == "")
            return "Tire uma foto do produto"
        return "Cadastrar o produto via api"
    }

    useEffect(() => {
        const keyBoardShow = Keyboard.addListener("keyboardDidShow", () => setKeyBoardShow(true));
        const keyBoardHide = Keyboard.addListener("keyboardDidHide", () => setKeyBoardShow(false));
        return () => {
            keyBoardShow.remove();
            keyBoardHide.remove();
        }
    }, [])

    return(
        <View style={styles.container}>
            <Header title="Cadastrar Item" />
            <CameraEtiqueta image={imgUri} setImage={setImgUri} hideImage={keyBoardShow} />
            <View style={{flexDirection: "row", marginTop: 10}}>
                <SimpleInput 
                    nmField="Produto: "
                    nmFieldStyle={styles.text}
                    fieldStyle={[styles.textInput, {width: 200}]}
                    value={nmProduto}
                    changeText={char => setNmProduto(char)}
                    textAlign="right"
                    placeholder="Sabonete generico 90g"
                    placeholderTextColor={COLORS.OldRose}
                />
            </View>
            <View style={{flexDirection: "row", marginTop: 10}}>
                <SimpleInput 
                    nmField="Valor Varejo: "
                    nmFieldStyle={styles.text}
                    fieldStyle={[styles.textInput, {width: 155}]}
                    value={vlVarejo}
                    changeText={char => setVlVarejo(char)}
                    textAlign="right"
                    keyboardType="numeric"
                    placeholder="R$ 3.99"
                    placeholderTextColor={COLORS.OldRose}
                />
            </View>
            <View style={{flexDirection: "row", marginTop: 10}}>
                <SimpleInput 
                    nmField="Valor Atacado: "
                    nmFieldStyle={styles.text}
                    fieldStyle={[styles.textInput, {width: 135}]}
                    value={vlAtacado}
                    changeText={char => setVlAtacado(char)}
                    textAlign="right"
                    keyboardType="numeric"
                    placeholder="R$ 3.55"
                    placeholderTextColor={COLORS.OldRose}
                />
            </View>
            <SimpleButton 
                title="Adicionar Item"
                style={styles.button}
                textStyle={styles.text}
                action={() => {console.log(ValidInfo())}}
            />
        </View>
    )
}
