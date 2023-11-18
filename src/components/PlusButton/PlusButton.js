import { TouchableNativeFeedback, View, Image } from "react-native";
import { icons } from "../../constants";
import styles from "./styles";

export default function PlusButton({ onPress }) {
    return(
        <TouchableNativeFeedback onPress={onPress}>
            <View style={styles.container}>
                <Image
                    source={icons.plus}
                    style={styles.plus}
                />
            </View>
        </TouchableNativeFeedback>
    );
}

