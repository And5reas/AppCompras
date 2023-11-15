import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

export default styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    rowView: {
        flexDirection: "row",
        alignItems: "center",
    },
    viewCampos: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.DelftBlue,
        padding: 10,
        borderRadius: 10,
        opacity: .7,
        borderWidth: 3,
        borderColor: COLORS.OldRose,
    },
    text: {
        fontSize: SIZES.text.large,
        color: COLORS.AmaranthPink,
        fontWeight: "bold",
        marginTop: 5,
    },
    textInput: {
        width: 230,
        borderBottomWidth: 3,
        borderColor: COLORS.TeaRose,
        color: COLORS.AmaranthPink,
        borderRadius: 10,
        marginTop: 10,
        fontSize: SIZES.text.medium,
        paddingLeft: 7
    },
    icon: {
        width: 115,
        height: 150,
    },
    imgShowPass: {
        display: "flex",
        marginLeft: 10,
        marginTop: 10
    },
});
