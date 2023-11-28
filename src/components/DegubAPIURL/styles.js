import { StyleSheet } from "react-native"
import { COLORS, SIZES } from "../../constants";

export default styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    textInput: {
        backgroundColor: COLORS.SpaceCader3,
        fontSize: SIZES.text.medium,
        color: COLORS.PaleDogwood
    }
});