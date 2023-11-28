import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

export default styles = StyleSheet.create({
    containerTabBar: {
        backgroundColor: COLORS.PaleDogwood,
        flexGrow: .02,
    },
    selectArea: {
        borderBottomWidth: 2,
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
