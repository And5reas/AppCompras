import { 
    View, 
    Text, 
    TouchableNativeFeedback,
    ActivityIndicator,
    Image, 
} from "react-native";

import styles from "./styles";
import { COLORS } from "../../constants";

export default function SimpleButton({action, style, isLoading, title, icon=null, styleIcon}){
    return(
        <TouchableNativeFeedback onPress={action} >
            <View style={[styles.container, style]} >
                {isLoading 
                ? (<ActivityIndicator size="small" color={COLORS.Eggplant} />)
                : (<Text>{title}</Text>)}
                {icon != null
                ? <Image source={icon} style={styleIcon}></Image>
                : <></>}
                
            </View>
        </TouchableNativeFeedback>
    )
}

