import { Dimensions } from "react-native";

const COLORS = {
    Eggplant: "#5A4048",
    OldRose: "#A97577",
    SpaceCader3: "#172140",
    SpaceCader1: "#192B53",
    SpaceCader2: "#313657",
    DelftBlue: "#2C375E",
    MarianBlue: "#23417C",
    YinMnBlue1: "#475EA2",
    YinMnBlue2: "#485EA3",
    SavoyBlue: "#616CB4",
    TrueBlue: "#4E70AF",
    VistaBlue: "#7391CF",
    PaleDogwood: "#F5CDC1",
    TeaRoseRed: "#F3B7B9",
    TeaRose: "#EEBBBF",
    OrchidPink: "#E5B0C6",
    LavanderPink: "#E4A9C5",
    AmaranthPink: "#DCA4B4",
    Lavander1: "#9A7BC7",
    Lavander2: "#A788CF",
    Lavander3: "#9A7ABF",
    TropicalIndigo: "#8F7AC7",
    Plum: "#CD8ED4",
    AfricaViolet: "#CB8ACC",
};

const SIZES = {
    text: {
        xSmall: 10,
        small: 12,
        medium: 16,
        large: 20,
        xLarge: 24,
        xxLarge: 32,
    },
    windowHeight: Dimensions.get("window").height,
    windowWidth: Dimensions.get("window").width,
    tabBottomIcon: 40,
    tabBarHeight: 60,
};

export { COLORS, SIZES };