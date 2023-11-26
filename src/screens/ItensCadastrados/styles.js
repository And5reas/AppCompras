import { StyleSheet } from "react-native"
import { COLORS, SIZES } from "../../constants"

export default styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.SpaceCader3
    },
    viewItem: {
        flexDirection: "row",
        backgroundColor: COLORS.AfricaViolet,
        width: SIZES.windowWidth - 16,
        height: 100,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: COLORS.Lavander1,
        alignItems: "center",
        padding: 8,
        margin: 8,
    },
    marginTop: {
        marginTop: 70
    },
    image: {
        width: 80,
        height: 80,
        borderWidth: 3,
        borderRadius: 5,
    },
    viewTextName: {
        marginLeft: 5,
        width: 150,
    },
    text: {
        fontSize: SIZES.text.large
    },
    textValor: {
        fontSize: SIZES.text.xsmall
    },
})