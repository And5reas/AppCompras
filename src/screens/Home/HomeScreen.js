import { useEffect, useState } from "react";
import { View, StatusBar } from "react-native";
import { 
    PlusButton, 
    Header, 
    ModalCamera,
    Itens
} from "../../components";
import listaLocal from "../../../compra.json"
import { useIsFocused } from "@react-navigation/native";

import styles from "./styles";

export default function HomeScreen({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [listItens, setListItens] = useState([]);
    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused){
            if (listaLocal.length > listItens.length){
                setListItens(listaLocal)
            }
        }
    }, [isFocused])

    const leaving = () => {
        navigation.navigate("Login");
    }

    return(
        <View style={styles.container}>
            <Itens listItens={listItens} setListItens={setListItens} />
            <StatusBar barStyle="light-content" />
            <Header title="AppCompras" valorTotalHide={false} exit={true} onLeave={() => leaving()} />
            <ModalCamera exibirModal={modalVisible} setStateModal={setModalVisible} />
            <PlusButton onPress={() => setModalVisible(true)} />
        </View>
    );
}