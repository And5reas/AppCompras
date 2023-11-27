import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { View, FlatList } from "react-native";
import { Header } from "../../components";
import { getItensAPI } from "../../apis";
import TemplateItem from "./TemplateItem";
import styles from "./styles";

export default function ItensCadastrados(){
    const [data, setData] = useState()
    const isFocused = useIsFocused()
    const getItens = new getItensAPI()

    useEffect(() => {
        if (isFocused){
            async function fetchData() {
                const itens = await getItens.getItensAPI()
                setData(itens);
            }
            fetchData();
        }
    }, [isFocused])

    return (
        <View style={styles.container}>
            <Header title={"Pegar Item"} />
            <View style={styles.marginTop}>
                <FlatList 
                    data={data}
                    renderItem={({ item }) => <TemplateItem properties={item} />}
                    keyExtractor={item => item.id}
                    extraData={data}
                />
            </View>
        </View>
    );
}