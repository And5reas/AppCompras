import { View, Image } from "react-native";
import { icons } from "../../constants";
import styles from "./styles";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function GestureHandleBackGround({ onPress }) {
    return(
        <TouchableWithoutFeedback onPress={ onPress }>
            <View style={styles.backgroundItem}>
                <Image
                    source={icons.removingItem}
                    style={styles.iconRemoving}
                />
            </View>
        </TouchableWithoutFeedback>
    );
}

