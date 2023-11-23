import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants"

export default styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.SpaceCader3,
    },
    text: {
        fontSize: SIZES.text.xLarge,
        backgroundColor: COLORS.MarianBlue,
        padding: 5,
        borderBottomWidth: 3,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    textInput: {
        backgroundColor: COLORS.MarianBlue,
        width: 220,
        fontSize: SIZES.text.medium,
        borderBottomWidth: 3,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        paddingRight: 10
    },
    button: {
        marginTop: 20,
        backgroundColor: "#00FF00",
        width: 200,
        height: 40
    }
});
