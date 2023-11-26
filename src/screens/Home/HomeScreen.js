import { useState } from "react";
import { View, StatusBar } from "react-native";
import { 
    PlusButton, 
    Header, 
    ModalCamera,
    Itens
} from "../../components";
import styles from "./styles";

export default function HomeScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    const [total, setTotal] = useState(0);
    const [listItens, setListItens] = useState([
        {id: 1, nome: 'leite', img: 'https://i.imgur.com/oU77k16.jpg', valorVarejo: 4.35, valorAtacado: 4.10, qtd: 1},  
        {id: 2, nome: 'leite', img: 'https://i.imgur.com/oU77k16.jpg', valorVarejo: 4.35, valorAtacado: 4.10, qtd: 1},  
        {id: 3, nome: 'leite', img: 'https://i.imgur.com/oU77k16.jpg', valorVarejo: 4.35, valorAtacado: 4.10, qtd: 1},  
        {id: 4, nome: 'leite', img: 'https://i.imgur.com/oU77k16.jpg', valorVarejo: 4.35, valorAtacado: 4.10, qtd: 1},  
        {id: 5, nome: 'Refri taubacana 2L Guarana', img: 'https://i.imgur.com/tp0X2NO.jpg', valorVarejo: 3.39, valorAtacado: 3.29, qtd: 1},  
    ]);

    return(
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Itens listItens={listItens} setListItens={setListItens} />
            <Header title="AppCompras" valorTotalHide={false} />
            <ModalCamera exibirModal={modalVisible} setStateModal={setModalVisible} />
            <PlusButton onPress={() => setModalVisible(true)} />
        </View>
    );
}