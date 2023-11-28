import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

export default styles = StyleSheet.create({
    container: {
        position: "absolute",
        backgroundColor: COLORS.DelftBlue,
        width: SIZES.windowWidth,
        top: 0,
        height: SIZES.tabBarHeight,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 3,
        shadowRadius: 30,
        shadowColor: COLORS.AmaranthPink,
        shadowOpacity: .3,
        shadowOffset: {
            height: 300,
        }
    },
    text: {
        fontSize: SIZES.text.xxLarge,
        color: COLORS.VistaBlue,
    },
    buttonSair: {
        position: "absolute",
        backgroundColor: COLORS.TeaRose,
        right: 20,
        padding: 10,
        borderRadius: 10,
    }
});