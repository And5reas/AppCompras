import { useState, useEffect } from "react";
import { ClassItem } from "../../helpers";
import { View, Text } from "react-native";
import styles from "./styles";

export default function ValorTotal({ getSetValorTotal, handleDelete }){

    const [valorTotal, setValorTotal] = useState(0)

    useEffect(() => {
        setValorTotal(ClassItem.getValorTotalStatic())
    }, [handleDelete])
    
    getSetValorTotal(setValorTotal);

    return(
        <View style={styles.viewTotal}>
            <Text style={styles.totalText}>Valor total R$ {valorTotal.toFixed(2)}</Text>
        </View>
    )
}