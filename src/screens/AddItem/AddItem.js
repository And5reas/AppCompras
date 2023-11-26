import { useEffect } from "react";
import { Keyboard, View } from "react-native";
import { Header, SimpleInput, SimpleButton, CameraProduto } from "../../components";
import styles from "./styles";
import { COLORS } from "../../constants";
import { useState } from "react";
import { cadastrarItemAPI, sendImageAPI } from "../../hooks";

export default function AddItem({ navigation }) {
    const [nmProduto, setNmProduto] = useState("");
    const [imgUri, setImgUri] = useState("");
    const [vlVarejo, setVlVarejo] = useState("");
    const [vlAtacado, setVlAtacado] = useState("");
    const [keyBoardShow, setKeyBoardShow] = useState(false);
    const [pictureNotTaken, setPictureNotTaken] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const cadastrarItem = new cadastrarItemAPI();
    const sendImage = new sendImageAPI();
    let msg = "";

    const ValidInfo = () => {
        if (nmProduto == "" || vlVarejo == ""){
            msg =  "Todos os compos devem estár preenchidos"
            return false
        }
        else if (imgUri == ""){
            msg =  "Tire uma foto do produto"
            return false
        }
        else return true
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
            <CameraProduto 
                image={imgUri} 
                setImage={setImgUri} 
                hideImage={keyBoardShow} 
                pictureNotTaken={pictureNotTaken} 
                setPictureNotTaken={setPictureNotTaken}
            />
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
                isLoading={isLoading}
                action={() => {
                    ValidInfo()
                    ?   (async() => {
                            setIsLoading(true)
                            await sendImage.sendImageAPI(imgUri);
                            if (vlAtacado == "") setVlAtacado("0");
                            await cadastrarItem.cadastrarItemAPI(nmProduto, vlVarejo - 0, vlAtacado - 0);
                            setNmProduto("");
                            setImgUri(" ");
                            setVlVarejo("");
                            setVlAtacado("");
                            setPictureNotTaken(true);
                            setIsLoading(false)
                            navigation.navigate("Home")
                        })()
                    :   console.log('batat')
                }}
            />
        </View>
    )
}
