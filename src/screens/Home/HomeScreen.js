import { useEffect, useState } from "react";
import { View, StatusBar } from "react-native";
import { 
    PlusButton, 
    Header, 
    ModalCamera,
    Itens
} from "../../components";
import { ClassItem } from "../../helpers";
import styles from "./styles";

export default function HomeScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    const [listItens, setListItens] = useState();

    const listTest = [{id: 1, nome: 'leite', img: 'https://i.imgur.com/oU77k16.jpg', valorVarejo: 4.35, valorAtacado: 4.10, qtd: 1},
    {id: 2, nome: 'leite', img: 'https://i.imgur.com/oU77k16.jpg', valorVarejo: 4.35, valorAtacado: 4.10, qtd: 1},
    {id: 3, nome: 'leite', img: 'https://i.imgur.com/oU77k16.jpg', valorVarejo: 4.35, valorAtacado: 4.10, qtd: 1},
    {id: 4, nome: 'leite', img: 'https://i.imgur.com/oU77k16.jpg', valorVarejo: 4.35, valorAtacado: 4.10, qtd: 1},
    {id: 5, nome: 'Refri taubacana 2L Guarana', img: 'https://i.imgur.com/tp0X2NO.jpg', valorVarejo: 3.39, valorAtacado: 3.29, qtd: 1},
    {id: 6, nome: 'Refri taubacana 2L Guarana', img: 'https://i.imgur.com/tp0X2NO.jpg', valorVarejo: 3.39, valorAtacado: 3.29, qtd: 1},
    ]

    useEffect(() => {
        let newList = [];
        listTest.forEach(item => {
            try{
                newList.push(new ClassItem(item['id'], item['nome'], item['img'], item['valorVarejo'], item['valorAtacado'], item['qtd']))
            } catch (error) {
                console.log(`src/screens/HomeScreen: ${error}`);
            }
        });
        setListItens(newList)
    }, [])

    return(
        <View style={styles.container}>
            <Itens listItens={listItens} setListItens={setListItens} />
            <StatusBar barStyle="light-content" />
            <Header title="AppCompras" valorTotalHide={false} />
            <ModalCamera exibirModal={modalVisible} setStateModal={setModalVisible} />
            <PlusButton onPress={() => setModalVisible(true)} />
        </View>
    );
}