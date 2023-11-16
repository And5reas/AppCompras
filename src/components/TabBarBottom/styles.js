import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../constants";

export default styles = StyleSheet.create({
    container: {
        position: "absolute",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: COLORS.PaleDogwood,
        borderTopWidth: 3,
        flexGrow: .02,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: SIZES.tabBarHeight,
        top: SIZES.windowHeight - SIZES.tabBarHeight,
        width: SIZES.windowWidth,
    },
    selectArea: {
        height: SIZES.tabBarHeight,
        justifyContent: "center",
        ripple: [COLORS.OrchidPink, false, -1],
    },
    itens: {
        padding: 10,
        margin: 30,
        width: SIZES.tabBottomIcon,
        height: SIZES.tabBottomIcon,
    }
});