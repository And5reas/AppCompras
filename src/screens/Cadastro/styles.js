import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

export default styles = StyleSheet.create({
    container:{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.Lavander1,
    },
    viewCampos: {
        backgroundColor: COLORS.SpaceCadet1,
        padding: 10,
        borderRadius: 10,
        opacity: .8,
        borderWidth: 3,
        borderColor: COLORS.OldRose,
    },
});
