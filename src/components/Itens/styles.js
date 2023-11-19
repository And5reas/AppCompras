import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

export default styles = StyleSheet.create({
    container: {
        marginTop: 60
    },
    containerFlatList: {
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
    image: {
        width: 80,
        height: 80,
        borderWidth: 3,
        borderRadius: 5,
    },
    iconSize: {
        width: SIZES.tabBottomIcon,
        height: SIZES.tabBottomIcon,
        marginLeft: 10,
        marginRight: 10,
    },
    text: {
        fontSize: 25,
    },
    textCurrency: {
        fontSize: 25,
        marginLeft: 20
    },
    backgroundItem: {
        width: 100,
        backgroundColor: "#F00",
        marginTop: 10,
        paddingLeft: 30,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        height: 100,
    },
    iconRemoving: {
        width: 60,
        height: 70,
        marginRight: 25
    }
});

