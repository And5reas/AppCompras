import { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { Header } from "../../components";
import { getItensAPI } from "../../hooks";
import TemplateItem from "./TemplateItem";
import styles from "./styles";

export default function ItensCadastrados(){
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState()
    const getItens = new getItensAPI()

    useEffect(() => {
        setIsLoading(true);
        async function fetchData() {
            const itens = await getItens.getItensAPI()
            setData(itens)
            setIsLoading(false);
        }
        fetchData();
    }, [])

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