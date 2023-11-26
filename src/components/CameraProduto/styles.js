import { StyleSheet } from "react-native";
import { SIZES } from "../../constants";

export default styles = StyleSheet.create({
    container: {

    },
    camera: {
        width: SIZES.cameraSize,
        height: SIZES.cameraSize,
    },
    cameraView: {
        width: SIZES.cameraSize + 5,
        height: SIZES.cameraSize + 5,
        borderWidth: 5,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        width: 150,
        backgroundColor: "#FFF9"
    },
    image: {
        width: SIZES.cameraSize,
        height: SIZES.cameraSize,
        borderRadius: 5,
    },
    resetImage: {
        position: "absolute",
        top: 10,
        left: 10,
        width: 40,
        height: 40
    },
    icon: {
        width: 30,
        height: 30,
        marginBottom: 18
    },
});
