import { View, Image, TouchableOpacity } from "react-native";
import { icons } from "../../constants";
import styles from "./styles";

export default function TabBarBottom(){
    return(
        <View style={styles.container}>
            <TouchableOpacity>
                <View style={styles.selectArea}>
                    <Image 
                        style={styles.itens}
                        source={icons.tapHome}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
}