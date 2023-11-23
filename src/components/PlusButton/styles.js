import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

export default styles = StyleSheet.create({
    container: {
        position: "absolute",
        width: 60,
        height: 60,
        borderRadius: 60/2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.TeaRoseRed,
        shadowRadius: 10,
        shadowColor: COLORS.AmaranthPink,
        shadowOpacity: 0.3,
        shadowOffset: {
            height: 10,
        },
        top: SIZES.windowHeight - SIZES.tabBarHeight*2 - 10,
        right: 10
    },
    camera: {
        width: SIZES.tabBottomIcon - 5.5,
        height: SIZES.tabBottomIcon - 15,
    }
});