import { View, Text, TouchableNativeFeedback, ActivityIndicator } from "react-native";

import styles from "./styles";
import { COLORS } from "../../constants";

export default function SimpleButton(props){
    return(
        <TouchableNativeFeedback onPress={props.action} >
            <View style={[styles.container, props.styles]} >
                {props.isLoading 
                ? (<ActivityIndicator size="small" color={COLORS.Eggplant} />)
                : (<Text>{props.title}</Text>)}
            </View>
        </TouchableNativeFeedback>
    )
}

