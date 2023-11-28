import { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { Header } from "../../components";
import { getItensAPI } from "../../apis";
import TemplateItem from "./TemplateItem";
import styles from "./styles";

const getItens = new getItensAPI()

export default function ItensCadastrados({ route }){ 
    const [data, setData] = useState()

    useEffect(() => {
        if (route.params == undefined)
            route.params = true
        if (route.params){
            async function fetchData() {
                const itens = await getItens.getItensAPI()
                setData(itens);
            }
            fetchData();
            route.params = false
        }
    }, [route.params])

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