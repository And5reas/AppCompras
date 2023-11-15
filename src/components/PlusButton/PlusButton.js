import { TouchableNativeFeedback, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";

export default function PlusButton() {
    return(
        <TouchableNativeFeedback>
            <View style={styles.container}>
                <AntDesign name="plus" size={24} color="black" />
            </View>
        </TouchableNativeFeedback>
    );
}

