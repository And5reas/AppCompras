import { useState } from "react";
import { View, StatusBar } from "react-native";
import { 
    TabBarBottom, 
    PlusButton, 
    Header, 
    ModalCamera,
    Itens
} from "../../components";
import styles from "./styles";

export default function HomeScreen() {
    const [modalVisible, setModalVisible] = useState(false);

    return(
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Header />
            <Itens />
            <ModalCamera exibirModal={modalVisible} setStateModal={setModalVisible} />
            <PlusButton onPress={() => setModalVisible(true)} />
            <TabBarBottom />
        </View>
    );
}