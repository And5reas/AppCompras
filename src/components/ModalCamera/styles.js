import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

export default styles = StyleSheet.create({
    modal: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 100,
    },
    container: {
        justifyContent: "flex-start",
        alignItems: "center",
        width: 350,
        height: 410,
        backgroundColor: COLORS.YinMnBlue2,
        borderRadius: 20,
        borderWidth: 5,
        padding: 20
    },
    camera: {
        width: SIZES.cameraSize, 
        height: SIZES.cameraSize,
        justifyContent: "center",
        alignItems: "center",
    },
    cameraView: {
        width: SIZES.cameraSize + 10, 
        height: SIZES.cameraSize + 10,
        borderWidth: 5,
        borderRadius: 10
    },
    buttonCamera: {
        marginTop: 15, 
        width: 310,
        height: 50,
        backgroundColor: COLORS.TeaRoseRed,
        borderWidth: 3,
    },
    buttonClose: {
        position: "absolute",
        top: -10,
        right: -10,
        width: 50,
        height: 50,
    },
    iconSizeCamera: {
        width: 50,
        height: 36,
        marginBottom: 20,
    },
    iconClose:{
        width: 30,
        height: 30,
        marginBottom: 20,
    }
});
