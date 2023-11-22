import { View, Text } from "react-native";
import { useFonts } from 'expo-font';
import styles from "./styles";

export default function Header({ title }){
    const [fontsLoaded] = useFonts({
        'Chewy-Regular': require('../../assets/font/Chewy-Regular/Chewy-Regular.ttf'),
    });
    
    if (!fontsLoaded) {
        return null;
    }

    return(
        <View style={styles.container}>
            <Text style={[styles.text, {fontFamily: "Chewy-Regular"}]}>{title}</Text>
        </View>
    );
}