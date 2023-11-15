import { View, Text } from "react-native";
import { TabBarBottom, PlusButton, Header } from "../../components";
import styles from "./styles";

export default function HomeScreen() {
    return(
        <View style={styles.container}>
            <Text>Batata</Text>
            <Header />
            <PlusButton />
            <TabBarBottom />
        </View>
    );
}